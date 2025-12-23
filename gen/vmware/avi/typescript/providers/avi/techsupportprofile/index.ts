// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TechsupportprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#file_size_threshold Techsupportprofile#file_size_threshold}
  */
  readonly fileSizeThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#id Techsupportprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#max_disk_size_percent Techsupportprofile#max_disk_size_percent}
  */
  readonly maxDiskSizePercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#min_free_disk_required Techsupportprofile#min_free_disk_required}
  */
  readonly minFreeDiskRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#no_of_techsupport_retentions Techsupportprofile#no_of_techsupport_retentions}
  */
  readonly noOfTechsupportRetentions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#simultaneous_invocations Techsupportprofile#simultaneous_invocations}
  */
  readonly simultaneousInvocations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#task_timeout Techsupportprofile#task_timeout}
  */
  readonly taskTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#uuid Techsupportprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * archive_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#archive_rules Techsupportprofile#archive_rules}
  */
  readonly archiveRules?: TechsupportprofileArchiveRules[] | cdktf.IResolvable;
  /**
  * event_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#event_params Techsupportprofile#event_params}
  */
  readonly eventParams?: TechsupportprofileEventParams[] | cdktf.IResolvable;
}
export interface TechsupportprofileArchiveRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#file_path Techsupportprofile#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#threshold Techsupportprofile#threshold}
  */
  readonly threshold?: string;
}

export function techsupportprofileArchiveRulesRulesToTerraform(struct?: TechsupportprofileArchiveRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_path: cdktf.stringToTerraform(struct!.filePath),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function techsupportprofileArchiveRulesRulesToHclTerraform(struct?: TechsupportprofileArchiveRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportprofileArchiveRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportprofileArchiveRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportprofileArchiveRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filePath = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filePath = value.filePath;
      this._threshold = value.threshold;
    }
  }

  // file_path - computed: true, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class TechsupportprofileArchiveRulesRulesList extends cdktf.ComplexList {
  public internalValue? : TechsupportprofileArchiveRulesRules[] | cdktf.IResolvable

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
  public get(index: number): TechsupportprofileArchiveRulesRulesOutputReference {
    return new TechsupportprofileArchiveRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportprofileArchiveRules {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#rules Techsupportprofile#rules}
  */
  readonly rules?: TechsupportprofileArchiveRulesRules[] | cdktf.IResolvable;
}

export function techsupportprofileArchiveRulesToTerraform(struct?: TechsupportprofileArchiveRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(techsupportprofileArchiveRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function techsupportprofileArchiveRulesToHclTerraform(struct?: TechsupportprofileArchiveRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(techsupportprofileArchiveRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "TechsupportprofileArchiveRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechsupportprofileArchiveRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportprofileArchiveRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechsupportprofileArchiveRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TechsupportprofileArchiveRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TechsupportprofileArchiveRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class TechsupportprofileArchiveRulesList extends cdktf.ComplexList {
  public internalValue? : TechsupportprofileArchiveRules[] | cdktf.IResolvable

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
  public get(index: number): TechsupportprofileArchiveRulesOutputReference {
    return new TechsupportprofileArchiveRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TechsupportprofileEventParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#collect_all_events Techsupportprofile#collect_all_events}
  */
  readonly collectAllEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#days Techsupportprofile#days}
  */
  readonly days?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#files Techsupportprofile#files}
  */
  readonly files?: string;
}

export function techsupportprofileEventParamsToTerraform(struct?: TechsupportprofileEventParams | cdktf.IResolvable): any {
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


export function techsupportprofileEventParamsToHclTerraform(struct?: TechsupportprofileEventParams | cdktf.IResolvable): any {
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

export class TechsupportprofileEventParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechsupportprofileEventParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TechsupportprofileEventParams | cdktf.IResolvable | undefined) {
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

export class TechsupportprofileEventParamsList extends cdktf.ComplexList {
  public internalValue? : TechsupportprofileEventParams[] | cdktf.IResolvable

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
  public get(index: number): TechsupportprofileEventParamsOutputReference {
    return new TechsupportprofileEventParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile avi_techsupportprofile}
*/
export class Techsupportprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_techsupportprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Techsupportprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Techsupportprofile to import
  * @param importFromId The id of the existing Techsupportprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Techsupportprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_techsupportprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/techsupportprofile avi_techsupportprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TechsupportprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TechsupportprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_techsupportprofile',
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
    this._fileSizeThreshold = config.fileSizeThreshold;
    this._id = config.id;
    this._maxDiskSizePercent = config.maxDiskSizePercent;
    this._minFreeDiskRequired = config.minFreeDiskRequired;
    this._noOfTechsupportRetentions = config.noOfTechsupportRetentions;
    this._simultaneousInvocations = config.simultaneousInvocations;
    this._taskTimeout = config.taskTimeout;
    this._uuid = config.uuid;
    this._archiveRules.internalValue = config.archiveRules;
    this._eventParams.internalValue = config.eventParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_size_threshold - computed: false, optional: true, required: false
  private _fileSizeThreshold?: string; 
  public get fileSizeThreshold() {
    return this.getStringAttribute('file_size_threshold');
  }
  public set fileSizeThreshold(value: string) {
    this._fileSizeThreshold = value;
  }
  public resetFileSizeThreshold() {
    this._fileSizeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeThresholdInput() {
    return this._fileSizeThreshold;
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

  // max_disk_size_percent - computed: false, optional: true, required: false
  private _maxDiskSizePercent?: string; 
  public get maxDiskSizePercent() {
    return this.getStringAttribute('max_disk_size_percent');
  }
  public set maxDiskSizePercent(value: string) {
    this._maxDiskSizePercent = value;
  }
  public resetMaxDiskSizePercent() {
    this._maxDiskSizePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSizePercentInput() {
    return this._maxDiskSizePercent;
  }

  // min_free_disk_required - computed: false, optional: true, required: false
  private _minFreeDiskRequired?: string; 
  public get minFreeDiskRequired() {
    return this.getStringAttribute('min_free_disk_required');
  }
  public set minFreeDiskRequired(value: string) {
    this._minFreeDiskRequired = value;
  }
  public resetMinFreeDiskRequired() {
    this._minFreeDiskRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFreeDiskRequiredInput() {
    return this._minFreeDiskRequired;
  }

  // no_of_techsupport_retentions - computed: false, optional: true, required: false
  private _noOfTechsupportRetentions?: string; 
  public get noOfTechsupportRetentions() {
    return this.getStringAttribute('no_of_techsupport_retentions');
  }
  public set noOfTechsupportRetentions(value: string) {
    this._noOfTechsupportRetentions = value;
  }
  public resetNoOfTechsupportRetentions() {
    this._noOfTechsupportRetentions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfTechsupportRetentionsInput() {
    return this._noOfTechsupportRetentions;
  }

  // simultaneous_invocations - computed: false, optional: true, required: false
  private _simultaneousInvocations?: string; 
  public get simultaneousInvocations() {
    return this.getStringAttribute('simultaneous_invocations');
  }
  public set simultaneousInvocations(value: string) {
    this._simultaneousInvocations = value;
  }
  public resetSimultaneousInvocations() {
    this._simultaneousInvocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simultaneousInvocationsInput() {
    return this._simultaneousInvocations;
  }

  // task_timeout - computed: false, optional: true, required: false
  private _taskTimeout?: string; 
  public get taskTimeout() {
    return this.getStringAttribute('task_timeout');
  }
  public set taskTimeout(value: string) {
    this._taskTimeout = value;
  }
  public resetTaskTimeout() {
    this._taskTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeoutInput() {
    return this._taskTimeout;
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

  // archive_rules - computed: false, optional: true, required: false
  private _archiveRules = new TechsupportprofileArchiveRulesList(this, "archive_rules", true);
  public get archiveRules() {
    return this._archiveRules;
  }
  public putArchiveRules(value: TechsupportprofileArchiveRules[] | cdktf.IResolvable) {
    this._archiveRules.internalValue = value;
  }
  public resetArchiveRules() {
    this._archiveRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRulesInput() {
    return this._archiveRules.internalValue;
  }

  // event_params - computed: false, optional: true, required: false
  private _eventParams = new TechsupportprofileEventParamsList(this, "event_params", true);
  public get eventParams() {
    return this._eventParams;
  }
  public putEventParams(value: TechsupportprofileEventParams[] | cdktf.IResolvable) {
    this._eventParams.internalValue = value;
  }
  public resetEventParams() {
    this._eventParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventParamsInput() {
    return this._eventParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_size_threshold: cdktf.stringToTerraform(this._fileSizeThreshold),
      id: cdktf.stringToTerraform(this._id),
      max_disk_size_percent: cdktf.stringToTerraform(this._maxDiskSizePercent),
      min_free_disk_required: cdktf.stringToTerraform(this._minFreeDiskRequired),
      no_of_techsupport_retentions: cdktf.stringToTerraform(this._noOfTechsupportRetentions),
      simultaneous_invocations: cdktf.stringToTerraform(this._simultaneousInvocations),
      task_timeout: cdktf.stringToTerraform(this._taskTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      archive_rules: cdktf.listMapper(techsupportprofileArchiveRulesToTerraform, true)(this._archiveRules.internalValue),
      event_params: cdktf.listMapper(techsupportprofileEventParamsToTerraform, true)(this._eventParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_size_threshold: {
        value: cdktf.stringToHclTerraform(this._fileSizeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_disk_size_percent: {
        value: cdktf.stringToHclTerraform(this._maxDiskSizePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_free_disk_required: {
        value: cdktf.stringToHclTerraform(this._minFreeDiskRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_of_techsupport_retentions: {
        value: cdktf.stringToHclTerraform(this._noOfTechsupportRetentions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simultaneous_invocations: {
        value: cdktf.stringToHclTerraform(this._simultaneousInvocations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_timeout: {
        value: cdktf.stringToHclTerraform(this._taskTimeout),
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
      archive_rules: {
        value: cdktf.listMapperHcl(techsupportprofileArchiveRulesToHclTerraform, true)(this._archiveRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TechsupportprofileArchiveRulesList",
      },
      event_params: {
        value: cdktf.listMapperHcl(techsupportprofileEventParamsToHclTerraform, true)(this._eventParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TechsupportprofileEventParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
