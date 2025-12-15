// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEventsK8SIoEventV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#action DataK8SEventsK8SIoEventV1Manifest#action}
  */
  readonly action?: string;
  /**
  * deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#deprecated_count DataK8SEventsK8SIoEventV1Manifest#deprecated_count}
  */
  readonly deprecatedCount?: number;
  /**
  * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. Wrappers are provided for many of the factory methods that the time package offers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#deprecated_first_timestamp DataK8SEventsK8SIoEventV1Manifest#deprecated_first_timestamp}
  */
  readonly deprecatedFirstTimestamp?: string;
  /**
  * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON. Wrappers are provided for many of the factory methods that the time package offers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#deprecated_last_timestamp DataK8SEventsK8SIoEventV1Manifest#deprecated_last_timestamp}
  */
  readonly deprecatedLastTimestamp?: string;
  /**
  * EventSource contains information for an event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#deprecated_source DataK8SEventsK8SIoEventV1Manifest#deprecated_source}
  */
  readonly deprecatedSource?: DataK8SEventsK8SIoEventV1ManifestDeprecatedSource;
  /**
  * MicroTime is version of Time with microsecond level precision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#event_time DataK8SEventsK8SIoEventV1Manifest#event_time}
  */
  readonly eventTime: string;
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#metadata DataK8SEventsK8SIoEventV1Manifest#metadata}
  */
  readonly metadata: DataK8SEventsK8SIoEventV1ManifestMetadata;
  /**
  * note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#note DataK8SEventsK8SIoEventV1Manifest#note}
  */
  readonly note?: string;
  /**
  * reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#reason DataK8SEventsK8SIoEventV1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#regarding DataK8SEventsK8SIoEventV1Manifest#regarding}
  */
  readonly regarding?: DataK8SEventsK8SIoEventV1ManifestRegarding;
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#related DataK8SEventsK8SIoEventV1Manifest#related}
  */
  readonly related?: DataK8SEventsK8SIoEventV1ManifestRelated;
  /**
  * reportingController is the name of the controller that emitted this Event, e.g. 'kubernetes.io/kubelet'. This field cannot be empty for new Events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#reporting_controller DataK8SEventsK8SIoEventV1Manifest#reporting_controller}
  */
  readonly reportingController?: string;
  /**
  * reportingInstance is the ID of the controller instance, e.g. 'kubelet-xyzf'. This field cannot be empty for new Events and it can have at most 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#reporting_instance DataK8SEventsK8SIoEventV1Manifest#reporting_instance}
  */
  readonly reportingInstance?: string;
  /**
  * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in 'k8s.io/client-go/tools/events/event_broadcaster.go' shows how this struct is updated on heartbeats and can guide customized reporter implementations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#series DataK8SEventsK8SIoEventV1Manifest#series}
  */
  readonly series?: DataK8SEventsK8SIoEventV1ManifestSeries;
  /**
  * type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#type DataK8SEventsK8SIoEventV1Manifest#type}
  */
  readonly type?: string;
}
export interface DataK8SEventsK8SIoEventV1ManifestDeprecatedSource {
  /**
  * Component from which the event is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#component DataK8SEventsK8SIoEventV1Manifest#component}
  */
  readonly component?: string;
  /**
  * Node name on which the event is generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#host DataK8SEventsK8SIoEventV1Manifest#host}
  */
  readonly host?: string;
}

export function dataK8SEventsK8SIoEventV1ManifestDeprecatedSourceToTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestDeprecatedSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    host: cdktf.stringToTerraform(struct!.host),
  }
}


export function dataK8SEventsK8SIoEventV1ManifestDeprecatedSourceToHclTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestDeprecatedSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEventsK8SIoEventV1ManifestDeprecatedSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEventsK8SIoEventV1ManifestDeprecatedSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEventsK8SIoEventV1ManifestDeprecatedSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._host = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._host = value.host;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }
}
export interface DataK8SEventsK8SIoEventV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#annotations DataK8SEventsK8SIoEventV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#labels DataK8SEventsK8SIoEventV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#name DataK8SEventsK8SIoEventV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#namespace DataK8SEventsK8SIoEventV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEventsK8SIoEventV1ManifestMetadataToTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEventsK8SIoEventV1ManifestMetadataToHclTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEventsK8SIoEventV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEventsK8SIoEventV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEventsK8SIoEventV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEventsK8SIoEventV1ManifestRegarding {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#api_version DataK8SEventsK8SIoEventV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#field_path DataK8SEventsK8SIoEventV1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#kind DataK8SEventsK8SIoEventV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#name DataK8SEventsK8SIoEventV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#namespace DataK8SEventsK8SIoEventV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#resource_version DataK8SEventsK8SIoEventV1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#uid DataK8SEventsK8SIoEventV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SEventsK8SIoEventV1ManifestRegardingToTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestRegarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SEventsK8SIoEventV1ManifestRegardingToHclTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestRegarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEventsK8SIoEventV1ManifestRegardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEventsK8SIoEventV1ManifestRegarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEventsK8SIoEventV1ManifestRegarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SEventsK8SIoEventV1ManifestRelated {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#api_version DataK8SEventsK8SIoEventV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#field_path DataK8SEventsK8SIoEventV1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#kind DataK8SEventsK8SIoEventV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#name DataK8SEventsK8SIoEventV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#namespace DataK8SEventsK8SIoEventV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#resource_version DataK8SEventsK8SIoEventV1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#uid DataK8SEventsK8SIoEventV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SEventsK8SIoEventV1ManifestRelatedToTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestRelated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SEventsK8SIoEventV1ManifestRelatedToHclTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestRelated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEventsK8SIoEventV1ManifestRelatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEventsK8SIoEventV1ManifestRelated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEventsK8SIoEventV1ManifestRelated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SEventsK8SIoEventV1ManifestSeries {
  /**
  * count is the number of occurrences in this series up to the last heartbeat time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#count DataK8SEventsK8SIoEventV1Manifest#count}
  */
  readonly count: number;
  /**
  * MicroTime is version of Time with microsecond level precision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#last_observed_time DataK8SEventsK8SIoEventV1Manifest#last_observed_time}
  */
  readonly lastObservedTime: string;
}

export function dataK8SEventsK8SIoEventV1ManifestSeriesToTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    last_observed_time: cdktf.stringToTerraform(struct!.lastObservedTime),
  }
}


export function dataK8SEventsK8SIoEventV1ManifestSeriesToHclTerraform(struct?: DataK8SEventsK8SIoEventV1ManifestSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_observed_time: {
      value: cdktf.stringToHclTerraform(struct!.lastObservedTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEventsK8SIoEventV1ManifestSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEventsK8SIoEventV1ManifestSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._lastObservedTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastObservedTime = this._lastObservedTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEventsK8SIoEventV1ManifestSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._lastObservedTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._lastObservedTime = value.lastObservedTime;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // last_observed_time - computed: false, optional: false, required: true
  private _lastObservedTime?: string; 
  public get lastObservedTime() {
    return this.getStringAttribute('last_observed_time');
  }
  public set lastObservedTime(value: string) {
    this._lastObservedTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastObservedTimeInput() {
    return this._lastObservedTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest k8s_events_k8s_io_event_v1_manifest}
*/
export class DataK8SEventsK8SIoEventV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_events_k8s_io_event_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEventsK8SIoEventV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEventsK8SIoEventV1Manifest to import
  * @param importFromId The id of the existing DataK8SEventsK8SIoEventV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEventsK8SIoEventV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_events_k8s_io_event_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/events_k8s_io_event_v1_manifest k8s_events_k8s_io_event_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEventsK8SIoEventV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEventsK8SIoEventV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_events_k8s_io_event_v1_manifest',
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
    this._action = config.action;
    this._deprecatedCount = config.deprecatedCount;
    this._deprecatedFirstTimestamp = config.deprecatedFirstTimestamp;
    this._deprecatedLastTimestamp = config.deprecatedLastTimestamp;
    this._deprecatedSource.internalValue = config.deprecatedSource;
    this._eventTime = config.eventTime;
    this._metadata.internalValue = config.metadata;
    this._note = config.note;
    this._reason = config.reason;
    this._regarding.internalValue = config.regarding;
    this._related.internalValue = config.related;
    this._reportingController = config.reportingController;
    this._reportingInstance = config.reportingInstance;
    this._series.internalValue = config.series;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // deprecated_count - computed: false, optional: true, required: false
  private _deprecatedCount?: number; 
  public get deprecatedCount() {
    return this.getNumberAttribute('deprecated_count');
  }
  public set deprecatedCount(value: number) {
    this._deprecatedCount = value;
  }
  public resetDeprecatedCount() {
    this._deprecatedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedCountInput() {
    return this._deprecatedCount;
  }

  // deprecated_first_timestamp - computed: false, optional: true, required: false
  private _deprecatedFirstTimestamp?: string; 
  public get deprecatedFirstTimestamp() {
    return this.getStringAttribute('deprecated_first_timestamp');
  }
  public set deprecatedFirstTimestamp(value: string) {
    this._deprecatedFirstTimestamp = value;
  }
  public resetDeprecatedFirstTimestamp() {
    this._deprecatedFirstTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedFirstTimestampInput() {
    return this._deprecatedFirstTimestamp;
  }

  // deprecated_last_timestamp - computed: false, optional: true, required: false
  private _deprecatedLastTimestamp?: string; 
  public get deprecatedLastTimestamp() {
    return this.getStringAttribute('deprecated_last_timestamp');
  }
  public set deprecatedLastTimestamp(value: string) {
    this._deprecatedLastTimestamp = value;
  }
  public resetDeprecatedLastTimestamp() {
    this._deprecatedLastTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedLastTimestampInput() {
    return this._deprecatedLastTimestamp;
  }

  // deprecated_source - computed: false, optional: true, required: false
  private _deprecatedSource = new DataK8SEventsK8SIoEventV1ManifestDeprecatedSourceOutputReference(this, "deprecated_source");
  public get deprecatedSource() {
    return this._deprecatedSource;
  }
  public putDeprecatedSource(value: DataK8SEventsK8SIoEventV1ManifestDeprecatedSource) {
    this._deprecatedSource.internalValue = value;
  }
  public resetDeprecatedSource() {
    this._deprecatedSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedSourceInput() {
    return this._deprecatedSource.internalValue;
  }

  // event_time - computed: false, optional: false, required: true
  private _eventTime?: string; 
  public get eventTime() {
    return this.getStringAttribute('event_time');
  }
  public set eventTime(value: string) {
    this._eventTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeInput() {
    return this._eventTime;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SEventsK8SIoEventV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEventsK8SIoEventV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // regarding - computed: false, optional: true, required: false
  private _regarding = new DataK8SEventsK8SIoEventV1ManifestRegardingOutputReference(this, "regarding");
  public get regarding() {
    return this._regarding;
  }
  public putRegarding(value: DataK8SEventsK8SIoEventV1ManifestRegarding) {
    this._regarding.internalValue = value;
  }
  public resetRegarding() {
    this._regarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regardingInput() {
    return this._regarding.internalValue;
  }

  // related - computed: false, optional: true, required: false
  private _related = new DataK8SEventsK8SIoEventV1ManifestRelatedOutputReference(this, "related");
  public get related() {
    return this._related;
  }
  public putRelated(value: DataK8SEventsK8SIoEventV1ManifestRelated) {
    this._related.internalValue = value;
  }
  public resetRelated() {
    this._related.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedInput() {
    return this._related.internalValue;
  }

  // reporting_controller - computed: false, optional: true, required: false
  private _reportingController?: string; 
  public get reportingController() {
    return this.getStringAttribute('reporting_controller');
  }
  public set reportingController(value: string) {
    this._reportingController = value;
  }
  public resetReportingController() {
    this._reportingController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingControllerInput() {
    return this._reportingController;
  }

  // reporting_instance - computed: false, optional: true, required: false
  private _reportingInstance?: string; 
  public get reportingInstance() {
    return this.getStringAttribute('reporting_instance');
  }
  public set reportingInstance(value: string) {
    this._reportingInstance = value;
  }
  public resetReportingInstance() {
    this._reportingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingInstanceInput() {
    return this._reportingInstance;
  }

  // series - computed: false, optional: true, required: false
  private _series = new DataK8SEventsK8SIoEventV1ManifestSeriesOutputReference(this, "series");
  public get series() {
    return this._series;
  }
  public putSeries(value: DataK8SEventsK8SIoEventV1ManifestSeries) {
    this._series.internalValue = value;
  }
  public resetSeries() {
    this._series.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series.internalValue;
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

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      deprecated_count: cdktf.numberToTerraform(this._deprecatedCount),
      deprecated_first_timestamp: cdktf.stringToTerraform(this._deprecatedFirstTimestamp),
      deprecated_last_timestamp: cdktf.stringToTerraform(this._deprecatedLastTimestamp),
      deprecated_source: dataK8SEventsK8SIoEventV1ManifestDeprecatedSourceToTerraform(this._deprecatedSource.internalValue),
      event_time: cdktf.stringToTerraform(this._eventTime),
      metadata: dataK8SEventsK8SIoEventV1ManifestMetadataToTerraform(this._metadata.internalValue),
      note: cdktf.stringToTerraform(this._note),
      reason: cdktf.stringToTerraform(this._reason),
      regarding: dataK8SEventsK8SIoEventV1ManifestRegardingToTerraform(this._regarding.internalValue),
      related: dataK8SEventsK8SIoEventV1ManifestRelatedToTerraform(this._related.internalValue),
      reporting_controller: cdktf.stringToTerraform(this._reportingController),
      reporting_instance: cdktf.stringToTerraform(this._reportingInstance),
      series: dataK8SEventsK8SIoEventV1ManifestSeriesToTerraform(this._series.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated_count: {
        value: cdktf.numberToHclTerraform(this._deprecatedCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deprecated_first_timestamp: {
        value: cdktf.stringToHclTerraform(this._deprecatedFirstTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated_last_timestamp: {
        value: cdktf.stringToHclTerraform(this._deprecatedLastTimestamp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated_source: {
        value: dataK8SEventsK8SIoEventV1ManifestDeprecatedSourceToHclTerraform(this._deprecatedSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEventsK8SIoEventV1ManifestDeprecatedSource",
      },
      event_time: {
        value: cdktf.stringToHclTerraform(this._eventTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: dataK8SEventsK8SIoEventV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEventsK8SIoEventV1ManifestMetadata",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regarding: {
        value: dataK8SEventsK8SIoEventV1ManifestRegardingToHclTerraform(this._regarding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEventsK8SIoEventV1ManifestRegarding",
      },
      related: {
        value: dataK8SEventsK8SIoEventV1ManifestRelatedToHclTerraform(this._related.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEventsK8SIoEventV1ManifestRelated",
      },
      reporting_controller: {
        value: cdktf.stringToHclTerraform(this._reportingController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reporting_instance: {
        value: cdktf.stringToHclTerraform(this._reportingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      series: {
        value: dataK8SEventsK8SIoEventV1ManifestSeriesToHclTerraform(this._series.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEventsK8SIoEventV1ManifestSeries",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
