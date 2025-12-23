// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TechsupportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#case_number Techsupport#case_number}
  */
  readonly caseNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#description Techsupport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#duration Techsupport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#end_time Techsupport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#errors Techsupport#errors}
  */
  readonly errors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#id Techsupport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#level Techsupport#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#name Techsupport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#node Techsupport#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#obj_name Techsupport#obj_name}
  */
  readonly objName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#obj_uuid Techsupport#obj_uuid}
  */
  readonly objUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#output Techsupport#output}
  */
  readonly output?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#progress Techsupport#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#size Techsupport#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#start_time Techsupport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#tasks_completed Techsupport#tasks_completed}
  */
  readonly tasksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#tenant_ref Techsupport#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#total_tasks Techsupport#total_tasks}
  */
  readonly totalTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#uuid Techsupport#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#warnings Techsupport#warnings}
  */
  readonly warnings?: string[];
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#params Techsupport#params}
  */
  readonly params?: TechsupportParams[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#state Techsupport#state}
  */
  readonly state?: TechsupportState[] | cdktf.IResolvable;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#tasks Techsupport#tasks}
  */
  readonly tasks?: TechsupportTasks[] | cdktf.IResolvable;
  /**
  * techsupport_readiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#techsupport_readiness Techsupport#techsupport_readiness}
  */
  readonly techsupportReadiness?: TechsupportTechsupportReadiness[] | cdktf.IResolvable;
}
export interface TechsupportParamsEventParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#collect_all_events Techsupport#collect_all_events}
  */
  readonly collectAllEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#days Techsupport#days}
  */
  readonly days?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#files Techsupport#files}
  */
  readonly files?: string;
}

export function techsupportParamsEventParamsToTerraform(struct?: TechsupportParamsEventParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collect_all_events: cdktf.stringToTerraform(struct!.collectAllEvents),
    days: cdktf.stringToTerraform(struct!.days),
    files: cdktf.stringToTerraform(struct!.files),
  }
}


export function techsupportParamsEventParamsToHclTerraform(struct?: TechsupportParamsEventParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collect_all_events: {
      value: cdktf.stringToHclTerraform(struct!.collectAllEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days: {
      value: cdktf.stringToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files: {
      value: cdktf.stringToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportParamsEventParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportParamsEventParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectAllEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectAllEvents = this._collectAllEvents;
    }
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportParamsEventParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectAllEvents = undefined;
      this._days = undefined;
      this._files = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectAllEvents = value.collectAllEvents;
      this._days = value.days;
      this._files = value.files;
    }
  }

  // collect_all_events - computed: false, optional: true, required: false
  private _collectAllEvents?: string; 
  public get collectAllEvents() {
    return this.getStringAttribute('collect_all_events');
  }
  public set collectAllEvents(value: string) {
    this._collectAllEvents = value;
  }
  public resetCollectAllEvents() {
    this._collectAllEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectAllEventsInput() {
    return this._collectAllEvents;
  }

  // days - computed: false, optional: true, required: false
  private _days?: string; 
  public get days() {
    return this.getStringAttribute('days');
  }
  public set days(value: string) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string; 
  public get files() {
    return this.getStringAttribute('files');
  }
  public set files(value: string) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }
}

export class TechsupportParamsEventParamsList extends cdktf.ComplexList {
  public internalValue? : TechsupportParamsEventParams[] | cdktf.IResolvable

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
  public get(index: number): TechsupportParamsEventParamsOutputReference {
    return new TechsupportParamsEventParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#case_number Techsupport#case_number}
  */
  readonly caseNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#description Techsupport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#duration Techsupport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#level Techsupport#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#name Techsupport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#pattern Techsupport#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#skip_warnings Techsupport#skip_warnings}
  */
  readonly skipWarnings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#slug Techsupport#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#start_timestamp Techsupport#start_timestamp}
  */
  readonly startTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#tenant Techsupport#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#uuid Techsupport#uuid}
  */
  readonly uuid?: string;
  /**
  * event_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#event_params Techsupport#event_params}
  */
  readonly eventParams?: TechsupportParamsEventParams[] | cdktf.IResolvable;
}

export function techsupportParamsToTerraform(struct?: TechsupportParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_number: cdktf.stringToTerraform(struct!.caseNumber),
    description: cdktf.stringToTerraform(struct!.description),
    duration: cdktf.stringToTerraform(struct!.duration),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    skip_warnings: cdktf.stringToTerraform(struct!.skipWarnings),
    slug: cdktf.stringToTerraform(struct!.slug),
    start_timestamp: cdktf.stringToTerraform(struct!.startTimestamp),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    event_params: cdktf.listMapper(techsupportParamsEventParamsToTerraform, true)(struct!.eventParams),
  }
}


export function techsupportParamsToHclTerraform(struct?: TechsupportParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_number: {
      value: cdktf.stringToHclTerraform(struct!.caseNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_warnings: {
      value: cdktf.stringToHclTerraform(struct!.skipWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.startTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_params: {
      value: cdktf.listMapperHcl(techsupportParamsEventParamsToHclTerraform, true)(struct!.eventParams),
      isBlock: true,
      type: "set",
      storageClassType: "TechsupportParamsEventParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseNumber = this._caseNumber;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._skipWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWarnings = this._skipWarnings;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    if (this._startTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimestamp = this._startTimestamp;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._eventParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventParams = this._eventParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseNumber = undefined;
      this._description = undefined;
      this._duration = undefined;
      this._level = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._skipWarnings = undefined;
      this._slug = undefined;
      this._startTimestamp = undefined;
      this._tenant = undefined;
      this._uuid = undefined;
      this._eventParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseNumber = value.caseNumber;
      this._description = value.description;
      this._duration = value.duration;
      this._level = value.level;
      this._name = value.name;
      this._pattern = value.pattern;
      this._skipWarnings = value.skipWarnings;
      this._slug = value.slug;
      this._startTimestamp = value.startTimestamp;
      this._tenant = value.tenant;
      this._uuid = value.uuid;
      this._eventParams.internalValue = value.eventParams;
    }
  }

  // case_number - computed: true, optional: true, required: false
  private _caseNumber?: string; 
  public get caseNumber() {
    return this.getStringAttribute('case_number');
  }
  public set caseNumber(value: string) {
    this._caseNumber = value;
  }
  public resetCaseNumber() {
    this._caseNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseNumberInput() {
    return this._caseNumber;
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

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // skip_warnings - computed: true, optional: true, required: false
  private _skipWarnings?: string; 
  public get skipWarnings() {
    return this.getStringAttribute('skip_warnings');
  }
  public set skipWarnings(value: string) {
    this._skipWarnings = value;
  }
  public resetSkipWarnings() {
    this._skipWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWarningsInput() {
    return this._skipWarnings;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // start_timestamp - computed: true, optional: true, required: false
  private _startTimestamp?: string; 
  public get startTimestamp() {
    return this.getStringAttribute('start_timestamp');
  }
  public set startTimestamp(value: string) {
    this._startTimestamp = value;
  }
  public resetStartTimestamp() {
    this._startTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimestampInput() {
    return this._startTimestamp;
  }

  // tenant - computed: true, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // event_params - computed: false, optional: true, required: false
  private _eventParams = new TechsupportParamsEventParamsList(this, "event_params", true);
  public get eventParams() {
    return this._eventParams;
  }
  public putEventParams(value: TechsupportParamsEventParams[] | cdktf.IResolvable) {
    this._eventParams.internalValue = value;
  }
  public resetEventParams() {
    this._eventParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventParamsInput() {
    return this._eventParams.internalValue;
  }
}

export class TechsupportParamsList extends cdktf.ComplexList {
  public internalValue? : TechsupportParams[] | cdktf.IResolvable

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
  public get(index: number): TechsupportParamsOutputReference {
    return new TechsupportParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#secs Techsupport#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#usecs Techsupport#usecs}
  */
  readonly usecs: string;
}

export function techsupportStateLastChangedTimeToTerraform(struct?: TechsupportStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function techsupportStateLastChangedTimeToHclTerraform(struct?: TechsupportStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportStateLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportStateLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class TechsupportStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : TechsupportStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): TechsupportStateLastChangedTimeOutputReference {
    return new TechsupportStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#reason Techsupport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#state Techsupport#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#last_changed_time Techsupport#last_changed_time}
  */
  readonly lastChangedTime?: TechsupportStateLastChangedTime[] | cdktf.IResolvable;
}

export function techsupportStateToTerraform(struct?: TechsupportState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(techsupportStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function techsupportStateToHclTerraform(struct?: TechsupportState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(techsupportStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "TechsupportStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new TechsupportStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: TechsupportStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class TechsupportStateList extends cdktf.ComplexList {
  public internalValue? : TechsupportState[] | cdktf.IResolvable

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
  public get(index: number): TechsupportStateOutputReference {
    return new TechsupportStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTasksSubEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#addr Techsupport#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#type Techsupport#type}
  */
  readonly type: string;
}

export function techsupportTasksSubEventsIpToTerraform(struct?: TechsupportTasksSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function techsupportTasksSubEventsIpToHclTerraform(struct?: TechsupportTasksSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
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

export class TechsupportTasksSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTasksSubEventsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTasksSubEventsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class TechsupportTasksSubEventsIpList extends cdktf.ComplexList {
  public internalValue? : TechsupportTasksSubEventsIp[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTasksSubEventsIpOutputReference {
    return new TechsupportTasksSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTasksSubEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#duration Techsupport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#end_time Techsupport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#message Techsupport#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#start_time Techsupport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#status Techsupport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#sub_tasks Techsupport#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#ip Techsupport#ip}
  */
  readonly ip?: TechsupportTasksSubEventsIp[] | cdktf.IResolvable;
}

export function techsupportTasksSubEventsToTerraform(struct?: TechsupportTasksSubEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    message: cdktf.stringToTerraform(struct!.message),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    ip: cdktf.listMapper(techsupportTasksSubEventsIpToTerraform, true)(struct!.ip),
  }
}


export function techsupportTasksSubEventsToHclTerraform(struct?: TechsupportTasksSubEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subTasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(techsupportTasksSubEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "TechsupportTasksSubEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportTasksSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTasksSubEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTasksSubEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._message = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._subTasks = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._message = value.message;
      this._startTime = value.startTime;
      this._status = value.status;
      this._subTasks = value.subTasks;
      this._ip.internalValue = value.ip;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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

  // status - computed: false, optional: true, required: false
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

  // sub_tasks - computed: false, optional: true, required: false
  private _subTasks?: string[]; 
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
  public set subTasks(value: string[]) {
    this._subTasks = value;
  }
  public resetSubTasks() {
    this._subTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTasksInput() {
    return this._subTasks;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new TechsupportTasksSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: TechsupportTasksSubEventsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class TechsupportTasksSubEventsList extends cdktf.ComplexList {
  public internalValue? : TechsupportTasksSubEvents[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTasksSubEventsOutputReference {
    return new TechsupportTasksSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#description Techsupport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#details Techsupport#details}
  */
  readonly details?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#duration Techsupport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#end_time Techsupport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#start_time Techsupport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#status Techsupport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#task_name Techsupport#task_name}
  */
  readonly taskName?: string;
  /**
  * sub_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#sub_events Techsupport#sub_events}
  */
  readonly subEvents?: TechsupportTasksSubEvents[] | cdktf.IResolvable;
}

export function techsupportTasksToTerraform(struct?: TechsupportTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.details),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    task_name: cdktf.stringToTerraform(struct!.taskName),
    sub_events: cdktf.listMapper(techsupportTasksSubEventsToTerraform, true)(struct!.subEvents),
  }
}


export function techsupportTasksToHclTerraform(struct?: TechsupportTasks | cdktf.IResolvable): any {
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
    details: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.details),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_events: {
      value: cdktf.listMapperHcl(techsupportTasksSubEventsToHclTerraform, true)(struct!.subEvents),
      isBlock: true,
      type: "list",
      storageClassType: "TechsupportTasksSubEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    if (this._subEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subEvents = this._subEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._details = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._taskName = undefined;
      this._subEvents.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._details = value.details;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._status = value.status;
      this._taskName = value.taskName;
      this._subEvents.internalValue = value.subEvents;
    }
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

  // details - computed: false, optional: true, required: false
  private _details?: string[]; 
  public get details() {
    return this.getListAttribute('details');
  }
  public set details(value: string[]) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // task_name - computed: true, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // sub_events - computed: false, optional: true, required: false
  private _subEvents = new TechsupportTasksSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
  public putSubEvents(value: TechsupportTasksSubEvents[] | cdktf.IResolvable) {
    this._subEvents.internalValue = value;
  }
  public resetSubEvents() {
    this._subEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subEventsInput() {
    return this._subEvents.internalValue;
  }
}

export class TechsupportTasksList extends cdktf.ComplexList {
  public internalValue? : TechsupportTasks[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTasksOutputReference {
    return new TechsupportTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTechsupportReadinessChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#check_code Techsupport#check_code}
  */
  readonly checkCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#description Techsupport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#details Techsupport#details}
  */
  readonly details?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#duration Techsupport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#end_time Techsupport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#error_details Techsupport#error_details}
  */
  readonly errorDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#start_time Techsupport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#state Techsupport#state}
  */
  readonly state?: string;
}

export function techsupportTechsupportReadinessChecksToTerraform(struct?: TechsupportTechsupportReadinessChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_code: cdktf.stringToTerraform(struct!.checkCode),
    description: cdktf.stringToTerraform(struct!.description),
    details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.details),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    error_details: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.errorDetails),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function techsupportTechsupportReadinessChecksToHclTerraform(struct?: TechsupportTechsupportReadinessChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_code: {
      value: cdktf.stringToHclTerraform(struct!.checkCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.details),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_details: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.errorDetails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportTechsupportReadinessChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTechsupportReadinessChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkCode = this._checkCode;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._errorDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorDetails = this._errorDetails;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTechsupportReadinessChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkCode = undefined;
      this._description = undefined;
      this._details = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._errorDetails = undefined;
      this._startTime = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkCode = value.checkCode;
      this._description = value.description;
      this._details = value.details;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._errorDetails = value.errorDetails;
      this._startTime = value.startTime;
      this._state = value.state;
    }
  }

  // check_code - computed: true, optional: true, required: false
  private _checkCode?: string; 
  public get checkCode() {
    return this.getStringAttribute('check_code');
  }
  public set checkCode(value: string) {
    this._checkCode = value;
  }
  public resetCheckCode() {
    this._checkCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCodeInput() {
    return this._checkCode;
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

  // details - computed: false, optional: true, required: false
  private _details?: string[]; 
  public get details() {
    return this.getListAttribute('details');
  }
  public set details(value: string[]) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // error_details - computed: false, optional: true, required: false
  private _errorDetails?: string[]; 
  public get errorDetails() {
    return this.getListAttribute('error_details');
  }
  public set errorDetails(value: string[]) {
    this._errorDetails = value;
  }
  public resetErrorDetails() {
    this._errorDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDetailsInput() {
    return this._errorDetails;
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

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class TechsupportTechsupportReadinessChecksList extends cdktf.ComplexList {
  public internalValue? : TechsupportTechsupportReadinessChecks[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTechsupportReadinessChecksOutputReference {
    return new TechsupportTechsupportReadinessChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTechsupportReadinessStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#secs Techsupport#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#usecs Techsupport#usecs}
  */
  readonly usecs: string;
}

export function techsupportTechsupportReadinessStateLastChangedTimeToTerraform(struct?: TechsupportTechsupportReadinessStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function techsupportTechsupportReadinessStateLastChangedTimeToHclTerraform(struct?: TechsupportTechsupportReadinessStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportTechsupportReadinessStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTechsupportReadinessStateLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTechsupportReadinessStateLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class TechsupportTechsupportReadinessStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : TechsupportTechsupportReadinessStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTechsupportReadinessStateLastChangedTimeOutputReference {
    return new TechsupportTechsupportReadinessStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTechsupportReadinessState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#reason Techsupport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#state Techsupport#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#last_changed_time Techsupport#last_changed_time}
  */
  readonly lastChangedTime?: TechsupportTechsupportReadinessStateLastChangedTime[] | cdktf.IResolvable;
}

export function techsupportTechsupportReadinessStateToTerraform(struct?: TechsupportTechsupportReadinessState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(techsupportTechsupportReadinessStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function techsupportTechsupportReadinessStateToHclTerraform(struct?: TechsupportTechsupportReadinessState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(techsupportTechsupportReadinessStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "TechsupportTechsupportReadinessStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportTechsupportReadinessStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTechsupportReadinessState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTechsupportReadinessState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new TechsupportTechsupportReadinessStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: TechsupportTechsupportReadinessStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class TechsupportTechsupportReadinessStateList extends cdktf.ComplexList {
  public internalValue? : TechsupportTechsupportReadinessState[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTechsupportReadinessStateOutputReference {
    return new TechsupportTechsupportReadinessStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportTechsupportReadiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#checks_completed Techsupport#checks_completed}
  */
  readonly checksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#duration Techsupport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#end_time Techsupport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#progress Techsupport#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#start_time Techsupport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#total_checks Techsupport#total_checks}
  */
  readonly totalChecks?: string;
  /**
  * checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#checks Techsupport#checks}
  */
  readonly checks?: TechsupportTechsupportReadinessChecks[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#state Techsupport#state}
  */
  readonly state?: TechsupportTechsupportReadinessState[] | cdktf.IResolvable;
}

export function techsupportTechsupportReadinessToTerraform(struct?: TechsupportTechsupportReadiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks_completed: cdktf.stringToTerraform(struct!.checksCompleted),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    progress: cdktf.stringToTerraform(struct!.progress),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    total_checks: cdktf.stringToTerraform(struct!.totalChecks),
    checks: cdktf.listMapper(techsupportTechsupportReadinessChecksToTerraform, true)(struct!.checks),
    state: cdktf.listMapper(techsupportTechsupportReadinessStateToTerraform, true)(struct!.state),
  }
}


export function techsupportTechsupportReadinessToHclTerraform(struct?: TechsupportTechsupportReadiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checks_completed: {
      value: cdktf.stringToHclTerraform(struct!.checksCompleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    progress: {
      value: cdktf.stringToHclTerraform(struct!.progress),
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
    total_checks: {
      value: cdktf.stringToHclTerraform(struct!.totalChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checks: {
      value: cdktf.listMapperHcl(techsupportTechsupportReadinessChecksToHclTerraform, true)(struct!.checks),
      isBlock: true,
      type: "list",
      storageClassType: "TechsupportTechsupportReadinessChecksList",
    },
    state: {
      value: cdktf.listMapperHcl(techsupportTechsupportReadinessStateToHclTerraform, true)(struct!.state),
      isBlock: true,
      type: "set",
      storageClassType: "TechsupportTechsupportReadinessStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportTechsupportReadinessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportTechsupportReadiness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksCompleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksCompleted = this._checksCompleted;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._progress !== undefined) {
      hasAnyValues = true;
      internalValueResult.progress = this._progress;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._totalChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalChecks = this._totalChecks;
    }
    if (this._checks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checks = this._checks?.internalValue;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportTechsupportReadiness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksCompleted = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._progress = undefined;
      this._startTime = undefined;
      this._totalChecks = undefined;
      this._checks.internalValue = undefined;
      this._state.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checksCompleted = value.checksCompleted;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._progress = value.progress;
      this._startTime = value.startTime;
      this._totalChecks = value.totalChecks;
      this._checks.internalValue = value.checks;
      this._state.internalValue = value.state;
    }
  }

  // checks_completed - computed: true, optional: true, required: false
  private _checksCompleted?: string; 
  public get checksCompleted() {
    return this.getStringAttribute('checks_completed');
  }
  public set checksCompleted(value: string) {
    this._checksCompleted = value;
  }
  public resetChecksCompleted() {
    this._checksCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksCompletedInput() {
    return this._checksCompleted;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // progress - computed: false, optional: true, required: false
  private _progress?: string; 
  public get progress() {
    return this.getStringAttribute('progress');
  }
  public set progress(value: string) {
    this._progress = value;
  }
  public resetProgress() {
    this._progress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressInput() {
    return this._progress;
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

  // total_checks - computed: true, optional: true, required: false
  private _totalChecks?: string; 
  public get totalChecks() {
    return this.getStringAttribute('total_checks');
  }
  public set totalChecks(value: string) {
    this._totalChecks = value;
  }
  public resetTotalChecks() {
    this._totalChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalChecksInput() {
    return this._totalChecks;
  }

  // checks - computed: false, optional: true, required: false
  private _checks = new TechsupportTechsupportReadinessChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }
  public putChecks(value: TechsupportTechsupportReadinessChecks[] | cdktf.IResolvable) {
    this._checks.internalValue = value;
  }
  public resetChecks() {
    this._checks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksInput() {
    return this._checks.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state = new TechsupportTechsupportReadinessStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: TechsupportTechsupportReadinessState[] | cdktf.IResolvable) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }
}

export class TechsupportTechsupportReadinessList extends cdktf.ComplexList {
  public internalValue? : TechsupportTechsupportReadiness[] | cdktf.IResolvable

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
  public get(index: number): TechsupportTechsupportReadinessOutputReference {
    return new TechsupportTechsupportReadinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport avi_techsupport}
*/
export class Techsupport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_techsupport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Techsupport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Techsupport to import
  * @param importFromId The id of the existing Techsupport that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Techsupport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_techsupport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupport avi_techsupport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TechsupportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TechsupportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_techsupport',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caseNumber = config.caseNumber;
    this._description = config.description;
    this._duration = config.duration;
    this._endTime = config.endTime;
    this._errors = config.errors;
    this._id = config.id;
    this._level = config.level;
    this._name = config.name;
    this._node = config.nodeAttribute;
    this._objName = config.objName;
    this._objUuid = config.objUuid;
    this._output = config.output;
    this._progress = config.progress;
    this._size = config.size;
    this._startTime = config.startTime;
    this._tasksCompleted = config.tasksCompleted;
    this._tenantRef = config.tenantRef;
    this._totalTasks = config.totalTasks;
    this._uuid = config.uuid;
    this._warnings = config.warnings;
    this._params.internalValue = config.params;
    this._state.internalValue = config.state;
    this._tasks.internalValue = config.tasks;
    this._techsupportReadiness.internalValue = config.techsupportReadiness;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // case_number - computed: true, optional: true, required: false
  private _caseNumber?: string; 
  public get caseNumber() {
    return this.getStringAttribute('case_number');
  }
  public set caseNumber(value: string) {
    this._caseNumber = value;
  }
  public resetCaseNumber() {
    this._caseNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseNumberInput() {
    return this._caseNumber;
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

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // errors - computed: false, optional: true, required: false
  private _errors?: string[]; 
  public get errors() {
    return this.getListAttribute('errors');
  }
  public set errors(value: string[]) {
    this._errors = value;
  }
  public resetErrors() {
    this._errors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorsInput() {
    return this._errors;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // node - computed: true, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // obj_name - computed: true, optional: true, required: false
  private _objName?: string; 
  public get objName() {
    return this.getStringAttribute('obj_name');
  }
  public set objName(value: string) {
    this._objName = value;
  }
  public resetObjName() {
    this._objName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objNameInput() {
    return this._objName;
  }

  // obj_uuid - computed: true, optional: true, required: false
  private _objUuid?: string; 
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
  public set objUuid(value: string) {
    this._objUuid = value;
  }
  public resetObjUuid() {
    this._objUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUuidInput() {
    return this._objUuid;
  }

  // output - computed: true, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // progress - computed: false, optional: true, required: false
  private _progress?: string; 
  public get progress() {
    return this.getStringAttribute('progress');
  }
  public set progress(value: string) {
    this._progress = value;
  }
  public resetProgress() {
    this._progress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressInput() {
    return this._progress;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // tasks_completed - computed: true, optional: true, required: false
  private _tasksCompleted?: string; 
  public get tasksCompleted() {
    return this.getStringAttribute('tasks_completed');
  }
  public set tasksCompleted(value: string) {
    this._tasksCompleted = value;
  }
  public resetTasksCompleted() {
    this._tasksCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksCompletedInput() {
    return this._tasksCompleted;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // total_tasks - computed: true, optional: true, required: false
  private _totalTasks?: string; 
  public get totalTasks() {
    return this.getStringAttribute('total_tasks');
  }
  public set totalTasks(value: string) {
    this._totalTasks = value;
  }
  public resetTotalTasks() {
    this._totalTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTasksInput() {
    return this._totalTasks;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // warnings - computed: false, optional: true, required: false
  private _warnings?: string[]; 
  public get warnings() {
    return this.getListAttribute('warnings');
  }
  public set warnings(value: string[]) {
    this._warnings = value;
  }
  public resetWarnings() {
    this._warnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningsInput() {
    return this._warnings;
  }

  // params - computed: false, optional: true, required: false
  private _params = new TechsupportParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: TechsupportParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state = new TechsupportStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: TechsupportState[] | cdktf.IResolvable) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new TechsupportTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: TechsupportTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // techsupport_readiness - computed: false, optional: true, required: false
  private _techsupportReadiness = new TechsupportTechsupportReadinessList(this, "techsupport_readiness", true);
  public get techsupportReadiness() {
    return this._techsupportReadiness;
  }
  public putTechsupportReadiness(value: TechsupportTechsupportReadiness[] | cdktf.IResolvable) {
    this._techsupportReadiness.internalValue = value;
  }
  public resetTechsupportReadiness() {
    this._techsupportReadiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techsupportReadinessInput() {
    return this._techsupportReadiness.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      case_number: cdktf.stringToTerraform(this._caseNumber),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.stringToTerraform(this._duration),
      end_time: cdktf.stringToTerraform(this._endTime),
      errors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._errors),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.stringToTerraform(this._node),
      obj_name: cdktf.stringToTerraform(this._objName),
      obj_uuid: cdktf.stringToTerraform(this._objUuid),
      output: cdktf.stringToTerraform(this._output),
      progress: cdktf.stringToTerraform(this._progress),
      size: cdktf.stringToTerraform(this._size),
      start_time: cdktf.stringToTerraform(this._startTime),
      tasks_completed: cdktf.stringToTerraform(this._tasksCompleted),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      total_tasks: cdktf.stringToTerraform(this._totalTasks),
      uuid: cdktf.stringToTerraform(this._uuid),
      warnings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._warnings),
      params: cdktf.listMapper(techsupportParamsToTerraform, true)(this._params.internalValue),
      state: cdktf.listMapper(techsupportStateToTerraform, true)(this._state.internalValue),
      tasks: cdktf.listMapper(techsupportTasksToTerraform, true)(this._tasks.internalValue),
      techsupport_readiness: cdktf.listMapper(techsupportTechsupportReadinessToTerraform, true)(this._techsupportReadiness.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      case_number: {
        value: cdktf.stringToHclTerraform(this._caseNumber),
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
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      errors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._errors),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      node: {
        value: cdktf.stringToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_name: {
        value: cdktf.stringToHclTerraform(this._objName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_uuid: {
        value: cdktf.stringToHclTerraform(this._objUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output: {
        value: cdktf.stringToHclTerraform(this._output),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progress: {
        value: cdktf.stringToHclTerraform(this._progress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
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
      tasks_completed: {
        value: cdktf.stringToHclTerraform(this._tasksCompleted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_tasks: {
        value: cdktf.stringToHclTerraform(this._totalTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warnings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._warnings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      params: {
        value: cdktf.listMapperHcl(techsupportParamsToHclTerraform, true)(this._params.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TechsupportParamsList",
      },
      state: {
        value: cdktf.listMapperHcl(techsupportStateToHclTerraform, true)(this._state.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TechsupportStateList",
      },
      tasks: {
        value: cdktf.listMapperHcl(techsupportTasksToHclTerraform, true)(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TechsupportTasksList",
      },
      techsupport_readiness: {
        value: cdktf.listMapperHcl(techsupportTechsupportReadinessToHclTerraform, true)(this._techsupportReadiness.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TechsupportTechsupportReadinessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
