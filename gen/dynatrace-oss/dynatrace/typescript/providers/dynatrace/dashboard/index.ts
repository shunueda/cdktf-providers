// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dashboard_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#dashboard_metadata Dashboard#dashboard_metadata}
  */
  readonly dashboardMetadata?: DashboardDashboardMetadata;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#metadata Dashboard#metadata}
  */
  readonly metadata?: DashboardMetadata;
  /**
  * tile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#tile Dashboard#tile}
  */
  readonly tile?: DashboardTile[] | cdktf.IResolvable;
}
export interface DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter {
  /**
  * Entity types affected by tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#entity_types Dashboard#entity_types}
  */
  readonly entityTypes: string[];
  /**
  * The display name used to identify this generic filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * The entity type for which the suggestions should be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#suggestions_from_entity_type Dashboard#suggestions_from_entity_type}
  */
  readonly suggestionsFromEntityType?: string;
  /**
  * The tag key for this filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#tag_key Dashboard#tag_key}
  */
  readonly tagKey?: string;
}

export function dashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterToTerraform(struct?: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityTypes),
    name: cdktf.stringToTerraform(struct!.name),
    suggestions_from_entity_type: cdktf.stringToTerraform(struct!.suggestionsFromEntityType),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
  }
}


export function dashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterToHclTerraform(struct?: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suggestions_from_entity_type: {
      value: cdktf.stringToHclTerraform(struct!.suggestionsFromEntityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suggestionsFromEntityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestionsFromEntityType = this._suggestionsFromEntityType;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityTypes = undefined;
      this._name = undefined;
      this._suggestionsFromEntityType = undefined;
      this._tagKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityTypes = value.entityTypes;
      this._name = value.name;
      this._suggestionsFromEntityType = value.suggestionsFromEntityType;
      this._tagKey = value.tagKey;
    }
  }

  // entity_types - computed: false, optional: false, required: true
  private _entityTypes?: string[]; 
  public get entityTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_types'));
  }
  public set entityTypes(value: string[]) {
    this._entityTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes;
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

  // suggestions_from_entity_type - computed: false, optional: true, required: false
  private _suggestionsFromEntityType?: string; 
  public get suggestionsFromEntityType() {
    return this.getStringAttribute('suggestions_from_entity_type');
  }
  public set suggestionsFromEntityType(value: string) {
    this._suggestionsFromEntityType = value;
  }
  public resetSuggestionsFromEntityType() {
    this._suggestionsFromEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestionsFromEntityTypeInput() {
    return this._suggestionsFromEntityType;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }
}

export class DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterList extends cdktf.ComplexList {
  public internalValue? : DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter[] | cdktf.IResolvable

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
  public get(index: number): DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterOutputReference {
    return new DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardDashboardMetadataDynamicFiltersGenericTagFilters {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filter Dashboard#filter}
  */
  readonly filter: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter[] | cdktf.IResolvable;
}

export function dashboardDashboardMetadataDynamicFiltersGenericTagFiltersToTerraform(struct?: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersOutputReference | DashboardDashboardMetadataDynamicFiltersGenericTagFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(dashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterToTerraform, true)(struct!.filter),
  }
}


export function dashboardDashboardMetadataDynamicFiltersGenericTagFiltersToHclTerraform(struct?: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersOutputReference | DashboardDashboardMetadataDynamicFiltersGenericTagFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(dashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataDynamicFiltersGenericTagFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardDashboardMetadataDynamicFiltersGenericTagFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadataDynamicFiltersGenericTagFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardDashboardMetadataDynamicFiltersGenericTagFiltersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface DashboardDashboardMetadataDynamicFilters {
  /**
  * A set of all possible global dashboard filters that can be applied to a dashboard 
  * 
  * Currently supported values are: 
  * 
  * 	OS_TYPE,
  * 	SERVICE_TYPE,
  * 	DEPLOYMENT_TYPE,
  * 	APPLICATION_INJECTION_TYPE,
  * 	PAAS_VENDOR_TYPE,
  * 	DATABASE_VENDOR,
  * 	HOST_VIRTUALIZATION_TYPE,
  * 	HOST_MONITORING_MODE,
  * 	KUBERNETES_CLUSTER,
  * 	RELATED_CLOUD_APPLICATION,
  * 	RELATED_NAMESPACE,
  * 	TAG_KEY:<tagname>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters: string[];
  /**
  * A set of entities applied for tag filter suggestions. You can fetch the list of possible values with the [GET all entity types](https://dt-url.net/dw03s7h)request. 
  * 
  * Only applicable if the **filters** set includes `TAG_KEY:<tagname>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#tag_suggestion_types Dashboard#tag_suggestion_types}
  */
  readonly tagSuggestionTypes?: string[];
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * generic_tag_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#generic_tag_filters Dashboard#generic_tag_filters}
  */
  readonly genericTagFilters?: DashboardDashboardMetadataDynamicFiltersGenericTagFilters;
}

export function dashboardDashboardMetadataDynamicFiltersToTerraform(struct?: DashboardDashboardMetadataDynamicFiltersOutputReference | DashboardDashboardMetadataDynamicFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    tag_suggestion_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagSuggestionTypes),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    generic_tag_filters: dashboardDashboardMetadataDynamicFiltersGenericTagFiltersToTerraform(struct!.genericTagFilters),
  }
}


export function dashboardDashboardMetadataDynamicFiltersToHclTerraform(struct?: DashboardDashboardMetadataDynamicFiltersOutputReference | DashboardDashboardMetadataDynamicFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag_suggestion_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagSuggestionTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic_tag_filters: {
      value: dashboardDashboardMetadataDynamicFiltersGenericTagFiltersToHclTerraform(struct!.genericTagFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardDashboardMetadataDynamicFiltersGenericTagFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataDynamicFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardDashboardMetadataDynamicFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._tagSuggestionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSuggestionTypes = this._tagSuggestionTypes;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._genericTagFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericTagFilters = this._genericTagFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadataDynamicFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filters = undefined;
      this._tagSuggestionTypes = undefined;
      this._unknowns = undefined;
      this._genericTagFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filters = value.filters;
      this._tagSuggestionTypes = value.tagSuggestionTypes;
      this._unknowns = value.unknowns;
      this._genericTagFilters.internalValue = value.genericTagFilters;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // tag_suggestion_types - computed: false, optional: true, required: false
  private _tagSuggestionTypes?: string[]; 
  public get tagSuggestionTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_suggestion_types'));
  }
  public set tagSuggestionTypes(value: string[]) {
    this._tagSuggestionTypes = value;
  }
  public resetTagSuggestionTypes() {
    this._tagSuggestionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSuggestionTypesInput() {
    return this._tagSuggestionTypes;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // generic_tag_filters - computed: false, optional: true, required: false
  private _genericTagFilters = new DashboardDashboardMetadataDynamicFiltersGenericTagFiltersOutputReference(this, "generic_tag_filters");
  public get genericTagFilters() {
    return this._genericTagFilters;
  }
  public putGenericTagFilters(value: DashboardDashboardMetadataDynamicFiltersGenericTagFilters) {
    this._genericTagFilters.internalValue = value;
  }
  public resetGenericTagFilters() {
    this._genericTagFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericTagFiltersInput() {
    return this._genericTagFilters.internalValue;
  }
}
export interface DashboardDashboardMetadataFilterManagementZone {
  /**
  * a short description of the Dynatrace entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * the ID of the Dynatrace entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * the name of the Dynatrace entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
}

export function dashboardDashboardMetadataFilterManagementZoneToTerraform(struct?: DashboardDashboardMetadataFilterManagementZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function dashboardDashboardMetadataFilterManagementZoneToHclTerraform(struct?: DashboardDashboardMetadataFilterManagementZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataFilterManagementZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardDashboardMetadataFilterManagementZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadataFilterManagementZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._unknowns = value.unknowns;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class DashboardDashboardMetadataFilterManagementZoneList extends cdktf.ComplexList {
  public internalValue? : DashboardDashboardMetadataFilterManagementZone[] | cdktf.IResolvable

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
  public get(index: number): DashboardDashboardMetadataFilterManagementZoneOutputReference {
    return new DashboardDashboardMetadataFilterManagementZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardDashboardMetadataFilter {
  /**
  * the default timeframe of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * management_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#management_zone Dashboard#management_zone}
  */
  readonly managementZone?: DashboardDashboardMetadataFilterManagementZone[] | cdktf.IResolvable;
}

export function dashboardDashboardMetadataFilterToTerraform(struct?: DashboardDashboardMetadataFilterOutputReference | DashboardDashboardMetadataFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    management_zone: cdktf.listMapper(dashboardDashboardMetadataFilterManagementZoneToTerraform, true)(struct!.managementZone),
  }
}


export function dashboardDashboardMetadataFilterToHclTerraform(struct?: DashboardDashboardMetadataFilterOutputReference | DashboardDashboardMetadataFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeframe: {
      value: cdktf.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_zone: {
      value: cdktf.listMapperHcl(dashboardDashboardMetadataFilterManagementZoneToHclTerraform, true)(struct!.managementZone),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardDashboardMetadataFilterManagementZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardDashboardMetadataFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._managementZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadataFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeframe = undefined;
      this._unknowns = undefined;
      this._managementZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeframe = value.timeframe;
      this._unknowns = value.unknowns;
      this._managementZone.internalValue = value.managementZone;
    }
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // management_zone - computed: false, optional: true, required: false
  private _managementZone = new DashboardDashboardMetadataFilterManagementZoneList(this, "management_zone", false);
  public get managementZone() {
    return this._managementZone;
  }
  public putManagementZone(value: DashboardDashboardMetadataFilterManagementZone[] | cdktf.IResolvable) {
    this._managementZone.internalValue = value;
  }
  public resetManagementZone() {
    this._managementZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone.internalValue;
  }
}
export interface DashboardDashboardMetadataSharingDetails {
  /**
  * If `true`, the dashboard is shared via link and authenticated users with the link can view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#link_shared Dashboard#link_shared}
  */
  readonly linkShared?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the dashboard is published to anyone on this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#published Dashboard#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
}

export function dashboardDashboardMetadataSharingDetailsToTerraform(struct?: DashboardDashboardMetadataSharingDetailsOutputReference | DashboardDashboardMetadataSharingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_shared: cdktf.booleanToTerraform(struct!.linkShared),
    published: cdktf.booleanToTerraform(struct!.published),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function dashboardDashboardMetadataSharingDetailsToHclTerraform(struct?: DashboardDashboardMetadataSharingDetailsOutputReference | DashboardDashboardMetadataSharingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_shared: {
      value: cdktf.booleanToHclTerraform(struct!.linkShared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    published: {
      value: cdktf.booleanToHclTerraform(struct!.published),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataSharingDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardDashboardMetadataSharingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkShared = this._linkShared;
    }
    if (this._published !== undefined) {
      hasAnyValues = true;
      internalValueResult.published = this._published;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadataSharingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkShared = undefined;
      this._published = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkShared = value.linkShared;
      this._published = value.published;
      this._unknowns = value.unknowns;
    }
  }

  // link_shared - computed: false, optional: true, required: false
  private _linkShared?: boolean | cdktf.IResolvable; 
  public get linkShared() {
    return this.getBooleanAttribute('link_shared');
  }
  public set linkShared(value: boolean | cdktf.IResolvable) {
    this._linkShared = value;
  }
  public resetLinkShared() {
    this._linkShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkSharedInput() {
    return this._linkShared;
  }

  // published - computed: false, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface DashboardDashboardMetadata {
  /**
  * The tile uses consistent colors when rendering its content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#consistent_colors Dashboard#consistent_colors}
  */
  readonly consistentColors?: boolean | cdktf.IResolvable;
  /**
  * the name of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * the owner of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#owner Dashboard#owner}
  */
  readonly owner: string;
  /**
  * the dashboard is a preset (`true`) or not (`false`). Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#preset Dashboard#preset}
  */
  readonly preset?: boolean | cdktf.IResolvable;
  /**
  * the dashboard is shared (`true`) or private (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#shared Dashboard#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * a set of tags assigned to the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#tags Dashboard#tags}
  */
  readonly tags?: string[];
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#tiles_name_size Dashboard#tiles_name_size}
  */
  readonly tilesNameSize?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * a set of all possible global dashboard filters that can be applied to dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#valid_filter_keys Dashboard#valid_filter_keys}
  */
  readonly validFilterKeys?: string[];
  /**
  * dynamic_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#dynamic_filters Dashboard#dynamic_filters}
  */
  readonly dynamicFilters?: DashboardDashboardMetadataDynamicFilters;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filter Dashboard#filter}
  */
  readonly filter?: DashboardDashboardMetadataFilter;
  /**
  * sharing_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#sharing_details Dashboard#sharing_details}
  */
  readonly sharingDetails?: DashboardDashboardMetadataSharingDetails;
}

export function dashboardDashboardMetadataToTerraform(struct?: DashboardDashboardMetadataOutputReference | DashboardDashboardMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistent_colors: cdktf.booleanToTerraform(struct!.consistentColors),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    preset: cdktf.booleanToTerraform(struct!.preset),
    shared: cdktf.booleanToTerraform(struct!.shared),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    tiles_name_size: cdktf.stringToTerraform(struct!.tilesNameSize),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    valid_filter_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validFilterKeys),
    dynamic_filters: dashboardDashboardMetadataDynamicFiltersToTerraform(struct!.dynamicFilters),
    filter: dashboardDashboardMetadataFilterToTerraform(struct!.filter),
    sharing_details: dashboardDashboardMetadataSharingDetailsToTerraform(struct!.sharingDetails),
  }
}


export function dashboardDashboardMetadataToHclTerraform(struct?: DashboardDashboardMetadataOutputReference | DashboardDashboardMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistent_colors: {
      value: cdktf.booleanToHclTerraform(struct!.consistentColors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preset: {
      value: cdktf.booleanToHclTerraform(struct!.preset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tiles_name_size: {
      value: cdktf.stringToHclTerraform(struct!.tilesNameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_filter_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validFilterKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dynamic_filters: {
      value: dashboardDashboardMetadataDynamicFiltersToHclTerraform(struct!.dynamicFilters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardDashboardMetadataDynamicFiltersList",
    },
    filter: {
      value: dashboardDashboardMetadataFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardDashboardMetadataFilterList",
    },
    sharing_details: {
      value: dashboardDashboardMetadataSharingDetailsToHclTerraform(struct!.sharingDetails),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardDashboardMetadataSharingDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardDashboardMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardDashboardMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistentColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistentColors = this._consistentColors;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._preset !== undefined) {
      hasAnyValues = true;
      internalValueResult.preset = this._preset;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._tilesNameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tilesNameSize = this._tilesNameSize;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._validFilterKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFilterKeys = this._validFilterKeys;
    }
    if (this._dynamicFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicFilters = this._dynamicFilters?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._sharingDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingDetails = this._sharingDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardDashboardMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consistentColors = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._preset = undefined;
      this._shared = undefined;
      this._tags = undefined;
      this._tilesNameSize = undefined;
      this._unknowns = undefined;
      this._validFilterKeys = undefined;
      this._dynamicFilters.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._sharingDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consistentColors = value.consistentColors;
      this._name = value.name;
      this._owner = value.owner;
      this._preset = value.preset;
      this._shared = value.shared;
      this._tags = value.tags;
      this._tilesNameSize = value.tilesNameSize;
      this._unknowns = value.unknowns;
      this._validFilterKeys = value.validFilterKeys;
      this._dynamicFilters.internalValue = value.dynamicFilters;
      this._filter.internalValue = value.filter;
      this._sharingDetails.internalValue = value.sharingDetails;
    }
  }

  // consistent_colors - computed: false, optional: true, required: false
  private _consistentColors?: boolean | cdktf.IResolvable; 
  public get consistentColors() {
    return this.getBooleanAttribute('consistent_colors');
  }
  public set consistentColors(value: boolean | cdktf.IResolvable) {
    this._consistentColors = value;
  }
  public resetConsistentColors() {
    this._consistentColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentColorsInput() {
    return this._consistentColors;
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: boolean | cdktf.IResolvable; 
  public get preset() {
    return this.getBooleanAttribute('preset');
  }
  public set preset(value: boolean | cdktf.IResolvable) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // tags - computed: false, optional: true, required: false
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

  // tiles_name_size - computed: false, optional: true, required: false
  private _tilesNameSize?: string; 
  public get tilesNameSize() {
    return this.getStringAttribute('tiles_name_size');
  }
  public set tilesNameSize(value: string) {
    this._tilesNameSize = value;
  }
  public resetTilesNameSize() {
    this._tilesNameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tilesNameSizeInput() {
    return this._tilesNameSize;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // valid_filter_keys - computed: false, optional: true, required: false
  private _validFilterKeys?: string[]; 
  public get validFilterKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_filter_keys'));
  }
  public set validFilterKeys(value: string[]) {
    this._validFilterKeys = value;
  }
  public resetValidFilterKeys() {
    this._validFilterKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFilterKeysInput() {
    return this._validFilterKeys;
  }

  // dynamic_filters - computed: false, optional: true, required: false
  private _dynamicFilters = new DashboardDashboardMetadataDynamicFiltersOutputReference(this, "dynamic_filters");
  public get dynamicFilters() {
    return this._dynamicFilters;
  }
  public putDynamicFilters(value: DashboardDashboardMetadataDynamicFilters) {
    this._dynamicFilters.internalValue = value;
  }
  public resetDynamicFilters() {
    this._dynamicFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicFiltersInput() {
    return this._dynamicFilters.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DashboardDashboardMetadataFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardDashboardMetadataFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // sharing_details - computed: false, optional: true, required: false
  private _sharingDetails = new DashboardDashboardMetadataSharingDetailsOutputReference(this, "sharing_details");
  public get sharingDetails() {
    return this._sharingDetails;
  }
  public putSharingDetails(value: DashboardDashboardMetadataSharingDetails) {
    this._sharingDetails.internalValue = value;
  }
  public resetSharingDetails() {
    this._sharingDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingDetailsInput() {
    return this._sharingDetails.internalValue;
  }
}
export interface DashboardMetadata {
  /**
  * Dynatrace server version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#cluster_version Dashboard#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * A Sorted list of the version numbers of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#configuration_versions Dashboard#configuration_versions}
  */
  readonly configurationVersions?: number[];
  /**
  * A Sorted list of the version numbers of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#current_configuration_versions Dashboard#current_configuration_versions}
  */
  readonly currentConfigurationVersions?: string[];
}

export function dashboardMetadataToTerraform(struct?: DashboardMetadataOutputReference | DashboardMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_version: cdktf.stringToTerraform(struct!.clusterVersion),
    configuration_versions: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.configurationVersions),
    current_configuration_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currentConfigurationVersions),
  }
}


export function dashboardMetadataToHclTerraform(struct?: DashboardMetadataOutputReference | DashboardMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_version: {
      value: cdktf.stringToHclTerraform(struct!.clusterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_versions: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.configurationVersions),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    current_configuration_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currentConfigurationVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterVersion = this._clusterVersion;
    }
    if (this._configurationVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationVersions = this._configurationVersions;
    }
    if (this._currentConfigurationVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentConfigurationVersions = this._currentConfigurationVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterVersion = undefined;
      this._configurationVersions = undefined;
      this._currentConfigurationVersions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterVersion = value.clusterVersion;
      this._configurationVersions = value.configurationVersions;
      this._currentConfigurationVersions = value.currentConfigurationVersions;
    }
  }

  // cluster_version - computed: false, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // configuration_versions - computed: false, optional: true, required: false
  private _configurationVersions?: number[]; 
  public get configurationVersions() {
    return this.getNumberListAttribute('configuration_versions');
  }
  public set configurationVersions(value: number[]) {
    this._configurationVersions = value;
  }
  public resetConfigurationVersions() {
    this._configurationVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationVersionsInput() {
    return this._configurationVersions;
  }

  // current_configuration_versions - computed: false, optional: true, required: false
  private _currentConfigurationVersions?: string[]; 
  public get currentConfigurationVersions() {
    return this.getListAttribute('current_configuration_versions');
  }
  public set currentConfigurationVersions(value: string[]) {
    this._currentConfigurationVersions = value;
  }
  public resetCurrentConfigurationVersions() {
    this._currentConfigurationVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentConfigurationVersionsInput() {
    return this._currentConfigurationVersions;
  }
}
export interface DashboardTileBounds {
  /**
  * the height of the tile, in pixels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height: number;
  /**
  * the horizontal distance from the top left corner of the dashboard to the top left corner of the tile, in pixels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#left Dashboard#left}
  */
  readonly left: number;
  /**
  * the vertical distance from the top left corner of the dashboard to the top left corner of the tile, in pixels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#top Dashboard#top}
  */
  readonly top: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * the width of the tile, in pixels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width: number;
}

export function dashboardTileBoundsToTerraform(struct?: DashboardTileBoundsOutputReference | DashboardTileBounds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    left: cdktf.numberToTerraform(struct!.left),
    top: cdktf.numberToTerraform(struct!.top),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function dashboardTileBoundsToHclTerraform(struct?: DashboardTileBoundsOutputReference | DashboardTileBounds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    left: {
      value: cdktf.numberToHclTerraform(struct!.left),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top: {
      value: cdktf.numberToHclTerraform(struct!.top),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileBoundsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTileBounds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._left !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left;
    }
    if (this._top !== undefined) {
      hasAnyValues = true;
      internalValueResult.top = this._top;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileBounds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._left = undefined;
      this._top = undefined;
      this._unknowns = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._left = value.left;
      this._top = value.top;
      this._unknowns = value.unknowns;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // left - computed: false, optional: false, required: true
  private _left?: number; 
  public get left() {
    return this.getNumberAttribute('left');
  }
  public set left(value: number) {
    this._left = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left;
  }

  // top - computed: false, optional: false, required: true
  private _top?: number; 
  public get top() {
    return this.getNumberAttribute('top');
  }
  public set top(value: number) {
    this._top = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topInput() {
    return this._top;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface DashboardTileFilterManagementZone {
  /**
  * a short description of the Dynatrace entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#description Dashboard#description}
  */
  readonly description?: string;
  /**
  * the ID of the Dynatrace entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * the name of the Dynatrace entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
}

export function dashboardTileFilterManagementZoneToTerraform(struct?: DashboardTileFilterManagementZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function dashboardTileFilterManagementZoneToHclTerraform(struct?: DashboardTileFilterManagementZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterManagementZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterManagementZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterManagementZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._unknowns = value.unknowns;
    }
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class DashboardTileFilterManagementZoneList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterManagementZone[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterManagementZoneOutputReference {
    return new DashboardTileFilterManagementZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilter {
  /**
  * the default timeframe of the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#timeframe Dashboard#timeframe}
  */
  readonly timeframe?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * management_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#management_zone Dashboard#management_zone}
  */
  readonly managementZone?: DashboardTileFilterManagementZone[] | cdktf.IResolvable;
}

export function dashboardTileFilterToTerraform(struct?: DashboardTileFilterOutputReference | DashboardTileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    management_zone: cdktf.listMapper(dashboardTileFilterManagementZoneToTerraform, true)(struct!.managementZone),
  }
}


export function dashboardTileFilterToHclTerraform(struct?: DashboardTileFilterOutputReference | DashboardTileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeframe: {
      value: cdktf.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_zone: {
      value: cdktf.listMapperHcl(dashboardTileFilterManagementZoneToHclTerraform, true)(struct!.managementZone),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterManagementZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._managementZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeframe = undefined;
      this._unknowns = undefined;
      this._managementZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeframe = value.timeframe;
      this._unknowns = value.unknowns;
      this._managementZone.internalValue = value.managementZone;
    }
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // management_zone - computed: false, optional: true, required: false
  private _managementZone = new DashboardTileFilterManagementZoneList(this, "management_zone", false);
  public get managementZone() {
    return this._managementZone;
  }
  public putManagementZone(value: DashboardTileFilterManagementZone[] | cdktf.IResolvable) {
    this._managementZone.internalValue = value;
  }
  public resetManagementZone() {
    this._managementZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone.internalValue;
  }
}
export interface DashboardTileFilterConfigChartConfigResultMetadataConfig {
  /**
  * The color of the metric in the chart, hex format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#custom_color Dashboard#custom_color}
  */
  readonly customColor?: string;
  /**
  * A generated key by the Dynatrace Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#key Dashboard#key}
  */
  readonly key?: string;
  /**
  * The timestamp of the last metadata modification, in UTC milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#last_modified Dashboard#last_modified}
  */
  readonly lastModified?: number;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
}

export function dashboardTileFilterConfigChartConfigResultMetadataConfigToTerraform(struct?: DashboardTileFilterConfigChartConfigResultMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_color: cdktf.stringToTerraform(struct!.customColor),
    key: cdktf.stringToTerraform(struct!.key),
    last_modified: cdktf.numberToTerraform(struct!.lastModified),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function dashboardTileFilterConfigChartConfigResultMetadataConfigToHclTerraform(struct?: DashboardTileFilterConfigChartConfigResultMetadataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_color: {
      value: cdktf.stringToHclTerraform(struct!.customColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_modified: {
      value: cdktf.numberToHclTerraform(struct!.lastModified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigChartConfigResultMetadataConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterConfigChartConfigResultMetadataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customColor = this._customColor;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._lastModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModified = this._lastModified;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigChartConfigResultMetadataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customColor = undefined;
      this._key = undefined;
      this._lastModified = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customColor = value.customColor;
      this._key = value.key;
      this._lastModified = value.lastModified;
      this._unknowns = value.unknowns;
    }
  }

  // custom_color - computed: false, optional: true, required: false
  private _customColor?: string; 
  public get customColor() {
    return this.getStringAttribute('custom_color');
  }
  public set customColor(value: string) {
    this._customColor = value;
  }
  public resetCustomColor() {
    this._customColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customColorInput() {
    return this._customColor;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // last_modified - computed: false, optional: true, required: false
  private _lastModified?: number; 
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }
  public set lastModified(value: number) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class DashboardTileFilterConfigChartConfigResultMetadataConfigList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterConfigChartConfigResultMetadataConfig[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterConfigChartConfigResultMetadataConfigOutputReference {
    return new DashboardTileFilterConfigChartConfigResultMetadataConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilterConfigChartConfigResultMetadata {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#config Dashboard#config}
  */
  readonly config?: DashboardTileFilterConfigChartConfigResultMetadataConfig[] | cdktf.IResolvable;
}

export function dashboardTileFilterConfigChartConfigResultMetadataToTerraform(struct?: DashboardTileFilterConfigChartConfigResultMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(dashboardTileFilterConfigChartConfigResultMetadataConfigToTerraform, true)(struct!.config),
  }
}


export function dashboardTileFilterConfigChartConfigResultMetadataToHclTerraform(struct?: DashboardTileFilterConfigChartConfigResultMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(dashboardTileFilterConfigChartConfigResultMetadataConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigChartConfigResultMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigChartConfigResultMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterConfigChartConfigResultMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigChartConfigResultMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DashboardTileFilterConfigChartConfigResultMetadataConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: DashboardTileFilterConfigChartConfigResultMetadataConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class DashboardTileFilterConfigChartConfigResultMetadataList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterConfigChartConfigResultMetadata[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterConfigChartConfigResultMetadataOutputReference {
    return new DashboardTileFilterConfigChartConfigResultMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilterConfigChartConfigSeriesDimension {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#entity_dimension Dashboard#entity_dimension}
  */
  readonly entityDimension?: boolean | cdktf.IResolvable;
  /**
  * The ID of the dimension by which the metric is split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the dimension by which the metric is split
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The splitting value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values?: string[];
}

export function dashboardTileFilterConfigChartConfigSeriesDimensionToTerraform(struct?: DashboardTileFilterConfigChartConfigSeriesDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_dimension: cdktf.booleanToTerraform(struct!.entityDimension),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardTileFilterConfigChartConfigSeriesDimensionToHclTerraform(struct?: DashboardTileFilterConfigChartConfigSeriesDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_dimension: {
      value: cdktf.booleanToHclTerraform(struct!.entityDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class DashboardTileFilterConfigChartConfigSeriesDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterConfigChartConfigSeriesDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDimension = this._entityDimension;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigChartConfigSeriesDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityDimension = undefined;
      this._id = undefined;
      this._name = undefined;
      this._unknowns = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityDimension = value.entityDimension;
      this._id = value.id;
      this._name = value.name;
      this._unknowns = value.unknowns;
      this._values = value.values;
    }
  }

  // entity_dimension - computed: false, optional: true, required: false
  private _entityDimension?: boolean | cdktf.IResolvable; 
  public get entityDimension() {
    return this.getBooleanAttribute('entity_dimension');
  }
  public set entityDimension(value: boolean | cdktf.IResolvable) {
    this._entityDimension = value;
  }
  public resetEntityDimension() {
    this._entityDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDimensionInput() {
    return this._entityDimension;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // values - computed: false, optional: true, required: false
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

export class DashboardTileFilterConfigChartConfigSeriesDimensionList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterConfigChartConfigSeriesDimension[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterConfigChartConfigSeriesDimensionOutputReference {
    return new DashboardTileFilterConfigChartConfigSeriesDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilterConfigChartConfigSeries {
  /**
  * The charted aggregation of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#aggregation Dashboard#aggregation}
  */
  readonly aggregation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#aggregation_rate Dashboard#aggregation_rate}
  */
  readonly aggregationRate?: string;
  /**
  * The visualization of the timeseries chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#entity_type Dashboard#entity_type}
  */
  readonly entityType: string;
  /**
  * The name of the charted metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
  /**
  * The charted percentile. Only applicable if the **aggregation** is set to `PERCENTILE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#percentile Dashboard#percentile}
  */
  readonly percentile?: number;
  /**
  * Sort ascending (`true`) or descending (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#sort_ascending Dashboard#sort_ascending}
  */
  readonly sortAscending?: boolean | cdktf.IResolvable;
  /**
  * Sort the column (`true`) or (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#sort_column Dashboard#sort_column}
  */
  readonly sortColumn?: boolean | cdktf.IResolvable;
  /**
  * The visualization of the timeseries chart. Possible values are `AREA`, `BAR` and `LINE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#dimension Dashboard#dimension}
  */
  readonly dimension?: DashboardTileFilterConfigChartConfigSeriesDimension[] | cdktf.IResolvable;
}

export function dashboardTileFilterConfigChartConfigSeriesToTerraform(struct?: DashboardTileFilterConfigChartConfigSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    aggregation_rate: cdktf.stringToTerraform(struct!.aggregationRate),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    metric: cdktf.stringToTerraform(struct!.metric),
    percentile: cdktf.numberToTerraform(struct!.percentile),
    sort_ascending: cdktf.booleanToTerraform(struct!.sortAscending),
    sort_column: cdktf.booleanToTerraform(struct!.sortColumn),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dimension: cdktf.listMapper(dashboardTileFilterConfigChartConfigSeriesDimensionToTerraform, true)(struct!.dimension),
  }
}


export function dashboardTileFilterConfigChartConfigSeriesToHclTerraform(struct?: DashboardTileFilterConfigChartConfigSeries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation_rate: {
      value: cdktf.stringToHclTerraform(struct!.aggregationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort_ascending: {
      value: cdktf.booleanToHclTerraform(struct!.sortAscending),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_column: {
      value: cdktf.booleanToHclTerraform(struct!.sortColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension: {
      value: cdktf.listMapperHcl(dashboardTileFilterConfigChartConfigSeriesDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigChartConfigSeriesDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigChartConfigSeriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterConfigChartConfigSeries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._aggregationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationRate = this._aggregationRate;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._sortAscending !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortAscending = this._sortAscending;
    }
    if (this._sortColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortColumn = this._sortColumn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigChartConfigSeries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._aggregationRate = undefined;
      this._entityType = undefined;
      this._metric = undefined;
      this._percentile = undefined;
      this._sortAscending = undefined;
      this._sortColumn = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dimension.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._aggregationRate = value.aggregationRate;
      this._entityType = value.entityType;
      this._metric = value.metric;
      this._percentile = value.percentile;
      this._sortAscending = value.sortAscending;
      this._sortColumn = value.sortColumn;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dimension.internalValue = value.dimension;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // aggregation_rate - computed: false, optional: true, required: false
  private _aggregationRate?: string; 
  public get aggregationRate() {
    return this.getStringAttribute('aggregation_rate');
  }
  public set aggregationRate(value: string) {
    this._aggregationRate = value;
  }
  public resetAggregationRate() {
    this._aggregationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationRateInput() {
    return this._aggregationRate;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // sort_ascending - computed: false, optional: true, required: false
  private _sortAscending?: boolean | cdktf.IResolvable; 
  public get sortAscending() {
    return this.getBooleanAttribute('sort_ascending');
  }
  public set sortAscending(value: boolean | cdktf.IResolvable) {
    this._sortAscending = value;
  }
  public resetSortAscending() {
    this._sortAscending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortAscendingInput() {
    return this._sortAscending;
  }

  // sort_column - computed: false, optional: true, required: false
  private _sortColumn?: boolean | cdktf.IResolvable; 
  public get sortColumn() {
    return this.getBooleanAttribute('sort_column');
  }
  public set sortColumn(value: boolean | cdktf.IResolvable) {
    this._sortColumn = value;
  }
  public resetSortColumn() {
    this._sortColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnInput() {
    return this._sortColumn;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension = new DashboardTileFilterConfigChartConfigSeriesDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: DashboardTileFilterConfigChartConfigSeriesDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  public resetDimension() {
    this._dimension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}

export class DashboardTileFilterConfigChartConfigSeriesList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterConfigChartConfigSeries[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterConfigChartConfigSeriesOutputReference {
    return new DashboardTileFilterConfigChartConfigSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilterConfigChartConfig {
  /**
  * The optional custom y-axis limits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#axis_limits Dashboard#axis_limits}
  */
  readonly axisLimits?: { [key: string]: number };
  /**
  * Either one of `Bit`, `BitPerHour`, `BitPerMinute`, `BitPerSecond`, `Byte`, `BytePerHour`, `BytePerMinute`, `BytePerSecond`, `Cores`, `Count`, `Day`, `DecibelMilliWatt`, `GibiByte`, `Giga`, `GigaByte`, `Hour`, `KibiByte`, `KibiBytePerHour`, `KibiBytePerMinute`, `KibiBytePerSecond`, `Kilo`, `KiloByte`, `KiloBytePerHour`, `KiloBytePerMinute`, `KiloBytePerSecond`, `MebiByte`, `MebiBytePerHour`, `MebiBytePerMinute`, `MebiBytePerSecond`, `Mega`, `MegaByte`, `MegaBytePerHour`, `MegaBytePerMinute`, `MegaBytePerSecond`, `MicroSecond`, `MilliCores`, `MilliSecond`, `MilliSecondPerMinute`, `Minute`, `Month`, `NanoSecond`, `NanoSecondPerMinute`, `NotApplicable`, `PerHour`, `PerMinute`, `PerSecond`, `Percent`, `Pixel`, `Promille`, `Ratio`, `Second`, `State`, `Unspecified`, `Week`, `Year`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#left_axis_custom_unit Dashboard#left_axis_custom_unit}
  */
  readonly leftAxisCustomUnit?: string;
  /**
  * Defines if a legend should be shown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#legend Dashboard#legend}
  */
  readonly legend?: boolean | cdktf.IResolvable;
  /**
  * Either one of `Bit`, `BitPerHour`, `BitPerMinute`, `BitPerSecond`, `Byte`, `BytePerHour`, `BytePerMinute`, `BytePerSecond`, `Cores`, `Count`, `Day`, `DecibelMilliWatt`, `GibiByte`, `Giga`, `GigaByte`, `Hour`, `KibiByte`, `KibiBytePerHour`, `KibiBytePerMinute`, `KibiBytePerSecond`, `Kilo`, `KiloByte`, `KiloBytePerHour`, `KiloBytePerMinute`, `KiloBytePerSecond`, `MebiByte`, `MebiBytePerHour`, `MebiBytePerMinute`, `MebiBytePerSecond`, `Mega`, `MegaByte`, `MegaBytePerHour`, `MegaBytePerMinute`, `MegaBytePerSecond`, `MicroSecond`, `MilliCores`, `MilliSecond`, `MilliSecondPerMinute`, `Minute`, `Month`, `NanoSecond`, `NanoSecondPerMinute`, `NotApplicable`, `PerHour`, `PerMinute`, `PerSecond`, `Percent`, `Pixel`, `Promille`, `Ratio`, `Second`, `State`, `Unspecified`, `Week`, `Year`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#right_axis_custom_unit Dashboard#right_axis_custom_unit}
  */
  readonly rightAxisCustomUnit?: string;
  /**
  * The type of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * result_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#result_metadata Dashboard#result_metadata}
  */
  readonly resultMetadata?: DashboardTileFilterConfigChartConfigResultMetadata[] | cdktf.IResolvable;
  /**
  * series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#series Dashboard#series}
  */
  readonly series?: DashboardTileFilterConfigChartConfigSeries[] | cdktf.IResolvable;
}

export function dashboardTileFilterConfigChartConfigToTerraform(struct?: DashboardTileFilterConfigChartConfigOutputReference | DashboardTileFilterConfigChartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    axis_limits: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.axisLimits),
    left_axis_custom_unit: cdktf.stringToTerraform(struct!.leftAxisCustomUnit),
    legend: cdktf.booleanToTerraform(struct!.legend),
    right_axis_custom_unit: cdktf.stringToTerraform(struct!.rightAxisCustomUnit),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    result_metadata: cdktf.listMapper(dashboardTileFilterConfigChartConfigResultMetadataToTerraform, true)(struct!.resultMetadata),
    series: cdktf.listMapper(dashboardTileFilterConfigChartConfigSeriesToTerraform, true)(struct!.series),
  }
}


export function dashboardTileFilterConfigChartConfigToHclTerraform(struct?: DashboardTileFilterConfigChartConfigOutputReference | DashboardTileFilterConfigChartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    axis_limits: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.axisLimits),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    left_axis_custom_unit: {
      value: cdktf.stringToHclTerraform(struct!.leftAxisCustomUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    legend: {
      value: cdktf.booleanToHclTerraform(struct!.legend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    right_axis_custom_unit: {
      value: cdktf.stringToHclTerraform(struct!.rightAxisCustomUnit),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result_metadata: {
      value: cdktf.listMapperHcl(dashboardTileFilterConfigChartConfigResultMetadataToHclTerraform, true)(struct!.resultMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigChartConfigResultMetadataList",
    },
    series: {
      value: cdktf.listMapperHcl(dashboardTileFilterConfigChartConfigSeriesToHclTerraform, true)(struct!.series),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigChartConfigSeriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigChartConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTileFilterConfigChartConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axisLimits !== undefined) {
      hasAnyValues = true;
      internalValueResult.axisLimits = this._axisLimits;
    }
    if (this._leftAxisCustomUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.leftAxisCustomUnit = this._leftAxisCustomUnit;
    }
    if (this._legend !== undefined) {
      hasAnyValues = true;
      internalValueResult.legend = this._legend;
    }
    if (this._rightAxisCustomUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rightAxisCustomUnit = this._rightAxisCustomUnit;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._resultMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultMetadata = this._resultMetadata?.internalValue;
    }
    if (this._series?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.series = this._series?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigChartConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._axisLimits = undefined;
      this._leftAxisCustomUnit = undefined;
      this._legend = undefined;
      this._rightAxisCustomUnit = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._resultMetadata.internalValue = undefined;
      this._series.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._axisLimits = value.axisLimits;
      this._leftAxisCustomUnit = value.leftAxisCustomUnit;
      this._legend = value.legend;
      this._rightAxisCustomUnit = value.rightAxisCustomUnit;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._resultMetadata.internalValue = value.resultMetadata;
      this._series.internalValue = value.series;
    }
  }

  // axis_limits - computed: false, optional: true, required: false
  private _axisLimits?: { [key: string]: number }; 
  public get axisLimits() {
    return this.getNumberMapAttribute('axis_limits');
  }
  public set axisLimits(value: { [key: string]: number }) {
    this._axisLimits = value;
  }
  public resetAxisLimits() {
    this._axisLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axisLimitsInput() {
    return this._axisLimits;
  }

  // left_axis_custom_unit - computed: false, optional: true, required: false
  private _leftAxisCustomUnit?: string; 
  public get leftAxisCustomUnit() {
    return this.getStringAttribute('left_axis_custom_unit');
  }
  public set leftAxisCustomUnit(value: string) {
    this._leftAxisCustomUnit = value;
  }
  public resetLeftAxisCustomUnit() {
    this._leftAxisCustomUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leftAxisCustomUnitInput() {
    return this._leftAxisCustomUnit;
  }

  // legend - computed: false, optional: true, required: false
  private _legend?: boolean | cdktf.IResolvable; 
  public get legend() {
    return this.getBooleanAttribute('legend');
  }
  public set legend(value: boolean | cdktf.IResolvable) {
    this._legend = value;
  }
  public resetLegend() {
    this._legend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend;
  }

  // right_axis_custom_unit - computed: false, optional: true, required: false
  private _rightAxisCustomUnit?: string; 
  public get rightAxisCustomUnit() {
    return this.getStringAttribute('right_axis_custom_unit');
  }
  public set rightAxisCustomUnit(value: string) {
    this._rightAxisCustomUnit = value;
  }
  public resetRightAxisCustomUnit() {
    this._rightAxisCustomUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rightAxisCustomUnitInput() {
    return this._rightAxisCustomUnit;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // result_metadata - computed: false, optional: true, required: false
  private _resultMetadata = new DashboardTileFilterConfigChartConfigResultMetadataList(this, "result_metadata", false);
  public get resultMetadata() {
    return this._resultMetadata;
  }
  public putResultMetadata(value: DashboardTileFilterConfigChartConfigResultMetadata[] | cdktf.IResolvable) {
    this._resultMetadata.internalValue = value;
  }
  public resetResultMetadata() {
    this._resultMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultMetadataInput() {
    return this._resultMetadata.internalValue;
  }

  // series - computed: false, optional: true, required: false
  private _series = new DashboardTileFilterConfigChartConfigSeriesList(this, "series", false);
  public get series() {
    return this._series;
  }
  public putSeries(value: DashboardTileFilterConfigChartConfigSeries[] | cdktf.IResolvable) {
    this._series.internalValue = value;
  }
  public resetSeries() {
    this._series.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesInput() {
    return this._series.internalValue;
  }
}
export interface DashboardTileFilterConfigFiltersFilterMatch {
  /**
  * The entity type (e.g. HOST, SERVICE, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#key Dashboard#key}
  */
  readonly key: string;
  /**
  * the tiles this Dashboard consist of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values?: string[];
}

export function dashboardTileFilterConfigFiltersFilterMatchToTerraform(struct?: DashboardTileFilterConfigFiltersFilterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardTileFilterConfigFiltersFilterMatchToHclTerraform(struct?: DashboardTileFilterConfigFiltersFilterMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DashboardTileFilterConfigFiltersFilterMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterConfigFiltersFilterMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigFiltersFilterMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
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

export class DashboardTileFilterConfigFiltersFilterMatchList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterConfigFiltersFilterMatch[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterConfigFiltersFilterMatchOutputReference {
    return new DashboardTileFilterConfigFiltersFilterMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilterConfigFiltersFilter {
  /**
  * The entity type (e.g. HOST, SERVICE, ...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#entity_type Dashboard#entity_type}
  */
  readonly entityType: string;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#match Dashboard#match}
  */
  readonly match?: DashboardTileFilterConfigFiltersFilterMatch[] | cdktf.IResolvable;
}

export function dashboardTileFilterConfigFiltersFilterToTerraform(struct?: DashboardTileFilterConfigFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    match: cdktf.listMapper(dashboardTileFilterConfigFiltersFilterMatchToTerraform, true)(struct!.match),
  }
}


export function dashboardTileFilterConfigFiltersFilterToHclTerraform(struct?: DashboardTileFilterConfigFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.listMapperHcl(dashboardTileFilterConfigFiltersFilterMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigFiltersFilterMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigFiltersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTileFilterConfigFiltersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigFiltersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityType = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityType = value.entityType;
      this._match.internalValue = value.match;
    }
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DashboardTileFilterConfigFiltersFilterMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: DashboardTileFilterConfigFiltersFilterMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class DashboardTileFilterConfigFiltersFilterList extends cdktf.ComplexList {
  public internalValue? : DashboardTileFilterConfigFiltersFilter[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileFilterConfigFiltersFilterOutputReference {
    return new DashboardTileFilterConfigFiltersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardTileFilterConfigFilters {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filter Dashboard#filter}
  */
  readonly filter?: DashboardTileFilterConfigFiltersFilter[] | cdktf.IResolvable;
}

export function dashboardTileFilterConfigFiltersToTerraform(struct?: DashboardTileFilterConfigFiltersOutputReference | DashboardTileFilterConfigFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(dashboardTileFilterConfigFiltersFilterToTerraform, true)(struct!.filter),
  }
}


export function dashboardTileFilterConfigFiltersToHclTerraform(struct?: DashboardTileFilterConfigFiltersOutputReference | DashboardTileFilterConfigFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(dashboardTileFilterConfigFiltersFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigFiltersFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTileFilterConfigFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfigFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DashboardTileFilterConfigFiltersFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardTileFilterConfigFiltersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface DashboardTileFilterConfig {
  /**
  * The name of the tile, set by user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#custom_name Dashboard#custom_name}
  */
  readonly customName: string;
  /**
  * The default name of the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#default_name Dashboard#default_name}
  */
  readonly defaultName: string;
  /**
  * The type of the filter. Possible values are `ALB`, `APPLICATION`, `APPLICATION_METHOD`, `APPMON`, `ASG`, `AWS_CREDENTIALS`, `AWS_CUSTOM_SERVICE`, `AWS_LAMBDA_FUNCTION`, `CLOUD_APPLICATION`, `CLOUD_APPLICATION_INSTANCE`, `CLOUD_APPLICATION_NAMESPACE`, `CONTAINER_GROUP_INSTANCE`, `CUSTOM_APPLICATION`, `CUSTOM_DEVICES`, `CUSTOM_SERVICES`, `DATABASE`, `DATABASE_KEY_REQUEST`, `DCRUM_APPLICATION`, `DCRUM_ENTITY`, `DYNAMO_DB`, `EBS`, `EC2`, `ELB`, `ENVIRONMENT`, `ESXI`, `EXTERNAL_SYNTHETIC_TEST`, `GLOBAL_BACKGROUND_ACTIVITY`, `HOST`, `IOT`, `KUBERNETES_CLUSTER`, `KUBERNETES_NODE`, `MDA_SERVICE`, `MIXED`, `MOBILE_APPLICATION`, `MONITORED_ENTITY`, `NLB`, `PG_BACKGROUND_ACTIVITY`, `PROBLEM`, `PROCESS_GROUP_INSTANCE`, `RDS`, `REMOTE_PLUGIN`, `SERVICE`, `SERVICE_KEY_REQUEST`, `SYNTHETIC_BROWSER_MONITOR`, `SYNTHETIC_HTTPCHECK`, `SYNTHETIC_HTTPCHECK_STEP`, `SYNTHETIC_LOCATION`, `SYNTHETIC_TEST`, `SYNTHETIC_TEST_STEP`, `UI_ENTITY`, `VIRTUAL_MACHINE`, `WEB_CHECK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * chart_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#chart_config Dashboard#chart_config}
  */
  readonly chartConfig?: DashboardTileFilterConfigChartConfig;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filters Dashboard#filters}
  */
  readonly filters?: DashboardTileFilterConfigFilters;
}

export function dashboardTileFilterConfigToTerraform(struct?: DashboardTileFilterConfigOutputReference | DashboardTileFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_name: cdktf.stringToTerraform(struct!.customName),
    default_name: cdktf.stringToTerraform(struct!.defaultName),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    chart_config: dashboardTileFilterConfigChartConfigToTerraform(struct!.chartConfig),
    filters: dashboardTileFilterConfigFiltersToTerraform(struct!.filters),
  }
}


export function dashboardTileFilterConfigToHclTerraform(struct?: DashboardTileFilterConfigOutputReference | DashboardTileFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_name: {
      value: cdktf.stringToHclTerraform(struct!.customName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultName),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_config: {
      value: dashboardTileFilterConfigChartConfigToHclTerraform(struct!.chartConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigChartConfigList",
    },
    filters: {
      value: dashboardTileFilterConfigFiltersToHclTerraform(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileFilterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTileFilterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customName = this._customName;
    }
    if (this._defaultName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultName = this._defaultName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._chartConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartConfig = this._chartConfig?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileFilterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customName = undefined;
      this._defaultName = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._chartConfig.internalValue = undefined;
      this._filters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customName = value.customName;
      this._defaultName = value.defaultName;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._chartConfig.internalValue = value.chartConfig;
      this._filters.internalValue = value.filters;
    }
  }

  // custom_name - computed: false, optional: false, required: true
  private _customName?: string; 
  public get customName() {
    return this.getStringAttribute('custom_name');
  }
  public set customName(value: string) {
    this._customName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customNameInput() {
    return this._customName;
  }

  // default_name - computed: false, optional: false, required: true
  private _defaultName?: string; 
  public get defaultName() {
    return this.getStringAttribute('default_name');
  }
  public set defaultName(value: string) {
    this._defaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNameInput() {
    return this._defaultName;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // chart_config - computed: false, optional: true, required: false
  private _chartConfig = new DashboardTileFilterConfigChartConfigOutputReference(this, "chart_config");
  public get chartConfig() {
    return this._chartConfig;
  }
  public putChartConfig(value: DashboardTileFilterConfigChartConfig) {
    this._chartConfig.internalValue = value;
  }
  public resetChartConfig() {
    this._chartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartConfigInput() {
    return this._chartConfig.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DashboardTileFilterConfigFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DashboardTileFilterConfigFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}
export interface DashboardTileVisualizationConfig {
  /**
  * The axis bucketing when enabled groups similar series in the same virtual axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#has_axis_bucketing Dashboard#has_axis_bucketing}
  */
  readonly hasAxisBucketing?: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
}

export function dashboardTileVisualizationConfigToTerraform(struct?: DashboardTileVisualizationConfigOutputReference | DashboardTileVisualizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    has_axis_bucketing: cdktf.booleanToTerraform(struct!.hasAxisBucketing),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function dashboardTileVisualizationConfigToHclTerraform(struct?: DashboardTileVisualizationConfigOutputReference | DashboardTileVisualizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    has_axis_bucketing: {
      value: cdktf.booleanToHclTerraform(struct!.hasAxisBucketing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileVisualizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardTileVisualizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hasAxisBucketing !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasAxisBucketing = this._hasAxisBucketing;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTileVisualizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hasAxisBucketing = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hasAxisBucketing = value.hasAxisBucketing;
      this._unknowns = value.unknowns;
    }
  }

  // has_axis_bucketing - computed: false, optional: true, required: false
  private _hasAxisBucketing?: boolean | cdktf.IResolvable; 
  public get hasAxisBucketing() {
    return this.getBooleanAttribute('has_axis_bucketing');
  }
  public set hasAxisBucketing(value: boolean | cdktf.IResolvable) {
    this._hasAxisBucketing = value;
  }
  public resetHasAxisBucketing() {
    this._hasAxisBucketing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasAxisBucketingInput() {
    return this._hasAxisBucketing;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface DashboardTile {
  /**
  * The list of Dynatrace entities, assigned to the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#assigned_entities Dashboard#assigned_entities}
  */
  readonly assignedEntities?: string[];
  /**
  * Auto Refresh is disabled (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#auto_refresh_disabled Dashboard#auto_refresh_disabled}
  */
  readonly autoRefreshDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#chart_visible Dashboard#chart_visible}
  */
  readonly chartVisible?: boolean | cdktf.IResolvable;
  /**
  * The tile is configured and ready to use (`true`) or just placed on the dashboard (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#configured Dashboard#configured}
  */
  readonly configured?: boolean | cdktf.IResolvable;
  /**
  * The name of the tile, set by user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#custom_name Dashboard#custom_name}
  */
  readonly customName?: string;
  /**
  * Include (`false') or exclude (`true`) maintenance windows from availability calculations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#exclude_maintenance_windows Dashboard#exclude_maintenance_windows}
  */
  readonly excludeMaintenanceWindows?: boolean | cdktf.IResolvable;
  /**
  * The limit of the results, if not set will use the default value of the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * The markdown-formatted content of the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#markdown Dashboard#markdown}
  */
  readonly markdown?: string;
  /**
  * The metric assigned to the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric?: string;
  /**
  * the name of the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * The size of the tile name. Possible values are `small`, `medium` and `large`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#name_size Dashboard#name_size}
  */
  readonly nameSize?: string;
  /**
  * A [user session query](https://www.dynatrace.com/support/help/shortlink/usql-info) executed by the tile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#query Dashboard#query}
  */
  readonly query?: string;
  /**
  * the type of the tile. Must be either `APPLICATION_WORLDMAP`, `RESOURCES`, `THIRD_PARTY_MOST_ACTIVE`, `UEM_CONVERSIONS_PER_GOAL`, `PROCESS_GROUPS_ONE` or `HOST` .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#tile_type Dashboard#tile_type}
  */
  readonly tileType: string;
  /**
  * The comparison timeframe of the query. If specified, you additionally get the results of the same query with the specified time shift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#time_frame_shift Dashboard#time_frame_shift}
  */
  readonly timeFrameShift?: string;
  /**
  * The attribute `type` exists for backwards compatibilty. Usage is discouraged. You should use `visualization` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#unknowns Dashboard#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The visualization of the tile. Possible values are: `COLUMN_CHART`, `FUNNEL`, `LINE_CHART`, `PIE_CHART`, `SINGLE_VALUE`, `TABLE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#visualization Dashboard#visualization}
  */
  readonly visualization?: string;
  /**
  * bounds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#bounds Dashboard#bounds}
  */
  readonly bounds?: DashboardTileBounds;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filter Dashboard#filter}
  */
  readonly filter?: DashboardTileFilter;
  /**
  * filter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#filter_config Dashboard#filter_config}
  */
  readonly filterConfig?: DashboardTileFilterConfig;
  /**
  * visualization_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#visualization_config Dashboard#visualization_config}
  */
  readonly visualizationConfig?: DashboardTileVisualizationConfig;
}

export function dashboardTileToTerraform(struct?: DashboardTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.assignedEntities),
    auto_refresh_disabled: cdktf.booleanToTerraform(struct!.autoRefreshDisabled),
    chart_visible: cdktf.booleanToTerraform(struct!.chartVisible),
    configured: cdktf.booleanToTerraform(struct!.configured),
    custom_name: cdktf.stringToTerraform(struct!.customName),
    exclude_maintenance_windows: cdktf.booleanToTerraform(struct!.excludeMaintenanceWindows),
    limit: cdktf.numberToTerraform(struct!.limit),
    markdown: cdktf.stringToTerraform(struct!.markdown),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    name_size: cdktf.stringToTerraform(struct!.nameSize),
    query: cdktf.stringToTerraform(struct!.query),
    tile_type: cdktf.stringToTerraform(struct!.tileType),
    time_frame_shift: cdktf.stringToTerraform(struct!.timeFrameShift),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    visualization: cdktf.stringToTerraform(struct!.visualization),
    bounds: dashboardTileBoundsToTerraform(struct!.bounds),
    filter: dashboardTileFilterToTerraform(struct!.filter),
    filter_config: dashboardTileFilterConfigToTerraform(struct!.filterConfig),
    visualization_config: dashboardTileVisualizationConfigToTerraform(struct!.visualizationConfig),
  }
}


export function dashboardTileToHclTerraform(struct?: DashboardTile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.assignedEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auto_refresh_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoRefreshDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chart_visible: {
      value: cdktf.booleanToHclTerraform(struct!.chartVisible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configured: {
      value: cdktf.booleanToHclTerraform(struct!.configured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_name: {
      value: cdktf.stringToHclTerraform(struct!.customName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_maintenance_windows: {
      value: cdktf.booleanToHclTerraform(struct!.excludeMaintenanceWindows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    markdown: {
      value: cdktf.stringToHclTerraform(struct!.markdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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
    name_size: {
      value: cdktf.stringToHclTerraform(struct!.nameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tile_type: {
      value: cdktf.stringToHclTerraform(struct!.tileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_frame_shift: {
      value: cdktf.stringToHclTerraform(struct!.timeFrameShift),
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization: {
      value: cdktf.stringToHclTerraform(struct!.visualization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bounds: {
      value: dashboardTileBoundsToHclTerraform(struct!.bounds),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileBoundsList",
    },
    filter: {
      value: dashboardTileFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterList",
    },
    filter_config: {
      value: dashboardTileFilterConfigToHclTerraform(struct!.filterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileFilterConfigList",
    },
    visualization_config: {
      value: dashboardTileVisualizationConfigToHclTerraform(struct!.visualizationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardTileVisualizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardTileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardTile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedEntities = this._assignedEntities;
    }
    if (this._autoRefreshDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRefreshDisabled = this._autoRefreshDisabled;
    }
    if (this._chartVisible !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartVisible = this._chartVisible;
    }
    if (this._configured !== undefined) {
      hasAnyValues = true;
      internalValueResult.configured = this._configured;
    }
    if (this._customName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customName = this._customName;
    }
    if (this._excludeMaintenanceWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeMaintenanceWindows = this._excludeMaintenanceWindows;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._markdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.markdown = this._markdown;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSize = this._nameSize;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._tileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tileType = this._tileType;
    }
    if (this._timeFrameShift !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFrameShift = this._timeFrameShift;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._visualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualization = this._visualization;
    }
    if (this._bounds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bounds = this._bounds?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._filterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfig = this._filterConfig?.internalValue;
    }
    if (this._visualizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualizationConfig = this._visualizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardTile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignedEntities = undefined;
      this._autoRefreshDisabled = undefined;
      this._chartVisible = undefined;
      this._configured = undefined;
      this._customName = undefined;
      this._excludeMaintenanceWindows = undefined;
      this._limit = undefined;
      this._markdown = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._nameSize = undefined;
      this._query = undefined;
      this._tileType = undefined;
      this._timeFrameShift = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._visualization = undefined;
      this._bounds.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._filterConfig.internalValue = undefined;
      this._visualizationConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignedEntities = value.assignedEntities;
      this._autoRefreshDisabled = value.autoRefreshDisabled;
      this._chartVisible = value.chartVisible;
      this._configured = value.configured;
      this._customName = value.customName;
      this._excludeMaintenanceWindows = value.excludeMaintenanceWindows;
      this._limit = value.limit;
      this._markdown = value.markdown;
      this._metric = value.metric;
      this._name = value.name;
      this._nameSize = value.nameSize;
      this._query = value.query;
      this._tileType = value.tileType;
      this._timeFrameShift = value.timeFrameShift;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._visualization = value.visualization;
      this._bounds.internalValue = value.bounds;
      this._filter.internalValue = value.filter;
      this._filterConfig.internalValue = value.filterConfig;
      this._visualizationConfig.internalValue = value.visualizationConfig;
    }
  }

  // assigned_entities - computed: false, optional: true, required: false
  private _assignedEntities?: string[]; 
  public get assignedEntities() {
    return this.getListAttribute('assigned_entities');
  }
  public set assignedEntities(value: string[]) {
    this._assignedEntities = value;
  }
  public resetAssignedEntities() {
    this._assignedEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedEntitiesInput() {
    return this._assignedEntities;
  }

  // auto_refresh_disabled - computed: false, optional: true, required: false
  private _autoRefreshDisabled?: boolean | cdktf.IResolvable; 
  public get autoRefreshDisabled() {
    return this.getBooleanAttribute('auto_refresh_disabled');
  }
  public set autoRefreshDisabled(value: boolean | cdktf.IResolvable) {
    this._autoRefreshDisabled = value;
  }
  public resetAutoRefreshDisabled() {
    this._autoRefreshDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshDisabledInput() {
    return this._autoRefreshDisabled;
  }

  // chart_visible - computed: false, optional: true, required: false
  private _chartVisible?: boolean | cdktf.IResolvable; 
  public get chartVisible() {
    return this.getBooleanAttribute('chart_visible');
  }
  public set chartVisible(value: boolean | cdktf.IResolvable) {
    this._chartVisible = value;
  }
  public resetChartVisible() {
    this._chartVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartVisibleInput() {
    return this._chartVisible;
  }

  // configured - computed: false, optional: true, required: false
  private _configured?: boolean | cdktf.IResolvable; 
  public get configured() {
    return this.getBooleanAttribute('configured');
  }
  public set configured(value: boolean | cdktf.IResolvable) {
    this._configured = value;
  }
  public resetConfigured() {
    this._configured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredInput() {
    return this._configured;
  }

  // custom_name - computed: false, optional: true, required: false
  private _customName?: string; 
  public get customName() {
    return this.getStringAttribute('custom_name');
  }
  public set customName(value: string) {
    this._customName = value;
  }
  public resetCustomName() {
    this._customName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNameInput() {
    return this._customName;
  }

  // exclude_maintenance_windows - computed: false, optional: true, required: false
  private _excludeMaintenanceWindows?: boolean | cdktf.IResolvable; 
  public get excludeMaintenanceWindows() {
    return this.getBooleanAttribute('exclude_maintenance_windows');
  }
  public set excludeMaintenanceWindows(value: boolean | cdktf.IResolvable) {
    this._excludeMaintenanceWindows = value;
  }
  public resetExcludeMaintenanceWindows() {
    this._excludeMaintenanceWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMaintenanceWindowsInput() {
    return this._excludeMaintenanceWindows;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // markdown - computed: false, optional: true, required: false
  private _markdown?: string; 
  public get markdown() {
    return this.getStringAttribute('markdown');
  }
  public set markdown(value: string) {
    this._markdown = value;
  }
  public resetMarkdown() {
    this._markdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownInput() {
    return this._markdown;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // name_size - computed: false, optional: true, required: false
  private _nameSize?: string; 
  public get nameSize() {
    return this.getStringAttribute('name_size');
  }
  public set nameSize(value: string) {
    this._nameSize = value;
  }
  public resetNameSize() {
    this._nameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSizeInput() {
    return this._nameSize;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // tile_type - computed: false, optional: false, required: true
  private _tileType?: string; 
  public get tileType() {
    return this.getStringAttribute('tile_type');
  }
  public set tileType(value: string) {
    this._tileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tileTypeInput() {
    return this._tileType;
  }

  // time_frame_shift - computed: false, optional: true, required: false
  private _timeFrameShift?: string; 
  public get timeFrameShift() {
    return this.getStringAttribute('time_frame_shift');
  }
  public set timeFrameShift(value: string) {
    this._timeFrameShift = value;
  }
  public resetTimeFrameShift() {
    this._timeFrameShift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFrameShiftInput() {
    return this._timeFrameShift;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // visualization - computed: false, optional: true, required: false
  private _visualization?: string; 
  public get visualization() {
    return this.getStringAttribute('visualization');
  }
  public set visualization(value: string) {
    this._visualization = value;
  }
  public resetVisualization() {
    this._visualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationInput() {
    return this._visualization;
  }

  // bounds - computed: false, optional: true, required: false
  private _bounds = new DashboardTileBoundsOutputReference(this, "bounds");
  public get bounds() {
    return this._bounds;
  }
  public putBounds(value: DashboardTileBounds) {
    this._bounds.internalValue = value;
  }
  public resetBounds() {
    this._bounds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundsInput() {
    return this._bounds.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DashboardTileFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DashboardTileFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // filter_config - computed: false, optional: true, required: false
  private _filterConfig = new DashboardTileFilterConfigOutputReference(this, "filter_config");
  public get filterConfig() {
    return this._filterConfig;
  }
  public putFilterConfig(value: DashboardTileFilterConfig) {
    this._filterConfig.internalValue = value;
  }
  public resetFilterConfig() {
    this._filterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigInput() {
    return this._filterConfig.internalValue;
  }

  // visualization_config - computed: false, optional: true, required: false
  private _visualizationConfig = new DashboardTileVisualizationConfigOutputReference(this, "visualization_config");
  public get visualizationConfig() {
    return this._visualizationConfig;
  }
  public putVisualizationConfig(value: DashboardTileVisualizationConfig) {
    this._visualizationConfig.internalValue = value;
  }
  public resetVisualizationConfig() {
    this._visualizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationConfigInput() {
    return this._visualizationConfig.internalValue;
  }
}

export class DashboardTileList extends cdktf.ComplexList {
  public internalValue? : DashboardTile[] | cdktf.IResolvable

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
  public get(index: number): DashboardTileOutputReference {
    return new DashboardTileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard dynatrace_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard dynatrace_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_dashboard',
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
    this._id = config.id;
    this._unknowns = config.unknowns;
    this._dashboardMetadata.internalValue = config.dashboardMetadata;
    this._metadata.internalValue = config.metadata;
    this._tile.internalValue = config.tile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dashboard_metadata - computed: false, optional: true, required: false
  private _dashboardMetadata = new DashboardDashboardMetadataOutputReference(this, "dashboard_metadata");
  public get dashboardMetadata() {
    return this._dashboardMetadata;
  }
  public putDashboardMetadata(value: DashboardDashboardMetadata) {
    this._dashboardMetadata.internalValue = value;
  }
  public resetDashboardMetadata() {
    this._dashboardMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardMetadataInput() {
    return this._dashboardMetadata.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DashboardMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DashboardMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // tile - computed: false, optional: true, required: false
  private _tile = new DashboardTileList(this, "tile", false);
  public get tile() {
    return this._tile;
  }
  public putTile(value: DashboardTile[] | cdktf.IResolvable) {
    this._tile.internalValue = value;
  }
  public resetTile() {
    this._tile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tileInput() {
    return this._tile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      dashboard_metadata: dashboardDashboardMetadataToTerraform(this._dashboardMetadata.internalValue),
      metadata: dashboardMetadataToTerraform(this._metadata.internalValue),
      tile: cdktf.listMapper(dashboardTileToTerraform, true)(this._tile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_metadata: {
        value: dashboardDashboardMetadataToHclTerraform(this._dashboardMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardDashboardMetadataList",
      },
      metadata: {
        value: dashboardMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardMetadataList",
      },
      tile: {
        value: cdktf.listMapperHcl(dashboardTileToHclTerraform, true)(this._tile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardTileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
