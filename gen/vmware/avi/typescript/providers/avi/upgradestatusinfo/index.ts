// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradestatusinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#after_reboot_rollback_fnc Upgradestatusinfo#after_reboot_rollback_fnc}
  */
  readonly afterRebootRollbackFnc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#after_reboot_task_name Upgradestatusinfo#after_reboot_task_name}
  */
  readonly afterRebootTaskName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#clean Upgradestatusinfo#clean}
  */
  readonly clean?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#enable_patch_rollback Upgradestatusinfo#enable_patch_rollback}
  */
  readonly enablePatchRollback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#enable_rollback Upgradestatusinfo#enable_rollback}
  */
  readonly enableRollback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#enqueue_time Upgradestatusinfo#enqueue_time}
  */
  readonly enqueueTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#fips_mode Upgradestatusinfo#fips_mode}
  */
  readonly fipsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#id Upgradestatusinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_path Upgradestatusinfo#image_path}
  */
  readonly imagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_ref Upgradestatusinfo#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#name Upgradestatusinfo#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#node_type Upgradestatusinfo#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#obj_cloud_ref Upgradestatusinfo#obj_cloud_ref}
  */
  readonly objCloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_path Upgradestatusinfo#patch_image_path}
  */
  readonly patchImagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_ref Upgradestatusinfo#patch_image_ref}
  */
  readonly patchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_reboot Upgradestatusinfo#patch_reboot}
  */
  readonly patchReboot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_version Upgradestatusinfo#patch_version}
  */
  readonly patchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#prev_image_path Upgradestatusinfo#prev_image_path}
  */
  readonly prevImagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#prev_patch_image_path Upgradestatusinfo#prev_patch_image_path}
  */
  readonly prevPatchImagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#prev_remote_image_ref Upgradestatusinfo#prev_remote_image_ref}
  */
  readonly prevRemoteImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#previous_image_ref Upgradestatusinfo#previous_image_ref}
  */
  readonly previousImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#previous_patch_image_ref Upgradestatusinfo#previous_patch_image_ref}
  */
  readonly previousPatchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#previous_patch_version Upgradestatusinfo#previous_patch_version}
  */
  readonly previousPatchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#previous_version Upgradestatusinfo#previous_version}
  */
  readonly previousVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#progress Upgradestatusinfo#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#remote_image_ref Upgradestatusinfo#remote_image_ref}
  */
  readonly remoteImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_patch_image_path Upgradestatusinfo#se_patch_image_path}
  */
  readonly sePatchImagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_patch_image_ref Upgradestatusinfo#se_patch_image_ref}
  */
  readonly sePatchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#statediff_ref Upgradestatusinfo#statediff_ref}
  */
  readonly statediffRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#system Upgradestatusinfo#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#system_report_refs Upgradestatusinfo#system_report_refs}
  */
  readonly systemReportRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tasks_completed Upgradestatusinfo#tasks_completed}
  */
  readonly tasksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tenant_ref Upgradestatusinfo#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#total_tasks Upgradestatusinfo#total_tasks}
  */
  readonly totalTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#upgrade_ops Upgradestatusinfo#upgrade_ops}
  */
  readonly upgradeOps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#uuid Upgradestatusinfo#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#version Upgradestatusinfo#version}
  */
  readonly version?: string;
  /**
  * dryrun_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#dryrun_info Upgradestatusinfo#dryrun_info}
  */
  readonly dryrunInfo?: UpgradestatusinfoDryrunInfo[] | cdktf.IResolvable;
  /**
  * history block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#history Upgradestatusinfo#history}
  */
  readonly history?: UpgradestatusinfoHistory[] | cdktf.IResolvable;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#params Upgradestatusinfo#params}
  */
  readonly params?: UpgradestatusinfoParams[] | cdktf.IResolvable;
  /**
  * patch_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_list Upgradestatusinfo#patch_list}
  */
  readonly patchList?: UpgradestatusinfoPatchListStruct[] | cdktf.IResolvable;
  /**
  * previous_patch_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#previous_patch_list Upgradestatusinfo#previous_patch_list}
  */
  readonly previousPatchList?: UpgradestatusinfoPreviousPatchListStruct[] | cdktf.IResolvable;
  /**
  * se_upgrade_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_events Upgradestatusinfo#se_upgrade_events}
  */
  readonly seUpgradeEvents?: UpgradestatusinfoSeUpgradeEvents[] | cdktf.IResolvable;
  /**
  * seg_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#seg_params Upgradestatusinfo#seg_params}
  */
  readonly segParams?: UpgradestatusinfoSegParams[] | cdktf.IResolvable;
  /**
  * seg_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#seg_status Upgradestatusinfo#seg_status}
  */
  readonly segStatus?: UpgradestatusinfoSegStatus[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: UpgradestatusinfoState[] | cdktf.IResolvable;
  /**
  * upgrade_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#upgrade_events Upgradestatusinfo#upgrade_events}
  */
  readonly upgradeEvents?: UpgradestatusinfoUpgradeEvents[] | cdktf.IResolvable;
  /**
  * upgrade_readiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#upgrade_readiness Upgradestatusinfo#upgrade_readiness}
  */
  readonly upgradeReadiness?: UpgradestatusinfoUpgradeReadiness[] | cdktf.IResolvable;
}
export interface UpgradestatusinfoDryrunInfoParamsSeGroupOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#action_on_error Upgradestatusinfo#action_on_error}
  */
  readonly actionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disruptive Upgradestatusinfo#disruptive}
  */
  readonly disruptive?: string;
}

export function upgradestatusinfoDryrunInfoParamsSeGroupOptionsToTerraform(struct?: UpgradestatusinfoDryrunInfoParamsSeGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_error: cdktf.stringToTerraform(struct!.actionOnError),
    disruptive: cdktf.stringToTerraform(struct!.disruptive),
  }
}


export function upgradestatusinfoDryrunInfoParamsSeGroupOptionsToHclTerraform(struct?: UpgradestatusinfoDryrunInfoParamsSeGroupOptions | cdktf.IResolvable): any {
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

export class UpgradestatusinfoDryrunInfoParamsSeGroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoParamsSeGroupOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoParamsSeGroupOptions | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoDryrunInfoParamsSeGroupOptionsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoParamsSeGroupOptions[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoParamsSeGroupOptionsOutputReference {
    return new UpgradestatusinfoDryrunInfoParamsSeGroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#controller_patch_ref Upgradestatusinfo#controller_patch_ref}
  */
  readonly controllerPatchRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#dryrun Upgradestatusinfo#dryrun}
  */
  readonly dryrun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_ref Upgradestatusinfo#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#prechecks_only Upgradestatusinfo#prechecks_only}
  */
  readonly prechecksOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_refs Upgradestatusinfo#se_group_refs}
  */
  readonly seGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_patch_ref Upgradestatusinfo#se_patch_ref}
  */
  readonly sePatchRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#skip_warnings Upgradestatusinfo#skip_warnings}
  */
  readonly skipWarnings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#system Upgradestatusinfo#system}
  */
  readonly systemAttribute?: string;
  /**
  * se_group_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_options Upgradestatusinfo#se_group_options}
  */
  readonly seGroupOptions?: UpgradestatusinfoDryrunInfoParamsSeGroupOptions[] | cdktf.IResolvable;
}

export function upgradestatusinfoDryrunInfoParamsToTerraform(struct?: UpgradestatusinfoDryrunInfoParams | cdktf.IResolvable): any {
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
    se_group_options: cdktf.listMapper(upgradestatusinfoDryrunInfoParamsSeGroupOptionsToTerraform, true)(struct!.seGroupOptions),
  }
}


export function upgradestatusinfoDryrunInfoParamsToHclTerraform(struct?: UpgradestatusinfoDryrunInfoParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoParamsSeGroupOptionsToHclTerraform, true)(struct!.seGroupOptions),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoDryrunInfoParamsSeGroupOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoDryrunInfoParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoParams | cdktf.IResolvable | undefined) {
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
  private _seGroupOptions = new UpgradestatusinfoDryrunInfoParamsSeGroupOptionsList(this, "se_group_options", true);
  public get seGroupOptions() {
    return this._seGroupOptions;
  }
  public putSeGroupOptions(value: UpgradestatusinfoDryrunInfoParamsSeGroupOptions[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoDryrunInfoParamsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoParams[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoParamsOutputReference {
    return new UpgradestatusinfoDryrunInfoParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#secs Upgradestatusinfo#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#usecs Upgradestatusinfo#usecs}
  */
  readonly usecs: string;
}

export function upgradestatusinfoDryrunInfoStateLastChangedTimeToTerraform(struct?: UpgradestatusinfoDryrunInfoStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatusinfoDryrunInfoStateLastChangedTimeToHclTerraform(struct?: UpgradestatusinfoDryrunInfoStateLastChangedTime | cdktf.IResolvable): any {
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

export class UpgradestatusinfoDryrunInfoStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoDryrunInfoStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoStateLastChangedTimeOutputReference {
    return new UpgradestatusinfoDryrunInfoStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#rebooted Upgradestatusinfo#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#last_changed_time Upgradestatusinfo#last_changed_time}
  */
  readonly lastChangedTime?: UpgradestatusinfoDryrunInfoStateLastChangedTime[] | cdktf.IResolvable;
}

export function upgradestatusinfoDryrunInfoStateToTerraform(struct?: UpgradestatusinfoDryrunInfoState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(upgradestatusinfoDryrunInfoStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function upgradestatusinfoDryrunInfoStateToHclTerraform(struct?: UpgradestatusinfoDryrunInfoState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoDryrunInfoStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoDryrunInfoStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new UpgradestatusinfoDryrunInfoStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: UpgradestatusinfoDryrunInfoStateLastChangedTime[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoDryrunInfoStateList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoState[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoStateOutputReference {
    return new UpgradestatusinfoDryrunInfoStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#addr Upgradestatusinfo#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#type Upgradestatusinfo#type}
  */
  readonly type: string;
}

export function upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpToTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpToHclTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpOutputReference {
    return new UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#message Upgradestatusinfo#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#status Upgradestatusinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ip Upgradestatusinfo#ip}
  */
  readonly ip?: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable;
}

export function upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsToTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpToTerraform, true)(struct!.ip),
  }
}


export function upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsToHclTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsOutputReference {
    return new UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#addr Upgradestatusinfo#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#type Upgradestatusinfo#type}
  */
  readonly type: string;
}

export function upgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpToTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function upgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpToHclTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpOutputReference {
    return new UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#message Upgradestatusinfo#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#status Upgradestatusinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ip Upgradestatusinfo#ip}
  */
  readonly ip?: UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable;
}

export function upgradestatusinfoDryrunInfoUpgradeEventsSubEventsToTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(upgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpToTerraform, true)(struct!.ip),
  }
}


export function upgradestatusinfoDryrunInfoUpgradeEventsSubEventsToHclTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsOutputReference {
    return new UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfoUpgradeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_name Upgradestatusinfo#task_name}
  */
  readonly taskName?: string;
  /**
  * nodes_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#nodes_events Upgradestatusinfo#nodes_events}
  */
  readonly nodesEvents?: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents[] | cdktf.IResolvable;
  /**
  * sub_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_events Upgradestatusinfo#sub_events}
  */
  readonly subEvents?: UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents[] | cdktf.IResolvable;
}

export function upgradestatusinfoDryrunInfoUpgradeEventsToTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task: cdktf.stringToTerraform(struct!.task),
    task_name: cdktf.stringToTerraform(struct!.taskName),
    nodes_events: cdktf.listMapper(upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsToTerraform, true)(struct!.nodesEvents),
    sub_events: cdktf.listMapper(upgradestatusinfoDryrunInfoUpgradeEventsSubEventsToTerraform, true)(struct!.subEvents),
  }
}


export function upgradestatusinfoDryrunInfoUpgradeEventsToHclTerraform(struct?: UpgradestatusinfoDryrunInfoUpgradeEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoUpgradeEventsNodesEventsToHclTerraform, true)(struct!.nodesEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsList",
    },
    sub_events: {
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoUpgradeEventsSubEventsToHclTerraform, true)(struct!.subEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoDryrunInfoUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfoUpgradeEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfoUpgradeEvents | cdktf.IResolvable | undefined) {
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
  private _nodesEvents = new UpgradestatusinfoDryrunInfoUpgradeEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }
  public putNodesEvents(value: UpgradestatusinfoDryrunInfoUpgradeEventsNodesEvents[] | cdktf.IResolvable) {
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
  private _subEvents = new UpgradestatusinfoDryrunInfoUpgradeEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
  public putSubEvents(value: UpgradestatusinfoDryrunInfoUpgradeEventsSubEvents[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoDryrunInfoUpgradeEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfoUpgradeEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoUpgradeEventsOutputReference {
    return new UpgradestatusinfoDryrunInfoUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoDryrunInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#operation Upgradestatusinfo#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#progress Upgradestatusinfo#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tasks_completed Upgradestatusinfo#tasks_completed}
  */
  readonly tasksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#total_tasks Upgradestatusinfo#total_tasks}
  */
  readonly totalTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#worker Upgradestatusinfo#worker}
  */
  readonly worker?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#params Upgradestatusinfo#params}
  */
  readonly params?: UpgradestatusinfoDryrunInfoParams[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: UpgradestatusinfoDryrunInfoState[] | cdktf.IResolvable;
  /**
  * upgrade_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#upgrade_events Upgradestatusinfo#upgrade_events}
  */
  readonly upgradeEvents?: UpgradestatusinfoDryrunInfoUpgradeEvents[] | cdktf.IResolvable;
}

export function upgradestatusinfoDryrunInfoToTerraform(struct?: UpgradestatusinfoDryrunInfo | cdktf.IResolvable): any {
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
    params: cdktf.listMapper(upgradestatusinfoDryrunInfoParamsToTerraform, true)(struct!.params),
    state: cdktf.listMapper(upgradestatusinfoDryrunInfoStateToTerraform, true)(struct!.state),
    upgrade_events: cdktf.listMapper(upgradestatusinfoDryrunInfoUpgradeEventsToTerraform, true)(struct!.upgradeEvents),
  }
}


export function upgradestatusinfoDryrunInfoToHclTerraform(struct?: UpgradestatusinfoDryrunInfo | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoDryrunInfoParamsList",
    },
    state: {
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoStateToHclTerraform, true)(struct!.state),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoDryrunInfoStateList",
    },
    upgrade_events: {
      value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoUpgradeEventsToHclTerraform, true)(struct!.upgradeEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoDryrunInfoUpgradeEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoDryrunInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoDryrunInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoDryrunInfo | cdktf.IResolvable | undefined) {
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
  private _params = new UpgradestatusinfoDryrunInfoParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: UpgradestatusinfoDryrunInfoParams[] | cdktf.IResolvable) {
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
  private _state = new UpgradestatusinfoDryrunInfoStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: UpgradestatusinfoDryrunInfoState[] | cdktf.IResolvable) {
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
  private _upgradeEvents = new UpgradestatusinfoDryrunInfoUpgradeEventsList(this, "upgrade_events", false);
  public get upgradeEvents() {
    return this._upgradeEvents;
  }
  public putUpgradeEvents(value: UpgradestatusinfoDryrunInfoUpgradeEvents[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoDryrunInfoList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoDryrunInfo[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoDryrunInfoOutputReference {
    return new UpgradestatusinfoDryrunInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistorySeUpgradeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#from_se_ref Upgradestatusinfo#from_se_ref}
  */
  readonly fromSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se Upgradestatusinfo#num_se}
  */
  readonly numSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_group Upgradestatusinfo#num_se_group}
  */
  readonly numSeGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs Upgradestatusinfo#num_vs}
  */
  readonly numVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ha_mode Upgradestatusinfo#se_group_ha_mode}
  */
  readonly seGroupHaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ref Upgradestatusinfo#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ref Upgradestatusinfo#se_ref}
  */
  readonly seRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#to_se_ref Upgradestatusinfo#to_se_ref}
  */
  readonly toSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_ref Upgradestatusinfo#vs_ref}
  */
  readonly vsRef?: string;
}

export function upgradestatusinfoHistorySeUpgradeEventsToTerraform(struct?: UpgradestatusinfoHistorySeUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_se_ref: cdktf.stringToTerraform(struct!.fromSeRef),
    num_se: cdktf.stringToTerraform(struct!.numSe),
    num_se_group: cdktf.stringToTerraform(struct!.numSeGroup),
    num_vs: cdktf.stringToTerraform(struct!.numVs),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    se_group_ha_mode: cdktf.stringToTerraform(struct!.seGroupHaMode),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    se_ref: cdktf.stringToTerraform(struct!.seRef),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    task: cdktf.stringToTerraform(struct!.task),
    to_se_ref: cdktf.stringToTerraform(struct!.toSeRef),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vs_ref: cdktf.stringToTerraform(struct!.vsRef),
  }
}


export function upgradestatusinfoHistorySeUpgradeEventsToHclTerraform(struct?: UpgradestatusinfoHistorySeUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.fromSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se: {
      value: cdktf.stringToHclTerraform(struct!.numSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_group: {
      value: cdktf.stringToHclTerraform(struct!.numSeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs: {
      value: cdktf.stringToHclTerraform(struct!.numVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.seGroupHaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRef),
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
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.toSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_ref: {
      value: cdktf.stringToHclTerraform(struct!.vsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistorySeUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistorySeUpgradeEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSeRef = this._fromSeRef;
    }
    if (this._numSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSe = this._numSe;
    }
    if (this._numSeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeGroup = this._numSeGroup;
    }
    if (this._numVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVs = this._numVs;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._seGroupHaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupHaMode = this._seGroupHaMode;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._seRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRef = this._seRef;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._toSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.toSeRef = this._toSeRef;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsRef = this._vsRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoHistorySeUpgradeEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromSeRef = undefined;
      this._numSe = undefined;
      this._numSeGroup = undefined;
      this._numVs = undefined;
      this._reason = undefined;
      this._seGroupHaMode = undefined;
      this._seGroupRef = undefined;
      this._seRef = undefined;
      this._subTasks = undefined;
      this._task = undefined;
      this._toSeRef = undefined;
      this._trafficStatus = undefined;
      this._vsRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromSeRef = value.fromSeRef;
      this._numSe = value.numSe;
      this._numSeGroup = value.numSeGroup;
      this._numVs = value.numVs;
      this._reason = value.reason;
      this._seGroupHaMode = value.seGroupHaMode;
      this._seGroupRef = value.seGroupRef;
      this._seRef = value.seRef;
      this._subTasks = value.subTasks;
      this._task = value.task;
      this._toSeRef = value.toSeRef;
      this._trafficStatus = value.trafficStatus;
      this._vsRef = value.vsRef;
    }
  }

  // from_se_ref - computed: true, optional: true, required: false
  private _fromSeRef?: string; 
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }
  public set fromSeRef(value: string) {
    this._fromSeRef = value;
  }
  public resetFromSeRef() {
    this._fromSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSeRefInput() {
    return this._fromSeRef;
  }

  // num_se - computed: true, optional: true, required: false
  private _numSe?: string; 
  public get numSe() {
    return this.getStringAttribute('num_se');
  }
  public set numSe(value: string) {
    this._numSe = value;
  }
  public resetNumSe() {
    this._numSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeInput() {
    return this._numSe;
  }

  // num_se_group - computed: true, optional: true, required: false
  private _numSeGroup?: string; 
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }
  public set numSeGroup(value: string) {
    this._numSeGroup = value;
  }
  public resetNumSeGroup() {
    this._numSeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeGroupInput() {
    return this._numSeGroup;
  }

  // num_vs - computed: true, optional: true, required: false
  private _numVs?: string; 
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }
  public set numVs(value: string) {
    this._numVs = value;
  }
  public resetNumVs() {
    this._numVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsInput() {
    return this._numVs;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // se_group_ha_mode - computed: true, optional: true, required: false
  private _seGroupHaMode?: string; 
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }
  public set seGroupHaMode(value: string) {
    this._seGroupHaMode = value;
  }
  public resetSeGroupHaMode() {
    this._seGroupHaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupHaModeInput() {
    return this._seGroupHaMode;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // se_ref - computed: true, optional: true, required: false
  private _seRef?: string; 
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }
  public set seRef(value: string) {
    this._seRef = value;
  }
  public resetSeRef() {
    this._seRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRefInput() {
    return this._seRef;
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

  // to_se_ref - computed: true, optional: true, required: false
  private _toSeRef?: string; 
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }
  public set toSeRef(value: string) {
    this._toSeRef = value;
  }
  public resetToSeRef() {
    this._toSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSeRefInput() {
    return this._toSeRef;
  }

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vs_ref - computed: true, optional: true, required: false
  private _vsRef?: string; 
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
  public set vsRef(value: string) {
    this._vsRef = value;
  }
  public resetVsRef() {
    this._vsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsRefInput() {
    return this._vsRef;
  }
}

export class UpgradestatusinfoHistorySeUpgradeEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistorySeUpgradeEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistorySeUpgradeEventsOutputReference {
    return new UpgradestatusinfoHistorySeUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistorySegStatusSeUpgradeErrors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#from_se_ref Upgradestatusinfo#from_se_ref}
  */
  readonly fromSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se Upgradestatusinfo#num_se}
  */
  readonly numSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_group Upgradestatusinfo#num_se_group}
  */
  readonly numSeGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs Upgradestatusinfo#num_vs}
  */
  readonly numVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ha_mode Upgradestatusinfo#se_group_ha_mode}
  */
  readonly seGroupHaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ref Upgradestatusinfo#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ref Upgradestatusinfo#se_ref}
  */
  readonly seRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#to_se_ref Upgradestatusinfo#to_se_ref}
  */
  readonly toSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_ref Upgradestatusinfo#vs_ref}
  */
  readonly vsRef?: string;
}

export function upgradestatusinfoHistorySegStatusSeUpgradeErrorsToTerraform(struct?: UpgradestatusinfoHistorySegStatusSeUpgradeErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_se_ref: cdktf.stringToTerraform(struct!.fromSeRef),
    num_se: cdktf.stringToTerraform(struct!.numSe),
    num_se_group: cdktf.stringToTerraform(struct!.numSeGroup),
    num_vs: cdktf.stringToTerraform(struct!.numVs),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    se_group_ha_mode: cdktf.stringToTerraform(struct!.seGroupHaMode),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    se_ref: cdktf.stringToTerraform(struct!.seRef),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    task: cdktf.stringToTerraform(struct!.task),
    to_se_ref: cdktf.stringToTerraform(struct!.toSeRef),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vs_ref: cdktf.stringToTerraform(struct!.vsRef),
  }
}


export function upgradestatusinfoHistorySegStatusSeUpgradeErrorsToHclTerraform(struct?: UpgradestatusinfoHistorySegStatusSeUpgradeErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.fromSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se: {
      value: cdktf.stringToHclTerraform(struct!.numSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_group: {
      value: cdktf.stringToHclTerraform(struct!.numSeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs: {
      value: cdktf.stringToHclTerraform(struct!.numVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.seGroupHaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRef),
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
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.toSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_ref: {
      value: cdktf.stringToHclTerraform(struct!.vsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistorySegStatusSeUpgradeErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistorySegStatusSeUpgradeErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSeRef = this._fromSeRef;
    }
    if (this._numSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSe = this._numSe;
    }
    if (this._numSeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeGroup = this._numSeGroup;
    }
    if (this._numVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVs = this._numVs;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._seGroupHaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupHaMode = this._seGroupHaMode;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._seRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRef = this._seRef;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._toSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.toSeRef = this._toSeRef;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsRef = this._vsRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoHistorySegStatusSeUpgradeErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromSeRef = undefined;
      this._numSe = undefined;
      this._numSeGroup = undefined;
      this._numVs = undefined;
      this._reason = undefined;
      this._seGroupHaMode = undefined;
      this._seGroupRef = undefined;
      this._seRef = undefined;
      this._subTasks = undefined;
      this._task = undefined;
      this._toSeRef = undefined;
      this._trafficStatus = undefined;
      this._vsRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromSeRef = value.fromSeRef;
      this._numSe = value.numSe;
      this._numSeGroup = value.numSeGroup;
      this._numVs = value.numVs;
      this._reason = value.reason;
      this._seGroupHaMode = value.seGroupHaMode;
      this._seGroupRef = value.seGroupRef;
      this._seRef = value.seRef;
      this._subTasks = value.subTasks;
      this._task = value.task;
      this._toSeRef = value.toSeRef;
      this._trafficStatus = value.trafficStatus;
      this._vsRef = value.vsRef;
    }
  }

  // from_se_ref - computed: true, optional: true, required: false
  private _fromSeRef?: string; 
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }
  public set fromSeRef(value: string) {
    this._fromSeRef = value;
  }
  public resetFromSeRef() {
    this._fromSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSeRefInput() {
    return this._fromSeRef;
  }

  // num_se - computed: true, optional: true, required: false
  private _numSe?: string; 
  public get numSe() {
    return this.getStringAttribute('num_se');
  }
  public set numSe(value: string) {
    this._numSe = value;
  }
  public resetNumSe() {
    this._numSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeInput() {
    return this._numSe;
  }

  // num_se_group - computed: true, optional: true, required: false
  private _numSeGroup?: string; 
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }
  public set numSeGroup(value: string) {
    this._numSeGroup = value;
  }
  public resetNumSeGroup() {
    this._numSeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeGroupInput() {
    return this._numSeGroup;
  }

  // num_vs - computed: true, optional: true, required: false
  private _numVs?: string; 
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }
  public set numVs(value: string) {
    this._numVs = value;
  }
  public resetNumVs() {
    this._numVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsInput() {
    return this._numVs;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // se_group_ha_mode - computed: true, optional: true, required: false
  private _seGroupHaMode?: string; 
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }
  public set seGroupHaMode(value: string) {
    this._seGroupHaMode = value;
  }
  public resetSeGroupHaMode() {
    this._seGroupHaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupHaModeInput() {
    return this._seGroupHaMode;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // se_ref - computed: true, optional: true, required: false
  private _seRef?: string; 
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }
  public set seRef(value: string) {
    this._seRef = value;
  }
  public resetSeRef() {
    this._seRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRefInput() {
    return this._seRef;
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

  // to_se_ref - computed: true, optional: true, required: false
  private _toSeRef?: string; 
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }
  public set toSeRef(value: string) {
    this._toSeRef = value;
  }
  public resetToSeRef() {
    this._toSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSeRefInput() {
    return this._toSeRef;
  }

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vs_ref - computed: true, optional: true, required: false
  private _vsRef?: string; 
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
  public set vsRef(value: string) {
    this._vsRef = value;
  }
  public resetVsRef() {
    this._vsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsRefInput() {
    return this._vsRef;
  }
}

export class UpgradestatusinfoHistorySegStatusSeUpgradeErrorsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistorySegStatusSeUpgradeErrors[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistorySegStatusSeUpgradeErrorsOutputReference {
    return new UpgradestatusinfoHistorySegStatusSeUpgradeErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#secs Upgradestatusinfo#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#usecs Upgradestatusinfo#usecs}
  */
  readonly usecs: string;
}

export function upgradestatusinfoHistorySegStatusVsErrorsEventTimestampToTerraform(struct?: UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatusinfoHistorySegStatusVsErrorsEventTimestampToHclTerraform(struct?: UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoHistorySegStatusVsErrorsEventTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoHistorySegStatusVsErrorsEventTimestampList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistorySegStatusVsErrorsEventTimestampOutputReference {
    return new UpgradestatusinfoHistorySegStatusVsErrorsEventTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistorySegStatusVsErrors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ha_mode Upgradestatusinfo#se_group_ha_mode}
  */
  readonly seGroupHaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ref Upgradestatusinfo#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ref Upgradestatusinfo#se_ref}
  */
  readonly seRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tenant_ref Upgradestatusinfo#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vip_id Upgradestatusinfo#vip_id}
  */
  readonly vipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_ref Upgradestatusinfo#vs_ref}
  */
  readonly vsRef?: string;
  /**
  * event_timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#event_timestamp Upgradestatusinfo#event_timestamp}
  */
  readonly eventTimestamp?: UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistorySegStatusVsErrorsToTerraform(struct?: UpgradestatusinfoHistorySegStatusVsErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    se_group_ha_mode: cdktf.stringToTerraform(struct!.seGroupHaMode),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    se_ref: cdktf.stringToTerraform(struct!.seRef),
    tenant_ref: cdktf.stringToTerraform(struct!.tenantRef),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vip_id: cdktf.stringToTerraform(struct!.vipId),
    vs_ref: cdktf.stringToTerraform(struct!.vsRef),
    event_timestamp: cdktf.listMapper(upgradestatusinfoHistorySegStatusVsErrorsEventTimestampToTerraform, true)(struct!.eventTimestamp),
  }
}


export function upgradestatusinfoHistorySegStatusVsErrorsToHclTerraform(struct?: UpgradestatusinfoHistorySegStatusVsErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.seGroupHaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_ref: {
      value: cdktf.stringToHclTerraform(struct!.tenantRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_id: {
      value: cdktf.stringToHclTerraform(struct!.vipId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_ref: {
      value: cdktf.stringToHclTerraform(struct!.vsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_timestamp: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistorySegStatusVsErrorsEventTimestampToHclTerraform, true)(struct!.eventTimestamp),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoHistorySegStatusVsErrorsEventTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistorySegStatusVsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistorySegStatusVsErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._seGroupHaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupHaMode = this._seGroupHaMode;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._seRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRef = this._seRef;
    }
    if (this._tenantRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRef = this._tenantRef;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vipId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipId = this._vipId;
    }
    if (this._vsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsRef = this._vsRef;
    }
    if (this._eventTimestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimestamp = this._eventTimestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoHistorySegStatusVsErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._seGroupHaMode = undefined;
      this._seGroupRef = undefined;
      this._seRef = undefined;
      this._tenantRef = undefined;
      this._trafficStatus = undefined;
      this._vipId = undefined;
      this._vsRef = undefined;
      this._eventTimestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._seGroupHaMode = value.seGroupHaMode;
      this._seGroupRef = value.seGroupRef;
      this._seRef = value.seRef;
      this._tenantRef = value.tenantRef;
      this._trafficStatus = value.trafficStatus;
      this._vipId = value.vipId;
      this._vsRef = value.vsRef;
      this._eventTimestamp.internalValue = value.eventTimestamp;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // se_group_ha_mode - computed: true, optional: true, required: false
  private _seGroupHaMode?: string; 
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }
  public set seGroupHaMode(value: string) {
    this._seGroupHaMode = value;
  }
  public resetSeGroupHaMode() {
    this._seGroupHaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupHaModeInput() {
    return this._seGroupHaMode;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // se_ref - computed: true, optional: true, required: false
  private _seRef?: string; 
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }
  public set seRef(value: string) {
    this._seRef = value;
  }
  public resetSeRef() {
    this._seRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRefInput() {
    return this._seRef;
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

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vip_id - computed: true, optional: true, required: false
  private _vipId?: string; 
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }
  public set vipId(value: string) {
    this._vipId = value;
  }
  public resetVipId() {
    this._vipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipIdInput() {
    return this._vipId;
  }

  // vs_ref - computed: true, optional: true, required: false
  private _vsRef?: string; 
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
  public set vsRef(value: string) {
    this._vsRef = value;
  }
  public resetVsRef() {
    this._vsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsRefInput() {
    return this._vsRef;
  }

  // event_timestamp - computed: false, optional: true, required: false
  private _eventTimestamp = new UpgradestatusinfoHistorySegStatusVsErrorsEventTimestampList(this, "event_timestamp", true);
  public get eventTimestamp() {
    return this._eventTimestamp;
  }
  public putEventTimestamp(value: UpgradestatusinfoHistorySegStatusVsErrorsEventTimestamp[] | cdktf.IResolvable) {
    this._eventTimestamp.internalValue = value;
  }
  public resetEventTimestamp() {
    this._eventTimestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimestampInput() {
    return this._eventTimestamp.internalValue;
  }
}

export class UpgradestatusinfoHistorySegStatusVsErrorsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistorySegStatusVsErrors[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistorySegStatusVsErrorsOutputReference {
    return new UpgradestatusinfoHistorySegStatusVsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistorySegStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#controller_version Upgradestatusinfo#controller_version}
  */
  readonly controllerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disrupted_vs_ref Upgradestatusinfo#disrupted_vs_ref}
  */
  readonly disruptedVsRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#enqueue_time Upgradestatusinfo#enqueue_time}
  */
  readonly enqueueTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ha_mode Upgradestatusinfo#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#in_progress Upgradestatusinfo#in_progress}
  */
  readonly inProgress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#notes Upgradestatusinfo#notes}
  */
  readonly notes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se Upgradestatusinfo#num_se}
  */
  readonly numSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_with_no_vs Upgradestatusinfo#num_se_with_no_vs}
  */
  readonly numSeWithNoVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_with_vs_not_scaledout Upgradestatusinfo#num_se_with_vs_not_scaledout}
  */
  readonly numSeWithVsNotScaledout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_with_vs_scaledout Upgradestatusinfo#num_se_with_vs_scaledout}
  */
  readonly numSeWithVsScaledout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs Upgradestatusinfo#num_vs}
  */
  readonly numVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs_disrupted Upgradestatusinfo#num_vs_disrupted}
  */
  readonly numVsDisrupted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#progress Upgradestatusinfo#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#request_time Upgradestatusinfo#request_time}
  */
  readonly requestTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_already_upgraded_at_start Upgradestatusinfo#se_already_upgraded_at_start}
  */
  readonly seAlreadyUpgradedAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_disconnected_at_start Upgradestatusinfo#se_disconnected_at_start}
  */
  readonly seDisconnectedAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_name Upgradestatusinfo#se_group_name}
  */
  readonly seGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_uuid Upgradestatusinfo#se_group_uuid}
  */
  readonly seGroupUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ip_missing_at_start Upgradestatusinfo#se_ip_missing_at_start}
  */
  readonly seIpMissingAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_poweredoff_at_start Upgradestatusinfo#se_poweredoff_at_start}
  */
  readonly sePoweredoffAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_reboot_in_progress_ref Upgradestatusinfo#se_reboot_in_progress_ref}
  */
  readonly seRebootInProgressRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_completed Upgradestatusinfo#se_upgrade_completed}
  */
  readonly seUpgradeCompleted?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_failed Upgradestatusinfo#se_upgrade_failed}
  */
  readonly seUpgradeFailed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_in_progress Upgradestatusinfo#se_upgrade_in_progress}
  */
  readonly seUpgradeInProgress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_not_started Upgradestatusinfo#se_upgrade_not_started}
  */
  readonly seUpgradeNotStarted?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_skip_suspended Upgradestatusinfo#se_upgrade_skip_suspended}
  */
  readonly seUpgradeSkipSuspended?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_suspended Upgradestatusinfo#se_upgrade_suspended}
  */
  readonly seUpgradeSuspended?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_with_no_vs Upgradestatusinfo#se_with_no_vs}
  */
  readonly seWithNoVs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_with_vs_not_scaledout Upgradestatusinfo#se_with_vs_not_scaledout}
  */
  readonly seWithVsNotScaledout?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_with_vs_scaledout Upgradestatusinfo#se_with_vs_scaledout}
  */
  readonly seWithVsScaledout?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tenant_ref Upgradestatusinfo#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#thread Upgradestatusinfo#thread}
  */
  readonly thread?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_migrate_in_progress_ref Upgradestatusinfo#vs_migrate_in_progress_ref}
  */
  readonly vsMigrateInProgressRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_scalein_in_progress_ref Upgradestatusinfo#vs_scalein_in_progress_ref}
  */
  readonly vsScaleinInProgressRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_scaleout_in_progress_ref Upgradestatusinfo#vs_scaleout_in_progress_ref}
  */
  readonly vsScaleoutInProgressRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#worker Upgradestatusinfo#worker}
  */
  readonly worker?: string;
  /**
  * se_upgrade_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_errors Upgradestatusinfo#se_upgrade_errors}
  */
  readonly seUpgradeErrors?: UpgradestatusinfoHistorySegStatusSeUpgradeErrors[] | cdktf.IResolvable;
  /**
  * vs_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_errors Upgradestatusinfo#vs_errors}
  */
  readonly vsErrors?: UpgradestatusinfoHistorySegStatusVsErrors[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistorySegStatusToTerraform(struct?: UpgradestatusinfoHistorySegStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_version: cdktf.stringToTerraform(struct!.controllerVersion),
    disrupted_vs_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disruptedVsRef),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    enqueue_time: cdktf.stringToTerraform(struct!.enqueueTime),
    ha_mode: cdktf.stringToTerraform(struct!.haMode),
    in_progress: cdktf.stringToTerraform(struct!.inProgress),
    notes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notes),
    num_se: cdktf.stringToTerraform(struct!.numSe),
    num_se_with_no_vs: cdktf.stringToTerraform(struct!.numSeWithNoVs),
    num_se_with_vs_not_scaledout: cdktf.stringToTerraform(struct!.numSeWithVsNotScaledout),
    num_se_with_vs_scaledout: cdktf.stringToTerraform(struct!.numSeWithVsScaledout),
    num_vs: cdktf.stringToTerraform(struct!.numVs),
    num_vs_disrupted: cdktf.stringToTerraform(struct!.numVsDisrupted),
    progress: cdktf.stringToTerraform(struct!.progress),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    request_time: cdktf.stringToTerraform(struct!.requestTime),
    se_already_upgraded_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seAlreadyUpgradedAtStart),
    se_disconnected_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seDisconnectedAtStart),
    se_group_name: cdktf.stringToTerraform(struct!.seGroupName),
    se_group_uuid: cdktf.stringToTerraform(struct!.seGroupUuid),
    se_ip_missing_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seIpMissingAtStart),
    se_poweredoff_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sePoweredoffAtStart),
    se_reboot_in_progress_ref: cdktf.stringToTerraform(struct!.seRebootInProgressRef),
    se_upgrade_completed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeCompleted),
    se_upgrade_failed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeFailed),
    se_upgrade_in_progress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeInProgress),
    se_upgrade_not_started: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeNotStarted),
    se_upgrade_skip_suspended: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeSkipSuspended),
    se_upgrade_suspended: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeSuspended),
    se_with_no_vs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seWithNoVs),
    se_with_vs_not_scaledout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seWithVsNotScaledout),
    se_with_vs_scaledout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seWithVsScaledout),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    tenant_ref: cdktf.stringToTerraform(struct!.tenantRef),
    thread: cdktf.stringToTerraform(struct!.thread),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vs_migrate_in_progress_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vsMigrateInProgressRef),
    vs_scalein_in_progress_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vsScaleinInProgressRef),
    vs_scaleout_in_progress_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vsScaleoutInProgressRef),
    worker: cdktf.stringToTerraform(struct!.worker),
    se_upgrade_errors: cdktf.listMapper(upgradestatusinfoHistorySegStatusSeUpgradeErrorsToTerraform, true)(struct!.seUpgradeErrors),
    vs_errors: cdktf.listMapper(upgradestatusinfoHistorySegStatusVsErrorsToTerraform, true)(struct!.vsErrors),
  }
}


export function upgradestatusinfoHistorySegStatusToHclTerraform(struct?: UpgradestatusinfoHistorySegStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_version: {
      value: cdktf.stringToHclTerraform(struct!.controllerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disrupted_vs_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disruptedVsRef),
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
    enqueue_time: {
      value: cdktf.stringToHclTerraform(struct!.enqueueTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.haMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_progress: {
      value: cdktf.stringToHclTerraform(struct!.inProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    num_se: {
      value: cdktf.stringToHclTerraform(struct!.numSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_with_no_vs: {
      value: cdktf.stringToHclTerraform(struct!.numSeWithNoVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_with_vs_not_scaledout: {
      value: cdktf.stringToHclTerraform(struct!.numSeWithVsNotScaledout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_with_vs_scaledout: {
      value: cdktf.stringToHclTerraform(struct!.numSeWithVsScaledout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs: {
      value: cdktf.stringToHclTerraform(struct!.numVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs_disrupted: {
      value: cdktf.stringToHclTerraform(struct!.numVsDisrupted),
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
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_time: {
      value: cdktf.stringToHclTerraform(struct!.requestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_already_upgraded_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seAlreadyUpgradedAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_disconnected_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seDisconnectedAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_name: {
      value: cdktf.stringToHclTerraform(struct!.seGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_uuid: {
      value: cdktf.stringToHclTerraform(struct!.seGroupUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ip_missing_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seIpMissingAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_poweredoff_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sePoweredoffAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_reboot_in_progress_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRebootInProgressRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_upgrade_completed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeCompleted),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_failed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeFailed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_in_progress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeInProgress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_not_started: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeNotStarted),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_skip_suspended: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeSkipSuspended),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_suspended: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeSuspended),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_with_no_vs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seWithNoVs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_with_vs_not_scaledout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seWithVsNotScaledout),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_with_vs_scaledout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seWithVsScaledout),
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
    tenant_ref: {
      value: cdktf.stringToHclTerraform(struct!.tenantRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thread: {
      value: cdktf.stringToHclTerraform(struct!.thread),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_migrate_in_progress_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vsMigrateInProgressRef),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vs_scalein_in_progress_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vsScaleinInProgressRef),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vs_scaleout_in_progress_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vsScaleoutInProgressRef),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker: {
      value: cdktf.stringToHclTerraform(struct!.worker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_upgrade_errors: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistorySegStatusSeUpgradeErrorsToHclTerraform, true)(struct!.seUpgradeErrors),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoHistorySegStatusSeUpgradeErrorsList",
    },
    vs_errors: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistorySegStatusVsErrorsToHclTerraform, true)(struct!.vsErrors),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoHistorySegStatusVsErrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistorySegStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistorySegStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVersion = this._controllerVersion;
    }
    if (this._disruptedVsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptedVsRef = this._disruptedVsRef;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._enqueueTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueTime = this._enqueueTime;
    }
    if (this._haMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.haMode = this._haMode;
    }
    if (this._inProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inProgress = this._inProgress;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._numSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSe = this._numSe;
    }
    if (this._numSeWithNoVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeWithNoVs = this._numSeWithNoVs;
    }
    if (this._numSeWithVsNotScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeWithVsNotScaledout = this._numSeWithVsNotScaledout;
    }
    if (this._numSeWithVsScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeWithVsScaledout = this._numSeWithVsScaledout;
    }
    if (this._numVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVs = this._numVs;
    }
    if (this._numVsDisrupted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVsDisrupted = this._numVsDisrupted;
    }
    if (this._progress !== undefined) {
      hasAnyValues = true;
      internalValueResult.progress = this._progress;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._requestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTime = this._requestTime;
    }
    if (this._seAlreadyUpgradedAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAlreadyUpgradedAtStart = this._seAlreadyUpgradedAtStart;
    }
    if (this._seDisconnectedAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDisconnectedAtStart = this._seDisconnectedAtStart;
    }
    if (this._seGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupName = this._seGroupName;
    }
    if (this._seGroupUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupUuid = this._seGroupUuid;
    }
    if (this._seIpMissingAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.seIpMissingAtStart = this._seIpMissingAtStart;
    }
    if (this._sePoweredoffAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sePoweredoffAtStart = this._sePoweredoffAtStart;
    }
    if (this._seRebootInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRebootInProgressRef = this._seRebootInProgressRef;
    }
    if (this._seUpgradeCompleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeCompleted = this._seUpgradeCompleted;
    }
    if (this._seUpgradeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeFailed = this._seUpgradeFailed;
    }
    if (this._seUpgradeInProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeInProgress = this._seUpgradeInProgress;
    }
    if (this._seUpgradeNotStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeNotStarted = this._seUpgradeNotStarted;
    }
    if (this._seUpgradeSkipSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeSkipSuspended = this._seUpgradeSkipSuspended;
    }
    if (this._seUpgradeSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeSuspended = this._seUpgradeSuspended;
    }
    if (this._seWithNoVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.seWithNoVs = this._seWithNoVs;
    }
    if (this._seWithVsNotScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seWithVsNotScaledout = this._seWithVsNotScaledout;
    }
    if (this._seWithVsScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seWithVsScaledout = this._seWithVsScaledout;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tenantRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRef = this._tenantRef;
    }
    if (this._thread !== undefined) {
      hasAnyValues = true;
      internalValueResult.thread = this._thread;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vsMigrateInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsMigrateInProgressRef = this._vsMigrateInProgressRef;
    }
    if (this._vsScaleinInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsScaleinInProgressRef = this._vsScaleinInProgressRef;
    }
    if (this._vsScaleoutInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsScaleoutInProgressRef = this._vsScaleoutInProgressRef;
    }
    if (this._worker !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker;
    }
    if (this._seUpgradeErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeErrors = this._seUpgradeErrors?.internalValue;
    }
    if (this._vsErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsErrors = this._vsErrors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoHistorySegStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerVersion = undefined;
      this._disruptedVsRef = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._enqueueTime = undefined;
      this._haMode = undefined;
      this._inProgress = undefined;
      this._notes = undefined;
      this._numSe = undefined;
      this._numSeWithNoVs = undefined;
      this._numSeWithVsNotScaledout = undefined;
      this._numSeWithVsScaledout = undefined;
      this._numVs = undefined;
      this._numVsDisrupted = undefined;
      this._progress = undefined;
      this._reason = undefined;
      this._requestTime = undefined;
      this._seAlreadyUpgradedAtStart = undefined;
      this._seDisconnectedAtStart = undefined;
      this._seGroupName = undefined;
      this._seGroupUuid = undefined;
      this._seIpMissingAtStart = undefined;
      this._sePoweredoffAtStart = undefined;
      this._seRebootInProgressRef = undefined;
      this._seUpgradeCompleted = undefined;
      this._seUpgradeFailed = undefined;
      this._seUpgradeInProgress = undefined;
      this._seUpgradeNotStarted = undefined;
      this._seUpgradeSkipSuspended = undefined;
      this._seUpgradeSuspended = undefined;
      this._seWithNoVs = undefined;
      this._seWithVsNotScaledout = undefined;
      this._seWithVsScaledout = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._tenantRef = undefined;
      this._thread = undefined;
      this._trafficStatus = undefined;
      this._vsMigrateInProgressRef = undefined;
      this._vsScaleinInProgressRef = undefined;
      this._vsScaleoutInProgressRef = undefined;
      this._worker = undefined;
      this._seUpgradeErrors.internalValue = undefined;
      this._vsErrors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerVersion = value.controllerVersion;
      this._disruptedVsRef = value.disruptedVsRef;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._enqueueTime = value.enqueueTime;
      this._haMode = value.haMode;
      this._inProgress = value.inProgress;
      this._notes = value.notes;
      this._numSe = value.numSe;
      this._numSeWithNoVs = value.numSeWithNoVs;
      this._numSeWithVsNotScaledout = value.numSeWithVsNotScaledout;
      this._numSeWithVsScaledout = value.numSeWithVsScaledout;
      this._numVs = value.numVs;
      this._numVsDisrupted = value.numVsDisrupted;
      this._progress = value.progress;
      this._reason = value.reason;
      this._requestTime = value.requestTime;
      this._seAlreadyUpgradedAtStart = value.seAlreadyUpgradedAtStart;
      this._seDisconnectedAtStart = value.seDisconnectedAtStart;
      this._seGroupName = value.seGroupName;
      this._seGroupUuid = value.seGroupUuid;
      this._seIpMissingAtStart = value.seIpMissingAtStart;
      this._sePoweredoffAtStart = value.sePoweredoffAtStart;
      this._seRebootInProgressRef = value.seRebootInProgressRef;
      this._seUpgradeCompleted = value.seUpgradeCompleted;
      this._seUpgradeFailed = value.seUpgradeFailed;
      this._seUpgradeInProgress = value.seUpgradeInProgress;
      this._seUpgradeNotStarted = value.seUpgradeNotStarted;
      this._seUpgradeSkipSuspended = value.seUpgradeSkipSuspended;
      this._seUpgradeSuspended = value.seUpgradeSuspended;
      this._seWithNoVs = value.seWithNoVs;
      this._seWithVsNotScaledout = value.seWithVsNotScaledout;
      this._seWithVsScaledout = value.seWithVsScaledout;
      this._startTime = value.startTime;
      this._state = value.state;
      this._tenantRef = value.tenantRef;
      this._thread = value.thread;
      this._trafficStatus = value.trafficStatus;
      this._vsMigrateInProgressRef = value.vsMigrateInProgressRef;
      this._vsScaleinInProgressRef = value.vsScaleinInProgressRef;
      this._vsScaleoutInProgressRef = value.vsScaleoutInProgressRef;
      this._worker = value.worker;
      this._seUpgradeErrors.internalValue = value.seUpgradeErrors;
      this._vsErrors.internalValue = value.vsErrors;
    }
  }

  // controller_version - computed: true, optional: true, required: false
  private _controllerVersion?: string; 
  public get controllerVersion() {
    return this.getStringAttribute('controller_version');
  }
  public set controllerVersion(value: string) {
    this._controllerVersion = value;
  }
  public resetControllerVersion() {
    this._controllerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVersionInput() {
    return this._controllerVersion;
  }

  // disrupted_vs_ref - computed: false, optional: true, required: false
  private _disruptedVsRef?: string[]; 
  public get disruptedVsRef() {
    return this.getListAttribute('disrupted_vs_ref');
  }
  public set disruptedVsRef(value: string[]) {
    this._disruptedVsRef = value;
  }
  public resetDisruptedVsRef() {
    this._disruptedVsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptedVsRefInput() {
    return this._disruptedVsRef;
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

  // enqueue_time - computed: true, optional: true, required: false
  private _enqueueTime?: string; 
  public get enqueueTime() {
    return this.getStringAttribute('enqueue_time');
  }
  public set enqueueTime(value: string) {
    this._enqueueTime = value;
  }
  public resetEnqueueTime() {
    this._enqueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueTimeInput() {
    return this._enqueueTime;
  }

  // ha_mode - computed: true, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // in_progress - computed: true, optional: true, required: false
  private _inProgress?: string; 
  public get inProgress() {
    return this.getStringAttribute('in_progress');
  }
  public set inProgress(value: string) {
    this._inProgress = value;
  }
  public resetInProgress() {
    this._inProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProgressInput() {
    return this._inProgress;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string[]; 
  public get notes() {
    return this.getListAttribute('notes');
  }
  public set notes(value: string[]) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // num_se - computed: true, optional: true, required: false
  private _numSe?: string; 
  public get numSe() {
    return this.getStringAttribute('num_se');
  }
  public set numSe(value: string) {
    this._numSe = value;
  }
  public resetNumSe() {
    this._numSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeInput() {
    return this._numSe;
  }

  // num_se_with_no_vs - computed: true, optional: true, required: false
  private _numSeWithNoVs?: string; 
  public get numSeWithNoVs() {
    return this.getStringAttribute('num_se_with_no_vs');
  }
  public set numSeWithNoVs(value: string) {
    this._numSeWithNoVs = value;
  }
  public resetNumSeWithNoVs() {
    this._numSeWithNoVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeWithNoVsInput() {
    return this._numSeWithNoVs;
  }

  // num_se_with_vs_not_scaledout - computed: true, optional: true, required: false
  private _numSeWithVsNotScaledout?: string; 
  public get numSeWithVsNotScaledout() {
    return this.getStringAttribute('num_se_with_vs_not_scaledout');
  }
  public set numSeWithVsNotScaledout(value: string) {
    this._numSeWithVsNotScaledout = value;
  }
  public resetNumSeWithVsNotScaledout() {
    this._numSeWithVsNotScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeWithVsNotScaledoutInput() {
    return this._numSeWithVsNotScaledout;
  }

  // num_se_with_vs_scaledout - computed: true, optional: true, required: false
  private _numSeWithVsScaledout?: string; 
  public get numSeWithVsScaledout() {
    return this.getStringAttribute('num_se_with_vs_scaledout');
  }
  public set numSeWithVsScaledout(value: string) {
    this._numSeWithVsScaledout = value;
  }
  public resetNumSeWithVsScaledout() {
    this._numSeWithVsScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeWithVsScaledoutInput() {
    return this._numSeWithVsScaledout;
  }

  // num_vs - computed: true, optional: true, required: false
  private _numVs?: string; 
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }
  public set numVs(value: string) {
    this._numVs = value;
  }
  public resetNumVs() {
    this._numVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsInput() {
    return this._numVs;
  }

  // num_vs_disrupted - computed: true, optional: true, required: false
  private _numVsDisrupted?: string; 
  public get numVsDisrupted() {
    return this.getStringAttribute('num_vs_disrupted');
  }
  public set numVsDisrupted(value: string) {
    this._numVsDisrupted = value;
  }
  public resetNumVsDisrupted() {
    this._numVsDisrupted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsDisruptedInput() {
    return this._numVsDisrupted;
  }

  // progress - computed: true, optional: true, required: false
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

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // request_time - computed: true, optional: true, required: false
  private _requestTime?: string; 
  public get requestTime() {
    return this.getStringAttribute('request_time');
  }
  public set requestTime(value: string) {
    this._requestTime = value;
  }
  public resetRequestTime() {
    this._requestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeInput() {
    return this._requestTime;
  }

  // se_already_upgraded_at_start - computed: false, optional: true, required: false
  private _seAlreadyUpgradedAtStart?: string[]; 
  public get seAlreadyUpgradedAtStart() {
    return this.getListAttribute('se_already_upgraded_at_start');
  }
  public set seAlreadyUpgradedAtStart(value: string[]) {
    this._seAlreadyUpgradedAtStart = value;
  }
  public resetSeAlreadyUpgradedAtStart() {
    this._seAlreadyUpgradedAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAlreadyUpgradedAtStartInput() {
    return this._seAlreadyUpgradedAtStart;
  }

  // se_disconnected_at_start - computed: false, optional: true, required: false
  private _seDisconnectedAtStart?: string[]; 
  public get seDisconnectedAtStart() {
    return this.getListAttribute('se_disconnected_at_start');
  }
  public set seDisconnectedAtStart(value: string[]) {
    this._seDisconnectedAtStart = value;
  }
  public resetSeDisconnectedAtStart() {
    this._seDisconnectedAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDisconnectedAtStartInput() {
    return this._seDisconnectedAtStart;
  }

  // se_group_name - computed: true, optional: true, required: false
  private _seGroupName?: string; 
  public get seGroupName() {
    return this.getStringAttribute('se_group_name');
  }
  public set seGroupName(value: string) {
    this._seGroupName = value;
  }
  public resetSeGroupName() {
    this._seGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupNameInput() {
    return this._seGroupName;
  }

  // se_group_uuid - computed: true, optional: true, required: false
  private _seGroupUuid?: string; 
  public get seGroupUuid() {
    return this.getStringAttribute('se_group_uuid');
  }
  public set seGroupUuid(value: string) {
    this._seGroupUuid = value;
  }
  public resetSeGroupUuid() {
    this._seGroupUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupUuidInput() {
    return this._seGroupUuid;
  }

  // se_ip_missing_at_start - computed: false, optional: true, required: false
  private _seIpMissingAtStart?: string[]; 
  public get seIpMissingAtStart() {
    return this.getListAttribute('se_ip_missing_at_start');
  }
  public set seIpMissingAtStart(value: string[]) {
    this._seIpMissingAtStart = value;
  }
  public resetSeIpMissingAtStart() {
    this._seIpMissingAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seIpMissingAtStartInput() {
    return this._seIpMissingAtStart;
  }

  // se_poweredoff_at_start - computed: false, optional: true, required: false
  private _sePoweredoffAtStart?: string[]; 
  public get sePoweredoffAtStart() {
    return this.getListAttribute('se_poweredoff_at_start');
  }
  public set sePoweredoffAtStart(value: string[]) {
    this._sePoweredoffAtStart = value;
  }
  public resetSePoweredoffAtStart() {
    this._sePoweredoffAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePoweredoffAtStartInput() {
    return this._sePoweredoffAtStart;
  }

  // se_reboot_in_progress_ref - computed: true, optional: true, required: false
  private _seRebootInProgressRef?: string; 
  public get seRebootInProgressRef() {
    return this.getStringAttribute('se_reboot_in_progress_ref');
  }
  public set seRebootInProgressRef(value: string) {
    this._seRebootInProgressRef = value;
  }
  public resetSeRebootInProgressRef() {
    this._seRebootInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRebootInProgressRefInput() {
    return this._seRebootInProgressRef;
  }

  // se_upgrade_completed - computed: false, optional: true, required: false
  private _seUpgradeCompleted?: string[]; 
  public get seUpgradeCompleted() {
    return this.getListAttribute('se_upgrade_completed');
  }
  public set seUpgradeCompleted(value: string[]) {
    this._seUpgradeCompleted = value;
  }
  public resetSeUpgradeCompleted() {
    this._seUpgradeCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeCompletedInput() {
    return this._seUpgradeCompleted;
  }

  // se_upgrade_failed - computed: false, optional: true, required: false
  private _seUpgradeFailed?: string[]; 
  public get seUpgradeFailed() {
    return this.getListAttribute('se_upgrade_failed');
  }
  public set seUpgradeFailed(value: string[]) {
    this._seUpgradeFailed = value;
  }
  public resetSeUpgradeFailed() {
    this._seUpgradeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeFailedInput() {
    return this._seUpgradeFailed;
  }

  // se_upgrade_in_progress - computed: false, optional: true, required: false
  private _seUpgradeInProgress?: string[]; 
  public get seUpgradeInProgress() {
    return this.getListAttribute('se_upgrade_in_progress');
  }
  public set seUpgradeInProgress(value: string[]) {
    this._seUpgradeInProgress = value;
  }
  public resetSeUpgradeInProgress() {
    this._seUpgradeInProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeInProgressInput() {
    return this._seUpgradeInProgress;
  }

  // se_upgrade_not_started - computed: false, optional: true, required: false
  private _seUpgradeNotStarted?: string[]; 
  public get seUpgradeNotStarted() {
    return this.getListAttribute('se_upgrade_not_started');
  }
  public set seUpgradeNotStarted(value: string[]) {
    this._seUpgradeNotStarted = value;
  }
  public resetSeUpgradeNotStarted() {
    this._seUpgradeNotStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeNotStartedInput() {
    return this._seUpgradeNotStarted;
  }

  // se_upgrade_skip_suspended - computed: false, optional: true, required: false
  private _seUpgradeSkipSuspended?: string[]; 
  public get seUpgradeSkipSuspended() {
    return this.getListAttribute('se_upgrade_skip_suspended');
  }
  public set seUpgradeSkipSuspended(value: string[]) {
    this._seUpgradeSkipSuspended = value;
  }
  public resetSeUpgradeSkipSuspended() {
    this._seUpgradeSkipSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeSkipSuspendedInput() {
    return this._seUpgradeSkipSuspended;
  }

  // se_upgrade_suspended - computed: false, optional: true, required: false
  private _seUpgradeSuspended?: string[]; 
  public get seUpgradeSuspended() {
    return this.getListAttribute('se_upgrade_suspended');
  }
  public set seUpgradeSuspended(value: string[]) {
    this._seUpgradeSuspended = value;
  }
  public resetSeUpgradeSuspended() {
    this._seUpgradeSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeSuspendedInput() {
    return this._seUpgradeSuspended;
  }

  // se_with_no_vs - computed: false, optional: true, required: false
  private _seWithNoVs?: string[]; 
  public get seWithNoVs() {
    return this.getListAttribute('se_with_no_vs');
  }
  public set seWithNoVs(value: string[]) {
    this._seWithNoVs = value;
  }
  public resetSeWithNoVs() {
    this._seWithNoVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seWithNoVsInput() {
    return this._seWithNoVs;
  }

  // se_with_vs_not_scaledout - computed: false, optional: true, required: false
  private _seWithVsNotScaledout?: string[]; 
  public get seWithVsNotScaledout() {
    return this.getListAttribute('se_with_vs_not_scaledout');
  }
  public set seWithVsNotScaledout(value: string[]) {
    this._seWithVsNotScaledout = value;
  }
  public resetSeWithVsNotScaledout() {
    this._seWithVsNotScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seWithVsNotScaledoutInput() {
    return this._seWithVsNotScaledout;
  }

  // se_with_vs_scaledout - computed: false, optional: true, required: false
  private _seWithVsScaledout?: string[]; 
  public get seWithVsScaledout() {
    return this.getListAttribute('se_with_vs_scaledout');
  }
  public set seWithVsScaledout(value: string[]) {
    this._seWithVsScaledout = value;
  }
  public resetSeWithVsScaledout() {
    this._seWithVsScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seWithVsScaledoutInput() {
    return this._seWithVsScaledout;
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

  // thread - computed: true, optional: true, required: false
  private _thread?: string; 
  public get thread() {
    return this.getStringAttribute('thread');
  }
  public set thread(value: string) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vs_migrate_in_progress_ref - computed: false, optional: true, required: false
  private _vsMigrateInProgressRef?: string[]; 
  public get vsMigrateInProgressRef() {
    return this.getListAttribute('vs_migrate_in_progress_ref');
  }
  public set vsMigrateInProgressRef(value: string[]) {
    this._vsMigrateInProgressRef = value;
  }
  public resetVsMigrateInProgressRef() {
    this._vsMigrateInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsMigrateInProgressRefInput() {
    return this._vsMigrateInProgressRef;
  }

  // vs_scalein_in_progress_ref - computed: false, optional: true, required: false
  private _vsScaleinInProgressRef?: string[]; 
  public get vsScaleinInProgressRef() {
    return this.getListAttribute('vs_scalein_in_progress_ref');
  }
  public set vsScaleinInProgressRef(value: string[]) {
    this._vsScaleinInProgressRef = value;
  }
  public resetVsScaleinInProgressRef() {
    this._vsScaleinInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleinInProgressRefInput() {
    return this._vsScaleinInProgressRef;
  }

  // vs_scaleout_in_progress_ref - computed: false, optional: true, required: false
  private _vsScaleoutInProgressRef?: string[]; 
  public get vsScaleoutInProgressRef() {
    return this.getListAttribute('vs_scaleout_in_progress_ref');
  }
  public set vsScaleoutInProgressRef(value: string[]) {
    this._vsScaleoutInProgressRef = value;
  }
  public resetVsScaleoutInProgressRef() {
    this._vsScaleoutInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleoutInProgressRefInput() {
    return this._vsScaleoutInProgressRef;
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

  // se_upgrade_errors - computed: false, optional: true, required: false
  private _seUpgradeErrors = new UpgradestatusinfoHistorySegStatusSeUpgradeErrorsList(this, "se_upgrade_errors", false);
  public get seUpgradeErrors() {
    return this._seUpgradeErrors;
  }
  public putSeUpgradeErrors(value: UpgradestatusinfoHistorySegStatusSeUpgradeErrors[] | cdktf.IResolvable) {
    this._seUpgradeErrors.internalValue = value;
  }
  public resetSeUpgradeErrors() {
    this._seUpgradeErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeErrorsInput() {
    return this._seUpgradeErrors.internalValue;
  }

  // vs_errors - computed: false, optional: true, required: false
  private _vsErrors = new UpgradestatusinfoHistorySegStatusVsErrorsList(this, "vs_errors", false);
  public get vsErrors() {
    return this._vsErrors;
  }
  public putVsErrors(value: UpgradestatusinfoHistorySegStatusVsErrors[] | cdktf.IResolvable) {
    this._vsErrors.internalValue = value;
  }
  public resetVsErrors() {
    this._vsErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsErrorsInput() {
    return this._vsErrors.internalValue;
  }
}

export class UpgradestatusinfoHistorySegStatusList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistorySegStatus[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistorySegStatusOutputReference {
    return new UpgradestatusinfoHistorySegStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#secs Upgradestatusinfo#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#usecs Upgradestatusinfo#usecs}
  */
  readonly usecs: string;
}

export function upgradestatusinfoHistoryStateLastChangedTimeToTerraform(struct?: UpgradestatusinfoHistoryStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatusinfoHistoryStateLastChangedTimeToHclTerraform(struct?: UpgradestatusinfoHistoryStateLastChangedTime | cdktf.IResolvable): any {
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

export class UpgradestatusinfoHistoryStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoHistoryStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryStateLastChangedTimeOutputReference {
    return new UpgradestatusinfoHistoryStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#rebooted Upgradestatusinfo#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#last_changed_time Upgradestatusinfo#last_changed_time}
  */
  readonly lastChangedTime?: UpgradestatusinfoHistoryStateLastChangedTime[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistoryStateToTerraform(struct?: UpgradestatusinfoHistoryState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(upgradestatusinfoHistoryStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function upgradestatusinfoHistoryStateToHclTerraform(struct?: UpgradestatusinfoHistoryState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoHistoryStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistoryStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new UpgradestatusinfoHistoryStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: UpgradestatusinfoHistoryStateLastChangedTime[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoHistoryStateList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryState[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryStateOutputReference {
    return new UpgradestatusinfoHistoryStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#addr Upgradestatusinfo#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#type Upgradestatusinfo#type}
  */
  readonly type: string;
}

export function upgradestatusinfoHistoryUpgradeEventsNodesEventsIpToTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function upgradestatusinfoHistoryUpgradeEventsNodesEventsIpToHclTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoHistoryUpgradeEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoHistoryUpgradeEventsNodesEventsIpList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryUpgradeEventsNodesEventsIpOutputReference {
    return new UpgradestatusinfoHistoryUpgradeEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryUpgradeEventsNodesEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#message Upgradestatusinfo#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#status Upgradestatusinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ip Upgradestatusinfo#ip}
  */
  readonly ip?: UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistoryUpgradeEventsNodesEventsToTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(upgradestatusinfoHistoryUpgradeEventsNodesEventsIpToTerraform, true)(struct!.ip),
  }
}


export function upgradestatusinfoHistoryUpgradeEventsNodesEventsToHclTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryUpgradeEventsNodesEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoHistoryUpgradeEventsNodesEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistoryUpgradeEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryUpgradeEventsNodesEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryUpgradeEventsNodesEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new UpgradestatusinfoHistoryUpgradeEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: UpgradestatusinfoHistoryUpgradeEventsNodesEventsIp[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoHistoryUpgradeEventsNodesEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryUpgradeEventsNodesEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryUpgradeEventsNodesEventsOutputReference {
    return new UpgradestatusinfoHistoryUpgradeEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryUpgradeEventsSubEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#addr Upgradestatusinfo#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#type Upgradestatusinfo#type}
  */
  readonly type: string;
}

export function upgradestatusinfoHistoryUpgradeEventsSubEventsIpToTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function upgradestatusinfoHistoryUpgradeEventsSubEventsIpToHclTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoHistoryUpgradeEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoHistoryUpgradeEventsSubEventsIpList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryUpgradeEventsSubEventsIp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryUpgradeEventsSubEventsIpOutputReference {
    return new UpgradestatusinfoHistoryUpgradeEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryUpgradeEventsSubEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#message Upgradestatusinfo#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#status Upgradestatusinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ip Upgradestatusinfo#ip}
  */
  readonly ip?: UpgradestatusinfoHistoryUpgradeEventsSubEventsIp[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistoryUpgradeEventsSubEventsToTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(upgradestatusinfoHistoryUpgradeEventsSubEventsIpToTerraform, true)(struct!.ip),
  }
}


export function upgradestatusinfoHistoryUpgradeEventsSubEventsToHclTerraform(struct?: UpgradestatusinfoHistoryUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryUpgradeEventsSubEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoHistoryUpgradeEventsSubEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistoryUpgradeEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryUpgradeEventsSubEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryUpgradeEventsSubEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new UpgradestatusinfoHistoryUpgradeEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: UpgradestatusinfoHistoryUpgradeEventsSubEventsIp[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoHistoryUpgradeEventsSubEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryUpgradeEventsSubEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryUpgradeEventsSubEventsOutputReference {
    return new UpgradestatusinfoHistoryUpgradeEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistoryUpgradeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_name Upgradestatusinfo#task_name}
  */
  readonly taskName?: string;
  /**
  * nodes_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#nodes_events Upgradestatusinfo#nodes_events}
  */
  readonly nodesEvents?: UpgradestatusinfoHistoryUpgradeEventsNodesEvents[] | cdktf.IResolvable;
  /**
  * sub_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_events Upgradestatusinfo#sub_events}
  */
  readonly subEvents?: UpgradestatusinfoHistoryUpgradeEventsSubEvents[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistoryUpgradeEventsToTerraform(struct?: UpgradestatusinfoHistoryUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task: cdktf.stringToTerraform(struct!.task),
    task_name: cdktf.stringToTerraform(struct!.taskName),
    nodes_events: cdktf.listMapper(upgradestatusinfoHistoryUpgradeEventsNodesEventsToTerraform, true)(struct!.nodesEvents),
    sub_events: cdktf.listMapper(upgradestatusinfoHistoryUpgradeEventsSubEventsToTerraform, true)(struct!.subEvents),
  }
}


export function upgradestatusinfoHistoryUpgradeEventsToHclTerraform(struct?: UpgradestatusinfoHistoryUpgradeEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryUpgradeEventsNodesEventsToHclTerraform, true)(struct!.nodesEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoHistoryUpgradeEventsNodesEventsList",
    },
    sub_events: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryUpgradeEventsSubEventsToHclTerraform, true)(struct!.subEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoHistoryUpgradeEventsSubEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistoryUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistoryUpgradeEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoHistoryUpgradeEvents | cdktf.IResolvable | undefined) {
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
  private _nodesEvents = new UpgradestatusinfoHistoryUpgradeEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }
  public putNodesEvents(value: UpgradestatusinfoHistoryUpgradeEventsNodesEvents[] | cdktf.IResolvable) {
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
  private _subEvents = new UpgradestatusinfoHistoryUpgradeEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
  public putSubEvents(value: UpgradestatusinfoHistoryUpgradeEventsSubEvents[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoHistoryUpgradeEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistoryUpgradeEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryUpgradeEventsOutputReference {
    return new UpgradestatusinfoHistoryUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoHistory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ops Upgradestatusinfo#ops}
  */
  readonly ops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_version Upgradestatusinfo#patch_version}
  */
  readonly patchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#statediff_ref Upgradestatusinfo#statediff_ref}
  */
  readonly statediffRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#version Upgradestatusinfo#version}
  */
  readonly version?: string;
  /**
  * se_upgrade_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_events Upgradestatusinfo#se_upgrade_events}
  */
  readonly seUpgradeEvents?: UpgradestatusinfoHistorySeUpgradeEvents[] | cdktf.IResolvable;
  /**
  * seg_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#seg_status Upgradestatusinfo#seg_status}
  */
  readonly segStatus?: UpgradestatusinfoHistorySegStatus[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: UpgradestatusinfoHistoryState[] | cdktf.IResolvable;
  /**
  * upgrade_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#upgrade_events Upgradestatusinfo#upgrade_events}
  */
  readonly upgradeEvents?: UpgradestatusinfoHistoryUpgradeEvents[] | cdktf.IResolvable;
}

export function upgradestatusinfoHistoryToTerraform(struct?: UpgradestatusinfoHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    ops: cdktf.stringToTerraform(struct!.ops),
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    statediff_ref: cdktf.stringToTerraform(struct!.statediffRef),
    version: cdktf.stringToTerraform(struct!.version),
    se_upgrade_events: cdktf.listMapper(upgradestatusinfoHistorySeUpgradeEventsToTerraform, true)(struct!.seUpgradeEvents),
    seg_status: cdktf.listMapper(upgradestatusinfoHistorySegStatusToTerraform, true)(struct!.segStatus),
    state: cdktf.listMapper(upgradestatusinfoHistoryStateToTerraform, true)(struct!.state),
    upgrade_events: cdktf.listMapper(upgradestatusinfoHistoryUpgradeEventsToTerraform, true)(struct!.upgradeEvents),
  }
}


export function upgradestatusinfoHistoryToHclTerraform(struct?: UpgradestatusinfoHistory | cdktf.IResolvable): any {
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
    ops: {
      value: cdktf.stringToHclTerraform(struct!.ops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
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
    statediff_ref: {
      value: cdktf.stringToHclTerraform(struct!.statediffRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_upgrade_events: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistorySeUpgradeEventsToHclTerraform, true)(struct!.seUpgradeEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoHistorySeUpgradeEventsList",
    },
    seg_status: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistorySegStatusToHclTerraform, true)(struct!.segStatus),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoHistorySegStatusList",
    },
    state: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryStateToHclTerraform, true)(struct!.state),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoHistoryStateList",
    },
    upgrade_events: {
      value: cdktf.listMapperHcl(upgradestatusinfoHistoryUpgradeEventsToHclTerraform, true)(struct!.upgradeEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoHistoryUpgradeEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoHistory | cdktf.IResolvable | undefined {
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
    if (this._ops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ops = this._ops;
    }
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._statediffRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.statediffRef = this._statediffRef;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._seUpgradeEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeEvents = this._seUpgradeEvents?.internalValue;
    }
    if (this._segStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segStatus = this._segStatus?.internalValue;
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

  public set internalValue(value: UpgradestatusinfoHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._ops = undefined;
      this._patchVersion = undefined;
      this._startTime = undefined;
      this._statediffRef = undefined;
      this._version = undefined;
      this._seUpgradeEvents.internalValue = undefined;
      this._segStatus.internalValue = undefined;
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
      this._ops = value.ops;
      this._patchVersion = value.patchVersion;
      this._startTime = value.startTime;
      this._statediffRef = value.statediffRef;
      this._version = value.version;
      this._seUpgradeEvents.internalValue = value.seUpgradeEvents;
      this._segStatus.internalValue = value.segStatus;
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

  // ops - computed: true, optional: true, required: false
  private _ops?: string; 
  public get ops() {
    return this.getStringAttribute('ops');
  }
  public set ops(value: string) {
    this._ops = value;
  }
  public resetOps() {
    this._ops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInput() {
    return this._ops;
  }

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
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

  // statediff_ref - computed: true, optional: true, required: false
  private _statediffRef?: string; 
  public get statediffRef() {
    return this.getStringAttribute('statediff_ref');
  }
  public set statediffRef(value: string) {
    this._statediffRef = value;
  }
  public resetStatediffRef() {
    this._statediffRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statediffRefInput() {
    return this._statediffRef;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // se_upgrade_events - computed: false, optional: true, required: false
  private _seUpgradeEvents = new UpgradestatusinfoHistorySeUpgradeEventsList(this, "se_upgrade_events", false);
  public get seUpgradeEvents() {
    return this._seUpgradeEvents;
  }
  public putSeUpgradeEvents(value: UpgradestatusinfoHistorySeUpgradeEvents[] | cdktf.IResolvable) {
    this._seUpgradeEvents.internalValue = value;
  }
  public resetSeUpgradeEvents() {
    this._seUpgradeEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeEventsInput() {
    return this._seUpgradeEvents.internalValue;
  }

  // seg_status - computed: false, optional: true, required: false
  private _segStatus = new UpgradestatusinfoHistorySegStatusList(this, "seg_status", true);
  public get segStatus() {
    return this._segStatus;
  }
  public putSegStatus(value: UpgradestatusinfoHistorySegStatus[] | cdktf.IResolvable) {
    this._segStatus.internalValue = value;
  }
  public resetSegStatus() {
    this._segStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segStatusInput() {
    return this._segStatus.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state = new UpgradestatusinfoHistoryStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: UpgradestatusinfoHistoryState[] | cdktf.IResolvable) {
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
  private _upgradeEvents = new UpgradestatusinfoHistoryUpgradeEventsList(this, "upgrade_events", false);
  public get upgradeEvents() {
    return this._upgradeEvents;
  }
  public putUpgradeEvents(value: UpgradestatusinfoHistoryUpgradeEvents[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoHistoryList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoHistory[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoHistoryOutputReference {
    return new UpgradestatusinfoHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoParamsController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_base_timeout Upgradestatusinfo#task_base_timeout}
  */
  readonly taskBaseTimeout?: string;
}

export function upgradestatusinfoParamsControllerToTerraform(struct?: UpgradestatusinfoParamsController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_base_timeout: cdktf.stringToTerraform(struct!.taskBaseTimeout),
  }
}


export function upgradestatusinfoParamsControllerToHclTerraform(struct?: UpgradestatusinfoParamsController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_base_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskBaseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoParamsControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoParamsController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskBaseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskBaseTimeout = this._taskBaseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoParamsController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskBaseTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskBaseTimeout = value.taskBaseTimeout;
    }
  }

  // task_base_timeout - computed: false, optional: true, required: false
  private _taskBaseTimeout?: string; 
  public get taskBaseTimeout() {
    return this.getStringAttribute('task_base_timeout');
  }
  public set taskBaseTimeout(value: string) {
    this._taskBaseTimeout = value;
  }
  public resetTaskBaseTimeout() {
    this._taskBaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseTimeoutInput() {
    return this._taskBaseTimeout;
  }
}

export class UpgradestatusinfoParamsControllerList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoParamsController[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoParamsControllerOutputReference {
    return new UpgradestatusinfoParamsControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoParamsSeGroupOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#action_on_error Upgradestatusinfo#action_on_error}
  */
  readonly actionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disruptive Upgradestatusinfo#disruptive}
  */
  readonly disruptive?: string;
}

export function upgradestatusinfoParamsSeGroupOptionsToTerraform(struct?: UpgradestatusinfoParamsSeGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_error: cdktf.stringToTerraform(struct!.actionOnError),
    disruptive: cdktf.stringToTerraform(struct!.disruptive),
  }
}


export function upgradestatusinfoParamsSeGroupOptionsToHclTerraform(struct?: UpgradestatusinfoParamsSeGroupOptions | cdktf.IResolvable): any {
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

export class UpgradestatusinfoParamsSeGroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoParamsSeGroupOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoParamsSeGroupOptions | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoParamsSeGroupOptionsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoParamsSeGroupOptions[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoParamsSeGroupOptionsOutputReference {
    return new UpgradestatusinfoParamsSeGroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoParamsSeGroupResumeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#action_on_error Upgradestatusinfo#action_on_error}
  */
  readonly actionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disruptive Upgradestatusinfo#disruptive}
  */
  readonly disruptive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#skip_suspended Upgradestatusinfo#skip_suspended}
  */
  readonly skipSuspended?: string;
}

export function upgradestatusinfoParamsSeGroupResumeOptionsToTerraform(struct?: UpgradestatusinfoParamsSeGroupResumeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_error: cdktf.stringToTerraform(struct!.actionOnError),
    disruptive: cdktf.stringToTerraform(struct!.disruptive),
    skip_suspended: cdktf.stringToTerraform(struct!.skipSuspended),
  }
}


export function upgradestatusinfoParamsSeGroupResumeOptionsToHclTerraform(struct?: UpgradestatusinfoParamsSeGroupResumeOptions | cdktf.IResolvable): any {
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
    skip_suspended: {
      value: cdktf.stringToHclTerraform(struct!.skipSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoParamsSeGroupResumeOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoParamsSeGroupResumeOptions | cdktf.IResolvable | undefined {
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
    if (this._skipSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSuspended = this._skipSuspended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoParamsSeGroupResumeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionOnError = undefined;
      this._disruptive = undefined;
      this._skipSuspended = undefined;
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
      this._skipSuspended = value.skipSuspended;
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

  // skip_suspended - computed: false, optional: true, required: false
  private _skipSuspended?: string; 
  public get skipSuspended() {
    return this.getStringAttribute('skip_suspended');
  }
  public set skipSuspended(value: string) {
    this._skipSuspended = value;
  }
  public resetSkipSuspended() {
    this._skipSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSuspendedInput() {
    return this._skipSuspended;
  }
}

export class UpgradestatusinfoParamsSeGroupResumeOptionsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoParamsSeGroupResumeOptions[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoParamsSeGroupResumeOptionsOutputReference {
    return new UpgradestatusinfoParamsSeGroupResumeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoParamsServiceEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#concurrent_segroup_upgrades Upgradestatusinfo#concurrent_segroup_upgrades}
  */
  readonly concurrentSegroupUpgrades?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_data_transfer_size Upgradestatusinfo#image_data_transfer_size}
  */
  readonly imageDataTransferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#large_se_connect_timeout Upgradestatusinfo#large_se_connect_timeout}
  */
  readonly largeSeConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_connect_timeout Upgradestatusinfo#se_connect_timeout}
  */
  readonly seConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#simultaneous_image_downloads Upgradestatusinfo#simultaneous_image_downloads}
  */
  readonly simultaneousImageDownloads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_base_timeout Upgradestatusinfo#task_base_timeout}
  */
  readonly taskBaseTimeout?: string;
}

export function upgradestatusinfoParamsServiceEngineToTerraform(struct?: UpgradestatusinfoParamsServiceEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_segroup_upgrades: cdktf.stringToTerraform(struct!.concurrentSegroupUpgrades),
    image_data_transfer_size: cdktf.stringToTerraform(struct!.imageDataTransferSize),
    large_se_connect_timeout: cdktf.stringToTerraform(struct!.largeSeConnectTimeout),
    se_connect_timeout: cdktf.stringToTerraform(struct!.seConnectTimeout),
    simultaneous_image_downloads: cdktf.stringToTerraform(struct!.simultaneousImageDownloads),
    task_base_timeout: cdktf.stringToTerraform(struct!.taskBaseTimeout),
  }
}


export function upgradestatusinfoParamsServiceEngineToHclTerraform(struct?: UpgradestatusinfoParamsServiceEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_segroup_upgrades: {
      value: cdktf.stringToHclTerraform(struct!.concurrentSegroupUpgrades),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_data_transfer_size: {
      value: cdktf.stringToHclTerraform(struct!.imageDataTransferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_se_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.largeSeConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simultaneous_image_downloads: {
      value: cdktf.stringToHclTerraform(struct!.simultaneousImageDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_base_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskBaseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoParamsServiceEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoParamsServiceEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSegroupUpgrades !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSegroupUpgrades = this._concurrentSegroupUpgrades;
    }
    if (this._imageDataTransferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDataTransferSize = this._imageDataTransferSize;
    }
    if (this._largeSeConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeSeConnectTimeout = this._largeSeConnectTimeout;
    }
    if (this._seConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seConnectTimeout = this._seConnectTimeout;
    }
    if (this._simultaneousImageDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.simultaneousImageDownloads = this._simultaneousImageDownloads;
    }
    if (this._taskBaseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskBaseTimeout = this._taskBaseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoParamsServiceEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrentSegroupUpgrades = undefined;
      this._imageDataTransferSize = undefined;
      this._largeSeConnectTimeout = undefined;
      this._seConnectTimeout = undefined;
      this._simultaneousImageDownloads = undefined;
      this._taskBaseTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrentSegroupUpgrades = value.concurrentSegroupUpgrades;
      this._imageDataTransferSize = value.imageDataTransferSize;
      this._largeSeConnectTimeout = value.largeSeConnectTimeout;
      this._seConnectTimeout = value.seConnectTimeout;
      this._simultaneousImageDownloads = value.simultaneousImageDownloads;
      this._taskBaseTimeout = value.taskBaseTimeout;
    }
  }

  // concurrent_segroup_upgrades - computed: false, optional: true, required: false
  private _concurrentSegroupUpgrades?: string; 
  public get concurrentSegroupUpgrades() {
    return this.getStringAttribute('concurrent_segroup_upgrades');
  }
  public set concurrentSegroupUpgrades(value: string) {
    this._concurrentSegroupUpgrades = value;
  }
  public resetConcurrentSegroupUpgrades() {
    this._concurrentSegroupUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSegroupUpgradesInput() {
    return this._concurrentSegroupUpgrades;
  }

  // image_data_transfer_size - computed: false, optional: true, required: false
  private _imageDataTransferSize?: string; 
  public get imageDataTransferSize() {
    return this.getStringAttribute('image_data_transfer_size');
  }
  public set imageDataTransferSize(value: string) {
    this._imageDataTransferSize = value;
  }
  public resetImageDataTransferSize() {
    this._imageDataTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDataTransferSizeInput() {
    return this._imageDataTransferSize;
  }

  // large_se_connect_timeout - computed: false, optional: true, required: false
  private _largeSeConnectTimeout?: string; 
  public get largeSeConnectTimeout() {
    return this.getStringAttribute('large_se_connect_timeout');
  }
  public set largeSeConnectTimeout(value: string) {
    this._largeSeConnectTimeout = value;
  }
  public resetLargeSeConnectTimeout() {
    this._largeSeConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeSeConnectTimeoutInput() {
    return this._largeSeConnectTimeout;
  }

  // se_connect_timeout - computed: false, optional: true, required: false
  private _seConnectTimeout?: string; 
  public get seConnectTimeout() {
    return this.getStringAttribute('se_connect_timeout');
  }
  public set seConnectTimeout(value: string) {
    this._seConnectTimeout = value;
  }
  public resetSeConnectTimeout() {
    this._seConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seConnectTimeoutInput() {
    return this._seConnectTimeout;
  }

  // simultaneous_image_downloads - computed: false, optional: true, required: false
  private _simultaneousImageDownloads?: string; 
  public get simultaneousImageDownloads() {
    return this.getStringAttribute('simultaneous_image_downloads');
  }
  public set simultaneousImageDownloads(value: string) {
    this._simultaneousImageDownloads = value;
  }
  public resetSimultaneousImageDownloads() {
    this._simultaneousImageDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simultaneousImageDownloadsInput() {
    return this._simultaneousImageDownloads;
  }

  // task_base_timeout - computed: false, optional: true, required: false
  private _taskBaseTimeout?: string; 
  public get taskBaseTimeout() {
    return this.getStringAttribute('task_base_timeout');
  }
  public set taskBaseTimeout(value: string) {
    this._taskBaseTimeout = value;
  }
  public resetTaskBaseTimeout() {
    this._taskBaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseTimeoutInput() {
    return this._taskBaseTimeout;
  }
}

export class UpgradestatusinfoParamsServiceEngineList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoParamsServiceEngine[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoParamsServiceEngineOutputReference {
    return new UpgradestatusinfoParamsServiceEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_ref Upgradestatusinfo#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_ref Upgradestatusinfo#patch_ref}
  */
  readonly patchRef?: string;
  /**
  * controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#controller Upgradestatusinfo#controller}
  */
  readonly controller?: UpgradestatusinfoParamsController[] | cdktf.IResolvable;
  /**
  * se_group_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_options Upgradestatusinfo#se_group_options}
  */
  readonly seGroupOptions?: UpgradestatusinfoParamsSeGroupOptions[] | cdktf.IResolvable;
  /**
  * se_group_resume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_resume_options Upgradestatusinfo#se_group_resume_options}
  */
  readonly seGroupResumeOptions?: UpgradestatusinfoParamsSeGroupResumeOptions[] | cdktf.IResolvable;
  /**
  * service_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#service_engine Upgradestatusinfo#service_engine}
  */
  readonly serviceEngine?: UpgradestatusinfoParamsServiceEngine[] | cdktf.IResolvable;
}

export function upgradestatusinfoParamsToTerraform(struct?: UpgradestatusinfoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ref: cdktf.stringToTerraform(struct!.imageRef),
    patch_ref: cdktf.stringToTerraform(struct!.patchRef),
    controller: cdktf.listMapper(upgradestatusinfoParamsControllerToTerraform, true)(struct!.controller),
    se_group_options: cdktf.listMapper(upgradestatusinfoParamsSeGroupOptionsToTerraform, true)(struct!.seGroupOptions),
    se_group_resume_options: cdktf.listMapper(upgradestatusinfoParamsSeGroupResumeOptionsToTerraform, true)(struct!.seGroupResumeOptions),
    service_engine: cdktf.listMapper(upgradestatusinfoParamsServiceEngineToTerraform, true)(struct!.serviceEngine),
  }
}


export function upgradestatusinfoParamsToHclTerraform(struct?: UpgradestatusinfoParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ref: {
      value: cdktf.stringToHclTerraform(struct!.imageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_ref: {
      value: cdktf.stringToHclTerraform(struct!.patchRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller: {
      value: cdktf.listMapperHcl(upgradestatusinfoParamsControllerToHclTerraform, true)(struct!.controller),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoParamsControllerList",
    },
    se_group_options: {
      value: cdktf.listMapperHcl(upgradestatusinfoParamsSeGroupOptionsToHclTerraform, true)(struct!.seGroupOptions),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoParamsSeGroupOptionsList",
    },
    se_group_resume_options: {
      value: cdktf.listMapperHcl(upgradestatusinfoParamsSeGroupResumeOptionsToHclTerraform, true)(struct!.seGroupResumeOptions),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoParamsSeGroupResumeOptionsList",
    },
    service_engine: {
      value: cdktf.listMapperHcl(upgradestatusinfoParamsServiceEngineToHclTerraform, true)(struct!.serviceEngine),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoParamsServiceEngineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRef = this._imageRef;
    }
    if (this._patchRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchRef = this._patchRef;
    }
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._seGroupOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupOptions = this._seGroupOptions?.internalValue;
    }
    if (this._seGroupResumeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupResumeOptions = this._seGroupResumeOptions?.internalValue;
    }
    if (this._serviceEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEngine = this._serviceEngine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageRef = undefined;
      this._patchRef = undefined;
      this._controller.internalValue = undefined;
      this._seGroupOptions.internalValue = undefined;
      this._seGroupResumeOptions.internalValue = undefined;
      this._serviceEngine.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageRef = value.imageRef;
      this._patchRef = value.patchRef;
      this._controller.internalValue = value.controller;
      this._seGroupOptions.internalValue = value.seGroupOptions;
      this._seGroupResumeOptions.internalValue = value.seGroupResumeOptions;
      this._serviceEngine.internalValue = value.serviceEngine;
    }
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

  // patch_ref - computed: true, optional: true, required: false
  private _patchRef?: string; 
  public get patchRef() {
    return this.getStringAttribute('patch_ref');
  }
  public set patchRef(value: string) {
    this._patchRef = value;
  }
  public resetPatchRef() {
    this._patchRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchRefInput() {
    return this._patchRef;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new UpgradestatusinfoParamsControllerList(this, "controller", true);
  public get controller() {
    return this._controller;
  }
  public putController(value: UpgradestatusinfoParamsController[] | cdktf.IResolvable) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // se_group_options - computed: false, optional: true, required: false
  private _seGroupOptions = new UpgradestatusinfoParamsSeGroupOptionsList(this, "se_group_options", true);
  public get seGroupOptions() {
    return this._seGroupOptions;
  }
  public putSeGroupOptions(value: UpgradestatusinfoParamsSeGroupOptions[] | cdktf.IResolvable) {
    this._seGroupOptions.internalValue = value;
  }
  public resetSeGroupOptions() {
    this._seGroupOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupOptionsInput() {
    return this._seGroupOptions.internalValue;
  }

  // se_group_resume_options - computed: false, optional: true, required: false
  private _seGroupResumeOptions = new UpgradestatusinfoParamsSeGroupResumeOptionsList(this, "se_group_resume_options", true);
  public get seGroupResumeOptions() {
    return this._seGroupResumeOptions;
  }
  public putSeGroupResumeOptions(value: UpgradestatusinfoParamsSeGroupResumeOptions[] | cdktf.IResolvable) {
    this._seGroupResumeOptions.internalValue = value;
  }
  public resetSeGroupResumeOptions() {
    this._seGroupResumeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupResumeOptionsInput() {
    return this._seGroupResumeOptions.internalValue;
  }

  // service_engine - computed: false, optional: true, required: false
  private _serviceEngine = new UpgradestatusinfoParamsServiceEngineList(this, "service_engine", true);
  public get serviceEngine() {
    return this._serviceEngine;
  }
  public putServiceEngine(value: UpgradestatusinfoParamsServiceEngine[] | cdktf.IResolvable) {
    this._serviceEngine.internalValue = value;
  }
  public resetServiceEngine() {
    this._serviceEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineInput() {
    return this._serviceEngine.internalValue;
  }
}

export class UpgradestatusinfoParamsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoParams[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoParamsOutputReference {
    return new UpgradestatusinfoParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoPatchListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_path Upgradestatusinfo#patch_image_path}
  */
  readonly patchImagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_ref Upgradestatusinfo#patch_image_ref}
  */
  readonly patchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_version Upgradestatusinfo#patch_version}
  */
  readonly patchVersion?: string;
}

export function upgradestatusinfoPatchListStructToTerraform(struct?: UpgradestatusinfoPatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_image_path: cdktf.stringToTerraform(struct!.patchImagePath),
    patch_image_ref: cdktf.stringToTerraform(struct!.patchImageRef),
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
  }
}


export function upgradestatusinfoPatchListStructToHclTerraform(struct?: UpgradestatusinfoPatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_image_path: {
      value: cdktf.stringToHclTerraform(struct!.patchImagePath),
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
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoPatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoPatchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchImagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchImagePath = this._patchImagePath;
    }
    if (this._patchImageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchImageRef = this._patchImageRef;
    }
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoPatchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchImagePath = undefined;
      this._patchImageRef = undefined;
      this._patchVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchImagePath = value.patchImagePath;
      this._patchImageRef = value.patchImageRef;
      this._patchVersion = value.patchVersion;
    }
  }

  // patch_image_path - computed: true, optional: true, required: false
  private _patchImagePath?: string; 
  public get patchImagePath() {
    return this.getStringAttribute('patch_image_path');
  }
  public set patchImagePath(value: string) {
    this._patchImagePath = value;
  }
  public resetPatchImagePath() {
    this._patchImagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchImagePathInput() {
    return this._patchImagePath;
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

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }
}

export class UpgradestatusinfoPatchListStructList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoPatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoPatchListStructOutputReference {
    return new UpgradestatusinfoPatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoPreviousPatchListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_path Upgradestatusinfo#patch_image_path}
  */
  readonly patchImagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_ref Upgradestatusinfo#patch_image_ref}
  */
  readonly patchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_version Upgradestatusinfo#patch_version}
  */
  readonly patchVersion?: string;
}

export function upgradestatusinfoPreviousPatchListStructToTerraform(struct?: UpgradestatusinfoPreviousPatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_image_path: cdktf.stringToTerraform(struct!.patchImagePath),
    patch_image_ref: cdktf.stringToTerraform(struct!.patchImageRef),
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
  }
}


export function upgradestatusinfoPreviousPatchListStructToHclTerraform(struct?: UpgradestatusinfoPreviousPatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_image_path: {
      value: cdktf.stringToHclTerraform(struct!.patchImagePath),
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
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoPreviousPatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoPreviousPatchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchImagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchImagePath = this._patchImagePath;
    }
    if (this._patchImageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchImageRef = this._patchImageRef;
    }
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoPreviousPatchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchImagePath = undefined;
      this._patchImageRef = undefined;
      this._patchVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchImagePath = value.patchImagePath;
      this._patchImageRef = value.patchImageRef;
      this._patchVersion = value.patchVersion;
    }
  }

  // patch_image_path - computed: true, optional: true, required: false
  private _patchImagePath?: string; 
  public get patchImagePath() {
    return this.getStringAttribute('patch_image_path');
  }
  public set patchImagePath(value: string) {
    this._patchImagePath = value;
  }
  public resetPatchImagePath() {
    this._patchImagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchImagePathInput() {
    return this._patchImagePath;
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

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }
}

export class UpgradestatusinfoPreviousPatchListStructList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoPreviousPatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoPreviousPatchListStructOutputReference {
    return new UpgradestatusinfoPreviousPatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSeUpgradeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#from_se_ref Upgradestatusinfo#from_se_ref}
  */
  readonly fromSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se Upgradestatusinfo#num_se}
  */
  readonly numSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_group Upgradestatusinfo#num_se_group}
  */
  readonly numSeGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs Upgradestatusinfo#num_vs}
  */
  readonly numVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ha_mode Upgradestatusinfo#se_group_ha_mode}
  */
  readonly seGroupHaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ref Upgradestatusinfo#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ref Upgradestatusinfo#se_ref}
  */
  readonly seRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#to_se_ref Upgradestatusinfo#to_se_ref}
  */
  readonly toSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_ref Upgradestatusinfo#vs_ref}
  */
  readonly vsRef?: string;
}

export function upgradestatusinfoSeUpgradeEventsToTerraform(struct?: UpgradestatusinfoSeUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_se_ref: cdktf.stringToTerraform(struct!.fromSeRef),
    num_se: cdktf.stringToTerraform(struct!.numSe),
    num_se_group: cdktf.stringToTerraform(struct!.numSeGroup),
    num_vs: cdktf.stringToTerraform(struct!.numVs),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    se_group_ha_mode: cdktf.stringToTerraform(struct!.seGroupHaMode),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    se_ref: cdktf.stringToTerraform(struct!.seRef),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    task: cdktf.stringToTerraform(struct!.task),
    to_se_ref: cdktf.stringToTerraform(struct!.toSeRef),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vs_ref: cdktf.stringToTerraform(struct!.vsRef),
  }
}


export function upgradestatusinfoSeUpgradeEventsToHclTerraform(struct?: UpgradestatusinfoSeUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.fromSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se: {
      value: cdktf.stringToHclTerraform(struct!.numSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_group: {
      value: cdktf.stringToHclTerraform(struct!.numSeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs: {
      value: cdktf.stringToHclTerraform(struct!.numVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.seGroupHaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRef),
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
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.toSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_ref: {
      value: cdktf.stringToHclTerraform(struct!.vsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSeUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSeUpgradeEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSeRef = this._fromSeRef;
    }
    if (this._numSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSe = this._numSe;
    }
    if (this._numSeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeGroup = this._numSeGroup;
    }
    if (this._numVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVs = this._numVs;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._seGroupHaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupHaMode = this._seGroupHaMode;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._seRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRef = this._seRef;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._toSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.toSeRef = this._toSeRef;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsRef = this._vsRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSeUpgradeEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromSeRef = undefined;
      this._numSe = undefined;
      this._numSeGroup = undefined;
      this._numVs = undefined;
      this._reason = undefined;
      this._seGroupHaMode = undefined;
      this._seGroupRef = undefined;
      this._seRef = undefined;
      this._subTasks = undefined;
      this._task = undefined;
      this._toSeRef = undefined;
      this._trafficStatus = undefined;
      this._vsRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromSeRef = value.fromSeRef;
      this._numSe = value.numSe;
      this._numSeGroup = value.numSeGroup;
      this._numVs = value.numVs;
      this._reason = value.reason;
      this._seGroupHaMode = value.seGroupHaMode;
      this._seGroupRef = value.seGroupRef;
      this._seRef = value.seRef;
      this._subTasks = value.subTasks;
      this._task = value.task;
      this._toSeRef = value.toSeRef;
      this._trafficStatus = value.trafficStatus;
      this._vsRef = value.vsRef;
    }
  }

  // from_se_ref - computed: true, optional: true, required: false
  private _fromSeRef?: string; 
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }
  public set fromSeRef(value: string) {
    this._fromSeRef = value;
  }
  public resetFromSeRef() {
    this._fromSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSeRefInput() {
    return this._fromSeRef;
  }

  // num_se - computed: true, optional: true, required: false
  private _numSe?: string; 
  public get numSe() {
    return this.getStringAttribute('num_se');
  }
  public set numSe(value: string) {
    this._numSe = value;
  }
  public resetNumSe() {
    this._numSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeInput() {
    return this._numSe;
  }

  // num_se_group - computed: true, optional: true, required: false
  private _numSeGroup?: string; 
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }
  public set numSeGroup(value: string) {
    this._numSeGroup = value;
  }
  public resetNumSeGroup() {
    this._numSeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeGroupInput() {
    return this._numSeGroup;
  }

  // num_vs - computed: true, optional: true, required: false
  private _numVs?: string; 
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }
  public set numVs(value: string) {
    this._numVs = value;
  }
  public resetNumVs() {
    this._numVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsInput() {
    return this._numVs;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // se_group_ha_mode - computed: true, optional: true, required: false
  private _seGroupHaMode?: string; 
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }
  public set seGroupHaMode(value: string) {
    this._seGroupHaMode = value;
  }
  public resetSeGroupHaMode() {
    this._seGroupHaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupHaModeInput() {
    return this._seGroupHaMode;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // se_ref - computed: true, optional: true, required: false
  private _seRef?: string; 
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }
  public set seRef(value: string) {
    this._seRef = value;
  }
  public resetSeRef() {
    this._seRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRefInput() {
    return this._seRef;
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

  // to_se_ref - computed: true, optional: true, required: false
  private _toSeRef?: string; 
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }
  public set toSeRef(value: string) {
    this._toSeRef = value;
  }
  public resetToSeRef() {
    this._toSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSeRefInput() {
    return this._toSeRef;
  }

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vs_ref - computed: true, optional: true, required: false
  private _vsRef?: string; 
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
  public set vsRef(value: string) {
    this._vsRef = value;
  }
  public resetVsRef() {
    this._vsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsRefInput() {
    return this._vsRef;
  }
}

export class UpgradestatusinfoSeUpgradeEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSeUpgradeEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSeUpgradeEventsOutputReference {
    return new UpgradestatusinfoSeUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegParamsController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_base_timeout Upgradestatusinfo#task_base_timeout}
  */
  readonly taskBaseTimeout?: string;
}

export function upgradestatusinfoSegParamsControllerToTerraform(struct?: UpgradestatusinfoSegParamsController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_base_timeout: cdktf.stringToTerraform(struct!.taskBaseTimeout),
  }
}


export function upgradestatusinfoSegParamsControllerToHclTerraform(struct?: UpgradestatusinfoSegParamsController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_base_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskBaseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegParamsControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegParamsController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskBaseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskBaseTimeout = this._taskBaseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegParamsController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskBaseTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskBaseTimeout = value.taskBaseTimeout;
    }
  }

  // task_base_timeout - computed: false, optional: true, required: false
  private _taskBaseTimeout?: string; 
  public get taskBaseTimeout() {
    return this.getStringAttribute('task_base_timeout');
  }
  public set taskBaseTimeout(value: string) {
    this._taskBaseTimeout = value;
  }
  public resetTaskBaseTimeout() {
    this._taskBaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseTimeoutInput() {
    return this._taskBaseTimeout;
  }
}

export class UpgradestatusinfoSegParamsControllerList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegParamsController[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegParamsControllerOutputReference {
    return new UpgradestatusinfoSegParamsControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegParamsSeGroupOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#action_on_error Upgradestatusinfo#action_on_error}
  */
  readonly actionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disruptive Upgradestatusinfo#disruptive}
  */
  readonly disruptive?: string;
}

export function upgradestatusinfoSegParamsSeGroupOptionsToTerraform(struct?: UpgradestatusinfoSegParamsSeGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_error: cdktf.stringToTerraform(struct!.actionOnError),
    disruptive: cdktf.stringToTerraform(struct!.disruptive),
  }
}


export function upgradestatusinfoSegParamsSeGroupOptionsToHclTerraform(struct?: UpgradestatusinfoSegParamsSeGroupOptions | cdktf.IResolvable): any {
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

export class UpgradestatusinfoSegParamsSeGroupOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegParamsSeGroupOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoSegParamsSeGroupOptions | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoSegParamsSeGroupOptionsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegParamsSeGroupOptions[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegParamsSeGroupOptionsOutputReference {
    return new UpgradestatusinfoSegParamsSeGroupOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegParamsSeGroupResumeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#action_on_error Upgradestatusinfo#action_on_error}
  */
  readonly actionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disruptive Upgradestatusinfo#disruptive}
  */
  readonly disruptive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#skip_suspended Upgradestatusinfo#skip_suspended}
  */
  readonly skipSuspended?: string;
}

export function upgradestatusinfoSegParamsSeGroupResumeOptionsToTerraform(struct?: UpgradestatusinfoSegParamsSeGroupResumeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_error: cdktf.stringToTerraform(struct!.actionOnError),
    disruptive: cdktf.stringToTerraform(struct!.disruptive),
    skip_suspended: cdktf.stringToTerraform(struct!.skipSuspended),
  }
}


export function upgradestatusinfoSegParamsSeGroupResumeOptionsToHclTerraform(struct?: UpgradestatusinfoSegParamsSeGroupResumeOptions | cdktf.IResolvable): any {
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
    skip_suspended: {
      value: cdktf.stringToHclTerraform(struct!.skipSuspended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegParamsSeGroupResumeOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegParamsSeGroupResumeOptions | cdktf.IResolvable | undefined {
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
    if (this._skipSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSuspended = this._skipSuspended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegParamsSeGroupResumeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionOnError = undefined;
      this._disruptive = undefined;
      this._skipSuspended = undefined;
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
      this._skipSuspended = value.skipSuspended;
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

  // skip_suspended - computed: false, optional: true, required: false
  private _skipSuspended?: string; 
  public get skipSuspended() {
    return this.getStringAttribute('skip_suspended');
  }
  public set skipSuspended(value: string) {
    this._skipSuspended = value;
  }
  public resetSkipSuspended() {
    this._skipSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSuspendedInput() {
    return this._skipSuspended;
  }
}

export class UpgradestatusinfoSegParamsSeGroupResumeOptionsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegParamsSeGroupResumeOptions[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegParamsSeGroupResumeOptionsOutputReference {
    return new UpgradestatusinfoSegParamsSeGroupResumeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegParamsServiceEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#concurrent_segroup_upgrades Upgradestatusinfo#concurrent_segroup_upgrades}
  */
  readonly concurrentSegroupUpgrades?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_data_transfer_size Upgradestatusinfo#image_data_transfer_size}
  */
  readonly imageDataTransferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#large_se_connect_timeout Upgradestatusinfo#large_se_connect_timeout}
  */
  readonly largeSeConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_connect_timeout Upgradestatusinfo#se_connect_timeout}
  */
  readonly seConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#simultaneous_image_downloads Upgradestatusinfo#simultaneous_image_downloads}
  */
  readonly simultaneousImageDownloads?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_base_timeout Upgradestatusinfo#task_base_timeout}
  */
  readonly taskBaseTimeout?: string;
}

export function upgradestatusinfoSegParamsServiceEngineToTerraform(struct?: UpgradestatusinfoSegParamsServiceEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_segroup_upgrades: cdktf.stringToTerraform(struct!.concurrentSegroupUpgrades),
    image_data_transfer_size: cdktf.stringToTerraform(struct!.imageDataTransferSize),
    large_se_connect_timeout: cdktf.stringToTerraform(struct!.largeSeConnectTimeout),
    se_connect_timeout: cdktf.stringToTerraform(struct!.seConnectTimeout),
    simultaneous_image_downloads: cdktf.stringToTerraform(struct!.simultaneousImageDownloads),
    task_base_timeout: cdktf.stringToTerraform(struct!.taskBaseTimeout),
  }
}


export function upgradestatusinfoSegParamsServiceEngineToHclTerraform(struct?: UpgradestatusinfoSegParamsServiceEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_segroup_upgrades: {
      value: cdktf.stringToHclTerraform(struct!.concurrentSegroupUpgrades),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_data_transfer_size: {
      value: cdktf.stringToHclTerraform(struct!.imageDataTransferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_se_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.largeSeConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simultaneous_image_downloads: {
      value: cdktf.stringToHclTerraform(struct!.simultaneousImageDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_base_timeout: {
      value: cdktf.stringToHclTerraform(struct!.taskBaseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegParamsServiceEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegParamsServiceEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSegroupUpgrades !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSegroupUpgrades = this._concurrentSegroupUpgrades;
    }
    if (this._imageDataTransferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDataTransferSize = this._imageDataTransferSize;
    }
    if (this._largeSeConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeSeConnectTimeout = this._largeSeConnectTimeout;
    }
    if (this._seConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seConnectTimeout = this._seConnectTimeout;
    }
    if (this._simultaneousImageDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.simultaneousImageDownloads = this._simultaneousImageDownloads;
    }
    if (this._taskBaseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskBaseTimeout = this._taskBaseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegParamsServiceEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrentSegroupUpgrades = undefined;
      this._imageDataTransferSize = undefined;
      this._largeSeConnectTimeout = undefined;
      this._seConnectTimeout = undefined;
      this._simultaneousImageDownloads = undefined;
      this._taskBaseTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrentSegroupUpgrades = value.concurrentSegroupUpgrades;
      this._imageDataTransferSize = value.imageDataTransferSize;
      this._largeSeConnectTimeout = value.largeSeConnectTimeout;
      this._seConnectTimeout = value.seConnectTimeout;
      this._simultaneousImageDownloads = value.simultaneousImageDownloads;
      this._taskBaseTimeout = value.taskBaseTimeout;
    }
  }

  // concurrent_segroup_upgrades - computed: false, optional: true, required: false
  private _concurrentSegroupUpgrades?: string; 
  public get concurrentSegroupUpgrades() {
    return this.getStringAttribute('concurrent_segroup_upgrades');
  }
  public set concurrentSegroupUpgrades(value: string) {
    this._concurrentSegroupUpgrades = value;
  }
  public resetConcurrentSegroupUpgrades() {
    this._concurrentSegroupUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSegroupUpgradesInput() {
    return this._concurrentSegroupUpgrades;
  }

  // image_data_transfer_size - computed: false, optional: true, required: false
  private _imageDataTransferSize?: string; 
  public get imageDataTransferSize() {
    return this.getStringAttribute('image_data_transfer_size');
  }
  public set imageDataTransferSize(value: string) {
    this._imageDataTransferSize = value;
  }
  public resetImageDataTransferSize() {
    this._imageDataTransferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDataTransferSizeInput() {
    return this._imageDataTransferSize;
  }

  // large_se_connect_timeout - computed: false, optional: true, required: false
  private _largeSeConnectTimeout?: string; 
  public get largeSeConnectTimeout() {
    return this.getStringAttribute('large_se_connect_timeout');
  }
  public set largeSeConnectTimeout(value: string) {
    this._largeSeConnectTimeout = value;
  }
  public resetLargeSeConnectTimeout() {
    this._largeSeConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeSeConnectTimeoutInput() {
    return this._largeSeConnectTimeout;
  }

  // se_connect_timeout - computed: false, optional: true, required: false
  private _seConnectTimeout?: string; 
  public get seConnectTimeout() {
    return this.getStringAttribute('se_connect_timeout');
  }
  public set seConnectTimeout(value: string) {
    this._seConnectTimeout = value;
  }
  public resetSeConnectTimeout() {
    this._seConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seConnectTimeoutInput() {
    return this._seConnectTimeout;
  }

  // simultaneous_image_downloads - computed: false, optional: true, required: false
  private _simultaneousImageDownloads?: string; 
  public get simultaneousImageDownloads() {
    return this.getStringAttribute('simultaneous_image_downloads');
  }
  public set simultaneousImageDownloads(value: string) {
    this._simultaneousImageDownloads = value;
  }
  public resetSimultaneousImageDownloads() {
    this._simultaneousImageDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simultaneousImageDownloadsInput() {
    return this._simultaneousImageDownloads;
  }

  // task_base_timeout - computed: false, optional: true, required: false
  private _taskBaseTimeout?: string; 
  public get taskBaseTimeout() {
    return this.getStringAttribute('task_base_timeout');
  }
  public set taskBaseTimeout(value: string) {
    this._taskBaseTimeout = value;
  }
  public resetTaskBaseTimeout() {
    this._taskBaseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskBaseTimeoutInput() {
    return this._taskBaseTimeout;
  }
}

export class UpgradestatusinfoSegParamsServiceEngineList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegParamsServiceEngine[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegParamsServiceEngineOutputReference {
    return new UpgradestatusinfoSegParamsServiceEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_ref Upgradestatusinfo#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_ref Upgradestatusinfo#patch_ref}
  */
  readonly patchRef?: string;
  /**
  * controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#controller Upgradestatusinfo#controller}
  */
  readonly controller?: UpgradestatusinfoSegParamsController[] | cdktf.IResolvable;
  /**
  * se_group_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_options Upgradestatusinfo#se_group_options}
  */
  readonly seGroupOptions?: UpgradestatusinfoSegParamsSeGroupOptions[] | cdktf.IResolvable;
  /**
  * se_group_resume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_resume_options Upgradestatusinfo#se_group_resume_options}
  */
  readonly seGroupResumeOptions?: UpgradestatusinfoSegParamsSeGroupResumeOptions[] | cdktf.IResolvable;
  /**
  * service_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#service_engine Upgradestatusinfo#service_engine}
  */
  readonly serviceEngine?: UpgradestatusinfoSegParamsServiceEngine[] | cdktf.IResolvable;
}

export function upgradestatusinfoSegParamsToTerraform(struct?: UpgradestatusinfoSegParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ref: cdktf.stringToTerraform(struct!.imageRef),
    patch_ref: cdktf.stringToTerraform(struct!.patchRef),
    controller: cdktf.listMapper(upgradestatusinfoSegParamsControllerToTerraform, true)(struct!.controller),
    se_group_options: cdktf.listMapper(upgradestatusinfoSegParamsSeGroupOptionsToTerraform, true)(struct!.seGroupOptions),
    se_group_resume_options: cdktf.listMapper(upgradestatusinfoSegParamsSeGroupResumeOptionsToTerraform, true)(struct!.seGroupResumeOptions),
    service_engine: cdktf.listMapper(upgradestatusinfoSegParamsServiceEngineToTerraform, true)(struct!.serviceEngine),
  }
}


export function upgradestatusinfoSegParamsToHclTerraform(struct?: UpgradestatusinfoSegParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ref: {
      value: cdktf.stringToHclTerraform(struct!.imageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_ref: {
      value: cdktf.stringToHclTerraform(struct!.patchRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegParamsControllerToHclTerraform, true)(struct!.controller),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoSegParamsControllerList",
    },
    se_group_options: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegParamsSeGroupOptionsToHclTerraform, true)(struct!.seGroupOptions),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoSegParamsSeGroupOptionsList",
    },
    se_group_resume_options: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegParamsSeGroupResumeOptionsToHclTerraform, true)(struct!.seGroupResumeOptions),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoSegParamsSeGroupResumeOptionsList",
    },
    service_engine: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegParamsServiceEngineToHclTerraform, true)(struct!.serviceEngine),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoSegParamsServiceEngineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRef = this._imageRef;
    }
    if (this._patchRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchRef = this._patchRef;
    }
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._seGroupOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupOptions = this._seGroupOptions?.internalValue;
    }
    if (this._seGroupResumeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupResumeOptions = this._seGroupResumeOptions?.internalValue;
    }
    if (this._serviceEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEngine = this._serviceEngine?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageRef = undefined;
      this._patchRef = undefined;
      this._controller.internalValue = undefined;
      this._seGroupOptions.internalValue = undefined;
      this._seGroupResumeOptions.internalValue = undefined;
      this._serviceEngine.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageRef = value.imageRef;
      this._patchRef = value.patchRef;
      this._controller.internalValue = value.controller;
      this._seGroupOptions.internalValue = value.seGroupOptions;
      this._seGroupResumeOptions.internalValue = value.seGroupResumeOptions;
      this._serviceEngine.internalValue = value.serviceEngine;
    }
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

  // patch_ref - computed: true, optional: true, required: false
  private _patchRef?: string; 
  public get patchRef() {
    return this.getStringAttribute('patch_ref');
  }
  public set patchRef(value: string) {
    this._patchRef = value;
  }
  public resetPatchRef() {
    this._patchRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchRefInput() {
    return this._patchRef;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new UpgradestatusinfoSegParamsControllerList(this, "controller", true);
  public get controller() {
    return this._controller;
  }
  public putController(value: UpgradestatusinfoSegParamsController[] | cdktf.IResolvable) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // se_group_options - computed: false, optional: true, required: false
  private _seGroupOptions = new UpgradestatusinfoSegParamsSeGroupOptionsList(this, "se_group_options", true);
  public get seGroupOptions() {
    return this._seGroupOptions;
  }
  public putSeGroupOptions(value: UpgradestatusinfoSegParamsSeGroupOptions[] | cdktf.IResolvable) {
    this._seGroupOptions.internalValue = value;
  }
  public resetSeGroupOptions() {
    this._seGroupOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupOptionsInput() {
    return this._seGroupOptions.internalValue;
  }

  // se_group_resume_options - computed: false, optional: true, required: false
  private _seGroupResumeOptions = new UpgradestatusinfoSegParamsSeGroupResumeOptionsList(this, "se_group_resume_options", true);
  public get seGroupResumeOptions() {
    return this._seGroupResumeOptions;
  }
  public putSeGroupResumeOptions(value: UpgradestatusinfoSegParamsSeGroupResumeOptions[] | cdktf.IResolvable) {
    this._seGroupResumeOptions.internalValue = value;
  }
  public resetSeGroupResumeOptions() {
    this._seGroupResumeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupResumeOptionsInput() {
    return this._seGroupResumeOptions.internalValue;
  }

  // service_engine - computed: false, optional: true, required: false
  private _serviceEngine = new UpgradestatusinfoSegParamsServiceEngineList(this, "service_engine", true);
  public get serviceEngine() {
    return this._serviceEngine;
  }
  public putServiceEngine(value: UpgradestatusinfoSegParamsServiceEngine[] | cdktf.IResolvable) {
    this._serviceEngine.internalValue = value;
  }
  public resetServiceEngine() {
    this._serviceEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEngineInput() {
    return this._serviceEngine.internalValue;
  }
}

export class UpgradestatusinfoSegParamsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegParams[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegParamsOutputReference {
    return new UpgradestatusinfoSegParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegStatusSeUpgradeErrors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#from_se_ref Upgradestatusinfo#from_se_ref}
  */
  readonly fromSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se Upgradestatusinfo#num_se}
  */
  readonly numSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_group Upgradestatusinfo#num_se_group}
  */
  readonly numSeGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs Upgradestatusinfo#num_vs}
  */
  readonly numVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ha_mode Upgradestatusinfo#se_group_ha_mode}
  */
  readonly seGroupHaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ref Upgradestatusinfo#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ref Upgradestatusinfo#se_ref}
  */
  readonly seRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#to_se_ref Upgradestatusinfo#to_se_ref}
  */
  readonly toSeRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_ref Upgradestatusinfo#vs_ref}
  */
  readonly vsRef?: string;
}

export function upgradestatusinfoSegStatusSeUpgradeErrorsToTerraform(struct?: UpgradestatusinfoSegStatusSeUpgradeErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_se_ref: cdktf.stringToTerraform(struct!.fromSeRef),
    num_se: cdktf.stringToTerraform(struct!.numSe),
    num_se_group: cdktf.stringToTerraform(struct!.numSeGroup),
    num_vs: cdktf.stringToTerraform(struct!.numVs),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    se_group_ha_mode: cdktf.stringToTerraform(struct!.seGroupHaMode),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    se_ref: cdktf.stringToTerraform(struct!.seRef),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    task: cdktf.stringToTerraform(struct!.task),
    to_se_ref: cdktf.stringToTerraform(struct!.toSeRef),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vs_ref: cdktf.stringToTerraform(struct!.vsRef),
  }
}


export function upgradestatusinfoSegStatusSeUpgradeErrorsToHclTerraform(struct?: UpgradestatusinfoSegStatusSeUpgradeErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.fromSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se: {
      value: cdktf.stringToHclTerraform(struct!.numSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_group: {
      value: cdktf.stringToHclTerraform(struct!.numSeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs: {
      value: cdktf.stringToHclTerraform(struct!.numVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.seGroupHaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRef),
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
    task: {
      value: cdktf.stringToHclTerraform(struct!.task),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_se_ref: {
      value: cdktf.stringToHclTerraform(struct!.toSeRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_ref: {
      value: cdktf.stringToHclTerraform(struct!.vsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegStatusSeUpgradeErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegStatusSeUpgradeErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromSeRef = this._fromSeRef;
    }
    if (this._numSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSe = this._numSe;
    }
    if (this._numSeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeGroup = this._numSeGroup;
    }
    if (this._numVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVs = this._numVs;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._seGroupHaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupHaMode = this._seGroupHaMode;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._seRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRef = this._seRef;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._task !== undefined) {
      hasAnyValues = true;
      internalValueResult.task = this._task;
    }
    if (this._toSeRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.toSeRef = this._toSeRef;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsRef = this._vsRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegStatusSeUpgradeErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromSeRef = undefined;
      this._numSe = undefined;
      this._numSeGroup = undefined;
      this._numVs = undefined;
      this._reason = undefined;
      this._seGroupHaMode = undefined;
      this._seGroupRef = undefined;
      this._seRef = undefined;
      this._subTasks = undefined;
      this._task = undefined;
      this._toSeRef = undefined;
      this._trafficStatus = undefined;
      this._vsRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromSeRef = value.fromSeRef;
      this._numSe = value.numSe;
      this._numSeGroup = value.numSeGroup;
      this._numVs = value.numVs;
      this._reason = value.reason;
      this._seGroupHaMode = value.seGroupHaMode;
      this._seGroupRef = value.seGroupRef;
      this._seRef = value.seRef;
      this._subTasks = value.subTasks;
      this._task = value.task;
      this._toSeRef = value.toSeRef;
      this._trafficStatus = value.trafficStatus;
      this._vsRef = value.vsRef;
    }
  }

  // from_se_ref - computed: true, optional: true, required: false
  private _fromSeRef?: string; 
  public get fromSeRef() {
    return this.getStringAttribute('from_se_ref');
  }
  public set fromSeRef(value: string) {
    this._fromSeRef = value;
  }
  public resetFromSeRef() {
    this._fromSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSeRefInput() {
    return this._fromSeRef;
  }

  // num_se - computed: true, optional: true, required: false
  private _numSe?: string; 
  public get numSe() {
    return this.getStringAttribute('num_se');
  }
  public set numSe(value: string) {
    this._numSe = value;
  }
  public resetNumSe() {
    this._numSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeInput() {
    return this._numSe;
  }

  // num_se_group - computed: true, optional: true, required: false
  private _numSeGroup?: string; 
  public get numSeGroup() {
    return this.getStringAttribute('num_se_group');
  }
  public set numSeGroup(value: string) {
    this._numSeGroup = value;
  }
  public resetNumSeGroup() {
    this._numSeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeGroupInput() {
    return this._numSeGroup;
  }

  // num_vs - computed: true, optional: true, required: false
  private _numVs?: string; 
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }
  public set numVs(value: string) {
    this._numVs = value;
  }
  public resetNumVs() {
    this._numVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsInput() {
    return this._numVs;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // se_group_ha_mode - computed: true, optional: true, required: false
  private _seGroupHaMode?: string; 
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }
  public set seGroupHaMode(value: string) {
    this._seGroupHaMode = value;
  }
  public resetSeGroupHaMode() {
    this._seGroupHaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupHaModeInput() {
    return this._seGroupHaMode;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // se_ref - computed: true, optional: true, required: false
  private _seRef?: string; 
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }
  public set seRef(value: string) {
    this._seRef = value;
  }
  public resetSeRef() {
    this._seRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRefInput() {
    return this._seRef;
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

  // to_se_ref - computed: true, optional: true, required: false
  private _toSeRef?: string; 
  public get toSeRef() {
    return this.getStringAttribute('to_se_ref');
  }
  public set toSeRef(value: string) {
    this._toSeRef = value;
  }
  public resetToSeRef() {
    this._toSeRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toSeRefInput() {
    return this._toSeRef;
  }

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vs_ref - computed: true, optional: true, required: false
  private _vsRef?: string; 
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
  public set vsRef(value: string) {
    this._vsRef = value;
  }
  public resetVsRef() {
    this._vsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsRefInput() {
    return this._vsRef;
  }
}

export class UpgradestatusinfoSegStatusSeUpgradeErrorsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegStatusSeUpgradeErrors[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegStatusSeUpgradeErrorsOutputReference {
    return new UpgradestatusinfoSegStatusSeUpgradeErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegStatusVsErrorsEventTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#secs Upgradestatusinfo#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#usecs Upgradestatusinfo#usecs}
  */
  readonly usecs: string;
}

export function upgradestatusinfoSegStatusVsErrorsEventTimestampToTerraform(struct?: UpgradestatusinfoSegStatusVsErrorsEventTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatusinfoSegStatusVsErrorsEventTimestampToHclTerraform(struct?: UpgradestatusinfoSegStatusVsErrorsEventTimestamp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoSegStatusVsErrorsEventTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegStatusVsErrorsEventTimestamp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoSegStatusVsErrorsEventTimestamp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoSegStatusVsErrorsEventTimestampList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegStatusVsErrorsEventTimestamp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegStatusVsErrorsEventTimestampOutputReference {
    return new UpgradestatusinfoSegStatusVsErrorsEventTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegStatusVsErrors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ha_mode Upgradestatusinfo#se_group_ha_mode}
  */
  readonly seGroupHaMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_ref Upgradestatusinfo#se_group_ref}
  */
  readonly seGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ref Upgradestatusinfo#se_ref}
  */
  readonly seRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tenant_ref Upgradestatusinfo#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vip_id Upgradestatusinfo#vip_id}
  */
  readonly vipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_ref Upgradestatusinfo#vs_ref}
  */
  readonly vsRef?: string;
  /**
  * event_timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#event_timestamp Upgradestatusinfo#event_timestamp}
  */
  readonly eventTimestamp?: UpgradestatusinfoSegStatusVsErrorsEventTimestamp[] | cdktf.IResolvable;
}

export function upgradestatusinfoSegStatusVsErrorsToTerraform(struct?: UpgradestatusinfoSegStatusVsErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    se_group_ha_mode: cdktf.stringToTerraform(struct!.seGroupHaMode),
    se_group_ref: cdktf.stringToTerraform(struct!.seGroupRef),
    se_ref: cdktf.stringToTerraform(struct!.seRef),
    tenant_ref: cdktf.stringToTerraform(struct!.tenantRef),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vip_id: cdktf.stringToTerraform(struct!.vipId),
    vs_ref: cdktf.stringToTerraform(struct!.vsRef),
    event_timestamp: cdktf.listMapper(upgradestatusinfoSegStatusVsErrorsEventTimestampToTerraform, true)(struct!.eventTimestamp),
  }
}


export function upgradestatusinfoSegStatusVsErrorsToHclTerraform(struct?: UpgradestatusinfoSegStatusVsErrors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.seGroupHaMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.seGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_ref: {
      value: cdktf.stringToHclTerraform(struct!.tenantRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_id: {
      value: cdktf.stringToHclTerraform(struct!.vipId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_ref: {
      value: cdktf.stringToHclTerraform(struct!.vsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_timestamp: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegStatusVsErrorsEventTimestampToHclTerraform, true)(struct!.eventTimestamp),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoSegStatusVsErrorsEventTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegStatusVsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegStatusVsErrors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._seGroupHaMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupHaMode = this._seGroupHaMode;
    }
    if (this._seGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupRef = this._seGroupRef;
    }
    if (this._seRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRef = this._seRef;
    }
    if (this._tenantRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRef = this._tenantRef;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vipId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipId = this._vipId;
    }
    if (this._vsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsRef = this._vsRef;
    }
    if (this._eventTimestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimestamp = this._eventTimestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegStatusVsErrors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._seGroupHaMode = undefined;
      this._seGroupRef = undefined;
      this._seRef = undefined;
      this._tenantRef = undefined;
      this._trafficStatus = undefined;
      this._vipId = undefined;
      this._vsRef = undefined;
      this._eventTimestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._seGroupHaMode = value.seGroupHaMode;
      this._seGroupRef = value.seGroupRef;
      this._seRef = value.seRef;
      this._tenantRef = value.tenantRef;
      this._trafficStatus = value.trafficStatus;
      this._vipId = value.vipId;
      this._vsRef = value.vsRef;
      this._eventTimestamp.internalValue = value.eventTimestamp;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // se_group_ha_mode - computed: true, optional: true, required: false
  private _seGroupHaMode?: string; 
  public get seGroupHaMode() {
    return this.getStringAttribute('se_group_ha_mode');
  }
  public set seGroupHaMode(value: string) {
    this._seGroupHaMode = value;
  }
  public resetSeGroupHaMode() {
    this._seGroupHaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupHaModeInput() {
    return this._seGroupHaMode;
  }

  // se_group_ref - computed: true, optional: true, required: false
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  public resetSeGroupRef() {
    this._seGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // se_ref - computed: true, optional: true, required: false
  private _seRef?: string; 
  public get seRef() {
    return this.getStringAttribute('se_ref');
  }
  public set seRef(value: string) {
    this._seRef = value;
  }
  public resetSeRef() {
    this._seRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRefInput() {
    return this._seRef;
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

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vip_id - computed: true, optional: true, required: false
  private _vipId?: string; 
  public get vipId() {
    return this.getStringAttribute('vip_id');
  }
  public set vipId(value: string) {
    this._vipId = value;
  }
  public resetVipId() {
    this._vipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipIdInput() {
    return this._vipId;
  }

  // vs_ref - computed: true, optional: true, required: false
  private _vsRef?: string; 
  public get vsRef() {
    return this.getStringAttribute('vs_ref');
  }
  public set vsRef(value: string) {
    this._vsRef = value;
  }
  public resetVsRef() {
    this._vsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsRefInput() {
    return this._vsRef;
  }

  // event_timestamp - computed: false, optional: true, required: false
  private _eventTimestamp = new UpgradestatusinfoSegStatusVsErrorsEventTimestampList(this, "event_timestamp", true);
  public get eventTimestamp() {
    return this._eventTimestamp;
  }
  public putEventTimestamp(value: UpgradestatusinfoSegStatusVsErrorsEventTimestamp[] | cdktf.IResolvable) {
    this._eventTimestamp.internalValue = value;
  }
  public resetEventTimestamp() {
    this._eventTimestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimestampInput() {
    return this._eventTimestamp.internalValue;
  }
}

export class UpgradestatusinfoSegStatusVsErrorsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegStatusVsErrors[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegStatusVsErrorsOutputReference {
    return new UpgradestatusinfoSegStatusVsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoSegStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#controller_version Upgradestatusinfo#controller_version}
  */
  readonly controllerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#disrupted_vs_ref Upgradestatusinfo#disrupted_vs_ref}
  */
  readonly disruptedVsRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#enqueue_time Upgradestatusinfo#enqueue_time}
  */
  readonly enqueueTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ha_mode Upgradestatusinfo#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#in_progress Upgradestatusinfo#in_progress}
  */
  readonly inProgress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#notes Upgradestatusinfo#notes}
  */
  readonly notes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se Upgradestatusinfo#num_se}
  */
  readonly numSe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_with_no_vs Upgradestatusinfo#num_se_with_no_vs}
  */
  readonly numSeWithNoVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_with_vs_not_scaledout Upgradestatusinfo#num_se_with_vs_not_scaledout}
  */
  readonly numSeWithVsNotScaledout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_se_with_vs_scaledout Upgradestatusinfo#num_se_with_vs_scaledout}
  */
  readonly numSeWithVsScaledout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs Upgradestatusinfo#num_vs}
  */
  readonly numVs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#num_vs_disrupted Upgradestatusinfo#num_vs_disrupted}
  */
  readonly numVsDisrupted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#progress Upgradestatusinfo#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#request_time Upgradestatusinfo#request_time}
  */
  readonly requestTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_already_upgraded_at_start Upgradestatusinfo#se_already_upgraded_at_start}
  */
  readonly seAlreadyUpgradedAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_disconnected_at_start Upgradestatusinfo#se_disconnected_at_start}
  */
  readonly seDisconnectedAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_name Upgradestatusinfo#se_group_name}
  */
  readonly seGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_group_uuid Upgradestatusinfo#se_group_uuid}
  */
  readonly seGroupUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_ip_missing_at_start Upgradestatusinfo#se_ip_missing_at_start}
  */
  readonly seIpMissingAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_poweredoff_at_start Upgradestatusinfo#se_poweredoff_at_start}
  */
  readonly sePoweredoffAtStart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_reboot_in_progress_ref Upgradestatusinfo#se_reboot_in_progress_ref}
  */
  readonly seRebootInProgressRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_completed Upgradestatusinfo#se_upgrade_completed}
  */
  readonly seUpgradeCompleted?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_failed Upgradestatusinfo#se_upgrade_failed}
  */
  readonly seUpgradeFailed?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_in_progress Upgradestatusinfo#se_upgrade_in_progress}
  */
  readonly seUpgradeInProgress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_not_started Upgradestatusinfo#se_upgrade_not_started}
  */
  readonly seUpgradeNotStarted?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_skip_suspended Upgradestatusinfo#se_upgrade_skip_suspended}
  */
  readonly seUpgradeSkipSuspended?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_suspended Upgradestatusinfo#se_upgrade_suspended}
  */
  readonly seUpgradeSuspended?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_with_no_vs Upgradestatusinfo#se_with_no_vs}
  */
  readonly seWithNoVs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_with_vs_not_scaledout Upgradestatusinfo#se_with_vs_not_scaledout}
  */
  readonly seWithVsNotScaledout?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_with_vs_scaledout Upgradestatusinfo#se_with_vs_scaledout}
  */
  readonly seWithVsScaledout?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#tenant_ref Upgradestatusinfo#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#thread Upgradestatusinfo#thread}
  */
  readonly thread?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#traffic_status Upgradestatusinfo#traffic_status}
  */
  readonly trafficStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_migrate_in_progress_ref Upgradestatusinfo#vs_migrate_in_progress_ref}
  */
  readonly vsMigrateInProgressRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_scalein_in_progress_ref Upgradestatusinfo#vs_scalein_in_progress_ref}
  */
  readonly vsScaleinInProgressRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_scaleout_in_progress_ref Upgradestatusinfo#vs_scaleout_in_progress_ref}
  */
  readonly vsScaleoutInProgressRef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#worker Upgradestatusinfo#worker}
  */
  readonly worker?: string;
  /**
  * se_upgrade_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#se_upgrade_errors Upgradestatusinfo#se_upgrade_errors}
  */
  readonly seUpgradeErrors?: UpgradestatusinfoSegStatusSeUpgradeErrors[] | cdktf.IResolvable;
  /**
  * vs_errors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#vs_errors Upgradestatusinfo#vs_errors}
  */
  readonly vsErrors?: UpgradestatusinfoSegStatusVsErrors[] | cdktf.IResolvable;
}

export function upgradestatusinfoSegStatusToTerraform(struct?: UpgradestatusinfoSegStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_version: cdktf.stringToTerraform(struct!.controllerVersion),
    disrupted_vs_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disruptedVsRef),
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    enqueue_time: cdktf.stringToTerraform(struct!.enqueueTime),
    ha_mode: cdktf.stringToTerraform(struct!.haMode),
    in_progress: cdktf.stringToTerraform(struct!.inProgress),
    notes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notes),
    num_se: cdktf.stringToTerraform(struct!.numSe),
    num_se_with_no_vs: cdktf.stringToTerraform(struct!.numSeWithNoVs),
    num_se_with_vs_not_scaledout: cdktf.stringToTerraform(struct!.numSeWithVsNotScaledout),
    num_se_with_vs_scaledout: cdktf.stringToTerraform(struct!.numSeWithVsScaledout),
    num_vs: cdktf.stringToTerraform(struct!.numVs),
    num_vs_disrupted: cdktf.stringToTerraform(struct!.numVsDisrupted),
    progress: cdktf.stringToTerraform(struct!.progress),
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    request_time: cdktf.stringToTerraform(struct!.requestTime),
    se_already_upgraded_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seAlreadyUpgradedAtStart),
    se_disconnected_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seDisconnectedAtStart),
    se_group_name: cdktf.stringToTerraform(struct!.seGroupName),
    se_group_uuid: cdktf.stringToTerraform(struct!.seGroupUuid),
    se_ip_missing_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seIpMissingAtStart),
    se_poweredoff_at_start: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sePoweredoffAtStart),
    se_reboot_in_progress_ref: cdktf.stringToTerraform(struct!.seRebootInProgressRef),
    se_upgrade_completed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeCompleted),
    se_upgrade_failed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeFailed),
    se_upgrade_in_progress: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeInProgress),
    se_upgrade_not_started: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeNotStarted),
    se_upgrade_skip_suspended: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeSkipSuspended),
    se_upgrade_suspended: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seUpgradeSuspended),
    se_with_no_vs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seWithNoVs),
    se_with_vs_not_scaledout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seWithVsNotScaledout),
    se_with_vs_scaledout: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seWithVsScaledout),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    tenant_ref: cdktf.stringToTerraform(struct!.tenantRef),
    thread: cdktf.stringToTerraform(struct!.thread),
    traffic_status: cdktf.stringToTerraform(struct!.trafficStatus),
    vs_migrate_in_progress_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vsMigrateInProgressRef),
    vs_scalein_in_progress_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vsScaleinInProgressRef),
    vs_scaleout_in_progress_ref: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vsScaleoutInProgressRef),
    worker: cdktf.stringToTerraform(struct!.worker),
    se_upgrade_errors: cdktf.listMapper(upgradestatusinfoSegStatusSeUpgradeErrorsToTerraform, true)(struct!.seUpgradeErrors),
    vs_errors: cdktf.listMapper(upgradestatusinfoSegStatusVsErrorsToTerraform, true)(struct!.vsErrors),
  }
}


export function upgradestatusinfoSegStatusToHclTerraform(struct?: UpgradestatusinfoSegStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_version: {
      value: cdktf.stringToHclTerraform(struct!.controllerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disrupted_vs_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disruptedVsRef),
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
    enqueue_time: {
      value: cdktf.stringToHclTerraform(struct!.enqueueTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.haMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_progress: {
      value: cdktf.stringToHclTerraform(struct!.inProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    num_se: {
      value: cdktf.stringToHclTerraform(struct!.numSe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_with_no_vs: {
      value: cdktf.stringToHclTerraform(struct!.numSeWithNoVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_with_vs_not_scaledout: {
      value: cdktf.stringToHclTerraform(struct!.numSeWithVsNotScaledout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_se_with_vs_scaledout: {
      value: cdktf.stringToHclTerraform(struct!.numSeWithVsScaledout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs: {
      value: cdktf.stringToHclTerraform(struct!.numVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_vs_disrupted: {
      value: cdktf.stringToHclTerraform(struct!.numVsDisrupted),
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
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_time: {
      value: cdktf.stringToHclTerraform(struct!.requestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_already_upgraded_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seAlreadyUpgradedAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_disconnected_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seDisconnectedAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_group_name: {
      value: cdktf.stringToHclTerraform(struct!.seGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_group_uuid: {
      value: cdktf.stringToHclTerraform(struct!.seGroupUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_ip_missing_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seIpMissingAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_poweredoff_at_start: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sePoweredoffAtStart),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_reboot_in_progress_ref: {
      value: cdktf.stringToHclTerraform(struct!.seRebootInProgressRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_upgrade_completed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeCompleted),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_failed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeFailed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_in_progress: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeInProgress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_not_started: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeNotStarted),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_skip_suspended: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeSkipSuspended),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_upgrade_suspended: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seUpgradeSuspended),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_with_no_vs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seWithNoVs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_with_vs_not_scaledout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seWithVsNotScaledout),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    se_with_vs_scaledout: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seWithVsScaledout),
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
    tenant_ref: {
      value: cdktf.stringToHclTerraform(struct!.tenantRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thread: {
      value: cdktf.stringToHclTerraform(struct!.thread),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_status: {
      value: cdktf.stringToHclTerraform(struct!.trafficStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vs_migrate_in_progress_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vsMigrateInProgressRef),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vs_scalein_in_progress_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vsScaleinInProgressRef),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vs_scaleout_in_progress_ref: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vsScaleoutInProgressRef),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    worker: {
      value: cdktf.stringToHclTerraform(struct!.worker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_upgrade_errors: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegStatusSeUpgradeErrorsToHclTerraform, true)(struct!.seUpgradeErrors),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoSegStatusSeUpgradeErrorsList",
    },
    vs_errors: {
      value: cdktf.listMapperHcl(upgradestatusinfoSegStatusVsErrorsToHclTerraform, true)(struct!.vsErrors),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoSegStatusVsErrorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoSegStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoSegStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVersion = this._controllerVersion;
    }
    if (this._disruptedVsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptedVsRef = this._disruptedVsRef;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._enqueueTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueTime = this._enqueueTime;
    }
    if (this._haMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.haMode = this._haMode;
    }
    if (this._inProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inProgress = this._inProgress;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._numSe !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSe = this._numSe;
    }
    if (this._numSeWithNoVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeWithNoVs = this._numSeWithNoVs;
    }
    if (this._numSeWithVsNotScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeWithVsNotScaledout = this._numSeWithVsNotScaledout;
    }
    if (this._numSeWithVsScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSeWithVsScaledout = this._numSeWithVsScaledout;
    }
    if (this._numVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVs = this._numVs;
    }
    if (this._numVsDisrupted !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVsDisrupted = this._numVsDisrupted;
    }
    if (this._progress !== undefined) {
      hasAnyValues = true;
      internalValueResult.progress = this._progress;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._requestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTime = this._requestTime;
    }
    if (this._seAlreadyUpgradedAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAlreadyUpgradedAtStart = this._seAlreadyUpgradedAtStart;
    }
    if (this._seDisconnectedAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.seDisconnectedAtStart = this._seDisconnectedAtStart;
    }
    if (this._seGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupName = this._seGroupName;
    }
    if (this._seGroupUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.seGroupUuid = this._seGroupUuid;
    }
    if (this._seIpMissingAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.seIpMissingAtStart = this._seIpMissingAtStart;
    }
    if (this._sePoweredoffAtStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sePoweredoffAtStart = this._sePoweredoffAtStart;
    }
    if (this._seRebootInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.seRebootInProgressRef = this._seRebootInProgressRef;
    }
    if (this._seUpgradeCompleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeCompleted = this._seUpgradeCompleted;
    }
    if (this._seUpgradeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeFailed = this._seUpgradeFailed;
    }
    if (this._seUpgradeInProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeInProgress = this._seUpgradeInProgress;
    }
    if (this._seUpgradeNotStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeNotStarted = this._seUpgradeNotStarted;
    }
    if (this._seUpgradeSkipSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeSkipSuspended = this._seUpgradeSkipSuspended;
    }
    if (this._seUpgradeSuspended !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeSuspended = this._seUpgradeSuspended;
    }
    if (this._seWithNoVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.seWithNoVs = this._seWithNoVs;
    }
    if (this._seWithVsNotScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seWithVsNotScaledout = this._seWithVsNotScaledout;
    }
    if (this._seWithVsScaledout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seWithVsScaledout = this._seWithVsScaledout;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tenantRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantRef = this._tenantRef;
    }
    if (this._thread !== undefined) {
      hasAnyValues = true;
      internalValueResult.thread = this._thread;
    }
    if (this._trafficStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficStatus = this._trafficStatus;
    }
    if (this._vsMigrateInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsMigrateInProgressRef = this._vsMigrateInProgressRef;
    }
    if (this._vsScaleinInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsScaleinInProgressRef = this._vsScaleinInProgressRef;
    }
    if (this._vsScaleoutInProgressRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsScaleoutInProgressRef = this._vsScaleoutInProgressRef;
    }
    if (this._worker !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker;
    }
    if (this._seUpgradeErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seUpgradeErrors = this._seUpgradeErrors?.internalValue;
    }
    if (this._vsErrors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsErrors = this._vsErrors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradestatusinfoSegStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerVersion = undefined;
      this._disruptedVsRef = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._enqueueTime = undefined;
      this._haMode = undefined;
      this._inProgress = undefined;
      this._notes = undefined;
      this._numSe = undefined;
      this._numSeWithNoVs = undefined;
      this._numSeWithVsNotScaledout = undefined;
      this._numSeWithVsScaledout = undefined;
      this._numVs = undefined;
      this._numVsDisrupted = undefined;
      this._progress = undefined;
      this._reason = undefined;
      this._requestTime = undefined;
      this._seAlreadyUpgradedAtStart = undefined;
      this._seDisconnectedAtStart = undefined;
      this._seGroupName = undefined;
      this._seGroupUuid = undefined;
      this._seIpMissingAtStart = undefined;
      this._sePoweredoffAtStart = undefined;
      this._seRebootInProgressRef = undefined;
      this._seUpgradeCompleted = undefined;
      this._seUpgradeFailed = undefined;
      this._seUpgradeInProgress = undefined;
      this._seUpgradeNotStarted = undefined;
      this._seUpgradeSkipSuspended = undefined;
      this._seUpgradeSuspended = undefined;
      this._seWithNoVs = undefined;
      this._seWithVsNotScaledout = undefined;
      this._seWithVsScaledout = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._tenantRef = undefined;
      this._thread = undefined;
      this._trafficStatus = undefined;
      this._vsMigrateInProgressRef = undefined;
      this._vsScaleinInProgressRef = undefined;
      this._vsScaleoutInProgressRef = undefined;
      this._worker = undefined;
      this._seUpgradeErrors.internalValue = undefined;
      this._vsErrors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerVersion = value.controllerVersion;
      this._disruptedVsRef = value.disruptedVsRef;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._enqueueTime = value.enqueueTime;
      this._haMode = value.haMode;
      this._inProgress = value.inProgress;
      this._notes = value.notes;
      this._numSe = value.numSe;
      this._numSeWithNoVs = value.numSeWithNoVs;
      this._numSeWithVsNotScaledout = value.numSeWithVsNotScaledout;
      this._numSeWithVsScaledout = value.numSeWithVsScaledout;
      this._numVs = value.numVs;
      this._numVsDisrupted = value.numVsDisrupted;
      this._progress = value.progress;
      this._reason = value.reason;
      this._requestTime = value.requestTime;
      this._seAlreadyUpgradedAtStart = value.seAlreadyUpgradedAtStart;
      this._seDisconnectedAtStart = value.seDisconnectedAtStart;
      this._seGroupName = value.seGroupName;
      this._seGroupUuid = value.seGroupUuid;
      this._seIpMissingAtStart = value.seIpMissingAtStart;
      this._sePoweredoffAtStart = value.sePoweredoffAtStart;
      this._seRebootInProgressRef = value.seRebootInProgressRef;
      this._seUpgradeCompleted = value.seUpgradeCompleted;
      this._seUpgradeFailed = value.seUpgradeFailed;
      this._seUpgradeInProgress = value.seUpgradeInProgress;
      this._seUpgradeNotStarted = value.seUpgradeNotStarted;
      this._seUpgradeSkipSuspended = value.seUpgradeSkipSuspended;
      this._seUpgradeSuspended = value.seUpgradeSuspended;
      this._seWithNoVs = value.seWithNoVs;
      this._seWithVsNotScaledout = value.seWithVsNotScaledout;
      this._seWithVsScaledout = value.seWithVsScaledout;
      this._startTime = value.startTime;
      this._state = value.state;
      this._tenantRef = value.tenantRef;
      this._thread = value.thread;
      this._trafficStatus = value.trafficStatus;
      this._vsMigrateInProgressRef = value.vsMigrateInProgressRef;
      this._vsScaleinInProgressRef = value.vsScaleinInProgressRef;
      this._vsScaleoutInProgressRef = value.vsScaleoutInProgressRef;
      this._worker = value.worker;
      this._seUpgradeErrors.internalValue = value.seUpgradeErrors;
      this._vsErrors.internalValue = value.vsErrors;
    }
  }

  // controller_version - computed: true, optional: true, required: false
  private _controllerVersion?: string; 
  public get controllerVersion() {
    return this.getStringAttribute('controller_version');
  }
  public set controllerVersion(value: string) {
    this._controllerVersion = value;
  }
  public resetControllerVersion() {
    this._controllerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVersionInput() {
    return this._controllerVersion;
  }

  // disrupted_vs_ref - computed: false, optional: true, required: false
  private _disruptedVsRef?: string[]; 
  public get disruptedVsRef() {
    return this.getListAttribute('disrupted_vs_ref');
  }
  public set disruptedVsRef(value: string[]) {
    this._disruptedVsRef = value;
  }
  public resetDisruptedVsRef() {
    this._disruptedVsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptedVsRefInput() {
    return this._disruptedVsRef;
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

  // enqueue_time - computed: true, optional: true, required: false
  private _enqueueTime?: string; 
  public get enqueueTime() {
    return this.getStringAttribute('enqueue_time');
  }
  public set enqueueTime(value: string) {
    this._enqueueTime = value;
  }
  public resetEnqueueTime() {
    this._enqueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueTimeInput() {
    return this._enqueueTime;
  }

  // ha_mode - computed: true, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
  }

  // in_progress - computed: true, optional: true, required: false
  private _inProgress?: string; 
  public get inProgress() {
    return this.getStringAttribute('in_progress');
  }
  public set inProgress(value: string) {
    this._inProgress = value;
  }
  public resetInProgress() {
    this._inProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProgressInput() {
    return this._inProgress;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string[]; 
  public get notes() {
    return this.getListAttribute('notes');
  }
  public set notes(value: string[]) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // num_se - computed: true, optional: true, required: false
  private _numSe?: string; 
  public get numSe() {
    return this.getStringAttribute('num_se');
  }
  public set numSe(value: string) {
    this._numSe = value;
  }
  public resetNumSe() {
    this._numSe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeInput() {
    return this._numSe;
  }

  // num_se_with_no_vs - computed: true, optional: true, required: false
  private _numSeWithNoVs?: string; 
  public get numSeWithNoVs() {
    return this.getStringAttribute('num_se_with_no_vs');
  }
  public set numSeWithNoVs(value: string) {
    this._numSeWithNoVs = value;
  }
  public resetNumSeWithNoVs() {
    this._numSeWithNoVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeWithNoVsInput() {
    return this._numSeWithNoVs;
  }

  // num_se_with_vs_not_scaledout - computed: true, optional: true, required: false
  private _numSeWithVsNotScaledout?: string; 
  public get numSeWithVsNotScaledout() {
    return this.getStringAttribute('num_se_with_vs_not_scaledout');
  }
  public set numSeWithVsNotScaledout(value: string) {
    this._numSeWithVsNotScaledout = value;
  }
  public resetNumSeWithVsNotScaledout() {
    this._numSeWithVsNotScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeWithVsNotScaledoutInput() {
    return this._numSeWithVsNotScaledout;
  }

  // num_se_with_vs_scaledout - computed: true, optional: true, required: false
  private _numSeWithVsScaledout?: string; 
  public get numSeWithVsScaledout() {
    return this.getStringAttribute('num_se_with_vs_scaledout');
  }
  public set numSeWithVsScaledout(value: string) {
    this._numSeWithVsScaledout = value;
  }
  public resetNumSeWithVsScaledout() {
    this._numSeWithVsScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSeWithVsScaledoutInput() {
    return this._numSeWithVsScaledout;
  }

  // num_vs - computed: true, optional: true, required: false
  private _numVs?: string; 
  public get numVs() {
    return this.getStringAttribute('num_vs');
  }
  public set numVs(value: string) {
    this._numVs = value;
  }
  public resetNumVs() {
    this._numVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsInput() {
    return this._numVs;
  }

  // num_vs_disrupted - computed: true, optional: true, required: false
  private _numVsDisrupted?: string; 
  public get numVsDisrupted() {
    return this.getStringAttribute('num_vs_disrupted');
  }
  public set numVsDisrupted(value: string) {
    this._numVsDisrupted = value;
  }
  public resetNumVsDisrupted() {
    this._numVsDisrupted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numVsDisruptedInput() {
    return this._numVsDisrupted;
  }

  // progress - computed: true, optional: true, required: false
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

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // request_time - computed: true, optional: true, required: false
  private _requestTime?: string; 
  public get requestTime() {
    return this.getStringAttribute('request_time');
  }
  public set requestTime(value: string) {
    this._requestTime = value;
  }
  public resetRequestTime() {
    this._requestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeInput() {
    return this._requestTime;
  }

  // se_already_upgraded_at_start - computed: false, optional: true, required: false
  private _seAlreadyUpgradedAtStart?: string[]; 
  public get seAlreadyUpgradedAtStart() {
    return this.getListAttribute('se_already_upgraded_at_start');
  }
  public set seAlreadyUpgradedAtStart(value: string[]) {
    this._seAlreadyUpgradedAtStart = value;
  }
  public resetSeAlreadyUpgradedAtStart() {
    this._seAlreadyUpgradedAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAlreadyUpgradedAtStartInput() {
    return this._seAlreadyUpgradedAtStart;
  }

  // se_disconnected_at_start - computed: false, optional: true, required: false
  private _seDisconnectedAtStart?: string[]; 
  public get seDisconnectedAtStart() {
    return this.getListAttribute('se_disconnected_at_start');
  }
  public set seDisconnectedAtStart(value: string[]) {
    this._seDisconnectedAtStart = value;
  }
  public resetSeDisconnectedAtStart() {
    this._seDisconnectedAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seDisconnectedAtStartInput() {
    return this._seDisconnectedAtStart;
  }

  // se_group_name - computed: true, optional: true, required: false
  private _seGroupName?: string; 
  public get seGroupName() {
    return this.getStringAttribute('se_group_name');
  }
  public set seGroupName(value: string) {
    this._seGroupName = value;
  }
  public resetSeGroupName() {
    this._seGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupNameInput() {
    return this._seGroupName;
  }

  // se_group_uuid - computed: true, optional: true, required: false
  private _seGroupUuid?: string; 
  public get seGroupUuid() {
    return this.getStringAttribute('se_group_uuid');
  }
  public set seGroupUuid(value: string) {
    this._seGroupUuid = value;
  }
  public resetSeGroupUuid() {
    this._seGroupUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupUuidInput() {
    return this._seGroupUuid;
  }

  // se_ip_missing_at_start - computed: false, optional: true, required: false
  private _seIpMissingAtStart?: string[]; 
  public get seIpMissingAtStart() {
    return this.getListAttribute('se_ip_missing_at_start');
  }
  public set seIpMissingAtStart(value: string[]) {
    this._seIpMissingAtStart = value;
  }
  public resetSeIpMissingAtStart() {
    this._seIpMissingAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seIpMissingAtStartInput() {
    return this._seIpMissingAtStart;
  }

  // se_poweredoff_at_start - computed: false, optional: true, required: false
  private _sePoweredoffAtStart?: string[]; 
  public get sePoweredoffAtStart() {
    return this.getListAttribute('se_poweredoff_at_start');
  }
  public set sePoweredoffAtStart(value: string[]) {
    this._sePoweredoffAtStart = value;
  }
  public resetSePoweredoffAtStart() {
    this._sePoweredoffAtStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePoweredoffAtStartInput() {
    return this._sePoweredoffAtStart;
  }

  // se_reboot_in_progress_ref - computed: true, optional: true, required: false
  private _seRebootInProgressRef?: string; 
  public get seRebootInProgressRef() {
    return this.getStringAttribute('se_reboot_in_progress_ref');
  }
  public set seRebootInProgressRef(value: string) {
    this._seRebootInProgressRef = value;
  }
  public resetSeRebootInProgressRef() {
    this._seRebootInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seRebootInProgressRefInput() {
    return this._seRebootInProgressRef;
  }

  // se_upgrade_completed - computed: false, optional: true, required: false
  private _seUpgradeCompleted?: string[]; 
  public get seUpgradeCompleted() {
    return this.getListAttribute('se_upgrade_completed');
  }
  public set seUpgradeCompleted(value: string[]) {
    this._seUpgradeCompleted = value;
  }
  public resetSeUpgradeCompleted() {
    this._seUpgradeCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeCompletedInput() {
    return this._seUpgradeCompleted;
  }

  // se_upgrade_failed - computed: false, optional: true, required: false
  private _seUpgradeFailed?: string[]; 
  public get seUpgradeFailed() {
    return this.getListAttribute('se_upgrade_failed');
  }
  public set seUpgradeFailed(value: string[]) {
    this._seUpgradeFailed = value;
  }
  public resetSeUpgradeFailed() {
    this._seUpgradeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeFailedInput() {
    return this._seUpgradeFailed;
  }

  // se_upgrade_in_progress - computed: false, optional: true, required: false
  private _seUpgradeInProgress?: string[]; 
  public get seUpgradeInProgress() {
    return this.getListAttribute('se_upgrade_in_progress');
  }
  public set seUpgradeInProgress(value: string[]) {
    this._seUpgradeInProgress = value;
  }
  public resetSeUpgradeInProgress() {
    this._seUpgradeInProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeInProgressInput() {
    return this._seUpgradeInProgress;
  }

  // se_upgrade_not_started - computed: false, optional: true, required: false
  private _seUpgradeNotStarted?: string[]; 
  public get seUpgradeNotStarted() {
    return this.getListAttribute('se_upgrade_not_started');
  }
  public set seUpgradeNotStarted(value: string[]) {
    this._seUpgradeNotStarted = value;
  }
  public resetSeUpgradeNotStarted() {
    this._seUpgradeNotStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeNotStartedInput() {
    return this._seUpgradeNotStarted;
  }

  // se_upgrade_skip_suspended - computed: false, optional: true, required: false
  private _seUpgradeSkipSuspended?: string[]; 
  public get seUpgradeSkipSuspended() {
    return this.getListAttribute('se_upgrade_skip_suspended');
  }
  public set seUpgradeSkipSuspended(value: string[]) {
    this._seUpgradeSkipSuspended = value;
  }
  public resetSeUpgradeSkipSuspended() {
    this._seUpgradeSkipSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeSkipSuspendedInput() {
    return this._seUpgradeSkipSuspended;
  }

  // se_upgrade_suspended - computed: false, optional: true, required: false
  private _seUpgradeSuspended?: string[]; 
  public get seUpgradeSuspended() {
    return this.getListAttribute('se_upgrade_suspended');
  }
  public set seUpgradeSuspended(value: string[]) {
    this._seUpgradeSuspended = value;
  }
  public resetSeUpgradeSuspended() {
    this._seUpgradeSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeSuspendedInput() {
    return this._seUpgradeSuspended;
  }

  // se_with_no_vs - computed: false, optional: true, required: false
  private _seWithNoVs?: string[]; 
  public get seWithNoVs() {
    return this.getListAttribute('se_with_no_vs');
  }
  public set seWithNoVs(value: string[]) {
    this._seWithNoVs = value;
  }
  public resetSeWithNoVs() {
    this._seWithNoVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seWithNoVsInput() {
    return this._seWithNoVs;
  }

  // se_with_vs_not_scaledout - computed: false, optional: true, required: false
  private _seWithVsNotScaledout?: string[]; 
  public get seWithVsNotScaledout() {
    return this.getListAttribute('se_with_vs_not_scaledout');
  }
  public set seWithVsNotScaledout(value: string[]) {
    this._seWithVsNotScaledout = value;
  }
  public resetSeWithVsNotScaledout() {
    this._seWithVsNotScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seWithVsNotScaledoutInput() {
    return this._seWithVsNotScaledout;
  }

  // se_with_vs_scaledout - computed: false, optional: true, required: false
  private _seWithVsScaledout?: string[]; 
  public get seWithVsScaledout() {
    return this.getListAttribute('se_with_vs_scaledout');
  }
  public set seWithVsScaledout(value: string[]) {
    this._seWithVsScaledout = value;
  }
  public resetSeWithVsScaledout() {
    this._seWithVsScaledout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seWithVsScaledoutInput() {
    return this._seWithVsScaledout;
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

  // thread - computed: true, optional: true, required: false
  private _thread?: string; 
  public get thread() {
    return this.getStringAttribute('thread');
  }
  public set thread(value: string) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // traffic_status - computed: true, optional: true, required: false
  private _trafficStatus?: string; 
  public get trafficStatus() {
    return this.getStringAttribute('traffic_status');
  }
  public set trafficStatus(value: string) {
    this._trafficStatus = value;
  }
  public resetTrafficStatus() {
    this._trafficStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficStatusInput() {
    return this._trafficStatus;
  }

  // vs_migrate_in_progress_ref - computed: false, optional: true, required: false
  private _vsMigrateInProgressRef?: string[]; 
  public get vsMigrateInProgressRef() {
    return this.getListAttribute('vs_migrate_in_progress_ref');
  }
  public set vsMigrateInProgressRef(value: string[]) {
    this._vsMigrateInProgressRef = value;
  }
  public resetVsMigrateInProgressRef() {
    this._vsMigrateInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsMigrateInProgressRefInput() {
    return this._vsMigrateInProgressRef;
  }

  // vs_scalein_in_progress_ref - computed: false, optional: true, required: false
  private _vsScaleinInProgressRef?: string[]; 
  public get vsScaleinInProgressRef() {
    return this.getListAttribute('vs_scalein_in_progress_ref');
  }
  public set vsScaleinInProgressRef(value: string[]) {
    this._vsScaleinInProgressRef = value;
  }
  public resetVsScaleinInProgressRef() {
    this._vsScaleinInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleinInProgressRefInput() {
    return this._vsScaleinInProgressRef;
  }

  // vs_scaleout_in_progress_ref - computed: false, optional: true, required: false
  private _vsScaleoutInProgressRef?: string[]; 
  public get vsScaleoutInProgressRef() {
    return this.getListAttribute('vs_scaleout_in_progress_ref');
  }
  public set vsScaleoutInProgressRef(value: string[]) {
    this._vsScaleoutInProgressRef = value;
  }
  public resetVsScaleoutInProgressRef() {
    this._vsScaleoutInProgressRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsScaleoutInProgressRefInput() {
    return this._vsScaleoutInProgressRef;
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

  // se_upgrade_errors - computed: false, optional: true, required: false
  private _seUpgradeErrors = new UpgradestatusinfoSegStatusSeUpgradeErrorsList(this, "se_upgrade_errors", false);
  public get seUpgradeErrors() {
    return this._seUpgradeErrors;
  }
  public putSeUpgradeErrors(value: UpgradestatusinfoSegStatusSeUpgradeErrors[] | cdktf.IResolvable) {
    this._seUpgradeErrors.internalValue = value;
  }
  public resetSeUpgradeErrors() {
    this._seUpgradeErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeErrorsInput() {
    return this._seUpgradeErrors.internalValue;
  }

  // vs_errors - computed: false, optional: true, required: false
  private _vsErrors = new UpgradestatusinfoSegStatusVsErrorsList(this, "vs_errors", false);
  public get vsErrors() {
    return this._vsErrors;
  }
  public putVsErrors(value: UpgradestatusinfoSegStatusVsErrors[] | cdktf.IResolvable) {
    this._vsErrors.internalValue = value;
  }
  public resetVsErrors() {
    this._vsErrors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsErrorsInput() {
    return this._vsErrors.internalValue;
  }
}

export class UpgradestatusinfoSegStatusList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoSegStatus[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoSegStatusOutputReference {
    return new UpgradestatusinfoSegStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#secs Upgradestatusinfo#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#usecs Upgradestatusinfo#usecs}
  */
  readonly usecs: string;
}

export function upgradestatusinfoStateLastChangedTimeToTerraform(struct?: UpgradestatusinfoStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatusinfoStateLastChangedTimeToHclTerraform(struct?: UpgradestatusinfoStateLastChangedTime | cdktf.IResolvable): any {
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

export class UpgradestatusinfoStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoStateLastChangedTimeOutputReference {
    return new UpgradestatusinfoStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#rebooted Upgradestatusinfo#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#last_changed_time Upgradestatusinfo#last_changed_time}
  */
  readonly lastChangedTime?: UpgradestatusinfoStateLastChangedTime[] | cdktf.IResolvable;
}

export function upgradestatusinfoStateToTerraform(struct?: UpgradestatusinfoState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(upgradestatusinfoStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function upgradestatusinfoStateToHclTerraform(struct?: UpgradestatusinfoState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new UpgradestatusinfoStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: UpgradestatusinfoStateLastChangedTime[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoStateList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoState[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoStateOutputReference {
    return new UpgradestatusinfoStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeEventsNodesEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#addr Upgradestatusinfo#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#type Upgradestatusinfo#type}
  */
  readonly type: string;
}

export function upgradestatusinfoUpgradeEventsNodesEventsIpToTerraform(struct?: UpgradestatusinfoUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function upgradestatusinfoUpgradeEventsNodesEventsIpToHclTerraform(struct?: UpgradestatusinfoUpgradeEventsNodesEventsIp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoUpgradeEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeEventsNodesEventsIp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoUpgradeEventsNodesEventsIpList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeEventsNodesEventsIpOutputReference {
    return new UpgradestatusinfoUpgradeEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeEventsNodesEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#message Upgradestatusinfo#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#status Upgradestatusinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ip Upgradestatusinfo#ip}
  */
  readonly ip?: UpgradestatusinfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable;
}

export function upgradestatusinfoUpgradeEventsNodesEventsToTerraform(struct?: UpgradestatusinfoUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(upgradestatusinfoUpgradeEventsNodesEventsIpToTerraform, true)(struct!.ip),
  }
}


export function upgradestatusinfoUpgradeEventsNodesEventsToHclTerraform(struct?: UpgradestatusinfoUpgradeEventsNodesEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeEventsNodesEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoUpgradeEventsNodesEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoUpgradeEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeEventsNodesEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeEventsNodesEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new UpgradestatusinfoUpgradeEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: UpgradestatusinfoUpgradeEventsNodesEventsIp[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoUpgradeEventsNodesEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeEventsNodesEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeEventsNodesEventsOutputReference {
    return new UpgradestatusinfoUpgradeEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeEventsSubEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#addr Upgradestatusinfo#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#type Upgradestatusinfo#type}
  */
  readonly type: string;
}

export function upgradestatusinfoUpgradeEventsSubEventsIpToTerraform(struct?: UpgradestatusinfoUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function upgradestatusinfoUpgradeEventsSubEventsIpToHclTerraform(struct?: UpgradestatusinfoUpgradeEventsSubEventsIp | cdktf.IResolvable): any {
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

export class UpgradestatusinfoUpgradeEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeEventsSubEventsIp | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoUpgradeEventsSubEventsIpList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeEventsSubEventsIpOutputReference {
    return new UpgradestatusinfoUpgradeEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeEventsSubEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#message Upgradestatusinfo#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#status Upgradestatusinfo#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_tasks Upgradestatusinfo#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#ip Upgradestatusinfo#ip}
  */
  readonly ip?: UpgradestatusinfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable;
}

export function upgradestatusinfoUpgradeEventsSubEventsToTerraform(struct?: UpgradestatusinfoUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
    ip: cdktf.listMapper(upgradestatusinfoUpgradeEventsSubEventsIpToTerraform, true)(struct!.ip),
  }
}


export function upgradestatusinfoUpgradeEventsSubEventsToHclTerraform(struct?: UpgradestatusinfoUpgradeEventsSubEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeEventsSubEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoUpgradeEventsSubEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoUpgradeEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeEventsSubEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeEventsSubEvents | cdktf.IResolvable | undefined) {
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
  private _ip = new UpgradestatusinfoUpgradeEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: UpgradestatusinfoUpgradeEventsSubEventsIp[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoUpgradeEventsSubEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeEventsSubEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeEventsSubEventsOutputReference {
    return new UpgradestatusinfoUpgradeEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task Upgradestatusinfo#task}
  */
  readonly task?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#task_name Upgradestatusinfo#task_name}
  */
  readonly taskName?: string;
  /**
  * nodes_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#nodes_events Upgradestatusinfo#nodes_events}
  */
  readonly nodesEvents?: UpgradestatusinfoUpgradeEventsNodesEvents[] | cdktf.IResolvable;
  /**
  * sub_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#sub_events Upgradestatusinfo#sub_events}
  */
  readonly subEvents?: UpgradestatusinfoUpgradeEventsSubEvents[] | cdktf.IResolvable;
}

export function upgradestatusinfoUpgradeEventsToTerraform(struct?: UpgradestatusinfoUpgradeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task: cdktf.stringToTerraform(struct!.task),
    task_name: cdktf.stringToTerraform(struct!.taskName),
    nodes_events: cdktf.listMapper(upgradestatusinfoUpgradeEventsNodesEventsToTerraform, true)(struct!.nodesEvents),
    sub_events: cdktf.listMapper(upgradestatusinfoUpgradeEventsSubEventsToTerraform, true)(struct!.subEvents),
  }
}


export function upgradestatusinfoUpgradeEventsToHclTerraform(struct?: UpgradestatusinfoUpgradeEvents | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeEventsNodesEventsToHclTerraform, true)(struct!.nodesEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoUpgradeEventsNodesEventsList",
    },
    sub_events: {
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeEventsSubEventsToHclTerraform, true)(struct!.subEvents),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoUpgradeEventsSubEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoUpgradeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeEvents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeEvents | cdktf.IResolvable | undefined) {
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
  private _nodesEvents = new UpgradestatusinfoUpgradeEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }
  public putNodesEvents(value: UpgradestatusinfoUpgradeEventsNodesEvents[] | cdktf.IResolvable) {
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
  private _subEvents = new UpgradestatusinfoUpgradeEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
  public putSubEvents(value: UpgradestatusinfoUpgradeEventsSubEvents[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoUpgradeEventsList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeEvents[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeEventsOutputReference {
    return new UpgradestatusinfoUpgradeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeReadinessChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#check_code Upgradestatusinfo#check_code}
  */
  readonly checkCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#description Upgradestatusinfo#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#details Upgradestatusinfo#details}
  */
  readonly details?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#error_details Upgradestatusinfo#error_details}
  */
  readonly errorDetails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
}

export function upgradestatusinfoUpgradeReadinessChecksToTerraform(struct?: UpgradestatusinfoUpgradeReadinessChecks | cdktf.IResolvable): any {
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


export function upgradestatusinfoUpgradeReadinessChecksToHclTerraform(struct?: UpgradestatusinfoUpgradeReadinessChecks | cdktf.IResolvable): any {
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

export class UpgradestatusinfoUpgradeReadinessChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeReadinessChecks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeReadinessChecks | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoUpgradeReadinessChecksList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeReadinessChecks[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeReadinessChecksOutputReference {
    return new UpgradestatusinfoUpgradeReadinessChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeReadinessStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#secs Upgradestatusinfo#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#usecs Upgradestatusinfo#usecs}
  */
  readonly usecs: string;
}

export function upgradestatusinfoUpgradeReadinessStateLastChangedTimeToTerraform(struct?: UpgradestatusinfoUpgradeReadinessStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function upgradestatusinfoUpgradeReadinessStateLastChangedTimeToHclTerraform(struct?: UpgradestatusinfoUpgradeReadinessStateLastChangedTime | cdktf.IResolvable): any {
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

export class UpgradestatusinfoUpgradeReadinessStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeReadinessStateLastChangedTime | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeReadinessStateLastChangedTime | cdktf.IResolvable | undefined) {
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

export class UpgradestatusinfoUpgradeReadinessStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeReadinessStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeReadinessStateLastChangedTimeOutputReference {
    return new UpgradestatusinfoUpgradeReadinessStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeReadinessState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#reason Upgradestatusinfo#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#rebooted Upgradestatusinfo#rebooted}
  */
  readonly rebooted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#last_changed_time Upgradestatusinfo#last_changed_time}
  */
  readonly lastChangedTime?: UpgradestatusinfoUpgradeReadinessStateLastChangedTime[] | cdktf.IResolvable;
}

export function upgradestatusinfoUpgradeReadinessStateToTerraform(struct?: UpgradestatusinfoUpgradeReadinessState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    rebooted: cdktf.stringToTerraform(struct!.rebooted),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(upgradestatusinfoUpgradeReadinessStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function upgradestatusinfoUpgradeReadinessStateToHclTerraform(struct?: UpgradestatusinfoUpgradeReadinessState | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeReadinessStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoUpgradeReadinessStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoUpgradeReadinessStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeReadinessState | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeReadinessState | cdktf.IResolvable | undefined) {
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
  private _lastChangedTime = new UpgradestatusinfoUpgradeReadinessStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: UpgradestatusinfoUpgradeReadinessStateLastChangedTime[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoUpgradeReadinessStateList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeReadinessState[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeReadinessStateOutputReference {
    return new UpgradestatusinfoUpgradeReadinessStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradestatusinfoUpgradeReadiness {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#checks_completed Upgradestatusinfo#checks_completed}
  */
  readonly checksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#duration Upgradestatusinfo#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#end_time Upgradestatusinfo#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#image_ref Upgradestatusinfo#image_ref}
  */
  readonly imageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#patch_image_ref Upgradestatusinfo#patch_image_ref}
  */
  readonly patchImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#progress Upgradestatusinfo#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#start_time Upgradestatusinfo#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#total_checks Upgradestatusinfo#total_checks}
  */
  readonly totalChecks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#upgrade_ops Upgradestatusinfo#upgrade_ops}
  */
  readonly upgradeOps?: string;
  /**
  * checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#checks Upgradestatusinfo#checks}
  */
  readonly checks?: UpgradestatusinfoUpgradeReadinessChecks[] | cdktf.IResolvable;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#state Upgradestatusinfo#state}
  */
  readonly state?: UpgradestatusinfoUpgradeReadinessState[] | cdktf.IResolvable;
}

export function upgradestatusinfoUpgradeReadinessToTerraform(struct?: UpgradestatusinfoUpgradeReadiness | cdktf.IResolvable): any {
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
    checks: cdktf.listMapper(upgradestatusinfoUpgradeReadinessChecksToTerraform, true)(struct!.checks),
    state: cdktf.listMapper(upgradestatusinfoUpgradeReadinessStateToTerraform, true)(struct!.state),
  }
}


export function upgradestatusinfoUpgradeReadinessToHclTerraform(struct?: UpgradestatusinfoUpgradeReadiness | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeReadinessChecksToHclTerraform, true)(struct!.checks),
      isBlock: true,
      type: "list",
      storageClassType: "UpgradestatusinfoUpgradeReadinessChecksList",
    },
    state: {
      value: cdktf.listMapperHcl(upgradestatusinfoUpgradeReadinessStateToHclTerraform, true)(struct!.state),
      isBlock: true,
      type: "set",
      storageClassType: "UpgradestatusinfoUpgradeReadinessStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradestatusinfoUpgradeReadinessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradestatusinfoUpgradeReadiness | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UpgradestatusinfoUpgradeReadiness | cdktf.IResolvable | undefined) {
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
  private _checks = new UpgradestatusinfoUpgradeReadinessChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }
  public putChecks(value: UpgradestatusinfoUpgradeReadinessChecks[] | cdktf.IResolvable) {
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
  private _state = new UpgradestatusinfoUpgradeReadinessStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: UpgradestatusinfoUpgradeReadinessState[] | cdktf.IResolvable) {
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

export class UpgradestatusinfoUpgradeReadinessList extends cdktf.ComplexList {
  public internalValue? : UpgradestatusinfoUpgradeReadiness[] | cdktf.IResolvable

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
  public get(index: number): UpgradestatusinfoUpgradeReadinessOutputReference {
    return new UpgradestatusinfoUpgradeReadinessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo avi_upgradestatusinfo}
*/
export class Upgradestatusinfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_upgradestatusinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Upgradestatusinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Upgradestatusinfo to import
  * @param importFromId The id of the existing Upgradestatusinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Upgradestatusinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_upgradestatusinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/upgradestatusinfo avi_upgradestatusinfo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradestatusinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpgradestatusinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_upgradestatusinfo',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afterRebootRollbackFnc = config.afterRebootRollbackFnc;
    this._afterRebootTaskName = config.afterRebootTaskName;
    this._clean = config.clean;
    this._duration = config.duration;
    this._enablePatchRollback = config.enablePatchRollback;
    this._enableRollback = config.enableRollback;
    this._endTime = config.endTime;
    this._enqueueTime = config.enqueueTime;
    this._fipsMode = config.fipsMode;
    this._id = config.id;
    this._imagePath = config.imagePath;
    this._imageRef = config.imageRef;
    this._name = config.name;
    this._nodeType = config.nodeType;
    this._objCloudRef = config.objCloudRef;
    this._patchImagePath = config.patchImagePath;
    this._patchImageRef = config.patchImageRef;
    this._patchReboot = config.patchReboot;
    this._patchVersion = config.patchVersion;
    this._prevImagePath = config.prevImagePath;
    this._prevPatchImagePath = config.prevPatchImagePath;
    this._prevRemoteImageRef = config.prevRemoteImageRef;
    this._previousImageRef = config.previousImageRef;
    this._previousPatchImageRef = config.previousPatchImageRef;
    this._previousPatchVersion = config.previousPatchVersion;
    this._previousVersion = config.previousVersion;
    this._progress = config.progress;
    this._reason = config.reason;
    this._remoteImageRef = config.remoteImageRef;
    this._sePatchImagePath = config.sePatchImagePath;
    this._sePatchImageRef = config.sePatchImageRef;
    this._startTime = config.startTime;
    this._statediffRef = config.statediffRef;
    this._system = config.systemAttribute;
    this._systemReportRefs = config.systemReportRefs;
    this._tasksCompleted = config.tasksCompleted;
    this._tenantRef = config.tenantRef;
    this._totalTasks = config.totalTasks;
    this._upgradeOps = config.upgradeOps;
    this._uuid = config.uuid;
    this._version = config.version;
    this._dryrunInfo.internalValue = config.dryrunInfo;
    this._history.internalValue = config.history;
    this._params.internalValue = config.params;
    this._patchList.internalValue = config.patchList;
    this._previousPatchList.internalValue = config.previousPatchList;
    this._seUpgradeEvents.internalValue = config.seUpgradeEvents;
    this._segParams.internalValue = config.segParams;
    this._segStatus.internalValue = config.segStatus;
    this._state.internalValue = config.state;
    this._upgradeEvents.internalValue = config.upgradeEvents;
    this._upgradeReadiness.internalValue = config.upgradeReadiness;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after_reboot_rollback_fnc - computed: true, optional: true, required: false
  private _afterRebootRollbackFnc?: string; 
  public get afterRebootRollbackFnc() {
    return this.getStringAttribute('after_reboot_rollback_fnc');
  }
  public set afterRebootRollbackFnc(value: string) {
    this._afterRebootRollbackFnc = value;
  }
  public resetAfterRebootRollbackFnc() {
    this._afterRebootRollbackFnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRebootRollbackFncInput() {
    return this._afterRebootRollbackFnc;
  }

  // after_reboot_task_name - computed: true, optional: true, required: false
  private _afterRebootTaskName?: string; 
  public get afterRebootTaskName() {
    return this.getStringAttribute('after_reboot_task_name');
  }
  public set afterRebootTaskName(value: string) {
    this._afterRebootTaskName = value;
  }
  public resetAfterRebootTaskName() {
    this._afterRebootTaskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRebootTaskNameInput() {
    return this._afterRebootTaskName;
  }

  // clean - computed: true, optional: true, required: false
  private _clean?: string; 
  public get clean() {
    return this.getStringAttribute('clean');
  }
  public set clean(value: string) {
    this._clean = value;
  }
  public resetClean() {
    this._clean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanInput() {
    return this._clean;
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

  // enable_patch_rollback - computed: false, optional: true, required: false
  private _enablePatchRollback?: string; 
  public get enablePatchRollback() {
    return this.getStringAttribute('enable_patch_rollback');
  }
  public set enablePatchRollback(value: string) {
    this._enablePatchRollback = value;
  }
  public resetEnablePatchRollback() {
    this._enablePatchRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePatchRollbackInput() {
    return this._enablePatchRollback;
  }

  // enable_rollback - computed: false, optional: true, required: false
  private _enableRollback?: string; 
  public get enableRollback() {
    return this.getStringAttribute('enable_rollback');
  }
  public set enableRollback(value: string) {
    this._enableRollback = value;
  }
  public resetEnableRollback() {
    this._enableRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRollbackInput() {
    return this._enableRollback;
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

  // enqueue_time - computed: true, optional: true, required: false
  private _enqueueTime?: string; 
  public get enqueueTime() {
    return this.getStringAttribute('enqueue_time');
  }
  public set enqueueTime(value: string) {
    this._enqueueTime = value;
  }
  public resetEnqueueTime() {
    this._enqueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueTimeInput() {
    return this._enqueueTime;
  }

  // fips_mode - computed: true, optional: true, required: false
  private _fipsMode?: string; 
  public get fipsMode() {
    return this.getStringAttribute('fips_mode');
  }
  public set fipsMode(value: string) {
    this._fipsMode = value;
  }
  public resetFipsMode() {
    this._fipsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsModeInput() {
    return this._fipsMode;
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

  // image_path - computed: true, optional: true, required: false
  private _imagePath?: string; 
  public get imagePath() {
    return this.getStringAttribute('image_path');
  }
  public set imagePath(value: string) {
    this._imagePath = value;
  }
  public resetImagePath() {
    this._imagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePathInput() {
    return this._imagePath;
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

  // patch_image_path - computed: true, optional: true, required: false
  private _patchImagePath?: string; 
  public get patchImagePath() {
    return this.getStringAttribute('patch_image_path');
  }
  public set patchImagePath(value: string) {
    this._patchImagePath = value;
  }
  public resetPatchImagePath() {
    this._patchImagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchImagePathInput() {
    return this._patchImagePath;
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

  // patch_reboot - computed: true, optional: true, required: false
  private _patchReboot?: string; 
  public get patchReboot() {
    return this.getStringAttribute('patch_reboot');
  }
  public set patchReboot(value: string) {
    this._patchReboot = value;
  }
  public resetPatchReboot() {
    this._patchReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchRebootInput() {
    return this._patchReboot;
  }

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }

  // prev_image_path - computed: true, optional: true, required: false
  private _prevImagePath?: string; 
  public get prevImagePath() {
    return this.getStringAttribute('prev_image_path');
  }
  public set prevImagePath(value: string) {
    this._prevImagePath = value;
  }
  public resetPrevImagePath() {
    this._prevImagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevImagePathInput() {
    return this._prevImagePath;
  }

  // prev_patch_image_path - computed: true, optional: true, required: false
  private _prevPatchImagePath?: string; 
  public get prevPatchImagePath() {
    return this.getStringAttribute('prev_patch_image_path');
  }
  public set prevPatchImagePath(value: string) {
    this._prevPatchImagePath = value;
  }
  public resetPrevPatchImagePath() {
    this._prevPatchImagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevPatchImagePathInput() {
    return this._prevPatchImagePath;
  }

  // prev_remote_image_ref - computed: true, optional: true, required: false
  private _prevRemoteImageRef?: string; 
  public get prevRemoteImageRef() {
    return this.getStringAttribute('prev_remote_image_ref');
  }
  public set prevRemoteImageRef(value: string) {
    this._prevRemoteImageRef = value;
  }
  public resetPrevRemoteImageRef() {
    this._prevRemoteImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevRemoteImageRefInput() {
    return this._prevRemoteImageRef;
  }

  // previous_image_ref - computed: true, optional: true, required: false
  private _previousImageRef?: string; 
  public get previousImageRef() {
    return this.getStringAttribute('previous_image_ref');
  }
  public set previousImageRef(value: string) {
    this._previousImageRef = value;
  }
  public resetPreviousImageRef() {
    this._previousImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousImageRefInput() {
    return this._previousImageRef;
  }

  // previous_patch_image_ref - computed: true, optional: true, required: false
  private _previousPatchImageRef?: string; 
  public get previousPatchImageRef() {
    return this.getStringAttribute('previous_patch_image_ref');
  }
  public set previousPatchImageRef(value: string) {
    this._previousPatchImageRef = value;
  }
  public resetPreviousPatchImageRef() {
    this._previousPatchImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousPatchImageRefInput() {
    return this._previousPatchImageRef;
  }

  // previous_patch_version - computed: true, optional: true, required: false
  private _previousPatchVersion?: string; 
  public get previousPatchVersion() {
    return this.getStringAttribute('previous_patch_version');
  }
  public set previousPatchVersion(value: string) {
    this._previousPatchVersion = value;
  }
  public resetPreviousPatchVersion() {
    this._previousPatchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousPatchVersionInput() {
    return this._previousPatchVersion;
  }

  // previous_version - computed: true, optional: true, required: false
  private _previousVersion?: string; 
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }
  public set previousVersion(value: string) {
    this._previousVersion = value;
  }
  public resetPreviousVersion() {
    this._previousVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousVersionInput() {
    return this._previousVersion;
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

  // remote_image_ref - computed: true, optional: true, required: false
  private _remoteImageRef?: string; 
  public get remoteImageRef() {
    return this.getStringAttribute('remote_image_ref');
  }
  public set remoteImageRef(value: string) {
    this._remoteImageRef = value;
  }
  public resetRemoteImageRef() {
    this._remoteImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteImageRefInput() {
    return this._remoteImageRef;
  }

  // se_patch_image_path - computed: true, optional: true, required: false
  private _sePatchImagePath?: string; 
  public get sePatchImagePath() {
    return this.getStringAttribute('se_patch_image_path');
  }
  public set sePatchImagePath(value: string) {
    this._sePatchImagePath = value;
  }
  public resetSePatchImagePath() {
    this._sePatchImagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePatchImagePathInput() {
    return this._sePatchImagePath;
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

  // statediff_ref - computed: true, optional: true, required: false
  private _statediffRef?: string; 
  public get statediffRef() {
    return this.getStringAttribute('statediff_ref');
  }
  public set statediffRef(value: string) {
    this._statediffRef = value;
  }
  public resetStatediffRef() {
    this._statediffRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statediffRefInput() {
    return this._statediffRef;
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

  // system_report_refs - computed: false, optional: true, required: false
  private _systemReportRefs?: string[]; 
  public get systemReportRefs() {
    return this.getListAttribute('system_report_refs');
  }
  public set systemReportRefs(value: string[]) {
    this._systemReportRefs = value;
  }
  public resetSystemReportRefs() {
    this._systemReportRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemReportRefsInput() {
    return this._systemReportRefs;
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // dryrun_info - computed: false, optional: true, required: false
  private _dryrunInfo = new UpgradestatusinfoDryrunInfoList(this, "dryrun_info", true);
  public get dryrunInfo() {
    return this._dryrunInfo;
  }
  public putDryrunInfo(value: UpgradestatusinfoDryrunInfo[] | cdktf.IResolvable) {
    this._dryrunInfo.internalValue = value;
  }
  public resetDryrunInfo() {
    this._dryrunInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryrunInfoInput() {
    return this._dryrunInfo.internalValue;
  }

  // history - computed: false, optional: true, required: false
  private _history = new UpgradestatusinfoHistoryList(this, "history", false);
  public get history() {
    return this._history;
  }
  public putHistory(value: UpgradestatusinfoHistory[] | cdktf.IResolvable) {
    this._history.internalValue = value;
  }
  public resetHistory() {
    this._history.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params = new UpgradestatusinfoParamsList(this, "params", true);
  public get params() {
    return this._params;
  }
  public putParams(value: UpgradestatusinfoParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // patch_list - computed: false, optional: true, required: false
  private _patchList = new UpgradestatusinfoPatchListStructList(this, "patch_list", false);
  public get patchList() {
    return this._patchList;
  }
  public putPatchList(value: UpgradestatusinfoPatchListStruct[] | cdktf.IResolvable) {
    this._patchList.internalValue = value;
  }
  public resetPatchList() {
    this._patchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchListInput() {
    return this._patchList.internalValue;
  }

  // previous_patch_list - computed: false, optional: true, required: false
  private _previousPatchList = new UpgradestatusinfoPreviousPatchListStructList(this, "previous_patch_list", false);
  public get previousPatchList() {
    return this._previousPatchList;
  }
  public putPreviousPatchList(value: UpgradestatusinfoPreviousPatchListStruct[] | cdktf.IResolvable) {
    this._previousPatchList.internalValue = value;
  }
  public resetPreviousPatchList() {
    this._previousPatchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousPatchListInput() {
    return this._previousPatchList.internalValue;
  }

  // se_upgrade_events - computed: false, optional: true, required: false
  private _seUpgradeEvents = new UpgradestatusinfoSeUpgradeEventsList(this, "se_upgrade_events", false);
  public get seUpgradeEvents() {
    return this._seUpgradeEvents;
  }
  public putSeUpgradeEvents(value: UpgradestatusinfoSeUpgradeEvents[] | cdktf.IResolvable) {
    this._seUpgradeEvents.internalValue = value;
  }
  public resetSeUpgradeEvents() {
    this._seUpgradeEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seUpgradeEventsInput() {
    return this._seUpgradeEvents.internalValue;
  }

  // seg_params - computed: false, optional: true, required: false
  private _segParams = new UpgradestatusinfoSegParamsList(this, "seg_params", true);
  public get segParams() {
    return this._segParams;
  }
  public putSegParams(value: UpgradestatusinfoSegParams[] | cdktf.IResolvable) {
    this._segParams.internalValue = value;
  }
  public resetSegParams() {
    this._segParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segParamsInput() {
    return this._segParams.internalValue;
  }

  // seg_status - computed: false, optional: true, required: false
  private _segStatus = new UpgradestatusinfoSegStatusList(this, "seg_status", true);
  public get segStatus() {
    return this._segStatus;
  }
  public putSegStatus(value: UpgradestatusinfoSegStatus[] | cdktf.IResolvable) {
    this._segStatus.internalValue = value;
  }
  public resetSegStatus() {
    this._segStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segStatusInput() {
    return this._segStatus.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state = new UpgradestatusinfoStateList(this, "state", true);
  public get state() {
    return this._state;
  }
  public putState(value: UpgradestatusinfoState[] | cdktf.IResolvable) {
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
  private _upgradeEvents = new UpgradestatusinfoUpgradeEventsList(this, "upgrade_events", false);
  public get upgradeEvents() {
    return this._upgradeEvents;
  }
  public putUpgradeEvents(value: UpgradestatusinfoUpgradeEvents[] | cdktf.IResolvable) {
    this._upgradeEvents.internalValue = value;
  }
  public resetUpgradeEvents() {
    this._upgradeEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeEventsInput() {
    return this._upgradeEvents.internalValue;
  }

  // upgrade_readiness - computed: false, optional: true, required: false
  private _upgradeReadiness = new UpgradestatusinfoUpgradeReadinessList(this, "upgrade_readiness", true);
  public get upgradeReadiness() {
    return this._upgradeReadiness;
  }
  public putUpgradeReadiness(value: UpgradestatusinfoUpgradeReadiness[] | cdktf.IResolvable) {
    this._upgradeReadiness.internalValue = value;
  }
  public resetUpgradeReadiness() {
    this._upgradeReadiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeReadinessInput() {
    return this._upgradeReadiness.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after_reboot_rollback_fnc: cdktf.stringToTerraform(this._afterRebootRollbackFnc),
      after_reboot_task_name: cdktf.stringToTerraform(this._afterRebootTaskName),
      clean: cdktf.stringToTerraform(this._clean),
      duration: cdktf.stringToTerraform(this._duration),
      enable_patch_rollback: cdktf.stringToTerraform(this._enablePatchRollback),
      enable_rollback: cdktf.stringToTerraform(this._enableRollback),
      end_time: cdktf.stringToTerraform(this._endTime),
      enqueue_time: cdktf.stringToTerraform(this._enqueueTime),
      fips_mode: cdktf.stringToTerraform(this._fipsMode),
      id: cdktf.stringToTerraform(this._id),
      image_path: cdktf.stringToTerraform(this._imagePath),
      image_ref: cdktf.stringToTerraform(this._imageRef),
      name: cdktf.stringToTerraform(this._name),
      node_type: cdktf.stringToTerraform(this._nodeType),
      obj_cloud_ref: cdktf.stringToTerraform(this._objCloudRef),
      patch_image_path: cdktf.stringToTerraform(this._patchImagePath),
      patch_image_ref: cdktf.stringToTerraform(this._patchImageRef),
      patch_reboot: cdktf.stringToTerraform(this._patchReboot),
      patch_version: cdktf.stringToTerraform(this._patchVersion),
      prev_image_path: cdktf.stringToTerraform(this._prevImagePath),
      prev_patch_image_path: cdktf.stringToTerraform(this._prevPatchImagePath),
      prev_remote_image_ref: cdktf.stringToTerraform(this._prevRemoteImageRef),
      previous_image_ref: cdktf.stringToTerraform(this._previousImageRef),
      previous_patch_image_ref: cdktf.stringToTerraform(this._previousPatchImageRef),
      previous_patch_version: cdktf.stringToTerraform(this._previousPatchVersion),
      previous_version: cdktf.stringToTerraform(this._previousVersion),
      progress: cdktf.stringToTerraform(this._progress),
      reason: cdktf.stringToTerraform(this._reason),
      remote_image_ref: cdktf.stringToTerraform(this._remoteImageRef),
      se_patch_image_path: cdktf.stringToTerraform(this._sePatchImagePath),
      se_patch_image_ref: cdktf.stringToTerraform(this._sePatchImageRef),
      start_time: cdktf.stringToTerraform(this._startTime),
      statediff_ref: cdktf.stringToTerraform(this._statediffRef),
      system: cdktf.stringToTerraform(this._system),
      system_report_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemReportRefs),
      tasks_completed: cdktf.stringToTerraform(this._tasksCompleted),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      total_tasks: cdktf.stringToTerraform(this._totalTasks),
      upgrade_ops: cdktf.stringToTerraform(this._upgradeOps),
      uuid: cdktf.stringToTerraform(this._uuid),
      version: cdktf.stringToTerraform(this._version),
      dryrun_info: cdktf.listMapper(upgradestatusinfoDryrunInfoToTerraform, true)(this._dryrunInfo.internalValue),
      history: cdktf.listMapper(upgradestatusinfoHistoryToTerraform, true)(this._history.internalValue),
      params: cdktf.listMapper(upgradestatusinfoParamsToTerraform, true)(this._params.internalValue),
      patch_list: cdktf.listMapper(upgradestatusinfoPatchListStructToTerraform, true)(this._patchList.internalValue),
      previous_patch_list: cdktf.listMapper(upgradestatusinfoPreviousPatchListStructToTerraform, true)(this._previousPatchList.internalValue),
      se_upgrade_events: cdktf.listMapper(upgradestatusinfoSeUpgradeEventsToTerraform, true)(this._seUpgradeEvents.internalValue),
      seg_params: cdktf.listMapper(upgradestatusinfoSegParamsToTerraform, true)(this._segParams.internalValue),
      seg_status: cdktf.listMapper(upgradestatusinfoSegStatusToTerraform, true)(this._segStatus.internalValue),
      state: cdktf.listMapper(upgradestatusinfoStateToTerraform, true)(this._state.internalValue),
      upgrade_events: cdktf.listMapper(upgradestatusinfoUpgradeEventsToTerraform, true)(this._upgradeEvents.internalValue),
      upgrade_readiness: cdktf.listMapper(upgradestatusinfoUpgradeReadinessToTerraform, true)(this._upgradeReadiness.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after_reboot_rollback_fnc: {
        value: cdktf.stringToHclTerraform(this._afterRebootRollbackFnc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      after_reboot_task_name: {
        value: cdktf.stringToHclTerraform(this._afterRebootTaskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clean: {
        value: cdktf.stringToHclTerraform(this._clean),
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
      enable_patch_rollback: {
        value: cdktf.stringToHclTerraform(this._enablePatchRollback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_rollback: {
        value: cdktf.stringToHclTerraform(this._enableRollback),
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
      enqueue_time: {
        value: cdktf.stringToHclTerraform(this._enqueueTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_mode: {
        value: cdktf.stringToHclTerraform(this._fipsMode),
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
      image_path: {
        value: cdktf.stringToHclTerraform(this._imagePath),
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
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_cloud_ref: {
        value: cdktf.stringToHclTerraform(this._objCloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_image_path: {
        value: cdktf.stringToHclTerraform(this._patchImagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_image_ref: {
        value: cdktf.stringToHclTerraform(this._patchImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_reboot: {
        value: cdktf.stringToHclTerraform(this._patchReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      patch_version: {
        value: cdktf.stringToHclTerraform(this._patchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prev_image_path: {
        value: cdktf.stringToHclTerraform(this._prevImagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prev_patch_image_path: {
        value: cdktf.stringToHclTerraform(this._prevPatchImagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prev_remote_image_ref: {
        value: cdktf.stringToHclTerraform(this._prevRemoteImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_image_ref: {
        value: cdktf.stringToHclTerraform(this._previousImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_patch_image_ref: {
        value: cdktf.stringToHclTerraform(this._previousPatchImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_patch_version: {
        value: cdktf.stringToHclTerraform(this._previousPatchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_version: {
        value: cdktf.stringToHclTerraform(this._previousVersion),
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
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_image_ref: {
        value: cdktf.stringToHclTerraform(this._remoteImageRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_patch_image_path: {
        value: cdktf.stringToHclTerraform(this._sePatchImagePath),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statediff_ref: {
        value: cdktf.stringToHclTerraform(this._statediffRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system: {
        value: cdktf.stringToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_report_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemReportRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      upgrade_ops: {
        value: cdktf.stringToHclTerraform(this._upgradeOps),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dryrun_info: {
        value: cdktf.listMapperHcl(upgradestatusinfoDryrunInfoToHclTerraform, true)(this._dryrunInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatusinfoDryrunInfoList",
      },
      history: {
        value: cdktf.listMapperHcl(upgradestatusinfoHistoryToHclTerraform, true)(this._history.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradestatusinfoHistoryList",
      },
      params: {
        value: cdktf.listMapperHcl(upgradestatusinfoParamsToHclTerraform, true)(this._params.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatusinfoParamsList",
      },
      patch_list: {
        value: cdktf.listMapperHcl(upgradestatusinfoPatchListStructToHclTerraform, true)(this._patchList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradestatusinfoPatchListStructList",
      },
      previous_patch_list: {
        value: cdktf.listMapperHcl(upgradestatusinfoPreviousPatchListStructToHclTerraform, true)(this._previousPatchList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradestatusinfoPreviousPatchListStructList",
      },
      se_upgrade_events: {
        value: cdktf.listMapperHcl(upgradestatusinfoSeUpgradeEventsToHclTerraform, true)(this._seUpgradeEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradestatusinfoSeUpgradeEventsList",
      },
      seg_params: {
        value: cdktf.listMapperHcl(upgradestatusinfoSegParamsToHclTerraform, true)(this._segParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatusinfoSegParamsList",
      },
      seg_status: {
        value: cdktf.listMapperHcl(upgradestatusinfoSegStatusToHclTerraform, true)(this._segStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatusinfoSegStatusList",
      },
      state: {
        value: cdktf.listMapperHcl(upgradestatusinfoStateToHclTerraform, true)(this._state.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatusinfoStateList",
      },
      upgrade_events: {
        value: cdktf.listMapperHcl(upgradestatusinfoUpgradeEventsToHclTerraform, true)(this._upgradeEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradestatusinfoUpgradeEventsList",
      },
      upgrade_readiness: {
        value: cdktf.listMapperHcl(upgradestatusinfoUpgradeReadinessToHclTerraform, true)(this._upgradeReadiness.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UpgradestatusinfoUpgradeReadinessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
