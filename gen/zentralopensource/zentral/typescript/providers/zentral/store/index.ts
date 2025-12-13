// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls wether the store is used in the Zentral admin console. Only one store can be used in the admin console. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#admin_console Store#admin_console}
  */
  readonly adminConsole?: boolean | cdktf.IResolvable;
  /**
  * Store backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#backend Store#backend}
  */
  readonly backend: string;
  /**
  * Description of the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#description Store#description}
  */
  readonly description?: string;
  /**
  * Used to filter the events sent to the store. By default, all the events are sent to the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#event_filters Store#event_filters}
  */
  readonly eventFilters?: StoreEventFilters;
  /**
  * The `ID`s of the roles authorized to see the links to the external event store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#events_url_authorized_role_ids Store#events_url_authorized_role_ids}
  */
  readonly eventsUrlAuthorizedRoleIds?: number[];
  /**
  * HTTP backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#http Store#http}
  */
  readonly http?: StoreHttp;
  /**
  * Kinesis backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#kinesis Store#kinesis}
  */
  readonly kinesis?: StoreKinesis;
  /**
  * Name of the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#name Store#name}
  */
  readonly name: string;
  /**
  * Panther backend parameters (HTTP log source).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#panther Store#panther}
  */
  readonly panther?: StorePanther;
  /**
  * Splunk backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#splunk Store#splunk}
  */
  readonly splunk?: StoreSplunk;
}
export interface StoreEventFiltersExcludedEventFilters {
  /**
  * Set of the event types of the events to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#event_type Store#event_type}
  */
  readonly eventType?: string[];
  /**
  * Set of the routing keys of the events to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#routing_key Store#routing_key}
  */
  readonly routingKey?: string[];
  /**
  * Set of the tags of the events to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#tags Store#tags}
  */
  readonly tags?: string[];
}

export function storeEventFiltersExcludedEventFiltersToTerraform(struct?: StoreEventFiltersExcludedEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
    routing_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routingKey),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function storeEventFiltersExcludedEventFiltersToHclTerraform(struct?: StoreEventFiltersExcludedEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    routing_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routingKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreEventFiltersExcludedEventFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StoreEventFiltersExcludedEventFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreEventFiltersExcludedEventFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._routingKey = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._routingKey = value.routingKey;
      this._tags = value.tags;
    }
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string[]; 
  public get eventType() {
    return cdktf.Fn.tolist(this.getListAttribute('event_type'));
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // routing_key - computed: true, optional: true, required: false
  private _routingKey?: string[]; 
  public get routingKey() {
    return cdktf.Fn.tolist(this.getListAttribute('routing_key'));
  }
  public set routingKey(value: string[]) {
    this._routingKey = value;
  }
  public resetRoutingKey() {
    this._routingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class StoreEventFiltersExcludedEventFiltersList extends cdktf.ComplexList {
  public internalValue? : StoreEventFiltersExcludedEventFilters[] | cdktf.IResolvable

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
  public get(index: number): StoreEventFiltersExcludedEventFiltersOutputReference {
    return new StoreEventFiltersExcludedEventFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoreEventFiltersIncludedEventFilters {
  /**
  * Set of the event types of the events to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#event_type Store#event_type}
  */
  readonly eventType?: string[];
  /**
  * Set of the routing keys of the events to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#routing_key Store#routing_key}
  */
  readonly routingKey?: string[];
  /**
  * Set of the tags of the events to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#tags Store#tags}
  */
  readonly tags?: string[];
}

export function storeEventFiltersIncludedEventFiltersToTerraform(struct?: StoreEventFiltersIncludedEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
    routing_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routingKey),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function storeEventFiltersIncludedEventFiltersToHclTerraform(struct?: StoreEventFiltersIncludedEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    routing_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routingKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreEventFiltersIncludedEventFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StoreEventFiltersIncludedEventFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreEventFiltersIncludedEventFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._routingKey = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._routingKey = value.routingKey;
      this._tags = value.tags;
    }
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string[]; 
  public get eventType() {
    return cdktf.Fn.tolist(this.getListAttribute('event_type'));
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // routing_key - computed: true, optional: true, required: false
  private _routingKey?: string[]; 
  public get routingKey() {
    return cdktf.Fn.tolist(this.getListAttribute('routing_key'));
  }
  public set routingKey(value: string[]) {
    this._routingKey = value;
  }
  public resetRoutingKey() {
    this._routingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class StoreEventFiltersIncludedEventFiltersList extends cdktf.ComplexList {
  public internalValue? : StoreEventFiltersIncludedEventFilters[] | cdktf.IResolvable

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
  public get(index: number): StoreEventFiltersIncludedEventFiltersOutputReference {
    return new StoreEventFiltersIncludedEventFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoreEventFilters {
  /**
  * Excluded event filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#excluded_event_filters Store#excluded_event_filters}
  */
  readonly excludedEventFilters?: StoreEventFiltersExcludedEventFilters[] | cdktf.IResolvable;
  /**
  * Included event filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#included_event_filters Store#included_event_filters}
  */
  readonly includedEventFilters?: StoreEventFiltersIncludedEventFilters[] | cdktf.IResolvable;
}

export function storeEventFiltersToTerraform(struct?: StoreEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_event_filters: cdktf.listMapper(storeEventFiltersExcludedEventFiltersToTerraform, false)(struct!.excludedEventFilters),
    included_event_filters: cdktf.listMapper(storeEventFiltersIncludedEventFiltersToTerraform, false)(struct!.includedEventFilters),
  }
}


export function storeEventFiltersToHclTerraform(struct?: StoreEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_event_filters: {
      value: cdktf.listMapperHcl(storeEventFiltersExcludedEventFiltersToHclTerraform, false)(struct!.excludedEventFilters),
      isBlock: true,
      type: "set",
      storageClassType: "StoreEventFiltersExcludedEventFiltersList",
    },
    included_event_filters: {
      value: cdktf.listMapperHcl(storeEventFiltersIncludedEventFiltersToHclTerraform, false)(struct!.includedEventFilters),
      isBlock: true,
      type: "set",
      storageClassType: "StoreEventFiltersIncludedEventFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreEventFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoreEventFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedEventFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEventFilters = this._excludedEventFilters?.internalValue;
    }
    if (this._includedEventFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedEventFilters = this._includedEventFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreEventFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedEventFilters.internalValue = undefined;
      this._includedEventFilters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedEventFilters.internalValue = value.excludedEventFilters;
      this._includedEventFilters.internalValue = value.includedEventFilters;
    }
  }

  // excluded_event_filters - computed: true, optional: true, required: false
  private _excludedEventFilters = new StoreEventFiltersExcludedEventFiltersList(this, "excluded_event_filters", true);
  public get excludedEventFilters() {
    return this._excludedEventFilters;
  }
  public putExcludedEventFilters(value: StoreEventFiltersExcludedEventFilters[] | cdktf.IResolvable) {
    this._excludedEventFilters.internalValue = value;
  }
  public resetExcludedEventFilters() {
    this._excludedEventFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEventFiltersInput() {
    return this._excludedEventFilters.internalValue;
  }

  // included_event_filters - computed: true, optional: true, required: false
  private _includedEventFilters = new StoreEventFiltersIncludedEventFiltersList(this, "included_event_filters", true);
  public get includedEventFilters() {
    return this._includedEventFilters;
  }
  public putIncludedEventFilters(value: StoreEventFiltersIncludedEventFilters[] | cdktf.IResolvable) {
    this._includedEventFilters.internalValue = value;
  }
  public resetIncludedEventFilters() {
    this._includedEventFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedEventFiltersInput() {
    return this._includedEventFilters.internalValue;
  }
}
export interface StoreHttpHeaders {
  /**
  * Name of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#name Store#name}
  */
  readonly name: string;
  /**
  * Value of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#value Store#value}
  */
  readonly value: string;
}

export function storeHttpHeadersToTerraform(struct?: StoreHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storeHttpHeadersToHclTerraform(struct?: StoreHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StoreHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StoreHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : StoreHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): StoreHttpHeadersOutputReference {
    return new StoreHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoreHttp {
  /**
  * Number of threads used to post to the endpoints. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#concurrency Store#concurrency}
  */
  readonly concurrency?: number;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#endpoint_url Store#endpoint_url}
  */
  readonly endpointUrl: string;
  /**
  * A set of additional HTTP headers to add to the POST requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#headers Store#headers}
  */
  readonly headers?: StoreHttpHeaders[] | cdktf.IResolvable;
  /**
  * Number of retries after a failed request. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#max_retries Store#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Password for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#password Store#password}
  */
  readonly password?: string;
  /**
  * Request timeout in seconds. Defaults to `120` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#request_timeout Store#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Username for basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#username Store#username}
  */
  readonly username?: string;
  /**
  * Controls whether the TLS certificates will be verified. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#verify_tls Store#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
}

export function storeHttpToTerraform(struct?: StoreHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    headers: cdktf.listMapper(storeHttpHeadersToTerraform, false)(struct!.headers),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    password: cdktf.stringToTerraform(struct!.password),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    username: cdktf.stringToTerraform(struct!.username),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
  }
}


export function storeHttpToHclTerraform(struct?: StoreHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(storeHttpHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "StoreHttpHeadersList",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoreHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._endpointUrl = undefined;
      this._headers.internalValue = undefined;
      this._maxRetries = undefined;
      this._password = undefined;
      this._requestTimeout = undefined;
      this._username = undefined;
      this._verifyTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._endpointUrl = value.endpointUrl;
      this._headers.internalValue = value.headers;
      this._maxRetries = value.maxRetries;
      this._password = value.password;
      this._requestTimeout = value.requestTimeout;
      this._username = value.username;
      this._verifyTls = value.verifyTls;
    }
  }

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // endpoint_url - computed: false, optional: false, required: true
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new StoreHttpHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: StoreHttpHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // max_retries - computed: true, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_tls - computed: true, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }
}
export interface StoreKinesis {
  /**
  * `ARN` of the AWS role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#assume_role_arn Store#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#aws_access_key_id Store#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#aws_secret_access_key Store#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * Number of events sent in a single request. Defaults to `1`. Must be between `1` and `500`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#batch_size Store#batch_size}
  */
  readonly batchSize?: number;
  /**
  * AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#region_name Store#region_name}
  */
  readonly regionName: string;
  /**
  * Zentral event serialization format. Either `zentral` or `firehose_v1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#serialization_format Store#serialization_format}
  */
  readonly serializationFormat: string;
  /**
  * Name of the Kinesis stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#stream Store#stream}
  */
  readonly stream: string;
}

export function storeKinesisToTerraform(struct?: StoreKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role_arn: cdktf.stringToTerraform(struct!.assumeRoleArn),
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    serialization_format: cdktf.stringToTerraform(struct!.serializationFormat),
    stream: cdktf.stringToTerraform(struct!.stream),
  }
}


export function storeKinesisToHclTerraform(struct?: StoreKinesis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serialization_format: {
      value: cdktf.stringToHclTerraform(struct!.serializationFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreKinesisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoreKinesis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleArn = this._assumeRoleArn;
    }
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsSecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretAccessKey = this._awsSecretAccessKey;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    if (this._serializationFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationFormat = this._serializationFormat;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreKinesis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRoleArn = undefined;
      this._awsAccessKeyId = undefined;
      this._awsSecretAccessKey = undefined;
      this._batchSize = undefined;
      this._regionName = undefined;
      this._serializationFormat = undefined;
      this._stream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRoleArn = value.assumeRoleArn;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsSecretAccessKey = value.awsSecretAccessKey;
      this._batchSize = value.batchSize;
      this._regionName = value.regionName;
      this._serializationFormat = value.serializationFormat;
      this._stream = value.stream;
    }
  }

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // aws_access_key_id - computed: false, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: true, required: false
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  public resetAwsSecretAccessKey() {
    this._awsSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // serialization_format - computed: false, optional: false, required: true
  private _serializationFormat?: string; 
  public get serializationFormat() {
    return this.getStringAttribute('serialization_format');
  }
  public set serializationFormat(value: string) {
    this._serializationFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationFormatInput() {
    return this._serializationFormat;
  }

  // stream - computed: false, optional: false, required: true
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }
}
export interface StorePanther {
  /**
  * Number of events sent in a single request. Defaults to `1`. Must be between `1` and `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#batch_size Store#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Bearer Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#bearer_token Store#bearer_token}
  */
  readonly bearerToken: string;
  /**
  * HTTP log source URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#endpoint_url Store#endpoint_url}
  */
  readonly endpointUrl: string;
}

export function storePantherToTerraform(struct?: StorePanther | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
  }
}


export function storePantherToHclTerraform(struct?: StorePanther | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorePantherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorePanther | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorePanther | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._bearerToken = undefined;
      this._endpointUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._bearerToken = value.bearerToken;
      this._endpointUrl = value.endpointUrl;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // bearer_token - computed: false, optional: false, required: true
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // endpoint_url - computed: false, optional: false, required: true
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }
}
export interface StoreSplunkHecExtraHeaders {
  /**
  * Name of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#name Store#name}
  */
  readonly name: string;
  /**
  * Value of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#value Store#value}
  */
  readonly value: string;
}

export function storeSplunkHecExtraHeadersToTerraform(struct?: StoreSplunkHecExtraHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storeSplunkHecExtraHeadersToHclTerraform(struct?: StoreSplunkHecExtraHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreSplunkHecExtraHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StoreSplunkHecExtraHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreSplunkHecExtraHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StoreSplunkHecExtraHeadersList extends cdktf.ComplexList {
  public internalValue? : StoreSplunkHecExtraHeaders[] | cdktf.IResolvable

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
  public get(index: number): StoreSplunkHecExtraHeadersOutputReference {
    return new StoreSplunkHecExtraHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoreSplunkSearchExtraHeaders {
  /**
  * Name of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#name Store#name}
  */
  readonly name: string;
  /**
  * Value of the HTTP header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#value Store#value}
  */
  readonly value: string;
}

export function storeSplunkSearchExtraHeadersToTerraform(struct?: StoreSplunkSearchExtraHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function storeSplunkSearchExtraHeadersToHclTerraform(struct?: StoreSplunkSearchExtraHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreSplunkSearchExtraHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StoreSplunkSearchExtraHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreSplunkSearchExtraHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StoreSplunkSearchExtraHeadersList extends cdktf.ComplexList {
  public internalValue? : StoreSplunkSearchExtraHeaders[] | cdktf.IResolvable

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
  public get(index: number): StoreSplunkSearchExtraHeadersOutputReference {
    return new StoreSplunkSearchExtraHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StoreSplunk {
  /**
  * Number of events sent in a single request. Defaults to `1`. Must be between `1` and `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#batch_size Store#batch_size}
  */
  readonly batchSize?: number;
  /**
  * List of the preferred inventory sources for the events `computer_name` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#computer_name_as_host_sources Store#computer_name_as_host_sources}
  */
  readonly computerNameAsHostSources?: string[];
  /**
  * Name of an optional field to copy the `host` field value to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#custom_host_field Store#custom_host_field}
  */
  readonly customHostField?: string;
  /**
  * A set of additional HTTP headers to add to the HEC requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#hec_extra_headers Store#hec_extra_headers}
  */
  readonly hecExtraHeaders?: StoreSplunkHecExtraHeaders[] | cdktf.IResolvable;
  /**
  * HEC index. Usually enforced in the HEC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#hec_index Store#hec_index}
  */
  readonly hecIndex?: string;
  /**
  * HEC request timeout in seconds. Defaults to `300` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#hec_request_timeout Store#hec_request_timeout}
  */
  readonly hecRequestTimeout?: number;
  /**
  * HEC source. Usually enforced in the HEC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#hec_source Store#hec_source}
  */
  readonly hecSource?: string;
  /**
  * HEC token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#hec_token Store#hec_token}
  */
  readonly hecToken: string;
  /**
  * HEC endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#hec_url Store#hec_url}
  */
  readonly hecUrl: string;
  /**
  * Base URL of the Splunk search application. Used to build the links to the Splunk instance displayed when browsing the events in the Zentral admin console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_app_url Store#search_app_url}
  */
  readonly searchAppUrl?: string;
  /**
  * A set of additional HTTP headers to add to the search API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_extra_headers Store#search_extra_headers}
  */
  readonly searchExtraHeaders?: StoreSplunkSearchExtraHeaders[] | cdktf.IResolvable;
  /**
  * Index to use with the Search API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_index Store#search_index}
  */
  readonly searchIndex?: string;
  /**
  * Search API request timeout in seconds. Defaults to `300` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_request_timeout Store#search_request_timeout}
  */
  readonly searchRequestTimeout?: number;
  /**
  * Source to use with the Search API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_source Store#search_source}
  */
  readonly searchSource?: string;
  /**
  * Splunk API token. Used in combination with `search_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_token Store#search_token}
  */
  readonly searchToken?: string;
  /**
  * Splunk API base URL. Used in combination with `search_token` to fetch the events displayed in the Zentral admin console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#search_url Store#search_url}
  */
  readonly searchUrl?: string;
  /**
  * Name of the field to use for the events machine serial number. Defaults to `machine_serial_number`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#serial_number_field Store#serial_number_field}
  */
  readonly serialNumberField?: string;
  /**
  * Controls whether the TLS certificates will be verified. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#verify_tls Store#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
}

export function storeSplunkToTerraform(struct?: StoreSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    computer_name_as_host_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.computerNameAsHostSources),
    custom_host_field: cdktf.stringToTerraform(struct!.customHostField),
    hec_extra_headers: cdktf.listMapper(storeSplunkHecExtraHeadersToTerraform, false)(struct!.hecExtraHeaders),
    hec_index: cdktf.stringToTerraform(struct!.hecIndex),
    hec_request_timeout: cdktf.numberToTerraform(struct!.hecRequestTimeout),
    hec_source: cdktf.stringToTerraform(struct!.hecSource),
    hec_token: cdktf.stringToTerraform(struct!.hecToken),
    hec_url: cdktf.stringToTerraform(struct!.hecUrl),
    search_app_url: cdktf.stringToTerraform(struct!.searchAppUrl),
    search_extra_headers: cdktf.listMapper(storeSplunkSearchExtraHeadersToTerraform, false)(struct!.searchExtraHeaders),
    search_index: cdktf.stringToTerraform(struct!.searchIndex),
    search_request_timeout: cdktf.numberToTerraform(struct!.searchRequestTimeout),
    search_source: cdktf.stringToTerraform(struct!.searchSource),
    search_token: cdktf.stringToTerraform(struct!.searchToken),
    search_url: cdktf.stringToTerraform(struct!.searchUrl),
    serial_number_field: cdktf.stringToTerraform(struct!.serialNumberField),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
  }
}


export function storeSplunkToHclTerraform(struct?: StoreSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    computer_name_as_host_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.computerNameAsHostSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_host_field: {
      value: cdktf.stringToHclTerraform(struct!.customHostField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_extra_headers: {
      value: cdktf.listMapperHcl(storeSplunkHecExtraHeadersToHclTerraform, false)(struct!.hecExtraHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "StoreSplunkHecExtraHeadersList",
    },
    hec_index: {
      value: cdktf.stringToHclTerraform(struct!.hecIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.hecRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hec_source: {
      value: cdktf.stringToHclTerraform(struct!.hecSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_token: {
      value: cdktf.stringToHclTerraform(struct!.hecToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hec_url: {
      value: cdktf.stringToHclTerraform(struct!.hecUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_app_url: {
      value: cdktf.stringToHclTerraform(struct!.searchAppUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_extra_headers: {
      value: cdktf.listMapperHcl(storeSplunkSearchExtraHeadersToHclTerraform, false)(struct!.searchExtraHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "StoreSplunkSearchExtraHeadersList",
    },
    search_index: {
      value: cdktf.stringToHclTerraform(struct!.searchIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.searchRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_source: {
      value: cdktf.stringToHclTerraform(struct!.searchSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_token: {
      value: cdktf.stringToHclTerraform(struct!.searchToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_url: {
      value: cdktf.stringToHclTerraform(struct!.searchUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number_field: {
      value: cdktf.stringToHclTerraform(struct!.serialNumberField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreSplunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoreSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._computerNameAsHostSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.computerNameAsHostSources = this._computerNameAsHostSources;
    }
    if (this._customHostField !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostField = this._customHostField;
    }
    if (this._hecExtraHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecExtraHeaders = this._hecExtraHeaders?.internalValue;
    }
    if (this._hecIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecIndex = this._hecIndex;
    }
    if (this._hecRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecRequestTimeout = this._hecRequestTimeout;
    }
    if (this._hecSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecSource = this._hecSource;
    }
    if (this._hecToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecToken = this._hecToken;
    }
    if (this._hecUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hecUrl = this._hecUrl;
    }
    if (this._searchAppUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAppUrl = this._searchAppUrl;
    }
    if (this._searchExtraHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchExtraHeaders = this._searchExtraHeaders?.internalValue;
    }
    if (this._searchIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchIndex = this._searchIndex;
    }
    if (this._searchRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchRequestTimeout = this._searchRequestTimeout;
    }
    if (this._searchSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSource = this._searchSource;
    }
    if (this._searchToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchToken = this._searchToken;
    }
    if (this._searchUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchUrl = this._searchUrl;
    }
    if (this._serialNumberField !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumberField = this._serialNumberField;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._computerNameAsHostSources = undefined;
      this._customHostField = undefined;
      this._hecExtraHeaders.internalValue = undefined;
      this._hecIndex = undefined;
      this._hecRequestTimeout = undefined;
      this._hecSource = undefined;
      this._hecToken = undefined;
      this._hecUrl = undefined;
      this._searchAppUrl = undefined;
      this._searchExtraHeaders.internalValue = undefined;
      this._searchIndex = undefined;
      this._searchRequestTimeout = undefined;
      this._searchSource = undefined;
      this._searchToken = undefined;
      this._searchUrl = undefined;
      this._serialNumberField = undefined;
      this._verifyTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._computerNameAsHostSources = value.computerNameAsHostSources;
      this._customHostField = value.customHostField;
      this._hecExtraHeaders.internalValue = value.hecExtraHeaders;
      this._hecIndex = value.hecIndex;
      this._hecRequestTimeout = value.hecRequestTimeout;
      this._hecSource = value.hecSource;
      this._hecToken = value.hecToken;
      this._hecUrl = value.hecUrl;
      this._searchAppUrl = value.searchAppUrl;
      this._searchExtraHeaders.internalValue = value.searchExtraHeaders;
      this._searchIndex = value.searchIndex;
      this._searchRequestTimeout = value.searchRequestTimeout;
      this._searchSource = value.searchSource;
      this._searchToken = value.searchToken;
      this._searchUrl = value.searchUrl;
      this._serialNumberField = value.serialNumberField;
      this._verifyTls = value.verifyTls;
    }
  }

  // batch_size - computed: true, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // computer_name_as_host_sources - computed: true, optional: true, required: false
  private _computerNameAsHostSources?: string[]; 
  public get computerNameAsHostSources() {
    return this.getListAttribute('computer_name_as_host_sources');
  }
  public set computerNameAsHostSources(value: string[]) {
    this._computerNameAsHostSources = value;
  }
  public resetComputerNameAsHostSources() {
    this._computerNameAsHostSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNameAsHostSourcesInput() {
    return this._computerNameAsHostSources;
  }

  // custom_host_field - computed: false, optional: true, required: false
  private _customHostField?: string; 
  public get customHostField() {
    return this.getStringAttribute('custom_host_field');
  }
  public set customHostField(value: string) {
    this._customHostField = value;
  }
  public resetCustomHostField() {
    this._customHostField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostFieldInput() {
    return this._customHostField;
  }

  // hec_extra_headers - computed: true, optional: true, required: false
  private _hecExtraHeaders = new StoreSplunkHecExtraHeadersList(this, "hec_extra_headers", true);
  public get hecExtraHeaders() {
    return this._hecExtraHeaders;
  }
  public putHecExtraHeaders(value: StoreSplunkHecExtraHeaders[] | cdktf.IResolvable) {
    this._hecExtraHeaders.internalValue = value;
  }
  public resetHecExtraHeaders() {
    this._hecExtraHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecExtraHeadersInput() {
    return this._hecExtraHeaders.internalValue;
  }

  // hec_index - computed: false, optional: true, required: false
  private _hecIndex?: string; 
  public get hecIndex() {
    return this.getStringAttribute('hec_index');
  }
  public set hecIndex(value: string) {
    this._hecIndex = value;
  }
  public resetHecIndex() {
    this._hecIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecIndexInput() {
    return this._hecIndex;
  }

  // hec_request_timeout - computed: true, optional: true, required: false
  private _hecRequestTimeout?: number; 
  public get hecRequestTimeout() {
    return this.getNumberAttribute('hec_request_timeout');
  }
  public set hecRequestTimeout(value: number) {
    this._hecRequestTimeout = value;
  }
  public resetHecRequestTimeout() {
    this._hecRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecRequestTimeoutInput() {
    return this._hecRequestTimeout;
  }

  // hec_source - computed: false, optional: true, required: false
  private _hecSource?: string; 
  public get hecSource() {
    return this.getStringAttribute('hec_source');
  }
  public set hecSource(value: string) {
    this._hecSource = value;
  }
  public resetHecSource() {
    this._hecSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecSourceInput() {
    return this._hecSource;
  }

  // hec_token - computed: false, optional: false, required: true
  private _hecToken?: string; 
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }
  public set hecToken(value: string) {
    this._hecToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecTokenInput() {
    return this._hecToken;
  }

  // hec_url - computed: false, optional: false, required: true
  private _hecUrl?: string; 
  public get hecUrl() {
    return this.getStringAttribute('hec_url');
  }
  public set hecUrl(value: string) {
    this._hecUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecUrlInput() {
    return this._hecUrl;
  }

  // search_app_url - computed: false, optional: true, required: false
  private _searchAppUrl?: string; 
  public get searchAppUrl() {
    return this.getStringAttribute('search_app_url');
  }
  public set searchAppUrl(value: string) {
    this._searchAppUrl = value;
  }
  public resetSearchAppUrl() {
    this._searchAppUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAppUrlInput() {
    return this._searchAppUrl;
  }

  // search_extra_headers - computed: true, optional: true, required: false
  private _searchExtraHeaders = new StoreSplunkSearchExtraHeadersList(this, "search_extra_headers", true);
  public get searchExtraHeaders() {
    return this._searchExtraHeaders;
  }
  public putSearchExtraHeaders(value: StoreSplunkSearchExtraHeaders[] | cdktf.IResolvable) {
    this._searchExtraHeaders.internalValue = value;
  }
  public resetSearchExtraHeaders() {
    this._searchExtraHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchExtraHeadersInput() {
    return this._searchExtraHeaders.internalValue;
  }

  // search_index - computed: false, optional: true, required: false
  private _searchIndex?: string; 
  public get searchIndex() {
    return this.getStringAttribute('search_index');
  }
  public set searchIndex(value: string) {
    this._searchIndex = value;
  }
  public resetSearchIndex() {
    this._searchIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIndexInput() {
    return this._searchIndex;
  }

  // search_request_timeout - computed: true, optional: true, required: false
  private _searchRequestTimeout?: number; 
  public get searchRequestTimeout() {
    return this.getNumberAttribute('search_request_timeout');
  }
  public set searchRequestTimeout(value: number) {
    this._searchRequestTimeout = value;
  }
  public resetSearchRequestTimeout() {
    this._searchRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchRequestTimeoutInput() {
    return this._searchRequestTimeout;
  }

  // search_source - computed: false, optional: true, required: false
  private _searchSource?: string; 
  public get searchSource() {
    return this.getStringAttribute('search_source');
  }
  public set searchSource(value: string) {
    this._searchSource = value;
  }
  public resetSearchSource() {
    this._searchSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSourceInput() {
    return this._searchSource;
  }

  // search_token - computed: false, optional: true, required: false
  private _searchToken?: string; 
  public get searchToken() {
    return this.getStringAttribute('search_token');
  }
  public set searchToken(value: string) {
    this._searchToken = value;
  }
  public resetSearchToken() {
    this._searchToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTokenInput() {
    return this._searchToken;
  }

  // search_url - computed: false, optional: true, required: false
  private _searchUrl?: string; 
  public get searchUrl() {
    return this.getStringAttribute('search_url');
  }
  public set searchUrl(value: string) {
    this._searchUrl = value;
  }
  public resetSearchUrl() {
    this._searchUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchUrlInput() {
    return this._searchUrl;
  }

  // serial_number_field - computed: true, optional: true, required: false
  private _serialNumberField?: string; 
  public get serialNumberField() {
    return this.getStringAttribute('serial_number_field');
  }
  public set serialNumberField(value: string) {
    this._serialNumberField = value;
  }
  public resetSerialNumberField() {
    this._serialNumberField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberFieldInput() {
    return this._serialNumberField;
  }

  // verify_tls - computed: true, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store zentral_store}
*/
export class Store extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Store resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Store to import
  * @param importFromId The id of the existing Store that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Store to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/store zentral_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoreConfig
  */
  public constructor(scope: Construct, id: string, config: StoreConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_store',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminConsole = config.adminConsole;
    this._backend = config.backend;
    this._description = config.description;
    this._eventFilters.internalValue = config.eventFilters;
    this._eventsUrlAuthorizedRoleIds = config.eventsUrlAuthorizedRoleIds;
    this._http.internalValue = config.http;
    this._kinesis.internalValue = config.kinesis;
    this._name = config.name;
    this._panther.internalValue = config.panther;
    this._splunk.internalValue = config.splunk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_console - computed: true, optional: true, required: false
  private _adminConsole?: boolean | cdktf.IResolvable; 
  public get adminConsole() {
    return this.getBooleanAttribute('admin_console');
  }
  public set adminConsole(value: boolean | cdktf.IResolvable) {
    this._adminConsole = value;
  }
  public resetAdminConsole() {
    this._adminConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsoleInput() {
    return this._adminConsole;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // description - computed: true, optional: true, required: false
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

  // event_filters - computed: true, optional: true, required: false
  private _eventFilters = new StoreEventFiltersOutputReference(this, "event_filters");
  public get eventFilters() {
    return this._eventFilters;
  }
  public putEventFilters(value: StoreEventFilters) {
    this._eventFilters.internalValue = value;
  }
  public resetEventFilters() {
    this._eventFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFiltersInput() {
    return this._eventFilters.internalValue;
  }

  // events_url_authorized_role_ids - computed: true, optional: true, required: false
  private _eventsUrlAuthorizedRoleIds?: number[]; 
  public get eventsUrlAuthorizedRoleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('events_url_authorized_role_ids')));
  }
  public set eventsUrlAuthorizedRoleIds(value: number[]) {
    this._eventsUrlAuthorizedRoleIds = value;
  }
  public resetEventsUrlAuthorizedRoleIds() {
    this._eventsUrlAuthorizedRoleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsUrlAuthorizedRoleIdsInput() {
    return this._eventsUrlAuthorizedRoleIds;
  }

  // http - computed: false, optional: true, required: false
  private _http = new StoreHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: StoreHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis = new StoreKinesisOutputReference(this, "kinesis");
  public get kinesis() {
    return this._kinesis;
  }
  public putKinesis(value: StoreKinesis) {
    this._kinesis.internalValue = value;
  }
  public resetKinesis() {
    this._kinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis.internalValue;
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

  // panther - computed: false, optional: true, required: false
  private _panther = new StorePantherOutputReference(this, "panther");
  public get panther() {
    return this._panther;
  }
  public putPanther(value: StorePanther) {
    this._panther.internalValue = value;
  }
  public resetPanther() {
    this._panther.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pantherInput() {
    return this._panther.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new StoreSplunkOutputReference(this, "splunk");
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: StoreSplunk) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_console: cdktf.booleanToTerraform(this._adminConsole),
      backend: cdktf.stringToTerraform(this._backend),
      description: cdktf.stringToTerraform(this._description),
      event_filters: storeEventFiltersToTerraform(this._eventFilters.internalValue),
      events_url_authorized_role_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._eventsUrlAuthorizedRoleIds),
      http: storeHttpToTerraform(this._http.internalValue),
      kinesis: storeKinesisToTerraform(this._kinesis.internalValue),
      name: cdktf.stringToTerraform(this._name),
      panther: storePantherToTerraform(this._panther.internalValue),
      splunk: storeSplunkToTerraform(this._splunk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_console: {
        value: cdktf.booleanToHclTerraform(this._adminConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_filters: {
        value: storeEventFiltersToHclTerraform(this._eventFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoreEventFilters",
      },
      events_url_authorized_role_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._eventsUrlAuthorizedRoleIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      http: {
        value: storeHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoreHttp",
      },
      kinesis: {
        value: storeKinesisToHclTerraform(this._kinesis.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoreKinesis",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      panther: {
        value: storePantherToHclTerraform(this._panther.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorePanther",
      },
      splunk: {
        value: storeSplunkToHclTerraform(this._splunk.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoreSplunk",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
