// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * streams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#streams StreamingEvents#streams}
  */
  readonly streams: StreamingEventsStreams[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#timeouts StreamingEvents#timeouts}
  */
  readonly timeouts?: StreamingEventsTimeouts;
}
export interface StreamingEventsStreams {
  /**
  * Categories of events to subscribe to based on the type. If not specified, then all event categories are assumed.
  * 
  * 	Enum: For "customer": [ "auth", "document", "lag_interface", "logical_interface", "physical_interface", "outbound_cross_connect", "point_to_point", "rate_limit", "user", "virtual_circuit" ]
  * 	Enum: For "port": [ "errors", "etherstats", "metrics", "optical" ]
  * 	Enum: For "vc": [ "metrics" ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#events StreamingEvents#events}
  */
  readonly events?: string[];
  /**
  * Specific ports you wish to subscribe to, identified by port circuit IDs. If none are supplied, then all ports to which the customer has access are assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#ifds StreamingEvents#ifds}
  */
  readonly ifds?: string[];
  /**
  * Type of events to subscribe to.
  * 
  * 	Enum: ["customer", "port", "vc"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#type StreamingEvents#type}
  */
  readonly type: string;
  /**
  * Specific logical interfaces you wish to subscribe to, each identified by a combination of the virtual circuit ID and port circuit ID associated with the logical interface. If none are supplied, then all logical interfaces to which the customer has access are assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#vcs StreamingEvents#vcs}
  */
  readonly vcs?: string[];
}

export function streamingEventsStreamsToTerraform(struct?: StreamingEventsStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    ifds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ifds),
    type: cdktf.stringToTerraform(struct!.type),
    vcs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vcs),
  }
}


export function streamingEventsStreamsToHclTerraform(struct?: StreamingEventsStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ifds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ifds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vcs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingEventsStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamingEventsStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._ifds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifds = this._ifds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcs = this._vcs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingEventsStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._ifds = undefined;
      this._type = undefined;
      this._vcs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._ifds = value.ifds;
      this._type = value.type;
      this._vcs = value.vcs;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // ifds - computed: false, optional: true, required: false
  private _ifds?: string[]; 
  public get ifds() {
    return this.getListAttribute('ifds');
  }
  public set ifds(value: string[]) {
    this._ifds = value;
  }
  public resetIfds() {
    this._ifds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifdsInput() {
    return this._ifds;
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

  // vcs - computed: false, optional: true, required: false
  private _vcs?: string[]; 
  public get vcs() {
    return this.getListAttribute('vcs');
  }
  public set vcs(value: string[]) {
    this._vcs = value;
  }
  public resetVcs() {
    this._vcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsInput() {
    return this._vcs;
  }
}

export class StreamingEventsStreamsList extends cdktf.ComplexList {
  public internalValue? : StreamingEventsStreams[] | cdktf.IResolvable

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
  public get(index: number): StreamingEventsStreamsOutputReference {
    return new StreamingEventsStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamingEventsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#create StreamingEvents#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#read StreamingEvents#read}
  */
  readonly read?: string;
}

export function streamingEventsTimeoutsToTerraform(struct?: StreamingEventsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function streamingEventsTimeoutsToHclTerraform(struct?: StreamingEventsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingEventsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingEventsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingEventsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events packetfabric_streaming_events}
*/
export class StreamingEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_streaming_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingEvents to import
  * @param importFromId The id of the existing StreamingEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_streaming_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/streaming_events packetfabric_streaming_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingEventsConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_streaming_events',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._streams.internalValue = config.streams;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // streams - computed: false, optional: false, required: true
  private _streams = new StreamingEventsStreamsList(this, "streams", true);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: StreamingEventsStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamingEventsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamingEventsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      streams: cdktf.listMapper(streamingEventsStreamsToTerraform, true)(this._streams.internalValue),
      timeouts: streamingEventsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      streams: {
        value: cdktf.listMapperHcl(streamingEventsStreamsToHclTerraform, true)(this._streams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StreamingEventsStreamsList",
      },
      timeouts: {
        value: streamingEventsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamingEventsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
