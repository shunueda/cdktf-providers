// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#metadata DataK8SHazelcastComWanReplicationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata;
  /**
  * WanReplicationSpec defines the desired state of WanReplication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#spec DataK8SHazelcastComWanReplicationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec;
}
export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#annotations DataK8SHazelcastComWanReplicationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#labels DataK8SHazelcastComWanReplicationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#name DataK8SHazelcastComWanReplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#namespace DataK8SHazelcastComWanReplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement {
  /**
  * Timeout represents the time in milliseconds the source cluster waits for the acknowledgement. After timeout, the events will be resent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#timeout DataK8SHazelcastComWanReplicationV1Alpha1Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Type represents how a batch of replication events is considered successfully replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#type DataK8SHazelcastComWanReplicationV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgementToTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgementToHclTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
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

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch {
  /**
  * MaximumDelay represents the maximum delay in milliseconds. If the batch size is not reached, the events will be sent after the maximum delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#maximum_delay DataK8SHazelcastComWanReplicationV1Alpha1Manifest#maximum_delay}
  */
  readonly maximumDelay?: number;
  /**
  * Size represents the maximum batch size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#size DataK8SHazelcastComWanReplicationV1Alpha1Manifest#size}
  */
  readonly size?: number;
}

export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatchToTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_delay: cdktf.numberToTerraform(struct!.maximumDelay),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatchToHclTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_delay: {
      value: cdktf.numberToHclTerraform(struct!.maximumDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumDelay = this._maximumDelay;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximumDelay = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximumDelay = value.maximumDelay;
      this._size = value.size;
    }
  }

  // maximum_delay - computed: false, optional: true, required: false
  private _maximumDelay?: number; 
  public get maximumDelay() {
    return this.getNumberAttribute('maximum_delay');
  }
  public set maximumDelay(value: number) {
    this._maximumDelay = value;
  }
  public resetMaximumDelay() {
    this._maximumDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumDelayInput() {
    return this._maximumDelay;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue {
  /**
  * Capacity is the total capacity of WAN queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#capacity DataK8SHazelcastComWanReplicationV1Alpha1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * FullBehavior represents the behavior of the new arrival when the queue is full.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#full_behavior DataK8SHazelcastComWanReplicationV1Alpha1Manifest#full_behavior}
  */
  readonly fullBehavior?: string;
}

export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueueToTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    full_behavior: cdktf.stringToTerraform(struct!.fullBehavior),
  }
}


export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueueToHclTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity: {
      value: cdktf.numberToHclTerraform(struct!.capacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_behavior: {
      value: cdktf.stringToHclTerraform(struct!.fullBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._fullBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBehavior = this._fullBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._fullBehavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._fullBehavior = value.fullBehavior;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // full_behavior - computed: false, optional: true, required: false
  private _fullBehavior?: string; 
  public get fullBehavior() {
    return this.getStringAttribute('full_behavior');
  }
  public set fullBehavior(value: string) {
    this._fullBehavior = value;
  }
  public resetFullBehavior() {
    this._fullBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBehaviorInput() {
    return this._fullBehavior;
  }
}
export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources {
  /**
  * Kind is the kind of custom resource to which WAN replication applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#kind DataK8SHazelcastComWanReplicationV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the name of custom resource to which WAN replication applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#name DataK8SHazelcastComWanReplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesOutputReference {
    return new DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec {
  /**
  * Acknowledgement is the configuration for the condition when the next batch of WAN events are sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#acknowledgement DataK8SHazelcastComWanReplicationV1Alpha1Manifest#acknowledgement}
  */
  readonly acknowledgement?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement;
  /**
  * Batch is the configuration for WAN events batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#batch DataK8SHazelcastComWanReplicationV1Alpha1Manifest#batch}
  */
  readonly batch?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch;
  /**
  * Endpoints is the target cluster comma separated endpoint list .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#endpoints DataK8SHazelcastComWanReplicationV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * Queue is the configuration for WAN events queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#queue DataK8SHazelcastComWanReplicationV1Alpha1Manifest#queue}
  */
  readonly queue?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue;
  /**
  * Resources is the list of custom resources to which WAN replication applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#resources DataK8SHazelcastComWanReplicationV1Alpha1Manifest#resources}
  */
  readonly resources: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources[] | cdktf.IResolvable;
  /**
  * SyncConsistencyCheckStrategy is the strategy for checking the consistency of data between replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#sync_consistency_check_strategy DataK8SHazelcastComWanReplicationV1Alpha1Manifest#sync_consistency_check_strategy}
  */
  readonly syncConsistencyCheckStrategy?: string;
  /**
  * ClusterName is the clusterName field of the target Hazelcast resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#target_cluster_name DataK8SHazelcastComWanReplicationV1Alpha1Manifest#target_cluster_name}
  */
  readonly targetClusterName: string;
}

export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acknowledgement: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgementToTerraform(struct!.acknowledgement),
    batch: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatchToTerraform(struct!.batch),
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    queue: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueueToTerraform(struct!.queue),
    resources: cdktf.listMapper(dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesToTerraform, false)(struct!.resources),
    sync_consistency_check_strategy: cdktf.stringToTerraform(struct!.syncConsistencyCheckStrategy),
    target_cluster_name: cdktf.stringToTerraform(struct!.targetClusterName),
  }
}


export function dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acknowledgement: {
      value: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgementToHclTerraform(struct!.acknowledgement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement",
    },
    batch: {
      value: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch",
    },
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesList",
    },
    sync_consistency_check_strategy: {
      value: cdktf.stringToHclTerraform(struct!.syncConsistencyCheckStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.targetClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgement = this._acknowledgement?.internalValue;
    }
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._syncConsistencyCheckStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncConsistencyCheckStrategy = this._syncConsistencyCheckStrategy;
    }
    if (this._targetClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetClusterName = this._targetClusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acknowledgement.internalValue = undefined;
      this._batch.internalValue = undefined;
      this._endpoints = undefined;
      this._queue.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._syncConsistencyCheckStrategy = undefined;
      this._targetClusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acknowledgement.internalValue = value.acknowledgement;
      this._batch.internalValue = value.batch;
      this._endpoints = value.endpoints;
      this._queue.internalValue = value.queue;
      this._resources.internalValue = value.resources;
      this._syncConsistencyCheckStrategy = value.syncConsistencyCheckStrategy;
      this._targetClusterName = value.targetClusterName;
    }
  }

  // acknowledgement - computed: false, optional: true, required: false
  private _acknowledgement = new DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgementOutputReference(this, "acknowledgement");
  public get acknowledgement() {
    return this._acknowledgement;
  }
  public putAcknowledgement(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecAcknowledgement) {
    this._acknowledgement.internalValue = value;
  }
  public resetAcknowledgement() {
    this._acknowledgement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgementInput() {
    return this._acknowledgement.internalValue;
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // queue - computed: false, optional: true, required: false
  private _queue = new DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sync_consistency_check_strategy - computed: false, optional: true, required: false
  private _syncConsistencyCheckStrategy?: string; 
  public get syncConsistencyCheckStrategy() {
    return this.getStringAttribute('sync_consistency_check_strategy');
  }
  public set syncConsistencyCheckStrategy(value: string) {
    this._syncConsistencyCheckStrategy = value;
  }
  public resetSyncConsistencyCheckStrategy() {
    this._syncConsistencyCheckStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConsistencyCheckStrategyInput() {
    return this._syncConsistencyCheckStrategy;
  }

  // target_cluster_name - computed: false, optional: false, required: true
  private _targetClusterName?: string; 
  public get targetClusterName() {
    return this.getStringAttribute('target_cluster_name');
  }
  public set targetClusterName(value: string) {
    this._targetClusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetClusterNameInput() {
    return this._targetClusterName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest k8s_hazelcast_com_wan_replication_v1alpha1_manifest}
*/
export class DataK8SHazelcastComWanReplicationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hazelcast_com_wan_replication_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHazelcastComWanReplicationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHazelcastComWanReplicationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHazelcastComWanReplicationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHazelcastComWanReplicationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hazelcast_com_wan_replication_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/hazelcast_com_wan_replication_v1alpha1_manifest k8s_hazelcast_com_wan_replication_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHazelcastComWanReplicationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHazelcastComWanReplicationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hazelcast_com_wan_replication_v1alpha1_manifest',
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
  private _metadata = new DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComWanReplicationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHazelcastComWanReplicationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComWanReplicationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
