// https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the Stream should support confirming receiving messages via acknowledgements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#ack Stream#ack}
  */
  readonly ack?: boolean | cdktf.IResolvable;
  /**
  * Allow higher performance, direct access to get individual messages via the $JS.DS.GET API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#allow_direct Stream#allow_direct}
  */
  readonly allowDirect?: boolean | cdktf.IResolvable;
  /**
  * AllowMsgTTL allows header initiated per-message TTLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#allow_msg_ttl Stream#allow_msg_ttl}
  */
  readonly allowMsgTtl?: boolean | cdktf.IResolvable;
  /**
  * Allows the use of the Nats-Rollup header to replace all contents of a stream, or subject in a stream, with a single new message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#allow_rollup_hdrs Stream#allow_rollup_hdrs}
  */
  readonly allowRollupHdrs?: boolean | cdktf.IResolvable;
  /**
  * Optional compression algorithm used for the Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#compression Stream#compression}
  */
  readonly compression?: string;
  /**
  * Restricts the ability to delete messages from a stream via the API. Cannot be changed once set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#deny_delete Stream#deny_delete}
  */
  readonly denyDelete?: boolean | cdktf.IResolvable;
  /**
  * Restricts the ability to purge messages from a stream via the API. Cannot be change once set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#deny_purge Stream#deny_purge}
  */
  readonly denyPurge?: boolean | cdktf.IResolvable;
  /**
  * Contains additional information about this stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#description Stream#description}
  */
  readonly description?: string;
  /**
  * When a Stream reach it's limits either old messages are deleted or new ones are denied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#discard Stream#discard}
  */
  readonly discard?: string;
  /**
  * When discard policy is new and the stream is one with max messages per subject set, this will apply the new behavior to every subject. Essentially turning discard new from maximum number of subjects into maximum number of messages in a subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#discard_new_per_subject Stream#discard_new_per_subject}
  */
  readonly discardNewPerSubject?: boolean | cdktf.IResolvable;
  /**
  * The size of the duplicate tracking windows, duration specified in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#duplicate_window Stream#duplicate_window}
  */
  readonly duplicateWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#id Stream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Duration that instructs the server to clean up consumers inactive for that long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#inactive_threshold Stream#inactive_threshold}
  */
  readonly inactiveThreshold?: number;
  /**
  * Defines the maximum number of messages, without acknowledgment, that can be outstanding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_ack_pending Stream#max_ack_pending}
  */
  readonly maxAckPending?: number;
  /**
  * The maximum oldest message that can be kept in the stream, duration specified in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_age Stream#max_age}
  */
  readonly maxAge?: number;
  /**
  * The maximum size of all messages that can be kept in the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_bytes Stream#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Number of consumers this stream allows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_consumers Stream#max_consumers}
  */
  readonly maxConsumers?: number;
  /**
  * The maximum individual message size that the stream will accept
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_msg_size Stream#max_msg_size}
  */
  readonly maxMsgSize?: number;
  /**
  * The maximum amount of messages that can be kept in the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_msgs Stream#max_msgs}
  */
  readonly maxMsgs?: number;
  /**
  * The maximum amount of messages that can be kept in the stream on a per-subject basis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#max_msgs_per_subject Stream#max_msgs_per_subject}
  */
  readonly maxMsgsPerSubject?: number;
  /**
  * Free form metadata about the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#metadata Stream#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * If true, and the stream is a mirror, the mirror will participate in a serving direct get requests for individual messages from origin stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#mirror_direct Stream#mirror_direct}
  */
  readonly mirrorDirect?: boolean | cdktf.IResolvable;
  /**
  * The name of the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#name Stream#name}
  */
  readonly name: string;
  /**
  * Place the stream in a specific cluster, influenced by placement_tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#placement_cluster Stream#placement_cluster}
  */
  readonly placementCluster?: string;
  /**
  * Place the stream only on servers with these tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#placement_tags Stream#placement_tags}
  */
  readonly placementTags?: string[];
  /**
  * How many replicas of the data to keep in a clustered environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#replicas Stream#replicas}
  */
  readonly replicas?: number;
  /**
  * The destination to publish messages to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#republish_destination Stream#republish_destination}
  */
  readonly republishDestination?: string;
  /**
  * Republish only message headers, no bodies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#republish_headers_only Stream#republish_headers_only}
  */
  readonly republishHeadersOnly?: boolean | cdktf.IResolvable;
  /**
  * Republish messages to republish_destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#republish_source Stream#republish_source}
  */
  readonly republishSource?: string;
  /**
  * The retention policy to apply over and above max_msgs, max_bytes and max_age
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#retention Stream#retention}
  */
  readonly retention?: string;
  /**
  * The storage engine to use to back the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#storage Stream#storage}
  */
  readonly storage?: string;
  /**
  * When placing a marker, how long should it be valid, duration specified in seconds. allow_rollup_hdrs must be set to true when using this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#subject_delete_marker_ttl Stream#subject_delete_marker_ttl}
  */
  readonly subjectDeleteMarkerTtl?: number;
  /**
  * The list of subjects that will be consumed by the Stream, may be empty when sources and mirrors are present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#subjects Stream#subjects}
  */
  readonly subjects?: string[];
  /**
  * mirror block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#mirror Stream#mirror}
  */
  readonly mirror?: StreamMirror;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#source Stream#source}
  */
  readonly source?: StreamSource[] | cdktf.IResolvable;
  /**
  * subject_transform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#subject_transform Stream#subject_transform}
  */
  readonly subjectTransform?: StreamSubjectTransform;
}
export interface StreamMirrorExternal {
  /**
  * The subject prefix for the remote API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#api Stream#api}
  */
  readonly api?: string;
  /**
  * The subject prefix where messages will be delivered to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#deliver Stream#deliver}
  */
  readonly deliver?: string;
}

export function streamMirrorExternalToTerraform(struct?: StreamMirrorExternalOutputReference | StreamMirrorExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    deliver: cdktf.stringToTerraform(struct!.deliver),
  }
}


export function streamMirrorExternalToHclTerraform(struct?: StreamMirrorExternalOutputReference | StreamMirrorExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deliver: {
      value: cdktf.stringToHclTerraform(struct!.deliver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamMirrorExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamMirrorExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._deliver !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliver = this._deliver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamMirrorExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._deliver = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._deliver = value.deliver;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // deliver - computed: false, optional: true, required: false
  private _deliver?: string; 
  public get deliver() {
    return this.getStringAttribute('deliver');
  }
  public set deliver(value: string) {
    this._deliver = value;
  }
  public resetDeliver() {
    this._deliver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverInput() {
    return this._deliver;
  }
}
export interface StreamMirrorSubjectTransform {
  /**
  * The subject transform destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#destination Stream#destination}
  */
  readonly destination: string;
  /**
  * The subject transform source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#source Stream#source}
  */
  readonly source: string;
}

export function streamMirrorSubjectTransformToTerraform(struct?: StreamMirrorSubjectTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function streamMirrorSubjectTransformToHclTerraform(struct?: StreamMirrorSubjectTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamMirrorSubjectTransformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamMirrorSubjectTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamMirrorSubjectTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class StreamMirrorSubjectTransformList extends cdktf.ComplexList {
  public internalValue? : StreamMirrorSubjectTransform[] | cdktf.IResolvable

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
  public get(index: number): StreamMirrorSubjectTransformOutputReference {
    return new StreamMirrorSubjectTransformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamMirror {
  /**
  * Only copy messages matching a specific subject, not usable for mirrors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#filter_subject Stream#filter_subject}
  */
  readonly filterSubject?: string;
  /**
  * The name of the source Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#name Stream#name}
  */
  readonly name: string;
  /**
  * The sequence to start mirroring from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#start_seq Stream#start_seq}
  */
  readonly startSeq?: number;
  /**
  * The time stamp in the source stream to start from, in RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#start_time Stream#start_time}
  */
  readonly startTime?: string;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#external Stream#external}
  */
  readonly external?: StreamMirrorExternal;
  /**
  * subject_transform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#subject_transform Stream#subject_transform}
  */
  readonly subjectTransform?: StreamMirrorSubjectTransform[] | cdktf.IResolvable;
}

export function streamMirrorToTerraform(struct?: StreamMirrorOutputReference | StreamMirror): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_subject: cdktf.stringToTerraform(struct!.filterSubject),
    name: cdktf.stringToTerraform(struct!.name),
    start_seq: cdktf.numberToTerraform(struct!.startSeq),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    external: streamMirrorExternalToTerraform(struct!.external),
    subject_transform: cdktf.listMapper(streamMirrorSubjectTransformToTerraform, true)(struct!.subjectTransform),
  }
}


export function streamMirrorToHclTerraform(struct?: StreamMirrorOutputReference | StreamMirror): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_subject: {
      value: cdktf.stringToHclTerraform(struct!.filterSubject),
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
    start_seq: {
      value: cdktf.numberToHclTerraform(struct!.startSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external: {
      value: streamMirrorExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "StreamMirrorExternalList",
    },
    subject_transform: {
      value: cdktf.listMapperHcl(streamMirrorSubjectTransformToHclTerraform, true)(struct!.subjectTransform),
      isBlock: true,
      type: "list",
      storageClassType: "StreamMirrorSubjectTransformList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamMirrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamMirror | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSubject = this._filterSubject;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSeq = this._startSeq;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._subjectTransform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectTransform = this._subjectTransform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamMirror | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterSubject = undefined;
      this._name = undefined;
      this._startSeq = undefined;
      this._startTime = undefined;
      this._external.internalValue = undefined;
      this._subjectTransform.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterSubject = value.filterSubject;
      this._name = value.name;
      this._startSeq = value.startSeq;
      this._startTime = value.startTime;
      this._external.internalValue = value.external;
      this._subjectTransform.internalValue = value.subjectTransform;
    }
  }

  // filter_subject - computed: false, optional: true, required: false
  private _filterSubject?: string; 
  public get filterSubject() {
    return this.getStringAttribute('filter_subject');
  }
  public set filterSubject(value: string) {
    this._filterSubject = value;
  }
  public resetFilterSubject() {
    this._filterSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSubjectInput() {
    return this._filterSubject;
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

  // start_seq - computed: false, optional: true, required: false
  private _startSeq?: number; 
  public get startSeq() {
    return this.getNumberAttribute('start_seq');
  }
  public set startSeq(value: number) {
    this._startSeq = value;
  }
  public resetStartSeq() {
    this._startSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSeqInput() {
    return this._startSeq;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // external - computed: false, optional: true, required: false
  private _external = new StreamMirrorExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: StreamMirrorExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // subject_transform - computed: false, optional: true, required: false
  private _subjectTransform = new StreamMirrorSubjectTransformList(this, "subject_transform", false);
  public get subjectTransform() {
    return this._subjectTransform;
  }
  public putSubjectTransform(value: StreamMirrorSubjectTransform[] | cdktf.IResolvable) {
    this._subjectTransform.internalValue = value;
  }
  public resetSubjectTransform() {
    this._subjectTransform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTransformInput() {
    return this._subjectTransform.internalValue;
  }
}
export interface StreamSourceExternal {
  /**
  * The subject prefix for the remote API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#api Stream#api}
  */
  readonly api?: string;
  /**
  * The subject prefix where messages will be delivered to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#deliver Stream#deliver}
  */
  readonly deliver?: string;
}

export function streamSourceExternalToTerraform(struct?: StreamSourceExternalOutputReference | StreamSourceExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    deliver: cdktf.stringToTerraform(struct!.deliver),
  }
}


export function streamSourceExternalToHclTerraform(struct?: StreamSourceExternalOutputReference | StreamSourceExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deliver: {
      value: cdktf.stringToHclTerraform(struct!.deliver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamSourceExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamSourceExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._deliver !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliver = this._deliver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamSourceExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._deliver = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._deliver = value.deliver;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // deliver - computed: false, optional: true, required: false
  private _deliver?: string; 
  public get deliver() {
    return this.getStringAttribute('deliver');
  }
  public set deliver(value: string) {
    this._deliver = value;
  }
  public resetDeliver() {
    this._deliver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverInput() {
    return this._deliver;
  }
}
export interface StreamSourceSubjectTransform {
  /**
  * The subject transform destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#destination Stream#destination}
  */
  readonly destination: string;
  /**
  * The subject transform source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#source Stream#source}
  */
  readonly source: string;
}

export function streamSourceSubjectTransformToTerraform(struct?: StreamSourceSubjectTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function streamSourceSubjectTransformToHclTerraform(struct?: StreamSourceSubjectTransform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamSourceSubjectTransformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamSourceSubjectTransform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamSourceSubjectTransform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class StreamSourceSubjectTransformList extends cdktf.ComplexList {
  public internalValue? : StreamSourceSubjectTransform[] | cdktf.IResolvable

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
  public get(index: number): StreamSourceSubjectTransformOutputReference {
    return new StreamSourceSubjectTransformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamSource {
  /**
  * Only copy messages matching a specific subject, not usable for mirrors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#filter_subject Stream#filter_subject}
  */
  readonly filterSubject?: string;
  /**
  * The name of the source Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#name Stream#name}
  */
  readonly name: string;
  /**
  * The sequence to start mirroring from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#start_seq Stream#start_seq}
  */
  readonly startSeq?: number;
  /**
  * The time stamp in the source stream to start from, in RFC3339 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#start_time Stream#start_time}
  */
  readonly startTime?: string;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#external Stream#external}
  */
  readonly external?: StreamSourceExternal;
  /**
  * subject_transform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#subject_transform Stream#subject_transform}
  */
  readonly subjectTransform?: StreamSourceSubjectTransform[] | cdktf.IResolvable;
}

export function streamSourceToTerraform(struct?: StreamSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_subject: cdktf.stringToTerraform(struct!.filterSubject),
    name: cdktf.stringToTerraform(struct!.name),
    start_seq: cdktf.numberToTerraform(struct!.startSeq),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    external: streamSourceExternalToTerraform(struct!.external),
    subject_transform: cdktf.listMapper(streamSourceSubjectTransformToTerraform, true)(struct!.subjectTransform),
  }
}


export function streamSourceToHclTerraform(struct?: StreamSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_subject: {
      value: cdktf.stringToHclTerraform(struct!.filterSubject),
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
    start_seq: {
      value: cdktf.numberToHclTerraform(struct!.startSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external: {
      value: streamSourceExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "StreamSourceExternalList",
    },
    subject_transform: {
      value: cdktf.listMapperHcl(streamSourceSubjectTransformToHclTerraform, true)(struct!.subjectTransform),
      isBlock: true,
      type: "list",
      storageClassType: "StreamSourceSubjectTransformList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterSubject = this._filterSubject;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSeq = this._startSeq;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._subjectTransform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectTransform = this._subjectTransform?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterSubject = undefined;
      this._name = undefined;
      this._startSeq = undefined;
      this._startTime = undefined;
      this._external.internalValue = undefined;
      this._subjectTransform.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterSubject = value.filterSubject;
      this._name = value.name;
      this._startSeq = value.startSeq;
      this._startTime = value.startTime;
      this._external.internalValue = value.external;
      this._subjectTransform.internalValue = value.subjectTransform;
    }
  }

  // filter_subject - computed: false, optional: true, required: false
  private _filterSubject?: string; 
  public get filterSubject() {
    return this.getStringAttribute('filter_subject');
  }
  public set filterSubject(value: string) {
    this._filterSubject = value;
  }
  public resetFilterSubject() {
    this._filterSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSubjectInput() {
    return this._filterSubject;
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

  // start_seq - computed: false, optional: true, required: false
  private _startSeq?: number; 
  public get startSeq() {
    return this.getNumberAttribute('start_seq');
  }
  public set startSeq(value: number) {
    this._startSeq = value;
  }
  public resetStartSeq() {
    this._startSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startSeqInput() {
    return this._startSeq;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // external - computed: false, optional: true, required: false
  private _external = new StreamSourceExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: StreamSourceExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // subject_transform - computed: false, optional: true, required: false
  private _subjectTransform = new StreamSourceSubjectTransformList(this, "subject_transform", false);
  public get subjectTransform() {
    return this._subjectTransform;
  }
  public putSubjectTransform(value: StreamSourceSubjectTransform[] | cdktf.IResolvable) {
    this._subjectTransform.internalValue = value;
  }
  public resetSubjectTransform() {
    this._subjectTransform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTransformInput() {
    return this._subjectTransform.internalValue;
  }
}

export class StreamSourceList extends cdktf.ComplexList {
  public internalValue? : StreamSource[] | cdktf.IResolvable

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
  public get(index: number): StreamSourceOutputReference {
    return new StreamSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamSubjectTransform {
  /**
  * The subject transform destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#destination Stream#destination}
  */
  readonly destination: string;
  /**
  * The subject transform source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#source Stream#source}
  */
  readonly source: string;
}

export function streamSubjectTransformToTerraform(struct?: StreamSubjectTransformOutputReference | StreamSubjectTransform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function streamSubjectTransformToHclTerraform(struct?: StreamSubjectTransformOutputReference | StreamSubjectTransform): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamSubjectTransformOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamSubjectTransform | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamSubjectTransform | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream jetstream_stream}
*/
export class Stream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jetstream_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stream to import
  * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jetstream_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nats-io/jetstream/0.2.1/docs/resources/stream jetstream_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfig) {
    super(scope, id, {
      terraformResourceType: 'jetstream_stream',
      terraformGeneratorMetadata: {
        providerName: 'jetstream',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ack = config.ack;
    this._allowDirect = config.allowDirect;
    this._allowMsgTtl = config.allowMsgTtl;
    this._allowRollupHdrs = config.allowRollupHdrs;
    this._compression = config.compression;
    this._denyDelete = config.denyDelete;
    this._denyPurge = config.denyPurge;
    this._description = config.description;
    this._discard = config.discard;
    this._discardNewPerSubject = config.discardNewPerSubject;
    this._duplicateWindow = config.duplicateWindow;
    this._id = config.id;
    this._inactiveThreshold = config.inactiveThreshold;
    this._maxAckPending = config.maxAckPending;
    this._maxAge = config.maxAge;
    this._maxBytes = config.maxBytes;
    this._maxConsumers = config.maxConsumers;
    this._maxMsgSize = config.maxMsgSize;
    this._maxMsgs = config.maxMsgs;
    this._maxMsgsPerSubject = config.maxMsgsPerSubject;
    this._metadata = config.metadata;
    this._mirrorDirect = config.mirrorDirect;
    this._name = config.name;
    this._placementCluster = config.placementCluster;
    this._placementTags = config.placementTags;
    this._replicas = config.replicas;
    this._republishDestination = config.republishDestination;
    this._republishHeadersOnly = config.republishHeadersOnly;
    this._republishSource = config.republishSource;
    this._retention = config.retention;
    this._storage = config.storage;
    this._subjectDeleteMarkerTtl = config.subjectDeleteMarkerTtl;
    this._subjects = config.subjects;
    this._mirror.internalValue = config.mirror;
    this._source.internalValue = config.source;
    this._subjectTransform.internalValue = config.subjectTransform;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack - computed: false, optional: true, required: false
  private _ack?: boolean | cdktf.IResolvable; 
  public get ack() {
    return this.getBooleanAttribute('ack');
  }
  public set ack(value: boolean | cdktf.IResolvable) {
    this._ack = value;
  }
  public resetAck() {
    this._ack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInput() {
    return this._ack;
  }

  // allow_direct - computed: false, optional: true, required: false
  private _allowDirect?: boolean | cdktf.IResolvable; 
  public get allowDirect() {
    return this.getBooleanAttribute('allow_direct');
  }
  public set allowDirect(value: boolean | cdktf.IResolvable) {
    this._allowDirect = value;
  }
  public resetAllowDirect() {
    this._allowDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDirectInput() {
    return this._allowDirect;
  }

  // allow_msg_ttl - computed: false, optional: true, required: false
  private _allowMsgTtl?: boolean | cdktf.IResolvable; 
  public get allowMsgTtl() {
    return this.getBooleanAttribute('allow_msg_ttl');
  }
  public set allowMsgTtl(value: boolean | cdktf.IResolvable) {
    this._allowMsgTtl = value;
  }
  public resetAllowMsgTtl() {
    this._allowMsgTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMsgTtlInput() {
    return this._allowMsgTtl;
  }

  // allow_rollup_hdrs - computed: false, optional: true, required: false
  private _allowRollupHdrs?: boolean | cdktf.IResolvable; 
  public get allowRollupHdrs() {
    return this.getBooleanAttribute('allow_rollup_hdrs');
  }
  public set allowRollupHdrs(value: boolean | cdktf.IResolvable) {
    this._allowRollupHdrs = value;
  }
  public resetAllowRollupHdrs() {
    this._allowRollupHdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRollupHdrsInput() {
    return this._allowRollupHdrs;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // deny_delete - computed: false, optional: true, required: false
  private _denyDelete?: boolean | cdktf.IResolvable; 
  public get denyDelete() {
    return this.getBooleanAttribute('deny_delete');
  }
  public set denyDelete(value: boolean | cdktf.IResolvable) {
    this._denyDelete = value;
  }
  public resetDenyDelete() {
    this._denyDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDeleteInput() {
    return this._denyDelete;
  }

  // deny_purge - computed: false, optional: true, required: false
  private _denyPurge?: boolean | cdktf.IResolvable; 
  public get denyPurge() {
    return this.getBooleanAttribute('deny_purge');
  }
  public set denyPurge(value: boolean | cdktf.IResolvable) {
    this._denyPurge = value;
  }
  public resetDenyPurge() {
    this._denyPurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyPurgeInput() {
    return this._denyPurge;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: string; 
  public get discard() {
    return this.getStringAttribute('discard');
  }
  public set discard(value: string) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // discard_new_per_subject - computed: false, optional: true, required: false
  private _discardNewPerSubject?: boolean | cdktf.IResolvable; 
  public get discardNewPerSubject() {
    return this.getBooleanAttribute('discard_new_per_subject');
  }
  public set discardNewPerSubject(value: boolean | cdktf.IResolvable) {
    this._discardNewPerSubject = value;
  }
  public resetDiscardNewPerSubject() {
    this._discardNewPerSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardNewPerSubjectInput() {
    return this._discardNewPerSubject;
  }

  // duplicate_window - computed: false, optional: true, required: false
  private _duplicateWindow?: number; 
  public get duplicateWindow() {
    return this.getNumberAttribute('duplicate_window');
  }
  public set duplicateWindow(value: number) {
    this._duplicateWindow = value;
  }
  public resetDuplicateWindow() {
    this._duplicateWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateWindowInput() {
    return this._duplicateWindow;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inactive_threshold - computed: false, optional: true, required: false
  private _inactiveThreshold?: number; 
  public get inactiveThreshold() {
    return this.getNumberAttribute('inactive_threshold');
  }
  public set inactiveThreshold(value: number) {
    this._inactiveThreshold = value;
  }
  public resetInactiveThreshold() {
    this._inactiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveThresholdInput() {
    return this._inactiveThreshold;
  }

  // max_ack_pending - computed: false, optional: true, required: false
  private _maxAckPending?: number; 
  public get maxAckPending() {
    return this.getNumberAttribute('max_ack_pending');
  }
  public set maxAckPending(value: number) {
    this._maxAckPending = value;
  }
  public resetMaxAckPending() {
    this._maxAckPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAckPendingInput() {
    return this._maxAckPending;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // max_consumers - computed: false, optional: true, required: false
  private _maxConsumers?: number; 
  public get maxConsumers() {
    return this.getNumberAttribute('max_consumers');
  }
  public set maxConsumers(value: number) {
    this._maxConsumers = value;
  }
  public resetMaxConsumers() {
    this._maxConsumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConsumersInput() {
    return this._maxConsumers;
  }

  // max_msg_size - computed: false, optional: true, required: false
  private _maxMsgSize?: number; 
  public get maxMsgSize() {
    return this.getNumberAttribute('max_msg_size');
  }
  public set maxMsgSize(value: number) {
    this._maxMsgSize = value;
  }
  public resetMaxMsgSize() {
    this._maxMsgSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgSizeInput() {
    return this._maxMsgSize;
  }

  // max_msgs - computed: false, optional: true, required: false
  private _maxMsgs?: number; 
  public get maxMsgs() {
    return this.getNumberAttribute('max_msgs');
  }
  public set maxMsgs(value: number) {
    this._maxMsgs = value;
  }
  public resetMaxMsgs() {
    this._maxMsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgsInput() {
    return this._maxMsgs;
  }

  // max_msgs_per_subject - computed: false, optional: true, required: false
  private _maxMsgsPerSubject?: number; 
  public get maxMsgsPerSubject() {
    return this.getNumberAttribute('max_msgs_per_subject');
  }
  public set maxMsgsPerSubject(value: number) {
    this._maxMsgsPerSubject = value;
  }
  public resetMaxMsgsPerSubject() {
    this._maxMsgsPerSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMsgsPerSubjectInput() {
    return this._maxMsgsPerSubject;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // mirror_direct - computed: false, optional: true, required: false
  private _mirrorDirect?: boolean | cdktf.IResolvable; 
  public get mirrorDirect() {
    return this.getBooleanAttribute('mirror_direct');
  }
  public set mirrorDirect(value: boolean | cdktf.IResolvable) {
    this._mirrorDirect = value;
  }
  public resetMirrorDirect() {
    this._mirrorDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorDirectInput() {
    return this._mirrorDirect;
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

  // placement_cluster - computed: false, optional: true, required: false
  private _placementCluster?: string; 
  public get placementCluster() {
    return this.getStringAttribute('placement_cluster');
  }
  public set placementCluster(value: string) {
    this._placementCluster = value;
  }
  public resetPlacementCluster() {
    this._placementCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementClusterInput() {
    return this._placementCluster;
  }

  // placement_tags - computed: false, optional: true, required: false
  private _placementTags?: string[]; 
  public get placementTags() {
    return this.getListAttribute('placement_tags');
  }
  public set placementTags(value: string[]) {
    this._placementTags = value;
  }
  public resetPlacementTags() {
    this._placementTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTagsInput() {
    return this._placementTags;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // republish_destination - computed: false, optional: true, required: false
  private _republishDestination?: string; 
  public get republishDestination() {
    return this.getStringAttribute('republish_destination');
  }
  public set republishDestination(value: string) {
    this._republishDestination = value;
  }
  public resetRepublishDestination() {
    this._republishDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishDestinationInput() {
    return this._republishDestination;
  }

  // republish_headers_only - computed: false, optional: true, required: false
  private _republishHeadersOnly?: boolean | cdktf.IResolvable; 
  public get republishHeadersOnly() {
    return this.getBooleanAttribute('republish_headers_only');
  }
  public set republishHeadersOnly(value: boolean | cdktf.IResolvable) {
    this._republishHeadersOnly = value;
  }
  public resetRepublishHeadersOnly() {
    this._republishHeadersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishHeadersOnlyInput() {
    return this._republishHeadersOnly;
  }

  // republish_source - computed: false, optional: true, required: false
  private _republishSource?: string; 
  public get republishSource() {
    return this.getStringAttribute('republish_source');
  }
  public set republishSource(value: string) {
    this._republishSource = value;
  }
  public resetRepublishSource() {
    this._republishSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishSourceInput() {
    return this._republishSource;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // subject_delete_marker_ttl - computed: false, optional: true, required: false
  private _subjectDeleteMarkerTtl?: number; 
  public get subjectDeleteMarkerTtl() {
    return this.getNumberAttribute('subject_delete_marker_ttl');
  }
  public set subjectDeleteMarkerTtl(value: number) {
    this._subjectDeleteMarkerTtl = value;
  }
  public resetSubjectDeleteMarkerTtl() {
    this._subjectDeleteMarkerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDeleteMarkerTtlInput() {
    return this._subjectDeleteMarkerTtl;
  }

  // subjects - computed: false, optional: true, required: false
  private _subjects?: string[]; 
  public get subjects() {
    return this.getListAttribute('subjects');
  }
  public set subjects(value: string[]) {
    this._subjects = value;
  }
  public resetSubjects() {
    this._subjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectsInput() {
    return this._subjects;
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new StreamMirrorOutputReference(this, "mirror");
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: StreamMirror) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new StreamSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: StreamSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // subject_transform - computed: false, optional: true, required: false
  private _subjectTransform = new StreamSubjectTransformOutputReference(this, "subject_transform");
  public get subjectTransform() {
    return this._subjectTransform;
  }
  public putSubjectTransform(value: StreamSubjectTransform) {
    this._subjectTransform.internalValue = value;
  }
  public resetSubjectTransform() {
    this._subjectTransform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTransformInput() {
    return this._subjectTransform.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack: cdktf.booleanToTerraform(this._ack),
      allow_direct: cdktf.booleanToTerraform(this._allowDirect),
      allow_msg_ttl: cdktf.booleanToTerraform(this._allowMsgTtl),
      allow_rollup_hdrs: cdktf.booleanToTerraform(this._allowRollupHdrs),
      compression: cdktf.stringToTerraform(this._compression),
      deny_delete: cdktf.booleanToTerraform(this._denyDelete),
      deny_purge: cdktf.booleanToTerraform(this._denyPurge),
      description: cdktf.stringToTerraform(this._description),
      discard: cdktf.stringToTerraform(this._discard),
      discard_new_per_subject: cdktf.booleanToTerraform(this._discardNewPerSubject),
      duplicate_window: cdktf.numberToTerraform(this._duplicateWindow),
      id: cdktf.stringToTerraform(this._id),
      inactive_threshold: cdktf.numberToTerraform(this._inactiveThreshold),
      max_ack_pending: cdktf.numberToTerraform(this._maxAckPending),
      max_age: cdktf.numberToTerraform(this._maxAge),
      max_bytes: cdktf.numberToTerraform(this._maxBytes),
      max_consumers: cdktf.numberToTerraform(this._maxConsumers),
      max_msg_size: cdktf.numberToTerraform(this._maxMsgSize),
      max_msgs: cdktf.numberToTerraform(this._maxMsgs),
      max_msgs_per_subject: cdktf.numberToTerraform(this._maxMsgsPerSubject),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      mirror_direct: cdktf.booleanToTerraform(this._mirrorDirect),
      name: cdktf.stringToTerraform(this._name),
      placement_cluster: cdktf.stringToTerraform(this._placementCluster),
      placement_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._placementTags),
      replicas: cdktf.numberToTerraform(this._replicas),
      republish_destination: cdktf.stringToTerraform(this._republishDestination),
      republish_headers_only: cdktf.booleanToTerraform(this._republishHeadersOnly),
      republish_source: cdktf.stringToTerraform(this._republishSource),
      retention: cdktf.stringToTerraform(this._retention),
      storage: cdktf.stringToTerraform(this._storage),
      subject_delete_marker_ttl: cdktf.numberToTerraform(this._subjectDeleteMarkerTtl),
      subjects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjects),
      mirror: streamMirrorToTerraform(this._mirror.internalValue),
      source: cdktf.listMapper(streamSourceToTerraform, true)(this._source.internalValue),
      subject_transform: streamSubjectTransformToTerraform(this._subjectTransform.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack: {
        value: cdktf.booleanToHclTerraform(this._ack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_direct: {
        value: cdktf.booleanToHclTerraform(this._allowDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_msg_ttl: {
        value: cdktf.booleanToHclTerraform(this._allowMsgTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_rollup_hdrs: {
        value: cdktf.booleanToHclTerraform(this._allowRollupHdrs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compression: {
        value: cdktf.stringToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deny_delete: {
        value: cdktf.booleanToHclTerraform(this._denyDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deny_purge: {
        value: cdktf.booleanToHclTerraform(this._denyPurge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard: {
        value: cdktf.stringToHclTerraform(this._discard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard_new_per_subject: {
        value: cdktf.booleanToHclTerraform(this._discardNewPerSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duplicate_window: {
        value: cdktf.numberToHclTerraform(this._duplicateWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inactive_threshold: {
        value: cdktf.numberToHclTerraform(this._inactiveThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_ack_pending: {
        value: cdktf.numberToHclTerraform(this._maxAckPending),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_bytes: {
        value: cdktf.numberToHclTerraform(this._maxBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_consumers: {
        value: cdktf.numberToHclTerraform(this._maxConsumers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msg_size: {
        value: cdktf.numberToHclTerraform(this._maxMsgSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msgs: {
        value: cdktf.numberToHclTerraform(this._maxMsgs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_msgs_per_subject: {
        value: cdktf.numberToHclTerraform(this._maxMsgsPerSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mirror_direct: {
        value: cdktf.booleanToHclTerraform(this._mirrorDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_cluster: {
        value: cdktf.stringToHclTerraform(this._placementCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      placement_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._placementTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      republish_destination: {
        value: cdktf.stringToHclTerraform(this._republishDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      republish_headers_only: {
        value: cdktf.booleanToHclTerraform(this._republishHeadersOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      republish_source: {
        value: cdktf.stringToHclTerraform(this._republishSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention: {
        value: cdktf.stringToHclTerraform(this._retention),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.stringToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_delete_marker_ttl: {
        value: cdktf.numberToHclTerraform(this._subjectDeleteMarkerTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subjects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mirror: {
        value: streamMirrorToHclTerraform(this._mirror.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamMirrorList",
      },
      source: {
        value: cdktf.listMapperHcl(streamSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamSourceList",
      },
      subject_transform: {
        value: streamSubjectTransformToHclTerraform(this._subjectTransform.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamSubjectTransformList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
