// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlaReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#default_date_range SlaReport#default_date_range}
  */
  readonly defaultDateRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#filter_response_time_sla_violations SlaReport#filter_response_time_sla_violations}
  */
  readonly filterResponseTimeSlaViolations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#filter_slowest SlaReport#filter_slowest}
  */
  readonly filterSlowest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#filter_uptime_sla_violations SlaReport#filter_uptime_sla_violations}
  */
  readonly filterUptimeSlaViolations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#filter_with_downtime SlaReport#filter_with_downtime}
  */
  readonly filterWithDowntime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#name SlaReport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#reporting_groups SlaReport#reporting_groups}
  */
  readonly reportingGroups?: SlaReportReportingGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#response_time_section_sort SlaReport#response_time_section_sort}
  */
  readonly responseTimeSectionSort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#services_selected SlaReport#services_selected}
  */
  readonly servicesSelected?: SlaReportServicesSelected[] | cdktf.IResolvable;
  /**
  * List of tags to organize and filter monitoring checks. 
  * Each account can have up to 3,000 unique tags, with a 100-character limit per tag. 
  * Tags help categorize resources for filtering in Dashboards, Public Status Pages, and SLA Reports. 
  * Common use cases include tagging by team ('dev-team', 'ops'), environment ('production', 'staging'), 
  * or purpose ('api', 'customer-facing'). Defaults to an empty list if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#services_tags SlaReport#services_tags}
  */
  readonly servicesTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#show_response_time_section SlaReport#show_response_time_section}
  */
  readonly showResponseTimeSection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#show_response_time_sla SlaReport#show_response_time_sla}
  */
  readonly showResponseTimeSla?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#show_uptime_section SlaReport#show_uptime_section}
  */
  readonly showUptimeSection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#show_uptime_sla SlaReport#show_uptime_sla}
  */
  readonly showUptimeSla?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#uptime_section_sort SlaReport#uptime_section_sort}
  */
  readonly uptimeSectionSort?: string;
}
export interface SlaReportReportingGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#group_services SlaReport#group_services}
  */
  readonly groupServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#id SlaReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#name SlaReport#name}
  */
  readonly name: string;
}

export function slaReportReportingGroupsToTerraform(struct?: SlaReportReportingGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupServices),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function slaReportReportingGroupsToHclTerraform(struct?: SlaReportReportingGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlaReportReportingGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlaReportReportingGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupServices = this._groupServices;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlaReportReportingGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupServices = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupServices = value.groupServices;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // group_services - computed: true, optional: true, required: false
  private _groupServices?: string[]; 
  public get groupServices() {
    return cdktf.Fn.tolist(this.getListAttribute('group_services'));
  }
  public set groupServices(value: string[]) {
    this._groupServices = value;
  }
  public resetGroupServices() {
    this._groupServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupServicesInput() {
    return this._groupServices;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class SlaReportReportingGroupsList extends cdktf.ComplexList {
  public internalValue? : SlaReportReportingGroups[] | cdktf.IResolvable

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
  public get(index: number): SlaReportReportingGroupsOutputReference {
    return new SlaReportReportingGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlaReportServicesSelected {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#id SlaReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#name SlaReport#name}
  */
  readonly name?: string;
}

export function slaReportServicesSelectedToTerraform(struct?: SlaReportServicesSelected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function slaReportServicesSelectedToHclTerraform(struct?: SlaReportServicesSelected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlaReportServicesSelectedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlaReportServicesSelected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlaReportServicesSelected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
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
}

export class SlaReportServicesSelectedList extends cdktf.ComplexList {
  public internalValue? : SlaReportServicesSelected[] | cdktf.IResolvable

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
  public get(index: number): SlaReportServicesSelectedOutputReference {
    return new SlaReportServicesSelectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report uptime_sla_report}
*/
export class SlaReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_sla_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlaReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlaReport to import
  * @param importFromId The id of the existing SlaReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlaReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_sla_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/sla_report uptime_sla_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlaReportConfig
  */
  public constructor(scope: Construct, id: string, config: SlaReportConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_sla_report',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultDateRange = config.defaultDateRange;
    this._filterResponseTimeSlaViolations = config.filterResponseTimeSlaViolations;
    this._filterSlowest = config.filterSlowest;
    this._filterUptimeSlaViolations = config.filterUptimeSlaViolations;
    this._filterWithDowntime = config.filterWithDowntime;
    this._name = config.name;
    this._reportingGroups.internalValue = config.reportingGroups;
    this._responseTimeSectionSort = config.responseTimeSectionSort;
    this._servicesSelected.internalValue = config.servicesSelected;
    this._servicesTags = config.servicesTags;
    this._showResponseTimeSection = config.showResponseTimeSection;
    this._showResponseTimeSla = config.showResponseTimeSla;
    this._showUptimeSection = config.showUptimeSection;
    this._showUptimeSla = config.showUptimeSla;
    this._uptimeSectionSort = config.uptimeSectionSort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_date_range - computed: true, optional: true, required: false
  private _defaultDateRange?: string; 
  public get defaultDateRange() {
    return this.getStringAttribute('default_date_range');
  }
  public set defaultDateRange(value: string) {
    this._defaultDateRange = value;
  }
  public resetDefaultDateRange() {
    this._defaultDateRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDateRangeInput() {
    return this._defaultDateRange;
  }

  // filter_response_time_sla_violations - computed: true, optional: true, required: false
  private _filterResponseTimeSlaViolations?: boolean | cdktf.IResolvable; 
  public get filterResponseTimeSlaViolations() {
    return this.getBooleanAttribute('filter_response_time_sla_violations');
  }
  public set filterResponseTimeSlaViolations(value: boolean | cdktf.IResolvable) {
    this._filterResponseTimeSlaViolations = value;
  }
  public resetFilterResponseTimeSlaViolations() {
    this._filterResponseTimeSlaViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterResponseTimeSlaViolationsInput() {
    return this._filterResponseTimeSlaViolations;
  }

  // filter_slowest - computed: true, optional: true, required: false
  private _filterSlowest?: boolean | cdktf.IResolvable; 
  public get filterSlowest() {
    return this.getBooleanAttribute('filter_slowest');
  }
  public set filterSlowest(value: boolean | cdktf.IResolvable) {
    this._filterSlowest = value;
  }
  public resetFilterSlowest() {
    this._filterSlowest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSlowestInput() {
    return this._filterSlowest;
  }

  // filter_uptime_sla_violations - computed: true, optional: true, required: false
  private _filterUptimeSlaViolations?: boolean | cdktf.IResolvable; 
  public get filterUptimeSlaViolations() {
    return this.getBooleanAttribute('filter_uptime_sla_violations');
  }
  public set filterUptimeSlaViolations(value: boolean | cdktf.IResolvable) {
    this._filterUptimeSlaViolations = value;
  }
  public resetFilterUptimeSlaViolations() {
    this._filterUptimeSlaViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterUptimeSlaViolationsInput() {
    return this._filterUptimeSlaViolations;
  }

  // filter_with_downtime - computed: true, optional: true, required: false
  private _filterWithDowntime?: boolean | cdktf.IResolvable; 
  public get filterWithDowntime() {
    return this.getBooleanAttribute('filter_with_downtime');
  }
  public set filterWithDowntime(value: boolean | cdktf.IResolvable) {
    this._filterWithDowntime = value;
  }
  public resetFilterWithDowntime() {
    this._filterWithDowntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterWithDowntimeInput() {
    return this._filterWithDowntime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // reporting_groups - computed: true, optional: true, required: false
  private _reportingGroups = new SlaReportReportingGroupsList(this, "reporting_groups", true);
  public get reportingGroups() {
    return this._reportingGroups;
  }
  public putReportingGroups(value: SlaReportReportingGroups[] | cdktf.IResolvable) {
    this._reportingGroups.internalValue = value;
  }
  public resetReportingGroups() {
    this._reportingGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingGroupsInput() {
    return this._reportingGroups.internalValue;
  }

  // response_time_section_sort - computed: true, optional: true, required: false
  private _responseTimeSectionSort?: string; 
  public get responseTimeSectionSort() {
    return this.getStringAttribute('response_time_section_sort');
  }
  public set responseTimeSectionSort(value: string) {
    this._responseTimeSectionSort = value;
  }
  public resetResponseTimeSectionSort() {
    this._responseTimeSectionSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeSectionSortInput() {
    return this._responseTimeSectionSort;
  }

  // services_selected - computed: true, optional: true, required: false
  private _servicesSelected = new SlaReportServicesSelectedList(this, "services_selected", true);
  public get servicesSelected() {
    return this._servicesSelected;
  }
  public putServicesSelected(value: SlaReportServicesSelected[] | cdktf.IResolvable) {
    this._servicesSelected.internalValue = value;
  }
  public resetServicesSelected() {
    this._servicesSelected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSelectedInput() {
    return this._servicesSelected.internalValue;
  }

  // services_tags - computed: true, optional: true, required: false
  private _servicesTags?: string[]; 
  public get servicesTags() {
    return cdktf.Fn.tolist(this.getListAttribute('services_tags'));
  }
  public set servicesTags(value: string[]) {
    this._servicesTags = value;
  }
  public resetServicesTags() {
    this._servicesTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesTagsInput() {
    return this._servicesTags;
  }

  // show_response_time_section - computed: true, optional: true, required: false
  private _showResponseTimeSection?: boolean | cdktf.IResolvable; 
  public get showResponseTimeSection() {
    return this.getBooleanAttribute('show_response_time_section');
  }
  public set showResponseTimeSection(value: boolean | cdktf.IResolvable) {
    this._showResponseTimeSection = value;
  }
  public resetShowResponseTimeSection() {
    this._showResponseTimeSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showResponseTimeSectionInput() {
    return this._showResponseTimeSection;
  }

  // show_response_time_sla - computed: true, optional: true, required: false
  private _showResponseTimeSla?: boolean | cdktf.IResolvable; 
  public get showResponseTimeSla() {
    return this.getBooleanAttribute('show_response_time_sla');
  }
  public set showResponseTimeSla(value: boolean | cdktf.IResolvable) {
    this._showResponseTimeSla = value;
  }
  public resetShowResponseTimeSla() {
    this._showResponseTimeSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showResponseTimeSlaInput() {
    return this._showResponseTimeSla;
  }

  // show_uptime_section - computed: true, optional: true, required: false
  private _showUptimeSection?: boolean | cdktf.IResolvable; 
  public get showUptimeSection() {
    return this.getBooleanAttribute('show_uptime_section');
  }
  public set showUptimeSection(value: boolean | cdktf.IResolvable) {
    this._showUptimeSection = value;
  }
  public resetShowUptimeSection() {
    this._showUptimeSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUptimeSectionInput() {
    return this._showUptimeSection;
  }

  // show_uptime_sla - computed: true, optional: true, required: false
  private _showUptimeSla?: boolean | cdktf.IResolvable; 
  public get showUptimeSla() {
    return this.getBooleanAttribute('show_uptime_sla');
  }
  public set showUptimeSla(value: boolean | cdktf.IResolvable) {
    this._showUptimeSla = value;
  }
  public resetShowUptimeSla() {
    this._showUptimeSla = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUptimeSlaInput() {
    return this._showUptimeSla;
  }

  // uptime_section_sort - computed: true, optional: true, required: false
  private _uptimeSectionSort?: string; 
  public get uptimeSectionSort() {
    return this.getStringAttribute('uptime_section_sort');
  }
  public set uptimeSectionSort(value: string) {
    this._uptimeSectionSort = value;
  }
  public resetUptimeSectionSort() {
    this._uptimeSectionSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeSectionSortInput() {
    return this._uptimeSectionSort;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_date_range: cdktf.stringToTerraform(this._defaultDateRange),
      filter_response_time_sla_violations: cdktf.booleanToTerraform(this._filterResponseTimeSlaViolations),
      filter_slowest: cdktf.booleanToTerraform(this._filterSlowest),
      filter_uptime_sla_violations: cdktf.booleanToTerraform(this._filterUptimeSlaViolations),
      filter_with_downtime: cdktf.booleanToTerraform(this._filterWithDowntime),
      name: cdktf.stringToTerraform(this._name),
      reporting_groups: cdktf.listMapper(slaReportReportingGroupsToTerraform, false)(this._reportingGroups.internalValue),
      response_time_section_sort: cdktf.stringToTerraform(this._responseTimeSectionSort),
      services_selected: cdktf.listMapper(slaReportServicesSelectedToTerraform, false)(this._servicesSelected.internalValue),
      services_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicesTags),
      show_response_time_section: cdktf.booleanToTerraform(this._showResponseTimeSection),
      show_response_time_sla: cdktf.booleanToTerraform(this._showResponseTimeSla),
      show_uptime_section: cdktf.booleanToTerraform(this._showUptimeSection),
      show_uptime_sla: cdktf.booleanToTerraform(this._showUptimeSla),
      uptime_section_sort: cdktf.stringToTerraform(this._uptimeSectionSort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_date_range: {
        value: cdktf.stringToHclTerraform(this._defaultDateRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_response_time_sla_violations: {
        value: cdktf.booleanToHclTerraform(this._filterResponseTimeSlaViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_slowest: {
        value: cdktf.booleanToHclTerraform(this._filterSlowest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_uptime_sla_violations: {
        value: cdktf.booleanToHclTerraform(this._filterUptimeSlaViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_with_downtime: {
        value: cdktf.booleanToHclTerraform(this._filterWithDowntime),
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
      reporting_groups: {
        value: cdktf.listMapperHcl(slaReportReportingGroupsToHclTerraform, false)(this._reportingGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SlaReportReportingGroupsList",
      },
      response_time_section_sort: {
        value: cdktf.stringToHclTerraform(this._responseTimeSectionSort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services_selected: {
        value: cdktf.listMapperHcl(slaReportServicesSelectedToHclTerraform, false)(this._servicesSelected.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SlaReportServicesSelectedList",
      },
      services_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servicesTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      show_response_time_section: {
        value: cdktf.booleanToHclTerraform(this._showResponseTimeSection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_response_time_sla: {
        value: cdktf.booleanToHclTerraform(this._showResponseTimeSla),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_uptime_section: {
        value: cdktf.booleanToHclTerraform(this._showUptimeSection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_uptime_sla: {
        value: cdktf.booleanToHclTerraform(this._showUptimeSla),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uptime_section_sort: {
        value: cdktf.stringToHclTerraform(this._uptimeSectionSort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
