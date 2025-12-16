// https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/data-sources/escalation_path
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentEscalationPathConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for this escalation path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/data-sources/escalation_path#id DataIncidentEscalationPath#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of this escalation path, for the user's reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/data-sources/escalation_path#name DataIncidentEscalationPath#name}
  */
  readonly name?: string;
}
export interface DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValue {
}

export function dataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueToTerraform(struct?: DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}

export class DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueOutputReference {
    return new DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseConditionsParamBindingsValue {
}

export function dataIncidentEscalationPathPathIfElseConditionsParamBindingsValueToTerraform(struct?: DataIncidentEscalationPathPathIfElseConditionsParamBindingsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseConditionsParamBindingsValueToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseConditionsParamBindingsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseConditionsParamBindingsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseConditionsParamBindingsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // literal - computed: true, optional: false, required: false
  public get literal() {
    return this.getStringAttribute('literal');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }
}
export interface DataIncidentEscalationPathPathIfElseConditionsParamBindings {
}

export function dataIncidentEscalationPathPathIfElseConditionsParamBindingsToTerraform(struct?: DataIncidentEscalationPathPathIfElseConditionsParamBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseConditionsParamBindingsToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseConditionsParamBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseConditionsParamBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseConditionsParamBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // array_value - computed: true, optional: false, required: false
  private _arrayValue = new DataIncidentEscalationPathPathIfElseConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataIncidentEscalationPathPathIfElseConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataIncidentEscalationPathPathIfElseConditionsParamBindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseConditionsParamBindingsOutputReference {
    return new DataIncidentEscalationPathPathIfElseConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseConditions {
}

export function dataIncidentEscalationPathPathIfElseConditionsToTerraform(struct?: DataIncidentEscalationPathPathIfElseConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseConditionsToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // param_bindings - computed: true, optional: false, required: false
  private _paramBindings = new DataIncidentEscalationPathPathIfElseConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}

export class DataIncidentEscalationPathPathIfElseConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseConditionsOutputReference {
    return new DataIncidentEscalationPathPathIfElseConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfig {
}

export function dataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfigToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfigToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotate_after_seconds - computed: true, optional: false, required: false
  public get rotateAfterSeconds() {
    return this.getNumberAttribute('rotate_after_seconds');
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePathLevelTargets {
}

export function dataIncidentEscalationPathPathIfElseElsePathLevelTargetsToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathLevelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathLevelTargetsToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathLevelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathLevelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePathLevelTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePathLevelTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_mode - computed: true, optional: false, required: false
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
}

export class DataIncidentEscalationPathPathIfElseElsePathLevelTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseElsePathLevelTargetsOutputReference {
    return new DataIncidentEscalationPathPathIfElseElsePathLevelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePathLevel {
}

export function dataIncidentEscalationPathPathIfElseElsePathLevelToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathLevelToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePathLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePathLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ack_mode - computed: true, optional: false, required: false
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }

  // round_robin_config - computed: true, optional: false, required: false
  private _roundRobinConfig = new DataIncidentEscalationPathPathIfElseElsePathLevelRoundRobinConfigOutputReference(this, "round_robin_config");
  public get roundRobinConfig() {
    return this._roundRobinConfig;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataIncidentEscalationPathPathIfElseElsePathLevelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_to_ack_interval_condition - computed: true, optional: false, required: false
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }

  // time_to_ack_seconds - computed: true, optional: false, required: false
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }

  // time_to_ack_weekday_interval_config_id - computed: true, optional: false, required: false
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargets {
}

export function dataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_mode - computed: true, optional: false, required: false
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
}

export class DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsOutputReference {
    return new DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePathNotifyChannel {
}

export function dataIncidentEscalationPathPathIfElseElsePathNotifyChannelToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathNotifyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathNotifyChannelToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathNotifyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathNotifyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePathNotifyChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePathNotifyChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataIncidentEscalationPathPathIfElseElsePathNotifyChannelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_to_ack_interval_condition - computed: true, optional: false, required: false
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }

  // time_to_ack_seconds - computed: true, optional: false, required: false
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }

  // time_to_ack_weekday_interval_config_id - computed: true, optional: false, required: false
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePathRepeat {
}

export function dataIncidentEscalationPathPathIfElseElsePathRepeatToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathRepeatToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePathRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePathRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePathRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repeat_times - computed: true, optional: false, required: false
  public get repeatTimes() {
    return this.getNumberAttribute('repeat_times');
  }

  // to_node - computed: true, optional: false, required: false
  public get toNode() {
    return this.getStringAttribute('to_node');
  }
}
export interface DataIncidentEscalationPathPathIfElseElsePath {
}

export function dataIncidentEscalationPathPathIfElseElsePathToTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseElsePathToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseElsePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseElsePathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseElsePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseElsePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_else - computed: true, optional: false, required: false
  private _ifElse = new DataIncidentEscalationPathPathIfElseOutputReference(this, "if_else");
  public get ifElse() {
    return this._ifElse;
  }

  // level - computed: true, optional: false, required: false
  private _level = new DataIncidentEscalationPathPathIfElseElsePathLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }

  // notify_channel - computed: true, optional: false, required: false
  private _notifyChannel = new DataIncidentEscalationPathPathIfElseElsePathNotifyChannelOutputReference(this, "notify_channel");
  public get notifyChannel() {
    return this._notifyChannel;
  }

  // repeat - computed: true, optional: false, required: false
  private _repeat = new DataIncidentEscalationPathPathIfElseElsePathRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIncidentEscalationPathPathIfElseElsePathList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseElsePathOutputReference {
    return new DataIncidentEscalationPathPathIfElseElsePathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfig {
}

export function dataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfigToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfigToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotate_after_seconds - computed: true, optional: false, required: false
  public get rotateAfterSeconds() {
    return this.getNumberAttribute('rotate_after_seconds');
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPathLevelTargets {
}

export function dataIncidentEscalationPathPathIfElseThenPathLevelTargetsToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathLevelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathLevelTargetsToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathLevelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathLevelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPathLevelTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPathLevelTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_mode - computed: true, optional: false, required: false
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
}

export class DataIncidentEscalationPathPathIfElseThenPathLevelTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseThenPathLevelTargetsOutputReference {
    return new DataIncidentEscalationPathPathIfElseThenPathLevelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPathLevel {
}

export function dataIncidentEscalationPathPathIfElseThenPathLevelToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathLevelToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPathLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPathLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ack_mode - computed: true, optional: false, required: false
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }

  // round_robin_config - computed: true, optional: false, required: false
  private _roundRobinConfig = new DataIncidentEscalationPathPathIfElseThenPathLevelRoundRobinConfigOutputReference(this, "round_robin_config");
  public get roundRobinConfig() {
    return this._roundRobinConfig;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataIncidentEscalationPathPathIfElseThenPathLevelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_to_ack_interval_condition - computed: true, optional: false, required: false
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }

  // time_to_ack_seconds - computed: true, optional: false, required: false
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }

  // time_to_ack_weekday_interval_config_id - computed: true, optional: false, required: false
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargets {
}

export function dataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_mode - computed: true, optional: false, required: false
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
}

export class DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsOutputReference {
    return new DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPathNotifyChannel {
}

export function dataIncidentEscalationPathPathIfElseThenPathNotifyChannelToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathNotifyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathNotifyChannelToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathNotifyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathNotifyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPathNotifyChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPathNotifyChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataIncidentEscalationPathPathIfElseThenPathNotifyChannelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_to_ack_interval_condition - computed: true, optional: false, required: false
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }

  // time_to_ack_seconds - computed: true, optional: false, required: false
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }

  // time_to_ack_weekday_interval_config_id - computed: true, optional: false, required: false
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPathRepeat {
}

export function dataIncidentEscalationPathPathIfElseThenPathRepeatToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathRepeatToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPathRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPathRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPathRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repeat_times - computed: true, optional: false, required: false
  public get repeatTimes() {
    return this.getNumberAttribute('repeat_times');
  }

  // to_node - computed: true, optional: false, required: false
  public get toNode() {
    return this.getStringAttribute('to_node');
  }
}
export interface DataIncidentEscalationPathPathIfElseThenPath {
}

export function dataIncidentEscalationPathPathIfElseThenPathToTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseThenPathToHclTerraform(struct?: DataIncidentEscalationPathPathIfElseThenPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseThenPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathIfElseThenPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElseThenPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_else - computed: true, optional: false, required: false
  private _ifElse = new DataIncidentEscalationPathPathIfElseOutputReference(this, "if_else");
  public get ifElse() {
    return this._ifElse;
  }

  // level - computed: true, optional: false, required: false
  private _level = new DataIncidentEscalationPathPathIfElseThenPathLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }

  // notify_channel - computed: true, optional: false, required: false
  private _notifyChannel = new DataIncidentEscalationPathPathIfElseThenPathNotifyChannelOutputReference(this, "notify_channel");
  public get notifyChannel() {
    return this._notifyChannel;
  }

  // repeat - computed: true, optional: false, required: false
  private _repeat = new DataIncidentEscalationPathPathIfElseThenPathRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIncidentEscalationPathPathIfElseThenPathList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathIfElseThenPathOutputReference {
    return new DataIncidentEscalationPathPathIfElseThenPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathIfElse {
}

export function dataIncidentEscalationPathPathIfElseToTerraform(struct?: DataIncidentEscalationPathPathIfElse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathIfElseToHclTerraform(struct?: DataIncidentEscalationPathPathIfElse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathIfElseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathIfElse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathIfElse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataIncidentEscalationPathPathIfElseConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // else_path - computed: true, optional: false, required: false
  private _elsePath = new DataIncidentEscalationPathPathIfElseElsePathList(this, "else_path", false);
  public get elsePath() {
    return this._elsePath;
  }

  // then_path - computed: true, optional: false, required: false
  private _thenPath = new DataIncidentEscalationPathPathIfElseThenPathList(this, "then_path", false);
  public get thenPath() {
    return this._thenPath;
  }
}
export interface DataIncidentEscalationPathPathLevelRoundRobinConfig {
}

export function dataIncidentEscalationPathPathLevelRoundRobinConfigToTerraform(struct?: DataIncidentEscalationPathPathLevelRoundRobinConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathLevelRoundRobinConfigToHclTerraform(struct?: DataIncidentEscalationPathPathLevelRoundRobinConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathLevelRoundRobinConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathLevelRoundRobinConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathLevelRoundRobinConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // rotate_after_seconds - computed: true, optional: false, required: false
  public get rotateAfterSeconds() {
    return this.getNumberAttribute('rotate_after_seconds');
  }
}
export interface DataIncidentEscalationPathPathLevelTargets {
}

export function dataIncidentEscalationPathPathLevelTargetsToTerraform(struct?: DataIncidentEscalationPathPathLevelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathLevelTargetsToHclTerraform(struct?: DataIncidentEscalationPathPathLevelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathLevelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathLevelTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathLevelTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_mode - computed: true, optional: false, required: false
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
}

export class DataIncidentEscalationPathPathLevelTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathLevelTargetsOutputReference {
    return new DataIncidentEscalationPathPathLevelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathLevel {
}

export function dataIncidentEscalationPathPathLevelToTerraform(struct?: DataIncidentEscalationPathPathLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathLevelToHclTerraform(struct?: DataIncidentEscalationPathPathLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ack_mode - computed: true, optional: false, required: false
  public get ackMode() {
    return this.getStringAttribute('ack_mode');
  }

  // round_robin_config - computed: true, optional: false, required: false
  private _roundRobinConfig = new DataIncidentEscalationPathPathLevelRoundRobinConfigOutputReference(this, "round_robin_config");
  public get roundRobinConfig() {
    return this._roundRobinConfig;
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataIncidentEscalationPathPathLevelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_to_ack_interval_condition - computed: true, optional: false, required: false
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }

  // time_to_ack_seconds - computed: true, optional: false, required: false
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }

  // time_to_ack_weekday_interval_config_id - computed: true, optional: false, required: false
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
}
export interface DataIncidentEscalationPathPathNotifyChannelTargets {
}

export function dataIncidentEscalationPathPathNotifyChannelTargetsToTerraform(struct?: DataIncidentEscalationPathPathNotifyChannelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathNotifyChannelTargetsToHclTerraform(struct?: DataIncidentEscalationPathPathNotifyChannelTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathNotifyChannelTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPathNotifyChannelTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathNotifyChannelTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedule_mode - computed: true, optional: false, required: false
  public get scheduleMode() {
    return this.getStringAttribute('schedule_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // urgency - computed: true, optional: false, required: false
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
}

export class DataIncidentEscalationPathPathNotifyChannelTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathNotifyChannelTargetsOutputReference {
    return new DataIncidentEscalationPathPathNotifyChannelTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathPathNotifyChannel {
}

export function dataIncidentEscalationPathPathNotifyChannelToTerraform(struct?: DataIncidentEscalationPathPathNotifyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathNotifyChannelToHclTerraform(struct?: DataIncidentEscalationPathPathNotifyChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathNotifyChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathNotifyChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathNotifyChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataIncidentEscalationPathPathNotifyChannelTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // time_to_ack_interval_condition - computed: true, optional: false, required: false
  public get timeToAckIntervalCondition() {
    return this.getStringAttribute('time_to_ack_interval_condition');
  }

  // time_to_ack_seconds - computed: true, optional: false, required: false
  public get timeToAckSeconds() {
    return this.getNumberAttribute('time_to_ack_seconds');
  }

  // time_to_ack_weekday_interval_config_id - computed: true, optional: false, required: false
  public get timeToAckWeekdayIntervalConfigId() {
    return this.getStringAttribute('time_to_ack_weekday_interval_config_id');
  }
}
export interface DataIncidentEscalationPathPathRepeat {
}

export function dataIncidentEscalationPathPathRepeatToTerraform(struct?: DataIncidentEscalationPathPathRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathRepeatToHclTerraform(struct?: DataIncidentEscalationPathPathRepeat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathRepeatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIncidentEscalationPathPathRepeat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPathRepeat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // repeat_times - computed: true, optional: false, required: false
  public get repeatTimes() {
    return this.getNumberAttribute('repeat_times');
  }

  // to_node - computed: true, optional: false, required: false
  public get toNode() {
    return this.getStringAttribute('to_node');
  }
}
export interface DataIncidentEscalationPathPath {
}

export function dataIncidentEscalationPathPathToTerraform(struct?: DataIncidentEscalationPathPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathPathToHclTerraform(struct?: DataIncidentEscalationPathPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if_else - computed: true, optional: false, required: false
  private _ifElse = new DataIncidentEscalationPathPathIfElseOutputReference(this, "if_else");
  public get ifElse() {
    return this._ifElse;
  }

  // level - computed: true, optional: false, required: false
  private _level = new DataIncidentEscalationPathPathLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }

  // notify_channel - computed: true, optional: false, required: false
  private _notifyChannel = new DataIncidentEscalationPathPathNotifyChannelOutputReference(this, "notify_channel");
  public get notifyChannel() {
    return this._notifyChannel;
  }

  // repeat - computed: true, optional: false, required: false
  private _repeat = new DataIncidentEscalationPathPathRepeatOutputReference(this, "repeat");
  public get repeat() {
    return this._repeat;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIncidentEscalationPathPathList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathPathOutputReference {
    return new DataIncidentEscalationPathPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathWorkingHoursWeekdayIntervals {
}

export function dataIncidentEscalationPathWorkingHoursWeekdayIntervalsToTerraform(struct?: DataIncidentEscalationPathWorkingHoursWeekdayIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathWorkingHoursWeekdayIntervalsToHclTerraform(struct?: DataIncidentEscalationPathWorkingHoursWeekdayIntervals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathWorkingHoursWeekdayIntervalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathWorkingHoursWeekdayIntervals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathWorkingHoursWeekdayIntervals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // weekday - computed: true, optional: false, required: false
  public get weekday() {
    return this.getStringAttribute('weekday');
  }
}

export class DataIncidentEscalationPathWorkingHoursWeekdayIntervalsList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathWorkingHoursWeekdayIntervalsOutputReference {
    return new DataIncidentEscalationPathWorkingHoursWeekdayIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIncidentEscalationPathWorkingHours {
}

export function dataIncidentEscalationPathWorkingHoursToTerraform(struct?: DataIncidentEscalationPathWorkingHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentEscalationPathWorkingHoursToHclTerraform(struct?: DataIncidentEscalationPathWorkingHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentEscalationPathWorkingHoursOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentEscalationPathWorkingHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentEscalationPathWorkingHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // weekday_intervals - computed: true, optional: false, required: false
  private _weekdayIntervals = new DataIncidentEscalationPathWorkingHoursWeekdayIntervalsList(this, "weekday_intervals", false);
  public get weekdayIntervals() {
    return this._weekdayIntervals;
  }
}

export class DataIncidentEscalationPathWorkingHoursList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentEscalationPathWorkingHoursOutputReference {
    return new DataIncidentEscalationPathWorkingHoursOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/data-sources/escalation_path incident_escalation_path}
*/
export class DataIncidentEscalationPath extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_escalation_path";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentEscalationPath resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentEscalationPath to import
  * @param importFromId The id of the existing DataIncidentEscalationPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/data-sources/escalation_path#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentEscalationPath to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_escalation_path", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/data-sources/escalation_path incident_escalation_path} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentEscalationPathConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIncidentEscalationPathConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incident_escalation_path',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.22.0',
        providerVersionConstraint: '5.22.0'
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
    this._name = config.name;
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

  // path - computed: true, optional: false, required: false
  private _path = new DataIncidentEscalationPathPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // team_ids - computed: true, optional: false, required: false
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }

  // working_hours - computed: true, optional: false, required: false
  private _workingHours = new DataIncidentEscalationPathWorkingHoursList(this, "working_hours", false);
  public get workingHours() {
    return this._workingHours;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
