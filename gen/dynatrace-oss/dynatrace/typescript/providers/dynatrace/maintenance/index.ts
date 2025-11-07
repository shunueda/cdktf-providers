// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaintenanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#enabled Maintenance#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#id Maintenance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of this setting when referred to by the Config REST API V1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#legacy_id Maintenance#legacy_id}
  */
  readonly legacyId?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#filters Maintenance#filters}
  */
  readonly filters?: MaintenanceFilters;
  /**
  * general_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#general_properties Maintenance#general_properties}
  */
  readonly generalProperties: MaintenanceGeneralProperties;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#schedule Maintenance#schedule}
  */
  readonly schedule: MaintenanceSchedule;
}
export interface MaintenanceFiltersFilter {
  /**
  * A specific entity that should match this maintenance window.. **Note**: If an entity type filter value is set, it must be equal to the type of the selected entity. Otherwise this maintenance window will not match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#entity_id Maintenance#entity_id}
  */
  readonly entityId?: string;
  /**
  * Entities which contain all of the configured tags will match this maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#entity_tags Maintenance#entity_tags}
  */
  readonly entityTags?: string[];
  /**
  * Type of entities this maintenance window should match.. If no entity type is selected all entities regardless of the type will match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#entity_type Maintenance#entity_type}
  */
  readonly entityType?: string;
  /**
  * Entities which are part of all the configured management zones will match this maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#management_zones Maintenance#management_zones}
  */
  readonly managementZones?: string[];
}

export function maintenanceFiltersFilterToTerraform(struct?: MaintenanceFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    entity_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityTags),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    management_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managementZones),
  }
}


export function maintenanceFiltersFilterToHclTerraform(struct?: MaintenanceFiltersFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managementZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceFiltersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaintenanceFiltersFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._entityTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTags = this._entityTags;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._managementZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZones = this._managementZones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceFiltersFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._entityTags = undefined;
      this._entityType = undefined;
      this._managementZones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._entityTags = value.entityTags;
      this._entityType = value.entityType;
      this._managementZones = value.managementZones;
    }
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_tags - computed: false, optional: true, required: false
  private _entityTags?: string[]; 
  public get entityTags() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_tags'));
  }
  public set entityTags(value: string[]) {
    this._entityTags = value;
  }
  public resetEntityTags() {
    this._entityTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTagsInput() {
    return this._entityTags;
  }

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // management_zones - computed: false, optional: true, required: false
  private _managementZones?: string[]; 
  public get managementZones() {
    return cdktf.Fn.tolist(this.getListAttribute('management_zones'));
  }
  public set managementZones(value: string[]) {
    this._managementZones = value;
  }
  public resetManagementZones() {
    this._managementZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZonesInput() {
    return this._managementZones;
  }
}

export class MaintenanceFiltersFilterList extends cdktf.ComplexList {
  public internalValue? : MaintenanceFiltersFilter[] | cdktf.IResolvable

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
  public get(index: number): MaintenanceFiltersFilterOutputReference {
    return new MaintenanceFiltersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaintenanceFilters {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#filter Maintenance#filter}
  */
  readonly filter: MaintenanceFiltersFilter[] | cdktf.IResolvable;
}

export function maintenanceFiltersToTerraform(struct?: MaintenanceFiltersOutputReference | MaintenanceFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(maintenanceFiltersFilterToTerraform, true)(struct!.filter),
  }
}


export function maintenanceFiltersToHclTerraform(struct?: MaintenanceFiltersOutputReference | MaintenanceFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(maintenanceFiltersFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "MaintenanceFiltersFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceFilters | undefined) {
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
  private _filter = new MaintenanceFiltersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MaintenanceFiltersFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface MaintenanceGeneralProperties {
  /**
  * A short description of the maintenance purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#description Maintenance#description}
  */
  readonly description?: string;
  /**
  * Disables the execution of the synthetic monitors that are within [the scope of this maintenance window](https://dt-url.net/0e0341m).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#disable_synthetic Maintenance#disable_synthetic}
  */
  readonly disableSynthetic: boolean | cdktf.IResolvable;
  /**
  * The name of the maintenance window, displayed in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#name Maintenance#name}
  */
  readonly name: string;
  /**
  * The type of suppression of alerting and problem detection during the maintenance. Possible Values: `DETECT_PROBLEMS_AND_ALERT`, `DETECT_PROBLEMS_DONT_ALERT`, `DONT_DETECT_PROBLEMS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#suppression Maintenance#suppression}
  */
  readonly suppression: string;
  /**
  * The type of the maintenance, possible values: `PLANNED` or `UNPLANNED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#type Maintenance#type}
  */
  readonly type: string;
}

export function maintenanceGeneralPropertiesToTerraform(struct?: MaintenanceGeneralPropertiesOutputReference | MaintenanceGeneralProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable_synthetic: cdktf.booleanToTerraform(struct!.disableSynthetic),
    name: cdktf.stringToTerraform(struct!.name),
    suppression: cdktf.stringToTerraform(struct!.suppression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function maintenanceGeneralPropertiesToHclTerraform(struct?: MaintenanceGeneralPropertiesOutputReference | MaintenanceGeneralProperties): any {
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
    disable_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.disableSynthetic),
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
    suppression: {
      value: cdktf.stringToHclTerraform(struct!.suppression),
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

export class MaintenanceGeneralPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceGeneralProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disableSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSynthetic = this._disableSynthetic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._suppression !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppression = this._suppression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceGeneralProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disableSynthetic = undefined;
      this._name = undefined;
      this._suppression = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disableSynthetic = value.disableSynthetic;
      this._name = value.name;
      this._suppression = value.suppression;
      this._type = value.type;
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

  // disable_synthetic - computed: false, optional: false, required: true
  private _disableSynthetic?: boolean | cdktf.IResolvable; 
  public get disableSynthetic() {
    return this.getBooleanAttribute('disable_synthetic');
  }
  public set disableSynthetic(value: boolean | cdktf.IResolvable) {
    this._disableSynthetic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSyntheticInput() {
    return this._disableSynthetic;
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

  // suppression - computed: false, optional: false, required: true
  private _suppression?: string; 
  public get suppression() {
    return this.getStringAttribute('suppression');
  }
  public set suppression(value: string) {
    this._suppression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressionInput() {
    return this._suppression;
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
}
export interface MaintenanceScheduleDailyRecurrenceRecurrenceRange {
  /**
  * The end date of the recurrence range in YYYY-MM-DD format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_date Maintenance#end_date}
  */
  readonly endDate: string;
  /**
  * The start date of the recurrence range in YYYY-MM-DD format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_date Maintenance#start_date}
  */
  readonly startDate: string;
}

export function maintenanceScheduleDailyRecurrenceRecurrenceRangeToTerraform(struct?: MaintenanceScheduleDailyRecurrenceRecurrenceRangeOutputReference | MaintenanceScheduleDailyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function maintenanceScheduleDailyRecurrenceRecurrenceRangeToHclTerraform(struct?: MaintenanceScheduleDailyRecurrenceRecurrenceRangeOutputReference | MaintenanceScheduleDailyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleDailyRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleDailyRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleDailyRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface MaintenanceScheduleDailyRecurrenceTimeWindow {
  /**
  * The end time of the maintenance window validity period in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_time Maintenance#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the maintenance window validity period in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_time Maintenance#start_time}
  */
  readonly startTime: string;
  /**
  * The time zone of the start and end time. Default time zone is UTC. You can use either UTC offset `UTC+01:00` format or the IANA Time Zone Database format (for example, `Europe/Vienna`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_zone Maintenance#time_zone}
  */
  readonly timeZone: string;
}

export function maintenanceScheduleDailyRecurrenceTimeWindowToTerraform(struct?: MaintenanceScheduleDailyRecurrenceTimeWindowOutputReference | MaintenanceScheduleDailyRecurrenceTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function maintenanceScheduleDailyRecurrenceTimeWindowToHclTerraform(struct?: MaintenanceScheduleDailyRecurrenceTimeWindowOutputReference | MaintenanceScheduleDailyRecurrenceTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleDailyRecurrenceTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleDailyRecurrenceTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleDailyRecurrenceTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface MaintenanceScheduleDailyRecurrence {
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#recurrence_range Maintenance#recurrence_range}
  */
  readonly recurrenceRange: MaintenanceScheduleDailyRecurrenceRecurrenceRange;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_window Maintenance#time_window}
  */
  readonly timeWindow: MaintenanceScheduleDailyRecurrenceTimeWindow;
}

export function maintenanceScheduleDailyRecurrenceToTerraform(struct?: MaintenanceScheduleDailyRecurrenceOutputReference | MaintenanceScheduleDailyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence_range: maintenanceScheduleDailyRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
    time_window: maintenanceScheduleDailyRecurrenceTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function maintenanceScheduleDailyRecurrenceToHclTerraform(struct?: MaintenanceScheduleDailyRecurrenceOutputReference | MaintenanceScheduleDailyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurrence_range: {
      value: maintenanceScheduleDailyRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleDailyRecurrenceRecurrenceRangeList",
    },
    time_window: {
      value: maintenanceScheduleDailyRecurrenceTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleDailyRecurrenceTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleDailyRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleDailyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleDailyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrenceRange.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrenceRange.internalValue = value.recurrenceRange;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new MaintenanceScheduleDailyRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: MaintenanceScheduleDailyRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow = new MaintenanceScheduleDailyRecurrenceTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: MaintenanceScheduleDailyRecurrenceTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface MaintenanceScheduleMonthlyRecurrenceRecurrenceRange {
  /**
  * The end date of the recurrence range in YYYY-MM-DD format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_date Maintenance#end_date}
  */
  readonly endDate: string;
  /**
  * The start date of the recurrence range in YYYY-MM-DD format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_date Maintenance#start_date}
  */
  readonly startDate: string;
}

export function maintenanceScheduleMonthlyRecurrenceRecurrenceRangeToTerraform(struct?: MaintenanceScheduleMonthlyRecurrenceRecurrenceRangeOutputReference | MaintenanceScheduleMonthlyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function maintenanceScheduleMonthlyRecurrenceRecurrenceRangeToHclTerraform(struct?: MaintenanceScheduleMonthlyRecurrenceRecurrenceRangeOutputReference | MaintenanceScheduleMonthlyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleMonthlyRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleMonthlyRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleMonthlyRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface MaintenanceScheduleMonthlyRecurrenceTimeWindow {
  /**
  * The end time of the maintenance window validity period in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_time Maintenance#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the maintenance window validity period in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_time Maintenance#start_time}
  */
  readonly startTime: string;
  /**
  * The time zone of the start and end time. Default time zone is UTC. You can use either UTC offset `UTC+01:00` format or the IANA Time Zone Database format (for example, `Europe/Vienna`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_zone Maintenance#time_zone}
  */
  readonly timeZone: string;
}

export function maintenanceScheduleMonthlyRecurrenceTimeWindowToTerraform(struct?: MaintenanceScheduleMonthlyRecurrenceTimeWindowOutputReference | MaintenanceScheduleMonthlyRecurrenceTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function maintenanceScheduleMonthlyRecurrenceTimeWindowToHclTerraform(struct?: MaintenanceScheduleMonthlyRecurrenceTimeWindowOutputReference | MaintenanceScheduleMonthlyRecurrenceTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleMonthlyRecurrenceTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleMonthlyRecurrenceTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleMonthlyRecurrenceTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface MaintenanceScheduleMonthlyRecurrence {
  /**
  * The day of the month for monthly maintenance. If the selected day does not fall within the month, the maintenance window will be active on the last day of the month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#day_of_month Maintenance#day_of_month}
  */
  readonly dayOfMonth: number;
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#recurrence_range Maintenance#recurrence_range}
  */
  readonly recurrenceRange: MaintenanceScheduleMonthlyRecurrenceRecurrenceRange;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_window Maintenance#time_window}
  */
  readonly timeWindow: MaintenanceScheduleMonthlyRecurrenceTimeWindow;
}

export function maintenanceScheduleMonthlyRecurrenceToTerraform(struct?: MaintenanceScheduleMonthlyRecurrenceOutputReference | MaintenanceScheduleMonthlyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    recurrence_range: maintenanceScheduleMonthlyRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
    time_window: maintenanceScheduleMonthlyRecurrenceTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function maintenanceScheduleMonthlyRecurrenceToHclTerraform(struct?: MaintenanceScheduleMonthlyRecurrenceOutputReference | MaintenanceScheduleMonthlyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurrence_range: {
      value: maintenanceScheduleMonthlyRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleMonthlyRecurrenceRecurrenceRangeList",
    },
    time_window: {
      value: maintenanceScheduleMonthlyRecurrenceTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleMonthlyRecurrenceTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleMonthlyRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleMonthlyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleMonthlyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfMonth = undefined;
      this._recurrenceRange.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfMonth = value.dayOfMonth;
      this._recurrenceRange.internalValue = value.recurrenceRange;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // day_of_month - computed: false, optional: false, required: true
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new MaintenanceScheduleMonthlyRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: MaintenanceScheduleMonthlyRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow = new MaintenanceScheduleMonthlyRecurrenceTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: MaintenanceScheduleMonthlyRecurrenceTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface MaintenanceScheduleOnceRecurrence {
  /**
  * The end time of the maintenance window validity period in YYYY-MM-DDThh:mm:ss format (for example, `2022-01-01T08:00:00`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_time Maintenance#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the maintenance window validity period in YYYY-MM-DDThh:mm:ss format (for example, `2022-01-01T08:00:00`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_time Maintenance#start_time}
  */
  readonly startTime: string;
  /**
  * The time zone of the start and end time. Default time zone is UTC. You can use either UTC offset `UTC+01:00` format or the IANA Time Zone Database format (for example, `Europe/Vienna`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_zone Maintenance#time_zone}
  */
  readonly timeZone: string;
}

export function maintenanceScheduleOnceRecurrenceToTerraform(struct?: MaintenanceScheduleOnceRecurrenceOutputReference | MaintenanceScheduleOnceRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function maintenanceScheduleOnceRecurrenceToHclTerraform(struct?: MaintenanceScheduleOnceRecurrenceOutputReference | MaintenanceScheduleOnceRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleOnceRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleOnceRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleOnceRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface MaintenanceScheduleWeeklyRecurrenceRecurrenceRange {
  /**
  * The end date of the recurrence range in YYYY-MM-DD format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_date Maintenance#end_date}
  */
  readonly endDate: string;
  /**
  * The start date of the recurrence range in YYYY-MM-DD format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_date Maintenance#start_date}
  */
  readonly startDate: string;
}

export function maintenanceScheduleWeeklyRecurrenceRecurrenceRangeToTerraform(struct?: MaintenanceScheduleWeeklyRecurrenceRecurrenceRangeOutputReference | MaintenanceScheduleWeeklyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_date: cdktf.stringToTerraform(struct!.endDate),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function maintenanceScheduleWeeklyRecurrenceRecurrenceRangeToHclTerraform(struct?: MaintenanceScheduleWeeklyRecurrenceRecurrenceRangeOutputReference | MaintenanceScheduleWeeklyRecurrenceRecurrenceRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleWeeklyRecurrenceRecurrenceRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleWeeklyRecurrenceRecurrenceRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleWeeklyRecurrenceRecurrenceRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endDate = undefined;
      this._startDate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endDate = value.endDate;
      this._startDate = value.startDate;
    }
  }

  // end_date - computed: false, optional: false, required: true
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface MaintenanceScheduleWeeklyRecurrenceTimeWindow {
  /**
  * The end time of the maintenance window validity period in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#end_time Maintenance#end_time}
  */
  readonly endTime: string;
  /**
  * The start time of the maintenance window validity period in hh:mm:ss format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#start_time Maintenance#start_time}
  */
  readonly startTime: string;
  /**
  * The time zone of the start and end time. Default time zone is UTC. You can use either UTC offset `UTC+01:00` format or the IANA Time Zone Database format (for example, `Europe/Vienna`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_zone Maintenance#time_zone}
  */
  readonly timeZone: string;
}

export function maintenanceScheduleWeeklyRecurrenceTimeWindowToTerraform(struct?: MaintenanceScheduleWeeklyRecurrenceTimeWindowOutputReference | MaintenanceScheduleWeeklyRecurrenceTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function maintenanceScheduleWeeklyRecurrenceTimeWindowToHclTerraform(struct?: MaintenanceScheduleWeeklyRecurrenceTimeWindowOutputReference | MaintenanceScheduleWeeklyRecurrenceTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleWeeklyRecurrenceTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleWeeklyRecurrenceTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleWeeklyRecurrenceTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timeZone = value.timeZone;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface MaintenanceScheduleWeeklyRecurrence {
  /**
  * The day of the week for weekly maintenance, possible values: `FRIDAY`, `MONDAY`, `SATURDAY`, `SUNDAY`, `THURSDAY`, `TUESDAY`, `WEDNESDAY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#day_of_week Maintenance#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * recurrence_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#recurrence_range Maintenance#recurrence_range}
  */
  readonly recurrenceRange: MaintenanceScheduleWeeklyRecurrenceRecurrenceRange;
  /**
  * time_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#time_window Maintenance#time_window}
  */
  readonly timeWindow: MaintenanceScheduleWeeklyRecurrenceTimeWindow;
}

export function maintenanceScheduleWeeklyRecurrenceToTerraform(struct?: MaintenanceScheduleWeeklyRecurrenceOutputReference | MaintenanceScheduleWeeklyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    recurrence_range: maintenanceScheduleWeeklyRecurrenceRecurrenceRangeToTerraform(struct!.recurrenceRange),
    time_window: maintenanceScheduleWeeklyRecurrenceTimeWindowToTerraform(struct!.timeWindow),
  }
}


export function maintenanceScheduleWeeklyRecurrenceToHclTerraform(struct?: MaintenanceScheduleWeeklyRecurrenceOutputReference | MaintenanceScheduleWeeklyRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_range: {
      value: maintenanceScheduleWeeklyRecurrenceRecurrenceRangeToHclTerraform(struct!.recurrenceRange),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleWeeklyRecurrenceRecurrenceRangeList",
    },
    time_window: {
      value: maintenanceScheduleWeeklyRecurrenceTimeWindowToHclTerraform(struct!.timeWindow),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleWeeklyRecurrenceTimeWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleWeeklyRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceScheduleWeeklyRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._recurrenceRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceRange = this._recurrenceRange?.internalValue;
    }
    if (this._timeWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceScheduleWeeklyRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._recurrenceRange.internalValue = undefined;
      this._timeWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._recurrenceRange.internalValue = value.recurrenceRange;
      this._timeWindow.internalValue = value.timeWindow;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // recurrence_range - computed: false, optional: false, required: true
  private _recurrenceRange = new MaintenanceScheduleWeeklyRecurrenceRecurrenceRangeOutputReference(this, "recurrence_range");
  public get recurrenceRange() {
    return this._recurrenceRange;
  }
  public putRecurrenceRange(value: MaintenanceScheduleWeeklyRecurrenceRecurrenceRange) {
    this._recurrenceRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceRangeInput() {
    return this._recurrenceRange.internalValue;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow = new MaintenanceScheduleWeeklyRecurrenceTimeWindowOutputReference(this, "time_window");
  public get timeWindow() {
    return this._timeWindow;
  }
  public putTimeWindow(value: MaintenanceScheduleWeeklyRecurrenceTimeWindow) {
    this._timeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow.internalValue;
  }
}
export interface MaintenanceSchedule {
  /**
  * The type maintenance window, possible values: `DAILY`, `MONTHLY`, `ONCE`, `WEEKLY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#type Maintenance#type}
  */
  readonly type: string;
  /**
  * daily_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#daily_recurrence Maintenance#daily_recurrence}
  */
  readonly dailyRecurrence?: MaintenanceScheduleDailyRecurrence;
  /**
  * monthly_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#monthly_recurrence Maintenance#monthly_recurrence}
  */
  readonly monthlyRecurrence?: MaintenanceScheduleMonthlyRecurrence;
  /**
  * once_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#once_recurrence Maintenance#once_recurrence}
  */
  readonly onceRecurrence?: MaintenanceScheduleOnceRecurrence;
  /**
  * weekly_recurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#weekly_recurrence Maintenance#weekly_recurrence}
  */
  readonly weeklyRecurrence?: MaintenanceScheduleWeeklyRecurrence;
}

export function maintenanceScheduleToTerraform(struct?: MaintenanceScheduleOutputReference | MaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    daily_recurrence: maintenanceScheduleDailyRecurrenceToTerraform(struct!.dailyRecurrence),
    monthly_recurrence: maintenanceScheduleMonthlyRecurrenceToTerraform(struct!.monthlyRecurrence),
    once_recurrence: maintenanceScheduleOnceRecurrenceToTerraform(struct!.onceRecurrence),
    weekly_recurrence: maintenanceScheduleWeeklyRecurrenceToTerraform(struct!.weeklyRecurrence),
  }
}


export function maintenanceScheduleToHclTerraform(struct?: MaintenanceScheduleOutputReference | MaintenanceSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daily_recurrence: {
      value: maintenanceScheduleDailyRecurrenceToHclTerraform(struct!.dailyRecurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleDailyRecurrenceList",
    },
    monthly_recurrence: {
      value: maintenanceScheduleMonthlyRecurrenceToHclTerraform(struct!.monthlyRecurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleMonthlyRecurrenceList",
    },
    once_recurrence: {
      value: maintenanceScheduleOnceRecurrenceToHclTerraform(struct!.onceRecurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleOnceRecurrenceList",
    },
    weekly_recurrence: {
      value: maintenanceScheduleWeeklyRecurrenceToHclTerraform(struct!.weeklyRecurrence),
      isBlock: true,
      type: "list",
      storageClassType: "MaintenanceScheduleWeeklyRecurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaintenanceScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaintenanceSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dailyRecurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyRecurrence = this._dailyRecurrence?.internalValue;
    }
    if (this._monthlyRecurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyRecurrence = this._monthlyRecurrence?.internalValue;
    }
    if (this._onceRecurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onceRecurrence = this._onceRecurrence?.internalValue;
    }
    if (this._weeklyRecurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyRecurrence = this._weeklyRecurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaintenanceSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._dailyRecurrence.internalValue = undefined;
      this._monthlyRecurrence.internalValue = undefined;
      this._onceRecurrence.internalValue = undefined;
      this._weeklyRecurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._dailyRecurrence.internalValue = value.dailyRecurrence;
      this._monthlyRecurrence.internalValue = value.monthlyRecurrence;
      this._onceRecurrence.internalValue = value.onceRecurrence;
      this._weeklyRecurrence.internalValue = value.weeklyRecurrence;
    }
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

  // daily_recurrence - computed: false, optional: true, required: false
  private _dailyRecurrence = new MaintenanceScheduleDailyRecurrenceOutputReference(this, "daily_recurrence");
  public get dailyRecurrence() {
    return this._dailyRecurrence;
  }
  public putDailyRecurrence(value: MaintenanceScheduleDailyRecurrence) {
    this._dailyRecurrence.internalValue = value;
  }
  public resetDailyRecurrence() {
    this._dailyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyRecurrenceInput() {
    return this._dailyRecurrence.internalValue;
  }

  // monthly_recurrence - computed: false, optional: true, required: false
  private _monthlyRecurrence = new MaintenanceScheduleMonthlyRecurrenceOutputReference(this, "monthly_recurrence");
  public get monthlyRecurrence() {
    return this._monthlyRecurrence;
  }
  public putMonthlyRecurrence(value: MaintenanceScheduleMonthlyRecurrence) {
    this._monthlyRecurrence.internalValue = value;
  }
  public resetMonthlyRecurrence() {
    this._monthlyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyRecurrenceInput() {
    return this._monthlyRecurrence.internalValue;
  }

  // once_recurrence - computed: false, optional: true, required: false
  private _onceRecurrence = new MaintenanceScheduleOnceRecurrenceOutputReference(this, "once_recurrence");
  public get onceRecurrence() {
    return this._onceRecurrence;
  }
  public putOnceRecurrence(value: MaintenanceScheduleOnceRecurrence) {
    this._onceRecurrence.internalValue = value;
  }
  public resetOnceRecurrence() {
    this._onceRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onceRecurrenceInput() {
    return this._onceRecurrence.internalValue;
  }

  // weekly_recurrence - computed: false, optional: true, required: false
  private _weeklyRecurrence = new MaintenanceScheduleWeeklyRecurrenceOutputReference(this, "weekly_recurrence");
  public get weeklyRecurrence() {
    return this._weeklyRecurrence;
  }
  public putWeeklyRecurrence(value: MaintenanceScheduleWeeklyRecurrence) {
    this._weeklyRecurrence.internalValue = value;
  }
  public resetWeeklyRecurrence() {
    this._weeklyRecurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyRecurrenceInput() {
    return this._weeklyRecurrence.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance dynatrace_maintenance}
*/
export class Maintenance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_maintenance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Maintenance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Maintenance to import
  * @param importFromId The id of the existing Maintenance that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Maintenance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_maintenance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/maintenance dynatrace_maintenance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaintenanceConfig
  */
  public constructor(scope: Construct, id: string, config: MaintenanceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_maintenance',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
    this._legacyId = config.legacyId;
    this._filters.internalValue = config.filters;
    this._generalProperties.internalValue = config.generalProperties;
    this._schedule.internalValue = config.schedule;
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

  // legacy_id - computed: true, optional: true, required: false
  private _legacyId?: string; 
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }
  public set legacyId(value: string) {
    this._legacyId = value;
  }
  public resetLegacyId() {
    this._legacyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyIdInput() {
    return this._legacyId;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new MaintenanceFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: MaintenanceFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // general_properties - computed: false, optional: false, required: true
  private _generalProperties = new MaintenanceGeneralPropertiesOutputReference(this, "general_properties");
  public get generalProperties() {
    return this._generalProperties;
  }
  public putGeneralProperties(value: MaintenanceGeneralProperties) {
    this._generalProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generalPropertiesInput() {
    return this._generalProperties.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new MaintenanceScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: MaintenanceSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      legacy_id: cdktf.stringToTerraform(this._legacyId),
      filters: maintenanceFiltersToTerraform(this._filters.internalValue),
      general_properties: maintenanceGeneralPropertiesToTerraform(this._generalProperties.internalValue),
      schedule: maintenanceScheduleToTerraform(this._schedule.internalValue),
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
      legacy_id: {
        value: cdktf.stringToHclTerraform(this._legacyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: maintenanceFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaintenanceFiltersList",
      },
      general_properties: {
        value: maintenanceGeneralPropertiesToHclTerraform(this._generalProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaintenanceGeneralPropertiesList",
      },
      schedule: {
        value: maintenanceScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaintenanceScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
