// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugResourceTrackingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#id DataThunderScaleoutDebugResourceTrackingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#oper DataThunderScaleoutDebugResourceTrackingOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugResourceTrackingOperOper;
}
export interface DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#action DataThunderScaleoutDebugResourceTrackingOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#thresholds DataThunderScaleoutDebugResourceTrackingOper#thresholds}
  */
  readonly thresholds?: number;
}

export function dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructToTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    thresholds: cdktf.numberToTerraform(struct!.thresholds),
  }
}


export function dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructToHclTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thresholds: {
      value: cdktf.numberToHclTerraform(struct!.thresholds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._thresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._thresholds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._thresholds = value.thresholds;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds?: number; 
  public get thresholds() {
    return this.getNumberAttribute('thresholds');
  }
  public set thresholds(value: number) {
    this._thresholds = value;
  }
  public resetThresholds() {
    this._thresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds;
  }
}

export class DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructOutputReference {
    return new DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#template_name DataThunderScaleoutDebugResourceTrackingOper#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#template_valid DataThunderScaleoutDebugResourceTrackingOper#template_valid}
  */
  readonly templateValid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#threshold_count DataThunderScaleoutDebugResourceTrackingOper#threshold_count}
  */
  readonly thresholdCount?: number;
  /**
  * threshold_count_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#threshold_count_list DataThunderScaleoutDebugResourceTrackingOper#threshold_count_list}
  */
  readonly thresholdCountList?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructToTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_name: cdktf.stringToTerraform(struct!.templateName),
    template_valid: cdktf.numberToTerraform(struct!.templateValid),
    threshold_count: cdktf.numberToTerraform(struct!.thresholdCount),
    threshold_count_list: cdktf.listMapper(dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructToTerraform, true)(struct!.thresholdCountList),
  }
}


export function dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructToHclTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_valid: {
      value: cdktf.numberToHclTerraform(struct!.templateValid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.thresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_count_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructToHclTerraform, true)(struct!.thresholdCountList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._templateValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateValid = this._templateValid;
    }
    if (this._thresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCount = this._thresholdCount;
    }
    if (this._thresholdCountList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCountList = this._thresholdCountList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateName = undefined;
      this._templateValid = undefined;
      this._thresholdCount = undefined;
      this._thresholdCountList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateName = value.templateName;
      this._templateValid = value.templateValid;
      this._thresholdCount = value.thresholdCount;
      this._thresholdCountList.internalValue = value.thresholdCountList;
    }
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_valid - computed: false, optional: true, required: false
  private _templateValid?: number; 
  public get templateValid() {
    return this.getNumberAttribute('template_valid');
  }
  public set templateValid(value: number) {
    this._templateValid = value;
  }
  public resetTemplateValid() {
    this._templateValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateValidInput() {
    return this._templateValid;
  }

  // threshold_count - computed: false, optional: true, required: false
  private _thresholdCount?: number; 
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }
  public set thresholdCount(value: number) {
    this._thresholdCount = value;
  }
  public resetThresholdCount() {
    this._thresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountInput() {
    return this._thresholdCount;
  }

  // threshold_count_list - computed: false, optional: true, required: false
  private _thresholdCountList = new DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStructList(this, "threshold_count_list", false);
  public get thresholdCountList() {
    return this._thresholdCountList;
  }
  public putThresholdCountList(value: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListThresholdCountListStruct[] | cdktf.IResolvable) {
    this._thresholdCountList.internalValue = value;
  }
  public resetThresholdCountList() {
    this._thresholdCountList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountListInput() {
    return this._thresholdCountList.internalValue;
  }
}

export class DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructOutputReference {
    return new DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#cluster_id DataThunderScaleoutDebugResourceTrackingOper#cluster_id}
  */
  readonly clusterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#current_state DataThunderScaleoutDebugResourceTrackingOper#current_state}
  */
  readonly currentState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#last_action DataThunderScaleoutDebugResourceTrackingOper#last_action}
  */
  readonly lastAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#so_track_cleanup DataThunderScaleoutDebugResourceTrackingOper#so_track_cleanup}
  */
  readonly soTrackCleanup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#template_count DataThunderScaleoutDebugResourceTrackingOper#template_count}
  */
  readonly templateCount?: number;
  /**
  * template_count_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#template_count_list DataThunderScaleoutDebugResourceTrackingOper#template_count_list}
  */
  readonly templateCountList?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructToTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.numberToTerraform(struct!.clusterId),
    current_state: cdktf.stringToTerraform(struct!.currentState),
    last_action: cdktf.stringToTerraform(struct!.lastAction),
    so_track_cleanup: cdktf.numberToTerraform(struct!.soTrackCleanup),
    template_count: cdktf.numberToTerraform(struct!.templateCount),
    template_count_list: cdktf.listMapper(dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructToTerraform, true)(struct!.templateCountList),
  }
}


export function dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructToHclTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.numberToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    current_state: {
      value: cdktf.stringToHclTerraform(struct!.currentState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_action: {
      value: cdktf.stringToHclTerraform(struct!.lastAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    so_track_cleanup: {
      value: cdktf.numberToHclTerraform(struct!.soTrackCleanup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_count: {
      value: cdktf.numberToHclTerraform(struct!.templateCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_count_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructToHclTerraform, true)(struct!.templateCountList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._currentState !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentState = this._currentState;
    }
    if (this._lastAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAction = this._lastAction;
    }
    if (this._soTrackCleanup !== undefined) {
      hasAnyValues = true;
      internalValueResult.soTrackCleanup = this._soTrackCleanup;
    }
    if (this._templateCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateCount = this._templateCount;
    }
    if (this._templateCountList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateCountList = this._templateCountList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._currentState = undefined;
      this._lastAction = undefined;
      this._soTrackCleanup = undefined;
      this._templateCount = undefined;
      this._templateCountList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._currentState = value.currentState;
      this._lastAction = value.lastAction;
      this._soTrackCleanup = value.soTrackCleanup;
      this._templateCount = value.templateCount;
      this._templateCountList.internalValue = value.templateCountList;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // current_state - computed: false, optional: true, required: false
  private _currentState?: string; 
  public get currentState() {
    return this.getStringAttribute('current_state');
  }
  public set currentState(value: string) {
    this._currentState = value;
  }
  public resetCurrentState() {
    this._currentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStateInput() {
    return this._currentState;
  }

  // last_action - computed: false, optional: true, required: false
  private _lastAction?: string; 
  public get lastAction() {
    return this.getStringAttribute('last_action');
  }
  public set lastAction(value: string) {
    this._lastAction = value;
  }
  public resetLastAction() {
    this._lastAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastActionInput() {
    return this._lastAction;
  }

  // so_track_cleanup - computed: false, optional: true, required: false
  private _soTrackCleanup?: number; 
  public get soTrackCleanup() {
    return this.getNumberAttribute('so_track_cleanup');
  }
  public set soTrackCleanup(value: number) {
    this._soTrackCleanup = value;
  }
  public resetSoTrackCleanup() {
    this._soTrackCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soTrackCleanupInput() {
    return this._soTrackCleanup;
  }

  // template_count - computed: false, optional: true, required: false
  private _templateCount?: number; 
  public get templateCount() {
    return this.getNumberAttribute('template_count');
  }
  public set templateCount(value: number) {
    this._templateCount = value;
  }
  public resetTemplateCount() {
    this._templateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCountInput() {
    return this._templateCount;
  }

  // template_count_list - computed: false, optional: true, required: false
  private _templateCountList = new DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStructList(this, "template_count_list", false);
  public get templateCountList() {
    return this._templateCountList;
  }
  public putTemplateCountList(value: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListTemplateCountListStruct[] | cdktf.IResolvable) {
    this._templateCountList.internalValue = value;
  }
  public resetTemplateCountList() {
    this._templateCountList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateCountListInput() {
    return this._templateCountList.internalValue;
  }
}

export class DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructOutputReference {
    return new DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#current_cost DataThunderScaleoutDebugResourceTrackingOper#current_cost}
  */
  readonly currentCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#old_cost DataThunderScaleoutDebugResourceTrackingOper#old_cost}
  */
  readonly oldCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#ref_cnt DataThunderScaleoutDebugResourceTrackingOper#ref_cnt}
  */
  readonly refCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#track_name DataThunderScaleoutDebugResourceTrackingOper#track_name}
  */
  readonly trackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#user_index DataThunderScaleoutDebugResourceTrackingOper#user_index}
  */
  readonly userIndex?: number;
}

export function dataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructToTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_cost: cdktf.numberToTerraform(struct!.currentCost),
    old_cost: cdktf.numberToTerraform(struct!.oldCost),
    ref_cnt: cdktf.numberToTerraform(struct!.refCnt),
    track_name: cdktf.stringToTerraform(struct!.trackName),
    user_index: cdktf.numberToTerraform(struct!.userIndex),
  }
}


export function dataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructToHclTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_cost: {
      value: cdktf.numberToHclTerraform(struct!.currentCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_cost: {
      value: cdktf.numberToHclTerraform(struct!.oldCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ref_cnt: {
      value: cdktf.numberToHclTerraform(struct!.refCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_name: {
      value: cdktf.stringToHclTerraform(struct!.trackName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_index: {
      value: cdktf.numberToHclTerraform(struct!.userIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentCost = this._currentCost;
    }
    if (this._oldCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldCost = this._oldCost;
    }
    if (this._refCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.refCnt = this._refCnt;
    }
    if (this._trackName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackName = this._trackName;
    }
    if (this._userIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIndex = this._userIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentCost = undefined;
      this._oldCost = undefined;
      this._refCnt = undefined;
      this._trackName = undefined;
      this._userIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentCost = value.currentCost;
      this._oldCost = value.oldCost;
      this._refCnt = value.refCnt;
      this._trackName = value.trackName;
      this._userIndex = value.userIndex;
    }
  }

  // current_cost - computed: false, optional: true, required: false
  private _currentCost?: number; 
  public get currentCost() {
    return this.getNumberAttribute('current_cost');
  }
  public set currentCost(value: number) {
    this._currentCost = value;
  }
  public resetCurrentCost() {
    this._currentCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentCostInput() {
    return this._currentCost;
  }

  // old_cost - computed: false, optional: true, required: false
  private _oldCost?: number; 
  public get oldCost() {
    return this.getNumberAttribute('old_cost');
  }
  public set oldCost(value: number) {
    this._oldCost = value;
  }
  public resetOldCost() {
    this._oldCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldCostInput() {
    return this._oldCost;
  }

  // ref_cnt - computed: false, optional: true, required: false
  private _refCnt?: number; 
  public get refCnt() {
    return this.getNumberAttribute('ref_cnt');
  }
  public set refCnt(value: number) {
    this._refCnt = value;
  }
  public resetRefCnt() {
    this._refCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refCntInput() {
    return this._refCnt;
  }

  // track_name - computed: false, optional: true, required: false
  private _trackName?: string; 
  public get trackName() {
    return this.getStringAttribute('track_name');
  }
  public set trackName(value: string) {
    this._trackName = value;
  }
  public resetTrackName() {
    this._trackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackNameInput() {
    return this._trackName;
  }

  // user_index - computed: false, optional: true, required: false
  private _userIndex?: number; 
  public get userIndex() {
    return this.getNumberAttribute('user_index');
  }
  public set userIndex(value: number) {
    this._userIndex = value;
  }
  public resetUserIndex() {
    this._userIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIndexInput() {
    return this._userIndex;
  }
}

export class DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructOutputReference {
    return new DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScaleoutDebugResourceTrackingOperOper {
  /**
  * scaleout_cluster_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#scaleout_cluster_list DataThunderScaleoutDebugResourceTrackingOper#scaleout_cluster_list}
  */
  readonly scaleoutClusterList?: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct[] | cdktf.IResolvable;
  /**
  * track_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#track_template_list DataThunderScaleoutDebugResourceTrackingOper#track_template_list}
  */
  readonly trackTemplateList?: DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct[] | cdktf.IResolvable;
}

export function dataThunderScaleoutDebugResourceTrackingOperOperToTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperOutputReference | DataThunderScaleoutDebugResourceTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaleout_cluster_list: cdktf.listMapper(dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructToTerraform, true)(struct!.scaleoutClusterList),
    track_template_list: cdktf.listMapper(dataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructToTerraform, true)(struct!.trackTemplateList),
  }
}


export function dataThunderScaleoutDebugResourceTrackingOperOperToHclTerraform(struct?: DataThunderScaleoutDebugResourceTrackingOperOperOutputReference | DataThunderScaleoutDebugResourceTrackingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaleout_cluster_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructToHclTerraform, true)(struct!.scaleoutClusterList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructList",
    },
    track_template_list: {
      value: cdktf.listMapperHcl(dataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructToHclTerraform, true)(struct!.trackTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugResourceTrackingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugResourceTrackingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleoutClusterList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutClusterList = this._scaleoutClusterList?.internalValue;
    }
    if (this._trackTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackTemplateList = this._trackTemplateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugResourceTrackingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleoutClusterList.internalValue = undefined;
      this._trackTemplateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleoutClusterList.internalValue = value.scaleoutClusterList;
      this._trackTemplateList.internalValue = value.trackTemplateList;
    }
  }

  // scaleout_cluster_list - computed: false, optional: true, required: false
  private _scaleoutClusterList = new DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStructList(this, "scaleout_cluster_list", false);
  public get scaleoutClusterList() {
    return this._scaleoutClusterList;
  }
  public putScaleoutClusterList(value: DataThunderScaleoutDebugResourceTrackingOperOperScaleoutClusterListStruct[] | cdktf.IResolvable) {
    this._scaleoutClusterList.internalValue = value;
  }
  public resetScaleoutClusterList() {
    this._scaleoutClusterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutClusterListInput() {
    return this._scaleoutClusterList.internalValue;
  }

  // track_template_list - computed: false, optional: true, required: false
  private _trackTemplateList = new DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStructList(this, "track_template_list", false);
  public get trackTemplateList() {
    return this._trackTemplateList;
  }
  public putTrackTemplateList(value: DataThunderScaleoutDebugResourceTrackingOperOperTrackTemplateListStruct[] | cdktf.IResolvable) {
    this._trackTemplateList.internalValue = value;
  }
  public resetTrackTemplateList() {
    this._trackTemplateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackTemplateListInput() {
    return this._trackTemplateList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper thunder_scaleout_debug_resource_tracking_oper}
*/
export class DataThunderScaleoutDebugResourceTrackingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_resource_tracking_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugResourceTrackingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugResourceTrackingOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugResourceTrackingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugResourceTrackingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_resource_tracking_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scaleout_debug_resource_tracking_oper thunder_scaleout_debug_resource_tracking_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugResourceTrackingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugResourceTrackingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_resource_tracking_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderScaleoutDebugResourceTrackingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugResourceTrackingOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderScaleoutDebugResourceTrackingOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderScaleoutDebugResourceTrackingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugResourceTrackingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
