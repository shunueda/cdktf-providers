// https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItsiEntityTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#description ItsiEntityType#description}
  */
  readonly description?: string;
  /**
  * The name of the entity type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#title ItsiEntityType#title}
  */
  readonly title: string;
  /**
  * dashboard_drilldown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#dashboard_drilldown ItsiEntityType#dashboard_drilldown}
  */
  readonly dashboardDrilldown?: ItsiEntityTypeDashboardDrilldown[] | cdktf.IResolvable;
  /**
  * data_drilldown block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#data_drilldown ItsiEntityType#data_drilldown}
  */
  readonly dataDrilldown?: ItsiEntityTypeDataDrilldown[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#timeouts ItsiEntityType#timeouts}
  */
  readonly timeouts?: ItsiEntityTypeTimeouts;
  /**
  * vital_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#vital_metric ItsiEntityType#vital_metric}
  */
  readonly vitalMetric?: ItsiEntityTypeVitalMetric[] | cdktf.IResolvable;
}
export interface ItsiEntityTypeDashboardDrilldown {
  /**
  * 
  * An internal or external URL that points to the dashboard.
  * This setting exists because for internal purposes, navigation suggestions are treated as dashboards.
  * This setting is only required if is_splunk_dashboard is false.
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#base_url ItsiEntityType#base_url}
  */
  readonly baseUrl: string;
  /**
  * A unique identifier for the xml dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#dashboard_id ItsiEntityType#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * 
  * The type of dashboard being added.
  * The following options are available:
  * * xml_dashboard - a Splunk XML dashboard.
  * * udf_dashboard - a Splunk UDF (Unified Dashboard Framework) dashboard.
  * * navigation_link - a navigation URL. Should be used when base_url is specified.
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#dashboard_type ItsiEntityType#dashboard_type}
  */
  readonly dashboardType: string;
  /**
  * A set of parameters for the entity dashboard drilldown that provide a mapping of a URL parameter and its alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#params ItsiEntityType#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * The name of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#title ItsiEntityType#title}
  */
  readonly title: string;
}

export function itsiEntityTypeDashboardDrilldownToTerraform(struct?: ItsiEntityTypeDashboardDrilldown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    dashboard_type: cdktf.stringToTerraform(struct!.dashboardType),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function itsiEntityTypeDashboardDrilldownToHclTerraform(struct?: ItsiEntityTypeDashboardDrilldown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dashboard_type: {
      value: cdktf.stringToHclTerraform(struct!.dashboardType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiEntityTypeDashboardDrilldownOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiEntityTypeDashboardDrilldown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._dashboardType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardType = this._dashboardType;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeDashboardDrilldown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._dashboardId = undefined;
      this._dashboardType = undefined;
      this._params = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._dashboardId = value.dashboardId;
      this._dashboardType = value.dashboardType;
      this._params = value.params;
      this._title = value.title;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // dashboard_type - computed: false, optional: false, required: true
  private _dashboardType?: string; 
  public get dashboardType() {
    return this.getStringAttribute('dashboard_type');
  }
  public set dashboardType(value: string) {
    this._dashboardType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTypeInput() {
    return this._dashboardType;
  }

  // params - computed: true, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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
}

export class ItsiEntityTypeDashboardDrilldownList extends cdktf.ComplexList {
  public internalValue? : ItsiEntityTypeDashboardDrilldown[] | cdktf.IResolvable

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
  public get(index: number): ItsiEntityTypeDashboardDrilldownOutputReference {
    return new ItsiEntityTypeDashboardDrilldownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiEntityTypeDataDrilldownEntityFieldFilter {
  /**
  * Data field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#data_field ItsiEntityType#data_field}
  */
  readonly dataField: string;
  /**
  * Entity field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#entity_field ItsiEntityType#entity_field}
  */
  readonly entityField: string;
}

export function itsiEntityTypeDataDrilldownEntityFieldFilterToTerraform(struct?: ItsiEntityTypeDataDrilldownEntityFieldFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_field: cdktf.stringToTerraform(struct!.dataField),
    entity_field: cdktf.stringToTerraform(struct!.entityField),
  }
}


export function itsiEntityTypeDataDrilldownEntityFieldFilterToHclTerraform(struct?: ItsiEntityTypeDataDrilldownEntityFieldFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_field: {
      value: cdktf.stringToHclTerraform(struct!.dataField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_field: {
      value: cdktf.stringToHclTerraform(struct!.entityField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiEntityTypeDataDrilldownEntityFieldFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiEntityTypeDataDrilldownEntityFieldFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataField !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataField = this._dataField;
    }
    if (this._entityField !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityField = this._entityField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeDataDrilldownEntityFieldFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataField = undefined;
      this._entityField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataField = value.dataField;
      this._entityField = value.entityField;
    }
  }

  // data_field - computed: false, optional: false, required: true
  private _dataField?: string; 
  public get dataField() {
    return this.getStringAttribute('data_field');
  }
  public set dataField(value: string) {
    this._dataField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFieldInput() {
    return this._dataField;
  }

  // entity_field - computed: false, optional: false, required: true
  private _entityField?: string; 
  public get entityField() {
    return this.getStringAttribute('entity_field');
  }
  public set entityField(value: string) {
    this._entityField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFieldInput() {
    return this._entityField;
  }
}

export class ItsiEntityTypeDataDrilldownEntityFieldFilterList extends cdktf.ComplexList {
  public internalValue? : ItsiEntityTypeDataDrilldownEntityFieldFilter[] | cdktf.IResolvable

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
  public get(index: number): ItsiEntityTypeDataDrilldownEntityFieldFilterOutputReference {
    return new ItsiEntityTypeDataDrilldownEntityFieldFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiEntityTypeDataDrilldown {
  /**
  * Filter down to a subset of raw data associated with the entity using static information like sourcetype.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#static_filters ItsiEntityType#static_filters}
  */
  readonly staticFilters?: { [key: string]: string };
  /**
  * The name of the drilldown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#title ItsiEntityType#title}
  */
  readonly title: string;
  /**
  * Type of raw data to associate with. Must be either metrics or events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#type ItsiEntityType#type}
  */
  readonly type: string;
  /**
  * entity_field_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#entity_field_filter ItsiEntityType#entity_field_filter}
  */
  readonly entityFieldFilter?: ItsiEntityTypeDataDrilldownEntityFieldFilter[] | cdktf.IResolvable;
}

export function itsiEntityTypeDataDrilldownToTerraform(struct?: ItsiEntityTypeDataDrilldown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_filters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.staticFilters),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    entity_field_filter: cdktf.listMapper(itsiEntityTypeDataDrilldownEntityFieldFilterToTerraform, true)(struct!.entityFieldFilter),
  }
}


export function itsiEntityTypeDataDrilldownToHclTerraform(struct?: ItsiEntityTypeDataDrilldown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_filters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.staticFilters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    entity_field_filter: {
      value: cdktf.listMapperHcl(itsiEntityTypeDataDrilldownEntityFieldFilterToHclTerraform, true)(struct!.entityFieldFilter),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiEntityTypeDataDrilldownEntityFieldFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiEntityTypeDataDrilldownOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiEntityTypeDataDrilldown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFilters = this._staticFilters;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._entityFieldFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityFieldFilter = this._entityFieldFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeDataDrilldown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticFilters = undefined;
      this._title = undefined;
      this._type = undefined;
      this._entityFieldFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticFilters = value.staticFilters;
      this._title = value.title;
      this._type = value.type;
      this._entityFieldFilter.internalValue = value.entityFieldFilter;
    }
  }

  // static_filters - computed: true, optional: true, required: false
  private _staticFilters?: { [key: string]: string }; 
  public get staticFilters() {
    return this.getStringMapAttribute('static_filters');
  }
  public set staticFilters(value: { [key: string]: string }) {
    this._staticFilters = value;
  }
  public resetStaticFilters() {
    this._staticFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFiltersInput() {
    return this._staticFilters;
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

  // entity_field_filter - computed: false, optional: true, required: false
  private _entityFieldFilter = new ItsiEntityTypeDataDrilldownEntityFieldFilterList(this, "entity_field_filter", true);
  public get entityFieldFilter() {
    return this._entityFieldFilter;
  }
  public putEntityFieldFilter(value: ItsiEntityTypeDataDrilldownEntityFieldFilter[] | cdktf.IResolvable) {
    this._entityFieldFilter.internalValue = value;
  }
  public resetEntityFieldFilter() {
    this._entityFieldFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFieldFilterInput() {
    return this._entityFieldFilter.internalValue;
  }
}

export class ItsiEntityTypeDataDrilldownList extends cdktf.ComplexList {
  public internalValue? : ItsiEntityTypeDataDrilldown[] | cdktf.IResolvable

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
  public get(index: number): ItsiEntityTypeDataDrilldownOutputReference {
    return new ItsiEntityTypeDataDrilldownOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiEntityTypeTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#create ItsiEntityType#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#delete ItsiEntityType#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#read ItsiEntityType#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#update ItsiEntityType#update}
  */
  readonly update?: string;
}

export function itsiEntityTypeTimeoutsToTerraform(struct?: ItsiEntityTypeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function itsiEntityTypeTimeoutsToHclTerraform(struct?: ItsiEntityTypeTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiEntityTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItsiEntityTypeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ItsiEntityTypeVitalMetricAlertRuleEntityFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#field ItsiEntityType#field}
  */
  readonly field: string;
  /**
  * Takes values alias or info specifying in which category of fields the field attribute is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#field_type ItsiEntityType#field_type}
  */
  readonly fieldType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#value ItsiEntityType#value}
  */
  readonly value: string;
}

export function itsiEntityTypeVitalMetricAlertRuleEntityFilterToTerraform(struct?: ItsiEntityTypeVitalMetricAlertRuleEntityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itsiEntityTypeVitalMetricAlertRuleEntityFilterToHclTerraform(struct?: ItsiEntityTypeVitalMetricAlertRuleEntityFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
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

export class ItsiEntityTypeVitalMetricAlertRuleEntityFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiEntityTypeVitalMetricAlertRuleEntityFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeVitalMetricAlertRuleEntityFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._fieldType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._fieldType = value.fieldType;
      this._value = value.value;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // value - computed: false, optional: false, required: true
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

export class ItsiEntityTypeVitalMetricAlertRuleEntityFilterList extends cdktf.ComplexList {
  public internalValue? : ItsiEntityTypeVitalMetricAlertRuleEntityFilter[] | cdktf.IResolvable

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
  public get(index: number): ItsiEntityTypeVitalMetricAlertRuleEntityFilterOutputReference {
    return new ItsiEntityTypeVitalMetricAlertRuleEntityFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiEntityTypeVitalMetricAlertRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#critical_threshold ItsiEntityType#critical_threshold}
  */
  readonly criticalThreshold: number;
  /**
  * Frequency of the alert search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#cron_schedule ItsiEntityType#cron_schedule}
  */
  readonly cronSchedule: string;
  /**
  * Indicates if the alert rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#is_enabled ItsiEntityType#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency of the alert search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#suppress_time ItsiEntityType#suppress_time}
  */
  readonly suppressTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#warning_threshold ItsiEntityType#warning_threshold}
  */
  readonly warningThreshold: number;
  /**
  * entity_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#entity_filter ItsiEntityType#entity_filter}
  */
  readonly entityFilter?: ItsiEntityTypeVitalMetricAlertRuleEntityFilter[] | cdktf.IResolvable;
}

export function itsiEntityTypeVitalMetricAlertRuleToTerraform(struct?: ItsiEntityTypeVitalMetricAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical_threshold: cdktf.numberToTerraform(struct!.criticalThreshold),
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    suppress_time: cdktf.stringToTerraform(struct!.suppressTime),
    warning_threshold: cdktf.numberToTerraform(struct!.warningThreshold),
    entity_filter: cdktf.listMapper(itsiEntityTypeVitalMetricAlertRuleEntityFilterToTerraform, true)(struct!.entityFilter),
  }
}


export function itsiEntityTypeVitalMetricAlertRuleToHclTerraform(struct?: ItsiEntityTypeVitalMetricAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical_threshold: {
      value: cdktf.numberToHclTerraform(struct!.criticalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suppress_time: {
      value: cdktf.stringToHclTerraform(struct!.suppressTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entity_filter: {
      value: cdktf.listMapperHcl(itsiEntityTypeVitalMetricAlertRuleEntityFilterToHclTerraform, true)(struct!.entityFilter),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiEntityTypeVitalMetricAlertRuleEntityFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiEntityTypeVitalMetricAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiEntityTypeVitalMetricAlertRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criticalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalThreshold = this._criticalThreshold;
    }
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._suppressTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressTime = this._suppressTime;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    if (this._entityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityFilter = this._entityFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeVitalMetricAlertRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criticalThreshold = undefined;
      this._cronSchedule = undefined;
      this._isEnabled = undefined;
      this._suppressTime = undefined;
      this._warningThreshold = undefined;
      this._entityFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criticalThreshold = value.criticalThreshold;
      this._cronSchedule = value.cronSchedule;
      this._isEnabled = value.isEnabled;
      this._suppressTime = value.suppressTime;
      this._warningThreshold = value.warningThreshold;
      this._entityFilter.internalValue = value.entityFilter;
    }
  }

  // critical_threshold - computed: false, optional: false, required: true
  private _criticalThreshold?: number; 
  public get criticalThreshold() {
    return this.getNumberAttribute('critical_threshold');
  }
  public set criticalThreshold(value: number) {
    this._criticalThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalThresholdInput() {
    return this._criticalThreshold;
  }

  // cron_schedule - computed: false, optional: false, required: true
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // suppress_time - computed: true, optional: true, required: false
  private _suppressTime?: string; 
  public get suppressTime() {
    return this.getStringAttribute('suppress_time');
  }
  public set suppressTime(value: string) {
    this._suppressTime = value;
  }
  public resetSuppressTime() {
    this._suppressTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressTimeInput() {
    return this._suppressTime;
  }

  // warning_threshold - computed: false, optional: false, required: true
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }

  // entity_filter - computed: false, optional: true, required: false
  private _entityFilter = new ItsiEntityTypeVitalMetricAlertRuleEntityFilterList(this, "entity_filter", true);
  public get entityFilter() {
    return this._entityFilter;
  }
  public putEntityFilter(value: ItsiEntityTypeVitalMetricAlertRuleEntityFilter[] | cdktf.IResolvable) {
    this._entityFilter.internalValue = value;
  }
  public resetEntityFilter() {
    this._entityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFilterInput() {
    return this._entityFilter.internalValue;
  }
}

export class ItsiEntityTypeVitalMetricAlertRuleList extends cdktf.ComplexList {
  public internalValue? : ItsiEntityTypeVitalMetricAlertRule[] | cdktf.IResolvable

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
  public get(index: number): ItsiEntityTypeVitalMetricAlertRuleOutputReference {
    return new ItsiEntityTypeVitalMetricAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItsiEntityTypeVitalMetric {
  /**
  * 
  * Indicates if the vital metric specified is a key metric.
  * A key metric calculates the distribution of entities associated with the entity type to indicate the overall health of the entity type.
  * The key metric is rendered as a histogram in the Infrastructure Overview. Only one vital metric can have is_key set to true.
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#is_key ItsiEntityType#is_key}
  */
  readonly isKey: boolean | cdktf.IResolvable;
  /**
  * 
  * Specifies the aliases of an entity to use to match with the fields specified by the fields that the search configuration is split on.
  * Make sure the value matches the split by fields in the actual search.
  * For example:
  * 	- search = "..... by InstanceId, region"
  * 	- matching_entity_fields = {instance_id = "InstanceId", zone = "region"}.
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#matching_entity_fields ItsiEntityType#matching_entity_fields}
  */
  readonly matchingEntityFields: { [key: string]: string };
  /**
  * 
  * The title of the vital metric. When creating vital metrics,
  * it's a best practice to include the aggregation method and the name of the metric being calculated.
  * For example, Average CPU usage.
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#metric_name ItsiEntityType#metric_name}
  */
  readonly metricName: string;
  /**
  * 
  * The search that computes the vital metric. The search must specify the following fields:
  * - val for the value of the metric.
  * - _time because the UI attempts to render changes over time. You can achieve this by adding span={time} to your search.
  * - Fields as described in the split_by_fields configuration of this vital metric.
  * For example, your search should be split by host,region if the split_by_fields configuration is [ "host", "region" ].
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#search ItsiEntityType#search}
  */
  readonly search: string;
  /**
  * The unit of the vital metric. For example, KB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#unit ItsiEntityType#unit}
  */
  readonly unit?: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#alert_rule ItsiEntityType#alert_rule}
  */
  readonly alertRule?: ItsiEntityTypeVitalMetricAlertRule[] | cdktf.IResolvable;
}

export function itsiEntityTypeVitalMetricToTerraform(struct?: ItsiEntityTypeVitalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_key: cdktf.booleanToTerraform(struct!.isKey),
    matching_entity_fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchingEntityFields),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    search: cdktf.stringToTerraform(struct!.search),
    unit: cdktf.stringToTerraform(struct!.unit),
    alert_rule: cdktf.listMapper(itsiEntityTypeVitalMetricAlertRuleToTerraform, true)(struct!.alertRule),
  }
}


export function itsiEntityTypeVitalMetricToHclTerraform(struct?: ItsiEntityTypeVitalMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    matching_entity_fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchingEntityFields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_rule: {
      value: cdktf.listMapperHcl(itsiEntityTypeVitalMetricAlertRuleToHclTerraform, true)(struct!.alertRule),
      isBlock: true,
      type: "set",
      storageClassType: "ItsiEntityTypeVitalMetricAlertRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItsiEntityTypeVitalMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItsiEntityTypeVitalMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKey = this._isKey;
    }
    if (this._matchingEntityFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEntityFields = this._matchingEntityFields;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._alertRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRule = this._alertRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItsiEntityTypeVitalMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isKey = undefined;
      this._matchingEntityFields = undefined;
      this._metricName = undefined;
      this._search = undefined;
      this._unit = undefined;
      this._alertRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isKey = value.isKey;
      this._matchingEntityFields = value.matchingEntityFields;
      this._metricName = value.metricName;
      this._search = value.search;
      this._unit = value.unit;
      this._alertRule.internalValue = value.alertRule;
    }
  }

  // is_key - computed: false, optional: false, required: true
  private _isKey?: boolean | cdktf.IResolvable; 
  public get isKey() {
    return this.getBooleanAttribute('is_key');
  }
  public set isKey(value: boolean | cdktf.IResolvable) {
    this._isKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeyInput() {
    return this._isKey;
  }

  // matching_entity_fields - computed: false, optional: false, required: true
  private _matchingEntityFields?: { [key: string]: string }; 
  public get matchingEntityFields() {
    return this.getStringMapAttribute('matching_entity_fields');
  }
  public set matchingEntityFields(value: { [key: string]: string }) {
    this._matchingEntityFields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEntityFieldsInput() {
    return this._matchingEntityFields;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // search - computed: false, optional: false, required: true
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // alert_rule - computed: false, optional: true, required: false
  private _alertRule = new ItsiEntityTypeVitalMetricAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: ItsiEntityTypeVitalMetricAlertRule[] | cdktf.IResolvable) {
    this._alertRule.internalValue = value;
  }
  public resetAlertRule() {
    this._alertRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule.internalValue;
  }
}

export class ItsiEntityTypeVitalMetricList extends cdktf.ComplexList {
  public internalValue? : ItsiEntityTypeVitalMetric[] | cdktf.IResolvable

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
  public get(index: number): ItsiEntityTypeVitalMetricOutputReference {
    return new ItsiEntityTypeVitalMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type itsi_entity_type}
*/
export class ItsiEntityType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "itsi_entity_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItsiEntityType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItsiEntityType to import
  * @param importFromId The id of the existing ItsiEntityType that should be imported. Refer to the {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItsiEntityType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "itsi_entity_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tivo/splunk-itsi/2.2.4/docs/resources/itsi_entity_type itsi_entity_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItsiEntityTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ItsiEntityTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'itsi_entity_type',
      terraformGeneratorMetadata: {
        providerName: 'splunk-itsi',
        providerVersion: '2.2.4'
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
    this._title = config.title;
    this._dashboardDrilldown.internalValue = config.dashboardDrilldown;
    this._dataDrilldown.internalValue = config.dataDrilldown;
    this._timeouts.internalValue = config.timeouts;
    this._vitalMetric.internalValue = config.vitalMetric;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this.getStringAttribute('id');
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

  // dashboard_drilldown - computed: false, optional: true, required: false
  private _dashboardDrilldown = new ItsiEntityTypeDashboardDrilldownList(this, "dashboard_drilldown", true);
  public get dashboardDrilldown() {
    return this._dashboardDrilldown;
  }
  public putDashboardDrilldown(value: ItsiEntityTypeDashboardDrilldown[] | cdktf.IResolvable) {
    this._dashboardDrilldown.internalValue = value;
  }
  public resetDashboardDrilldown() {
    this._dashboardDrilldown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardDrilldownInput() {
    return this._dashboardDrilldown.internalValue;
  }

  // data_drilldown - computed: false, optional: true, required: false
  private _dataDrilldown = new ItsiEntityTypeDataDrilldownList(this, "data_drilldown", true);
  public get dataDrilldown() {
    return this._dataDrilldown;
  }
  public putDataDrilldown(value: ItsiEntityTypeDataDrilldown[] | cdktf.IResolvable) {
    this._dataDrilldown.internalValue = value;
  }
  public resetDataDrilldown() {
    this._dataDrilldown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDrilldownInput() {
    return this._dataDrilldown.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ItsiEntityTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ItsiEntityTypeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vital_metric - computed: false, optional: true, required: false
  private _vitalMetric = new ItsiEntityTypeVitalMetricList(this, "vital_metric", true);
  public get vitalMetric() {
    return this._vitalMetric;
  }
  public putVitalMetric(value: ItsiEntityTypeVitalMetric[] | cdktf.IResolvable) {
    this._vitalMetric.internalValue = value;
  }
  public resetVitalMetric() {
    this._vitalMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vitalMetricInput() {
    return this._vitalMetric.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      title: cdktf.stringToTerraform(this._title),
      dashboard_drilldown: cdktf.listMapper(itsiEntityTypeDashboardDrilldownToTerraform, true)(this._dashboardDrilldown.internalValue),
      data_drilldown: cdktf.listMapper(itsiEntityTypeDataDrilldownToTerraform, true)(this._dataDrilldown.internalValue),
      timeouts: itsiEntityTypeTimeoutsToTerraform(this._timeouts.internalValue),
      vital_metric: cdktf.listMapper(itsiEntityTypeVitalMetricToTerraform, true)(this._vitalMetric.internalValue),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_drilldown: {
        value: cdktf.listMapperHcl(itsiEntityTypeDashboardDrilldownToHclTerraform, true)(this._dashboardDrilldown.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItsiEntityTypeDashboardDrilldownList",
      },
      data_drilldown: {
        value: cdktf.listMapperHcl(itsiEntityTypeDataDrilldownToHclTerraform, true)(this._dataDrilldown.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItsiEntityTypeDataDrilldownList",
      },
      timeouts: {
        value: itsiEntityTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItsiEntityTypeTimeouts",
      },
      vital_metric: {
        value: cdktf.listMapperHcl(itsiEntityTypeVitalMetricToHclTerraform, true)(this._vitalMetric.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ItsiEntityTypeVitalMetricList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
