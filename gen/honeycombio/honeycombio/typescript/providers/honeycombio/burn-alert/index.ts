// https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BurnAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The alert type of this Burn Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#alert_type BurnAlert#alert_type}
  */
  readonly alertType?: string;
  /**
  * The percent the budget has decreased over the budget rate window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#budget_rate_decrease_percent BurnAlert#budget_rate_decrease_percent}
  */
  readonly budgetRateDecreasePercent?: number;
  /**
  * The time period, in minutes, over which a budget rate will be calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#budget_rate_window_minutes BurnAlert#budget_rate_window_minutes}
  */
  readonly budgetRateWindowMinutes?: number;
  /**
  * The dataset this Burn Alert is associated with. Will be deprecated in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#dataset BurnAlert#dataset}
  */
  readonly dataset?: string;
  /**
  * A description for this Burn Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#description BurnAlert#description}
  */
  readonly description?: string;
  /**
  * The amount of time, in minutes, remaining before the SLO's error budget will be exhausted and the alert will fire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#exhaustion_minutes BurnAlert#exhaustion_minutes}
  */
  readonly exhaustionMinutes?: number;
  /**
  * The ID of the SLO that this Burn Alert is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#slo_id BurnAlert#slo_id}
  */
  readonly sloId: string;
  /**
  * recipient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#recipient BurnAlert#recipient}
  */
  readonly recipient?: BurnAlertRecipient[] | cdktf.IResolvable;
}
export interface BurnAlertRecipientNotificationDetailsVariable {
  /**
  * The name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#name BurnAlert#name}
  */
  readonly name: string;
  /**
  * The value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#value BurnAlert#value}
  */
  readonly value?: string;
}

export function burnAlertRecipientNotificationDetailsVariableToTerraform(struct?: BurnAlertRecipientNotificationDetailsVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function burnAlertRecipientNotificationDetailsVariableToHclTerraform(struct?: BurnAlertRecipientNotificationDetailsVariable | cdktf.IResolvable): any {
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

export class BurnAlertRecipientNotificationDetailsVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BurnAlertRecipientNotificationDetailsVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BurnAlertRecipientNotificationDetailsVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BurnAlertRecipientNotificationDetailsVariableList extends cdktf.ComplexList {
  public internalValue? : BurnAlertRecipientNotificationDetailsVariable[] | cdktf.IResolvable

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
  public get(index: number): BurnAlertRecipientNotificationDetailsVariableOutputReference {
    return new BurnAlertRecipientNotificationDetailsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BurnAlertRecipientNotificationDetails {
  /**
  * The severity to set with the PagerDuty notification. If no severity is provided, 'critical' is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#pagerduty_severity BurnAlert#pagerduty_severity}
  */
  readonly pagerdutySeverity?: string;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#variable BurnAlert#variable}
  */
  readonly variable?: BurnAlertRecipientNotificationDetailsVariable[] | cdktf.IResolvable;
}

export function burnAlertRecipientNotificationDetailsToTerraform(struct?: BurnAlertRecipientNotificationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pagerduty_severity: cdktf.stringToTerraform(struct!.pagerdutySeverity),
    variable: cdktf.listMapper(burnAlertRecipientNotificationDetailsVariableToTerraform, true)(struct!.variable),
  }
}


export function burnAlertRecipientNotificationDetailsToHclTerraform(struct?: BurnAlertRecipientNotificationDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pagerduty_severity: {
      value: cdktf.stringToHclTerraform(struct!.pagerdutySeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.listMapperHcl(burnAlertRecipientNotificationDetailsVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "set",
      storageClassType: "BurnAlertRecipientNotificationDetailsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BurnAlertRecipientNotificationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BurnAlertRecipientNotificationDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pagerdutySeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutySeverity = this._pagerdutySeverity;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BurnAlertRecipientNotificationDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pagerdutySeverity = undefined;
      this._variable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pagerdutySeverity = value.pagerdutySeverity;
      this._variable.internalValue = value.variable;
    }
  }

  // pagerduty_severity - computed: true, optional: true, required: false
  private _pagerdutySeverity?: string; 
  public get pagerdutySeverity() {
    return this.getStringAttribute('pagerduty_severity');
  }
  public set pagerdutySeverity(value: string) {
    this._pagerdutySeverity = value;
  }
  public resetPagerdutySeverity() {
    this._pagerdutySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutySeverityInput() {
    return this._pagerdutySeverity;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new BurnAlertRecipientNotificationDetailsVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: BurnAlertRecipientNotificationDetailsVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

export class BurnAlertRecipientNotificationDetailsList extends cdktf.ComplexList {
  public internalValue? : BurnAlertRecipientNotificationDetails[] | cdktf.IResolvable

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
  public get(index: number): BurnAlertRecipientNotificationDetailsOutputReference {
    return new BurnAlertRecipientNotificationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BurnAlertRecipient {
  /**
  * The ID of an existing recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#id BurnAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target of the notification, this has another meaning depending on the type of recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#target BurnAlert#target}
  */
  readonly target?: string;
  /**
  * The type of the notification recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#type BurnAlert#type}
  */
  readonly type?: string;
  /**
  * notification_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#notification_details BurnAlert#notification_details}
  */
  readonly notificationDetails?: BurnAlertRecipientNotificationDetails[] | cdktf.IResolvable;
}

export function burnAlertRecipientToTerraform(struct?: BurnAlertRecipient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    notification_details: cdktf.listMapper(burnAlertRecipientNotificationDetailsToTerraform, true)(struct!.notificationDetails),
  }
}


export function burnAlertRecipientToHclTerraform(struct?: BurnAlertRecipient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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
    notification_details: {
      value: cdktf.listMapperHcl(burnAlertRecipientNotificationDetailsToHclTerraform, true)(struct!.notificationDetails),
      isBlock: true,
      type: "list",
      storageClassType: "BurnAlertRecipientNotificationDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BurnAlertRecipientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BurnAlertRecipient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._notificationDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationDetails = this._notificationDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BurnAlertRecipient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._target = undefined;
      this._type = undefined;
      this._notificationDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._target = value.target;
      this._type = value.type;
      this._notificationDetails.internalValue = value.notificationDetails;
    }
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // notification_details - computed: false, optional: true, required: false
  private _notificationDetails = new BurnAlertRecipientNotificationDetailsList(this, "notification_details", false);
  public get notificationDetails() {
    return this._notificationDetails;
  }
  public putNotificationDetails(value: BurnAlertRecipientNotificationDetails[] | cdktf.IResolvable) {
    this._notificationDetails.internalValue = value;
  }
  public resetNotificationDetails() {
    this._notificationDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDetailsInput() {
    return this._notificationDetails.internalValue;
  }
}

export class BurnAlertRecipientList extends cdktf.ComplexList {
  public internalValue? : BurnAlertRecipient[] | cdktf.IResolvable

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
  public get(index: number): BurnAlertRecipientOutputReference {
    return new BurnAlertRecipientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert honeycombio_burn_alert}
*/
export class BurnAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "honeycombio_burn_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BurnAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BurnAlert to import
  * @param importFromId The id of the existing BurnAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BurnAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "honeycombio_burn_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/honeycombio/honeycombio/0.42.0/docs/resources/burn_alert honeycombio_burn_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BurnAlertConfig
  */
  public constructor(scope: Construct, id: string, config: BurnAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'honeycombio_burn_alert',
      terraformGeneratorMetadata: {
        providerName: 'honeycombio',
        providerVersion: '0.42.0',
        providerVersionConstraint: '0.42.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertType = config.alertType;
    this._budgetRateDecreasePercent = config.budgetRateDecreasePercent;
    this._budgetRateWindowMinutes = config.budgetRateWindowMinutes;
    this._dataset = config.dataset;
    this._description = config.description;
    this._exhaustionMinutes = config.exhaustionMinutes;
    this._sloId = config.sloId;
    this._recipient.internalValue = config.recipient;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_type - computed: true, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // budget_rate_decrease_percent - computed: false, optional: true, required: false
  private _budgetRateDecreasePercent?: number; 
  public get budgetRateDecreasePercent() {
    return this.getNumberAttribute('budget_rate_decrease_percent');
  }
  public set budgetRateDecreasePercent(value: number) {
    this._budgetRateDecreasePercent = value;
  }
  public resetBudgetRateDecreasePercent() {
    this._budgetRateDecreasePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetRateDecreasePercentInput() {
    return this._budgetRateDecreasePercent;
  }

  // budget_rate_window_minutes - computed: false, optional: true, required: false
  private _budgetRateWindowMinutes?: number; 
  public get budgetRateWindowMinutes() {
    return this.getNumberAttribute('budget_rate_window_minutes');
  }
  public set budgetRateWindowMinutes(value: number) {
    this._budgetRateWindowMinutes = value;
  }
  public resetBudgetRateWindowMinutes() {
    this._budgetRateWindowMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetRateWindowMinutesInput() {
    return this._budgetRateWindowMinutes;
  }

  // dataset - computed: true, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
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

  // exhaustion_minutes - computed: false, optional: true, required: false
  private _exhaustionMinutes?: number; 
  public get exhaustionMinutes() {
    return this.getNumberAttribute('exhaustion_minutes');
  }
  public set exhaustionMinutes(value: number) {
    this._exhaustionMinutes = value;
  }
  public resetExhaustionMinutes() {
    this._exhaustionMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exhaustionMinutesInput() {
    return this._exhaustionMinutes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // recipient - computed: false, optional: true, required: false
  private _recipient = new BurnAlertRecipientList(this, "recipient", true);
  public get recipient() {
    return this._recipient;
  }
  public putRecipient(value: BurnAlertRecipient[] | cdktf.IResolvable) {
    this._recipient.internalValue = value;
  }
  public resetRecipient() {
    this._recipient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_type: cdktf.stringToTerraform(this._alertType),
      budget_rate_decrease_percent: cdktf.numberToTerraform(this._budgetRateDecreasePercent),
      budget_rate_window_minutes: cdktf.numberToTerraform(this._budgetRateWindowMinutes),
      dataset: cdktf.stringToTerraform(this._dataset),
      description: cdktf.stringToTerraform(this._description),
      exhaustion_minutes: cdktf.numberToTerraform(this._exhaustionMinutes),
      slo_id: cdktf.stringToTerraform(this._sloId),
      recipient: cdktf.listMapper(burnAlertRecipientToTerraform, true)(this._recipient.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      budget_rate_decrease_percent: {
        value: cdktf.numberToHclTerraform(this._budgetRateDecreasePercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      budget_rate_window_minutes: {
        value: cdktf.numberToHclTerraform(this._budgetRateWindowMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
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
      exhaustion_minutes: {
        value: cdktf.numberToHclTerraform(this._exhaustionMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slo_id: {
        value: cdktf.stringToHclTerraform(this._sloId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipient: {
        value: cdktf.listMapperHcl(burnAlertRecipientToHclTerraform, true)(this._recipient.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BurnAlertRecipientList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
