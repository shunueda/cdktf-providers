// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PraApprovalControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address of the user that you are assigning the privileged approval to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#email_ids PraApprovalController#email_ids}
  */
  readonly emailIds?: string[];
  /**
  * The end date that the user no longer has access to the privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#end_time PraApprovalController#end_time}
  */
  readonly endTime?: string;
  /**
  * The unique identifier of the Microtenant for the ZPA tenant. If you are within the Default Microtenant, pass microtenantId as 0 when making requests to retrieve data from the Default Microtenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#microtenant_id PraApprovalController#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * The start date that the user has access to the privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#start_time PraApprovalController#start_time}
  */
  readonly startTime?: string;
  /**
  * The status of the privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#status PraApprovalController#status}
  */
  readonly status?: string;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#applications PraApprovalController#applications}
  */
  readonly applications: PraApprovalControllerApplications[] | cdktf.IResolvable;
  /**
  * working_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#working_hours PraApprovalController#working_hours}
  */
  readonly workingHours?: PraApprovalControllerWorkingHours[] | cdktf.IResolvable;
}
export interface PraApprovalControllerApplications {
  /**
  * The unique identifier of the pra application segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#id PraApprovalController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
}

export function praApprovalControllerApplicationsToTerraform(struct?: PraApprovalControllerApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function praApprovalControllerApplicationsToHclTerraform(struct?: PraApprovalControllerApplications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PraApprovalControllerApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PraApprovalControllerApplications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PraApprovalControllerApplications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return this.getListAttribute('id');
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PraApprovalControllerApplicationsList extends cdktf.ComplexList {
  public internalValue? : PraApprovalControllerApplications[] | cdktf.IResolvable

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
  public get(index: number): PraApprovalControllerApplicationsOutputReference {
    return new PraApprovalControllerApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PraApprovalControllerWorkingHours {
  /**
  * The days of the week that you want to enable the privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#days PraApprovalController#days}
  */
  readonly days?: string[];
  /**
  * The end time that the user no longer has access to the privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#end_time PraApprovalController#end_time}
  */
  readonly endTime?: string;
  /**
  * The cron expression provided to configure the privileged approval end time working hours. The standard cron expression format is [Seconds][Minutes][Hours][Day of the Month][Month][Day of the Week][Year]The cron expression provided to configure the privileged approval end time working hours. The standard cron expression format is [Seconds][Minutes][Hours][Day of the Month][Month][Day of the Week][Year]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#end_time_cron PraApprovalController#end_time_cron}
  */
  readonly endTimeCron?: string;
  /**
  * The start time that the user has access to the privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#start_time PraApprovalController#start_time}
  */
  readonly startTime?: string;
  /**
  * The cron expression provided to configure the privileged approval start time working hours. The standard cron expression format is [Seconds][Minutes][Hours][Day of the Month][Month][Day of the Week][Year]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#start_time_cron PraApprovalController#start_time_cron}
  */
  readonly startTimeCron?: string;
  /**
  * The time zone for the time window of a privileged approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#timezone PraApprovalController#timezone}
  */
  readonly timezone?: string;
}

export function praApprovalControllerWorkingHoursToTerraform(struct?: PraApprovalControllerWorkingHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.days),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    end_time_cron: cdktf.stringToTerraform(struct!.endTimeCron),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    start_time_cron: cdktf.stringToTerraform(struct!.startTimeCron),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function praApprovalControllerWorkingHoursToHclTerraform(struct?: PraApprovalControllerWorkingHours | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.days),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time_cron: {
      value: cdktf.stringToHclTerraform(struct!.endTimeCron),
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
    start_time_cron: {
      value: cdktf.stringToHclTerraform(struct!.startTimeCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PraApprovalControllerWorkingHoursOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PraApprovalControllerWorkingHours | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._endTimeCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeCron = this._endTimeCron;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._startTimeCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeCron = this._startTimeCron;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PraApprovalControllerWorkingHours | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._endTime = undefined;
      this._endTimeCron = undefined;
      this._startTime = undefined;
      this._startTimeCron = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._endTime = value.endTime;
      this._endTimeCron = value.endTimeCron;
      this._startTime = value.startTime;
      this._startTimeCron = value.startTimeCron;
      this._timezone = value.timezone;
    }
  }

  // days - computed: true, optional: true, required: false
  private _days?: string[]; 
  public get days() {
    return cdktf.Fn.tolist(this.getListAttribute('days'));
  }
  public set days(value: string[]) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // end_time_cron - computed: true, optional: true, required: false
  private _endTimeCron?: string; 
  public get endTimeCron() {
    return this.getStringAttribute('end_time_cron');
  }
  public set endTimeCron(value: string) {
    this._endTimeCron = value;
  }
  public resetEndTimeCron() {
    this._endTimeCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeCronInput() {
    return this._endTimeCron;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // start_time_cron - computed: true, optional: true, required: false
  private _startTimeCron?: string; 
  public get startTimeCron() {
    return this.getStringAttribute('start_time_cron');
  }
  public set startTimeCron(value: string) {
    this._startTimeCron = value;
  }
  public resetStartTimeCron() {
    this._startTimeCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeCronInput() {
    return this._startTimeCron;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class PraApprovalControllerWorkingHoursList extends cdktf.ComplexList {
  public internalValue? : PraApprovalControllerWorkingHours[] | cdktf.IResolvable

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
  public get(index: number): PraApprovalControllerWorkingHoursOutputReference {
    return new PraApprovalControllerWorkingHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller zpa_pra_approval_controller}
*/
export class PraApprovalController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_pra_approval_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PraApprovalController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PraApprovalController to import
  * @param importFromId The id of the existing PraApprovalController that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PraApprovalController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_pra_approval_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/pra_approval_controller zpa_pra_approval_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PraApprovalControllerConfig
  */
  public constructor(scope: Construct, id: string, config: PraApprovalControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_pra_approval_controller',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailIds = config.emailIds;
    this._endTime = config.endTime;
    this._microtenantId = config.microtenantId;
    this._startTime = config.startTime;
    this._status = config.status;
    this._applications.internalValue = config.applications;
    this._workingHours.internalValue = config.workingHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_ids - computed: true, optional: true, required: false
  private _emailIds?: string[]; 
  public get emailIds() {
    return cdktf.Fn.tolist(this.getListAttribute('email_ids'));
  }
  public set emailIds(value: string[]) {
    this._emailIds = value;
  }
  public resetEmailIds() {
    this._emailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdsInput() {
    return this._emailIds;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // applications - computed: false, optional: false, required: true
  private _applications = new PraApprovalControllerApplicationsList(this, "applications", true);
  public get applications() {
    return this._applications;
  }
  public putApplications(value: PraApprovalControllerApplications[] | cdktf.IResolvable) {
    this._applications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // working_hours - computed: false, optional: true, required: false
  private _workingHours = new PraApprovalControllerWorkingHoursList(this, "working_hours", true);
  public get workingHours() {
    return this._workingHours;
  }
  public putWorkingHours(value: PraApprovalControllerWorkingHours[] | cdktf.IResolvable) {
    this._workingHours.internalValue = value;
  }
  public resetWorkingHours() {
    this._workingHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingHoursInput() {
    return this._workingHours.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailIds),
      end_time: cdktf.stringToTerraform(this._endTime),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      applications: cdktf.listMapper(praApprovalControllerApplicationsToTerraform, true)(this._applications.internalValue),
      working_hours: cdktf.listMapper(praApprovalControllerWorkingHoursToTerraform, true)(this._workingHours.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applications: {
        value: cdktf.listMapperHcl(praApprovalControllerApplicationsToHclTerraform, true)(this._applications.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PraApprovalControllerApplicationsList",
      },
      working_hours: {
        value: cdktf.listMapperHcl(praApprovalControllerWorkingHoursToHclTerraform, true)(this._workingHours.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PraApprovalControllerWorkingHoursList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
