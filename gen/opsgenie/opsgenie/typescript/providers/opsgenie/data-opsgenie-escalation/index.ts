// https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpsgenieEscalationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#description DataOpsgenieEscalation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#id DataOpsgenieEscalation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#name DataOpsgenieEscalation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#owner_team_id DataOpsgenieEscalation#owner_team_id}
  */
  readonly ownerTeamId?: string;
  /**
  * repeat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#repeat DataOpsgenieEscalation#repeat}
  */
  readonly repeat?: DataOpsgenieEscalationRepeat[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#rules DataOpsgenieEscalation#rules}
  */
  readonly rules?: DataOpsgenieEscalationRules[] | cdktf.IResolvable;
}
export interface DataOpsgenieEscalationRepeat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#close_alert_after_all DataOpsgenieEscalation#close_alert_after_all}
  */
  readonly closeAlertAfterAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#count DataOpsgenieEscalation#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#reset_recipient_states DataOpsgenieEscalation#reset_recipient_states}
  */
  readonly resetRecipientStates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#wait_interval DataOpsgenieEscalation#wait_interval}
  */
  readonly waitInterval?: number;
}

export function dataOpsgenieEscalationRepeatToTerraform(struct?: DataOpsgenieEscalationRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_alert_after_all: cdktf.booleanToTerraform(struct!.closeAlertAfterAll),
    count: cdktf.numberToTerraform(struct!.count),
    reset_recipient_states: cdktf.booleanToTerraform(struct!.resetRecipientStates),
    wait_interval: cdktf.numberToTerraform(struct!.waitInterval),
  }
}


export function dataOpsgenieEscalationRepeatToHclTerraform(struct?: DataOpsgenieEscalationRepeat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_alert_after_all: {
      value: cdktf.booleanToHclTerraform(struct!.closeAlertAfterAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_recipient_states: {
      value: cdktf.booleanToHclTerraform(struct!.resetRecipientStates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_interval: {
      value: cdktf.numberToHclTerraform(struct!.waitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOpsgenieEscalationRepeatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpsgenieEscalationRepeat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeAlertAfterAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeAlertAfterAll = this._closeAlertAfterAll;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._resetRecipientStates !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetRecipientStates = this._resetRecipientStates;
    }
    if (this._waitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitInterval = this._waitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpsgenieEscalationRepeat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._closeAlertAfterAll = undefined;
      this._count = undefined;
      this._resetRecipientStates = undefined;
      this._waitInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._closeAlertAfterAll = value.closeAlertAfterAll;
      this._count = value.count;
      this._resetRecipientStates = value.resetRecipientStates;
      this._waitInterval = value.waitInterval;
    }
  }

  // close_alert_after_all - computed: false, optional: true, required: false
  private _closeAlertAfterAll?: boolean | cdktf.IResolvable; 
  public get closeAlertAfterAll() {
    return this.getBooleanAttribute('close_alert_after_all');
  }
  public set closeAlertAfterAll(value: boolean | cdktf.IResolvable) {
    this._closeAlertAfterAll = value;
  }
  public resetCloseAlertAfterAll() {
    this._closeAlertAfterAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeAlertAfterAllInput() {
    return this._closeAlertAfterAll;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // reset_recipient_states - computed: false, optional: true, required: false
  private _resetRecipientStates?: boolean | cdktf.IResolvable; 
  public get resetRecipientStates() {
    return this.getBooleanAttribute('reset_recipient_states');
  }
  public set resetRecipientStates(value: boolean | cdktf.IResolvable) {
    this._resetRecipientStates = value;
  }
  public resetResetRecipientStates() {
    this._resetRecipientStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetRecipientStatesInput() {
    return this._resetRecipientStates;
  }

  // wait_interval - computed: false, optional: true, required: false
  private _waitInterval?: number; 
  public get waitInterval() {
    return this.getNumberAttribute('wait_interval');
  }
  public set waitInterval(value: number) {
    this._waitInterval = value;
  }
  public resetWaitInterval() {
    this._waitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInput() {
    return this._waitInterval;
  }
}

export class DataOpsgenieEscalationRepeatList extends cdktf.ComplexList {
  public internalValue? : DataOpsgenieEscalationRepeat[] | cdktf.IResolvable

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
  public get(index: number): DataOpsgenieEscalationRepeatOutputReference {
    return new DataOpsgenieEscalationRepeatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpsgenieEscalationRulesRecipient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#id DataOpsgenieEscalation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#type DataOpsgenieEscalation#type}
  */
  readonly type?: string;
}

export function dataOpsgenieEscalationRulesRecipientToTerraform(struct?: DataOpsgenieEscalationRulesRecipient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataOpsgenieEscalationRulesRecipientToHclTerraform(struct?: DataOpsgenieEscalationRulesRecipient | cdktf.IResolvable): any {
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

export class DataOpsgenieEscalationRulesRecipientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpsgenieEscalationRulesRecipient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpsgenieEscalationRulesRecipient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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
}

export class DataOpsgenieEscalationRulesRecipientList extends cdktf.ComplexList {
  public internalValue? : DataOpsgenieEscalationRulesRecipient[] | cdktf.IResolvable

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
  public get(index: number): DataOpsgenieEscalationRulesRecipientOutputReference {
    return new DataOpsgenieEscalationRulesRecipientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpsgenieEscalationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#condition DataOpsgenieEscalation#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#delay DataOpsgenieEscalation#delay}
  */
  readonly delay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#notify_type DataOpsgenieEscalation#notify_type}
  */
  readonly notifyType: string;
  /**
  * recipient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#recipient DataOpsgenieEscalation#recipient}
  */
  readonly recipient: DataOpsgenieEscalationRulesRecipient[] | cdktf.IResolvable;
}

export function dataOpsgenieEscalationRulesToTerraform(struct?: DataOpsgenieEscalationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    delay: cdktf.numberToTerraform(struct!.delay),
    notify_type: cdktf.stringToTerraform(struct!.notifyType),
    recipient: cdktf.listMapper(dataOpsgenieEscalationRulesRecipientToTerraform, true)(struct!.recipient),
  }
}


export function dataOpsgenieEscalationRulesToHclTerraform(struct?: DataOpsgenieEscalationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notify_type: {
      value: cdktf.stringToHclTerraform(struct!.notifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipient: {
      value: cdktf.listMapperHcl(dataOpsgenieEscalationRulesRecipientToHclTerraform, true)(struct!.recipient),
      isBlock: true,
      type: "list",
      storageClassType: "DataOpsgenieEscalationRulesRecipientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOpsgenieEscalationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpsgenieEscalationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._notifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyType = this._notifyType;
    }
    if (this._recipient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipient = this._recipient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpsgenieEscalationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._delay = undefined;
      this._notifyType = undefined;
      this._recipient.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._delay = value.delay;
      this._notifyType = value.notifyType;
      this._recipient.internalValue = value.recipient;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // delay - computed: false, optional: false, required: true
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // notify_type - computed: false, optional: false, required: true
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }

  // recipient - computed: false, optional: false, required: true
  private _recipient = new DataOpsgenieEscalationRulesRecipientList(this, "recipient", false);
  public get recipient() {
    return this._recipient;
  }
  public putRecipient(value: DataOpsgenieEscalationRulesRecipient[] | cdktf.IResolvable) {
    this._recipient.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientInput() {
    return this._recipient.internalValue;
  }
}

export class DataOpsgenieEscalationRulesList extends cdktf.ComplexList {
  public internalValue? : DataOpsgenieEscalationRules[] | cdktf.IResolvable

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
  public get(index: number): DataOpsgenieEscalationRulesOutputReference {
    return new DataOpsgenieEscalationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation opsgenie_escalation}
*/
export class DataOpsgenieEscalation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opsgenie_escalation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpsgenieEscalation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpsgenieEscalation to import
  * @param importFromId The id of the existing DataOpsgenieEscalation that should be imported. Refer to the {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpsgenieEscalation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opsgenie_escalation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opsgenie/opsgenie/0.6.40/docs/data-sources/escalation opsgenie_escalation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpsgenieEscalationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpsgenieEscalationConfig) {
    super(scope, id, {
      terraformResourceType: 'opsgenie_escalation',
      terraformGeneratorMetadata: {
        providerName: 'opsgenie',
        providerVersion: '0.6.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._ownerTeamId = config.ownerTeamId;
    this._repeat.internalValue = config.repeat;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // owner_team_id - computed: false, optional: true, required: false
  private _ownerTeamId?: string; 
  public get ownerTeamId() {
    return this.getStringAttribute('owner_team_id');
  }
  public set ownerTeamId(value: string) {
    this._ownerTeamId = value;
  }
  public resetOwnerTeamId() {
    this._ownerTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTeamIdInput() {
    return this._ownerTeamId;
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat = new DataOpsgenieEscalationRepeatList(this, "repeat", false);
  public get repeat() {
    return this._repeat;
  }
  public putRepeat(value: DataOpsgenieEscalationRepeat[] | cdktf.IResolvable) {
    this._repeat.internalValue = value;
  }
  public resetRepeat() {
    this._repeat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataOpsgenieEscalationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataOpsgenieEscalationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_team_id: cdktf.stringToTerraform(this._ownerTeamId),
      repeat: cdktf.listMapper(dataOpsgenieEscalationRepeatToTerraform, true)(this._repeat.internalValue),
      rules: cdktf.listMapper(dataOpsgenieEscalationRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_team_id: {
        value: cdktf.stringToHclTerraform(this._ownerTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat: {
        value: cdktf.listMapperHcl(dataOpsgenieEscalationRepeatToHclTerraform, true)(this._repeat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOpsgenieEscalationRepeatList",
      },
      rules: {
        value: cdktf.listMapperHcl(dataOpsgenieEscalationRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOpsgenieEscalationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
