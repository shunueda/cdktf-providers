// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `ID`s of the actions triggered by the probe when an event matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#action_ids Probe#action_ids}
  */
  readonly actionIds?: string[];
  /**
  * If true, the probe is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#active Probe#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Description of the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#description Probe#description}
  */
  readonly description?: string;
  /**
  * Severity of the incidents triggered by this probe (`100`, `200`, `300`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#incident_severity Probe#incident_severity}
  */
  readonly incidentSeverity?: number;
  /**
  * A set of filters used to filter the events based on inventory attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#inventory_filters Probe#inventory_filters}
  */
  readonly inventoryFilters?: ProbeInventoryFilters[] | cdktf.IResolvable;
  /**
  * A set of filters used to filter the events based on their metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#metadata_filters Probe#metadata_filters}
  */
  readonly metadataFilters?: ProbeMetadataFilters[] | cdktf.IResolvable;
  /**
  * Name of the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#name Probe#name}
  */
  readonly name: string;
  /**
  * A set of filters used to filter the events based on their payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#payload_filters Probe#payload_filters}
  */
  readonly payloadFilters?: ProbePayloadFiltersList[] | cdktf.IResolvable;
}
export interface ProbeInventoryFilters {
  /**
  * The `ID`s of the meta business units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#meta_business_unit_ids Probe#meta_business_unit_ids}
  */
  readonly metaBusinessUnitIds?: number[];
  /**
  * The machine platforms (`LINUX`, `MACOS`, `WINDOWS`, `ANDROID`, `IOS`, `IPADOS`, `TVOS`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#platforms Probe#platforms}
  */
  readonly platforms?: string[];
  /**
  * The `ID`s of the machine tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#tag_ids Probe#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * The machine platforms (`DESKTOP`, `EC2`, `LAPTOP`, `MOBILE`, `SERVER`, `TABLET`, `TV`, `VM`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#types Probe#types}
  */
  readonly types?: string[];
}

export function probeInventoryFiltersToTerraform(struct?: ProbeInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    meta_business_unit_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.metaBusinessUnitIds),
    platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platforms),
    tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.tagIds),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function probeInventoryFiltersToHclTerraform(struct?: ProbeInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    meta_business_unit_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.metaBusinessUnitIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.tagIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbeInventoryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProbeInventoryFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metaBusinessUnitIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaBusinessUnitIds = this._metaBusinessUnitIds;
    }
    if (this._platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.platforms = this._platforms;
    }
    if (this._tagIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIds = this._tagIds;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbeInventoryFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metaBusinessUnitIds = undefined;
      this._platforms = undefined;
      this._tagIds = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metaBusinessUnitIds = value.metaBusinessUnitIds;
      this._platforms = value.platforms;
      this._tagIds = value.tagIds;
      this._types = value.types;
    }
  }

  // meta_business_unit_ids - computed: true, optional: true, required: false
  private _metaBusinessUnitIds?: number[]; 
  public get metaBusinessUnitIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('meta_business_unit_ids')));
  }
  public set metaBusinessUnitIds(value: number[]) {
    this._metaBusinessUnitIds = value;
  }
  public resetMetaBusinessUnitIds() {
    this._metaBusinessUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaBusinessUnitIdsInput() {
    return this._metaBusinessUnitIds;
  }

  // platforms - computed: true, optional: true, required: false
  private _platforms?: string[]; 
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }
  public set platforms(value: string[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class ProbeInventoryFiltersList extends cdktf.ComplexList {
  public internalValue? : ProbeInventoryFilters[] | cdktf.IResolvable

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
  public get(index: number): ProbeInventoryFiltersOutputReference {
    return new ProbeInventoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProbeMetadataFilters {
  /**
  * The event routing keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#event_routing_keys Probe#event_routing_keys}
  */
  readonly eventRoutingKeys?: string[];
  /**
  * The event tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#event_tags Probe#event_tags}
  */
  readonly eventTags?: string[];
  /**
  * The event types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#event_types Probe#event_types}
  */
  readonly eventTypes?: string[];
}

export function probeMetadataFiltersToTerraform(struct?: ProbeMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_routing_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventRoutingKeys),
    event_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTags),
    event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTypes),
  }
}


export function probeMetadataFiltersToHclTerraform(struct?: ProbeMetadataFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_routing_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventRoutingKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    event_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    event_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbeMetadataFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProbeMetadataFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventRoutingKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventRoutingKeys = this._eventRoutingKeys;
    }
    if (this._eventTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTags = this._eventTags;
    }
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbeMetadataFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventRoutingKeys = undefined;
      this._eventTags = undefined;
      this._eventTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventRoutingKeys = value.eventRoutingKeys;
      this._eventTags = value.eventTags;
      this._eventTypes = value.eventTypes;
    }
  }

  // event_routing_keys - computed: true, optional: true, required: false
  private _eventRoutingKeys?: string[]; 
  public get eventRoutingKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('event_routing_keys'));
  }
  public set eventRoutingKeys(value: string[]) {
    this._eventRoutingKeys = value;
  }
  public resetEventRoutingKeys() {
    this._eventRoutingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRoutingKeysInput() {
    return this._eventRoutingKeys;
  }

  // event_tags - computed: true, optional: true, required: false
  private _eventTags?: string[]; 
  public get eventTags() {
    return cdktf.Fn.tolist(this.getListAttribute('event_tags'));
  }
  public set eventTags(value: string[]) {
    this._eventTags = value;
  }
  public resetEventTags() {
    this._eventTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTagsInput() {
    return this._eventTags;
  }

  // event_types - computed: true, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }
}

export class ProbeMetadataFiltersList extends cdktf.ComplexList {
  public internalValue? : ProbeMetadataFilters[] | cdktf.IResolvable

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
  public get(index: number): ProbeMetadataFiltersOutputReference {
    return new ProbeMetadataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProbePayloadFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#attribute Probe#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#operator Probe#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#values Probe#values}
  */
  readonly values?: string[];
}

export function probePayloadFiltersToTerraform(struct?: ProbePayloadFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function probePayloadFiltersToHclTerraform(struct?: ProbePayloadFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProbePayloadFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProbePayloadFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProbePayloadFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ProbePayloadFiltersListList extends cdktf.MapList {
  public internalValue? : ProbePayloadFilters[][] | cdktf.IResolvable

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
  public get(index: number): ProbePayloadFiltersList {
    return new ProbePayloadFiltersList(this, `[${index}]`, true);
  }
}

export class ProbePayloadFiltersList extends cdktf.ComplexList {
  public internalValue? : ProbePayloadFilters[] | cdktf.IResolvable

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
  public get(index: number): ProbePayloadFiltersOutputReference {
    return new ProbePayloadFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe zentral_probe}
*/
export class Probe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Probe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Probe to import
  * @param importFromId The id of the existing Probe that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Probe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/probe zentral_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProbeConfig
  */
  public constructor(scope: Construct, id: string, config: ProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_probe',
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
    this._actionIds = config.actionIds;
    this._active = config.active;
    this._description = config.description;
    this._incidentSeverity = config.incidentSeverity;
    this._inventoryFilters.internalValue = config.inventoryFilters;
    this._metadataFilters.internalValue = config.metadataFilters;
    this._name = config.name;
    this._payloadFilters.internalValue = config.payloadFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_ids - computed: true, optional: true, required: false
  private _actionIds?: string[]; 
  public get actionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('action_ids'));
  }
  public set actionIds(value: string[]) {
    this._actionIds = value;
  }
  public resetActionIds() {
    this._actionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdsInput() {
    return this._actionIds;
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // incident_severity - computed: false, optional: true, required: false
  private _incidentSeverity?: number; 
  public get incidentSeverity() {
    return this.getNumberAttribute('incident_severity');
  }
  public set incidentSeverity(value: number) {
    this._incidentSeverity = value;
  }
  public resetIncidentSeverity() {
    this._incidentSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentSeverityInput() {
    return this._incidentSeverity;
  }

  // inventory_filters - computed: true, optional: true, required: false
  private _inventoryFilters = new ProbeInventoryFiltersList(this, "inventory_filters", true);
  public get inventoryFilters() {
    return this._inventoryFilters;
  }
  public putInventoryFilters(value: ProbeInventoryFilters[] | cdktf.IResolvable) {
    this._inventoryFilters.internalValue = value;
  }
  public resetInventoryFilters() {
    this._inventoryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryFiltersInput() {
    return this._inventoryFilters.internalValue;
  }

  // metadata_filters - computed: true, optional: true, required: false
  private _metadataFilters = new ProbeMetadataFiltersList(this, "metadata_filters", true);
  public get metadataFilters() {
    return this._metadataFilters;
  }
  public putMetadataFilters(value: ProbeMetadataFilters[] | cdktf.IResolvable) {
    this._metadataFilters.internalValue = value;
  }
  public resetMetadataFilters() {
    this._metadataFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFiltersInput() {
    return this._metadataFilters.internalValue;
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

  // payload_filters - computed: true, optional: true, required: false
  private _payloadFilters = new ProbePayloadFiltersListList(this, "payload_filters", true);
  public get payloadFilters() {
    return this._payloadFilters;
  }
  public putPayloadFilters(value: ProbePayloadFiltersList[] | cdktf.IResolvable) {
    this._payloadFilters.internalValue = value;
  }
  public resetPayloadFilters() {
    this._payloadFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFiltersInput() {
    return this._payloadFilters.internalValue;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actionIds),
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      incident_severity: cdktf.numberToTerraform(this._incidentSeverity),
      inventory_filters: cdktf.listMapper(probeInventoryFiltersToTerraform, false)(this._inventoryFilters.internalValue),
      metadata_filters: cdktf.listMapper(probeMetadataFiltersToTerraform, false)(this._metadataFilters.internalValue),
      name: cdktf.stringToTerraform(this._name),
      payload_filters: cdktf.listMapper(cdktf.listMapper(probePayloadFiltersToTerraform, false), false)(this._payloadFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
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
      incident_severity: {
        value: cdktf.numberToHclTerraform(this._incidentSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inventory_filters: {
        value: cdktf.listMapperHcl(probeInventoryFiltersToHclTerraform, false)(this._inventoryFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProbeInventoryFiltersList",
      },
      metadata_filters: {
        value: cdktf.listMapperHcl(probeMetadataFiltersToHclTerraform, false)(this._metadataFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProbeMetadataFiltersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payload_filters: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(probePayloadFiltersToHclTerraform, false), false)(this._payloadFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProbePayloadFiltersListList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
