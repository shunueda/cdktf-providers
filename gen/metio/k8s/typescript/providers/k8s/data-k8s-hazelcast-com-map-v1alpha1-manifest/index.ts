// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHazelcastComMapV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#metadata DataK8SHazelcastComMapV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SHazelcastComMapV1Alpha1ManifestMetadata;
  /**
  * MapSpec defines the desired state of Hazelcast Map Config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#spec DataK8SHazelcastComMapV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SHazelcastComMapV1Alpha1ManifestSpec;
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#annotations DataK8SHazelcastComMapV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#labels DataK8SHazelcastComMapV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#name DataK8SHazelcastComMapV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#namespace DataK8SHazelcastComMapV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHazelcastComMapV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHazelcastComMapV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes {
  /**
  * Name of the extractor class https://docs.hazelcast.com/hazelcast/latest/query/predicate-overview#implementing-a-valueextractor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#extractor_class_name DataK8SHazelcastComMapV1Alpha1Manifest#extractor_class_name}
  */
  readonly extractorClassName: string;
  /**
  * Name of the attribute https://docs.hazelcast.com/hazelcast/latest/query/predicate-overview#creating-custom-query-attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#name DataK8SHazelcastComMapV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extractor_class_name: cdktf.stringToTerraform(struct!.extractorClassName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extractor_class_name: {
      value: cdktf.stringToHclTerraform(struct!.extractorClassName),
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

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractorClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractorClassName = this._extractorClassName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extractorClassName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extractorClassName = value.extractorClassName;
      this._name = value.name;
    }
  }

  // extractor_class_name - computed: false, optional: false, required: true
  private _extractorClassName?: string; 
  public get extractorClassName() {
    return this.getStringAttribute('extractor_class_name');
  }
  public set extractorClassName(value: string) {
    this._extractorClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extractorClassNameInput() {
    return this._extractorClassName;
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

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesOutputReference {
    return new DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners {
  /**
  * ClassName is the fully qualified name of the class that implements any of the Listener interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#class_name DataK8SHazelcastComMapV1Alpha1Manifest#class_name}
  */
  readonly className: string;
  /**
  * IncludeValues is an optional attribute that indicates whether the event will contain the map value. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#include_values DataK8SHazelcastComMapV1Alpha1Manifest#include_values}
  */
  readonly includeValues?: boolean | cdktf.IResolvable;
  /**
  * Local is an optional attribute that indicates whether the map on the local member can be listened to. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#local DataK8SHazelcastComMapV1Alpha1Manifest#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    include_values: cdktf.booleanToTerraform(struct!.includeValues),
    local: cdktf.booleanToTerraform(struct!.local),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_values: {
      value: cdktf.booleanToHclTerraform(struct!.includeValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local: {
      value: cdktf.booleanToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._includeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeValues = this._includeValues;
    }
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._includeValues = undefined;
      this._local = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._includeValues = value.includeValues;
      this._local = value.local;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // include_values - computed: false, optional: true, required: false
  private _includeValues?: boolean | cdktf.IResolvable; 
  public get includeValues() {
    return this.getBooleanAttribute('include_values');
  }
  public set includeValues(value: boolean | cdktf.IResolvable) {
    this._includeValues = value;
  }
  public resetIncludeValues() {
    this._includeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeValuesInput() {
    return this._includeValues;
  }

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersOutputReference {
    return new DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal {
  /**
  * Capacity sets the capacity of the ringbuffer underlying the event journal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#capacity DataK8SHazelcastComMapV1Alpha1Manifest#capacity}
  */
  readonly capacity?: number;
  /**
  * TimeToLiveSeconds indicates how long the items remain in the event journal before they are expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#time_to_live_seconds DataK8SHazelcastComMapV1Alpha1Manifest#time_to_live_seconds}
  */
  readonly timeToLiveSeconds?: number;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournalToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    time_to_live_seconds: cdktf.numberToTerraform(struct!.timeToLiveSeconds),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournalToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal | cdktf.IResolvable): any {
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
    time_to_live_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity;
    }
    if (this._timeToLiveSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveSeconds = this._timeToLiveSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacity = undefined;
      this._timeToLiveSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacity = value.capacity;
      this._timeToLiveSeconds = value.timeToLiveSeconds;
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

  // time_to_live_seconds - computed: false, optional: true, required: false
  private _timeToLiveSeconds?: number; 
  public get timeToLiveSeconds() {
    return this.getNumberAttribute('time_to_live_seconds');
  }
  public set timeToLiveSeconds(value: number) {
    this._timeToLiveSeconds = value;
  }
  public resetTimeToLiveSeconds() {
    this._timeToLiveSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveSecondsInput() {
    return this._timeToLiveSeconds;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction {
  /**
  * Eviction policy to be applied when map reaches its max size according to the max size policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#eviction_policy DataK8SHazelcastComMapV1Alpha1Manifest#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Max size of the map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#max_size DataK8SHazelcastComMapV1Alpha1Manifest#max_size}
  */
  readonly maxSize?: number;
  /**
  * Policy for deciding if the maxSize is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#max_size_policy DataK8SHazelcastComMapV1Alpha1Manifest#max_size_policy}
  */
  readonly maxSizePolicy?: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecEvictionToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    max_size_policy: cdktf.stringToTerraform(struct!.maxSizePolicy),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecEvictionToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size_policy: {
      value: cdktf.stringToHclTerraform(struct!.maxSizePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecEvictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._maxSizePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizePolicy = this._maxSizePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evictionPolicy = undefined;
      this._maxSize = undefined;
      this._maxSizePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evictionPolicy = value.evictionPolicy;
      this._maxSize = value.maxSize;
      this._maxSizePolicy = value.maxSizePolicy;
    }
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // max_size_policy - computed: false, optional: true, required: false
  private _maxSizePolicy?: string; 
  public get maxSizePolicy() {
    return this.getStringAttribute('max_size_policy');
  }
  public set maxSizePolicy(value: string) {
    this._maxSizePolicy = value;
  }
  public resetMaxSizePolicy() {
    this._maxSizePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizePolicyInput() {
    return this._maxSizePolicy;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#unique_key DataK8SHazelcastComMapV1Alpha1Manifest#unique_key}
  */
  readonly uniqueKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#unique_key_transition DataK8SHazelcastComMapV1Alpha1Manifest#unique_key_transition}
  */
  readonly uniqueKeyTransition: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptionsToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unique_key: cdktf.stringToTerraform(struct!.uniqueKey),
    unique_key_transition: cdktf.stringToTerraform(struct!.uniqueKeyTransition),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptionsToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unique_key: {
      value: cdktf.stringToHclTerraform(struct!.uniqueKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_key_transition: {
      value: cdktf.stringToHclTerraform(struct!.uniqueKeyTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uniqueKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKey = this._uniqueKey;
    }
    if (this._uniqueKeyTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueKeyTransition = this._uniqueKeyTransition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uniqueKey = undefined;
      this._uniqueKeyTransition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uniqueKey = value.uniqueKey;
      this._uniqueKeyTransition = value.uniqueKeyTransition;
    }
  }

  // unique_key - computed: false, optional: false, required: true
  private _uniqueKey?: string; 
  public get uniqueKey() {
    return this.getStringAttribute('unique_key');
  }
  public set uniqueKey(value: string) {
    this._uniqueKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyInput() {
    return this._uniqueKey;
  }

  // unique_key_transition - computed: false, optional: false, required: true
  private _uniqueKeyTransition?: string; 
  public get uniqueKeyTransition() {
    return this.getStringAttribute('unique_key_transition');
  }
  public set uniqueKeyTransition(value: string) {
    this._uniqueKeyTransition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueKeyTransitionInput() {
    return this._uniqueKeyTransition;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes {
  /**
  * Attributes of the index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#attributes DataK8SHazelcastComMapV1Alpha1Manifest#attributes}
  */
  readonly attributes?: string[];
  /**
  * Options for 'BITMAP' index type. See https://docs.hazelcast.com/hazelcast/latest/query/indexing-maps#configuring-bitmap-indexes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#bit_map_index_options DataK8SHazelcastComMapV1Alpha1Manifest#bit_map_index_options}
  */
  readonly bitMapIndexOptions?: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions;
  /**
  * Name of the index config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#name DataK8SHazelcastComMapV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Type of the index. See https://docs.hazelcast.com/hazelcast/latest/query/indexing-maps#index-types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#type DataK8SHazelcastComMapV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributes),
    bit_map_index_options: dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptionsToTerraform(struct!.bitMapIndexOptions),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bit_map_index_options: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptionsToHclTerraform(struct!.bitMapIndexOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions",
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

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._bitMapIndexOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitMapIndexOptions = this._bitMapIndexOptions?.internalValue;
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

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._bitMapIndexOptions.internalValue = undefined;
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
      this._attributes = value.attributes;
      this._bitMapIndexOptions.internalValue = value.bitMapIndexOptions;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // bit_map_index_options - computed: false, optional: true, required: false
  private _bitMapIndexOptions = new DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptionsOutputReference(this, "bit_map_index_options");
  public get bitMapIndexOptions() {
    return this._bitMapIndexOptions;
  }
  public putBitMapIndexOptions(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesBitMapIndexOptions) {
    this._bitMapIndexOptions.internalValue = value;
  }
  public resetBitMapIndexOptions() {
    this._bitMapIndexOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitMapIndexOptionsInput() {
    return this._bitMapIndexOptions.internalValue;
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

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesList extends cdktf.ComplexList {
  public internalValue? : DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesOutputReference {
    return new DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore {
  /**
  * Name of your class implementing MapLoader and/or MapStore interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#class_name DataK8SHazelcastComMapV1Alpha1Manifest#class_name}
  */
  readonly className: string;
  /**
  * Sets the initial entry loading mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#initial_mode DataK8SHazelcastComMapV1Alpha1Manifest#initial_mode}
  */
  readonly initialMode?: string;
  /**
  * Properties can be used for giving information to the MapStore implementation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#properties_secret_name DataK8SHazelcastComMapV1Alpha1Manifest#properties_secret_name}
  */
  readonly propertiesSecretName?: string;
  /**
  * Used to create batches when writing to map store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#write_batch_size DataK8SHazelcastComMapV1Alpha1Manifest#write_batch_size}
  */
  readonly writeBatchSize?: number;
  /**
  * It is meaningful if you are using write behind in MapStore. When it is set to true, only the latest store operation on a key during the write-delay-seconds will be reflected to MapStore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#write_coalescing DataK8SHazelcastComMapV1Alpha1Manifest#write_coalescing}
  */
  readonly writeCoalescing?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds to delay the storing of entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#write_delay_seconds DataK8SHazelcastComMapV1Alpha1Manifest#write_delay_seconds}
  */
  readonly writeDelaySeconds?: number;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecMapStoreToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_name: cdktf.stringToTerraform(struct!.className),
    initial_mode: cdktf.stringToTerraform(struct!.initialMode),
    properties_secret_name: cdktf.stringToTerraform(struct!.propertiesSecretName),
    write_batch_size: cdktf.numberToTerraform(struct!.writeBatchSize),
    write_coalescing: cdktf.booleanToTerraform(struct!.writeCoalescing),
    write_delay_seconds: cdktf.numberToTerraform(struct!.writeDelaySeconds),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecMapStoreToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_mode: {
      value: cdktf.stringToHclTerraform(struct!.initialMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.propertiesSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.writeBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_coalescing: {
      value: cdktf.booleanToHclTerraform(struct!.writeCoalescing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.writeDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._initialMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialMode = this._initialMode;
    }
    if (this._propertiesSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertiesSecretName = this._propertiesSecretName;
    }
    if (this._writeBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeBatchSize = this._writeBatchSize;
    }
    if (this._writeCoalescing !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCoalescing = this._writeCoalescing;
    }
    if (this._writeDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeDelaySeconds = this._writeDelaySeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._className = undefined;
      this._initialMode = undefined;
      this._propertiesSecretName = undefined;
      this._writeBatchSize = undefined;
      this._writeCoalescing = undefined;
      this._writeDelaySeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._className = value.className;
      this._initialMode = value.initialMode;
      this._propertiesSecretName = value.propertiesSecretName;
      this._writeBatchSize = value.writeBatchSize;
      this._writeCoalescing = value.writeCoalescing;
      this._writeDelaySeconds = value.writeDelaySeconds;
    }
  }

  // class_name - computed: false, optional: false, required: true
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // initial_mode - computed: false, optional: true, required: false
  private _initialMode?: string; 
  public get initialMode() {
    return this.getStringAttribute('initial_mode');
  }
  public set initialMode(value: string) {
    this._initialMode = value;
  }
  public resetInitialMode() {
    this._initialMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialModeInput() {
    return this._initialMode;
  }

  // properties_secret_name - computed: false, optional: true, required: false
  private _propertiesSecretName?: string; 
  public get propertiesSecretName() {
    return this.getStringAttribute('properties_secret_name');
  }
  public set propertiesSecretName(value: string) {
    this._propertiesSecretName = value;
  }
  public resetPropertiesSecretName() {
    this._propertiesSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesSecretNameInput() {
    return this._propertiesSecretName;
  }

  // write_batch_size - computed: false, optional: true, required: false
  private _writeBatchSize?: number; 
  public get writeBatchSize() {
    return this.getNumberAttribute('write_batch_size');
  }
  public set writeBatchSize(value: number) {
    this._writeBatchSize = value;
  }
  public resetWriteBatchSize() {
    this._writeBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeBatchSizeInput() {
    return this._writeBatchSize;
  }

  // write_coalescing - computed: false, optional: true, required: false
  private _writeCoalescing?: boolean | cdktf.IResolvable; 
  public get writeCoalescing() {
    return this.getBooleanAttribute('write_coalescing');
  }
  public set writeCoalescing(value: boolean | cdktf.IResolvable) {
    this._writeCoalescing = value;
  }
  public resetWriteCoalescing() {
    this._writeCoalescing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCoalescingInput() {
    return this._writeCoalescing;
  }

  // write_delay_seconds - computed: false, optional: true, required: false
  private _writeDelaySeconds?: number; 
  public get writeDelaySeconds() {
    return this.getNumberAttribute('write_delay_seconds');
  }
  public set writeDelaySeconds(value: number) {
    this._writeDelaySeconds = value;
  }
  public resetWriteDelaySeconds() {
    this._writeDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeDelaySecondsInput() {
    return this._writeDelaySeconds;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree {
  /**
  * Depth of the merkle tree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#depth DataK8SHazelcastComMapV1Alpha1Manifest#depth}
  */
  readonly depth?: number;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTreeToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depth: cdktf.numberToTerraform(struct!.depth),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTreeToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTreeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._depth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._depth = value.depth;
    }
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction {
  /**
  * EvictionPolicy to be applied when near cache reaches its max size according to the max size policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#eviction_policy DataK8SHazelcastComMapV1Alpha1Manifest#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * MaxSizePolicy for deciding if the maxSize is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#max_size_policy DataK8SHazelcastComMapV1Alpha1Manifest#max_size_policy}
  */
  readonly maxSizePolicy?: string;
  /**
  * Size is maximum size of the Near Cache used for max-size-policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#size DataK8SHazelcastComMapV1Alpha1Manifest#size}
  */
  readonly size?: number;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEvictionToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    max_size_policy: cdktf.stringToTerraform(struct!.maxSizePolicy),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEvictionToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_size_policy: {
      value: cdktf.stringToHclTerraform(struct!.maxSizePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEvictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._maxSizePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSizePolicy = this._maxSizePolicy;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evictionPolicy = undefined;
      this._maxSizePolicy = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evictionPolicy = value.evictionPolicy;
      this._maxSizePolicy = value.maxSizePolicy;
      this._size = value.size;
    }
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // max_size_policy - computed: false, optional: true, required: false
  private _maxSizePolicy?: string; 
  public get maxSizePolicy() {
    return this.getStringAttribute('max_size_policy');
  }
  public set maxSizePolicy(value: string) {
    this._maxSizePolicy = value;
  }
  public resetMaxSizePolicy() {
    this._maxSizePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizePolicyInput() {
    return this._maxSizePolicy;
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
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache {
  /**
  * CacheLocalEntries specifies whether the local entries are cached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#cache_local_entries DataK8SHazelcastComMapV1Alpha1Manifest#cache_local_entries}
  */
  readonly cacheLocalEntries?: boolean | cdktf.IResolvable;
  /**
  * NearCacheEviction specifies the eviction behavior in Near Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#eviction DataK8SHazelcastComMapV1Alpha1Manifest#eviction}
  */
  readonly eviction: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction;
  /**
  * InMemoryFormat specifies in which format data will be stored in your near cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#in_memory_format DataK8SHazelcastComMapV1Alpha1Manifest#in_memory_format}
  */
  readonly inMemoryFormat?: string;
  /**
  * InvalidateOnChange specifies whether the cached entries are evicted when the entries are updated or removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#invalidate_on_change DataK8SHazelcastComMapV1Alpha1Manifest#invalidate_on_change}
  */
  readonly invalidateOnChange?: boolean | cdktf.IResolvable;
  /**
  * MaxIdleSeconds Maximum number of seconds each entry can stay in the Near Cache as untouched (not read)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#max_idle_seconds DataK8SHazelcastComMapV1Alpha1Manifest#max_idle_seconds}
  */
  readonly maxIdleSeconds?: number;
  /**
  * Name is name of the near cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#name DataK8SHazelcastComMapV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * TimeToLiveSeconds maximum number of seconds for each entry to stay in the Near Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#time_to_live_seconds DataK8SHazelcastComMapV1Alpha1Manifest#time_to_live_seconds}
  */
  readonly timeToLiveSeconds?: number;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_local_entries: cdktf.booleanToTerraform(struct!.cacheLocalEntries),
    eviction: dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEvictionToTerraform(struct!.eviction),
    in_memory_format: cdktf.stringToTerraform(struct!.inMemoryFormat),
    invalidate_on_change: cdktf.booleanToTerraform(struct!.invalidateOnChange),
    max_idle_seconds: cdktf.numberToTerraform(struct!.maxIdleSeconds),
    name: cdktf.stringToTerraform(struct!.name),
    time_to_live_seconds: cdktf.numberToTerraform(struct!.timeToLiveSeconds),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_local_entries: {
      value: cdktf.booleanToHclTerraform(struct!.cacheLocalEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    eviction: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEvictionToHclTerraform(struct!.eviction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction",
    },
    in_memory_format: {
      value: cdktf.stringToHclTerraform(struct!.inMemoryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalidate_on_change: {
      value: cdktf.booleanToHclTerraform(struct!.invalidateOnChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_idle_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheLocalEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheLocalEntries = this._cacheLocalEntries;
    }
    if (this._eviction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eviction = this._eviction?.internalValue;
    }
    if (this._inMemoryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inMemoryFormat = this._inMemoryFormat;
    }
    if (this._invalidateOnChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidateOnChange = this._invalidateOnChange;
    }
    if (this._maxIdleSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleSeconds = this._maxIdleSeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeToLiveSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveSeconds = this._timeToLiveSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheLocalEntries = undefined;
      this._eviction.internalValue = undefined;
      this._inMemoryFormat = undefined;
      this._invalidateOnChange = undefined;
      this._maxIdleSeconds = undefined;
      this._name = undefined;
      this._timeToLiveSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheLocalEntries = value.cacheLocalEntries;
      this._eviction.internalValue = value.eviction;
      this._inMemoryFormat = value.inMemoryFormat;
      this._invalidateOnChange = value.invalidateOnChange;
      this._maxIdleSeconds = value.maxIdleSeconds;
      this._name = value.name;
      this._timeToLiveSeconds = value.timeToLiveSeconds;
    }
  }

  // cache_local_entries - computed: false, optional: true, required: false
  private _cacheLocalEntries?: boolean | cdktf.IResolvable; 
  public get cacheLocalEntries() {
    return this.getBooleanAttribute('cache_local_entries');
  }
  public set cacheLocalEntries(value: boolean | cdktf.IResolvable) {
    this._cacheLocalEntries = value;
  }
  public resetCacheLocalEntries() {
    this._cacheLocalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheLocalEntriesInput() {
    return this._cacheLocalEntries;
  }

  // eviction - computed: false, optional: false, required: true
  private _eviction = new DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEvictionOutputReference(this, "eviction");
  public get eviction() {
    return this._eviction;
  }
  public putEviction(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheEviction) {
    this._eviction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionInput() {
    return this._eviction.internalValue;
  }

  // in_memory_format - computed: false, optional: true, required: false
  private _inMemoryFormat?: string; 
  public get inMemoryFormat() {
    return this.getStringAttribute('in_memory_format');
  }
  public set inMemoryFormat(value: string) {
    this._inMemoryFormat = value;
  }
  public resetInMemoryFormat() {
    this._inMemoryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMemoryFormatInput() {
    return this._inMemoryFormat;
  }

  // invalidate_on_change - computed: false, optional: true, required: false
  private _invalidateOnChange?: boolean | cdktf.IResolvable; 
  public get invalidateOnChange() {
    return this.getBooleanAttribute('invalidate_on_change');
  }
  public set invalidateOnChange(value: boolean | cdktf.IResolvable) {
    this._invalidateOnChange = value;
  }
  public resetInvalidateOnChange() {
    this._invalidateOnChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidateOnChangeInput() {
    return this._invalidateOnChange;
  }

  // max_idle_seconds - computed: false, optional: true, required: false
  private _maxIdleSeconds?: number; 
  public get maxIdleSeconds() {
    return this.getNumberAttribute('max_idle_seconds');
  }
  public set maxIdleSeconds(value: number) {
    this._maxIdleSeconds = value;
  }
  public resetMaxIdleSeconds() {
    this._maxIdleSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleSecondsInput() {
    return this._maxIdleSeconds;
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

  // time_to_live_seconds - computed: false, optional: true, required: false
  private _timeToLiveSeconds?: number; 
  public get timeToLiveSeconds() {
    return this.getNumberAttribute('time_to_live_seconds');
  }
  public set timeToLiveSeconds(value: number) {
    this._timeToLiveSeconds = value;
  }
  public resetTimeToLiveSeconds() {
    this._timeToLiveSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveSecondsInput() {
    return this._timeToLiveSeconds;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore {
  /**
  * diskDeviceName defines the name of the device for a given disk tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#disk_device_name DataK8SHazelcastComMapV1Alpha1Manifest#disk_device_name}
  */
  readonly diskDeviceName?: string;
  /**
  * MemoryCapacity sets Memory tier capacity, i.e., how much main memory should this tier consume at most.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#memory_capacity DataK8SHazelcastComMapV1Alpha1Manifest#memory_capacity}
  */
  readonly memoryCapacity?: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStoreToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_device_name: cdktf.stringToTerraform(struct!.diskDeviceName),
    memory_capacity: cdktf.stringToTerraform(struct!.memoryCapacity),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStoreToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_device_name: {
      value: cdktf.stringToHclTerraform(struct!.diskDeviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_capacity: {
      value: cdktf.stringToHclTerraform(struct!.memoryCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskDeviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskDeviceName = this._diskDeviceName;
    }
    if (this._memoryCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryCapacity = this._memoryCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskDeviceName = undefined;
      this._memoryCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskDeviceName = value.diskDeviceName;
      this._memoryCapacity = value.memoryCapacity;
    }
  }

  // disk_device_name - computed: false, optional: true, required: false
  private _diskDeviceName?: string; 
  public get diskDeviceName() {
    return this.getStringAttribute('disk_device_name');
  }
  public set diskDeviceName(value: string) {
    this._diskDeviceName = value;
  }
  public resetDiskDeviceName() {
    this._diskDeviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskDeviceNameInput() {
    return this._diskDeviceName;
  }

  // memory_capacity - computed: false, optional: true, required: false
  private _memoryCapacity?: string; 
  public get memoryCapacity() {
    return this.getStringAttribute('memory_capacity');
  }
  public set memoryCapacity(value: string) {
    this._memoryCapacity = value;
  }
  public resetMemoryCapacity() {
    this._memoryCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryCapacityInput() {
    return this._memoryCapacity;
  }
}
export interface DataK8SHazelcastComMapV1Alpha1ManifestSpec {
  /**
  * Number of asynchronous backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#async_backup_count DataK8SHazelcastComMapV1Alpha1Manifest#async_backup_count}
  */
  readonly asyncBackupCount?: number;
  /**
  * Attributes to be used with Predicates API. You can learn more at https://docs.hazelcast.com/hazelcast/latest/query/predicate-overview#creating-custom-query-attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#attributes DataK8SHazelcastComMapV1Alpha1Manifest#attributes}
  */
  readonly attributes?: DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes[] | cdktf.IResolvable;
  /**
  * Number of synchronous backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#backup_count DataK8SHazelcastComMapV1Alpha1Manifest#backup_count}
  */
  readonly backupCount?: number;
  /**
  * EntryListeners contains the configuration for the map-level or entry-based events listeners provided by the Hazelcast’s eventing framework. You can learn more at https://docs.hazelcast.com/hazelcast/latest/events/object-events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#entry_listeners DataK8SHazelcastComMapV1Alpha1Manifest#entry_listeners}
  */
  readonly entryListeners?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners[] | cdktf.IResolvable;
  /**
  * EventJournal specifies event journal configuration of the Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#event_journal DataK8SHazelcastComMapV1Alpha1Manifest#event_journal}
  */
  readonly eventJournal?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal;
  /**
  * Configuration for removing data from the map when it reaches its max size. It can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#eviction DataK8SHazelcastComMapV1Alpha1Manifest#eviction}
  */
  readonly eviction?: DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction;
  /**
  * HazelcastResourceName defines the name of the Hazelcast resource that this resource is created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#hazelcast_resource_name DataK8SHazelcastComMapV1Alpha1Manifest#hazelcast_resource_name}
  */
  readonly hazelcastResourceName: string;
  /**
  * InMemoryFormat specifies in which format data will be stored in your map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#in_memory_format DataK8SHazelcastComMapV1Alpha1Manifest#in_memory_format}
  */
  readonly inMemoryFormat?: string;
  /**
  * Indexes to be created for the map data. You can learn more at https://docs.hazelcast.com/hazelcast/latest/query/indexing-maps. It cannot be updated after map config is created successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#indexes DataK8SHazelcastComMapV1Alpha1Manifest#indexes}
  */
  readonly indexes?: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes[] | cdktf.IResolvable;
  /**
  * Configuration options when you want to load/store the map entries from/to a persistent data store such as a relational database You can learn more at https://docs.hazelcast.com/hazelcast/latest/data-structures/working-with-external-data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#map_store DataK8SHazelcastComMapV1Alpha1Manifest#map_store}
  */
  readonly mapStore?: DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore;
  /**
  * Maximum time in seconds for each entry to stay idle in the map. Entries that are idle for more than this time are evicted automatically. It can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#max_idle_seconds DataK8SHazelcastComMapV1Alpha1Manifest#max_idle_seconds}
  */
  readonly maxIdleSeconds?: number;
  /**
  * MerkleTree defines the configuration for the Merkle tree data structure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#merkle_tree DataK8SHazelcastComMapV1Alpha1Manifest#merkle_tree}
  */
  readonly merkleTree?: DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree;
  /**
  * Name of the data structure config to be created. If empty, CR name will be used. It cannot be updated after the config is created successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#name DataK8SHazelcastComMapV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * InMemoryFormat specifies near cache configuration for map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#near_cache DataK8SHazelcastComMapV1Alpha1Manifest#near_cache}
  */
  readonly nearCache?: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache;
  /**
  * When enabled, map data will be persisted. It cannot be updated after map config is created successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#persistence_enabled DataK8SHazelcastComMapV1Alpha1Manifest#persistence_enabled}
  */
  readonly persistenceEnabled?: boolean | cdktf.IResolvable;
  /**
  * TieredStore enables the Hazelcast's Tiered-Store feature for the Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#tiered_store DataK8SHazelcastComMapV1Alpha1Manifest#tiered_store}
  */
  readonly tieredStore?: DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore;
  /**
  * Maximum time in seconds for each entry to stay in the map. If it is not 0, entries that are older than this time and not updated for this time are evicted automatically. It can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#time_to_live_seconds DataK8SHazelcastComMapV1Alpha1Manifest#time_to_live_seconds}
  */
  readonly timeToLiveSeconds?: number;
  /**
  * Name of the User Code Namespace applied to this instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#user_code_namespace DataK8SHazelcastComMapV1Alpha1Manifest#user_code_namespace}
  */
  readonly userCodeNamespace?: string;
}

export function dataK8SHazelcastComMapV1Alpha1ManifestSpecToTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async_backup_count: cdktf.numberToTerraform(struct!.asyncBackupCount),
    attributes: cdktf.listMapper(dataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesToTerraform, false)(struct!.attributes),
    backup_count: cdktf.numberToTerraform(struct!.backupCount),
    entry_listeners: cdktf.listMapper(dataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersToTerraform, false)(struct!.entryListeners),
    event_journal: dataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournalToTerraform(struct!.eventJournal),
    eviction: dataK8SHazelcastComMapV1Alpha1ManifestSpecEvictionToTerraform(struct!.eviction),
    hazelcast_resource_name: cdktf.stringToTerraform(struct!.hazelcastResourceName),
    in_memory_format: cdktf.stringToTerraform(struct!.inMemoryFormat),
    indexes: cdktf.listMapper(dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesToTerraform, false)(struct!.indexes),
    map_store: dataK8SHazelcastComMapV1Alpha1ManifestSpecMapStoreToTerraform(struct!.mapStore),
    max_idle_seconds: cdktf.numberToTerraform(struct!.maxIdleSeconds),
    merkle_tree: dataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTreeToTerraform(struct!.merkleTree),
    name: cdktf.stringToTerraform(struct!.name),
    near_cache: dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheToTerraform(struct!.nearCache),
    persistence_enabled: cdktf.booleanToTerraform(struct!.persistenceEnabled),
    tiered_store: dataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStoreToTerraform(struct!.tieredStore),
    time_to_live_seconds: cdktf.numberToTerraform(struct!.timeToLiveSeconds),
    user_code_namespace: cdktf.stringToTerraform(struct!.userCodeNamespace),
  }
}


export function dataK8SHazelcastComMapV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SHazelcastComMapV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async_backup_count: {
      value: cdktf.numberToHclTerraform(struct!.asyncBackupCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attributes: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesList",
    },
    backup_count: {
      value: cdktf.numberToHclTerraform(struct!.backupCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_listeners: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersToHclTerraform, false)(struct!.entryListeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersList",
    },
    event_journal: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournalToHclTerraform(struct!.eventJournal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal",
    },
    eviction: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecEvictionToHclTerraform(struct!.eviction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction",
    },
    hazelcast_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.hazelcastResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_memory_format: {
      value: cdktf.stringToHclTerraform(struct!.inMemoryFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexes: {
      value: cdktf.listMapperHcl(dataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesToHclTerraform, false)(struct!.indexes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesList",
    },
    map_store: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecMapStoreToHclTerraform(struct!.mapStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore",
    },
    max_idle_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    merkle_tree: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTreeToHclTerraform(struct!.merkleTree),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    near_cache: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheToHclTerraform(struct!.nearCache),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache",
    },
    persistence_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistenceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tiered_store: {
      value: dataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStoreToHclTerraform(struct!.tieredStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore",
    },
    time_to_live_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_code_namespace: {
      value: cdktf.stringToHclTerraform(struct!.userCodeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHazelcastComMapV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHazelcastComMapV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncBackupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncBackupCount = this._asyncBackupCount;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._backupCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCount = this._backupCount;
    }
    if (this._entryListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryListeners = this._entryListeners?.internalValue;
    }
    if (this._eventJournal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventJournal = this._eventJournal?.internalValue;
    }
    if (this._eviction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eviction = this._eviction?.internalValue;
    }
    if (this._hazelcastResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hazelcastResourceName = this._hazelcastResourceName;
    }
    if (this._inMemoryFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inMemoryFormat = this._inMemoryFormat;
    }
    if (this._indexes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexes = this._indexes?.internalValue;
    }
    if (this._mapStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapStore = this._mapStore?.internalValue;
    }
    if (this._maxIdleSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleSeconds = this._maxIdleSeconds;
    }
    if (this._merkleTree?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merkleTree = this._merkleTree?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nearCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nearCache = this._nearCache?.internalValue;
    }
    if (this._persistenceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistenceEnabled = this._persistenceEnabled;
    }
    if (this._tieredStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredStore = this._tieredStore?.internalValue;
    }
    if (this._timeToLiveSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveSeconds = this._timeToLiveSeconds;
    }
    if (this._userCodeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.userCodeNamespace = this._userCodeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHazelcastComMapV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asyncBackupCount = undefined;
      this._attributes.internalValue = undefined;
      this._backupCount = undefined;
      this._entryListeners.internalValue = undefined;
      this._eventJournal.internalValue = undefined;
      this._eviction.internalValue = undefined;
      this._hazelcastResourceName = undefined;
      this._inMemoryFormat = undefined;
      this._indexes.internalValue = undefined;
      this._mapStore.internalValue = undefined;
      this._maxIdleSeconds = undefined;
      this._merkleTree.internalValue = undefined;
      this._name = undefined;
      this._nearCache.internalValue = undefined;
      this._persistenceEnabled = undefined;
      this._tieredStore.internalValue = undefined;
      this._timeToLiveSeconds = undefined;
      this._userCodeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asyncBackupCount = value.asyncBackupCount;
      this._attributes.internalValue = value.attributes;
      this._backupCount = value.backupCount;
      this._entryListeners.internalValue = value.entryListeners;
      this._eventJournal.internalValue = value.eventJournal;
      this._eviction.internalValue = value.eviction;
      this._hazelcastResourceName = value.hazelcastResourceName;
      this._inMemoryFormat = value.inMemoryFormat;
      this._indexes.internalValue = value.indexes;
      this._mapStore.internalValue = value.mapStore;
      this._maxIdleSeconds = value.maxIdleSeconds;
      this._merkleTree.internalValue = value.merkleTree;
      this._name = value.name;
      this._nearCache.internalValue = value.nearCache;
      this._persistenceEnabled = value.persistenceEnabled;
      this._tieredStore.internalValue = value.tieredStore;
      this._timeToLiveSeconds = value.timeToLiveSeconds;
      this._userCodeNamespace = value.userCodeNamespace;
    }
  }

  // async_backup_count - computed: false, optional: true, required: false
  private _asyncBackupCount?: number; 
  public get asyncBackupCount() {
    return this.getNumberAttribute('async_backup_count');
  }
  public set asyncBackupCount(value: number) {
    this._asyncBackupCount = value;
  }
  public resetAsyncBackupCount() {
    this._asyncBackupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncBackupCountInput() {
    return this._asyncBackupCount;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // backup_count - computed: false, optional: true, required: false
  private _backupCount?: number; 
  public get backupCount() {
    return this.getNumberAttribute('backup_count');
  }
  public set backupCount(value: number) {
    this._backupCount = value;
  }
  public resetBackupCount() {
    this._backupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCountInput() {
    return this._backupCount;
  }

  // entry_listeners - computed: false, optional: true, required: false
  private _entryListeners = new DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListenersList(this, "entry_listeners", false);
  public get entryListeners() {
    return this._entryListeners;
  }
  public putEntryListeners(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecEntryListeners[] | cdktf.IResolvable) {
    this._entryListeners.internalValue = value;
  }
  public resetEntryListeners() {
    this._entryListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListenersInput() {
    return this._entryListeners.internalValue;
  }

  // event_journal - computed: false, optional: true, required: false
  private _eventJournal = new DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournalOutputReference(this, "event_journal");
  public get eventJournal() {
    return this._eventJournal;
  }
  public putEventJournal(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecEventJournal) {
    this._eventJournal.internalValue = value;
  }
  public resetEventJournal() {
    this._eventJournal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventJournalInput() {
    return this._eventJournal.internalValue;
  }

  // eviction - computed: false, optional: true, required: false
  private _eviction = new DataK8SHazelcastComMapV1Alpha1ManifestSpecEvictionOutputReference(this, "eviction");
  public get eviction() {
    return this._eviction;
  }
  public putEviction(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecEviction) {
    this._eviction.internalValue = value;
  }
  public resetEviction() {
    this._eviction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionInput() {
    return this._eviction.internalValue;
  }

  // hazelcast_resource_name - computed: false, optional: false, required: true
  private _hazelcastResourceName?: string; 
  public get hazelcastResourceName() {
    return this.getStringAttribute('hazelcast_resource_name');
  }
  public set hazelcastResourceName(value: string) {
    this._hazelcastResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hazelcastResourceNameInput() {
    return this._hazelcastResourceName;
  }

  // in_memory_format - computed: false, optional: true, required: false
  private _inMemoryFormat?: string; 
  public get inMemoryFormat() {
    return this.getStringAttribute('in_memory_format');
  }
  public set inMemoryFormat(value: string) {
    this._inMemoryFormat = value;
  }
  public resetInMemoryFormat() {
    this._inMemoryFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMemoryFormatInput() {
    return this._inMemoryFormat;
  }

  // indexes - computed: false, optional: true, required: false
  private _indexes = new DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexesList(this, "indexes", false);
  public get indexes() {
    return this._indexes;
  }
  public putIndexes(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecIndexes[] | cdktf.IResolvable) {
    this._indexes.internalValue = value;
  }
  public resetIndexes() {
    this._indexes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexesInput() {
    return this._indexes.internalValue;
  }

  // map_store - computed: false, optional: true, required: false
  private _mapStore = new DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStoreOutputReference(this, "map_store");
  public get mapStore() {
    return this._mapStore;
  }
  public putMapStore(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecMapStore) {
    this._mapStore.internalValue = value;
  }
  public resetMapStore() {
    this._mapStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapStoreInput() {
    return this._mapStore.internalValue;
  }

  // max_idle_seconds - computed: false, optional: true, required: false
  private _maxIdleSeconds?: number; 
  public get maxIdleSeconds() {
    return this.getNumberAttribute('max_idle_seconds');
  }
  public set maxIdleSeconds(value: number) {
    this._maxIdleSeconds = value;
  }
  public resetMaxIdleSeconds() {
    this._maxIdleSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleSecondsInput() {
    return this._maxIdleSeconds;
  }

  // merkle_tree - computed: false, optional: true, required: false
  private _merkleTree = new DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTreeOutputReference(this, "merkle_tree");
  public get merkleTree() {
    return this._merkleTree;
  }
  public putMerkleTree(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecMerkleTree) {
    this._merkleTree.internalValue = value;
  }
  public resetMerkleTree() {
    this._merkleTree.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get merkleTreeInput() {
    return this._merkleTree.internalValue;
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

  // near_cache - computed: false, optional: true, required: false
  private _nearCache = new DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCacheOutputReference(this, "near_cache");
  public get nearCache() {
    return this._nearCache;
  }
  public putNearCache(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecNearCache) {
    this._nearCache.internalValue = value;
  }
  public resetNearCache() {
    this._nearCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearCacheInput() {
    return this._nearCache.internalValue;
  }

  // persistence_enabled - computed: false, optional: true, required: false
  private _persistenceEnabled?: boolean | cdktf.IResolvable; 
  public get persistenceEnabled() {
    return this.getBooleanAttribute('persistence_enabled');
  }
  public set persistenceEnabled(value: boolean | cdktf.IResolvable) {
    this._persistenceEnabled = value;
  }
  public resetPersistenceEnabled() {
    this._persistenceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceEnabledInput() {
    return this._persistenceEnabled;
  }

  // tiered_store - computed: false, optional: true, required: false
  private _tieredStore = new DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStoreOutputReference(this, "tiered_store");
  public get tieredStore() {
    return this._tieredStore;
  }
  public putTieredStore(value: DataK8SHazelcastComMapV1Alpha1ManifestSpecTieredStore) {
    this._tieredStore.internalValue = value;
  }
  public resetTieredStore() {
    this._tieredStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredStoreInput() {
    return this._tieredStore.internalValue;
  }

  // time_to_live_seconds - computed: false, optional: true, required: false
  private _timeToLiveSeconds?: number; 
  public get timeToLiveSeconds() {
    return this.getNumberAttribute('time_to_live_seconds');
  }
  public set timeToLiveSeconds(value: number) {
    this._timeToLiveSeconds = value;
  }
  public resetTimeToLiveSeconds() {
    this._timeToLiveSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveSecondsInput() {
    return this._timeToLiveSeconds;
  }

  // user_code_namespace - computed: false, optional: true, required: false
  private _userCodeNamespace?: string; 
  public get userCodeNamespace() {
    return this.getStringAttribute('user_code_namespace');
  }
  public set userCodeNamespace(value: string) {
    this._userCodeNamespace = value;
  }
  public resetUserCodeNamespace() {
    this._userCodeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCodeNamespaceInput() {
    return this._userCodeNamespace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest k8s_hazelcast_com_map_v1alpha1_manifest}
*/
export class DataK8SHazelcastComMapV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hazelcast_com_map_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHazelcastComMapV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHazelcastComMapV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SHazelcastComMapV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHazelcastComMapV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hazelcast_com_map_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/hazelcast_com_map_v1alpha1_manifest k8s_hazelcast_com_map_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHazelcastComMapV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHazelcastComMapV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hazelcast_com_map_v1alpha1_manifest',
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
  private _metadata = new DataK8SHazelcastComMapV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHazelcastComMapV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SHazelcastComMapV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHazelcastComMapV1Alpha1ManifestSpec) {
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
      metadata: dataK8SHazelcastComMapV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHazelcastComMapV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHazelcastComMapV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SHazelcastComMapV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHazelcastComMapV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
