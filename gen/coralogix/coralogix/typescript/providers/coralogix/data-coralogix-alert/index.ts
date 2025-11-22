// https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/alert#id DataCoralogixAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCoralogixAlertIncidentsSettingsRetriggeringPeriod {
}

export function dataCoralogixAlertIncidentsSettingsRetriggeringPeriodToTerraform(struct?: DataCoralogixAlertIncidentsSettingsRetriggeringPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertIncidentsSettingsRetriggeringPeriodToHclTerraform(struct?: DataCoralogixAlertIncidentsSettingsRetriggeringPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertIncidentsSettingsRetriggeringPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertIncidentsSettingsRetriggeringPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertIncidentsSettingsRetriggeringPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataCoralogixAlertIncidentsSettings {
}

export function dataCoralogixAlertIncidentsSettingsToTerraform(struct?: DataCoralogixAlertIncidentsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertIncidentsSettingsToHclTerraform(struct?: DataCoralogixAlertIncidentsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertIncidentsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertIncidentsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertIncidentsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notify_on - computed: true, optional: false, required: false
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }

  // retriggering_period - computed: true, optional: false, required: false
  private _retriggeringPeriod = new DataCoralogixAlertIncidentsSettingsRetriggeringPeriodOutputReference(this, "retriggering_period");
  public get retriggeringPeriod() {
    return this._retriggeringPeriod;
  }
}
export interface DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides {
}

export function dataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}

export class DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesOutputReference {
    return new DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides {
}

export function dataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}

export class DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesOutputReference {
    return new DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverrides {
}

export function dataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_overrides - computed: true, optional: false, required: false
  private _connectorOverrides = new DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesConnectorOverridesList(this, "connector_overrides", false);
  public get connectorOverrides() {
    return this._connectorOverrides;
  }

  // payload_type - computed: true, optional: false, required: false
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }

  // preset_overrides - computed: true, optional: false, required: false
  private _presetOverrides = new DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesPresetOverridesList(this, "preset_overrides", false);
  public get presetOverrides() {
    return this._presetOverrides;
  }
}
export interface DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides {
}

export function dataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}

export class DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesOutputReference {
    return new DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides {
}

export function dataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }
}

export class DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesOutputReference {
    return new DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverrides {
}

export function dataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_overrides - computed: true, optional: false, required: false
  private _connectorOverrides = new DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesConnectorOverridesList(this, "connector_overrides", false);
  public get connectorOverrides() {
    return this._connectorOverrides;
  }

  // payload_type - computed: true, optional: false, required: false
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }

  // preset_overrides - computed: true, optional: false, required: false
  private _presetOverrides = new DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesPresetOverridesList(this, "preset_overrides", false);
  public get presetOverrides() {
    return this._presetOverrides;
  }
}
export interface DataCoralogixAlertNotificationGroupDestinations {
}

export function dataCoralogixAlertNotificationGroupDestinationsToTerraform(struct?: DataCoralogixAlertNotificationGroupDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupDestinationsToHclTerraform(struct?: DataCoralogixAlertNotificationGroupDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertNotificationGroupDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // notify_on - computed: true, optional: false, required: false
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }

  // preset_id - computed: true, optional: false, required: false
  public get presetId() {
    return this.getStringAttribute('preset_id');
  }

  // resolved_routing_overrides - computed: true, optional: false, required: false
  private _resolvedRoutingOverrides = new DataCoralogixAlertNotificationGroupDestinationsResolvedRoutingOverridesOutputReference(this, "resolved_routing_overrides");
  public get resolvedRoutingOverrides() {
    return this._resolvedRoutingOverrides;
  }

  // triggered_routing_overrides - computed: true, optional: false, required: false
  private _triggeredRoutingOverrides = new DataCoralogixAlertNotificationGroupDestinationsTriggeredRoutingOverridesOutputReference(this, "triggered_routing_overrides");
  public get triggeredRoutingOverrides() {
    return this._triggeredRoutingOverrides;
  }
}

export class DataCoralogixAlertNotificationGroupDestinationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertNotificationGroupDestinationsOutputReference {
    return new DataCoralogixAlertNotificationGroupDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertNotificationGroupRouter {
}

export function dataCoralogixAlertNotificationGroupRouterToTerraform(struct?: DataCoralogixAlertNotificationGroupRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupRouterToHclTerraform(struct?: DataCoralogixAlertNotificationGroupRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertNotificationGroupRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notify_on - computed: true, optional: false, required: false
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }
}
export interface DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriod {
}

export function dataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriodToTerraform(struct?: DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriodToHclTerraform(struct?: DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataCoralogixAlertNotificationGroupWebhooksSettings {
}

export function dataCoralogixAlertNotificationGroupWebhooksSettingsToTerraform(struct?: DataCoralogixAlertNotificationGroupWebhooksSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupWebhooksSettingsToHclTerraform(struct?: DataCoralogixAlertNotificationGroupWebhooksSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupWebhooksSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertNotificationGroupWebhooksSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroupWebhooksSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_id - computed: true, optional: false, required: false
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }

  // notify_on - computed: true, optional: false, required: false
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }

  // recipients - computed: true, optional: false, required: false
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }

  // retriggering_period - computed: true, optional: false, required: false
  private _retriggeringPeriod = new DataCoralogixAlertNotificationGroupWebhooksSettingsRetriggeringPeriodOutputReference(this, "retriggering_period");
  public get retriggeringPeriod() {
    return this._retriggeringPeriod;
  }
}

export class DataCoralogixAlertNotificationGroupWebhooksSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertNotificationGroupWebhooksSettingsOutputReference {
    return new DataCoralogixAlertNotificationGroupWebhooksSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertNotificationGroup {
}

export function dataCoralogixAlertNotificationGroupToTerraform(struct?: DataCoralogixAlertNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertNotificationGroupToHclTerraform(struct?: DataCoralogixAlertNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertNotificationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertNotificationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertNotificationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destinations - computed: true, optional: false, required: false
  private _destinations = new DataCoralogixAlertNotificationGroupDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }

  // group_by_keys - computed: true, optional: false, required: false
  public get groupByKeys() {
    return this.getListAttribute('group_by_keys');
  }

  // router - computed: true, optional: false, required: false
  private _router = new DataCoralogixAlertNotificationGroupRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }

  // webhooks_settings - computed: true, optional: false, required: false
  private _webhooksSettings = new DataCoralogixAlertNotificationGroupWebhooksSettingsList(this, "webhooks_settings", true);
  public get webhooksSettings() {
    return this._webhooksSettings;
  }
}
export interface DataCoralogixAlertScheduleActiveOn {
}

export function dataCoralogixAlertScheduleActiveOnToTerraform(struct?: DataCoralogixAlertScheduleActiveOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertScheduleActiveOnToHclTerraform(struct?: DataCoralogixAlertScheduleActiveOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertScheduleActiveOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertScheduleActiveOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertScheduleActiveOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_of_week - computed: true, optional: false, required: false
  public get daysOfWeek() {
    return cdktf.Fn.tolist(this.getListAttribute('days_of_week'));
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // utc_offset - computed: true, optional: false, required: false
  public get utcOffset() {
    return this.getStringAttribute('utc_offset');
  }
}
export interface DataCoralogixAlertSchedule {
}

export function dataCoralogixAlertScheduleToTerraform(struct?: DataCoralogixAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertScheduleToHclTerraform(struct?: DataCoralogixAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_on - computed: true, optional: false, required: false
  private _activeOn = new DataCoralogixAlertScheduleActiveOnOutputReference(this, "active_on");
  public get activeOn() {
    return this._activeOn;
  }
}
export interface DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs {
}

export function dataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsToTerraform(struct?: DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefs | undefined) {
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

  // not - computed: true, optional: false, required: false
  public get not() {
    return this.getBooleanAttribute('not');
  }
}

export class DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsOutputReference {
    return new DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroups {
}

export function dataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsToTerraform(struct?: DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_defs - computed: true, optional: false, required: false
  private _alertDefs = new DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsAlertDefsList(this, "alert_defs", true);
  public get alertDefs() {
    return this._alertDefs;
  }

  // alerts_op - computed: true, optional: false, required: false
  public get alertsOp() {
    return this.getStringAttribute('alerts_op');
  }

  // next_op - computed: true, optional: false, required: false
  public get nextOp() {
    return this.getStringAttribute('next_op');
  }
}

export class DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsOutputReference {
    return new DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionFlowStages {
}

export function dataCoralogixAlertTypeDefinitionFlowStagesToTerraform(struct?: DataCoralogixAlertTypeDefinitionFlowStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionFlowStagesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionFlowStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionFlowStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionFlowStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionFlowStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_stages_groups - computed: true, optional: false, required: false
  private _flowStagesGroups = new DataCoralogixAlertTypeDefinitionFlowStagesFlowStagesGroupsList(this, "flow_stages_groups", false);
  public get flowStagesGroups() {
    return this._flowStagesGroups;
  }

  // timeframe_ms - computed: true, optional: false, required: false
  public get timeframeMs() {
    return this.getNumberAttribute('timeframe_ms');
  }

  // timeframe_type - computed: true, optional: false, required: false
  public get timeframeType() {
    return this.getStringAttribute('timeframe_type');
  }
}

export class DataCoralogixAlertTypeDefinitionFlowStagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionFlowStagesOutputReference {
    return new DataCoralogixAlertTypeDefinitionFlowStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionFlow {
}

export function dataCoralogixAlertTypeDefinitionFlowToTerraform(struct?: DataCoralogixAlertTypeDefinitionFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionFlowToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforce_suppression - computed: true, optional: false, required: false
  public get enforceSuppression() {
    return this.getBooleanAttribute('enforce_suppression');
  }

  // stages - computed: true, optional: false, required: false
  private _stages = new DataCoralogixAlertTypeDefinitionFlowStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // minimum_threshold - computed: true, optional: false, required: false
  public get minimumThreshold() {
    return this.getNumberAttribute('minimum_threshold');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomalyRules {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomalyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomalyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomalyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionLogsAnomalyRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsAnomalyRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsAnomalyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsAnomaly {
}

export function dataCoralogixAlertTypeDefinitionLogsAnomalyToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomaly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsAnomalyToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsAnomaly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsAnomaly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsAnomaly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_evaluation_delay - computed: true, optional: false, required: false
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }

  // logs_filter - computed: true, optional: false, required: false
  private _logsFilter = new DataCoralogixAlertTypeDefinitionLogsAnomalyLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionLogsAnomalyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsImmediate {
}

export function dataCoralogixAlertTypeDefinitionLogsImmediateToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsImmediateToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsImmediate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsImmediateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsImmediate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsImmediate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs_filter - computed: true, optional: false, required: false
  private _logsFilter = new DataCoralogixAlertTypeDefinitionLogsImmediateLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keypath_to_track - computed: true, optional: false, required: false
  public get keypathToTrack() {
    return this.getStringAttribute('keypath_to_track');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValueRules {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValueRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValueRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValueRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionLogsNewValueRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsNewValueRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsNewValueRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsNewValue {
}

export function dataCoralogixAlertTypeDefinitionLogsNewValueToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsNewValueToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsNewValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsNewValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsNewValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs_filter - computed: true, optional: false, required: false
  private _logsFilter = new DataCoralogixAlertTypeDefinitionLogsNewValueLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionLogsNewValueRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominator {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumerator {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverride {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverrideToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverrideToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThresholdRules {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThresholdRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThresholdRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsRatioThreshold {
}

export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsRatioThresholdToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsRatioThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsRatioThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsRatioThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsRatioThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_evaluation_delay - computed: true, optional: false, required: false
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }

  // denominator - computed: true, optional: false, required: false
  private _denominator = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdDenominatorOutputReference(this, "denominator");
  public get denominator() {
    return this._denominator;
  }

  // denominator_alias - computed: true, optional: false, required: false
  public get denominatorAlias() {
    return this.getStringAttribute('denominator_alias');
  }

  // group_by_for - computed: true, optional: false, required: false
  public get groupByFor() {
    return this.getStringAttribute('group_by_for');
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // numerator - computed: true, optional: false, required: false
  private _numerator = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdNumeratorOutputReference(this, "numerator");
  public get numerator() {
    return this._numerator;
  }

  // numerator_alias - computed: true, optional: false, required: false
  public get numeratorAlias() {
    return this.getStringAttribute('numerator_alias');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverride {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdRulesOverrideToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdRulesOverrideToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdRules {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionLogsThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataCoralogixAlertTypeDefinitionLogsThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsThresholdRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagement {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagementToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagementToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_retire_timeframe - computed: true, optional: false, required: false
  public get autoRetireTimeframe() {
    return this.getStringAttribute('auto_retire_timeframe');
  }

  // trigger_undetected_values - computed: true, optional: false, required: false
  public get triggerUndetectedValues() {
    return this.getBooleanAttribute('trigger_undetected_values');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsThreshold {
}

export function dataCoralogixAlertTypeDefinitionLogsThresholdToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsThresholdToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_evaluation_delay - computed: true, optional: false, required: false
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }

  // logs_filter - computed: true, optional: false, required: false
  private _logsFilter = new DataCoralogixAlertTypeDefinitionLogsThresholdLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionLogsThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // undetected_values_management - computed: true, optional: false, required: false
  private _undetectedValuesManagement = new DataCoralogixAlertTypeDefinitionLogsThresholdUndetectedValuesManagementOutputReference(this, "undetected_values_management");
  public get undetectedValuesManagement() {
    return this._undetectedValuesManagement;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compared_to - computed: true, optional: false, required: false
  public get comparedTo() {
    return this.getStringAttribute('compared_to');
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRules {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_retire_timeframe - computed: true, optional: false, required: false
  public get autoRetireTimeframe() {
    return this.getStringAttribute('auto_retire_timeframe');
  }

  // trigger_undetected_values - computed: true, optional: false, required: false
  public get triggerUndetectedValues() {
    return this.getBooleanAttribute('trigger_undetected_values');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsTimeRelativeThreshold {
}

export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsTimeRelativeThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsTimeRelativeThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_evaluation_delay - computed: true, optional: false, required: false
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }

  // logs_filter - computed: true, optional: false, required: false
  private _logsFilter = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // undetected_values_management - computed: true, optional: false, required: false
  private _undetectedValuesManagement = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdUndetectedValuesManagementOutputReference(this, "undetected_values_management");
  public get undetectedValuesManagement() {
    return this._undetectedValuesManagement;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemName | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // severities - computed: true, optional: false, required: false
  public get severities() {
    return cdktf.Fn.tolist(this.getListAttribute('severities'));
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_filters - computed: true, optional: false, required: false
  private _labelFilters = new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterLabelFiltersOutputReference(this, "label_filters");
  public get labelFilters() {
    return this._labelFilters;
  }

  // lucene_query - computed: true, optional: false, required: false
  public get luceneQuery() {
    return this.getStringAttribute('lucene_query');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilter {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // simple_filter - computed: true, optional: false, required: false
  private _simpleFilter = new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterSimpleFilterOutputReference(this, "simple_filter");
  public get simpleFilter() {
    return this._simpleFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_unique_count - computed: true, optional: false, required: false
  public get maxUniqueCount() {
    return this.getNumberAttribute('max_unique_count');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCountRules {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCountRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCountRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCountRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionLogsUniqueCount {
}

export function dataCoralogixAlertTypeDefinitionLogsUniqueCountToTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionLogsUniqueCountToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionLogsUniqueCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionLogsUniqueCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionLogsUniqueCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionLogsUniqueCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logs_filter - computed: true, optional: false, required: false
  private _logsFilter = new DataCoralogixAlertTypeDefinitionLogsUniqueCountLogsFilterOutputReference(this, "logs_filter");
  public get logsFilter() {
    return this._logsFilter;
  }

  // max_unique_count_per_group_by_key - computed: true, optional: false, required: false
  public get maxUniqueCountPerGroupByKey() {
    return this.getNumberAttribute('max_unique_count_per_group_by_key');
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionLogsUniqueCountRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // unique_count_keypath - computed: true, optional: false, required: false
  public get uniqueCountKeypath() {
    return this.getStringAttribute('unique_count_keypath');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilter {
}

export function dataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // promql - computed: true, optional: false, required: false
  public get promql() {
    return this.getStringAttribute('promql');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricAnomalyRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionMetricAnomalyRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomalyRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricAnomalyRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomalyRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricAnomalyRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricAnomalyRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricAnomalyRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // for_over_pct - computed: true, optional: false, required: false
  public get forOverPct() {
    return this.getNumberAttribute('for_over_pct');
  }

  // min_non_null_values_pct - computed: true, optional: false, required: false
  public get minNonNullValuesPct() {
    return this.getNumberAttribute('min_non_null_values_pct');
  }

  // of_the_last - computed: true, optional: false, required: false
  public get ofTheLast() {
    return this.getStringAttribute('of_the_last');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricAnomalyRules {
}

export function dataCoralogixAlertTypeDefinitionMetricAnomalyRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomalyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricAnomalyRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomalyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricAnomalyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricAnomalyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricAnomalyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionMetricAnomalyRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}

export class DataCoralogixAlertTypeDefinitionMetricAnomalyRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionMetricAnomalyRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionMetricAnomalyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricAnomaly {
}

export function dataCoralogixAlertTypeDefinitionMetricAnomalyToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomaly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricAnomalyToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricAnomaly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricAnomalyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricAnomaly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricAnomaly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_evaluation_delay - computed: true, optional: false, required: false
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }

  // metric_filter - computed: true, optional: false, required: false
  private _metricFilter = new DataCoralogixAlertTypeDefinitionMetricAnomalyMetricFilterOutputReference(this, "metric_filter");
  public get metricFilter() {
    return this._metricFilter;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionMetricAnomalyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilter {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdMetricFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdMetricFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // promql - computed: true, optional: false, required: false
  public get promql() {
    return this.getStringAttribute('promql');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThresholdMissingValues {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdMissingValuesToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdMissingValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdMissingValuesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdMissingValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdMissingValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThresholdMissingValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThresholdMissingValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // min_non_null_values_pct - computed: true, optional: false, required: false
  public get minNonNullValuesPct() {
    return this.getNumberAttribute('min_non_null_values_pct');
  }

  // replace_with_zero - computed: true, optional: false, required: false
  public get replaceWithZero() {
    return this.getBooleanAttribute('replace_with_zero');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThresholdRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThresholdRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThresholdRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // for_over_pct - computed: true, optional: false, required: false
  public get forOverPct() {
    return this.getNumberAttribute('for_over_pct');
  }

  // of_the_last - computed: true, optional: false, required: false
  public get ofTheLast() {
    return this.getStringAttribute('of_the_last');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverride {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdRulesOverrideToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdRulesOverrideToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThresholdRules {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThresholdRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThresholdRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionMetricThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataCoralogixAlertTypeDefinitionMetricThresholdRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionMetricThresholdRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionMetricThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagement {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagementToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagementToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_retire_timeframe - computed: true, optional: false, required: false
  public get autoRetireTimeframe() {
    return this.getStringAttribute('auto_retire_timeframe');
  }

  // trigger_undetected_values - computed: true, optional: false, required: false
  public get triggerUndetectedValues() {
    return this.getBooleanAttribute('trigger_undetected_values');
  }
}
export interface DataCoralogixAlertTypeDefinitionMetricThreshold {
}

export function dataCoralogixAlertTypeDefinitionMetricThresholdToTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionMetricThresholdToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionMetricThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_evaluation_delay - computed: true, optional: false, required: false
  public get customEvaluationDelay() {
    return this.getNumberAttribute('custom_evaluation_delay');
  }

  // metric_filter - computed: true, optional: false, required: false
  private _metricFilter = new DataCoralogixAlertTypeDefinitionMetricThresholdMetricFilterOutputReference(this, "metric_filter");
  public get metricFilter() {
    return this._metricFilter;
  }

  // missing_values - computed: true, optional: false, required: false
  private _missingValues = new DataCoralogixAlertTypeDefinitionMetricThresholdMissingValuesOutputReference(this, "missing_values");
  public get missingValues() {
    return this._missingValues;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionMetricThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // undetected_values_management - computed: true, optional: false, required: false
  private _undetectedValuesManagement = new DataCoralogixAlertTypeDefinitionMetricThresholdUndetectedValuesManagementOutputReference(this, "undetected_values_management");
  public get undetectedValuesManagement() {
    return this._undetectedValuesManagement;
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDuration {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDurationToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDurationToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDual {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_duration - computed: true, optional: false, required: false
  private _timeDuration = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualTimeDurationOutputReference(this, "time_duration");
  public get timeDuration() {
    return this._timeDuration;
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverride {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverrideToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverrideToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRules {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDurationToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDurationToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingle {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_duration - computed: true, optional: false, required: false
  private _timeDuration = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleTimeDurationOutputReference(this, "time_duration");
  public get timeDuration() {
    return this._timeDuration;
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdBurnRate {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdBurnRateToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdBurnRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdBurnRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdBurnRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdBurnRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dual - computed: true, optional: false, required: false
  private _dual = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateDualOutputReference(this, "dual");
  public get dual() {
    return this._dual;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // single - computed: true, optional: false, required: false
  private _single = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateSingleOutputReference(this, "single");
  public get single() {
    return this._single;
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverride {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverrideToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverrideToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRules {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
}

export class DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdErrorBudget {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdErrorBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdErrorBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThresholdSloDefinition {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdSloDefinitionToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdSloDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdSloDefinitionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThresholdSloDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdSloDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThresholdSloDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThresholdSloDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // slo_id - computed: true, optional: false, required: false
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
}
export interface DataCoralogixAlertTypeDefinitionSloThreshold {
}

export function dataCoralogixAlertTypeDefinitionSloThresholdToTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionSloThresholdToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionSloThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionSloThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionSloThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionSloThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burn_rate - computed: true, optional: false, required: false
  private _burnRate = new DataCoralogixAlertTypeDefinitionSloThresholdBurnRateOutputReference(this, "burn_rate");
  public get burnRate() {
    return this._burnRate;
  }

  // error_budget - computed: true, optional: false, required: false
  private _errorBudget = new DataCoralogixAlertTypeDefinitionSloThresholdErrorBudgetOutputReference(this, "error_budget");
  public get errorBudget() {
    return this._errorBudget;
  }

  // slo_definition - computed: true, optional: false, required: false
  private _sloDefinition = new DataCoralogixAlertTypeDefinitionSloThresholdSloDefinitionOutputReference(this, "slo_definition");
  public get sloDefinition() {
    return this._sloDefinition;
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterType | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  private _filterType = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference(this, "filter_type");
  public get filterType() {
    return this._filterType;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // operation_name - computed: true, optional: false, required: false
  private _operationName = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOperationNameList(this, "operation_name", true);
  public get operationName() {
    return this._operationName;
  }

  // service_name - computed: true, optional: false, required: false
  private _serviceName = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersServiceNameList(this, "service_name", true);
  public get serviceName() {
    return this._serviceName;
  }

  // span_fields - computed: true, optional: false, required: false
  private _spanFields = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSpanFieldsList(this, "span_fields", true);
  public get spanFields() {
    return this._spanFields;
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilter {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latency_threshold_ms - computed: true, optional: false, required: false
  public get latencyThresholdMs() {
    return this.getNumberAttribute('latency_threshold_ms');
  }

  // tracing_label_filters - computed: true, optional: false, required: false
  private _tracingLabelFilters = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterTracingLabelFiltersOutputReference(this, "tracing_label_filters");
  public get tracingLabelFilters() {
    return this._tracingLabelFilters;
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingImmediate {
}

export function dataCoralogixAlertTypeDefinitionTracingImmediateToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingImmediateToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingImmediate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingImmediateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingImmediate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingImmediate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // tracing_filter - computed: true, optional: false, required: false
  private _tracingFilter = new DataCoralogixAlertTypeDefinitionTracingImmediateTracingFilterOutputReference(this, "tracing_filter");
  public get tracingFilter() {
    return this._tracingFilter;
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdRulesCondition {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdRulesConditionToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdRulesConditionToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdRulesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdRulesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdRulesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdRulesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // span_amount - computed: true, optional: false, required: false
  public get spanAmount() {
    return this.getNumberAttribute('span_amount');
  }

  // time_window - computed: true, optional: false, required: false
  public get timeWindow() {
    return this.getStringAttribute('time_window');
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdRules {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdRulesToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdRulesToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataCoralogixAlertTypeDefinitionTracingThresholdRulesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingThresholdRulesOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingThresholdRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterType | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_type - computed: true, optional: false, required: false
  private _filterType = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsFilterTypeOutputReference(this, "filter_type");
  public get filterType() {
    return this._filterType;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemName | undefined) {
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

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameOutputReference {
    return new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name - computed: true, optional: false, required: false
  private _applicationName = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersApplicationNameList(this, "application_name", true);
  public get applicationName() {
    return this._applicationName;
  }

  // operation_name - computed: true, optional: false, required: false
  private _operationName = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOperationNameList(this, "operation_name", true);
  public get operationName() {
    return this._operationName;
  }

  // service_name - computed: true, optional: false, required: false
  private _serviceName = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersServiceNameList(this, "service_name", true);
  public get serviceName() {
    return this._serviceName;
  }

  // span_fields - computed: true, optional: false, required: false
  private _spanFields = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSpanFieldsList(this, "span_fields", true);
  public get spanFields() {
    return this._spanFields;
  }

  // subsystem_name - computed: true, optional: false, required: false
  private _subsystemName = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersSubsystemNameList(this, "subsystem_name", true);
  public get subsystemName() {
    return this._subsystemName;
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilter {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latency_threshold_ms - computed: true, optional: false, required: false
  public get latencyThresholdMs() {
    return this.getNumberAttribute('latency_threshold_ms');
  }

  // tracing_label_filters - computed: true, optional: false, required: false
  private _tracingLabelFilters = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterTracingLabelFiltersOutputReference(this, "tracing_label_filters");
  public get tracingLabelFilters() {
    return this._tracingLabelFilters;
  }
}
export interface DataCoralogixAlertTypeDefinitionTracingThreshold {
}

export function dataCoralogixAlertTypeDefinitionTracingThresholdToTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionTracingThresholdToHclTerraform(struct?: DataCoralogixAlertTypeDefinitionTracingThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionTracingThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinitionTracingThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinitionTracingThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notification_payload_filter - computed: true, optional: false, required: false
  public get notificationPayloadFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_payload_filter'));
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataCoralogixAlertTypeDefinitionTracingThresholdRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }

  // tracing_filter - computed: true, optional: false, required: false
  private _tracingFilter = new DataCoralogixAlertTypeDefinitionTracingThresholdTracingFilterOutputReference(this, "tracing_filter");
  public get tracingFilter() {
    return this._tracingFilter;
  }
}
export interface DataCoralogixAlertTypeDefinition {
}

export function dataCoralogixAlertTypeDefinitionToTerraform(struct?: DataCoralogixAlertTypeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixAlertTypeDefinitionToHclTerraform(struct?: DataCoralogixAlertTypeDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixAlertTypeDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixAlertTypeDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixAlertTypeDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow - computed: true, optional: false, required: false
  private _flow = new DataCoralogixAlertTypeDefinitionFlowOutputReference(this, "flow");
  public get flow() {
    return this._flow;
  }

  // logs_anomaly - computed: true, optional: false, required: false
  private _logsAnomaly = new DataCoralogixAlertTypeDefinitionLogsAnomalyOutputReference(this, "logs_anomaly");
  public get logsAnomaly() {
    return this._logsAnomaly;
  }

  // logs_immediate - computed: true, optional: false, required: false
  private _logsImmediate = new DataCoralogixAlertTypeDefinitionLogsImmediateOutputReference(this, "logs_immediate");
  public get logsImmediate() {
    return this._logsImmediate;
  }

  // logs_new_value - computed: true, optional: false, required: false
  private _logsNewValue = new DataCoralogixAlertTypeDefinitionLogsNewValueOutputReference(this, "logs_new_value");
  public get logsNewValue() {
    return this._logsNewValue;
  }

  // logs_ratio_threshold - computed: true, optional: false, required: false
  private _logsRatioThreshold = new DataCoralogixAlertTypeDefinitionLogsRatioThresholdOutputReference(this, "logs_ratio_threshold");
  public get logsRatioThreshold() {
    return this._logsRatioThreshold;
  }

  // logs_threshold - computed: true, optional: false, required: false
  private _logsThreshold = new DataCoralogixAlertTypeDefinitionLogsThresholdOutputReference(this, "logs_threshold");
  public get logsThreshold() {
    return this._logsThreshold;
  }

  // logs_time_relative_threshold - computed: true, optional: false, required: false
  private _logsTimeRelativeThreshold = new DataCoralogixAlertTypeDefinitionLogsTimeRelativeThresholdOutputReference(this, "logs_time_relative_threshold");
  public get logsTimeRelativeThreshold() {
    return this._logsTimeRelativeThreshold;
  }

  // logs_unique_count - computed: true, optional: false, required: false
  private _logsUniqueCount = new DataCoralogixAlertTypeDefinitionLogsUniqueCountOutputReference(this, "logs_unique_count");
  public get logsUniqueCount() {
    return this._logsUniqueCount;
  }

  // metric_anomaly - computed: true, optional: false, required: false
  private _metricAnomaly = new DataCoralogixAlertTypeDefinitionMetricAnomalyOutputReference(this, "metric_anomaly");
  public get metricAnomaly() {
    return this._metricAnomaly;
  }

  // metric_threshold - computed: true, optional: false, required: false
  private _metricThreshold = new DataCoralogixAlertTypeDefinitionMetricThresholdOutputReference(this, "metric_threshold");
  public get metricThreshold() {
    return this._metricThreshold;
  }

  // slo_threshold - computed: true, optional: false, required: false
  private _sloThreshold = new DataCoralogixAlertTypeDefinitionSloThresholdOutputReference(this, "slo_threshold");
  public get sloThreshold() {
    return this._sloThreshold;
  }

  // tracing_immediate - computed: true, optional: false, required: false
  private _tracingImmediate = new DataCoralogixAlertTypeDefinitionTracingImmediateOutputReference(this, "tracing_immediate");
  public get tracingImmediate() {
    return this._tracingImmediate;
  }

  // tracing_threshold - computed: true, optional: false, required: false
  private _tracingThreshold = new DataCoralogixAlertTypeDefinitionTracingThresholdOutputReference(this, "tracing_threshold");
  public get tracingThreshold() {
    return this._tracingThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/alert coralogix_alert}
*/
export class DataCoralogixAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixAlert to import
  * @param importFromId The id of the existing DataCoralogixAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.1/docs/data-sources/alert coralogix_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_alert',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.1',
        providerVersionConstraint: '3.0.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
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

  // incidents_settings - computed: true, optional: false, required: false
  private _incidentsSettings = new DataCoralogixAlertIncidentsSettingsOutputReference(this, "incidents_settings");
  public get incidentsSettings() {
    return this._incidentsSettings;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notification_group - computed: true, optional: false, required: false
  private _notificationGroup = new DataCoralogixAlertNotificationGroupOutputReference(this, "notification_group");
  public get notificationGroup() {
    return this._notificationGroup;
  }

  // phantom_mode - computed: true, optional: false, required: false
  public get phantomMode() {
    return this.getBooleanAttribute('phantom_mode');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataCoralogixAlertScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }

  // type_definition - computed: true, optional: false, required: false
  private _typeDefinition = new DataCoralogixAlertTypeDefinitionOutputReference(this, "type_definition");
  public get typeDefinition() {
    return this._typeDefinition;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
