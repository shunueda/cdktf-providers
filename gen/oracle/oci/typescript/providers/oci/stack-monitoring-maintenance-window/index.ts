// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#defined_tags StackMonitoringMaintenanceWindow#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#freeform_tags StackMonitoringMaintenanceWindow#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}
  */
  readonly name: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#resources StackMonitoringMaintenanceWindow#resources}
  */
  readonly resources: StackMonitoringMaintenanceWindowResources[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#schedule StackMonitoringMaintenanceWindow#schedule}
  */
  readonly schedule: StackMonitoringMaintenanceWindowSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#timeouts StackMonitoringMaintenanceWindow#timeouts}
  */
  readonly timeouts?: StackMonitoringMaintenanceWindowTimeouts;
}
export interface StackMonitoringMaintenanceWindowResourcesDetails {
}

export function stackMonitoringMaintenanceWindowResourcesDetailsToTerraform(struct?: StackMonitoringMaintenanceWindowResourcesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMaintenanceWindowResourcesDetailsToHclTerraform(struct?: StackMonitoringMaintenanceWindowResourcesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMaintenanceWindowResourcesDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StackMonitoringMaintenanceWindowResourcesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMaintenanceWindowResourcesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // number_of_members - computed: true, optional: false, required: false
  public get numberOfMembers() {
    return this.getNumberAttribute('number_of_members');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class StackMonitoringMaintenanceWindowResourcesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMaintenanceWindowResourcesDetailsOutputReference {
    return new StackMonitoringMaintenanceWindowResourcesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMaintenanceWindowResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}
  */
  readonly areMembersIncluded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}
  */
  readonly resourceId: string;
}

export function stackMonitoringMaintenanceWindowResourcesToTerraform(struct?: StackMonitoringMaintenanceWindowResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    are_members_included: cdktf.booleanToTerraform(struct!.areMembersIncluded),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function stackMonitoringMaintenanceWindowResourcesToHclTerraform(struct?: StackMonitoringMaintenanceWindowResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    are_members_included: {
      value: cdktf.booleanToHclTerraform(struct!.areMembersIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMaintenanceWindowResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMaintenanceWindowResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areMembersIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.areMembersIncluded = this._areMembersIncluded;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMaintenanceWindowResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areMembersIncluded = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areMembersIncluded = value.areMembersIncluded;
      this._resourceId = value.resourceId;
    }
  }

  // are_members_included - computed: true, optional: true, required: false
  private _areMembersIncluded?: boolean | cdktf.IResolvable; 
  public get areMembersIncluded() {
    return this.getBooleanAttribute('are_members_included');
  }
  public set areMembersIncluded(value: boolean | cdktf.IResolvable) {
    this._areMembersIncluded = value;
  }
  public resetAreMembersIncluded() {
    this._areMembersIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areMembersIncludedInput() {
    return this._areMembersIncluded;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }
}

export class StackMonitoringMaintenanceWindowResourcesList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMaintenanceWindowResources[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMaintenanceWindowResourcesOutputReference {
    return new StackMonitoringMaintenanceWindowResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMaintenanceWindowSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}
  */
  readonly maintenanceWindowDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}
  */
  readonly maintenanceWindowRecurrences?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}
  */
  readonly timeMaintenanceWindowEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}
  */
  readonly timeMaintenanceWindowStart?: string;
}

export function stackMonitoringMaintenanceWindowScheduleToTerraform(struct?: StackMonitoringMaintenanceWindowScheduleOutputReference | StackMonitoringMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window_duration: cdktf.stringToTerraform(struct!.maintenanceWindowDuration),
    maintenance_window_recurrences: cdktf.stringToTerraform(struct!.maintenanceWindowRecurrences),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    time_maintenance_window_end: cdktf.stringToTerraform(struct!.timeMaintenanceWindowEnd),
    time_maintenance_window_start: cdktf.stringToTerraform(struct!.timeMaintenanceWindowStart),
  }
}


export function stackMonitoringMaintenanceWindowScheduleToHclTerraform(struct?: StackMonitoringMaintenanceWindowScheduleOutputReference | StackMonitoringMaintenanceWindowSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window_duration: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_window_recurrences: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowRecurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_maintenance_window_end: {
      value: cdktf.stringToHclTerraform(struct!.timeMaintenanceWindowEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_maintenance_window_start: {
      value: cdktf.stringToHclTerraform(struct!.timeMaintenanceWindowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMaintenanceWindowScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMaintenanceWindowSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowDuration = this._maintenanceWindowDuration;
    }
    if (this._maintenanceWindowRecurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowRecurrences = this._maintenanceWindowRecurrences;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._timeMaintenanceWindowEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeMaintenanceWindowEnd = this._timeMaintenanceWindowEnd;
    }
    if (this._timeMaintenanceWindowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeMaintenanceWindowStart = this._timeMaintenanceWindowStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMaintenanceWindowSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindowDuration = undefined;
      this._maintenanceWindowRecurrences = undefined;
      this._scheduleType = undefined;
      this._timeMaintenanceWindowEnd = undefined;
      this._timeMaintenanceWindowStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindowDuration = value.maintenanceWindowDuration;
      this._maintenanceWindowRecurrences = value.maintenanceWindowRecurrences;
      this._scheduleType = value.scheduleType;
      this._timeMaintenanceWindowEnd = value.timeMaintenanceWindowEnd;
      this._timeMaintenanceWindowStart = value.timeMaintenanceWindowStart;
    }
  }

  // maintenance_window_duration - computed: true, optional: true, required: false
  private _maintenanceWindowDuration?: string; 
  public get maintenanceWindowDuration() {
    return this.getStringAttribute('maintenance_window_duration');
  }
  public set maintenanceWindowDuration(value: string) {
    this._maintenanceWindowDuration = value;
  }
  public resetMaintenanceWindowDuration() {
    this._maintenanceWindowDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDurationInput() {
    return this._maintenanceWindowDuration;
  }

  // maintenance_window_recurrences - computed: true, optional: true, required: false
  private _maintenanceWindowRecurrences?: string; 
  public get maintenanceWindowRecurrences() {
    return this.getStringAttribute('maintenance_window_recurrences');
  }
  public set maintenanceWindowRecurrences(value: string) {
    this._maintenanceWindowRecurrences = value;
  }
  public resetMaintenanceWindowRecurrences() {
    this._maintenanceWindowRecurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowRecurrencesInput() {
    return this._maintenanceWindowRecurrences;
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // time_maintenance_window_end - computed: true, optional: true, required: false
  private _timeMaintenanceWindowEnd?: string; 
  public get timeMaintenanceWindowEnd() {
    return this.getStringAttribute('time_maintenance_window_end');
  }
  public set timeMaintenanceWindowEnd(value: string) {
    this._timeMaintenanceWindowEnd = value;
  }
  public resetTimeMaintenanceWindowEnd() {
    this._timeMaintenanceWindowEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMaintenanceWindowEndInput() {
    return this._timeMaintenanceWindowEnd;
  }

  // time_maintenance_window_start - computed: true, optional: true, required: false
  private _timeMaintenanceWindowStart?: string; 
  public get timeMaintenanceWindowStart() {
    return this.getStringAttribute('time_maintenance_window_start');
  }
  public set timeMaintenanceWindowStart(value: string) {
    this._timeMaintenanceWindowStart = value;
  }
  public resetTimeMaintenanceWindowStart() {
    this._timeMaintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeMaintenanceWindowStartInput() {
    return this._timeMaintenanceWindowStart;
  }
}
export interface StackMonitoringMaintenanceWindowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}
  */
  readonly update?: string;
}

export function stackMonitoringMaintenanceWindowTimeoutsToTerraform(struct?: StackMonitoringMaintenanceWindowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function stackMonitoringMaintenanceWindowTimeoutsToHclTerraform(struct?: StackMonitoringMaintenanceWindowTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringMaintenanceWindowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMaintenanceWindowTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMaintenanceWindowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window oci_stack_monitoring_maintenance_window}
*/
export class StackMonitoringMaintenanceWindow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMaintenanceWindow to import
  * @param importFromId The id of the existing StackMonitoringMaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/stack_monitoring_maintenance_window oci_stack_monitoring_maintenance_window} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._resources.internalValue = config.resources;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // resources_details - computed: true, optional: false, required: false
  private _resourcesDetails = new StackMonitoringMaintenanceWindowResourcesDetailsList(this, "resources_details", false);
  public get resourcesDetails() {
    return this._resourcesDetails;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new StackMonitoringMaintenanceWindowResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: StackMonitoringMaintenanceWindowResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new StackMonitoringMaintenanceWindowScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: StackMonitoringMaintenanceWindowSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMaintenanceWindowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMaintenanceWindowTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resources: cdktf.listMapper(stackMonitoringMaintenanceWindowResourcesToTerraform, true)(this._resources.internalValue),
      schedule: stackMonitoringMaintenanceWindowScheduleToTerraform(this._schedule.internalValue),
      timeouts: stackMonitoringMaintenanceWindowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.listMapperHcl(stackMonitoringMaintenanceWindowResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMaintenanceWindowResourcesList",
      },
      schedule: {
        value: stackMonitoringMaintenanceWindowScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMaintenanceWindowScheduleList",
      },
      timeouts: {
        value: stackMonitoringMaintenanceWindowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMaintenanceWindowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
