// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#metadata DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#metadata}
  */
  readonly metadata: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata;
  /**
  * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#spec DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#spec}
  */
  readonly spec?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec;
}
export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#annotations DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#labels DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#name DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadataToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadataToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt {
  /**
  * 'lendablePercent' prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. This value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows. LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#lendable_percent DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#lendable_percent}
  */
  readonly lendablePercent?: number;
  /**
  * 'nominalConcurrencyShares' (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats nominally reserved for this priority level. This DOES NOT limit the dispatching from this priority level but affects the other priority levels through the borrowing mechanism. The server's concurrency limit (ServerCL) is divided among all the priority levels in proportion to their NCS values: NominalCL(i) = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k) Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#nominal_concurrency_shares DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#nominal_concurrency_shares}
  */
  readonly nominalConcurrencyShares?: number;
}

export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExemptToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lendable_percent: cdktf.numberToTerraform(struct!.lendablePercent),
    nominal_concurrency_shares: cdktf.numberToTerraform(struct!.nominalConcurrencyShares),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExemptToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lendable_percent: {
      value: cdktf.numberToHclTerraform(struct!.lendablePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nominal_concurrency_shares: {
      value: cdktf.numberToHclTerraform(struct!.nominalConcurrencyShares),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExemptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lendablePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lendablePercent = this._lendablePercent;
    }
    if (this._nominalConcurrencyShares !== undefined) {
      hasAnyValues = true;
      internalValueResult.nominalConcurrencyShares = this._nominalConcurrencyShares;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lendablePercent = undefined;
      this._nominalConcurrencyShares = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lendablePercent = value.lendablePercent;
      this._nominalConcurrencyShares = value.nominalConcurrencyShares;
    }
  }

  // lendable_percent - computed: false, optional: true, required: false
  private _lendablePercent?: number; 
  public get lendablePercent() {
    return this.getNumberAttribute('lendable_percent');
  }
  public set lendablePercent(value: number) {
    this._lendablePercent = value;
  }
  public resetLendablePercent() {
    this._lendablePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lendablePercentInput() {
    return this._lendablePercent;
  }

  // nominal_concurrency_shares - computed: false, optional: true, required: false
  private _nominalConcurrencyShares?: number; 
  public get nominalConcurrencyShares() {
    return this.getNumberAttribute('nominal_concurrency_shares');
  }
  public set nominalConcurrencyShares(value: number) {
    this._nominalConcurrencyShares = value;
  }
  public resetNominalConcurrencyShares() {
    this._nominalConcurrencyShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nominalConcurrencySharesInput() {
    return this._nominalConcurrencyShares;
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing {
  /**
  * 'handSize' is a small positive number that configures the shuffle sharding of requests into queues. When enqueuing a request at this priority level the request's flow identifier (a string pair) is hashed and the hash value is used to shuffle the list of queues and deal a hand of the size specified here. The request is put into one of the shortest queues in that hand. 'handSize' must be no larger than 'queues', and should be significantly smaller (so that a few heavy flows do not saturate most of the queues). See the user-facing documentation for more extensive guidance on setting this field. This field has a default value of 8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#hand_size DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#hand_size}
  */
  readonly handSize?: number;
  /**
  * 'queueLengthLimit' is the maximum number of requests allowed to be waiting in a given queue of this priority level at a time; excess requests are rejected. This value must be positive. If not specified, it will be defaulted to 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#queue_length_limit DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#queue_length_limit}
  */
  readonly queueLengthLimit?: number;
  /**
  * 'queues' is the number of queues for this priority level. The queues exist independently at each apiserver. The value must be positive. Setting it to 1 effectively precludes shufflesharding and thus makes the distinguisher method of associated flow schemas irrelevant. This field has a default value of 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#queues DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#queues}
  */
  readonly queues?: number;
}

export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuingToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hand_size: cdktf.numberToTerraform(struct!.handSize),
    queue_length_limit: cdktf.numberToTerraform(struct!.queueLengthLimit),
    queues: cdktf.numberToTerraform(struct!.queues),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuingToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hand_size: {
      value: cdktf.numberToHclTerraform(struct!.handSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_length_limit: {
      value: cdktf.numberToHclTerraform(struct!.queueLengthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queues: {
      value: cdktf.numberToHclTerraform(struct!.queues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.handSize = this._handSize;
    }
    if (this._queueLengthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLengthLimit = this._queueLengthLimit;
    }
    if (this._queues !== undefined) {
      hasAnyValues = true;
      internalValueResult.queues = this._queues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._handSize = undefined;
      this._queueLengthLimit = undefined;
      this._queues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._handSize = value.handSize;
      this._queueLengthLimit = value.queueLengthLimit;
      this._queues = value.queues;
    }
  }

  // hand_size - computed: false, optional: true, required: false
  private _handSize?: number; 
  public get handSize() {
    return this.getNumberAttribute('hand_size');
  }
  public set handSize(value: number) {
    this._handSize = value;
  }
  public resetHandSize() {
    this._handSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handSizeInput() {
    return this._handSize;
  }

  // queue_length_limit - computed: false, optional: true, required: false
  private _queueLengthLimit?: number; 
  public get queueLengthLimit() {
    return this.getNumberAttribute('queue_length_limit');
  }
  public set queueLengthLimit(value: number) {
    this._queueLengthLimit = value;
  }
  public resetQueueLengthLimit() {
    this._queueLengthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLengthLimitInput() {
    return this._queueLengthLimit;
  }

  // queues - computed: false, optional: true, required: false
  private _queues?: number; 
  public get queues() {
    return this.getNumberAttribute('queues');
  }
  public set queues(value: number) {
    this._queues = value;
  }
  public resetQueues() {
    this._queues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuesInput() {
    return this._queues;
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse {
  /**
  * QueuingConfiguration holds the configuration parameters for queuing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#queuing DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#queuing}
  */
  readonly queuing?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing;
  /**
  * 'type' is 'Queue' or 'Reject'. 'Queue' means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. 'Reject' means that requests that can not be executed upon arrival are rejected. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#type DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queuing: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuingToTerraform(struct!.queuing),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queuing: {
      value: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuingToHclTerraform(struct!.queuing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing",
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

export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queuing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queuing = this._queuing?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queuing.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queuing.internalValue = value.queuing;
      this._type = value.type;
    }
  }

  // queuing - computed: false, optional: true, required: false
  private _queuing = new DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuingOutputReference(this, "queuing");
  public get queuing() {
    return this._queuing;
  }
  public putQueuing(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseQueuing) {
    this._queuing.internalValue = value;
  }
  public resetQueuing() {
    this._queuing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuingInput() {
    return this._queuing.internalValue;
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
export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited {
  /**
  * 'borrowingLimitPercent', if present, configures a limit on how many seats this priority level can borrow from other priority levels. The limit is known as this level's BorrowingConcurrencyLimit (BorrowingCL) and is a limit on the total number of seats that this level may borrow at any one time. This field holds the ratio of that limit to the level's nominal concurrency limit. When this field is non-nil, it must hold a non-negative integer and the limit is calculated as follows. BorrowingCL(i) = round( NominalCL(i) * borrowingLimitPercent(i)/100.0 ) The value of this field can be more than 100, implying that this priority level can borrow a number of seats that is greater than its own nominal concurrency limit (NominalCL). When this field is left 'nil', the limit is effectively infinite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#borrowing_limit_percent DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#borrowing_limit_percent}
  */
  readonly borrowingLimitPercent?: number;
  /**
  * 'lendablePercent' prescribes the fraction of the level's NominalCL that can be borrowed by other priority levels. The value of this field must be between 0 and 100, inclusive, and it defaults to 0. The number of seats that other levels can borrow from this level, known as this level's LendableConcurrencyLimit (LendableCL), is defined as follows. LendableCL(i) = round( NominalCL(i) * lendablePercent(i)/100.0 )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#lendable_percent DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#lendable_percent}
  */
  readonly lendablePercent?: number;
  /**
  * LimitResponse defines how to handle requests that can not be executed right now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#limit_response DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#limit_response}
  */
  readonly limitResponse?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse;
  /**
  * 'nominalConcurrencyShares' (NCS) contributes to the computation of the NominalConcurrencyLimit (NominalCL) of this level. This is the number of execution seats available at this priority level. This is used both for requests dispatched from this priority level as well as requests dispatched from other priority levels borrowing seats from this level. The server's concurrency limit (ServerCL) is divided among the Limited priority levels in proportion to their NCS values: NominalCL(i) = ceil( ServerCL * NCS(i) / sum_ncs ) sum_ncs = sum[priority level k] NCS(k) Bigger numbers mean a larger nominal concurrency limit, at the expense of every other priority level. This field has a default value of 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#nominal_concurrency_shares DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#nominal_concurrency_shares}
  */
  readonly nominalConcurrencyShares?: number;
}

export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    borrowing_limit_percent: cdktf.numberToTerraform(struct!.borrowingLimitPercent),
    lendable_percent: cdktf.numberToTerraform(struct!.lendablePercent),
    limit_response: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseToTerraform(struct!.limitResponse),
    nominal_concurrency_shares: cdktf.numberToTerraform(struct!.nominalConcurrencyShares),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    borrowing_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.borrowingLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lendable_percent: {
      value: cdktf.numberToHclTerraform(struct!.lendablePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_response: {
      value: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseToHclTerraform(struct!.limitResponse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse",
    },
    nominal_concurrency_shares: {
      value: cdktf.numberToHclTerraform(struct!.nominalConcurrencyShares),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._borrowingLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.borrowingLimitPercent = this._borrowingLimitPercent;
    }
    if (this._lendablePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.lendablePercent = this._lendablePercent;
    }
    if (this._limitResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitResponse = this._limitResponse?.internalValue;
    }
    if (this._nominalConcurrencyShares !== undefined) {
      hasAnyValues = true;
      internalValueResult.nominalConcurrencyShares = this._nominalConcurrencyShares;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._borrowingLimitPercent = undefined;
      this._lendablePercent = undefined;
      this._limitResponse.internalValue = undefined;
      this._nominalConcurrencyShares = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._borrowingLimitPercent = value.borrowingLimitPercent;
      this._lendablePercent = value.lendablePercent;
      this._limitResponse.internalValue = value.limitResponse;
      this._nominalConcurrencyShares = value.nominalConcurrencyShares;
    }
  }

  // borrowing_limit_percent - computed: false, optional: true, required: false
  private _borrowingLimitPercent?: number; 
  public get borrowingLimitPercent() {
    return this.getNumberAttribute('borrowing_limit_percent');
  }
  public set borrowingLimitPercent(value: number) {
    this._borrowingLimitPercent = value;
  }
  public resetBorrowingLimitPercent() {
    this._borrowingLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borrowingLimitPercentInput() {
    return this._borrowingLimitPercent;
  }

  // lendable_percent - computed: false, optional: true, required: false
  private _lendablePercent?: number; 
  public get lendablePercent() {
    return this.getNumberAttribute('lendable_percent');
  }
  public set lendablePercent(value: number) {
    this._lendablePercent = value;
  }
  public resetLendablePercent() {
    this._lendablePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lendablePercentInput() {
    return this._lendablePercent;
  }

  // limit_response - computed: false, optional: true, required: false
  private _limitResponse = new DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponseOutputReference(this, "limit_response");
  public get limitResponse() {
    return this._limitResponse;
  }
  public putLimitResponse(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedLimitResponse) {
    this._limitResponse.internalValue = value;
  }
  public resetLimitResponse() {
    this._limitResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitResponseInput() {
    return this._limitResponse.internalValue;
  }

  // nominal_concurrency_shares - computed: false, optional: true, required: false
  private _nominalConcurrencyShares?: number; 
  public get nominalConcurrencyShares() {
    return this.getNumberAttribute('nominal_concurrency_shares');
  }
  public set nominalConcurrencyShares(value: number) {
    this._nominalConcurrencyShares = value;
  }
  public resetNominalConcurrencyShares() {
    this._nominalConcurrencyShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nominalConcurrencySharesInput() {
    return this._nominalConcurrencyShares;
  }
}
export interface DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec {
  /**
  * ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the 'spec'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#exempt DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#exempt}
  */
  readonly exempt?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt;
  /**
  * LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues: - How are requests for this priority level limited? - What should be done with requests that exceed the limit?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#limited DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#limited}
  */
  readonly limited?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited;
  /**
  * 'type' indicates whether this priority level is subject to limitation on request execution. A value of ''Exempt'' means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels. A value of ''Limited'' means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#type DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest#type}
  */
  readonly type: string;
}

export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecToTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exempt: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExemptToTerraform(struct!.exempt),
    limited: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedToTerraform(struct!.limited),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecToHclTerraform(struct?: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exempt: {
      value: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExemptToHclTerraform(struct!.exempt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt",
    },
    limited: {
      value: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedToHclTerraform(struct!.limited),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited",
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

export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exempt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exempt = this._exempt?.internalValue;
    }
    if (this._limited?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limited = this._limited?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exempt.internalValue = undefined;
      this._limited.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exempt.internalValue = value.exempt;
      this._limited.internalValue = value.limited;
      this._type = value.type;
    }
  }

  // exempt - computed: false, optional: true, required: false
  private _exempt = new DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExemptOutputReference(this, "exempt");
  public get exempt() {
    return this._exempt;
  }
  public putExempt(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecExempt) {
    this._exempt.internalValue = value;
  }
  public resetExempt() {
    this._exempt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptInput() {
    return this._exempt.internalValue;
  }

  // limited - computed: false, optional: true, required: false
  private _limited = new DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimitedOutputReference(this, "limited");
  public get limited() {
    return this._limited;
  }
  public putLimited(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecLimited) {
    this._limited.internalValue = value;
  }
  public resetLimited() {
    this._limited.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitedInput() {
    return this._limited.internalValue;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest k8s_flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest}
*/
export class DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest to import
  * @param importFromId The id of the existing DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest k8s_flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_flowcontrol_apiserver_k8s_io_priority_level_configuration_v1beta3_manifest',
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
  private _metadata = new DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec) {
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
      metadata: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestMetadata",
      },
      spec: {
        value: dataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SFlowcontrolApiserverK8SIoPriorityLevelConfigurationV1Beta3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
