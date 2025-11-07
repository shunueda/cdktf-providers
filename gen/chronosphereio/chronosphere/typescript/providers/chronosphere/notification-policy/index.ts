// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#id NotificationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#name NotificationPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#notification_policy_data NotificationPolicy#notification_policy_data}
  */
  readonly notificationPolicyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#slug NotificationPolicy#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#team_id NotificationPolicy#team_id}
  */
  readonly teamId?: string;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#override NotificationPolicy#override}
  */
  readonly override?: NotificationPolicyOverride[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#route NotificationPolicy#route}
  */
  readonly route?: NotificationPolicyRoute[] | cdktf.IResolvable;
}
export interface NotificationPolicyOverrideAlertLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#name NotificationPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#value NotificationPolicy#value}
  */
  readonly value: string;
}

export function notificationPolicyOverrideAlertLabelMatcherToTerraform(struct?: NotificationPolicyOverrideAlertLabelMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationPolicyOverrideAlertLabelMatcherToHclTerraform(struct?: NotificationPolicyOverrideAlertLabelMatcher | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class NotificationPolicyOverrideAlertLabelMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyOverrideAlertLabelMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyOverrideAlertLabelMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
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
      this._type = value.type;
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

export class NotificationPolicyOverrideAlertLabelMatcherList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyOverrideAlertLabelMatcher[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyOverrideAlertLabelMatcherOutputReference {
    return new NotificationPolicyOverrideAlertLabelMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyOverrideRouteGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#label_names NotificationPolicy#label_names}
  */
  readonly labelNames?: string[];
}

export function notificationPolicyOverrideRouteGroupByToTerraform(struct?: NotificationPolicyOverrideRouteGroupByOutputReference | NotificationPolicyOverrideRouteGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelNames),
  }
}


export function notificationPolicyOverrideRouteGroupByToHclTerraform(struct?: NotificationPolicyOverrideRouteGroupByOutputReference | NotificationPolicyOverrideRouteGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyOverrideRouteGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyOverrideRouteGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNames = this._labelNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyOverrideRouteGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelNames = value.labelNames;
    }
  }

  // label_names - computed: false, optional: true, required: false
  private _labelNames?: string[]; 
  public get labelNames() {
    return this.getListAttribute('label_names');
  }
  public set labelNames(value: string[]) {
    this._labelNames = value;
  }
  public resetLabelNames() {
    this._labelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNamesInput() {
    return this._labelNames;
  }
}
export interface NotificationPolicyOverrideRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#notifiers NotificationPolicy#notifiers}
  */
  readonly notifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#repeat_interval NotificationPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#severity NotificationPolicy#severity}
  */
  readonly severity: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: NotificationPolicyOverrideRouteGroupBy;
}

export function notificationPolicyOverrideRouteToTerraform(struct?: NotificationPolicyOverrideRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifiers),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    severity: cdktf.stringToTerraform(struct!.severity),
    group_by: notificationPolicyOverrideRouteGroupByToTerraform(struct!.groupBy),
  }
}


export function notificationPolicyOverrideRouteToHclTerraform(struct?: NotificationPolicyOverrideRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
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
    group_by: {
      value: notificationPolicyOverrideRouteGroupByToHclTerraform(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyOverrideRouteGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyOverrideRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyOverrideRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifiers = this._notifiers;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyOverrideRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifiers = undefined;
      this._repeatInterval = undefined;
      this._severity = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifiers = value.notifiers;
      this._repeatInterval = value.repeatInterval;
      this._severity = value.severity;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // notifiers - computed: false, optional: true, required: false
  private _notifiers?: string[]; 
  public get notifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('notifiers'));
  }
  public set notifiers(value: string[]) {
    this._notifiers = value;
  }
  public resetNotifiers() {
    this._notifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifiersInput() {
    return this._notifiers;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new NotificationPolicyOverrideRouteGroupByOutputReference(this, "group_by");
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: NotificationPolicyOverrideRouteGroupBy) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class NotificationPolicyOverrideRouteList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyOverrideRoute[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyOverrideRouteOutputReference {
    return new NotificationPolicyOverrideRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyOverride {
  /**
  * alert_label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#alert_label_matcher NotificationPolicy#alert_label_matcher}
  */
  readonly alertLabelMatcher: NotificationPolicyOverrideAlertLabelMatcher[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#route NotificationPolicy#route}
  */
  readonly route?: NotificationPolicyOverrideRoute[] | cdktf.IResolvable;
}

export function notificationPolicyOverrideToTerraform(struct?: NotificationPolicyOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_label_matcher: cdktf.listMapper(notificationPolicyOverrideAlertLabelMatcherToTerraform, true)(struct!.alertLabelMatcher),
    route: cdktf.listMapper(notificationPolicyOverrideRouteToTerraform, true)(struct!.route),
  }
}


export function notificationPolicyOverrideToHclTerraform(struct?: NotificationPolicyOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_label_matcher: {
      value: cdktf.listMapperHcl(notificationPolicyOverrideAlertLabelMatcherToHclTerraform, true)(struct!.alertLabelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyOverrideAlertLabelMatcherList",
    },
    route: {
      value: cdktf.listMapperHcl(notificationPolicyOverrideRouteToHclTerraform, true)(struct!.route),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPolicyOverrideRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertLabelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertLabelMatcher = this._alertLabelMatcher?.internalValue;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertLabelMatcher.internalValue = undefined;
      this._route.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertLabelMatcher.internalValue = value.alertLabelMatcher;
      this._route.internalValue = value.route;
    }
  }

  // alert_label_matcher - computed: false, optional: false, required: true
  private _alertLabelMatcher = new NotificationPolicyOverrideAlertLabelMatcherList(this, "alert_label_matcher", false);
  public get alertLabelMatcher() {
    return this._alertLabelMatcher;
  }
  public putAlertLabelMatcher(value: NotificationPolicyOverrideAlertLabelMatcher[] | cdktf.IResolvable) {
    this._alertLabelMatcher.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertLabelMatcherInput() {
    return this._alertLabelMatcher.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new NotificationPolicyOverrideRouteList(this, "route", true);
  public get route() {
    return this._route;
  }
  public putRoute(value: NotificationPolicyOverrideRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}

export class NotificationPolicyOverrideList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyOverride[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyOverrideOutputReference {
    return new NotificationPolicyOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPolicyRouteGroupBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#label_names NotificationPolicy#label_names}
  */
  readonly labelNames?: string[];
}

export function notificationPolicyRouteGroupByToTerraform(struct?: NotificationPolicyRouteGroupByOutputReference | NotificationPolicyRouteGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelNames),
  }
}


export function notificationPolicyRouteGroupByToHclTerraform(struct?: NotificationPolicyRouteGroupByOutputReference | NotificationPolicyRouteGroupBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyRouteGroupByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationPolicyRouteGroupBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNames = this._labelNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyRouteGroupBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelNames = value.labelNames;
    }
  }

  // label_names - computed: false, optional: true, required: false
  private _labelNames?: string[]; 
  public get labelNames() {
    return this.getListAttribute('label_names');
  }
  public set labelNames(value: string[]) {
    this._labelNames = value;
  }
  public resetLabelNames() {
    this._labelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNamesInput() {
    return this._labelNames;
  }
}
export interface NotificationPolicyRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#notifiers NotificationPolicy#notifiers}
  */
  readonly notifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#repeat_interval NotificationPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#severity NotificationPolicy#severity}
  */
  readonly severity: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#group_by NotificationPolicy#group_by}
  */
  readonly groupBy?: NotificationPolicyRouteGroupBy;
}

export function notificationPolicyRouteToTerraform(struct?: NotificationPolicyRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifiers),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    severity: cdktf.stringToTerraform(struct!.severity),
    group_by: notificationPolicyRouteGroupByToTerraform(struct!.groupBy),
  }
}


export function notificationPolicyRouteToHclTerraform(struct?: NotificationPolicyRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
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
    group_by: {
      value: notificationPolicyRouteGroupByToHclTerraform(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPolicyRouteGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifiers = this._notifiers;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifiers = undefined;
      this._repeatInterval = undefined;
      this._severity = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifiers = value.notifiers;
      this._repeatInterval = value.repeatInterval;
      this._severity = value.severity;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // notifiers - computed: false, optional: true, required: false
  private _notifiers?: string[]; 
  public get notifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('notifiers'));
  }
  public set notifiers(value: string[]) {
    this._notifiers = value;
  }
  public resetNotifiers() {
    this._notifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifiersInput() {
    return this._notifiers;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new NotificationPolicyRouteGroupByOutputReference(this, "group_by");
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: NotificationPolicyRouteGroupBy) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class NotificationPolicyRouteList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyRoute[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyRouteOutputReference {
    return new NotificationPolicyRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy chronosphere_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPolicy to import
  * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/notification_policy chronosphere_notification_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_notification_policy',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
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
    this._notificationPolicyData = config.notificationPolicyData;
    this._slug = config.slug;
    this._teamId = config.teamId;
    this._override.internalValue = config.override;
    this._route.internalValue = config.route;
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

  // is_independent - computed: true, optional: false, required: false
  public get isIndependent() {
    return this.getBooleanAttribute('is_independent');
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

  // notification_policy_data - computed: true, optional: true, required: false
  private _notificationPolicyData?: string; 
  public get notificationPolicyData() {
    return this.getStringAttribute('notification_policy_data');
  }
  public set notificationPolicyData(value: string) {
    this._notificationPolicyData = value;
  }
  public resetNotificationPolicyData() {
    this._notificationPolicyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPolicyDataInput() {
    return this._notificationPolicyData;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // override - computed: false, optional: true, required: false
  private _override = new NotificationPolicyOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: NotificationPolicyOverride[] | cdktf.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new NotificationPolicyRouteList(this, "route", true);
  public get route() {
    return this._route;
  }
  public putRoute(value: NotificationPolicyRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_policy_data: cdktf.stringToTerraform(this._notificationPolicyData),
      slug: cdktf.stringToTerraform(this._slug),
      team_id: cdktf.stringToTerraform(this._teamId),
      override: cdktf.listMapper(notificationPolicyOverrideToTerraform, true)(this._override.internalValue),
      route: cdktf.listMapper(notificationPolicyRouteToTerraform, true)(this._route.internalValue),
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
      notification_policy_data: {
        value: cdktf.stringToHclTerraform(this._notificationPolicyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.listMapperHcl(notificationPolicyOverrideToHclTerraform, true)(this._override.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationPolicyOverrideList",
      },
      route: {
        value: cdktf.listMapperHcl(notificationPolicyRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationPolicyRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
