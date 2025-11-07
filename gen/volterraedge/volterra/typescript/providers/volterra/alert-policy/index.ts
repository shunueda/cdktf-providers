// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#annotations AlertPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#description AlertPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#disable AlertPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#id AlertPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#labels AlertPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#name AlertPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#namespace AlertPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * notification_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#notification_parameters AlertPolicy#notification_parameters}
  */
  readonly notificationParameters?: AlertPolicyNotificationParameters;
  /**
  * receivers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#receivers AlertPolicy#receivers}
  */
  readonly receivers: AlertPolicyReceivers[] | cdktf.IResolvable;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#routes AlertPolicy#routes}
  */
  readonly routes: AlertPolicyRoutes[] | cdktf.IResolvable;
}
export interface AlertPolicyNotificationParametersCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#labels AlertPolicy#labels}
  */
  readonly labels?: string[];
}

export function alertPolicyNotificationParametersCustomToTerraform(struct?: AlertPolicyNotificationParametersCustomOutputReference | AlertPolicyNotificationParametersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
  }
}


export function alertPolicyNotificationParametersCustomToHclTerraform(struct?: AlertPolicyNotificationParametersCustomOutputReference | AlertPolicyNotificationParametersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyNotificationParametersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyNotificationParametersCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyNotificationParametersCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface AlertPolicyNotificationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#default AlertPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#group_interval AlertPolicy#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#group_wait AlertPolicy#group_wait}
  */
  readonly groupWait?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#individual AlertPolicy#individual}
  */
  readonly individual?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#repeat_interval AlertPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#ves_io_group AlertPolicy#ves_io_group}
  */
  readonly vesIoGroup?: boolean | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#custom AlertPolicy#custom}
  */
  readonly custom?: AlertPolicyNotificationParametersCustom;
}

export function alertPolicyNotificationParametersToTerraform(struct?: AlertPolicyNotificationParametersOutputReference | AlertPolicyNotificationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    individual: cdktf.booleanToTerraform(struct!.individual),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    ves_io_group: cdktf.booleanToTerraform(struct!.vesIoGroup),
    custom: alertPolicyNotificationParametersCustomToTerraform(struct!.custom),
  }
}


export function alertPolicyNotificationParametersToHclTerraform(struct?: AlertPolicyNotificationParametersOutputReference | AlertPolicyNotificationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    individual: {
      value: cdktf.booleanToHclTerraform(struct!.individual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ves_io_group: {
      value: cdktf.booleanToHclTerraform(struct!.vesIoGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: alertPolicyNotificationParametersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyNotificationParametersCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyNotificationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyNotificationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._individual !== undefined) {
      hasAnyValues = true;
      internalValueResult.individual = this._individual;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._vesIoGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vesIoGroup = this._vesIoGroup;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyNotificationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._individual = undefined;
      this._repeatInterval = undefined;
      this._vesIoGroup = undefined;
      this._custom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._individual = value.individual;
      this._repeatInterval = value.repeatInterval;
      this._vesIoGroup = value.vesIoGroup;
      this._custom.internalValue = value.custom;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // group_interval - computed: false, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: false, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // individual - computed: false, optional: true, required: false
  private _individual?: boolean | cdktf.IResolvable; 
  public get individual() {
    return this.getBooleanAttribute('individual');
  }
  public set individual(value: boolean | cdktf.IResolvable) {
    this._individual = value;
  }
  public resetIndividual() {
    this._individual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualInput() {
    return this._individual;
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

  // ves_io_group - computed: false, optional: true, required: false
  private _vesIoGroup?: boolean | cdktf.IResolvable; 
  public get vesIoGroup() {
    return this.getBooleanAttribute('ves_io_group');
  }
  public set vesIoGroup(value: boolean | cdktf.IResolvable) {
    this._vesIoGroup = value;
  }
  public resetVesIoGroup() {
    this._vesIoGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vesIoGroupInput() {
    return this._vesIoGroup;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AlertPolicyNotificationParametersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AlertPolicyNotificationParametersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}
export interface AlertPolicyReceivers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#name AlertPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#namespace AlertPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#tenant AlertPolicy#tenant}
  */
  readonly tenant?: string;
}

export function alertPolicyReceiversToTerraform(struct?: AlertPolicyReceivers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function alertPolicyReceiversToHclTerraform(struct?: AlertPolicyReceivers | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyReceiversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertPolicyReceivers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyReceivers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AlertPolicyReceiversList extends cdktf.ComplexList {
  public internalValue? : AlertPolicyReceivers[] | cdktf.IResolvable

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
  public get(index: number): AlertPolicyReceiversOutputReference {
    return new AlertPolicyReceiversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertPolicyRoutesCustomAlertlabelValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#exact_match AlertPolicy#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#regex_match AlertPolicy#regex_match}
  */
  readonly regexMatch?: string;
}

export function alertPolicyRoutesCustomAlertlabelValueToTerraform(struct?: AlertPolicyRoutesCustomAlertlabelValueOutputReference | AlertPolicyRoutesCustomAlertlabelValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}


export function alertPolicyRoutesCustomAlertlabelValueToHclTerraform(struct?: AlertPolicyRoutesCustomAlertlabelValueOutputReference | AlertPolicyRoutesCustomAlertlabelValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesCustomAlertlabelValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesCustomAlertlabelValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesCustomAlertlabelValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._regexMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}
export interface AlertPolicyRoutesCustomAlertlabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#name AlertPolicy#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#value AlertPolicy#value}
  */
  readonly value: AlertPolicyRoutesCustomAlertlabelValue;
}

export function alertPolicyRoutesCustomAlertlabelToTerraform(struct?: AlertPolicyRoutesCustomAlertlabelOutputReference | AlertPolicyRoutesCustomAlertlabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: alertPolicyRoutesCustomAlertlabelValueToTerraform(struct!.value),
  }
}


export function alertPolicyRoutesCustomAlertlabelToHclTerraform(struct?: AlertPolicyRoutesCustomAlertlabelOutputReference | AlertPolicyRoutesCustomAlertlabel): any {
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
      value: alertPolicyRoutesCustomAlertlabelValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesCustomAlertlabelValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesCustomAlertlabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesCustomAlertlabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesCustomAlertlabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value = new AlertPolicyRoutesCustomAlertlabelValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertPolicyRoutesCustomAlertlabelValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlertPolicyRoutesCustomAlertname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#exact_match AlertPolicy#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#regex_match AlertPolicy#regex_match}
  */
  readonly regexMatch?: string;
}

export function alertPolicyRoutesCustomAlertnameToTerraform(struct?: AlertPolicyRoutesCustomAlertnameOutputReference | AlertPolicyRoutesCustomAlertname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}


export function alertPolicyRoutesCustomAlertnameToHclTerraform(struct?: AlertPolicyRoutesCustomAlertnameOutputReference | AlertPolicyRoutesCustomAlertname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesCustomAlertnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesCustomAlertname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesCustomAlertname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._regexMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}
export interface AlertPolicyRoutesCustomGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#exact_match AlertPolicy#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#regex_match AlertPolicy#regex_match}
  */
  readonly regexMatch?: string;
}

export function alertPolicyRoutesCustomGroupToTerraform(struct?: AlertPolicyRoutesCustomGroupOutputReference | AlertPolicyRoutesCustomGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}


export function alertPolicyRoutesCustomGroupToHclTerraform(struct?: AlertPolicyRoutesCustomGroupOutputReference | AlertPolicyRoutesCustomGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesCustomGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesCustomGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesCustomGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._regexMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}
export interface AlertPolicyRoutesCustomSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#exact_match AlertPolicy#exact_match}
  */
  readonly exactMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#regex_match AlertPolicy#regex_match}
  */
  readonly regexMatch?: string;
}

export function alertPolicyRoutesCustomSeverityToTerraform(struct?: AlertPolicyRoutesCustomSeverityOutputReference | AlertPolicyRoutesCustomSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_match: cdktf.stringToTerraform(struct!.exactMatch),
    regex_match: cdktf.stringToTerraform(struct!.regexMatch),
  }
}


export function alertPolicyRoutesCustomSeverityToHclTerraform(struct?: AlertPolicyRoutesCustomSeverityOutputReference | AlertPolicyRoutesCustomSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_match: {
      value: cdktf.stringToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match: {
      value: cdktf.stringToHclTerraform(struct!.regexMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesCustomSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesCustomSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._regexMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatch = this._regexMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesCustomSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactMatch = undefined;
      this._regexMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactMatch = value.exactMatch;
      this._regexMatch = value.regexMatch;
    }
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: string; 
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }
  public set exactMatch(value: string) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // regex_match - computed: false, optional: true, required: false
  private _regexMatch?: string; 
  public get regexMatch() {
    return this.getStringAttribute('regex_match');
  }
  public set regexMatch(value: string) {
    this._regexMatch = value;
  }
  public resetRegexMatch() {
    this._regexMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchInput() {
    return this._regexMatch;
  }
}
export interface AlertPolicyRoutesCustom {
  /**
  * alertlabel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#alertlabel AlertPolicy#alertlabel}
  */
  readonly alertlabel?: AlertPolicyRoutesCustomAlertlabel;
  /**
  * alertname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#alertname AlertPolicy#alertname}
  */
  readonly alertname?: AlertPolicyRoutesCustomAlertname;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#group AlertPolicy#group}
  */
  readonly group?: AlertPolicyRoutesCustomGroup;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#severity AlertPolicy#severity}
  */
  readonly severity?: AlertPolicyRoutesCustomSeverity;
}

export function alertPolicyRoutesCustomToTerraform(struct?: AlertPolicyRoutesCustomOutputReference | AlertPolicyRoutesCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alertlabel: alertPolicyRoutesCustomAlertlabelToTerraform(struct!.alertlabel),
    alertname: alertPolicyRoutesCustomAlertnameToTerraform(struct!.alertname),
    group: alertPolicyRoutesCustomGroupToTerraform(struct!.group),
    severity: alertPolicyRoutesCustomSeverityToTerraform(struct!.severity),
  }
}


export function alertPolicyRoutesCustomToHclTerraform(struct?: AlertPolicyRoutesCustomOutputReference | AlertPolicyRoutesCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alertlabel: {
      value: alertPolicyRoutesCustomAlertlabelToHclTerraform(struct!.alertlabel),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesCustomAlertlabelList",
    },
    alertname: {
      value: alertPolicyRoutesCustomAlertnameToHclTerraform(struct!.alertname),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesCustomAlertnameList",
    },
    group: {
      value: alertPolicyRoutesCustomGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesCustomGroupList",
    },
    severity: {
      value: alertPolicyRoutesCustomSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesCustomSeverityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertlabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertlabel = this._alertlabel?.internalValue;
    }
    if (this._alertname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertname = this._alertname?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertlabel.internalValue = undefined;
      this._alertname.internalValue = undefined;
      this._group.internalValue = undefined;
      this._severity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertlabel.internalValue = value.alertlabel;
      this._alertname.internalValue = value.alertname;
      this._group.internalValue = value.group;
      this._severity.internalValue = value.severity;
    }
  }

  // alertlabel - computed: false, optional: true, required: false
  private _alertlabel = new AlertPolicyRoutesCustomAlertlabelOutputReference(this, "alertlabel");
  public get alertlabel() {
    return this._alertlabel;
  }
  public putAlertlabel(value: AlertPolicyRoutesCustomAlertlabel) {
    this._alertlabel.internalValue = value;
  }
  public resetAlertlabel() {
    this._alertlabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertlabelInput() {
    return this._alertlabel.internalValue;
  }

  // alertname - computed: false, optional: true, required: false
  private _alertname = new AlertPolicyRoutesCustomAlertnameOutputReference(this, "alertname");
  public get alertname() {
    return this._alertname;
  }
  public putAlertname(value: AlertPolicyRoutesCustomAlertname) {
    this._alertname.internalValue = value;
  }
  public resetAlertname() {
    this._alertname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertnameInput() {
    return this._alertname.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new AlertPolicyRoutesCustomGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: AlertPolicyRoutesCustomGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new AlertPolicyRoutesCustomSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: AlertPolicyRoutesCustomSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }
}
export interface AlertPolicyRoutesGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#groups AlertPolicy#groups}
  */
  readonly groups?: string[];
}

export function alertPolicyRoutesGroupToTerraform(struct?: AlertPolicyRoutesGroupOutputReference | AlertPolicyRoutesGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
  }
}


export function alertPolicyRoutesGroupToHclTerraform(struct?: AlertPolicyRoutesGroupOutputReference | AlertPolicyRoutesGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}
export interface AlertPolicyRoutesNotificationParametersCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#labels AlertPolicy#labels}
  */
  readonly labels?: string[];
}

export function alertPolicyRoutesNotificationParametersCustomToTerraform(struct?: AlertPolicyRoutesNotificationParametersCustomOutputReference | AlertPolicyRoutesNotificationParametersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
  }
}


export function alertPolicyRoutesNotificationParametersCustomToHclTerraform(struct?: AlertPolicyRoutesNotificationParametersCustomOutputReference | AlertPolicyRoutesNotificationParametersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesNotificationParametersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesNotificationParametersCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesNotificationParametersCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface AlertPolicyRoutesNotificationParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#default AlertPolicy#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#group_interval AlertPolicy#group_interval}
  */
  readonly groupInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#group_wait AlertPolicy#group_wait}
  */
  readonly groupWait?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#individual AlertPolicy#individual}
  */
  readonly individual?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#repeat_interval AlertPolicy#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#ves_io_group AlertPolicy#ves_io_group}
  */
  readonly vesIoGroup?: boolean | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#custom AlertPolicy#custom}
  */
  readonly custom?: AlertPolicyRoutesNotificationParametersCustom;
}

export function alertPolicyRoutesNotificationParametersToTerraform(struct?: AlertPolicyRoutesNotificationParametersOutputReference | AlertPolicyRoutesNotificationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    group_interval: cdktf.stringToTerraform(struct!.groupInterval),
    group_wait: cdktf.stringToTerraform(struct!.groupWait),
    individual: cdktf.booleanToTerraform(struct!.individual),
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    ves_io_group: cdktf.booleanToTerraform(struct!.vesIoGroup),
    custom: alertPolicyRoutesNotificationParametersCustomToTerraform(struct!.custom),
  }
}


export function alertPolicyRoutesNotificationParametersToHclTerraform(struct?: AlertPolicyRoutesNotificationParametersOutputReference | AlertPolicyRoutesNotificationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_interval: {
      value: cdktf.stringToHclTerraform(struct!.groupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_wait: {
      value: cdktf.stringToHclTerraform(struct!.groupWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    individual: {
      value: cdktf.booleanToHclTerraform(struct!.individual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ves_io_group: {
      value: cdktf.booleanToHclTerraform(struct!.vesIoGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: alertPolicyRoutesNotificationParametersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesNotificationParametersCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesNotificationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesNotificationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._groupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupInterval = this._groupInterval;
    }
    if (this._groupWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWait = this._groupWait;
    }
    if (this._individual !== undefined) {
      hasAnyValues = true;
      internalValueResult.individual = this._individual;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._vesIoGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vesIoGroup = this._vesIoGroup;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesNotificationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._groupInterval = undefined;
      this._groupWait = undefined;
      this._individual = undefined;
      this._repeatInterval = undefined;
      this._vesIoGroup = undefined;
      this._custom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._groupInterval = value.groupInterval;
      this._groupWait = value.groupWait;
      this._individual = value.individual;
      this._repeatInterval = value.repeatInterval;
      this._vesIoGroup = value.vesIoGroup;
      this._custom.internalValue = value.custom;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // group_interval - computed: false, optional: true, required: false
  private _groupInterval?: string; 
  public get groupInterval() {
    return this.getStringAttribute('group_interval');
  }
  public set groupInterval(value: string) {
    this._groupInterval = value;
  }
  public resetGroupInterval() {
    this._groupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIntervalInput() {
    return this._groupInterval;
  }

  // group_wait - computed: false, optional: true, required: false
  private _groupWait?: string; 
  public get groupWait() {
    return this.getStringAttribute('group_wait');
  }
  public set groupWait(value: string) {
    this._groupWait = value;
  }
  public resetGroupWait() {
    this._groupWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWaitInput() {
    return this._groupWait;
  }

  // individual - computed: false, optional: true, required: false
  private _individual?: boolean | cdktf.IResolvable; 
  public get individual() {
    return this.getBooleanAttribute('individual');
  }
  public set individual(value: boolean | cdktf.IResolvable) {
    this._individual = value;
  }
  public resetIndividual() {
    this._individual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualInput() {
    return this._individual;
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

  // ves_io_group - computed: false, optional: true, required: false
  private _vesIoGroup?: boolean | cdktf.IResolvable; 
  public get vesIoGroup() {
    return this.getBooleanAttribute('ves_io_group');
  }
  public set vesIoGroup(value: boolean | cdktf.IResolvable) {
    this._vesIoGroup = value;
  }
  public resetVesIoGroup() {
    this._vesIoGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vesIoGroupInput() {
    return this._vesIoGroup;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AlertPolicyRoutesNotificationParametersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AlertPolicyRoutesNotificationParametersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}
export interface AlertPolicyRoutesSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#severities AlertPolicy#severities}
  */
  readonly severities?: string[];
}

export function alertPolicyRoutesSeverityToTerraform(struct?: AlertPolicyRoutesSeverityOutputReference | AlertPolicyRoutesSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
  }
}


export function alertPolicyRoutesSeverityToHclTerraform(struct?: AlertPolicyRoutesSeverityOutputReference | AlertPolicyRoutesSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertPolicyRoutesSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutesSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severities = value.severities;
    }
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }
}
export interface AlertPolicyRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#alertname AlertPolicy#alertname}
  */
  readonly alertname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#alertname_regex AlertPolicy#alertname_regex}
  */
  readonly alertnameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#any AlertPolicy#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#dont_send AlertPolicy#dont_send}
  */
  readonly dontSend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#send AlertPolicy#send}
  */
  readonly send?: boolean | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#custom AlertPolicy#custom}
  */
  readonly custom?: AlertPolicyRoutesCustom;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#group AlertPolicy#group}
  */
  readonly group?: AlertPolicyRoutesGroup;
  /**
  * notification_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#notification_parameters AlertPolicy#notification_parameters}
  */
  readonly notificationParameters?: AlertPolicyRoutesNotificationParameters;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#severity AlertPolicy#severity}
  */
  readonly severity?: AlertPolicyRoutesSeverity;
}

export function alertPolicyRoutesToTerraform(struct?: AlertPolicyRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alertname: cdktf.stringToTerraform(struct!.alertname),
    alertname_regex: cdktf.stringToTerraform(struct!.alertnameRegex),
    any: cdktf.booleanToTerraform(struct!.any),
    dont_send: cdktf.booleanToTerraform(struct!.dontSend),
    send: cdktf.booleanToTerraform(struct!.send),
    custom: alertPolicyRoutesCustomToTerraform(struct!.custom),
    group: alertPolicyRoutesGroupToTerraform(struct!.group),
    notification_parameters: alertPolicyRoutesNotificationParametersToTerraform(struct!.notificationParameters),
    severity: alertPolicyRoutesSeverityToTerraform(struct!.severity),
  }
}


export function alertPolicyRoutesToHclTerraform(struct?: AlertPolicyRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alertname: {
      value: cdktf.stringToHclTerraform(struct!.alertname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alertname_regex: {
      value: cdktf.stringToHclTerraform(struct!.alertnameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dont_send: {
      value: cdktf.booleanToHclTerraform(struct!.dontSend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send: {
      value: cdktf.booleanToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: alertPolicyRoutesCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesCustomList",
    },
    group: {
      value: alertPolicyRoutesGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesGroupList",
    },
    notification_parameters: {
      value: alertPolicyRoutesNotificationParametersToHclTerraform(struct!.notificationParameters),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesNotificationParametersList",
    },
    severity: {
      value: alertPolicyRoutesSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "AlertPolicyRoutesSeverityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertPolicyRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertPolicyRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertname !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertname = this._alertname;
    }
    if (this._alertnameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertnameRegex = this._alertnameRegex;
    }
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._dontSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontSend = this._dontSend;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._notificationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationParameters = this._notificationParameters?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertPolicyRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertname = undefined;
      this._alertnameRegex = undefined;
      this._any = undefined;
      this._dontSend = undefined;
      this._send = undefined;
      this._custom.internalValue = undefined;
      this._group.internalValue = undefined;
      this._notificationParameters.internalValue = undefined;
      this._severity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertname = value.alertname;
      this._alertnameRegex = value.alertnameRegex;
      this._any = value.any;
      this._dontSend = value.dontSend;
      this._send = value.send;
      this._custom.internalValue = value.custom;
      this._group.internalValue = value.group;
      this._notificationParameters.internalValue = value.notificationParameters;
      this._severity.internalValue = value.severity;
    }
  }

  // alertname - computed: false, optional: true, required: false
  private _alertname?: string; 
  public get alertname() {
    return this.getStringAttribute('alertname');
  }
  public set alertname(value: string) {
    this._alertname = value;
  }
  public resetAlertname() {
    this._alertname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertnameInput() {
    return this._alertname;
  }

  // alertname_regex - computed: false, optional: true, required: false
  private _alertnameRegex?: string; 
  public get alertnameRegex() {
    return this.getStringAttribute('alertname_regex');
  }
  public set alertnameRegex(value: string) {
    this._alertnameRegex = value;
  }
  public resetAlertnameRegex() {
    this._alertnameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertnameRegexInput() {
    return this._alertnameRegex;
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // dont_send - computed: false, optional: true, required: false
  private _dontSend?: boolean | cdktf.IResolvable; 
  public get dontSend() {
    return this.getBooleanAttribute('dont_send');
  }
  public set dontSend(value: boolean | cdktf.IResolvable) {
    this._dontSend = value;
  }
  public resetDontSend() {
    this._dontSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontSendInput() {
    return this._dontSend;
  }

  // send - computed: false, optional: true, required: false
  private _send?: boolean | cdktf.IResolvable; 
  public get send() {
    return this.getBooleanAttribute('send');
  }
  public set send(value: boolean | cdktf.IResolvable) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AlertPolicyRoutesCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AlertPolicyRoutesCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // group - computed: false, optional: true, required: false
  private _group = new AlertPolicyRoutesGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: AlertPolicyRoutesGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // notification_parameters - computed: false, optional: true, required: false
  private _notificationParameters = new AlertPolicyRoutesNotificationParametersOutputReference(this, "notification_parameters");
  public get notificationParameters() {
    return this._notificationParameters;
  }
  public putNotificationParameters(value: AlertPolicyRoutesNotificationParameters) {
    this._notificationParameters.internalValue = value;
  }
  public resetNotificationParameters() {
    this._notificationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationParametersInput() {
    return this._notificationParameters.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new AlertPolicyRoutesSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: AlertPolicyRoutesSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }
}

export class AlertPolicyRoutesList extends cdktf.ComplexList {
  public internalValue? : AlertPolicyRoutes[] | cdktf.IResolvable

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
  public get(index: number): AlertPolicyRoutesOutputReference {
    return new AlertPolicyRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy volterra_alert_policy}
*/
export class AlertPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_alert_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertPolicy to import
  * @param importFromId The id of the existing AlertPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_alert_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_policy volterra_alert_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AlertPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_alert_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._notificationParameters.internalValue = config.notificationParameters;
    this._receivers.internalValue = config.receivers;
    this._routes.internalValue = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // notification_parameters - computed: false, optional: true, required: false
  private _notificationParameters = new AlertPolicyNotificationParametersOutputReference(this, "notification_parameters");
  public get notificationParameters() {
    return this._notificationParameters;
  }
  public putNotificationParameters(value: AlertPolicyNotificationParameters) {
    this._notificationParameters.internalValue = value;
  }
  public resetNotificationParameters() {
    this._notificationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationParametersInput() {
    return this._notificationParameters.internalValue;
  }

  // receivers - computed: false, optional: false, required: true
  private _receivers = new AlertPolicyReceiversList(this, "receivers", false);
  public get receivers() {
    return this._receivers;
  }
  public putReceivers(value: AlertPolicyReceivers[] | cdktf.IResolvable) {
    this._receivers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers.internalValue;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new AlertPolicyRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: AlertPolicyRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      notification_parameters: alertPolicyNotificationParametersToTerraform(this._notificationParameters.internalValue),
      receivers: cdktf.listMapper(alertPolicyReceiversToTerraform, true)(this._receivers.internalValue),
      routes: cdktf.listMapper(alertPolicyRoutesToTerraform, true)(this._routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_parameters: {
        value: alertPolicyNotificationParametersToHclTerraform(this._notificationParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertPolicyNotificationParametersList",
      },
      receivers: {
        value: cdktf.listMapperHcl(alertPolicyReceiversToHclTerraform, true)(this._receivers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertPolicyReceiversList",
      },
      routes: {
        value: cdktf.listMapperHcl(alertPolicyRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertPolicyRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
