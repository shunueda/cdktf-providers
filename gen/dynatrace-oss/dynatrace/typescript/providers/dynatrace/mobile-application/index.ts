// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the application.
  * 
  * It is used only by OneAgent to send data to Dynatrace. If not specified it will get generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#application_id MobileApplication#application_id}
  */
  readonly applicationId?: string;
  /**
  * The type of the application. Either `CUSTOM_APPLICATION` or `MOBILE_APPLICATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#application_type MobileApplication#application_type}
  */
  readonly applicationType?: string;
  /**
  * The type of the beacon endpoint. Possible values are `CLUSTER_ACTIVE_GATE`, `ENVIRONMENT_ACTIVE_GATE` and `INSTRUMENTED_WEB_SERVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#beacon_endpoint_type MobileApplication#beacon_endpoint_type}
  */
  readonly beaconEndpointType: string;
  /**
  * The URL of the beacon endpoint.
  * 
  * Only applicable when the **beacon_endpoint_type** is set to `ENVIRONMENT_ACTIVE_GATE` or `INSTRUMENTED_WEB_SERVER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#beacon_endpoint_url MobileApplication#beacon_endpoint_url}
  */
  readonly beaconEndpointUrl?: string;
  /**
  * Custom application icon. Mobile apps always use the mobile device icon, so this icon can only be set for custom apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#icon_type MobileApplication#icon_type}
  */
  readonly iconType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#id MobileApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User Action names to be flagged as Key User Actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#key_user_actions MobileApplication#key_user_actions}
  */
  readonly keyUserActions?: string[];
  /**
  * The name of the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#name MobileApplication#name}
  */
  readonly name: string;
  /**
  * The opt-in mode is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#opt_in_mode MobileApplication#opt_in_mode}
  */
  readonly optInMode?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_mobile_app_enablement`) The session replay is enabled (`true`) or disabled (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#session_replay MobileApplication#session_replay}
  */
  readonly sessionReplay?: boolean | cdktf.IResolvable;
  /**
  * The session replay on crash is enabled (`true`) or disabled (`false`). 
  * 
  * Enabling requires both **sessionReplayEnabled** and **optInModeEnabled** values set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#session_replay_on_crash MobileApplication#session_replay_on_crash}
  */
  readonly sessionReplayOnCrash?: boolean | cdktf.IResolvable;
  /**
  * (Field has overlap with `dynatrace_mobile_app_enablement` for mobile and `dynatrace_custom_app_enablement` for custom apps) The percentage of user sessions to be analyzed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#user_session_percentage MobileApplication#user_session_percentage}
  */
  readonly userSessionPercentage?: number;
  /**
  * apdex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#apdex MobileApplication#apdex}
  */
  readonly apdex: MobileApplicationApdex;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#properties MobileApplication#properties}
  */
  readonly properties?: MobileApplicationProperties;
}
export interface MobileApplicationApdex {
  /**
  * Apdex **frustrated** threshold, in milliseconds: a duration greater than or equal to this value is considered frustrated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#frustrated MobileApplication#frustrated}
  */
  readonly frustrated: number;
  /**
  * Apdex error condition: if `true` the user session is considered frustrated when an error is reported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#frustrated_on_error MobileApplication#frustrated_on_error}
  */
  readonly frustratedOnError?: boolean | cdktf.IResolvable;
  /**
  * Apdex **tolerable** threshold, in milliseconds: a duration greater than or equal to this value is considered tolerable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#tolerable MobileApplication#tolerable}
  */
  readonly tolerable: number;
}

export function mobileApplicationApdexToTerraform(struct?: MobileApplicationApdexOutputReference | MobileApplicationApdex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frustrated: cdktf.numberToTerraform(struct!.frustrated),
    frustrated_on_error: cdktf.booleanToTerraform(struct!.frustratedOnError),
    tolerable: cdktf.numberToTerraform(struct!.tolerable),
  }
}


export function mobileApplicationApdexToHclTerraform(struct?: MobileApplicationApdexOutputReference | MobileApplicationApdex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frustrated: {
      value: cdktf.numberToHclTerraform(struct!.frustrated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frustrated_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.frustratedOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerable: {
      value: cdktf.numberToHclTerraform(struct!.tolerable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileApplicationApdexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileApplicationApdex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frustrated !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustrated = this._frustrated;
    }
    if (this._frustratedOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.frustratedOnError = this._frustratedOnError;
    }
    if (this._tolerable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerable = this._tolerable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileApplicationApdex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frustrated = undefined;
      this._frustratedOnError = undefined;
      this._tolerable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frustrated = value.frustrated;
      this._frustratedOnError = value.frustratedOnError;
      this._tolerable = value.tolerable;
    }
  }

  // frustrated - computed: false, optional: false, required: true
  private _frustrated?: number; 
  public get frustrated() {
    return this.getNumberAttribute('frustrated');
  }
  public set frustrated(value: number) {
    this._frustrated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratedInput() {
    return this._frustrated;
  }

  // frustrated_on_error - computed: false, optional: true, required: false
  private _frustratedOnError?: boolean | cdktf.IResolvable; 
  public get frustratedOnError() {
    return this.getBooleanAttribute('frustrated_on_error');
  }
  public set frustratedOnError(value: boolean | cdktf.IResolvable) {
    this._frustratedOnError = value;
  }
  public resetFrustratedOnError() {
    this._frustratedOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frustratedOnErrorInput() {
    return this._frustratedOnError;
  }

  // tolerable - computed: false, optional: false, required: true
  private _tolerable?: number; 
  public get tolerable() {
    return this.getNumberAttribute('tolerable');
  }
  public set tolerable(value: number) {
    this._tolerable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerableInput() {
    return this._tolerable;
  }
}
export interface MobileApplicationPropertiesApiValue {
  /**
  * The aggregation type of the property. It defines how multiple values of the property are aggregated. Possible values are `SUM`, `MIN`, `MAX`, `FIRST` and `LAST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#aggregation MobileApplication#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The cleanup rule of the property. Defines how to extract the data you need from a string value. Specify the [regular expression](https://dt-url.net/k9e0iaq) for the data you need there
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#cleanup_rule MobileApplication#cleanup_rule}
  */
  readonly cleanupRule?: string;
  /**
  * The display name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#display_name MobileApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * The unique key of the mobile session or user action property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#key MobileApplication#key}
  */
  readonly key: string;
  /**
  * The name of the reported value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#name MobileApplication#name}
  */
  readonly name?: string;
  /**
  * If `true`, the property is stored as a session property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#store_as_session_property MobileApplication#store_as_session_property}
  */
  readonly storeAsSessionProperty?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the property is stored as a user action property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#store_as_user_action_property MobileApplication#store_as_user_action_property}
  */
  readonly storeAsUserActionProperty?: boolean | cdktf.IResolvable;
  /**
  * The data type of the property. Possible values are `DOUBLE`, `LONG` and `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#type MobileApplication#type}
  */
  readonly type: string;
}

export function mobileApplicationPropertiesApiValueToTerraform(struct?: MobileApplicationPropertiesApiValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    cleanup_rule: cdktf.stringToTerraform(struct!.cleanupRule),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    store_as_session_property: cdktf.booleanToTerraform(struct!.storeAsSessionProperty),
    store_as_user_action_property: cdktf.booleanToTerraform(struct!.storeAsUserActionProperty),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mobileApplicationPropertiesApiValueToHclTerraform(struct?: MobileApplicationPropertiesApiValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup_rule: {
      value: cdktf.stringToHclTerraform(struct!.cleanupRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    store_as_session_property: {
      value: cdktf.booleanToHclTerraform(struct!.storeAsSessionProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store_as_user_action_property: {
      value: cdktf.booleanToHclTerraform(struct!.storeAsUserActionProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class MobileApplicationPropertiesApiValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileApplicationPropertiesApiValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._cleanupRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupRule = this._cleanupRule;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._storeAsSessionProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAsSessionProperty = this._storeAsSessionProperty;
    }
    if (this._storeAsUserActionProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAsUserActionProperty = this._storeAsUserActionProperty;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileApplicationPropertiesApiValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._cleanupRule = undefined;
      this._displayName = undefined;
      this._key = undefined;
      this._name = undefined;
      this._storeAsSessionProperty = undefined;
      this._storeAsUserActionProperty = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._cleanupRule = value.cleanupRule;
      this._displayName = value.displayName;
      this._key = value.key;
      this._name = value.name;
      this._storeAsSessionProperty = value.storeAsSessionProperty;
      this._storeAsUserActionProperty = value.storeAsUserActionProperty;
      this._type = value.type;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // cleanup_rule - computed: false, optional: true, required: false
  private _cleanupRule?: string; 
  public get cleanupRule() {
    return this.getStringAttribute('cleanup_rule');
  }
  public set cleanupRule(value: string) {
    this._cleanupRule = value;
  }
  public resetCleanupRule() {
    this._cleanupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupRuleInput() {
    return this._cleanupRule;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: false, optional: true, required: false
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

  // store_as_session_property - computed: false, optional: true, required: false
  private _storeAsSessionProperty?: boolean | cdktf.IResolvable; 
  public get storeAsSessionProperty() {
    return this.getBooleanAttribute('store_as_session_property');
  }
  public set storeAsSessionProperty(value: boolean | cdktf.IResolvable) {
    this._storeAsSessionProperty = value;
  }
  public resetStoreAsSessionProperty() {
    this._storeAsSessionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsSessionPropertyInput() {
    return this._storeAsSessionProperty;
  }

  // store_as_user_action_property - computed: false, optional: true, required: false
  private _storeAsUserActionProperty?: boolean | cdktf.IResolvable; 
  public get storeAsUserActionProperty() {
    return this.getBooleanAttribute('store_as_user_action_property');
  }
  public set storeAsUserActionProperty(value: boolean | cdktf.IResolvable) {
    this._storeAsUserActionProperty = value;
  }
  public resetStoreAsUserActionProperty() {
    this._storeAsUserActionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsUserActionPropertyInput() {
    return this._storeAsUserActionProperty;
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

export class MobileApplicationPropertiesApiValueList extends cdktf.ComplexList {
  public internalValue? : MobileApplicationPropertiesApiValue[] | cdktf.IResolvable

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
  public get(index: number): MobileApplicationPropertiesApiValueOutputReference {
    return new MobileApplicationPropertiesApiValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileApplicationPropertiesRequestAttribute {
  /**
  * The aggregation type of the property. It defines how multiple values of the property are aggregated. Possible values are `SUM`, `MIN`, `MAX`, `FIRST` and `LAST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#aggregation MobileApplication#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The cleanup rule of the property. Defines how to extract the data you need from a string value. Specify the [regular expression](https://dt-url.net/k9e0iaq) for the data you need there
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#cleanup_rule MobileApplication#cleanup_rule}
  */
  readonly cleanupRule?: string;
  /**
  * The display name of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#display_name MobileApplication#display_name}
  */
  readonly displayName?: string;
  /**
  * The ID of the request attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#id MobileApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The unique key of the mobile session or user action property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#key MobileApplication#key}
  */
  readonly key: string;
  /**
  * If `true`, the property is stored as a session property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#store_as_session_property MobileApplication#store_as_session_property}
  */
  readonly storeAsSessionProperty?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the property is stored as a user action property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#store_as_user_action_property MobileApplication#store_as_user_action_property}
  */
  readonly storeAsUserActionProperty?: boolean | cdktf.IResolvable;
  /**
  * The data type of the property. Possible values are `DOUBLE`, `LONG` and `STRING`. The value MUST match the data type of the Request Attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#type MobileApplication#type}
  */
  readonly type: string;
}

export function mobileApplicationPropertiesRequestAttributeToTerraform(struct?: MobileApplicationPropertiesRequestAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    cleanup_rule: cdktf.stringToTerraform(struct!.cleanupRule),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    store_as_session_property: cdktf.booleanToTerraform(struct!.storeAsSessionProperty),
    store_as_user_action_property: cdktf.booleanToTerraform(struct!.storeAsUserActionProperty),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mobileApplicationPropertiesRequestAttributeToHclTerraform(struct?: MobileApplicationPropertiesRequestAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cleanup_rule: {
      value: cdktf.stringToHclTerraform(struct!.cleanupRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_as_session_property: {
      value: cdktf.booleanToHclTerraform(struct!.storeAsSessionProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store_as_user_action_property: {
      value: cdktf.booleanToHclTerraform(struct!.storeAsUserActionProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class MobileApplicationPropertiesRequestAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MobileApplicationPropertiesRequestAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._cleanupRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupRule = this._cleanupRule;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._storeAsSessionProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAsSessionProperty = this._storeAsSessionProperty;
    }
    if (this._storeAsUserActionProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeAsUserActionProperty = this._storeAsUserActionProperty;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileApplicationPropertiesRequestAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._cleanupRule = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._key = undefined;
      this._storeAsSessionProperty = undefined;
      this._storeAsUserActionProperty = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._cleanupRule = value.cleanupRule;
      this._displayName = value.displayName;
      this._id = value.id;
      this._key = value.key;
      this._storeAsSessionProperty = value.storeAsSessionProperty;
      this._storeAsUserActionProperty = value.storeAsUserActionProperty;
      this._type = value.type;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // cleanup_rule - computed: false, optional: true, required: false
  private _cleanupRule?: string; 
  public get cleanupRule() {
    return this.getStringAttribute('cleanup_rule');
  }
  public set cleanupRule(value: string) {
    this._cleanupRule = value;
  }
  public resetCleanupRule() {
    this._cleanupRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupRuleInput() {
    return this._cleanupRule;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // store_as_session_property - computed: false, optional: true, required: false
  private _storeAsSessionProperty?: boolean | cdktf.IResolvable; 
  public get storeAsSessionProperty() {
    return this.getBooleanAttribute('store_as_session_property');
  }
  public set storeAsSessionProperty(value: boolean | cdktf.IResolvable) {
    this._storeAsSessionProperty = value;
  }
  public resetStoreAsSessionProperty() {
    this._storeAsSessionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsSessionPropertyInput() {
    return this._storeAsSessionProperty;
  }

  // store_as_user_action_property - computed: false, optional: true, required: false
  private _storeAsUserActionProperty?: boolean | cdktf.IResolvable; 
  public get storeAsUserActionProperty() {
    return this.getBooleanAttribute('store_as_user_action_property');
  }
  public set storeAsUserActionProperty(value: boolean | cdktf.IResolvable) {
    this._storeAsUserActionProperty = value;
  }
  public resetStoreAsUserActionProperty() {
    this._storeAsUserActionProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeAsUserActionPropertyInput() {
    return this._storeAsUserActionProperty;
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

export class MobileApplicationPropertiesRequestAttributeList extends cdktf.ComplexList {
  public internalValue? : MobileApplicationPropertiesRequestAttribute[] | cdktf.IResolvable

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
  public get(index: number): MobileApplicationPropertiesRequestAttributeOutputReference {
    return new MobileApplicationPropertiesRequestAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MobileApplicationProperties {
  /**
  * api_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#api_value MobileApplication#api_value}
  */
  readonly apiValue?: MobileApplicationPropertiesApiValue[] | cdktf.IResolvable;
  /**
  * request_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#request_attribute MobileApplication#request_attribute}
  */
  readonly requestAttribute?: MobileApplicationPropertiesRequestAttribute[] | cdktf.IResolvable;
}

export function mobileApplicationPropertiesToTerraform(struct?: MobileApplicationPropertiesOutputReference | MobileApplicationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_value: cdktf.listMapper(mobileApplicationPropertiesApiValueToTerraform, true)(struct!.apiValue),
    request_attribute: cdktf.listMapper(mobileApplicationPropertiesRequestAttributeToTerraform, true)(struct!.requestAttribute),
  }
}


export function mobileApplicationPropertiesToHclTerraform(struct?: MobileApplicationPropertiesOutputReference | MobileApplicationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_value: {
      value: cdktf.listMapperHcl(mobileApplicationPropertiesApiValueToHclTerraform, true)(struct!.apiValue),
      isBlock: true,
      type: "list",
      storageClassType: "MobileApplicationPropertiesApiValueList",
    },
    request_attribute: {
      value: cdktf.listMapperHcl(mobileApplicationPropertiesRequestAttributeToHclTerraform, true)(struct!.requestAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "MobileApplicationPropertiesRequestAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileApplicationPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileApplicationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiValue = this._apiValue?.internalValue;
    }
    if (this._requestAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttribute = this._requestAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileApplicationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiValue.internalValue = undefined;
      this._requestAttribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiValue.internalValue = value.apiValue;
      this._requestAttribute.internalValue = value.requestAttribute;
    }
  }

  // api_value - computed: false, optional: true, required: false
  private _apiValue = new MobileApplicationPropertiesApiValueList(this, "api_value", false);
  public get apiValue() {
    return this._apiValue;
  }
  public putApiValue(value: MobileApplicationPropertiesApiValue[] | cdktf.IResolvable) {
    this._apiValue.internalValue = value;
  }
  public resetApiValue() {
    this._apiValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiValueInput() {
    return this._apiValue.internalValue;
  }

  // request_attribute - computed: false, optional: true, required: false
  private _requestAttribute = new MobileApplicationPropertiesRequestAttributeList(this, "request_attribute", false);
  public get requestAttribute() {
    return this._requestAttribute;
  }
  public putRequestAttribute(value: MobileApplicationPropertiesRequestAttribute[] | cdktf.IResolvable) {
    this._requestAttribute.internalValue = value;
  }
  public resetRequestAttribute() {
    this._requestAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAttributeInput() {
    return this._requestAttribute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application dynatrace_mobile_application}
*/
export class MobileApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mobile_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileApplication to import
  * @param importFromId The id of the existing MobileApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mobile_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_application dynatrace_mobile_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: MobileApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mobile_application',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._applicationType = config.applicationType;
    this._beaconEndpointType = config.beaconEndpointType;
    this._beaconEndpointUrl = config.beaconEndpointUrl;
    this._iconType = config.iconType;
    this._id = config.id;
    this._keyUserActions = config.keyUserActions;
    this._name = config.name;
    this._optInMode = config.optInMode;
    this._sessionReplay = config.sessionReplay;
    this._sessionReplayOnCrash = config.sessionReplayOnCrash;
    this._userSessionPercentage = config.userSessionPercentage;
    this._apdex.internalValue = config.apdex;
    this._properties.internalValue = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // beacon_endpoint_type - computed: false, optional: false, required: true
  private _beaconEndpointType?: string; 
  public get beaconEndpointType() {
    return this.getStringAttribute('beacon_endpoint_type');
  }
  public set beaconEndpointType(value: string) {
    this._beaconEndpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconEndpointTypeInput() {
    return this._beaconEndpointType;
  }

  // beacon_endpoint_url - computed: false, optional: true, required: false
  private _beaconEndpointUrl?: string; 
  public get beaconEndpointUrl() {
    return this.getStringAttribute('beacon_endpoint_url');
  }
  public set beaconEndpointUrl(value: string) {
    this._beaconEndpointUrl = value;
  }
  public resetBeaconEndpointUrl() {
    this._beaconEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconEndpointUrlInput() {
    return this._beaconEndpointUrl;
  }

  // icon_type - computed: false, optional: true, required: false
  private _iconType?: string; 
  public get iconType() {
    return this.getStringAttribute('icon_type');
  }
  public set iconType(value: string) {
    this._iconType = value;
  }
  public resetIconType() {
    this._iconType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconTypeInput() {
    return this._iconType;
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

  // key_user_actions - computed: false, optional: true, required: false
  private _keyUserActions?: string[]; 
  public get keyUserActions() {
    return cdktf.Fn.tolist(this.getListAttribute('key_user_actions'));
  }
  public set keyUserActions(value: string[]) {
    this._keyUserActions = value;
  }
  public resetKeyUserActions() {
    this._keyUserActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUserActionsInput() {
    return this._keyUserActions;
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

  // opt_in_mode - computed: false, optional: true, required: false
  private _optInMode?: boolean | cdktf.IResolvable; 
  public get optInMode() {
    return this.getBooleanAttribute('opt_in_mode');
  }
  public set optInMode(value: boolean | cdktf.IResolvable) {
    this._optInMode = value;
  }
  public resetOptInMode() {
    this._optInMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInModeInput() {
    return this._optInMode;
  }

  // session_replay - computed: false, optional: true, required: false
  private _sessionReplay?: boolean | cdktf.IResolvable; 
  public get sessionReplay() {
    return this.getBooleanAttribute('session_replay');
  }
  public set sessionReplay(value: boolean | cdktf.IResolvable) {
    this._sessionReplay = value;
  }
  public resetSessionReplay() {
    this._sessionReplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayInput() {
    return this._sessionReplay;
  }

  // session_replay_on_crash - computed: false, optional: true, required: false
  private _sessionReplayOnCrash?: boolean | cdktf.IResolvable; 
  public get sessionReplayOnCrash() {
    return this.getBooleanAttribute('session_replay_on_crash');
  }
  public set sessionReplayOnCrash(value: boolean | cdktf.IResolvable) {
    this._sessionReplayOnCrash = value;
  }
  public resetSessionReplayOnCrash() {
    this._sessionReplayOnCrash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayOnCrashInput() {
    return this._sessionReplayOnCrash;
  }

  // user_session_percentage - computed: false, optional: true, required: false
  private _userSessionPercentage?: number; 
  public get userSessionPercentage() {
    return this.getNumberAttribute('user_session_percentage');
  }
  public set userSessionPercentage(value: number) {
    this._userSessionPercentage = value;
  }
  public resetUserSessionPercentage() {
    this._userSessionPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionPercentageInput() {
    return this._userSessionPercentage;
  }

  // apdex - computed: false, optional: false, required: true
  private _apdex = new MobileApplicationApdexOutputReference(this, "apdex");
  public get apdex() {
    return this._apdex;
  }
  public putApdex(value: MobileApplicationApdex) {
    this._apdex.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexInput() {
    return this._apdex.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new MobileApplicationPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: MobileApplicationProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_type: cdktf.stringToTerraform(this._applicationType),
      beacon_endpoint_type: cdktf.stringToTerraform(this._beaconEndpointType),
      beacon_endpoint_url: cdktf.stringToTerraform(this._beaconEndpointUrl),
      icon_type: cdktf.stringToTerraform(this._iconType),
      id: cdktf.stringToTerraform(this._id),
      key_user_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUserActions),
      name: cdktf.stringToTerraform(this._name),
      opt_in_mode: cdktf.booleanToTerraform(this._optInMode),
      session_replay: cdktf.booleanToTerraform(this._sessionReplay),
      session_replay_on_crash: cdktf.booleanToTerraform(this._sessionReplayOnCrash),
      user_session_percentage: cdktf.numberToTerraform(this._userSessionPercentage),
      apdex: mobileApplicationApdexToTerraform(this._apdex.internalValue),
      properties: mobileApplicationPropertiesToTerraform(this._properties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beacon_endpoint_type: {
        value: cdktf.stringToHclTerraform(this._beaconEndpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beacon_endpoint_url: {
        value: cdktf.stringToHclTerraform(this._beaconEndpointUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_type: {
        value: cdktf.stringToHclTerraform(this._iconType),
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
      key_user_actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUserActions),
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
      opt_in_mode: {
        value: cdktf.booleanToHclTerraform(this._optInMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_replay: {
        value: cdktf.booleanToHclTerraform(this._sessionReplay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_replay_on_crash: {
        value: cdktf.booleanToHclTerraform(this._sessionReplayOnCrash),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_session_percentage: {
        value: cdktf.numberToHclTerraform(this._userSessionPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apdex: {
        value: mobileApplicationApdexToHclTerraform(this._apdex.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileApplicationApdexList",
      },
      properties: {
        value: mobileApplicationPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileApplicationPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
