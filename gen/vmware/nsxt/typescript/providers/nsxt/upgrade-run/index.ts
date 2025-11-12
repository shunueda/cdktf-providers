// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradeRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Initial delay to start upgrade status checks in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#delay UpgradeRun#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#id UpgradeRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval to check upgrade status in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#interval UpgradeRun#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#max_retries UpgradeRun#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Upgrade status check timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#timeout UpgradeRun#timeout}
  */
  readonly timeout?: number;
  /**
  * ID of corresponding nsxt_upgrade_prepare_ready resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#upgrade_prepare_ready_id UpgradeRun#upgrade_prepare_ready_id}
  */
  readonly upgradePrepareReadyId: string;
  /**
  * edge_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#edge_group UpgradeRun#edge_group}
  */
  readonly edgeGroup?: UpgradeRunEdgeGroup[] | cdktf.IResolvable;
  /**
  * edge_upgrade_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#edge_upgrade_setting UpgradeRun#edge_upgrade_setting}
  */
  readonly edgeUpgradeSetting?: UpgradeRunEdgeUpgradeSetting;
  /**
  * finalize_upgrade_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#finalize_upgrade_setting UpgradeRun#finalize_upgrade_setting}
  */
  readonly finalizeUpgradeSetting?: UpgradeRunFinalizeUpgradeSetting;
  /**
  * host_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#host_group UpgradeRun#host_group}
  */
  readonly hostGroup?: UpgradeRunHostGroup[] | cdktf.IResolvable;
  /**
  * host_upgrade_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#host_upgrade_setting UpgradeRun#host_upgrade_setting}
  */
  readonly hostUpgradeSetting?: UpgradeRunHostUpgradeSetting;
  /**
  * upgrade_group_plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#upgrade_group_plan UpgradeRun#upgrade_group_plan}
  */
  readonly upgradeGroupPlan?: UpgradeRunUpgradeGroupPlan[] | cdktf.IResolvable;
}
export interface UpgradeRunStateGroupState {
}

export function upgradeRunStateGroupStateToTerraform(struct?: UpgradeRunStateGroupState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function upgradeRunStateGroupStateToHclTerraform(struct?: UpgradeRunStateGroupState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpgradeRunStateGroupStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeRunStateGroupState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunStateGroupState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class UpgradeRunStateGroupStateList extends cdktf.ComplexList {

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
  public get(index: number): UpgradeRunStateGroupStateOutputReference {
    return new UpgradeRunStateGroupStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeRunState {
}

export function upgradeRunStateToTerraform(struct?: UpgradeRunState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function upgradeRunStateToHclTerraform(struct?: UpgradeRunState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UpgradeRunStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeRunState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // group_state - computed: true, optional: false, required: false
  private _groupState = new UpgradeRunStateGroupStateList(this, "group_state", false);
  public get groupState() {
    return this._groupState;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class UpgradeRunStateList extends cdktf.ComplexList {

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
  public get(index: number): UpgradeRunStateOutputReference {
    return new UpgradeRunStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeRunEdgeGroup {
  /**
  * Flag to indicate whether upgrade of this group is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#enabled UpgradeRun#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ID of upgrade unit group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#id UpgradeRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Upgrade method to specify whether the upgrade is to be performed in parallel or serially
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#parallel UpgradeRun#parallel}
  */
  readonly parallel?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether upgrade should be paused after upgrade of each upgrade-unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#pause_after_each_upgrade_unit UpgradeRun#pause_after_each_upgrade_unit}
  */
  readonly pauseAfterEachUpgradeUnit?: boolean | cdktf.IResolvable;
}

export function upgradeRunEdgeGroupToTerraform(struct?: UpgradeRunEdgeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    parallel: cdktf.booleanToTerraform(struct!.parallel),
    pause_after_each_upgrade_unit: cdktf.booleanToTerraform(struct!.pauseAfterEachUpgradeUnit),
  }
}


export function upgradeRunEdgeGroupToHclTerraform(struct?: UpgradeRunEdgeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel: {
      value: cdktf.booleanToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pause_after_each_upgrade_unit: {
      value: cdktf.booleanToHclTerraform(struct!.pauseAfterEachUpgradeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeRunEdgeGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeRunEdgeGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._pauseAfterEachUpgradeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseAfterEachUpgradeUnit = this._pauseAfterEachUpgradeUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunEdgeGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._parallel = undefined;
      this._pauseAfterEachUpgradeUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._id = value.id;
      this._parallel = value.parallel;
      this._pauseAfterEachUpgradeUnit = value.pauseAfterEachUpgradeUnit;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // parallel - computed: false, optional: true, required: false
  private _parallel?: boolean | cdktf.IResolvable; 
  public get parallel() {
    return this.getBooleanAttribute('parallel');
  }
  public set parallel(value: boolean | cdktf.IResolvable) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // pause_after_each_upgrade_unit - computed: false, optional: true, required: false
  private _pauseAfterEachUpgradeUnit?: boolean | cdktf.IResolvable; 
  public get pauseAfterEachUpgradeUnit() {
    return this.getBooleanAttribute('pause_after_each_upgrade_unit');
  }
  public set pauseAfterEachUpgradeUnit(value: boolean | cdktf.IResolvable) {
    this._pauseAfterEachUpgradeUnit = value;
  }
  public resetPauseAfterEachUpgradeUnit() {
    this._pauseAfterEachUpgradeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseAfterEachUpgradeUnitInput() {
    return this._pauseAfterEachUpgradeUnit;
  }
}

export class UpgradeRunEdgeGroupList extends cdktf.ComplexList {
  public internalValue? : UpgradeRunEdgeGroup[] | cdktf.IResolvable

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
  public get(index: number): UpgradeRunEdgeGroupOutputReference {
    return new UpgradeRunEdgeGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeRunEdgeUpgradeSetting {
  /**
  * Whether run upgrade parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#parallel UpgradeRun#parallel}
  */
  readonly parallel?: boolean | cdktf.IResolvable;
  /**
  * Whether run post upgrade check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#post_upgrade_check UpgradeRun#post_upgrade_check}
  */
  readonly postUpgradeCheck?: boolean | cdktf.IResolvable;
}

export function upgradeRunEdgeUpgradeSettingToTerraform(struct?: UpgradeRunEdgeUpgradeSettingOutputReference | UpgradeRunEdgeUpgradeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallel: cdktf.booleanToTerraform(struct!.parallel),
    post_upgrade_check: cdktf.booleanToTerraform(struct!.postUpgradeCheck),
  }
}


export function upgradeRunEdgeUpgradeSettingToHclTerraform(struct?: UpgradeRunEdgeUpgradeSettingOutputReference | UpgradeRunEdgeUpgradeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parallel: {
      value: cdktf.booleanToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_upgrade_check: {
      value: cdktf.booleanToHclTerraform(struct!.postUpgradeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeRunEdgeUpgradeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpgradeRunEdgeUpgradeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._postUpgradeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.postUpgradeCheck = this._postUpgradeCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunEdgeUpgradeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parallel = undefined;
      this._postUpgradeCheck = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parallel = value.parallel;
      this._postUpgradeCheck = value.postUpgradeCheck;
    }
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: boolean | cdktf.IResolvable; 
  public get parallel() {
    return this.getBooleanAttribute('parallel');
  }
  public set parallel(value: boolean | cdktf.IResolvable) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // post_upgrade_check - computed: false, optional: true, required: false
  private _postUpgradeCheck?: boolean | cdktf.IResolvable; 
  public get postUpgradeCheck() {
    return this.getBooleanAttribute('post_upgrade_check');
  }
  public set postUpgradeCheck(value: boolean | cdktf.IResolvable) {
    this._postUpgradeCheck = value;
  }
  public resetPostUpgradeCheck() {
    this._postUpgradeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postUpgradeCheckInput() {
    return this._postUpgradeCheck;
  }
}
export interface UpgradeRunFinalizeUpgradeSetting {
  /**
  * Finalize upgrade when complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#enabled UpgradeRun#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function upgradeRunFinalizeUpgradeSettingToTerraform(struct?: UpgradeRunFinalizeUpgradeSettingOutputReference | UpgradeRunFinalizeUpgradeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function upgradeRunFinalizeUpgradeSettingToHclTerraform(struct?: UpgradeRunFinalizeUpgradeSettingOutputReference | UpgradeRunFinalizeUpgradeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeRunFinalizeUpgradeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpgradeRunFinalizeUpgradeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunFinalizeUpgradeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface UpgradeRunHostGroup {
  /**
  * Name of upgrade unit group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#display_name UpgradeRun#display_name}
  */
  readonly displayName?: string;
  /**
  * Flag to indicate whether upgrade of this group is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#enabled UpgradeRun#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Hosts to be included in the upgrade group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#hosts UpgradeRun#hosts}
  */
  readonly hosts?: string[];
  /**
  * ID of upgrade unit group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#id UpgradeRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maintenance mode config evacuate powered off vms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#maintenance_mode_config_evacuate_powered_off_vms UpgradeRun#maintenance_mode_config_evacuate_powered_off_vms}
  */
  readonly maintenanceModeConfigEvacuatePoweredOffVms?: boolean | cdktf.IResolvable;
  /**
  * Maintenance mode config vsan mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#maintenance_mode_config_vsan_mode UpgradeRun#maintenance_mode_config_vsan_mode}
  */
  readonly maintenanceModeConfigVsanMode?: string;
  /**
  * Upgrade method to specify whether the upgrade is to be performed in parallel or serially
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#parallel UpgradeRun#parallel}
  */
  readonly parallel?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether upgrade should be paused after upgrade of each upgrade-unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#pause_after_each_upgrade_unit UpgradeRun#pause_after_each_upgrade_unit}
  */
  readonly pauseAfterEachUpgradeUnit?: boolean | cdktf.IResolvable;
  /**
  * Rebootless upgrade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#rebootless_upgrade UpgradeRun#rebootless_upgrade}
  */
  readonly rebootlessUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Upgrade mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#upgrade_mode UpgradeRun#upgrade_mode}
  */
  readonly upgradeMode?: string;
}

export function upgradeRunHostGroupToTerraform(struct?: UpgradeRunHostGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    id: cdktf.stringToTerraform(struct!.id),
    maintenance_mode_config_evacuate_powered_off_vms: cdktf.booleanToTerraform(struct!.maintenanceModeConfigEvacuatePoweredOffVms),
    maintenance_mode_config_vsan_mode: cdktf.stringToTerraform(struct!.maintenanceModeConfigVsanMode),
    parallel: cdktf.booleanToTerraform(struct!.parallel),
    pause_after_each_upgrade_unit: cdktf.booleanToTerraform(struct!.pauseAfterEachUpgradeUnit),
    rebootless_upgrade: cdktf.booleanToTerraform(struct!.rebootlessUpgrade),
    upgrade_mode: cdktf.stringToTerraform(struct!.upgradeMode),
  }
}


export function upgradeRunHostGroupToHclTerraform(struct?: UpgradeRunHostGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_mode_config_evacuate_powered_off_vms: {
      value: cdktf.booleanToHclTerraform(struct!.maintenanceModeConfigEvacuatePoweredOffVms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance_mode_config_vsan_mode: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceModeConfigVsanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parallel: {
      value: cdktf.booleanToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pause_after_each_upgrade_unit: {
      value: cdktf.booleanToHclTerraform(struct!.pauseAfterEachUpgradeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rebootless_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.rebootlessUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_mode: {
      value: cdktf.stringToHclTerraform(struct!.upgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeRunHostGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeRunHostGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maintenanceModeConfigEvacuatePoweredOffVms !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceModeConfigEvacuatePoweredOffVms = this._maintenanceModeConfigEvacuatePoweredOffVms;
    }
    if (this._maintenanceModeConfigVsanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceModeConfigVsanMode = this._maintenanceModeConfigVsanMode;
    }
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._pauseAfterEachUpgradeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseAfterEachUpgradeUnit = this._pauseAfterEachUpgradeUnit;
    }
    if (this._rebootlessUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootlessUpgrade = this._rebootlessUpgrade;
    }
    if (this._upgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeMode = this._upgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunHostGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._hosts = undefined;
      this._id = undefined;
      this._maintenanceModeConfigEvacuatePoweredOffVms = undefined;
      this._maintenanceModeConfigVsanMode = undefined;
      this._parallel = undefined;
      this._pauseAfterEachUpgradeUnit = undefined;
      this._rebootlessUpgrade = undefined;
      this._upgradeMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._hosts = value.hosts;
      this._id = value.id;
      this._maintenanceModeConfigEvacuatePoweredOffVms = value.maintenanceModeConfigEvacuatePoweredOffVms;
      this._maintenanceModeConfigVsanMode = value.maintenanceModeConfigVsanMode;
      this._parallel = value.parallel;
      this._pauseAfterEachUpgradeUnit = value.pauseAfterEachUpgradeUnit;
      this._rebootlessUpgrade = value.rebootlessUpgrade;
      this._upgradeMode = value.upgradeMode;
    }
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: false, optional: true, required: false
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

  // maintenance_mode_config_evacuate_powered_off_vms - computed: false, optional: true, required: false
  private _maintenanceModeConfigEvacuatePoweredOffVms?: boolean | cdktf.IResolvable; 
  public get maintenanceModeConfigEvacuatePoweredOffVms() {
    return this.getBooleanAttribute('maintenance_mode_config_evacuate_powered_off_vms');
  }
  public set maintenanceModeConfigEvacuatePoweredOffVms(value: boolean | cdktf.IResolvable) {
    this._maintenanceModeConfigEvacuatePoweredOffVms = value;
  }
  public resetMaintenanceModeConfigEvacuatePoweredOffVms() {
    this._maintenanceModeConfigEvacuatePoweredOffVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeConfigEvacuatePoweredOffVmsInput() {
    return this._maintenanceModeConfigEvacuatePoweredOffVms;
  }

  // maintenance_mode_config_vsan_mode - computed: false, optional: true, required: false
  private _maintenanceModeConfigVsanMode?: string; 
  public get maintenanceModeConfigVsanMode() {
    return this.getStringAttribute('maintenance_mode_config_vsan_mode');
  }
  public set maintenanceModeConfigVsanMode(value: string) {
    this._maintenanceModeConfigVsanMode = value;
  }
  public resetMaintenanceModeConfigVsanMode() {
    this._maintenanceModeConfigVsanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeConfigVsanModeInput() {
    return this._maintenanceModeConfigVsanMode;
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: boolean | cdktf.IResolvable; 
  public get parallel() {
    return this.getBooleanAttribute('parallel');
  }
  public set parallel(value: boolean | cdktf.IResolvable) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // pause_after_each_upgrade_unit - computed: false, optional: true, required: false
  private _pauseAfterEachUpgradeUnit?: boolean | cdktf.IResolvable; 
  public get pauseAfterEachUpgradeUnit() {
    return this.getBooleanAttribute('pause_after_each_upgrade_unit');
  }
  public set pauseAfterEachUpgradeUnit(value: boolean | cdktf.IResolvable) {
    this._pauseAfterEachUpgradeUnit = value;
  }
  public resetPauseAfterEachUpgradeUnit() {
    this._pauseAfterEachUpgradeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseAfterEachUpgradeUnitInput() {
    return this._pauseAfterEachUpgradeUnit;
  }

  // rebootless_upgrade - computed: false, optional: true, required: false
  private _rebootlessUpgrade?: boolean | cdktf.IResolvable; 
  public get rebootlessUpgrade() {
    return this.getBooleanAttribute('rebootless_upgrade');
  }
  public set rebootlessUpgrade(value: boolean | cdktf.IResolvable) {
    this._rebootlessUpgrade = value;
  }
  public resetRebootlessUpgrade() {
    this._rebootlessUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootlessUpgradeInput() {
    return this._rebootlessUpgrade;
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string; 
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode;
  }
}

export class UpgradeRunHostGroupList extends cdktf.ComplexList {
  public internalValue? : UpgradeRunHostGroup[] | cdktf.IResolvable

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
  public get(index: number): UpgradeRunHostGroupOutputReference {
    return new UpgradeRunHostGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UpgradeRunHostUpgradeSetting {
  /**
  * Whether run upgrade parallel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#parallel UpgradeRun#parallel}
  */
  readonly parallel?: boolean | cdktf.IResolvable;
  /**
  * Whether run post upgrade check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#post_upgrade_check UpgradeRun#post_upgrade_check}
  */
  readonly postUpgradeCheck?: boolean | cdktf.IResolvable;
  /**
  * Whether stop the upgrade when an error occur
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#stop_on_error UpgradeRun#stop_on_error}
  */
  readonly stopOnError?: boolean | cdktf.IResolvable;
}

export function upgradeRunHostUpgradeSettingToTerraform(struct?: UpgradeRunHostUpgradeSettingOutputReference | UpgradeRunHostUpgradeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parallel: cdktf.booleanToTerraform(struct!.parallel),
    post_upgrade_check: cdktf.booleanToTerraform(struct!.postUpgradeCheck),
    stop_on_error: cdktf.booleanToTerraform(struct!.stopOnError),
  }
}


export function upgradeRunHostUpgradeSettingToHclTerraform(struct?: UpgradeRunHostUpgradeSettingOutputReference | UpgradeRunHostUpgradeSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parallel: {
      value: cdktf.booleanToHclTerraform(struct!.parallel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_upgrade_check: {
      value: cdktf.booleanToHclTerraform(struct!.postUpgradeCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeRunHostUpgradeSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UpgradeRunHostUpgradeSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parallel !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallel = this._parallel;
    }
    if (this._postUpgradeCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.postUpgradeCheck = this._postUpgradeCheck;
    }
    if (this._stopOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnError = this._stopOnError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunHostUpgradeSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parallel = undefined;
      this._postUpgradeCheck = undefined;
      this._stopOnError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parallel = value.parallel;
      this._postUpgradeCheck = value.postUpgradeCheck;
      this._stopOnError = value.stopOnError;
    }
  }

  // parallel - computed: false, optional: true, required: false
  private _parallel?: boolean | cdktf.IResolvable; 
  public get parallel() {
    return this.getBooleanAttribute('parallel');
  }
  public set parallel(value: boolean | cdktf.IResolvable) {
    this._parallel = value;
  }
  public resetParallel() {
    this._parallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelInput() {
    return this._parallel;
  }

  // post_upgrade_check - computed: false, optional: true, required: false
  private _postUpgradeCheck?: boolean | cdktf.IResolvable; 
  public get postUpgradeCheck() {
    return this.getBooleanAttribute('post_upgrade_check');
  }
  public set postUpgradeCheck(value: boolean | cdktf.IResolvable) {
    this._postUpgradeCheck = value;
  }
  public resetPostUpgradeCheck() {
    this._postUpgradeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postUpgradeCheckInput() {
    return this._postUpgradeCheck;
  }

  // stop_on_error - computed: false, optional: true, required: false
  private _stopOnError?: boolean | cdktf.IResolvable; 
  public get stopOnError() {
    return this.getBooleanAttribute('stop_on_error');
  }
  public set stopOnError(value: boolean | cdktf.IResolvable) {
    this._stopOnError = value;
  }
  public resetStopOnError() {
    this._stopOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnErrorInput() {
    return this._stopOnError;
  }
}
export interface UpgradeRunUpgradeGroupPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#extended_config UpgradeRun#extended_config}
  */
  readonly extendedConfig?: { [key: string]: string };
}

export function upgradeRunUpgradeGroupPlanToTerraform(struct?: UpgradeRunUpgradeGroupPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extendedConfig),
  }
}


export function upgradeRunUpgradeGroupPlanToHclTerraform(struct?: UpgradeRunUpgradeGroupPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extendedConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeRunUpgradeGroupPlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeRunUpgradeGroupPlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedConfig = this._extendedConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeRunUpgradeGroupPlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedConfig = value.extendedConfig;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extended_config - computed: true, optional: true, required: false
  private _extendedConfig?: { [key: string]: string }; 
  public get extendedConfig() {
    return this.getStringMapAttribute('extended_config');
  }
  public set extendedConfig(value: { [key: string]: string }) {
    this._extendedConfig = value;
  }
  public resetExtendedConfig() {
    this._extendedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedConfigInput() {
    return this._extendedConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parallel - computed: true, optional: false, required: false
  public get parallel() {
    return this.getBooleanAttribute('parallel');
  }

  // pause_after_each_upgrade_unit - computed: true, optional: false, required: false
  public get pauseAfterEachUpgradeUnit() {
    return this.getBooleanAttribute('pause_after_each_upgrade_unit');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class UpgradeRunUpgradeGroupPlanList extends cdktf.ComplexList {
  public internalValue? : UpgradeRunUpgradeGroupPlan[] | cdktf.IResolvable

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
  public get(index: number): UpgradeRunUpgradeGroupPlanOutputReference {
    return new UpgradeRunUpgradeGroupPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run nsxt_upgrade_run}
*/
export class UpgradeRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_upgrade_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradeRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradeRun to import
  * @param importFromId The id of the existing UpgradeRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradeRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_upgrade_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/upgrade_run nsxt_upgrade_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradeRunConfig
  */
  public constructor(scope: Construct, id: string, config: UpgradeRunConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_upgrade_run',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delay = config.delay;
    this._id = config.id;
    this._interval = config.interval;
    this._maxRetries = config.maxRetries;
    this._timeout = config.timeout;
    this._upgradePrepareReadyId = config.upgradePrepareReadyId;
    this._edgeGroup.internalValue = config.edgeGroup;
    this._edgeUpgradeSetting.internalValue = config.edgeUpgradeSetting;
    this._finalizeUpgradeSetting.internalValue = config.finalizeUpgradeSetting;
    this._hostGroup.internalValue = config.hostGroup;
    this._hostUpgradeSetting.internalValue = config.hostUpgradeSetting;
    this._upgradeGroupPlan.internalValue = config.upgradeGroupPlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // state - computed: true, optional: false, required: false
  private _state = new UpgradeRunStateList(this, "state", false);
  public get state() {
    return this._state;
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

  // upgrade_prepare_ready_id - computed: false, optional: false, required: true
  private _upgradePrepareReadyId?: string; 
  public get upgradePrepareReadyId() {
    return this.getStringAttribute('upgrade_prepare_ready_id');
  }
  public set upgradePrepareReadyId(value: string) {
    this._upgradePrepareReadyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePrepareReadyIdInput() {
    return this._upgradePrepareReadyId;
  }

  // edge_group - computed: false, optional: true, required: false
  private _edgeGroup = new UpgradeRunEdgeGroupList(this, "edge_group", false);
  public get edgeGroup() {
    return this._edgeGroup;
  }
  public putEdgeGroup(value: UpgradeRunEdgeGroup[] | cdktf.IResolvable) {
    this._edgeGroup.internalValue = value;
  }
  public resetEdgeGroup() {
    this._edgeGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGroupInput() {
    return this._edgeGroup.internalValue;
  }

  // edge_upgrade_setting - computed: false, optional: true, required: false
  private _edgeUpgradeSetting = new UpgradeRunEdgeUpgradeSettingOutputReference(this, "edge_upgrade_setting");
  public get edgeUpgradeSetting() {
    return this._edgeUpgradeSetting;
  }
  public putEdgeUpgradeSetting(value: UpgradeRunEdgeUpgradeSetting) {
    this._edgeUpgradeSetting.internalValue = value;
  }
  public resetEdgeUpgradeSetting() {
    this._edgeUpgradeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeUpgradeSettingInput() {
    return this._edgeUpgradeSetting.internalValue;
  }

  // finalize_upgrade_setting - computed: false, optional: true, required: false
  private _finalizeUpgradeSetting = new UpgradeRunFinalizeUpgradeSettingOutputReference(this, "finalize_upgrade_setting");
  public get finalizeUpgradeSetting() {
    return this._finalizeUpgradeSetting;
  }
  public putFinalizeUpgradeSetting(value: UpgradeRunFinalizeUpgradeSetting) {
    this._finalizeUpgradeSetting.internalValue = value;
  }
  public resetFinalizeUpgradeSetting() {
    this._finalizeUpgradeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizeUpgradeSettingInput() {
    return this._finalizeUpgradeSetting.internalValue;
  }

  // host_group - computed: false, optional: true, required: false
  private _hostGroup = new UpgradeRunHostGroupList(this, "host_group", false);
  public get hostGroup() {
    return this._hostGroup;
  }
  public putHostGroup(value: UpgradeRunHostGroup[] | cdktf.IResolvable) {
    this._hostGroup.internalValue = value;
  }
  public resetHostGroup() {
    this._hostGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupInput() {
    return this._hostGroup.internalValue;
  }

  // host_upgrade_setting - computed: false, optional: true, required: false
  private _hostUpgradeSetting = new UpgradeRunHostUpgradeSettingOutputReference(this, "host_upgrade_setting");
  public get hostUpgradeSetting() {
    return this._hostUpgradeSetting;
  }
  public putHostUpgradeSetting(value: UpgradeRunHostUpgradeSetting) {
    this._hostUpgradeSetting.internalValue = value;
  }
  public resetHostUpgradeSetting() {
    this._hostUpgradeSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUpgradeSettingInput() {
    return this._hostUpgradeSetting.internalValue;
  }

  // upgrade_group_plan - computed: false, optional: true, required: false
  private _upgradeGroupPlan = new UpgradeRunUpgradeGroupPlanList(this, "upgrade_group_plan", false);
  public get upgradeGroupPlan() {
    return this._upgradeGroupPlan;
  }
  public putUpgradeGroupPlan(value: UpgradeRunUpgradeGroupPlan[] | cdktf.IResolvable) {
    this._upgradeGroupPlan.internalValue = value;
  }
  public resetUpgradeGroupPlan() {
    this._upgradeGroupPlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeGroupPlanInput() {
    return this._upgradeGroupPlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay: cdktf.numberToTerraform(this._delay),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      timeout: cdktf.numberToTerraform(this._timeout),
      upgrade_prepare_ready_id: cdktf.stringToTerraform(this._upgradePrepareReadyId),
      edge_group: cdktf.listMapper(upgradeRunEdgeGroupToTerraform, true)(this._edgeGroup.internalValue),
      edge_upgrade_setting: upgradeRunEdgeUpgradeSettingToTerraform(this._edgeUpgradeSetting.internalValue),
      finalize_upgrade_setting: upgradeRunFinalizeUpgradeSettingToTerraform(this._finalizeUpgradeSetting.internalValue),
      host_group: cdktf.listMapper(upgradeRunHostGroupToTerraform, true)(this._hostGroup.internalValue),
      host_upgrade_setting: upgradeRunHostUpgradeSettingToTerraform(this._hostUpgradeSetting.internalValue),
      upgrade_group_plan: cdktf.listMapper(upgradeRunUpgradeGroupPlanToTerraform, true)(this._upgradeGroupPlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upgrade_prepare_ready_id: {
        value: cdktf.stringToHclTerraform(this._upgradePrepareReadyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_group: {
        value: cdktf.listMapperHcl(upgradeRunEdgeGroupToHclTerraform, true)(this._edgeGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeRunEdgeGroupList",
      },
      edge_upgrade_setting: {
        value: upgradeRunEdgeUpgradeSettingToHclTerraform(this._edgeUpgradeSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeRunEdgeUpgradeSettingList",
      },
      finalize_upgrade_setting: {
        value: upgradeRunFinalizeUpgradeSettingToHclTerraform(this._finalizeUpgradeSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeRunFinalizeUpgradeSettingList",
      },
      host_group: {
        value: cdktf.listMapperHcl(upgradeRunHostGroupToHclTerraform, true)(this._hostGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeRunHostGroupList",
      },
      host_upgrade_setting: {
        value: upgradeRunHostUpgradeSettingToHclTerraform(this._hostUpgradeSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeRunHostUpgradeSettingList",
      },
      upgrade_group_plan: {
        value: cdktf.listMapperHcl(upgradeRunUpgradeGroupPlanToHclTerraform, true)(this._upgradeGroupPlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeRunUpgradeGroupPlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
