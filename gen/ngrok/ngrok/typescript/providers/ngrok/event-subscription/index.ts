// https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#description EventSubscription#description}
  */
  readonly description?: string;
  /**
  * A list of Event Destination IDs which should be used for this Event Subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#destination_ids EventSubscription#destination_ids}
  */
  readonly destinationIds?: string[];
  /**
  * Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#metadata EventSubscription#metadata}
  */
  readonly metadata?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#sources EventSubscription#sources}
  */
  readonly sources?: EventSubscriptionSources[] | cdktf.IResolvable;
}
export interface EventSubscriptionSources {
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#fields EventSubscription#fields}
  */
  readonly fields?: string[];
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#filter EventSubscription#filter}
  */
  readonly filter?: string;
  /**
  * Type of event for which an event subscription will trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#type EventSubscription#type}
  */
  readonly type?: string;
}

export function eventSubscriptionSourcesToTerraform(struct?: EventSubscriptionSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eventSubscriptionSourcesToHclTerraform(struct?: EventSubscriptionSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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

export class EventSubscriptionSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventSubscriptionSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventSubscriptionSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class EventSubscriptionSourcesList extends cdktf.ComplexList {
  public internalValue? : EventSubscriptionSources[] | cdktf.IResolvable

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
  public get(index: number): EventSubscriptionSourcesOutputReference {
    return new EventSubscriptionSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription ngrok_event_subscription}
*/
export class EventSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_event_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventSubscription to import
  * @param importFromId The id of the existing EventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_event_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/event_subscription ngrok_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventSubscriptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EventSubscriptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._destinationIds = config.destinationIds;
    this._metadata = config.metadata;
    this._sources.internalValue = config.sources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_ids - computed: false, optional: true, required: false
  private _destinationIds?: string[]; 
  public get destinationIds() {
    return this.getListAttribute('destination_ids');
  }
  public set destinationIds(value: string[]) {
    this._destinationIds = value;
  }
  public resetDestinationIds() {
    this._destinationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdsInput() {
    return this._destinationIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new EventSubscriptionSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: EventSubscriptionSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      destination_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationIds),
      metadata: cdktf.stringToTerraform(this._metadata),
      sources: cdktf.listMapper(eventSubscriptionSourcesToTerraform, true)(this._sources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources: {
        value: cdktf.listMapperHcl(eventSubscriptionSourcesToHclTerraform, true)(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventSubscriptionSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
