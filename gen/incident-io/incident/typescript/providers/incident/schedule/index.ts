// https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#holidays_public_config Schedule#holidays_public_config}
  */
  readonly holidaysPublicConfig?: ScheduleHolidaysPublicConfig;
  /**
  * Human readable name synced from external provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#name Schedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#rotations Schedule#rotations}
  */
  readonly rotations: ScheduleRotations[] | cdktf.IResolvable;
  /**
  * IDs of teams that own this schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#team_ids Schedule#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#timezone Schedule#timezone}
  */
  readonly timezone: string;
}
export interface ScheduleHolidaysPublicConfig {
  /**
  * ISO 3166-1 alpha-2 country codes for the countries that this schedule is configured to view holidays for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#country_codes Schedule#country_codes}
  */
  readonly countryCodes: string[];
}

export function scheduleHolidaysPublicConfigToTerraform(struct?: ScheduleHolidaysPublicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryCodes),
  }
}


export function scheduleHolidaysPublicConfigToHclTerraform(struct?: ScheduleHolidaysPublicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleHolidaysPublicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScheduleHolidaysPublicConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleHolidaysPublicConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryCodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryCodes = value.countryCodes;
    }
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }
}
export interface ScheduleRotationsVersionsHandovers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#interval Schedule#interval}
  */
  readonly interval: number;
  /**
  * How often a handover occurs. Possible values are: `hourly`, `daily`, `weekly`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#interval_type Schedule#interval_type}
  */
  readonly intervalType: string;
}

export function scheduleRotationsVersionsHandoversToTerraform(struct?: ScheduleRotationsVersionsHandovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_type: cdktf.stringToTerraform(struct!.intervalType),
  }
}


export function scheduleRotationsVersionsHandoversToHclTerraform(struct?: ScheduleRotationsVersionsHandovers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_type: {
      value: cdktf.stringToHclTerraform(struct!.intervalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationsVersionsHandoversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationsVersionsHandovers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalType = this._intervalType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationsVersionsHandovers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._intervalType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._intervalType = value.intervalType;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_type - computed: false, optional: false, required: true
  private _intervalType?: string; 
  public get intervalType() {
    return this.getStringAttribute('interval_type');
  }
  public set intervalType(value: string) {
    this._intervalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalTypeInput() {
    return this._intervalType;
  }
}

export class ScheduleRotationsVersionsHandoversList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationsVersionsHandovers[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationsVersionsHandoversOutputReference {
    return new ScheduleRotationsVersionsHandoversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleRotationsVersionsLayers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#id Schedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#name Schedule#name}
  */
  readonly name: string;
}

export function scheduleRotationsVersionsLayersToTerraform(struct?: ScheduleRotationsVersionsLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function scheduleRotationsVersionsLayersToHclTerraform(struct?: ScheduleRotationsVersionsLayers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationsVersionsLayersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationsVersionsLayers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScheduleRotationsVersionsLayers | cdktf.IResolvable | undefined) {
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
}

export class ScheduleRotationsVersionsLayersList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationsVersionsLayers[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationsVersionsLayersOutputReference {
    return new ScheduleRotationsVersionsLayersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleRotationsVersionsWorkingIntervals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#end_time Schedule#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#start_time Schedule#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#weekday Schedule#weekday}
  */
  readonly weekday: string;
}

export function scheduleRotationsVersionsWorkingIntervalsToTerraform(struct?: ScheduleRotationsVersionsWorkingIntervals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    weekday: cdktf.stringToTerraform(struct!.weekday),
  }
}


export function scheduleRotationsVersionsWorkingIntervalsToHclTerraform(struct?: ScheduleRotationsVersionsWorkingIntervals | cdktf.IResolvable): any {
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
    weekday: {
      value: cdktf.stringToHclTerraform(struct!.weekday),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationsVersionsWorkingIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationsVersionsWorkingIntervals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._weekday !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekday = this._weekday;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationsVersionsWorkingIntervals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._weekday = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._weekday = value.weekday;
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

  // weekday - computed: false, optional: false, required: true
  private _weekday?: string; 
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
  public set weekday(value: string) {
    this._weekday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdayInput() {
    return this._weekday;
  }
}

export class ScheduleRotationsVersionsWorkingIntervalsList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationsVersionsWorkingIntervals[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationsVersionsWorkingIntervalsOutputReference {
    return new ScheduleRotationsVersionsWorkingIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleRotationsVersions {
  /**
  * When this rotation config will be effective from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#effective_from Schedule#effective_from}
  */
  readonly effectiveFrom?: string;
  /**
  * Defines the next moment we'll trigger a handover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#handover_start_at Schedule#handover_start_at}
  */
  readonly handoverStartAt: string;
  /**
  * Defines the handover intervals for this rota, in order they should apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#handovers Schedule#handovers}
  */
  readonly handovers: ScheduleRotationsVersionsHandovers[] | cdktf.IResolvable;
  /**
  * Controls how many people are on-call concurrently
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#layers Schedule#layers}
  */
  readonly layers: ScheduleRotationsVersionsLayers[] | cdktf.IResolvable;
  /**
  * The incident.io ID of a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#users Schedule#users}
  */
  readonly users: string[];
  /**
  * Optional restrictions that define when to schedule people for this rota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#working_intervals Schedule#working_intervals}
  */
  readonly workingIntervals?: ScheduleRotationsVersionsWorkingIntervals[] | cdktf.IResolvable;
}

export function scheduleRotationsVersionsToTerraform(struct?: ScheduleRotationsVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effective_from: cdktf.stringToTerraform(struct!.effectiveFrom),
    handover_start_at: cdktf.stringToTerraform(struct!.handoverStartAt),
    handovers: cdktf.listMapper(scheduleRotationsVersionsHandoversToTerraform, false)(struct!.handovers),
    layers: cdktf.listMapper(scheduleRotationsVersionsLayersToTerraform, false)(struct!.layers),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    working_intervals: cdktf.listMapper(scheduleRotationsVersionsWorkingIntervalsToTerraform, false)(struct!.workingIntervals),
  }
}


export function scheduleRotationsVersionsToHclTerraform(struct?: ScheduleRotationsVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effective_from: {
      value: cdktf.stringToHclTerraform(struct!.effectiveFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handover_start_at: {
      value: cdktf.stringToHclTerraform(struct!.handoverStartAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handovers: {
      value: cdktf.listMapperHcl(scheduleRotationsVersionsHandoversToHclTerraform, false)(struct!.handovers),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduleRotationsVersionsHandoversList",
    },
    layers: {
      value: cdktf.listMapperHcl(scheduleRotationsVersionsLayersToHclTerraform, false)(struct!.layers),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduleRotationsVersionsLayersList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    working_intervals: {
      value: cdktf.listMapperHcl(scheduleRotationsVersionsWorkingIntervalsToHclTerraform, false)(struct!.workingIntervals),
      isBlock: true,
      type: "list",
      storageClassType: "ScheduleRotationsVersionsWorkingIntervalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationsVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotationsVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effectiveFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveFrom = this._effectiveFrom;
    }
    if (this._handoverStartAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.handoverStartAt = this._handoverStartAt;
    }
    if (this._handovers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handovers = this._handovers?.internalValue;
    }
    if (this._layers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layers = this._layers?.internalValue;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._workingIntervals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingIntervals = this._workingIntervals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotationsVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effectiveFrom = undefined;
      this._handoverStartAt = undefined;
      this._handovers.internalValue = undefined;
      this._layers.internalValue = undefined;
      this._users = undefined;
      this._workingIntervals.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effectiveFrom = value.effectiveFrom;
      this._handoverStartAt = value.handoverStartAt;
      this._handovers.internalValue = value.handovers;
      this._layers.internalValue = value.layers;
      this._users = value.users;
      this._workingIntervals.internalValue = value.workingIntervals;
    }
  }

  // effective_from - computed: false, optional: true, required: false
  private _effectiveFrom?: string; 
  public get effectiveFrom() {
    return this.getStringAttribute('effective_from');
  }
  public set effectiveFrom(value: string) {
    this._effectiveFrom = value;
  }
  public resetEffectiveFrom() {
    this._effectiveFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveFromInput() {
    return this._effectiveFrom;
  }

  // handover_start_at - computed: false, optional: false, required: true
  private _handoverStartAt?: string; 
  public get handoverStartAt() {
    return this.getStringAttribute('handover_start_at');
  }
  public set handoverStartAt(value: string) {
    this._handoverStartAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handoverStartAtInput() {
    return this._handoverStartAt;
  }

  // handovers - computed: false, optional: false, required: true
  private _handovers = new ScheduleRotationsVersionsHandoversList(this, "handovers", false);
  public get handovers() {
    return this._handovers;
  }
  public putHandovers(value: ScheduleRotationsVersionsHandovers[] | cdktf.IResolvable) {
    this._handovers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handoversInput() {
    return this._handovers.internalValue;
  }

  // layers - computed: false, optional: false, required: true
  private _layers = new ScheduleRotationsVersionsLayersList(this, "layers", false);
  public get layers() {
    return this._layers;
  }
  public putLayers(value: ScheduleRotationsVersionsLayers[] | cdktf.IResolvable) {
    this._layers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers.internalValue;
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // working_intervals - computed: false, optional: true, required: false
  private _workingIntervals = new ScheduleRotationsVersionsWorkingIntervalsList(this, "working_intervals", false);
  public get workingIntervals() {
    return this._workingIntervals;
  }
  public putWorkingIntervals(value: ScheduleRotationsVersionsWorkingIntervals[] | cdktf.IResolvable) {
    this._workingIntervals.internalValue = value;
  }
  public resetWorkingIntervals() {
    this._workingIntervals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingIntervalsInput() {
    return this._workingIntervals.internalValue;
  }
}

export class ScheduleRotationsVersionsList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotationsVersions[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationsVersionsOutputReference {
    return new ScheduleRotationsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScheduleRotations {
  /**
  * Unique internal ID of the rotation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#id Schedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Human readable name synced from external provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#name Schedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#versions Schedule#versions}
  */
  readonly versions: ScheduleRotationsVersions[] | cdktf.IResolvable;
}

export function scheduleRotationsToTerraform(struct?: ScheduleRotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    versions: cdktf.listMapper(scheduleRotationsVersionsToTerraform, false)(struct!.versions),
  }
}


export function scheduleRotationsToHclTerraform(struct?: ScheduleRotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    versions: {
      value: cdktf.listMapperHcl(scheduleRotationsVersionsToHclTerraform, false)(struct!.versions),
      isBlock: true,
      type: "set",
      storageClassType: "ScheduleRotationsVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScheduleRotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScheduleRotations | cdktf.IResolvable | undefined {
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
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScheduleRotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._versions.internalValue = undefined;
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
      this._versions.internalValue = value.versions;
    }
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

  // versions - computed: false, optional: false, required: true
  private _versions = new ScheduleRotationsVersionsList(this, "versions", true);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: ScheduleRotationsVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

export class ScheduleRotationsList extends cdktf.ComplexList {
  public internalValue? : ScheduleRotations[] | cdktf.IResolvable

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
  public get(index: number): ScheduleRotationsOutputReference {
    return new ScheduleRotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule incident_schedule}
*/
export class Schedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schedule to import
  * @param importFromId The id of the existing Schedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.21.0/docs/resources/schedule incident_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_schedule',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.21.0',
        providerVersionConstraint: '5.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._holidaysPublicConfig.internalValue = config.holidaysPublicConfig;
    this._name = config.name;
    this._rotations.internalValue = config.rotations;
    this._teamIds = config.teamIds;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // holidays_public_config - computed: false, optional: true, required: false
  private _holidaysPublicConfig = new ScheduleHolidaysPublicConfigOutputReference(this, "holidays_public_config");
  public get holidaysPublicConfig() {
    return this._holidaysPublicConfig;
  }
  public putHolidaysPublicConfig(value: ScheduleHolidaysPublicConfig) {
    this._holidaysPublicConfig.internalValue = value;
  }
  public resetHolidaysPublicConfig() {
    this._holidaysPublicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holidaysPublicConfigInput() {
    return this._holidaysPublicConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rotations - computed: false, optional: false, required: true
  private _rotations = new ScheduleRotationsList(this, "rotations", true);
  public get rotations() {
    return this._rotations;
  }
  public putRotations(value: ScheduleRotations[] | cdktf.IResolvable) {
    this._rotations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationsInput() {
    return this._rotations.internalValue;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      holidays_public_config: scheduleHolidaysPublicConfigToTerraform(this._holidaysPublicConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rotations: cdktf.listMapper(scheduleRotationsToTerraform, false)(this._rotations.internalValue),
      team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teamIds),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      holidays_public_config: {
        value: scheduleHolidaysPublicConfigToHclTerraform(this._holidaysPublicConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScheduleHolidaysPublicConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotations: {
        value: cdktf.listMapperHcl(scheduleRotationsToHclTerraform, false)(this._rotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ScheduleRotationsList",
      },
      team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teamIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
