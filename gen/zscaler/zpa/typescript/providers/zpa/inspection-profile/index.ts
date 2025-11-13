// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InspectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#api_profile InspectionProfile#api_profile}
  */
  readonly apiProfile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#associate_all_controls InspectionProfile#associate_all_controls}
  */
  readonly associateAllControls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#common_global_override_actions_config InspectionProfile#common_global_override_actions_config}
  */
  readonly commonGlobalOverrideActionsConfig?: { [key: string]: string };
  /**
  * The description of the AppProtection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#description InspectionProfile#description}
  */
  readonly description?: string;
  /**
  * The actions of the predefined, custom, or override controls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#global_control_actions InspectionProfile#global_control_actions}
  */
  readonly globalControlActions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#name InspectionProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#override_action InspectionProfile#override_action}
  */
  readonly overrideAction?: string;
  /**
  * The OWASP Predefined Paranoia Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#paranoia_level InspectionProfile#paranoia_level}
  */
  readonly paranoiaLevel?: string;
  /**
  * The protocol for the AppProtection application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#predefined_controls_version InspectionProfile#predefined_controls_version}
  */
  readonly predefinedControlsVersion?: string;
  /**
  * Indicates the user's choice for the ThreatLabZ Controls. Supported values: ALL and SPECIFIC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#zs_defined_control_choice InspectionProfile#zs_defined_control_choice}
  */
  readonly zsDefinedControlChoice?: string;
  /**
  * controls_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#controls_info InspectionProfile#controls_info}
  */
  readonly controlsInfo?: InspectionProfileControlsInfo[] | cdktf.IResolvable;
  /**
  * custom_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#custom_controls InspectionProfile#custom_controls}
  */
  readonly customControls?: InspectionProfileCustomControls[] | cdktf.IResolvable;
  /**
  * predefined_api_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#predefined_api_controls InspectionProfile#predefined_api_controls}
  */
  readonly predefinedApiControls?: InspectionProfilePredefinedApiControls[] | cdktf.IResolvable;
  /**
  * predefined_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#predefined_controls InspectionProfile#predefined_controls}
  */
  readonly predefinedControls?: InspectionProfilePredefinedControls[] | cdktf.IResolvable;
  /**
  * threat_labz_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#threat_labz_controls InspectionProfile#threat_labz_controls}
  */
  readonly threatLabzControls?: InspectionProfileThreatLabzControls[] | cdktf.IResolvable;
  /**
  * websocket_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#websocket_controls InspectionProfile#websocket_controls}
  */
  readonly websocketControls?: InspectionProfileWebsocketControls[] | cdktf.IResolvable;
}
export interface InspectionProfileControlsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#control_type InspectionProfile#control_type}
  */
  readonly controlType?: string;
}

export function inspectionProfileControlsInfoToTerraform(struct?: InspectionProfileControlsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_type: cdktf.stringToTerraform(struct!.controlType),
  }
}


export function inspectionProfileControlsInfoToHclTerraform(struct?: InspectionProfileControlsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_type: {
      value: cdktf.stringToHclTerraform(struct!.controlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InspectionProfileControlsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InspectionProfileControlsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlType = this._controlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectionProfileControlsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlType = value.controlType;
    }
  }

  // control_type - computed: true, optional: true, required: false
  private _controlType?: string; 
  public get controlType() {
    return this.getStringAttribute('control_type');
  }
  public set controlType(value: string) {
    this._controlType = value;
  }
  public resetControlType() {
    this._controlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlTypeInput() {
    return this._controlType;
  }
}

export class InspectionProfileControlsInfoList extends cdktf.ComplexList {
  public internalValue? : InspectionProfileControlsInfo[] | cdktf.IResolvable

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
  public get(index: number): InspectionProfileControlsInfoOutputReference {
    return new InspectionProfileControlsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InspectionProfileCustomControls {
  /**
  * The action of the custom control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action InspectionProfile#action}
  */
  readonly action?: string;
  /**
  * Denotes the action. Supports any string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action_value InspectionProfile#action_value}
  */
  readonly actionValue?: string;
  /**
  * The unique identifier of the custom control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#id InspectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function inspectionProfileCustomControlsToTerraform(struct?: InspectionProfileCustomControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function inspectionProfileCustomControlsToHclTerraform(struct?: InspectionProfileCustomControls | cdktf.IResolvable): any {
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
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InspectionProfileCustomControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InspectionProfileCustomControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectionProfileCustomControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionValue = value.actionValue;
      this._id = value.id;
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

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
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
}

export class InspectionProfileCustomControlsList extends cdktf.ComplexList {
  public internalValue? : InspectionProfileCustomControls[] | cdktf.IResolvable

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
  public get(index: number): InspectionProfileCustomControlsOutputReference {
    return new InspectionProfileCustomControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InspectionProfilePredefinedApiControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action InspectionProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action_value InspectionProfile#action_value}
  */
  readonly actionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#id InspectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function inspectionProfilePredefinedApiControlsToTerraform(struct?: InspectionProfilePredefinedApiControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function inspectionProfilePredefinedApiControlsToHclTerraform(struct?: InspectionProfilePredefinedApiControls | cdktf.IResolvable): any {
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
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InspectionProfilePredefinedApiControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InspectionProfilePredefinedApiControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectionProfilePredefinedApiControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionValue = value.actionValue;
      this._id = value.id;
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

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
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
}

export class InspectionProfilePredefinedApiControlsList extends cdktf.ComplexList {
  public internalValue? : InspectionProfilePredefinedApiControls[] | cdktf.IResolvable

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
  public get(index: number): InspectionProfilePredefinedApiControlsOutputReference {
    return new InspectionProfilePredefinedApiControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InspectionProfilePredefinedControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action InspectionProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action_value InspectionProfile#action_value}
  */
  readonly actionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#id InspectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function inspectionProfilePredefinedControlsToTerraform(struct?: InspectionProfilePredefinedControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function inspectionProfilePredefinedControlsToHclTerraform(struct?: InspectionProfilePredefinedControls | cdktf.IResolvable): any {
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
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InspectionProfilePredefinedControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InspectionProfilePredefinedControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectionProfilePredefinedControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionValue = value.actionValue;
      this._id = value.id;
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

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
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
}

export class InspectionProfilePredefinedControlsList extends cdktf.ComplexList {
  public internalValue? : InspectionProfilePredefinedControls[] | cdktf.IResolvable

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
  public get(index: number): InspectionProfilePredefinedControlsOutputReference {
    return new InspectionProfilePredefinedControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InspectionProfileThreatLabzControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action InspectionProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action_value InspectionProfile#action_value}
  */
  readonly actionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#id InspectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function inspectionProfileThreatLabzControlsToTerraform(struct?: InspectionProfileThreatLabzControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function inspectionProfileThreatLabzControlsToHclTerraform(struct?: InspectionProfileThreatLabzControls | cdktf.IResolvable): any {
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
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InspectionProfileThreatLabzControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InspectionProfileThreatLabzControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectionProfileThreatLabzControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionValue = value.actionValue;
      this._id = value.id;
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

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
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
}

export class InspectionProfileThreatLabzControlsList extends cdktf.ComplexList {
  public internalValue? : InspectionProfileThreatLabzControls[] | cdktf.IResolvable

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
  public get(index: number): InspectionProfileThreatLabzControlsOutputReference {
    return new InspectionProfileThreatLabzControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InspectionProfileWebsocketControls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action InspectionProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#action_value InspectionProfile#action_value}
  */
  readonly actionValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#id InspectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function inspectionProfileWebsocketControlsToTerraform(struct?: InspectionProfileWebsocketControls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_value: cdktf.stringToTerraform(struct!.actionValue),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function inspectionProfileWebsocketControlsToHclTerraform(struct?: InspectionProfileWebsocketControls | cdktf.IResolvable): any {
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
    action_value: {
      value: cdktf.stringToHclTerraform(struct!.actionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InspectionProfileWebsocketControlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InspectionProfileWebsocketControls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionValue = this._actionValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InspectionProfileWebsocketControls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionValue = value.actionValue;
      this._id = value.id;
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

  // action_value - computed: false, optional: true, required: false
  private _actionValue?: string; 
  public get actionValue() {
    return this.getStringAttribute('action_value');
  }
  public set actionValue(value: string) {
    this._actionValue = value;
  }
  public resetActionValue() {
    this._actionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionValueInput() {
    return this._actionValue;
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
}

export class InspectionProfileWebsocketControlsList extends cdktf.ComplexList {
  public internalValue? : InspectionProfileWebsocketControls[] | cdktf.IResolvable

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
  public get(index: number): InspectionProfileWebsocketControlsOutputReference {
    return new InspectionProfileWebsocketControlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile zpa_inspection_profile}
*/
export class InspectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_inspection_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InspectionProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InspectionProfile to import
  * @param importFromId The id of the existing InspectionProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InspectionProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_inspection_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/resources/inspection_profile zpa_inspection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InspectionProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InspectionProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_inspection_profile',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiProfile = config.apiProfile;
    this._associateAllControls = config.associateAllControls;
    this._commonGlobalOverrideActionsConfig = config.commonGlobalOverrideActionsConfig;
    this._description = config.description;
    this._globalControlActions = config.globalControlActions;
    this._name = config.name;
    this._overrideAction = config.overrideAction;
    this._paranoiaLevel = config.paranoiaLevel;
    this._predefinedControlsVersion = config.predefinedControlsVersion;
    this._zsDefinedControlChoice = config.zsDefinedControlChoice;
    this._controlsInfo.internalValue = config.controlsInfo;
    this._customControls.internalValue = config.customControls;
    this._predefinedApiControls.internalValue = config.predefinedApiControls;
    this._predefinedControls.internalValue = config.predefinedControls;
    this._threatLabzControls.internalValue = config.threatLabzControls;
    this._websocketControls.internalValue = config.websocketControls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_profile - computed: false, optional: true, required: false
  private _apiProfile?: boolean | cdktf.IResolvable; 
  public get apiProfile() {
    return this.getBooleanAttribute('api_profile');
  }
  public set apiProfile(value: boolean | cdktf.IResolvable) {
    this._apiProfile = value;
  }
  public resetApiProfile() {
    this._apiProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProfileInput() {
    return this._apiProfile;
  }

  // associate_all_controls - computed: false, optional: true, required: false
  private _associateAllControls?: boolean | cdktf.IResolvable; 
  public get associateAllControls() {
    return this.getBooleanAttribute('associate_all_controls');
  }
  public set associateAllControls(value: boolean | cdktf.IResolvable) {
    this._associateAllControls = value;
  }
  public resetAssociateAllControls() {
    this._associateAllControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateAllControlsInput() {
    return this._associateAllControls;
  }

  // common_global_override_actions_config - computed: true, optional: true, required: false
  private _commonGlobalOverrideActionsConfig?: { [key: string]: string }; 
  public get commonGlobalOverrideActionsConfig() {
    return this.getStringMapAttribute('common_global_override_actions_config');
  }
  public set commonGlobalOverrideActionsConfig(value: { [key: string]: string }) {
    this._commonGlobalOverrideActionsConfig = value;
  }
  public resetCommonGlobalOverrideActionsConfig() {
    this._commonGlobalOverrideActionsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonGlobalOverrideActionsConfigInput() {
    return this._commonGlobalOverrideActionsConfig;
  }

  // description - computed: false, optional: true, required: false
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

  // global_control_actions - computed: false, optional: true, required: false
  private _globalControlActions?: string[]; 
  public get globalControlActions() {
    return cdktf.Fn.tolist(this.getListAttribute('global_control_actions'));
  }
  public set globalControlActions(value: string[]) {
    this._globalControlActions = value;
  }
  public resetGlobalControlActions() {
    this._globalControlActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalControlActionsInput() {
    return this._globalControlActions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // override_action - computed: false, optional: true, required: false
  private _overrideAction?: string; 
  public get overrideAction() {
    return this.getStringAttribute('override_action');
  }
  public set overrideAction(value: string) {
    this._overrideAction = value;
  }
  public resetOverrideAction() {
    this._overrideAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction;
  }

  // paranoia_level - computed: false, optional: true, required: false
  private _paranoiaLevel?: string; 
  public get paranoiaLevel() {
    return this.getStringAttribute('paranoia_level');
  }
  public set paranoiaLevel(value: string) {
    this._paranoiaLevel = value;
  }
  public resetParanoiaLevel() {
    this._paranoiaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paranoiaLevelInput() {
    return this._paranoiaLevel;
  }

  // predefined_controls_version - computed: false, optional: true, required: false
  private _predefinedControlsVersion?: string; 
  public get predefinedControlsVersion() {
    return this.getStringAttribute('predefined_controls_version');
  }
  public set predefinedControlsVersion(value: string) {
    this._predefinedControlsVersion = value;
  }
  public resetPredefinedControlsVersion() {
    this._predefinedControlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedControlsVersionInput() {
    return this._predefinedControlsVersion;
  }

  // zs_defined_control_choice - computed: false, optional: true, required: false
  private _zsDefinedControlChoice?: string; 
  public get zsDefinedControlChoice() {
    return this.getStringAttribute('zs_defined_control_choice');
  }
  public set zsDefinedControlChoice(value: string) {
    this._zsDefinedControlChoice = value;
  }
  public resetZsDefinedControlChoice() {
    this._zsDefinedControlChoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zsDefinedControlChoiceInput() {
    return this._zsDefinedControlChoice;
  }

  // controls_info - computed: false, optional: true, required: false
  private _controlsInfo = new InspectionProfileControlsInfoList(this, "controls_info", true);
  public get controlsInfo() {
    return this._controlsInfo;
  }
  public putControlsInfo(value: InspectionProfileControlsInfo[] | cdktf.IResolvable) {
    this._controlsInfo.internalValue = value;
  }
  public resetControlsInfo() {
    this._controlsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlsInfoInput() {
    return this._controlsInfo.internalValue;
  }

  // custom_controls - computed: false, optional: true, required: false
  private _customControls = new InspectionProfileCustomControlsList(this, "custom_controls", true);
  public get customControls() {
    return this._customControls;
  }
  public putCustomControls(value: InspectionProfileCustomControls[] | cdktf.IResolvable) {
    this._customControls.internalValue = value;
  }
  public resetCustomControls() {
    this._customControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlsInput() {
    return this._customControls.internalValue;
  }

  // predefined_api_controls - computed: false, optional: true, required: false
  private _predefinedApiControls = new InspectionProfilePredefinedApiControlsList(this, "predefined_api_controls", true);
  public get predefinedApiControls() {
    return this._predefinedApiControls;
  }
  public putPredefinedApiControls(value: InspectionProfilePredefinedApiControls[] | cdktf.IResolvable) {
    this._predefinedApiControls.internalValue = value;
  }
  public resetPredefinedApiControls() {
    this._predefinedApiControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedApiControlsInput() {
    return this._predefinedApiControls.internalValue;
  }

  // predefined_controls - computed: false, optional: true, required: false
  private _predefinedControls = new InspectionProfilePredefinedControlsList(this, "predefined_controls", true);
  public get predefinedControls() {
    return this._predefinedControls;
  }
  public putPredefinedControls(value: InspectionProfilePredefinedControls[] | cdktf.IResolvable) {
    this._predefinedControls.internalValue = value;
  }
  public resetPredefinedControls() {
    this._predefinedControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedControlsInput() {
    return this._predefinedControls.internalValue;
  }

  // threat_labz_controls - computed: false, optional: true, required: false
  private _threatLabzControls = new InspectionProfileThreatLabzControlsList(this, "threat_labz_controls", false);
  public get threatLabzControls() {
    return this._threatLabzControls;
  }
  public putThreatLabzControls(value: InspectionProfileThreatLabzControls[] | cdktf.IResolvable) {
    this._threatLabzControls.internalValue = value;
  }
  public resetThreatLabzControls() {
    this._threatLabzControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatLabzControlsInput() {
    return this._threatLabzControls.internalValue;
  }

  // websocket_controls - computed: false, optional: true, required: false
  private _websocketControls = new InspectionProfileWebsocketControlsList(this, "websocket_controls", false);
  public get websocketControls() {
    return this._websocketControls;
  }
  public putWebsocketControls(value: InspectionProfileWebsocketControls[] | cdktf.IResolvable) {
    this._websocketControls.internalValue = value;
  }
  public resetWebsocketControls() {
    this._websocketControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketControlsInput() {
    return this._websocketControls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_profile: cdktf.booleanToTerraform(this._apiProfile),
      associate_all_controls: cdktf.booleanToTerraform(this._associateAllControls),
      common_global_override_actions_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._commonGlobalOverrideActionsConfig),
      description: cdktf.stringToTerraform(this._description),
      global_control_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalControlActions),
      name: cdktf.stringToTerraform(this._name),
      override_action: cdktf.stringToTerraform(this._overrideAction),
      paranoia_level: cdktf.stringToTerraform(this._paranoiaLevel),
      predefined_controls_version: cdktf.stringToTerraform(this._predefinedControlsVersion),
      zs_defined_control_choice: cdktf.stringToTerraform(this._zsDefinedControlChoice),
      controls_info: cdktf.listMapper(inspectionProfileControlsInfoToTerraform, true)(this._controlsInfo.internalValue),
      custom_controls: cdktf.listMapper(inspectionProfileCustomControlsToTerraform, true)(this._customControls.internalValue),
      predefined_api_controls: cdktf.listMapper(inspectionProfilePredefinedApiControlsToTerraform, true)(this._predefinedApiControls.internalValue),
      predefined_controls: cdktf.listMapper(inspectionProfilePredefinedControlsToTerraform, true)(this._predefinedControls.internalValue),
      threat_labz_controls: cdktf.listMapper(inspectionProfileThreatLabzControlsToTerraform, true)(this._threatLabzControls.internalValue),
      websocket_controls: cdktf.listMapper(inspectionProfileWebsocketControlsToTerraform, true)(this._websocketControls.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_profile: {
        value: cdktf.booleanToHclTerraform(this._apiProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      associate_all_controls: {
        value: cdktf.booleanToHclTerraform(this._associateAllControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      common_global_override_actions_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._commonGlobalOverrideActionsConfig),
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
      global_control_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalControlActions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_action: {
        value: cdktf.stringToHclTerraform(this._overrideAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paranoia_level: {
        value: cdktf.stringToHclTerraform(this._paranoiaLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predefined_controls_version: {
        value: cdktf.stringToHclTerraform(this._predefinedControlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zs_defined_control_choice: {
        value: cdktf.stringToHclTerraform(this._zsDefinedControlChoice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controls_info: {
        value: cdktf.listMapperHcl(inspectionProfileControlsInfoToHclTerraform, true)(this._controlsInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InspectionProfileControlsInfoList",
      },
      custom_controls: {
        value: cdktf.listMapperHcl(inspectionProfileCustomControlsToHclTerraform, true)(this._customControls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InspectionProfileCustomControlsList",
      },
      predefined_api_controls: {
        value: cdktf.listMapperHcl(inspectionProfilePredefinedApiControlsToHclTerraform, true)(this._predefinedApiControls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InspectionProfilePredefinedApiControlsList",
      },
      predefined_controls: {
        value: cdktf.listMapperHcl(inspectionProfilePredefinedControlsToHclTerraform, true)(this._predefinedControls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InspectionProfilePredefinedControlsList",
      },
      threat_labz_controls: {
        value: cdktf.listMapperHcl(inspectionProfileThreatLabzControlsToHclTerraform, true)(this._threatLabzControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InspectionProfileThreatLabzControlsList",
      },
      websocket_controls: {
        value: cdktf.listMapperHcl(inspectionProfileWebsocketControlsToHclTerraform, true)(this._websocketControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InspectionProfileWebsocketControlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
