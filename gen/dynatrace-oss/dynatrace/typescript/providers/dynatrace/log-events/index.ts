// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#enabled LogEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#id LogEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#query LogEvents#query}
  */
  readonly query: string;
  /**
  * The textual summary of the log event entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#summary LogEvents#summary}
  */
  readonly summary: string;
  /**
  * event_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#event_template LogEvents#event_template}
  */
  readonly eventTemplate: LogEventsEventTemplate;
}
export interface LogEventsEventTemplateMetadataItem {
  /**
  * Type 'dt.' for key hints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#metadata_key LogEvents#metadata_key}
  */
  readonly metadataKey: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#metadata_value LogEvents#metadata_value}
  */
  readonly metadataValue: string;
}

export function logEventsEventTemplateMetadataItemToTerraform(struct?: LogEventsEventTemplateMetadataItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    metadata_value: cdktf.stringToTerraform(struct!.metadataValue),
  }
}


export function logEventsEventTemplateMetadataItemToHclTerraform(struct?: LogEventsEventTemplateMetadataItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_value: {
      value: cdktf.stringToHclTerraform(struct!.metadataValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogEventsEventTemplateMetadataItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogEventsEventTemplateMetadataItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._metadataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValue = this._metadataValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogEventsEventTemplateMetadataItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataKey = undefined;
      this._metadataValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataKey = value.metadataKey;
      this._metadataValue = value.metadataValue;
    }
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // metadata_value - computed: false, optional: false, required: true
  private _metadataValue?: string; 
  public get metadataValue() {
    return this.getStringAttribute('metadata_value');
  }
  public set metadataValue(value: string) {
    this._metadataValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValueInput() {
    return this._metadataValue;
  }
}

export class LogEventsEventTemplateMetadataItemList extends cdktf.ComplexList {
  public internalValue? : LogEventsEventTemplateMetadataItem[] | cdktf.IResolvable

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
  public get(index: number): LogEventsEventTemplateMetadataItemOutputReference {
    return new LogEventsEventTemplateMetadataItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogEventsEventTemplateMetadata {
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#item LogEvents#item}
  */
  readonly item: LogEventsEventTemplateMetadataItem[] | cdktf.IResolvable;
}

export function logEventsEventTemplateMetadataToTerraform(struct?: LogEventsEventTemplateMetadataOutputReference | LogEventsEventTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    item: cdktf.listMapper(logEventsEventTemplateMetadataItemToTerraform, true)(struct!.item),
  }
}


export function logEventsEventTemplateMetadataToHclTerraform(struct?: LogEventsEventTemplateMetadataOutputReference | LogEventsEventTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    item: {
      value: cdktf.listMapperHcl(logEventsEventTemplateMetadataItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "set",
      storageClassType: "LogEventsEventTemplateMetadataItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogEventsEventTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogEventsEventTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogEventsEventTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._item.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._item.internalValue = value.item;
    }
  }

  // item - computed: false, optional: false, required: true
  private _item = new LogEventsEventTemplateMetadataItemList(this, "item", true);
  public get item() {
    return this._item;
  }
  public putItem(value: LogEventsEventTemplateMetadataItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}
export interface LogEventsEventTemplate {
  /**
  * Davis® AI will try to merge this event into existing problems, otherwise a new problem will always be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#davis_merge LogEvents#davis_merge}
  */
  readonly davisMerge?: boolean | cdktf.IResolvable;
  /**
  * The description of the event to trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#description LogEvents#description}
  */
  readonly description: string;
  /**
  * Possible Values: `AVAILABILITY`, `CUSTOM_ALERT`, `CUSTOM_ANNOTATION`, `CUSTOM_CONFIGURATION`, `CUSTOM_DEPLOYMENT`, `ERROR`, `INFO`, `MARKED_FOR_TERMINATION`, `RESOURCE`, `SLOWDOWN`, `WARNING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#event_type LogEvents#event_type}
  */
  readonly eventType: string;
  /**
  * The title of the event to trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#title LogEvents#title}
  */
  readonly title: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#metadata LogEvents#metadata}
  */
  readonly metadata?: LogEventsEventTemplateMetadata;
}

export function logEventsEventTemplateToTerraform(struct?: LogEventsEventTemplateOutputReference | LogEventsEventTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    davis_merge: cdktf.booleanToTerraform(struct!.davisMerge),
    description: cdktf.stringToTerraform(struct!.description),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    title: cdktf.stringToTerraform(struct!.title),
    metadata: logEventsEventTemplateMetadataToTerraform(struct!.metadata),
  }
}


export function logEventsEventTemplateToHclTerraform(struct?: LogEventsEventTemplateOutputReference | LogEventsEventTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    davis_merge: {
      value: cdktf.booleanToHclTerraform(struct!.davisMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: logEventsEventTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "LogEventsEventTemplateMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogEventsEventTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogEventsEventTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._davisMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.davisMerge = this._davisMerge;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogEventsEventTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._davisMerge = undefined;
      this._description = undefined;
      this._eventType = undefined;
      this._title = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._davisMerge = value.davisMerge;
      this._description = value.description;
      this._eventType = value.eventType;
      this._title = value.title;
      this._metadata.internalValue = value.metadata;
    }
  }

  // davis_merge - computed: false, optional: true, required: false
  private _davisMerge?: boolean | cdktf.IResolvable; 
  public get davisMerge() {
    return this.getBooleanAttribute('davis_merge');
  }
  public set davisMerge(value: boolean | cdktf.IResolvable) {
    this._davisMerge = value;
  }
  public resetDavisMerge() {
    this._davisMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisMergeInput() {
    return this._davisMerge;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new LogEventsEventTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: LogEventsEventTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events dynatrace_log_events}
*/
export class LogEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_log_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogEvents to import
  * @param importFromId The id of the existing LogEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_log_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/log_events dynatrace_log_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogEventsConfig
  */
  public constructor(scope: Construct, id: string, config: LogEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_log_events',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._query = config.query;
    this._summary = config.summary;
    this._eventTemplate.internalValue = config.eventTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // event_template - computed: false, optional: false, required: true
  private _eventTemplate = new LogEventsEventTemplateOutputReference(this, "event_template");
  public get eventTemplate() {
    return this._eventTemplate;
  }
  public putEventTemplate(value: LogEventsEventTemplate) {
    this._eventTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTemplateInput() {
    return this._eventTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      query: cdktf.stringToTerraform(this._query),
      summary: cdktf.stringToTerraform(this._summary),
      event_template: logEventsEventTemplateToTerraform(this._eventTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_template: {
        value: logEventsEventTemplateToHclTerraform(this._eventTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogEventsEventTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
