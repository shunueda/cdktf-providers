// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#grid_layout Dashboard#grid_layout}
  */
  readonly gridLayout: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#id Dashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#shared Dashboard#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * The title of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#options Dashboard#options}
  */
  readonly options: DashboardOptions[] | cdktf.IResolvable;
  /**
  * widget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#widget Dashboard#widget}
  */
  readonly widget: DashboardWidget[] | cdktf.IResolvable;
}
export interface DashboardOptionsAccessConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#black_dash Dashboard#black_dash}
  */
  readonly blackDash?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#enabled Dashboard#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#full_screen Dashboard#full_screen}
  */
  readonly fullScreen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#full_screen_hide_title Dashboard#full_screen_hide_title}
  */
  readonly fullScreenHideTitle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#nick_name Dashboard#nick_name}
  */
  readonly nickName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#scale_text Dashboard#scale_text}
  */
  readonly scaleText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#shared_id Dashboard#shared_id}
  */
  readonly sharedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#text_size Dashboard#text_size}
  */
  readonly textSize?: number;
}

export function dashboardOptionsAccessConfigsToTerraform(struct?: DashboardOptionsAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_dash: cdktf.booleanToTerraform(struct!.blackDash),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    full_screen: cdktf.booleanToTerraform(struct!.fullScreen),
    full_screen_hide_title: cdktf.booleanToTerraform(struct!.fullScreenHideTitle),
    nick_name: cdktf.stringToTerraform(struct!.nickName),
    scale_text: cdktf.booleanToTerraform(struct!.scaleText),
    shared_id: cdktf.stringToTerraform(struct!.sharedId),
    text_size: cdktf.numberToTerraform(struct!.textSize),
  }
}


export function dashboardOptionsAccessConfigsToHclTerraform(struct?: DashboardOptionsAccessConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_dash: {
      value: cdktf.booleanToHclTerraform(struct!.blackDash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_screen: {
      value: cdktf.booleanToHclTerraform(struct!.fullScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    full_screen_hide_title: {
      value: cdktf.booleanToHclTerraform(struct!.fullScreenHideTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nick_name: {
      value: cdktf.stringToHclTerraform(struct!.nickName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_text: {
      value: cdktf.booleanToHclTerraform(struct!.scaleText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared_id: {
      value: cdktf.stringToHclTerraform(struct!.sharedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_size: {
      value: cdktf.numberToHclTerraform(struct!.textSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardOptionsAccessConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardOptionsAccessConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackDash !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackDash = this._blackDash;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fullScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullScreen = this._fullScreen;
    }
    if (this._fullScreenHideTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullScreenHideTitle = this._fullScreenHideTitle;
    }
    if (this._nickName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nickName = this._nickName;
    }
    if (this._scaleText !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleText = this._scaleText;
    }
    if (this._sharedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedId = this._sharedId;
    }
    if (this._textSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSize = this._textSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardOptionsAccessConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackDash = undefined;
      this._enabled = undefined;
      this._fullScreen = undefined;
      this._fullScreenHideTitle = undefined;
      this._nickName = undefined;
      this._scaleText = undefined;
      this._sharedId = undefined;
      this._textSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackDash = value.blackDash;
      this._enabled = value.enabled;
      this._fullScreen = value.fullScreen;
      this._fullScreenHideTitle = value.fullScreenHideTitle;
      this._nickName = value.nickName;
      this._scaleText = value.scaleText;
      this._sharedId = value.sharedId;
      this._textSize = value.textSize;
    }
  }

  // black_dash - computed: false, optional: true, required: false
  private _blackDash?: boolean | cdktf.IResolvable; 
  public get blackDash() {
    return this.getBooleanAttribute('black_dash');
  }
  public set blackDash(value: boolean | cdktf.IResolvable) {
    this._blackDash = value;
  }
  public resetBlackDash() {
    this._blackDash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackDashInput() {
    return this._blackDash;
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

  // full_screen - computed: false, optional: true, required: false
  private _fullScreen?: boolean | cdktf.IResolvable; 
  public get fullScreen() {
    return this.getBooleanAttribute('full_screen');
  }
  public set fullScreen(value: boolean | cdktf.IResolvable) {
    this._fullScreen = value;
  }
  public resetFullScreen() {
    this._fullScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScreenInput() {
    return this._fullScreen;
  }

  // full_screen_hide_title - computed: false, optional: true, required: false
  private _fullScreenHideTitle?: boolean | cdktf.IResolvable; 
  public get fullScreenHideTitle() {
    return this.getBooleanAttribute('full_screen_hide_title');
  }
  public set fullScreenHideTitle(value: boolean | cdktf.IResolvable) {
    this._fullScreenHideTitle = value;
  }
  public resetFullScreenHideTitle() {
    this._fullScreenHideTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScreenHideTitleInput() {
    return this._fullScreenHideTitle;
  }

  // nick_name - computed: false, optional: true, required: false
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  public resetNickName() {
    this._nickName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
  }

  // scale_text - computed: false, optional: true, required: false
  private _scaleText?: boolean | cdktf.IResolvable; 
  public get scaleText() {
    return this.getBooleanAttribute('scale_text');
  }
  public set scaleText(value: boolean | cdktf.IResolvable) {
    this._scaleText = value;
  }
  public resetScaleText() {
    this._scaleText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTextInput() {
    return this._scaleText;
  }

  // shared_id - computed: false, optional: true, required: false
  private _sharedId?: string; 
  public get sharedId() {
    return this.getStringAttribute('shared_id');
  }
  public set sharedId(value: string) {
    this._sharedId = value;
  }
  public resetSharedId() {
    this._sharedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedIdInput() {
    return this._sharedId;
  }

  // text_size - computed: false, optional: true, required: false
  private _textSize?: number; 
  public get textSize() {
    return this.getNumberAttribute('text_size');
  }
  public set textSize(value: number) {
    this._textSize = value;
  }
  public resetTextSize() {
    this._textSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textSizeInput() {
    return this._textSize;
  }
}

export class DashboardOptionsAccessConfigsList extends cdktf.ComplexList {
  public internalValue? : DashboardOptionsAccessConfigs[] | cdktf.IResolvable

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
  public get(index: number): DashboardOptionsAccessConfigsOutputReference {
    return new DashboardOptionsAccessConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#full_screen_hide_title Dashboard#full_screen_hide_title}
  */
  readonly fullScreenHideTitle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#hide_grid Dashboard#hide_grid}
  */
  readonly hideGrid?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#scale_text Dashboard#scale_text}
  */
  readonly scaleText?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#text_size Dashboard#text_size}
  */
  readonly textSize?: number;
  /**
  * access_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#access_configs Dashboard#access_configs}
  */
  readonly accessConfigs?: DashboardOptionsAccessConfigs[] | cdktf.IResolvable;
}

export function dashboardOptionsToTerraform(struct?: DashboardOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_screen_hide_title: cdktf.booleanToTerraform(struct!.fullScreenHideTitle),
    hide_grid: cdktf.booleanToTerraform(struct!.hideGrid),
    scale_text: cdktf.booleanToTerraform(struct!.scaleText),
    text_size: cdktf.numberToTerraform(struct!.textSize),
    access_configs: cdktf.listMapper(dashboardOptionsAccessConfigsToTerraform, true)(struct!.accessConfigs),
  }
}


export function dashboardOptionsToHclTerraform(struct?: DashboardOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_screen_hide_title: {
      value: cdktf.booleanToHclTerraform(struct!.fullScreenHideTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_grid: {
      value: cdktf.booleanToHclTerraform(struct!.hideGrid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_text: {
      value: cdktf.booleanToHclTerraform(struct!.scaleText),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_size: {
      value: cdktf.numberToHclTerraform(struct!.textSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_configs: {
      value: cdktf.listMapperHcl(dashboardOptionsAccessConfigsToHclTerraform, true)(struct!.accessConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardOptionsAccessConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullScreenHideTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullScreenHideTitle = this._fullScreenHideTitle;
    }
    if (this._hideGrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideGrid = this._hideGrid;
    }
    if (this._scaleText !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleText = this._scaleText;
    }
    if (this._textSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.textSize = this._textSize;
    }
    if (this._accessConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessConfigs = this._accessConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullScreenHideTitle = undefined;
      this._hideGrid = undefined;
      this._scaleText = undefined;
      this._textSize = undefined;
      this._accessConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullScreenHideTitle = value.fullScreenHideTitle;
      this._hideGrid = value.hideGrid;
      this._scaleText = value.scaleText;
      this._textSize = value.textSize;
      this._accessConfigs.internalValue = value.accessConfigs;
    }
  }

  // full_screen_hide_title - computed: false, optional: true, required: false
  private _fullScreenHideTitle?: boolean | cdktf.IResolvable; 
  public get fullScreenHideTitle() {
    return this.getBooleanAttribute('full_screen_hide_title');
  }
  public set fullScreenHideTitle(value: boolean | cdktf.IResolvable) {
    this._fullScreenHideTitle = value;
  }
  public resetFullScreenHideTitle() {
    this._fullScreenHideTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScreenHideTitleInput() {
    return this._fullScreenHideTitle;
  }

  // hide_grid - computed: false, optional: true, required: false
  private _hideGrid?: boolean | cdktf.IResolvable; 
  public get hideGrid() {
    return this.getBooleanAttribute('hide_grid');
  }
  public set hideGrid(value: boolean | cdktf.IResolvable) {
    this._hideGrid = value;
  }
  public resetHideGrid() {
    this._hideGrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideGridInput() {
    return this._hideGrid;
  }

  // scale_text - computed: false, optional: true, required: false
  private _scaleText?: boolean | cdktf.IResolvable; 
  public get scaleText() {
    return this.getBooleanAttribute('scale_text');
  }
  public set scaleText(value: boolean | cdktf.IResolvable) {
    this._scaleText = value;
  }
  public resetScaleText() {
    this._scaleText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTextInput() {
    return this._scaleText;
  }

  // text_size - computed: false, optional: true, required: false
  private _textSize?: number; 
  public get textSize() {
    return this.getNumberAttribute('text_size');
  }
  public set textSize(value: number) {
    this._textSize = value;
  }
  public resetTextSize() {
    this._textSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textSizeInput() {
    return this._textSize;
  }

  // access_configs - computed: false, optional: true, required: false
  private _accessConfigs = new DashboardOptionsAccessConfigsList(this, "access_configs", true);
  public get accessConfigs() {
    return this._accessConfigs;
  }
  public putAccessConfigs(value: DashboardOptionsAccessConfigs[] | cdktf.IResolvable) {
    this._accessConfigs.internalValue = value;
  }
  public resetAccessConfigs() {
    this._accessConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigsInput() {
    return this._accessConfigs.internalValue;
  }
}

export class DashboardOptionsList extends cdktf.ComplexList {
  public internalValue? : DashboardOptions[] | cdktf.IResolvable

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
  public get(index: number): DashboardOptionsOutputReference {
    return new DashboardOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSettingsBadRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#color Dashboard#color}
  */
  readonly color: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#criterion Dashboard#criterion}
  */
  readonly criterion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#value Dashboard#value}
  */
  readonly value: string;
}

export function dashboardWidgetSettingsBadRulesToTerraform(struct?: DashboardWidgetSettingsBadRulesOutputReference | DashboardWidgetSettingsBadRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    criterion: cdktf.stringToTerraform(struct!.criterion),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dashboardWidgetSettingsBadRulesToHclTerraform(struct?: DashboardWidgetSettingsBadRulesOutputReference | DashboardWidgetSettingsBadRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criterion: {
      value: cdktf.stringToHclTerraform(struct!.criterion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSettingsBadRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardWidgetSettingsBadRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._criterion !== undefined) {
      hasAnyValues = true;
      internalValueResult.criterion = this._criterion;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSettingsBadRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._color = undefined;
      this._criterion = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._color = value.color;
      this._criterion = value.criterion;
      this._value = value.value;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // criterion - computed: false, optional: false, required: true
  private _criterion?: string; 
  public get criterion() {
    return this.getStringAttribute('criterion');
  }
  public set criterion(value: string) {
    this._criterion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criterionInput() {
    return this._criterion;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DashboardWidgetSettingsDatapoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#_check_id Dashboard#_check_id}
  */
  readonly checkId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#_metric_type Dashboard#_metric_type}
  */
  readonly metricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#metric Dashboard#metric}
  */
  readonly metric: string;
}

export function dashboardWidgetSettingsDatapointsToTerraform(struct?: DashboardWidgetSettingsDatapoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _check_id: cdktf.numberToTerraform(struct!.checkId),
    _metric_type: cdktf.stringToTerraform(struct!.metricType),
    label: cdktf.stringToTerraform(struct!.label),
    metric: cdktf.stringToTerraform(struct!.metric),
  }
}


export function dashboardWidgetSettingsDatapointsToHclTerraform(struct?: DashboardWidgetSettingsDatapoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _check_id: {
      value: cdktf.numberToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    _metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSettingsDatapointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetSettingsDatapoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSettingsDatapoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._metricType = undefined;
      this._label = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._metricType = value.metricType;
      this._label = value.label;
      this._metric = value.metric;
    }
  }

  // _check_id - computed: false, optional: false, required: true
  private _checkId?: number; 
  public get checkId() {
    return this.getNumberAttribute('_check_id');
  }
  public set checkId(value: number) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // _metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('_metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class DashboardWidgetSettingsDatapointsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetSettingsDatapoints[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetSettingsDatapointsOutputReference {
    return new DashboardWidgetSettingsDatapointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSettingsThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#colors Dashboard#colors}
  */
  readonly colors: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#flip Dashboard#flip}
  */
  readonly flip: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#values Dashboard#values}
  */
  readonly values: string[];
}

export function dashboardWidgetSettingsThresholdsToTerraform(struct?: DashboardWidgetSettingsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.colors),
    flip: cdktf.booleanToTerraform(struct!.flip),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dashboardWidgetSettingsThresholdsToHclTerraform(struct?: DashboardWidgetSettingsThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.colors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flip: {
      value: cdktf.booleanToHclTerraform(struct!.flip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSettingsThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetSettingsThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors;
    }
    if (this._flip !== undefined) {
      hasAnyValues = true;
      internalValueResult.flip = this._flip;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSettingsThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colors = undefined;
      this._flip = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colors = value.colors;
      this._flip = value.flip;
      this._values = value.values;
    }
  }

  // colors - computed: false, optional: false, required: true
  private _colors?: string[]; 
  public get colors() {
    return this.getListAttribute('colors');
  }
  public set colors(value: string[]) {
    this._colors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors;
  }

  // flip - computed: false, optional: false, required: true
  private _flip?: boolean | cdktf.IResolvable; 
  public get flip() {
    return this.getBooleanAttribute('flip');
  }
  public set flip(value: boolean | cdktf.IResolvable) {
    this._flip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flipInput() {
    return this._flip;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DashboardWidgetSettingsThresholdsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetSettingsThresholds[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetSettingsThresholdsOutputReference {
    return new DashboardWidgetSettingsThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidgetSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#account_id Dashboard#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#acknowledged Dashboard#acknowledged}
  */
  readonly acknowledged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#algorithm Dashboard#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#autoformat Dashboard#autoformat}
  */
  readonly autoformat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#body_format Dashboard#body_format}
  */
  readonly bodyFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#caql Dashboard#caql}
  */
  readonly caql?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#chart_type Dashboard#chart_type}
  */
  readonly chartType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#check_uuid Dashboard#check_uuid}
  */
  readonly checkUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#cleared Dashboard#cleared}
  */
  readonly cleared?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#cluster_id Dashboard#cluster_id}
  */
  readonly clusterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#cluster_name Dashboard#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#content_type Dashboard#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#date_window Dashboard#date_window}
  */
  readonly dateWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#dependents Dashboard#dependents}
  */
  readonly dependents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#disable_autoformat Dashboard#disable_autoformat}
  */
  readonly disableAutoformat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#display Dashboard#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#display_markup Dashboard#display_markup}
  */
  readonly displayMarkup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#format Dashboard#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#formula Dashboard#formula}
  */
  readonly formula?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#good_color Dashboard#good_color}
  */
  readonly goodColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#graph_uuid Dashboard#graph_uuid}
  */
  readonly graphUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#hide_xaxis Dashboard#hide_xaxis}
  */
  readonly hideXaxis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#hide_yaxis Dashboard#hide_yaxis}
  */
  readonly hideYaxis?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#key_inline Dashboard#key_inline}
  */
  readonly keyInline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#key_loc Dashboard#key_loc}
  */
  readonly keyLoc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#key_size Dashboard#key_size}
  */
  readonly keySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#key_wrap Dashboard#key_wrap}
  */
  readonly keyWrap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#label Dashboard#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#layout Dashboard#layout}
  */
  readonly layout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#layout_style Dashboard#layout_style}
  */
  readonly layoutStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#limit Dashboard#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#link_url Dashboard#link_url}
  */
  readonly linkUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#maintenance Dashboard#maintenance}
  */
  readonly maintenance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#markup Dashboard#markup}
  */
  readonly markup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#metric_display_name Dashboard#metric_display_name}
  */
  readonly metricDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#metric_name Dashboard#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#metric_type Dashboard#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#min_age Dashboard#min_age}
  */
  readonly minAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#overlay_set_id Dashboard#overlay_set_id}
  */
  readonly overlaySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#period Dashboard#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#range_high Dashboard#range_high}
  */
  readonly rangeHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#range_low Dashboard#range_low}
  */
  readonly rangeLow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#real_time Dashboard#real_time}
  */
  readonly realTime?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#resource_limit Dashboard#resource_limit}
  */
  readonly resourceLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#resource_usage Dashboard#resource_usage}
  */
  readonly resourceUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#search Dashboard#search}
  */
  readonly search?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#severity Dashboard#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#show_flags Dashboard#show_flags}
  */
  readonly showFlags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#show_value Dashboard#show_value}
  */
  readonly showValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#size Dashboard#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#text_align Dashboard#text_align}
  */
  readonly textAlign?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#threshold Dashboard#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#time_window Dashboard#time_window}
  */
  readonly timeWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#title_format Dashboard#title_format}
  */
  readonly titleFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#trend Dashboard#trend}
  */
  readonly trend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#use_default Dashboard#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#value_type Dashboard#value_type}
  */
  readonly valueType?: string;
  /**
  * bad_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#bad_rules Dashboard#bad_rules}
  */
  readonly badRules?: DashboardWidgetSettingsBadRules;
  /**
  * datapoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#datapoints Dashboard#datapoints}
  */
  readonly datapoints?: DashboardWidgetSettingsDatapoints[] | cdktf.IResolvable;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#thresholds Dashboard#thresholds}
  */
  readonly thresholds?: DashboardWidgetSettingsThresholds[] | cdktf.IResolvable;
}

export function dashboardWidgetSettingsToTerraform(struct?: DashboardWidgetSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    acknowledged: cdktf.stringToTerraform(struct!.acknowledged),
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    autoformat: cdktf.booleanToTerraform(struct!.autoformat),
    body_format: cdktf.stringToTerraform(struct!.bodyFormat),
    caql: cdktf.stringToTerraform(struct!.caql),
    chart_type: cdktf.stringToTerraform(struct!.chartType),
    check_uuid: cdktf.stringToTerraform(struct!.checkUuid),
    cleared: cdktf.stringToTerraform(struct!.cleared),
    cluster_id: cdktf.numberToTerraform(struct!.clusterId),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    date_window: cdktf.stringToTerraform(struct!.dateWindow),
    dependents: cdktf.stringToTerraform(struct!.dependents),
    disable_autoformat: cdktf.booleanToTerraform(struct!.disableAutoformat),
    display: cdktf.stringToTerraform(struct!.display),
    display_markup: cdktf.stringToTerraform(struct!.displayMarkup),
    format: cdktf.stringToTerraform(struct!.format),
    formula: cdktf.stringToTerraform(struct!.formula),
    good_color: cdktf.stringToTerraform(struct!.goodColor),
    graph_uuid: cdktf.stringToTerraform(struct!.graphUuid),
    hide_xaxis: cdktf.booleanToTerraform(struct!.hideXaxis),
    hide_yaxis: cdktf.booleanToTerraform(struct!.hideYaxis),
    key_inline: cdktf.booleanToTerraform(struct!.keyInline),
    key_loc: cdktf.stringToTerraform(struct!.keyLoc),
    key_size: cdktf.numberToTerraform(struct!.keySize),
    key_wrap: cdktf.booleanToTerraform(struct!.keyWrap),
    label: cdktf.stringToTerraform(struct!.label),
    layout: cdktf.stringToTerraform(struct!.layout),
    layout_style: cdktf.stringToTerraform(struct!.layoutStyle),
    limit: cdktf.numberToTerraform(struct!.limit),
    link_url: cdktf.stringToTerraform(struct!.linkUrl),
    maintenance: cdktf.stringToTerraform(struct!.maintenance),
    markup: cdktf.stringToTerraform(struct!.markup),
    metric_display_name: cdktf.stringToTerraform(struct!.metricDisplayName),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    min_age: cdktf.stringToTerraform(struct!.minAge),
    overlay_set_id: cdktf.stringToTerraform(struct!.overlaySetId),
    period: cdktf.numberToTerraform(struct!.period),
    range_high: cdktf.numberToTerraform(struct!.rangeHigh),
    range_low: cdktf.numberToTerraform(struct!.rangeLow),
    real_time: cdktf.booleanToTerraform(struct!.realTime),
    resource_limit: cdktf.stringToTerraform(struct!.resourceLimit),
    resource_usage: cdktf.stringToTerraform(struct!.resourceUsage),
    search: cdktf.stringToTerraform(struct!.search),
    severity: cdktf.stringToTerraform(struct!.severity),
    show_flags: cdktf.booleanToTerraform(struct!.showFlags),
    show_value: cdktf.booleanToTerraform(struct!.showValue),
    size: cdktf.stringToTerraform(struct!.size),
    text_align: cdktf.stringToTerraform(struct!.textAlign),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    time_window: cdktf.stringToTerraform(struct!.timeWindow),
    title: cdktf.stringToTerraform(struct!.title),
    title_format: cdktf.stringToTerraform(struct!.titleFormat),
    trend: cdktf.stringToTerraform(struct!.trend),
    type: cdktf.stringToTerraform(struct!.type),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    bad_rules: dashboardWidgetSettingsBadRulesToTerraform(struct!.badRules),
    datapoints: cdktf.listMapper(dashboardWidgetSettingsDatapointsToTerraform, true)(struct!.datapoints),
    thresholds: cdktf.listMapper(dashboardWidgetSettingsThresholdsToTerraform, true)(struct!.thresholds),
  }
}


export function dashboardWidgetSettingsToHclTerraform(struct?: DashboardWidgetSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acknowledged: {
      value: cdktf.stringToHclTerraform(struct!.acknowledged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoformat: {
      value: cdktf.booleanToHclTerraform(struct!.autoformat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body_format: {
      value: cdktf.stringToHclTerraform(struct!.bodyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caql: {
      value: cdktf.stringToHclTerraform(struct!.caql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_type: {
      value: cdktf.stringToHclTerraform(struct!.chartType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_uuid: {
      value: cdktf.stringToHclTerraform(struct!.checkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleared: {
      value: cdktf.stringToHclTerraform(struct!.cleared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.numberToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_window: {
      value: cdktf.stringToHclTerraform(struct!.dateWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependents: {
      value: cdktf.stringToHclTerraform(struct!.dependents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_autoformat: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutoformat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_markup: {
      value: cdktf.stringToHclTerraform(struct!.displayMarkup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    good_color: {
      value: cdktf.stringToHclTerraform(struct!.goodColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graph_uuid: {
      value: cdktf.stringToHclTerraform(struct!.graphUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_xaxis: {
      value: cdktf.booleanToHclTerraform(struct!.hideXaxis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_yaxis: {
      value: cdktf.booleanToHclTerraform(struct!.hideYaxis),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_inline: {
      value: cdktf.booleanToHclTerraform(struct!.keyInline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_loc: {
      value: cdktf.stringToHclTerraform(struct!.keyLoc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_size: {
      value: cdktf.numberToHclTerraform(struct!.keySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_wrap: {
      value: cdktf.booleanToHclTerraform(struct!.keyWrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: cdktf.stringToHclTerraform(struct!.layout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout_style: {
      value: cdktf.stringToHclTerraform(struct!.layoutStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_url: {
      value: cdktf.stringToHclTerraform(struct!.linkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance: {
      value: cdktf.stringToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    markup: {
      value: cdktf.stringToHclTerraform(struct!.markup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_display_name: {
      value: cdktf.stringToHclTerraform(struct!.metricDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_age: {
      value: cdktf.stringToHclTerraform(struct!.minAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlay_set_id: {
      value: cdktf.stringToHclTerraform(struct!.overlaySetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_high: {
      value: cdktf.numberToHclTerraform(struct!.rangeHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_low: {
      value: cdktf.numberToHclTerraform(struct!.rangeLow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_time: {
      value: cdktf.booleanToHclTerraform(struct!.realTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_limit: {
      value: cdktf.stringToHclTerraform(struct!.resourceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_usage: {
      value: cdktf.stringToHclTerraform(struct!.resourceUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search: {
      value: cdktf.stringToHclTerraform(struct!.search),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_flags: {
      value: cdktf.booleanToHclTerraform(struct!.showFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_value: {
      value: cdktf.booleanToHclTerraform(struct!.showValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_align: {
      value: cdktf.stringToHclTerraform(struct!.textAlign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window: {
      value: cdktf.stringToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_format: {
      value: cdktf.stringToHclTerraform(struct!.titleFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trend: {
      value: cdktf.stringToHclTerraform(struct!.trend),
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
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bad_rules: {
      value: dashboardWidgetSettingsBadRulesToHclTerraform(struct!.badRules),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardWidgetSettingsBadRulesList",
    },
    datapoints: {
      value: cdktf.listMapperHcl(dashboardWidgetSettingsDatapointsToHclTerraform, true)(struct!.datapoints),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardWidgetSettingsDatapointsList",
    },
    thresholds: {
      value: cdktf.listMapperHcl(dashboardWidgetSettingsThresholdsToHclTerraform, true)(struct!.thresholds),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardWidgetSettingsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidgetSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._acknowledged !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledged = this._acknowledged;
    }
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._autoformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoformat = this._autoformat;
    }
    if (this._bodyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyFormat = this._bodyFormat;
    }
    if (this._caql !== undefined) {
      hasAnyValues = true;
      internalValueResult.caql = this._caql;
    }
    if (this._chartType !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartType = this._chartType;
    }
    if (this._checkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkUuid = this._checkUuid;
    }
    if (this._cleared !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleared = this._cleared;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._dateWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateWindow = this._dateWindow;
    }
    if (this._dependents !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependents = this._dependents;
    }
    if (this._disableAutoformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoformat = this._disableAutoformat;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._displayMarkup !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMarkup = this._displayMarkup;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    if (this._goodColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.goodColor = this._goodColor;
    }
    if (this._graphUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphUuid = this._graphUuid;
    }
    if (this._hideXaxis !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideXaxis = this._hideXaxis;
    }
    if (this._hideYaxis !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideYaxis = this._hideYaxis;
    }
    if (this._keyInline !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyInline = this._keyInline;
    }
    if (this._keyLoc !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLoc = this._keyLoc;
    }
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    if (this._keyWrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyWrap = this._keyWrap;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._layout !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout;
    }
    if (this._layoutStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutStyle = this._layoutStyle;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._linkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUrl = this._linkUrl;
    }
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    if (this._markup !== undefined) {
      hasAnyValues = true;
      internalValueResult.markup = this._markup;
    }
    if (this._metricDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricDisplayName = this._metricDisplayName;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._minAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAge = this._minAge;
    }
    if (this._overlaySetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlaySetId = this._overlaySetId;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._rangeHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeHigh = this._rangeHigh;
    }
    if (this._rangeLow !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeLow = this._rangeLow;
    }
    if (this._realTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTime = this._realTime;
    }
    if (this._resourceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimit = this._resourceLimit;
    }
    if (this._resourceUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceUsage = this._resourceUsage;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._showFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFlags = this._showFlags;
    }
    if (this._showValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.showValue = this._showValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._textAlign !== undefined) {
      hasAnyValues = true;
      internalValueResult.textAlign = this._textAlign;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFormat = this._titleFormat;
    }
    if (this._trend !== undefined) {
      hasAnyValues = true;
      internalValueResult.trend = this._trend;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._badRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.badRules = this._badRules?.internalValue;
    }
    if (this._datapoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datapoints = this._datapoints?.internalValue;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidgetSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._acknowledged = undefined;
      this._algorithm = undefined;
      this._autoformat = undefined;
      this._bodyFormat = undefined;
      this._caql = undefined;
      this._chartType = undefined;
      this._checkUuid = undefined;
      this._cleared = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
      this._contentType = undefined;
      this._dateWindow = undefined;
      this._dependents = undefined;
      this._disableAutoformat = undefined;
      this._display = undefined;
      this._displayMarkup = undefined;
      this._format = undefined;
      this._formula = undefined;
      this._goodColor = undefined;
      this._graphUuid = undefined;
      this._hideXaxis = undefined;
      this._hideYaxis = undefined;
      this._keyInline = undefined;
      this._keyLoc = undefined;
      this._keySize = undefined;
      this._keyWrap = undefined;
      this._label = undefined;
      this._layout = undefined;
      this._layoutStyle = undefined;
      this._limit = undefined;
      this._linkUrl = undefined;
      this._maintenance = undefined;
      this._markup = undefined;
      this._metricDisplayName = undefined;
      this._metricName = undefined;
      this._metricType = undefined;
      this._minAge = undefined;
      this._overlaySetId = undefined;
      this._period = undefined;
      this._rangeHigh = undefined;
      this._rangeLow = undefined;
      this._realTime = undefined;
      this._resourceLimit = undefined;
      this._resourceUsage = undefined;
      this._search = undefined;
      this._severity = undefined;
      this._showFlags = undefined;
      this._showValue = undefined;
      this._size = undefined;
      this._textAlign = undefined;
      this._threshold = undefined;
      this._timeWindow = undefined;
      this._title = undefined;
      this._titleFormat = undefined;
      this._trend = undefined;
      this._type = undefined;
      this._useDefault = undefined;
      this._valueType = undefined;
      this._badRules.internalValue = undefined;
      this._datapoints.internalValue = undefined;
      this._thresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._acknowledged = value.acknowledged;
      this._algorithm = value.algorithm;
      this._autoformat = value.autoformat;
      this._bodyFormat = value.bodyFormat;
      this._caql = value.caql;
      this._chartType = value.chartType;
      this._checkUuid = value.checkUuid;
      this._cleared = value.cleared;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
      this._contentType = value.contentType;
      this._dateWindow = value.dateWindow;
      this._dependents = value.dependents;
      this._disableAutoformat = value.disableAutoformat;
      this._display = value.display;
      this._displayMarkup = value.displayMarkup;
      this._format = value.format;
      this._formula = value.formula;
      this._goodColor = value.goodColor;
      this._graphUuid = value.graphUuid;
      this._hideXaxis = value.hideXaxis;
      this._hideYaxis = value.hideYaxis;
      this._keyInline = value.keyInline;
      this._keyLoc = value.keyLoc;
      this._keySize = value.keySize;
      this._keyWrap = value.keyWrap;
      this._label = value.label;
      this._layout = value.layout;
      this._layoutStyle = value.layoutStyle;
      this._limit = value.limit;
      this._linkUrl = value.linkUrl;
      this._maintenance = value.maintenance;
      this._markup = value.markup;
      this._metricDisplayName = value.metricDisplayName;
      this._metricName = value.metricName;
      this._metricType = value.metricType;
      this._minAge = value.minAge;
      this._overlaySetId = value.overlaySetId;
      this._period = value.period;
      this._rangeHigh = value.rangeHigh;
      this._rangeLow = value.rangeLow;
      this._realTime = value.realTime;
      this._resourceLimit = value.resourceLimit;
      this._resourceUsage = value.resourceUsage;
      this._search = value.search;
      this._severity = value.severity;
      this._showFlags = value.showFlags;
      this._showValue = value.showValue;
      this._size = value.size;
      this._textAlign = value.textAlign;
      this._threshold = value.threshold;
      this._timeWindow = value.timeWindow;
      this._title = value.title;
      this._titleFormat = value.titleFormat;
      this._trend = value.trend;
      this._type = value.type;
      this._useDefault = value.useDefault;
      this._valueType = value.valueType;
      this._badRules.internalValue = value.badRules;
      this._datapoints.internalValue = value.datapoints;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // acknowledged - computed: false, optional: true, required: false
  private _acknowledged?: string; 
  public get acknowledged() {
    return this.getStringAttribute('acknowledged');
  }
  public set acknowledged(value: string) {
    this._acknowledged = value;
  }
  public resetAcknowledged() {
    this._acknowledged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedInput() {
    return this._acknowledged;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // autoformat - computed: false, optional: true, required: false
  private _autoformat?: boolean | cdktf.IResolvable; 
  public get autoformat() {
    return this.getBooleanAttribute('autoformat');
  }
  public set autoformat(value: boolean | cdktf.IResolvable) {
    this._autoformat = value;
  }
  public resetAutoformat() {
    this._autoformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoformatInput() {
    return this._autoformat;
  }

  // body_format - computed: false, optional: true, required: false
  private _bodyFormat?: string; 
  public get bodyFormat() {
    return this.getStringAttribute('body_format');
  }
  public set bodyFormat(value: string) {
    this._bodyFormat = value;
  }
  public resetBodyFormat() {
    this._bodyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyFormatInput() {
    return this._bodyFormat;
  }

  // caql - computed: false, optional: true, required: false
  private _caql?: string; 
  public get caql() {
    return this.getStringAttribute('caql');
  }
  public set caql(value: string) {
    this._caql = value;
  }
  public resetCaql() {
    this._caql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caqlInput() {
    return this._caql;
  }

  // chart_type - computed: false, optional: true, required: false
  private _chartType?: string; 
  public get chartType() {
    return this.getStringAttribute('chart_type');
  }
  public set chartType(value: string) {
    this._chartType = value;
  }
  public resetChartType() {
    this._chartType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTypeInput() {
    return this._chartType;
  }

  // check_uuid - computed: false, optional: true, required: false
  private _checkUuid?: string; 
  public get checkUuid() {
    return this.getStringAttribute('check_uuid');
  }
  public set checkUuid(value: string) {
    this._checkUuid = value;
  }
  public resetCheckUuid() {
    this._checkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUuidInput() {
    return this._checkUuid;
  }

  // cleared - computed: false, optional: true, required: false
  private _cleared?: string; 
  public get cleared() {
    return this.getStringAttribute('cleared');
  }
  public set cleared(value: string) {
    this._cleared = value;
  }
  public resetCleared() {
    this._cleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearedInput() {
    return this._cleared;
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

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // date_window - computed: false, optional: true, required: false
  private _dateWindow?: string; 
  public get dateWindow() {
    return this.getStringAttribute('date_window');
  }
  public set dateWindow(value: string) {
    this._dateWindow = value;
  }
  public resetDateWindow() {
    this._dateWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateWindowInput() {
    return this._dateWindow;
  }

  // dependents - computed: false, optional: true, required: false
  private _dependents?: string; 
  public get dependents() {
    return this.getStringAttribute('dependents');
  }
  public set dependents(value: string) {
    this._dependents = value;
  }
  public resetDependents() {
    this._dependents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependentsInput() {
    return this._dependents;
  }

  // disable_autoformat - computed: false, optional: true, required: false
  private _disableAutoformat?: boolean | cdktf.IResolvable; 
  public get disableAutoformat() {
    return this.getBooleanAttribute('disable_autoformat');
  }
  public set disableAutoformat(value: boolean | cdktf.IResolvable) {
    this._disableAutoformat = value;
  }
  public resetDisableAutoformat() {
    this._disableAutoformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoformatInput() {
    return this._disableAutoformat;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // display_markup - computed: false, optional: true, required: false
  private _displayMarkup?: string; 
  public get displayMarkup() {
    return this.getStringAttribute('display_markup');
  }
  public set displayMarkup(value: string) {
    this._displayMarkup = value;
  }
  public resetDisplayMarkup() {
    this._displayMarkup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMarkupInput() {
    return this._displayMarkup;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // formula - computed: false, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }

  // good_color - computed: false, optional: true, required: false
  private _goodColor?: string; 
  public get goodColor() {
    return this.getStringAttribute('good_color');
  }
  public set goodColor(value: string) {
    this._goodColor = value;
  }
  public resetGoodColor() {
    this._goodColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goodColorInput() {
    return this._goodColor;
  }

  // graph_uuid - computed: false, optional: true, required: false
  private _graphUuid?: string; 
  public get graphUuid() {
    return this.getStringAttribute('graph_uuid');
  }
  public set graphUuid(value: string) {
    this._graphUuid = value;
  }
  public resetGraphUuid() {
    this._graphUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphUuidInput() {
    return this._graphUuid;
  }

  // hide_xaxis - computed: false, optional: true, required: false
  private _hideXaxis?: boolean | cdktf.IResolvable; 
  public get hideXaxis() {
    return this.getBooleanAttribute('hide_xaxis');
  }
  public set hideXaxis(value: boolean | cdktf.IResolvable) {
    this._hideXaxis = value;
  }
  public resetHideXaxis() {
    this._hideXaxis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideXaxisInput() {
    return this._hideXaxis;
  }

  // hide_yaxis - computed: false, optional: true, required: false
  private _hideYaxis?: boolean | cdktf.IResolvable; 
  public get hideYaxis() {
    return this.getBooleanAttribute('hide_yaxis');
  }
  public set hideYaxis(value: boolean | cdktf.IResolvable) {
    this._hideYaxis = value;
  }
  public resetHideYaxis() {
    this._hideYaxis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideYaxisInput() {
    return this._hideYaxis;
  }

  // key_inline - computed: false, optional: true, required: false
  private _keyInline?: boolean | cdktf.IResolvable; 
  public get keyInline() {
    return this.getBooleanAttribute('key_inline');
  }
  public set keyInline(value: boolean | cdktf.IResolvable) {
    this._keyInline = value;
  }
  public resetKeyInline() {
    this._keyInline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInlineInput() {
    return this._keyInline;
  }

  // key_loc - computed: false, optional: true, required: false
  private _keyLoc?: string; 
  public get keyLoc() {
    return this.getStringAttribute('key_loc');
  }
  public set keyLoc(value: string) {
    this._keyLoc = value;
  }
  public resetKeyLoc() {
    this._keyLoc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLocInput() {
    return this._keyLoc;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_wrap - computed: false, optional: true, required: false
  private _keyWrap?: boolean | cdktf.IResolvable; 
  public get keyWrap() {
    return this.getBooleanAttribute('key_wrap');
  }
  public set keyWrap(value: boolean | cdktf.IResolvable) {
    this._keyWrap = value;
  }
  public resetKeyWrap() {
    this._keyWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWrapInput() {
    return this._keyWrap;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // layout - computed: false, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // layout_style - computed: false, optional: true, required: false
  private _layoutStyle?: string; 
  public get layoutStyle() {
    return this.getStringAttribute('layout_style');
  }
  public set layoutStyle(value: string) {
    this._layoutStyle = value;
  }
  public resetLayoutStyle() {
    this._layoutStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutStyleInput() {
    return this._layoutStyle;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // link_url - computed: false, optional: true, required: false
  private _linkUrl?: string; 
  public get linkUrl() {
    return this.getStringAttribute('link_url');
  }
  public set linkUrl(value: string) {
    this._linkUrl = value;
  }
  public resetLinkUrl() {
    this._linkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUrlInput() {
    return this._linkUrl;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: string; 
  public get maintenance() {
    return this.getStringAttribute('maintenance');
  }
  public set maintenance(value: string) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // markup - computed: false, optional: true, required: false
  private _markup?: string; 
  public get markup() {
    return this.getStringAttribute('markup');
  }
  public set markup(value: string) {
    this._markup = value;
  }
  public resetMarkup() {
    this._markup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markupInput() {
    return this._markup;
  }

  // metric_display_name - computed: false, optional: true, required: false
  private _metricDisplayName?: string; 
  public get metricDisplayName() {
    return this.getStringAttribute('metric_display_name');
  }
  public set metricDisplayName(value: string) {
    this._metricDisplayName = value;
  }
  public resetMetricDisplayName() {
    this._metricDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDisplayNameInput() {
    return this._metricDisplayName;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // min_age - computed: false, optional: true, required: false
  private _minAge?: string; 
  public get minAge() {
    return this.getStringAttribute('min_age');
  }
  public set minAge(value: string) {
    this._minAge = value;
  }
  public resetMinAge() {
    this._minAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeInput() {
    return this._minAge;
  }

  // overlay_set_id - computed: false, optional: true, required: false
  private _overlaySetId?: string; 
  public get overlaySetId() {
    return this.getStringAttribute('overlay_set_id');
  }
  public set overlaySetId(value: string) {
    this._overlaySetId = value;
  }
  public resetOverlaySetId() {
    this._overlaySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaySetIdInput() {
    return this._overlaySetId;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // range_high - computed: false, optional: true, required: false
  private _rangeHigh?: number; 
  public get rangeHigh() {
    return this.getNumberAttribute('range_high');
  }
  public set rangeHigh(value: number) {
    this._rangeHigh = value;
  }
  public resetRangeHigh() {
    this._rangeHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeHighInput() {
    return this._rangeHigh;
  }

  // range_low - computed: false, optional: true, required: false
  private _rangeLow?: number; 
  public get rangeLow() {
    return this.getNumberAttribute('range_low');
  }
  public set rangeLow(value: number) {
    this._rangeLow = value;
  }
  public resetRangeLow() {
    this._rangeLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeLowInput() {
    return this._rangeLow;
  }

  // real_time - computed: false, optional: true, required: false
  private _realTime?: boolean | cdktf.IResolvable; 
  public get realTime() {
    return this.getBooleanAttribute('real_time');
  }
  public set realTime(value: boolean | cdktf.IResolvable) {
    this._realTime = value;
  }
  public resetRealTime() {
    this._realTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeInput() {
    return this._realTime;
  }

  // resource_limit - computed: false, optional: true, required: false
  private _resourceLimit?: string; 
  public get resourceLimit() {
    return this.getStringAttribute('resource_limit');
  }
  public set resourceLimit(value: string) {
    this._resourceLimit = value;
  }
  public resetResourceLimit() {
    this._resourceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitInput() {
    return this._resourceLimit;
  }

  // resource_usage - computed: false, optional: true, required: false
  private _resourceUsage?: string; 
  public get resourceUsage() {
    return this.getStringAttribute('resource_usage');
  }
  public set resourceUsage(value: string) {
    this._resourceUsage = value;
  }
  public resetResourceUsage() {
    this._resourceUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageInput() {
    return this._resourceUsage;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // show_flags - computed: false, optional: true, required: false
  private _showFlags?: boolean | cdktf.IResolvable; 
  public get showFlags() {
    return this.getBooleanAttribute('show_flags');
  }
  public set showFlags(value: boolean | cdktf.IResolvable) {
    this._showFlags = value;
  }
  public resetShowFlags() {
    this._showFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFlagsInput() {
    return this._showFlags;
  }

  // show_value - computed: false, optional: true, required: false
  private _showValue?: boolean | cdktf.IResolvable; 
  public get showValue() {
    return this.getBooleanAttribute('show_value');
  }
  public set showValue(value: boolean | cdktf.IResolvable) {
    this._showValue = value;
  }
  public resetShowValue() {
    this._showValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showValueInput() {
    return this._showValue;
  }

  // size - computed: false, optional: true, required: false
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

  // text_align - computed: false, optional: true, required: false
  private _textAlign?: string; 
  public get textAlign() {
    return this.getStringAttribute('text_align');
  }
  public set textAlign(value: string) {
    this._textAlign = value;
  }
  public resetTextAlign() {
    this._textAlign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textAlignInput() {
    return this._textAlign;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // time_window - computed: false, optional: true, required: false
  private _timeWindow?: string; 
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
  public set timeWindow(value: string) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // title - computed: false, optional: true, required: false
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

  // title_format - computed: false, optional: true, required: false
  private _titleFormat?: string; 
  public get titleFormat() {
    return this.getStringAttribute('title_format');
  }
  public set titleFormat(value: string) {
    this._titleFormat = value;
  }
  public resetTitleFormat() {
    this._titleFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFormatInput() {
    return this._titleFormat;
  }

  // trend - computed: false, optional: true, required: false
  private _trend?: string; 
  public get trend() {
    return this.getStringAttribute('trend');
  }
  public set trend(value: string) {
    this._trend = value;
  }
  public resetTrend() {
    this._trend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendInput() {
    return this._trend;
  }

  // type - computed: false, optional: true, required: false
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

  // use_default - computed: false, optional: true, required: false
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  public resetUseDefault() {
    this._useDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // bad_rules - computed: false, optional: true, required: false
  private _badRules = new DashboardWidgetSettingsBadRulesOutputReference(this, "bad_rules");
  public get badRules() {
    return this._badRules;
  }
  public putBadRules(value: DashboardWidgetSettingsBadRules) {
    this._badRules.internalValue = value;
  }
  public resetBadRules() {
    this._badRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badRulesInput() {
    return this._badRules.internalValue;
  }

  // datapoints - computed: false, optional: true, required: false
  private _datapoints = new DashboardWidgetSettingsDatapointsList(this, "datapoints", true);
  public get datapoints() {
    return this._datapoints;
  }
  public putDatapoints(value: DashboardWidgetSettingsDatapoints[] | cdktf.IResolvable) {
    this._datapoints.internalValue = value;
  }
  public resetDatapoints() {
    this._datapoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapointsInput() {
    return this._datapoints.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new DashboardWidgetSettingsThresholdsList(this, "thresholds", true);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DashboardWidgetSettingsThresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }
}

export class DashboardWidgetSettingsList extends cdktf.ComplexList {
  public internalValue? : DashboardWidgetSettings[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetSettingsOutputReference {
    return new DashboardWidgetSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardWidget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#active Dashboard#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#height Dashboard#height}
  */
  readonly height: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#name Dashboard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#origin Dashboard#origin}
  */
  readonly origin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#type Dashboard#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#widget_id Dashboard#widget_id}
  */
  readonly widgetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#width Dashboard#width}
  */
  readonly width: number;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#settings Dashboard#settings}
  */
  readonly settings: DashboardWidgetSettings[] | cdktf.IResolvable;
}

export function dashboardWidgetToTerraform(struct?: DashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    height: cdktf.numberToTerraform(struct!.height),
    name: cdktf.stringToTerraform(struct!.name),
    origin: cdktf.stringToTerraform(struct!.origin),
    type: cdktf.stringToTerraform(struct!.type),
    widget_id: cdktf.stringToTerraform(struct!.widgetId),
    width: cdktf.numberToTerraform(struct!.width),
    settings: cdktf.listMapper(dashboardWidgetSettingsToTerraform, true)(struct!.settings),
  }
}


export function dashboardWidgetToHclTerraform(struct?: DashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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
    widget_id: {
      value: cdktf.stringToHclTerraform(struct!.widgetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    settings: {
      value: cdktf.listMapperHcl(dashboardWidgetSettingsToHclTerraform, true)(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardWidgetSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardWidgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardWidget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._widgetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetId = this._widgetId;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardWidget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._height = undefined;
      this._name = undefined;
      this._origin = undefined;
      this._type = undefined;
      this._widgetId = undefined;
      this._width = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._height = value.height;
      this._name = value.name;
      this._origin = value.origin;
      this._type = value.type;
      this._widgetId = value.widgetId;
      this._width = value.width;
      this._settings.internalValue = value.settings;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

  // widget_id - computed: false, optional: false, required: true
  private _widgetId?: string; 
  public get widgetId() {
    return this.getStringAttribute('widget_id');
  }
  public set widgetId(value: string) {
    this._widgetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetIdInput() {
    return this._widgetId;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new DashboardWidgetSettingsList(this, "settings", true);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DashboardWidgetSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class DashboardWidgetList extends cdktf.ComplexList {
  public internalValue? : DashboardWidget[] | cdktf.IResolvable

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
  public get(index: number): DashboardWidgetOutputReference {
    return new DashboardWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard circonus_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dashboard to import
  * @param importFromId The id of the existing Dashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/dashboard circonus_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15',
        providerVersionConstraint: '0.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gridLayout = config.gridLayout;
    this._id = config.id;
    this._shared = config.shared;
    this._title = config.title;
    this._options.internalValue = config.options;
    this._widget.internalValue = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grid_layout - computed: false, optional: false, required: true
  private _gridLayout?: { [key: string]: number }; 
  public get gridLayout() {
    return this.getNumberMapAttribute('grid_layout');
  }
  public set gridLayout(value: { [key: string]: number }) {
    this._gridLayout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gridLayoutInput() {
    return this._gridLayout;
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

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // options - computed: false, optional: false, required: true
  private _options = new DashboardOptionsList(this, "options", true);
  public get options() {
    return this._options;
  }
  public putOptions(value: DashboardOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // widget - computed: false, optional: false, required: true
  private _widget = new DashboardWidgetList(this, "widget", true);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: DashboardWidget[] | cdktf.IResolvable) {
    this._widget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grid_layout: cdktf.hashMapper(cdktf.numberToTerraform)(this._gridLayout),
      id: cdktf.stringToTerraform(this._id),
      shared: cdktf.booleanToTerraform(this._shared),
      title: cdktf.stringToTerraform(this._title),
      options: cdktf.listMapper(dashboardOptionsToTerraform, true)(this._options.internalValue),
      widget: cdktf.listMapper(dashboardWidgetToTerraform, true)(this._widget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grid_layout: {
        value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(this._gridLayout),
        isBlock: false,
        type: "map",
        storageClassType: "numberMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(dashboardOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardOptionsList",
      },
      widget: {
        value: cdktf.listMapperHcl(dashboardWidgetToHclTerraform, true)(this._widget.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DashboardWidgetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
