// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemreportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#archive_ref Systemreport#archive_ref}
  */
  readonly archiveRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#controller_patch_image_ref Systemreport#controller_patch_image_ref}
  */
  readonly controllerPatchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#downloadable Systemreport#downloadable}
  */
  readonly downloadable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#id Systemreport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#image_ref Systemreport#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#name Systemreport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#operation Systemreport#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#se_patch_image_ref Systemreport#se_patch_image_ref}
  */
  readonly sePatchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#tenant_ref Systemreport#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#type Systemreport#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#uuid Systemreport#uuid}
  */
  readonly uuid?: string;
  /**
  * dryrun_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#dryrun_info Systemreport#dryrun_info}
  */
  readonly dryrunInfo?: SystemreportDryrunInfo[] | cdktf.IResolvable;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#events Systemreport#events}
  */
  readonly events?: SystemreportEvents[] | cdktf.IResolvable;
  /**
  * readiness_reports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#readiness_reports Systemreport#readiness_reports}
  */
  readonly readinessReports?: SystemreportReadinessReports[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: SystemreportState[] | cdktf.IResolvable;
  /**
  * summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#summary Systemreport#summary}
  */
  readonly summary?: SystemreportSummary[] | cdktf.IResolvable;
  /**
  * tasks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#tasks Systemreport#tasks}
  */
  readonly tasks?: SystemreportTasks[] | cdktf.IResolvable;
}
export interface SystemreportDryrunInfoParamsSeGroupOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#action_on_error Systemreport#action_on_error}
  */
  readonly actionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#disruptive Systemreport#disruptive}
  */
  readonly disruptive?: string;
}

export function systemreportDryrunInfoParamsSeGroupOptionsToTerraform(struct?: SystemreportDryrunInfoParamsSeGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_error: cdktf.stringToTerraform(struct!.actionOnError),
    disruptive: cdktf.stringToTerraform(struct!.disruptive),
  }
}


export function systemreportDryrunInfoParamsSeGroupOptionsToHclTerraform(struct?: SystemreportDryrunInfoParamsSeGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_error: {
      value: cdktf.stringToHclTerraform(struct!.actionOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disruptive: {
      value: cdktf.stringToHclTerraform(struct!.disruptive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoParamsSeGroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoParamsSeGroupOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnError = this._actionOnError;
    }
    if (this._disruptive !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptive = this._disruptive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportDryrunInfoParamsSeGroupOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionOnError = undefined;
      this._disruptive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionOnError = value.actionOnError;
      this._disruptive = value.disruptive;
    }
  }

  // action_on_error - computed: false, optional: true, required: false
  private _actionOnError?: string; 
  public get actionOnError() {
    return this.getStringAttribute('action_on_error');
  }
  public set actionOnError(value: string) {
    this._actionOnError = value;
  }
  public resetActionOnError() {
    this._actionOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnErrorInput() {
    return this._actionOnError;
  }

  // disruptive - computed: false, optional: true, required: false
  private _disruptive?: string; 
  public get disruptive() {
    return this.getStringAttribute('disruptive');
  }
  public set disruptive(value: string) {
    this._disruptive = value;
  }
  public resetDisruptive() {
    this._disruptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptiveInput() {
    return this._disruptive;
  }
}

export class SystemreportDryrunInfoParamsSeGroupOptionsList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoParamsSeGroupOptions[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoParamsSeGroupOptionsOutputReference {
    return new SystemreportDryrunInfoParamsSeGroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#controller_patch_ref Systemreport#controller_patch_ref}
  */
  readonly controllerPatchRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#dryrun Systemreport#dryrun}
  */
  readonly dryrun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#image_ref Systemreport#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#prechecks_only Systemreport#prechecks_only}
  */
  readonly prechecksOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#se_group_refs Systemreport#se_group_refs}
  */
  readonly seGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#se_patch_ref Systemreport#se_patch_ref}
  */
  readonly sePatchRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#skip_warnings Systemreport#skip_warnings}
  */
  readonly skipWarnings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#system Systemreport#system}
  */
  readonly systemAttribute?: string;
  /**
  * se_group_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#se_group_options Systemreport#se_group_options}
  */
  readonly seGroupOptions?: SystemreportDryrunInfoParamsSeGroupOptions[] | cdktf.IResolvable;
}

export function systemreportDryrunInfoParamsToTerraform(struct?: SystemreportDryrunInfoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_patch_ref: cdktf.stringToTerraform(struct!.controllerPatchRef),
    dryrun: cdktf.stringToTerraform(struct!.dryrun),
    image_ref: cdktf.stringToTerraform(struct!.imageRef),
    prechecks_only: cdktf.stringToTerraform(struct!.prechecksOnly),
    se_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seGroupRefs),
    se_patch_ref: cdktf.stringToTerraform(struct!.sePatchRef),
    skip_warnings: cdktf.stringToTerraform(struct!.skipWarnings),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    se_group_options: cdktf.listMapper(systemreportDryrunInfoParamsSeGroupOptionsToTerraform, true)(struct!.seGroupOptions),
  }
}


export function systemreportDryrunInfoParamsToHclTerraform(struct?: SystemreportDryrunInfoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_patch_ref: {
      value: cdktf.stringToHclTerraform(struct!.controllerPatchRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dryrun: {
      value: cdktf.stringToHclTerraform(struct!.dryrun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_ref: {
      value: cdktf.stringToHclTerraform(struct!.imageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prechecks_only: {
      value: cdktf.stringToHclTerraform(struct!.prechecksOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_patch_ref: {
      value: cdktf.stringToHclTerraform(struct!.sePatchRef),
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
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_options: {
      value: cdktf.listMapperHcl(systemreportDryrunInfoParamsSeGroupOptionsToHclTerraform, true)(struct!.seGroupOptions),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportDryrunInfoParamsSeGroupOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerPatchRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerPatchRef = this._controllerPatchRef;
    }
    if (this._dryrun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryrun = this._dryrun;
    }
    if (this._imageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRef = this._imageRef;
    }
    if (this._prechecksOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.prechecksOnly = this._prechecksOnly;
    }
    if (this._seGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRefs = this._seGroupRefs;
    }
    if (this._sePatchRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sePatchRef = this._sePatchRef;
    }
    if (this._skipWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipWarnings = this._skipWarnings;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._seGroupOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupOptions = this._seGroupOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportDryrunInfoParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerPatchRef = undefined;
      this._dryrun = undefined;
      this._imageRef = undefined;
      this._prechecksOnly = undefined;
      this._seGroupRefs = undefined;
      this._sePatchRef = undefined;
      this._skipWarnings = undefined;
      this._system = undefined;
      this._seGroupOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerPatchRef = value.controllerPatchRef;
      this._dryrun = value.dryrun;
      this._imageRef = value.imageRef;
      this._prechecksOnly = value.prechecksOnly;
      this._seGroupRefs = value.seGroupRefs;
      this._sePatchRef = value.sePatchRef;
      this._skipWarnings = value.skipWarnings;
      this._system = value.systemAttribute;
      this._seGroupOptions.internalValue = value.seGroupOptions;
    }
  }

  // controller_patch_ref - computed: true, optional: true, required: false
  private _controllerPatchRef?: string; 
  public get controllerPatchRef() {
    return this.getStringAttribute('controller_patch_ref');
  }
  public set controllerPatchRef(value: string) {
    this._controllerPatchRef = value;
  }
  public resetControllerPatchRef() {
    this._controllerPatchRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPatchRefInput() {
    return this._controllerPatchRef;
  }

  // dryrun - computed: true, optional: true, required: false
  private _dryrun?: string; 
  public get dryrun() {
    return this.getStringAttribute('dryrun');
  }
  public set dryrun(value: string) {
    this._dryrun = value;
  }
  public resetDryrun() {
    this._dryrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryrunInput() {
    return this._dryrun;
  }

  // image_ref - computed: true, optional: true, required: false
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  public resetImageRef() {
    this._imageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
  }

  // prechecks_only - computed: true, optional: true, required: false
  private _prechecksOnly?: string; 
  public get prechecksOnly() {
    return this.getStringAttribute('prechecks_only');
  }
  public set prechecksOnly(value: string) {
    this._prechecksOnly = value;
  }
  public resetPrechecksOnly() {
    this._prechecksOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prechecksOnlyInput() {
    return this._prechecksOnly;
  }

  // se_group_refs - computed: false, optional: true, required: false
  private _seGroupRefs?: string[]; 
  public get seGroupRefs() {
    return this.getListAttribute('se_group_refs');
  }
  public set seGroupRefs(value: string[]) {
    this._seGroupRefs = value;
  }
  public resetSeGroupRefs() {
    this._seGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefsInput() {
    return this._seGroupRefs;
  }

  // se_patch_ref - computed: true, optional: true, required: false
  private _sePatchRef?: string; 
  public get sePatchRef() {
    return this.getStringAttribute('se_patch_ref');
  }
  public set sePatchRef(value: string) {
    this._sePatchRef = value;
  }
  public resetSePatchRef() {
    this._sePatchRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePatchRefInput() {
    return this._sePatchRef;
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

  // system - computed: true, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // se_group_options - computed: false, optional: true, required: false
  private _seGroupOptions = new SystemreportDryrunInfoParamsSeGroupOptionsList(this, "se_group_options", true);
  public get seGroupOptions() {
    return this._seGroupOptions;
  }
  public putSeGroupOptions(value: SystemreportDryrunInfoParamsSeGroupOptions[] | cdktf.IResolvable) {
    this._seGroupOptions.internalValue = value;
  }
  public resetSeGroupOptions() {
    this._seGroupOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupOptionsInput() {
    return this._seGroupOptions.internalValue;
  }
}

export class SystemreportDryrunInfoParamsList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoParams[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoParamsOutputReference {
    return new SystemreportDryrunInfoParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#secs Systemreport#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#usecs Systemreport#usecs}
  */
  readonly usecs: string;
}

export function systemreportDryrunInfoStateLastChangedTimeToTerraform(struct?: SystemreportDryrunInfoStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function systemreportDryrunInfoStateLastChangedTimeToHclTerraform(struct?: SystemreportDryrunInfoStateLastChangedTime | cdktf.IResolvable): any {
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

export class SystemreportDryrunInfoStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportDryrunInfoStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class SystemreportDryrunInfoStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoStateLastChangedTimeOutputReference {
    return new SystemreportDryrunInfoStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#reason Systemreport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#rebooted Systemreport#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#last_changed_time Systemreport#last_changed_time}
  */
  readonly lastChangedTime?: SystemreportDryrunInfoStateLastChangedTime[] | cdktf.IResolvable;
}

export function systemreportDryrunInfoStateToTerraform(struct?: SystemreportDryrunInfoState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(systemreportDryrunInfoStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function systemreportDryrunInfoStateToHclTerraform(struct?: SystemreportDryrunInfoState | cdktf.IResolvable): any {
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
    rebooted: {
      value: cdktf.stringToHclTerraform(struct!.rebooted),
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
      value: cdktf.listMapperHcl(systemreportDryrunInfoStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportDryrunInfoStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._rebooted !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebooted = this._rebooted;
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

  public set internalValue(value: SystemreportDryrunInfoState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._rebooted = undefined;
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
      this._rebooted = value.rebooted;
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

  // rebooted - computed: true, optional: true, required: false
  private _rebooted?: string; 
  public get rebooted() {
    return this.getStringAttribute('rebooted');
  }
  public set rebooted(value: string) {
    this._rebooted = value;
  }
  public resetRebooted() {
    this._rebooted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootedInput() {
    return this._rebooted;
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
  private _lastChangedTime = new SystemreportDryrunInfoStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: SystemreportDryrunInfoStateLastChangedTime[] | cdktf.IResolvable) {
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

export class SystemreportDryrunInfoStateList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoState[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoStateOutputReference {
    return new SystemreportDryrunInfoStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoUpgradeEventsNodesEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#addr Systemreport#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#type Systemreport#type}
  */
  readonly type: string;
}

export function systemreportDryrunInfoUpgradeEventsNodesEventsIpToTerraform(struct?: SystemreportDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemreportDryrunInfoUpgradeEventsNodesEventsIpToHclTerraform(struct?: SystemreportDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
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

export class SystemreportDryrunInfoUpgradeEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined) {
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

export class SystemreportDryrunInfoUpgradeEventsNodesEventsIpList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoUpgradeEventsNodesEventsIpOutputReference {
    return new SystemreportDryrunInfoUpgradeEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoUpgradeEventsNodesEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#message Systemreport#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#status Systemreport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#sub_tasks Systemreport#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#ip Systemreport#ip}
  */
  readonly ip?: SystemreportDryrunInfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable;
}

export function systemreportDryrunInfoUpgradeEventsNodesEventsToTerraform(struct?: SystemreportDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(systemreportDryrunInfoUpgradeEventsNodesEventsIpToTerraform, true)(struct!.ip),
  }
}


export function systemreportDryrunInfoUpgradeEventsNodesEventsToHclTerraform(struct?: SystemreportDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(systemreportDryrunInfoUpgradeEventsNodesEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportDryrunInfoUpgradeEventsNodesEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoUpgradeEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new SystemreportDryrunInfoUpgradeEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: SystemreportDryrunInfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable) {
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

export class SystemreportDryrunInfoUpgradeEventsNodesEventsList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoUpgradeEventsNodesEvents[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoUpgradeEventsNodesEventsOutputReference {
    return new SystemreportDryrunInfoUpgradeEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoUpgradeEventsSubEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#addr Systemreport#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#type Systemreport#type}
  */
  readonly type: string;
}

export function systemreportDryrunInfoUpgradeEventsSubEventsIpToTerraform(struct?: SystemreportDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemreportDryrunInfoUpgradeEventsSubEventsIpToHclTerraform(struct?: SystemreportDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
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

export class SystemreportDryrunInfoUpgradeEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined) {
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

export class SystemreportDryrunInfoUpgradeEventsSubEventsIpList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoUpgradeEventsSubEventsIpOutputReference {
    return new SystemreportDryrunInfoUpgradeEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoUpgradeEventsSubEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#message Systemreport#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#status Systemreport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#sub_tasks Systemreport#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#ip Systemreport#ip}
  */
  readonly ip?: SystemreportDryrunInfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable;
}

export function systemreportDryrunInfoUpgradeEventsSubEventsToTerraform(struct?: SystemreportDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(systemreportDryrunInfoUpgradeEventsSubEventsIpToTerraform, true)(struct!.ip),
  }
}


export function systemreportDryrunInfoUpgradeEventsSubEventsToHclTerraform(struct?: SystemreportDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(systemreportDryrunInfoUpgradeEventsSubEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportDryrunInfoUpgradeEventsSubEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoUpgradeEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new SystemreportDryrunInfoUpgradeEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: SystemreportDryrunInfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable) {
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

export class SystemreportDryrunInfoUpgradeEventsSubEventsList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoUpgradeEventsSubEvents[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoUpgradeEventsSubEventsOutputReference {
    return new SystemreportDryrunInfoUpgradeEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfoUpgradeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#task Systemreport#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#task_name Systemreport#task_name}
  */
  readonly taskName?: string;
  /**
  * nodes_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#nodes_events Systemreport#nodes_events}
  */
  readonly nodesEvents?: SystemreportDryrunInfoUpgradeEventsNodesEvents[] | cdktf.IResolvable;
  /**
  * sub_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#sub_events Systemreport#sub_events}
  */
  readonly subEvents?: SystemreportDryrunInfoUpgradeEventsSubEvents[] | cdktf.IResolvable;
}

export function systemreportDryrunInfoUpgradeEventsToTerraform(struct?: SystemreportDryrunInfoUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task: cdktf.stringToTerraform(struct!.task),
    task_name: cdktf.stringToTerraform(struct!.taskName),
    nodes_events: cdktf.listMapper(systemreportDryrunInfoUpgradeEventsNodesEventsToTerraform, true)(struct!.nodesEvents),
    sub_events: cdktf.listMapper(systemreportDryrunInfoUpgradeEventsSubEventsToTerraform, true)(struct!.subEvents),
  }
}


export function systemreportDryrunInfoUpgradeEventsToHclTerraform(struct?: SystemreportDryrunInfoUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
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
    nodes_events: {
      value: cdktf.listMapperHcl(systemreportDryrunInfoUpgradeEventsNodesEventsToHclTerraform, true)(struct!.nodesEvents),
      isBlock: true,
      type: "list",
      storageClassType: "SystemreportDryrunInfoUpgradeEventsNodesEventsList",
    },
    sub_events: {
      value: cdktf.listMapperHcl(systemreportDryrunInfoUpgradeEventsSubEventsToHclTerraform, true)(struct!.subEvents),
      isBlock: true,
      type: "list",
      storageClassType: "SystemreportDryrunInfoUpgradeEventsSubEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfoUpgradeEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    if (this._nodesEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesEvents = this._nodesEvents?.internalValue;
    }
    if (this._subEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subEvents = this._subEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportDryrunInfoUpgradeEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._task = undefined;
      this._taskName = undefined;
      this._nodesEvents.internalValue = undefined;
      this._subEvents.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._task = value.task;
      this._taskName = value.taskName;
      this._nodesEvents.internalValue = value.nodesEvents;
      this._subEvents.internalValue = value.subEvents;
    }
  }

  // task - computed: true, optional: true, required: false
  private _task?: string; 
  public get task() {
    return this.getStringAttribute('task');
  }
  public set task(value: string) {
    this._task = value;
  }
  public resetTask() {
    this._task = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task;
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

  // nodes_events - computed: false, optional: true, required: false
  private _nodesEvents = new SystemreportDryrunInfoUpgradeEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }
  public putNodesEvents(value: SystemreportDryrunInfoUpgradeEventsNodesEvents[] | cdktf.IResolvable) {
    this._nodesEvents.internalValue = value;
  }
  public resetNodesEvents() {
    this._nodesEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesEventsInput() {
    return this._nodesEvents.internalValue;
  }

  // sub_events - computed: false, optional: true, required: false
  private _subEvents = new SystemreportDryrunInfoUpgradeEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
  public putSubEvents(value: SystemreportDryrunInfoUpgradeEventsSubEvents[] | cdktf.IResolvable) {
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

export class SystemreportDryrunInfoUpgradeEventsList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfoUpgradeEvents[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoUpgradeEventsOutputReference {
    return new SystemreportDryrunInfoUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportDryrunInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#operation Systemreport#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#progress Systemreport#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#tasks_completed Systemreport#tasks_completed}
  */
  readonly tasksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#total_tasks Systemreport#total_tasks}
  */
  readonly totalTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#worker Systemreport#worker}
  */
  readonly worker?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#params Systemreport#params}
  */
  readonly params?: SystemreportDryrunInfoParams[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: SystemreportDryrunInfoState[] | cdktf.IResolvable;
  /**
  * upgrade_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#upgrade_events Systemreport#upgrade_events}
  */
  readonly upgradeEvents?: SystemreportDryrunInfoUpgradeEvents[] | cdktf.IResolvable;
}

export function systemreportDryrunInfoToTerraform(struct?: SystemreportDryrunInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    operation: cdktf.stringToTerraform(struct!.operation),
    progress: cdktf.stringToTerraform(struct!.progress),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    tasks_completed: cdktf.stringToTerraform(struct!.tasksCompleted),
    total_tasks: cdktf.stringToTerraform(struct!.totalTasks),
    worker: cdktf.stringToTerraform(struct!.worker),
    params: cdktf.listMapper(systemreportDryrunInfoParamsToTerraform, true)(struct!.params),
    state: cdktf.listMapper(systemreportDryrunInfoStateToTerraform, true)(struct!.state),
    upgrade_events: cdktf.listMapper(systemreportDryrunInfoUpgradeEventsToTerraform, true)(struct!.upgradeEvents),
  }
}


export function systemreportDryrunInfoToHclTerraform(struct?: SystemreportDryrunInfo | cdktf.IResolvable): any {
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
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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
    tasks_completed: {
      value: cdktf.stringToHclTerraform(struct!.tasksCompleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_tasks: {
      value: cdktf.stringToHclTerraform(struct!.totalTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker: {
      value: cdktf.stringToHclTerraform(struct!.worker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(systemreportDryrunInfoParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportDryrunInfoParamsList",
    },
    state: {
      value: cdktf.listMapperHcl(systemreportDryrunInfoStateToHclTerraform, true)(struct!.state),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportDryrunInfoStateList",
    },
    upgrade_events: {
      value: cdktf.listMapperHcl(systemreportDryrunInfoUpgradeEventsToHclTerraform, true)(struct!.upgradeEvents),
      isBlock: true,
      type: "list",
      storageClassType: "SystemreportDryrunInfoUpgradeEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportDryrunInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportDryrunInfo | cdktf.IResolvable | undefined {
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
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._progress !== undefined) {
      hasAnyValues = true;
      internalValueResult.progress = this._progress;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._tasksCompleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasksCompleted = this._tasksCompleted;
    }
    if (this._totalTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTasks = this._totalTasks;
    }
    if (this._worker !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    if (this._state?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state?.internalValue;
    }
    if (this._upgradeEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeEvents = this._upgradeEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportDryrunInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._operation = undefined;
      this._progress = undefined;
      this._startTime = undefined;
      this._tasksCompleted = undefined;
      this._totalTasks = undefined;
      this._worker = undefined;
      this._params.internalValue = undefined;
      this._state.internalValue = undefined;
      this._upgradeEvents.internalValue = undefined;
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
      this._operation = value.operation;
      this._progress = value.progress;
      this._startTime = value.startTime;
      this._tasksCompleted = value.tasksCompleted;
      this._totalTasks = value.totalTasks;
      this._worker = value.worker;
      this._params.internalValue = value.params;
      this._state.internalValue = value.state;
      this._upgradeEvents.internalValue = value.upgradeEvents;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

  // worker - computed: true, optional: true, required: false
  private _worker?: string; 
  public get worker() {
    return this.getStringAttribute('worker');
  }
  public set worker(value: string) {
    this._worker = value;
  }
  public resetWorker() {
    this._worker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker;
  }

  // params - computed: false, optional: true, required: false
  private _params = new SystemreportDryrunInfoParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: SystemreportDryrunInfoParams[] | cdktf.IResolvable) {
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
  private _state = new SystemreportDryrunInfoStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: SystemreportDryrunInfoState[] | cdktf.IResolvable) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // upgrade_events - computed: false, optional: true, required: false
  private _upgradeEvents = new SystemreportDryrunInfoUpgradeEventsList(this, "upgrade_events", false);
  public get upgradeEvents() {
    return this._upgradeEvents;
  }
  public putUpgradeEvents(value: SystemreportDryrunInfoUpgradeEvents[] | cdktf.IResolvable) {
    this._upgradeEvents.internalValue = value;
  }
  public resetUpgradeEvents() {
    this._upgradeEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeEventsInput() {
    return this._upgradeEvents.internalValue;
  }
}

export class SystemreportDryrunInfoList extends cdktf.ComplexList {
  public internalValue? : SystemreportDryrunInfo[] | cdktf.IResolvable

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
  public get(index: number): SystemreportDryrunInfoOutputReference {
    return new SystemreportDryrunInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#event_name Systemreport#event_name}
  */
  readonly eventName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#messages Systemreport#messages}
  */
  readonly messages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#status Systemreport#status}
  */
  readonly status?: string;
}

export function systemreportEventsToTerraform(struct?: SystemreportEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    messages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messages),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function systemreportEventsToHclTerraform(struct?: SystemreportEvents | cdktf.IResolvable): any {
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
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messages),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportEvents | cdktf.IResolvable | undefined {
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
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._messages !== undefined) {
      hasAnyValues = true;
      internalValueResult.messages = this._messages;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._eventName = undefined;
      this._messages = undefined;
      this._startTime = undefined;
      this._status = undefined;
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
      this._eventName = value.eventName;
      this._messages = value.messages;
      this._startTime = value.startTime;
      this._status = value.status;
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

  // event_name - computed: true, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // messages - computed: false, optional: true, required: false
  private _messages?: string[]; 
  public get messages() {
    return this.getListAttribute('messages');
  }
  public set messages(value: string[]) {
    this._messages = value;
  }
  public resetMessages() {
    this._messages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages;
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
}

export class SystemreportEventsList extends cdktf.ComplexList {
  public internalValue? : SystemreportEvents[] | cdktf.IResolvable

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
  public get(index: number): SystemreportEventsOutputReference {
    return new SystemreportEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportReadinessReportsSystemReadinessChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#check_code Systemreport#check_code}
  */
  readonly checkCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#description Systemreport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#details Systemreport#details}
  */
  readonly details?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#error_details Systemreport#error_details}
  */
  readonly errorDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: string;
}

export function systemreportReadinessReportsSystemReadinessChecksToTerraform(struct?: SystemreportReadinessReportsSystemReadinessChecks | cdktf.IResolvable): any {
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


export function systemreportReadinessReportsSystemReadinessChecksToHclTerraform(struct?: SystemreportReadinessReportsSystemReadinessChecks | cdktf.IResolvable): any {
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

export class SystemreportReadinessReportsSystemReadinessChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportReadinessReportsSystemReadinessChecks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportReadinessReportsSystemReadinessChecks | cdktf.IResolvable | undefined) {
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

export class SystemreportReadinessReportsSystemReadinessChecksList extends cdktf.ComplexList {
  public internalValue? : SystemreportReadinessReportsSystemReadinessChecks[] | cdktf.IResolvable

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
  public get(index: number): SystemreportReadinessReportsSystemReadinessChecksOutputReference {
    return new SystemreportReadinessReportsSystemReadinessChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportReadinessReportsSystemReadinessStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#secs Systemreport#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#usecs Systemreport#usecs}
  */
  readonly usecs: string;
}

export function systemreportReadinessReportsSystemReadinessStateLastChangedTimeToTerraform(struct?: SystemreportReadinessReportsSystemReadinessStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function systemreportReadinessReportsSystemReadinessStateLastChangedTimeToHclTerraform(struct?: SystemreportReadinessReportsSystemReadinessStateLastChangedTime | cdktf.IResolvable): any {
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

export class SystemreportReadinessReportsSystemReadinessStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportReadinessReportsSystemReadinessStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportReadinessReportsSystemReadinessStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class SystemreportReadinessReportsSystemReadinessStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : SystemreportReadinessReportsSystemReadinessStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): SystemreportReadinessReportsSystemReadinessStateLastChangedTimeOutputReference {
    return new SystemreportReadinessReportsSystemReadinessStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportReadinessReportsSystemReadinessState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#reason Systemreport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#rebooted Systemreport#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#last_changed_time Systemreport#last_changed_time}
  */
  readonly lastChangedTime?: SystemreportReadinessReportsSystemReadinessStateLastChangedTime[] | cdktf.IResolvable;
}

export function systemreportReadinessReportsSystemReadinessStateToTerraform(struct?: SystemreportReadinessReportsSystemReadinessState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(systemreportReadinessReportsSystemReadinessStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function systemreportReadinessReportsSystemReadinessStateToHclTerraform(struct?: SystemreportReadinessReportsSystemReadinessState | cdktf.IResolvable): any {
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
    rebooted: {
      value: cdktf.stringToHclTerraform(struct!.rebooted),
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
      value: cdktf.listMapperHcl(systemreportReadinessReportsSystemReadinessStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportReadinessReportsSystemReadinessStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportReadinessReportsSystemReadinessStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportReadinessReportsSystemReadinessState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._rebooted !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebooted = this._rebooted;
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

  public set internalValue(value: SystemreportReadinessReportsSystemReadinessState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._rebooted = undefined;
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
      this._rebooted = value.rebooted;
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

  // rebooted - computed: true, optional: true, required: false
  private _rebooted?: string; 
  public get rebooted() {
    return this.getStringAttribute('rebooted');
  }
  public set rebooted(value: string) {
    this._rebooted = value;
  }
  public resetRebooted() {
    this._rebooted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootedInput() {
    return this._rebooted;
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
  private _lastChangedTime = new SystemreportReadinessReportsSystemReadinessStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: SystemreportReadinessReportsSystemReadinessStateLastChangedTime[] | cdktf.IResolvable) {
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

export class SystemreportReadinessReportsSystemReadinessStateList extends cdktf.ComplexList {
  public internalValue? : SystemreportReadinessReportsSystemReadinessState[] | cdktf.IResolvable

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
  public get(index: number): SystemreportReadinessReportsSystemReadinessStateOutputReference {
    return new SystemreportReadinessReportsSystemReadinessStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportReadinessReportsSystemReadiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#checks_completed Systemreport#checks_completed}
  */
  readonly checksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#image_ref Systemreport#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#patch_image_ref Systemreport#patch_image_ref}
  */
  readonly patchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#progress Systemreport#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#total_checks Systemreport#total_checks}
  */
  readonly totalChecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#upgrade_ops Systemreport#upgrade_ops}
  */
  readonly upgradeOps?: string;
  /**
  * checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#checks Systemreport#checks}
  */
  readonly checks?: SystemreportReadinessReportsSystemReadinessChecks[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: SystemreportReadinessReportsSystemReadinessState[] | cdktf.IResolvable;
}

export function systemreportReadinessReportsSystemReadinessToTerraform(struct?: SystemreportReadinessReportsSystemReadiness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checks_completed: cdktf.stringToTerraform(struct!.checksCompleted),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    image_ref: cdktf.stringToTerraform(struct!.imageRef),
    patch_image_ref: cdktf.stringToTerraform(struct!.patchImageRef),
    progress: cdktf.stringToTerraform(struct!.progress),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    total_checks: cdktf.stringToTerraform(struct!.totalChecks),
    upgrade_ops: cdktf.stringToTerraform(struct!.upgradeOps),
    checks: cdktf.listMapper(systemreportReadinessReportsSystemReadinessChecksToTerraform, true)(struct!.checks),
    state: cdktf.listMapper(systemreportReadinessReportsSystemReadinessStateToTerraform, true)(struct!.state),
  }
}


export function systemreportReadinessReportsSystemReadinessToHclTerraform(struct?: SystemreportReadinessReportsSystemReadiness | cdktf.IResolvable): any {
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
    image_ref: {
      value: cdktf.stringToHclTerraform(struct!.imageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_image_ref: {
      value: cdktf.stringToHclTerraform(struct!.patchImageRef),
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
    upgrade_ops: {
      value: cdktf.stringToHclTerraform(struct!.upgradeOps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    checks: {
      value: cdktf.listMapperHcl(systemreportReadinessReportsSystemReadinessChecksToHclTerraform, true)(struct!.checks),
      isBlock: true,
      type: "list",
      storageClassType: "SystemreportReadinessReportsSystemReadinessChecksList",
    },
    state: {
      value: cdktf.listMapperHcl(systemreportReadinessReportsSystemReadinessStateToHclTerraform, true)(struct!.state),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportReadinessReportsSystemReadinessStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportReadinessReportsSystemReadinessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportReadinessReportsSystemReadiness | cdktf.IResolvable | undefined {
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
    if (this._imageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRef = this._imageRef;
    }
    if (this._patchImageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchImageRef = this._patchImageRef;
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
    if (this._upgradeOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeOps = this._upgradeOps;
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

  public set internalValue(value: SystemreportReadinessReportsSystemReadiness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checksCompleted = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._imageRef = undefined;
      this._patchImageRef = undefined;
      this._progress = undefined;
      this._startTime = undefined;
      this._totalChecks = undefined;
      this._upgradeOps = undefined;
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
      this._imageRef = value.imageRef;
      this._patchImageRef = value.patchImageRef;
      this._progress = value.progress;
      this._startTime = value.startTime;
      this._totalChecks = value.totalChecks;
      this._upgradeOps = value.upgradeOps;
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

  // image_ref - computed: true, optional: true, required: false
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  public resetImageRef() {
    this._imageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
  }

  // patch_image_ref - computed: true, optional: true, required: false
  private _patchImageRef?: string; 
  public get patchImageRef() {
    return this.getStringAttribute('patch_image_ref');
  }
  public set patchImageRef(value: string) {
    this._patchImageRef = value;
  }
  public resetPatchImageRef() {
    this._patchImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchImageRefInput() {
    return this._patchImageRef;
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

  // upgrade_ops - computed: true, optional: true, required: false
  private _upgradeOps?: string; 
  public get upgradeOps() {
    return this.getStringAttribute('upgrade_ops');
  }
  public set upgradeOps(value: string) {
    this._upgradeOps = value;
  }
  public resetUpgradeOps() {
    this._upgradeOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeOpsInput() {
    return this._upgradeOps;
  }

  // checks - computed: false, optional: true, required: false
  private _checks = new SystemreportReadinessReportsSystemReadinessChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }
  public putChecks(value: SystemreportReadinessReportsSystemReadinessChecks[] | cdktf.IResolvable) {
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
  private _state = new SystemreportReadinessReportsSystemReadinessStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: SystemreportReadinessReportsSystemReadinessState[] | cdktf.IResolvable) {
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

export class SystemreportReadinessReportsSystemReadinessList extends cdktf.ComplexList {
  public internalValue? : SystemreportReadinessReportsSystemReadiness[] | cdktf.IResolvable

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
  public get(index: number): SystemreportReadinessReportsSystemReadinessOutputReference {
    return new SystemreportReadinessReportsSystemReadinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportReadinessReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#name Systemreport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#node_ref Systemreport#node_ref}
  */
  readonly nodeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#node_type Systemreport#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#obj_cloud_ref Systemreport#obj_cloud_ref}
  */
  readonly objCloudRef?: string;
  /**
  * system_readiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#system_readiness Systemreport#system_readiness}
  */
  readonly systemReadiness?: SystemreportReadinessReportsSystemReadiness[] | cdktf.IResolvable;
}

export function systemreportReadinessReportsToTerraform(struct?: SystemreportReadinessReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_ref: cdktf.stringToTerraform(struct!.nodeRef),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    obj_cloud_ref: cdktf.stringToTerraform(struct!.objCloudRef),
    system_readiness: cdktf.listMapper(systemreportReadinessReportsSystemReadinessToTerraform, true)(struct!.systemReadiness),
  }
}


export function systemreportReadinessReportsToHclTerraform(struct?: SystemreportReadinessReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_ref: {
      value: cdktf.stringToHclTerraform(struct!.nodeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_cloud_ref: {
      value: cdktf.stringToHclTerraform(struct!.objCloudRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_readiness: {
      value: cdktf.listMapperHcl(systemreportReadinessReportsSystemReadinessToHclTerraform, true)(struct!.systemReadiness),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportReadinessReportsSystemReadinessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportReadinessReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportReadinessReports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeRef = this._nodeRef;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._objCloudRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.objCloudRef = this._objCloudRef;
    }
    if (this._systemReadiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemReadiness = this._systemReadiness?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportReadinessReports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nodeRef = undefined;
      this._nodeType = undefined;
      this._objCloudRef = undefined;
      this._systemReadiness.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nodeRef = value.nodeRef;
      this._nodeType = value.nodeType;
      this._objCloudRef = value.objCloudRef;
      this._systemReadiness.internalValue = value.systemReadiness;
    }
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

  // node_ref - computed: true, optional: true, required: false
  private _nodeRef?: string; 
  public get nodeRef() {
    return this.getStringAttribute('node_ref');
  }
  public set nodeRef(value: string) {
    this._nodeRef = value;
  }
  public resetNodeRef() {
    this._nodeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeRefInput() {
    return this._nodeRef;
  }

  // node_type - computed: true, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // obj_cloud_ref - computed: true, optional: true, required: false
  private _objCloudRef?: string; 
  public get objCloudRef() {
    return this.getStringAttribute('obj_cloud_ref');
  }
  public set objCloudRef(value: string) {
    this._objCloudRef = value;
  }
  public resetObjCloudRef() {
    this._objCloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objCloudRefInput() {
    return this._objCloudRef;
  }

  // system_readiness - computed: false, optional: true, required: false
  private _systemReadiness = new SystemreportReadinessReportsSystemReadinessList(this, "system_readiness", true);
  public get systemReadiness() {
    return this._systemReadiness;
  }
  public putSystemReadiness(value: SystemreportReadinessReportsSystemReadiness[] | cdktf.IResolvable) {
    this._systemReadiness.internalValue = value;
  }
  public resetSystemReadiness() {
    this._systemReadiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReadinessInput() {
    return this._systemReadiness.internalValue;
  }
}

export class SystemreportReadinessReportsList extends cdktf.ComplexList {
  public internalValue? : SystemreportReadinessReports[] | cdktf.IResolvable

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
  public get(index: number): SystemreportReadinessReportsOutputReference {
    return new SystemreportReadinessReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#secs Systemreport#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#usecs Systemreport#usecs}
  */
  readonly usecs: string;
}

export function systemreportStateLastChangedTimeToTerraform(struct?: SystemreportStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function systemreportStateLastChangedTimeToHclTerraform(struct?: SystemreportStateLastChangedTime | cdktf.IResolvable): any {
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

export class SystemreportStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class SystemreportStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : SystemreportStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): SystemreportStateLastChangedTimeOutputReference {
    return new SystemreportStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#reason Systemreport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#last_changed_time Systemreport#last_changed_time}
  */
  readonly lastChangedTime?: SystemreportStateLastChangedTime[] | cdktf.IResolvable;
}

export function systemreportStateToTerraform(struct?: SystemreportState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(systemreportStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function systemreportStateToHclTerraform(struct?: SystemreportState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(systemreportStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemreportState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new SystemreportStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: SystemreportStateLastChangedTime[] | cdktf.IResolvable) {
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

export class SystemreportStateList extends cdktf.ComplexList {
  public internalValue? : SystemreportState[] | cdktf.IResolvable

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
  public get(index: number): SystemreportStateOutputReference {
    return new SystemreportStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#description Systemreport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#previews Systemreport#previews}
  */
  readonly previews?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#title Systemreport#title}
  */
  readonly title?: string;
}

export function systemreportSummaryToTerraform(struct?: SystemreportSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    previews: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previews),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function systemreportSummaryToHclTerraform(struct?: SystemreportSummary | cdktf.IResolvable): any {
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
    previews: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previews),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SystemreportSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._previews !== undefined) {
      hasAnyValues = true;
      internalValueResult.previews = this._previews;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._previews = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._previews = value.previews;
      this._title = value.title;
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

  // previews - computed: false, optional: true, required: false
  private _previews?: string[]; 
  public get previews() {
    return this.getListAttribute('previews');
  }
  public set previews(value: string[]) {
    this._previews = value;
  }
  public resetPreviews() {
    this._previews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewsInput() {
    return this._previews;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class SystemreportSummaryList extends cdktf.ComplexList {
  public internalValue? : SystemreportSummary[] | cdktf.IResolvable

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
  public get(index: number): SystemreportSummaryOutputReference {
    return new SystemreportSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportTasksSummary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#description Systemreport#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#duration Systemreport#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#end_time Systemreport#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#error_count Systemreport#error_count}
  */
  readonly errorCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#reason Systemreport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#start_time Systemreport#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#state Systemreport#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#status Systemreport#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#type Systemreport#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#warning_count Systemreport#warning_count}
  */
  readonly warningCount?: string;
}

export function systemreportTasksSummaryToTerraform(struct?: SystemreportTasksSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    error_count: cdktf.stringToTerraform(struct!.errorCount),
    reason: cdktf.stringToTerraform(struct!.reason),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    warning_count: cdktf.stringToTerraform(struct!.warningCount),
  }
}


export function systemreportTasksSummaryToHclTerraform(struct?: SystemreportTasksSummary | cdktf.IResolvable): any {
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
    error_count: {
      value: cdktf.stringToHclTerraform(struct!.errorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_count: {
      value: cdktf.stringToHclTerraform(struct!.warningCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportTasksSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportTasksSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._errorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCount = this._errorCount;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._warningCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningCount = this._warningCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportTasksSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._errorCount = undefined;
      this._reason = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._status = undefined;
      this._type = undefined;
      this._warningCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._errorCount = value.errorCount;
      this._reason = value.reason;
      this._startTime = value.startTime;
      this._state = value.state;
      this._status = value.status;
      this._type = value.type;
      this._warningCount = value.warningCount;
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

  // error_count - computed: true, optional: true, required: false
  private _errorCount?: string; 
  public get errorCount() {
    return this.getStringAttribute('error_count');
  }
  public set errorCount(value: string) {
    this._errorCount = value;
  }
  public resetErrorCount() {
    this._errorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCountInput() {
    return this._errorCount;
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

  // warning_count - computed: true, optional: true, required: false
  private _warningCount?: string; 
  public get warningCount() {
    return this.getStringAttribute('warning_count');
  }
  public set warningCount(value: string) {
    this._warningCount = value;
  }
  public resetWarningCount() {
    this._warningCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningCountInput() {
    return this._warningCount;
  }
}

export class SystemreportTasksSummaryList extends cdktf.ComplexList {
  public internalValue? : SystemreportTasksSummary[] | cdktf.IResolvable

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
  public get(index: number): SystemreportTasksSummaryOutputReference {
    return new SystemreportTasksSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemreportTasks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#name Systemreport#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#reason Systemreport#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#task_journal_ref Systemreport#task_journal_ref}
  */
  readonly taskJournalRef?: string;
  /**
  * summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#summary Systemreport#summary}
  */
  readonly summary?: SystemreportTasksSummary[] | cdktf.IResolvable;
}

export function systemreportTasksToTerraform(struct?: SystemreportTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reason: cdktf.stringToTerraform(struct!.reason),
    task_journal_ref: cdktf.stringToTerraform(struct!.taskJournalRef),
    summary: cdktf.listMapper(systemreportTasksSummaryToTerraform, true)(struct!.summary),
  }
}


export function systemreportTasksToHclTerraform(struct?: SystemreportTasks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_journal_ref: {
      value: cdktf.stringToHclTerraform(struct!.taskJournalRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.listMapperHcl(systemreportTasksSummaryToHclTerraform, true)(struct!.summary),
      isBlock: true,
      type: "set",
      storageClassType: "SystemreportTasksSummaryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemreportTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemreportTasks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._taskJournalRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskJournalRef = this._taskJournalRef;
    }
    if (this._summary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemreportTasks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._reason = undefined;
      this._taskJournalRef = undefined;
      this._summary.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._reason = value.reason;
      this._taskJournalRef = value.taskJournalRef;
      this._summary.internalValue = value.summary;
    }
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

  // task_journal_ref - computed: true, optional: true, required: false
  private _taskJournalRef?: string; 
  public get taskJournalRef() {
    return this.getStringAttribute('task_journal_ref');
  }
  public set taskJournalRef(value: string) {
    this._taskJournalRef = value;
  }
  public resetTaskJournalRef() {
    this._taskJournalRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskJournalRefInput() {
    return this._taskJournalRef;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new SystemreportTasksSummaryList(this, "summary", true);
  public get summary() {
    return this._summary;
  }
  public putSummary(value: SystemreportTasksSummary[] | cdktf.IResolvable) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }
}

export class SystemreportTasksList extends cdktf.ComplexList {
  public internalValue? : SystemreportTasks[] | cdktf.IResolvable

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
  public get(index: number): SystemreportTasksOutputReference {
    return new SystemreportTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport avi_systemreport}
*/
export class Systemreport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_systemreport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemreport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemreport to import
  * @param importFromId The id of the existing Systemreport that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemreport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_systemreport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/systemreport avi_systemreport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemreportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemreportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_systemreport',
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
    this._archiveRef = config.archiveRef;
    this._controllerPatchImageRef = config.controllerPatchImageRef;
    this._downloadable = config.downloadable;
    this._id = config.id;
    this._imageRef = config.imageRef;
    this._name = config.name;
    this._operation = config.operation;
    this._sePatchImageRef = config.sePatchImageRef;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._dryrunInfo.internalValue = config.dryrunInfo;
    this._events.internalValue = config.events;
    this._readinessReports.internalValue = config.readinessReports;
    this._state.internalValue = config.state;
    this._summary.internalValue = config.summary;
    this._tasks.internalValue = config.tasks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_ref - computed: true, optional: true, required: false
  private _archiveRef?: string; 
  public get archiveRef() {
    return this.getStringAttribute('archive_ref');
  }
  public set archiveRef(value: string) {
    this._archiveRef = value;
  }
  public resetArchiveRef() {
    this._archiveRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveRefInput() {
    return this._archiveRef;
  }

  // controller_patch_image_ref - computed: true, optional: true, required: false
  private _controllerPatchImageRef?: string; 
  public get controllerPatchImageRef() {
    return this.getStringAttribute('controller_patch_image_ref');
  }
  public set controllerPatchImageRef(value: string) {
    this._controllerPatchImageRef = value;
  }
  public resetControllerPatchImageRef() {
    this._controllerPatchImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPatchImageRefInput() {
    return this._controllerPatchImageRef;
  }

  // downloadable - computed: false, optional: true, required: false
  private _downloadable?: string; 
  public get downloadable() {
    return this.getStringAttribute('downloadable');
  }
  public set downloadable(value: string) {
    this._downloadable = value;
  }
  public resetDownloadable() {
    this._downloadable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadableInput() {
    return this._downloadable;
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

  // image_ref - computed: true, optional: true, required: false
  private _imageRef?: string; 
  public get imageRef() {
    return this.getStringAttribute('image_ref');
  }
  public set imageRef(value: string) {
    this._imageRef = value;
  }
  public resetImageRef() {
    this._imageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRefInput() {
    return this._imageRef;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // se_patch_image_ref - computed: true, optional: true, required: false
  private _sePatchImageRef?: string; 
  public get sePatchImageRef() {
    return this.getStringAttribute('se_patch_image_ref');
  }
  public set sePatchImageRef(value: string) {
    this._sePatchImageRef = value;
  }
  public resetSePatchImageRef() {
    this._sePatchImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePatchImageRefInput() {
    return this._sePatchImageRef;
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

  // type - computed: true, optional: true, required: false
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

  // dryrun_info - computed: false, optional: true, required: false
  private _dryrunInfo = new SystemreportDryrunInfoList(this, "dryrun_info", true);
  public get dryrunInfo() {
    return this._dryrunInfo;
  }
  public putDryrunInfo(value: SystemreportDryrunInfo[] | cdktf.IResolvable) {
    this._dryrunInfo.internalValue = value;
  }
  public resetDryrunInfo() {
    this._dryrunInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryrunInfoInput() {
    return this._dryrunInfo.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new SystemreportEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: SystemreportEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // readiness_reports - computed: false, optional: true, required: false
  private _readinessReports = new SystemreportReadinessReportsList(this, "readiness_reports", false);
  public get readinessReports() {
    return this._readinessReports;
  }
  public putReadinessReports(value: SystemreportReadinessReports[] | cdktf.IResolvable) {
    this._readinessReports.internalValue = value;
  }
  public resetReadinessReports() {
    this._readinessReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessReportsInput() {
    return this._readinessReports.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state = new SystemreportStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: SystemreportState[] | cdktf.IResolvable) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // summary - computed: false, optional: true, required: false
  private _summary = new SystemreportSummaryList(this, "summary", true);
  public get summary() {
    return this._summary;
  }
  public putSummary(value: SystemreportSummary[] | cdktf.IResolvable) {
    this._summary.internalValue = value;
  }
  public resetSummary() {
    this._summary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks = new SystemreportTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }
  public putTasks(value: SystemreportTasks[] | cdktf.IResolvable) {
    this._tasks.internalValue = value;
  }
  public resetTasks() {
    this._tasks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_ref: cdktf.stringToTerraform(this._archiveRef),
      controller_patch_image_ref: cdktf.stringToTerraform(this._controllerPatchImageRef),
      downloadable: cdktf.stringToTerraform(this._downloadable),
      id: cdktf.stringToTerraform(this._id),
      image_ref: cdktf.stringToTerraform(this._imageRef),
      name: cdktf.stringToTerraform(this._name),
      operation: cdktf.stringToTerraform(this._operation),
      se_patch_image_ref: cdktf.stringToTerraform(this._sePatchImageRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      dryrun_info: cdktf.listMapper(systemreportDryrunInfoToTerraform, true)(this._dryrunInfo.internalValue),
      events: cdktf.listMapper(systemreportEventsToTerraform, true)(this._events.internalValue),
      readiness_reports: cdktf.listMapper(systemreportReadinessReportsToTerraform, true)(this._readinessReports.internalValue),
      state: cdktf.listMapper(systemreportStateToTerraform, true)(this._state.internalValue),
      summary: cdktf.listMapper(systemreportSummaryToTerraform, true)(this._summary.internalValue),
      tasks: cdktf.listMapper(systemreportTasksToTerraform, true)(this._tasks.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_ref: {
        value: cdktf.stringToHclTerraform(this._archiveRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_patch_image_ref: {
        value: cdktf.stringToHclTerraform(this._controllerPatchImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downloadable: {
        value: cdktf.stringToHclTerraform(this._downloadable),
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
      image_ref: {
        value: cdktf.stringToHclTerraform(this._imageRef),
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
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_patch_image_ref: {
        value: cdktf.stringToHclTerraform(this._sePatchImageRef),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      dryrun_info: {
        value: cdktf.listMapperHcl(systemreportDryrunInfoToHclTerraform, true)(this._dryrunInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemreportDryrunInfoList",
      },
      events: {
        value: cdktf.listMapperHcl(systemreportEventsToHclTerraform, true)(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemreportEventsList",
      },
      readiness_reports: {
        value: cdktf.listMapperHcl(systemreportReadinessReportsToHclTerraform, true)(this._readinessReports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemreportReadinessReportsList",
      },
      state: {
        value: cdktf.listMapperHcl(systemreportStateToHclTerraform, true)(this._state.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemreportStateList",
      },
      summary: {
        value: cdktf.listMapperHcl(systemreportSummaryToHclTerraform, true)(this._summary.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemreportSummaryList",
      },
      tasks: {
        value: cdktf.listMapperHcl(systemreportTasksToHclTerraform, true)(this._tasks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemreportTasksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
