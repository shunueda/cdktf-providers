// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckBusinessHoursConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#display_name CheckBusinessHours#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#end_time CheckBusinessHours#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#friday CheckBusinessHours#friday}
  */
  readonly friday?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#id CheckBusinessHours#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#monday CheckBusinessHours#monday}
  */
  readonly monday?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#project_id CheckBusinessHours#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#saturday CheckBusinessHours#saturday}
  */
  readonly saturday?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#start_time CheckBusinessHours#start_time}
  */
  readonly startTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#sunday CheckBusinessHours#sunday}
  */
  readonly sunday?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#target_resource_id CheckBusinessHours#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#target_resource_type CheckBusinessHours#target_resource_type}
  */
  readonly targetResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#thursday CheckBusinessHours#thursday}
  */
  readonly thursday?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#time_zone CheckBusinessHours#time_zone}
  */
  readonly timeZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#timeout CheckBusinessHours#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#tuesday CheckBusinessHours#tuesday}
  */
  readonly tuesday?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#wednesday CheckBusinessHours#wednesday}
  */
  readonly wednesday?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#timeouts CheckBusinessHours#timeouts}
  */
  readonly timeouts?: CheckBusinessHoursTimeouts;
}
export interface CheckBusinessHoursTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#create CheckBusinessHours#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#delete CheckBusinessHours#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#read CheckBusinessHours#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#update CheckBusinessHours#update}
  */
  readonly update?: string;
}

export function checkBusinessHoursTimeoutsToTerraform(struct?: CheckBusinessHoursTimeouts | cdktf.IResolvable): any {
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


export function checkBusinessHoursTimeoutsToHclTerraform(struct?: CheckBusinessHoursTimeouts | cdktf.IResolvable): any {
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

export class CheckBusinessHoursTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckBusinessHoursTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CheckBusinessHoursTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours azuredevops_check_business_hours}
*/
export class CheckBusinessHours extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_check_business_hours";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckBusinessHours resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckBusinessHours to import
  * @param importFromId The id of the existing CheckBusinessHours that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckBusinessHours to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_check_business_hours", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/check_business_hours azuredevops_check_business_hours} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckBusinessHoursConfig
  */
  public constructor(scope: Construct, id: string, config: CheckBusinessHoursConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_check_business_hours',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._endTime = config.endTime;
    this._friday = config.friday;
    this._id = config.id;
    this._monday = config.monday;
    this._projectId = config.projectId;
    this._saturday = config.saturday;
    this._startTime = config.startTime;
    this._sunday = config.sunday;
    this._targetResourceId = config.targetResourceId;
    this._targetResourceType = config.targetResourceType;
    this._thursday = config.thursday;
    this._timeZone = config.timeZone;
    this._timeout = config.timeout;
    this._tuesday = config.tuesday;
    this._wednesday = config.wednesday;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // friday - computed: false, optional: true, required: false
  private _friday?: boolean | cdktf.IResolvable; 
  public get friday() {
    return this.getBooleanAttribute('friday');
  }
  public set friday(value: boolean | cdktf.IResolvable) {
    this._friday = value;
  }
  public resetFriday() {
    this._friday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fridayInput() {
    return this._friday;
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

  // monday - computed: false, optional: true, required: false
  private _monday?: boolean | cdktf.IResolvable; 
  public get monday() {
    return this.getBooleanAttribute('monday');
  }
  public set monday(value: boolean | cdktf.IResolvable) {
    this._monday = value;
  }
  public resetMonday() {
    this._monday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mondayInput() {
    return this._monday;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // saturday - computed: false, optional: true, required: false
  private _saturday?: boolean | cdktf.IResolvable; 
  public get saturday() {
    return this.getBooleanAttribute('saturday');
  }
  public set saturday(value: boolean | cdktf.IResolvable) {
    this._saturday = value;
  }
  public resetSaturday() {
    this._saturday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saturdayInput() {
    return this._saturday;
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

  // sunday - computed: false, optional: true, required: false
  private _sunday?: boolean | cdktf.IResolvable; 
  public get sunday() {
    return this.getBooleanAttribute('sunday');
  }
  public set sunday(value: boolean | cdktf.IResolvable) {
    this._sunday = value;
  }
  public resetSunday() {
    this._sunday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sundayInput() {
    return this._sunday;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: false, optional: false, required: true
  private _targetResourceType?: string; 
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType;
  }

  // thursday - computed: false, optional: true, required: false
  private _thursday?: boolean | cdktf.IResolvable; 
  public get thursday() {
    return this.getBooleanAttribute('thursday');
  }
  public set thursday(value: boolean | cdktf.IResolvable) {
    this._thursday = value;
  }
  public resetThursday() {
    this._thursday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thursdayInput() {
    return this._thursday;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tuesday - computed: false, optional: true, required: false
  private _tuesday?: boolean | cdktf.IResolvable; 
  public get tuesday() {
    return this.getBooleanAttribute('tuesday');
  }
  public set tuesday(value: boolean | cdktf.IResolvable) {
    this._tuesday = value;
  }
  public resetTuesday() {
    this._tuesday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuesdayInput() {
    return this._tuesday;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // wednesday - computed: false, optional: true, required: false
  private _wednesday?: boolean | cdktf.IResolvable; 
  public get wednesday() {
    return this.getBooleanAttribute('wednesday');
  }
  public set wednesday(value: boolean | cdktf.IResolvable) {
    this._wednesday = value;
  }
  public resetWednesday() {
    this._wednesday = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wednesdayInput() {
    return this._wednesday;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CheckBusinessHoursTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CheckBusinessHoursTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      end_time: cdktf.stringToTerraform(this._endTime),
      friday: cdktf.booleanToTerraform(this._friday),
      id: cdktf.stringToTerraform(this._id),
      monday: cdktf.booleanToTerraform(this._monday),
      project_id: cdktf.stringToTerraform(this._projectId),
      saturday: cdktf.booleanToTerraform(this._saturday),
      start_time: cdktf.stringToTerraform(this._startTime),
      sunday: cdktf.booleanToTerraform(this._sunday),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      target_resource_type: cdktf.stringToTerraform(this._targetResourceType),
      thursday: cdktf.booleanToTerraform(this._thursday),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      timeout: cdktf.numberToTerraform(this._timeout),
      tuesday: cdktf.booleanToTerraform(this._tuesday),
      wednesday: cdktf.booleanToTerraform(this._wednesday),
      timeouts: checkBusinessHoursTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friday: {
        value: cdktf.booleanToHclTerraform(this._friday),
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
      monday: {
        value: cdktf.booleanToHclTerraform(this._monday),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saturday: {
        value: cdktf.booleanToHclTerraform(this._saturday),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sunday: {
        value: cdktf.booleanToHclTerraform(this._sunday),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_type: {
        value: cdktf.stringToHclTerraform(this._targetResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thursday: {
        value: cdktf.booleanToHclTerraform(this._thursday),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tuesday: {
        value: cdktf.booleanToHclTerraform(this._tuesday),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wednesday: {
        value: cdktf.booleanToHclTerraform(this._wednesday),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: checkBusinessHoursTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckBusinessHoursTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
