// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationCenterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#description NotificationCenter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#id NotificationCenter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#is_active NotificationCenter#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#name NotificationCenter#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#privacy_level NotificationCenter#privacy_level}
  */
  readonly privacyLevel: string;
  /**
  * compute_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#compute_policy_config NotificationCenter#compute_policy_config}
  */
  readonly computePolicyConfig: NotificationCenterComputePolicyConfig;
  /**
  * registered_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#registered_users NotificationCenter#registered_users}
  */
  readonly registeredUsers?: NotificationCenterRegisteredUsers[] | cdktf.IResolvable;
  /**
  * subscriptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#subscriptions NotificationCenter#subscriptions}
  */
  readonly subscriptions?: NotificationCenterSubscriptions[] | cdktf.IResolvable;
}
export interface NotificationCenterComputePolicyConfigDynamicRulesFilterConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#expression NotificationCenter#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#identifier NotificationCenter#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#operator NotificationCenter#operator}
  */
  readonly operator?: string;
}

export function notificationCenterComputePolicyConfigDynamicRulesFilterConditionsToTerraform(struct?: NotificationCenterComputePolicyConfigDynamicRulesFilterConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function notificationCenterComputePolicyConfigDynamicRulesFilterConditionsToHclTerraform(struct?: NotificationCenterComputePolicyConfigDynamicRulesFilterConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationCenterComputePolicyConfigDynamicRulesFilterConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterComputePolicyConfigDynamicRulesFilterConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._identifier = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._identifier = value.identifier;
      this._operator = value.operator;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList extends cdktf.ComplexList {
  public internalValue? : NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[] | cdktf.IResolvable

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
  public get(index: number): NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference {
    return new NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationCenterComputePolicyConfigDynamicRules {
  /**
  * filter_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#filter_conditions NotificationCenter#filter_conditions}
  */
  readonly filterConditions?: NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[] | cdktf.IResolvable;
}

export function notificationCenterComputePolicyConfigDynamicRulesToTerraform(struct?: NotificationCenterComputePolicyConfigDynamicRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_conditions: cdktf.listMapper(notificationCenterComputePolicyConfigDynamicRulesFilterConditionsToTerraform, true)(struct!.filterConditions),
  }
}


export function notificationCenterComputePolicyConfigDynamicRulesToHclTerraform(struct?: NotificationCenterComputePolicyConfigDynamicRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_conditions: {
      value: cdktf.listMapperHcl(notificationCenterComputePolicyConfigDynamicRulesFilterConditionsToHclTerraform, true)(struct!.filterConditions),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterComputePolicyConfigDynamicRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationCenterComputePolicyConfigDynamicRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConditions = this._filterConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterComputePolicyConfigDynamicRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConditions.internalValue = value.filterConditions;
    }
  }

  // filter_conditions - computed: false, optional: true, required: false
  private _filterConditions = new NotificationCenterComputePolicyConfigDynamicRulesFilterConditionsList(this, "filter_conditions", false);
  public get filterConditions() {
    return this._filterConditions;
  }
  public putFilterConditions(value: NotificationCenterComputePolicyConfigDynamicRulesFilterConditions[] | cdktf.IResolvable) {
    this._filterConditions.internalValue = value;
  }
  public resetFilterConditions() {
    this._filterConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConditionsInput() {
    return this._filterConditions.internalValue;
  }
}

export class NotificationCenterComputePolicyConfigDynamicRulesList extends cdktf.ComplexList {
  public internalValue? : NotificationCenterComputePolicyConfigDynamicRules[] | cdktf.IResolvable

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
  public get(index: number): NotificationCenterComputePolicyConfigDynamicRulesOutputReference {
    return new NotificationCenterComputePolicyConfigDynamicRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationCenterComputePolicyConfigEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#event NotificationCenter#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#event_type NotificationCenter#event_type}
  */
  readonly eventType?: string;
}

export function notificationCenterComputePolicyConfigEventsToTerraform(struct?: NotificationCenterComputePolicyConfigEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    event_type: cdktf.stringToTerraform(struct!.eventType),
  }
}


export function notificationCenterComputePolicyConfigEventsToHclTerraform(struct?: NotificationCenterComputePolicyConfigEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterComputePolicyConfigEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationCenterComputePolicyConfigEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterComputePolicyConfigEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._eventType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._eventType = value.eventType;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }
}

export class NotificationCenterComputePolicyConfigEventsList extends cdktf.ComplexList {
  public internalValue? : NotificationCenterComputePolicyConfigEvents[] | cdktf.IResolvable

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
  public get(index: number): NotificationCenterComputePolicyConfigEventsOutputReference {
    return new NotificationCenterComputePolicyConfigEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationCenterComputePolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#resource_ids NotificationCenter#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#should_include_all_resources NotificationCenter#should_include_all_resources}
  */
  readonly shouldIncludeAllResources?: boolean | cdktf.IResolvable;
  /**
  * dynamic_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#dynamic_rules NotificationCenter#dynamic_rules}
  */
  readonly dynamicRules?: NotificationCenterComputePolicyConfigDynamicRules[] | cdktf.IResolvable;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#events NotificationCenter#events}
  */
  readonly events: NotificationCenterComputePolicyConfigEvents[] | cdktf.IResolvable;
}

export function notificationCenterComputePolicyConfigToTerraform(struct?: NotificationCenterComputePolicyConfigOutputReference | NotificationCenterComputePolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    should_include_all_resources: cdktf.booleanToTerraform(struct!.shouldIncludeAllResources),
    dynamic_rules: cdktf.listMapper(notificationCenterComputePolicyConfigDynamicRulesToTerraform, true)(struct!.dynamicRules),
    events: cdktf.listMapper(notificationCenterComputePolicyConfigEventsToTerraform, true)(struct!.events),
  }
}


export function notificationCenterComputePolicyConfigToHclTerraform(struct?: NotificationCenterComputePolicyConfigOutputReference | NotificationCenterComputePolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    should_include_all_resources: {
      value: cdktf.booleanToHclTerraform(struct!.shouldIncludeAllResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_rules: {
      value: cdktf.listMapperHcl(notificationCenterComputePolicyConfigDynamicRulesToHclTerraform, true)(struct!.dynamicRules),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationCenterComputePolicyConfigDynamicRulesList",
    },
    events: {
      value: cdktf.listMapperHcl(notificationCenterComputePolicyConfigEventsToHclTerraform, true)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationCenterComputePolicyConfigEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterComputePolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationCenterComputePolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._shouldIncludeAllResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldIncludeAllResources = this._shouldIncludeAllResources;
    }
    if (this._dynamicRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicRules = this._dynamicRules?.internalValue;
    }
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterComputePolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceIds = undefined;
      this._shouldIncludeAllResources = undefined;
      this._dynamicRules.internalValue = undefined;
      this._events.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceIds = value.resourceIds;
      this._shouldIncludeAllResources = value.shouldIncludeAllResources;
      this._dynamicRules.internalValue = value.dynamicRules;
      this._events.internalValue = value.events;
    }
  }

  // resource_ids - computed: false, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // should_include_all_resources - computed: false, optional: true, required: false
  private _shouldIncludeAllResources?: boolean | cdktf.IResolvable; 
  public get shouldIncludeAllResources() {
    return this.getBooleanAttribute('should_include_all_resources');
  }
  public set shouldIncludeAllResources(value: boolean | cdktf.IResolvable) {
    this._shouldIncludeAllResources = value;
  }
  public resetShouldIncludeAllResources() {
    this._shouldIncludeAllResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIncludeAllResourcesInput() {
    return this._shouldIncludeAllResources;
  }

  // dynamic_rules - computed: false, optional: true, required: false
  private _dynamicRules = new NotificationCenterComputePolicyConfigDynamicRulesList(this, "dynamic_rules", false);
  public get dynamicRules() {
    return this._dynamicRules;
  }
  public putDynamicRules(value: NotificationCenterComputePolicyConfigDynamicRules[] | cdktf.IResolvable) {
    this._dynamicRules.internalValue = value;
  }
  public resetDynamicRules() {
    this._dynamicRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicRulesInput() {
    return this._dynamicRules.internalValue;
  }

  // events - computed: false, optional: false, required: true
  private _events = new NotificationCenterComputePolicyConfigEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: NotificationCenterComputePolicyConfigEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }
}
export interface NotificationCenterRegisteredUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#subscription_types NotificationCenter#subscription_types}
  */
  readonly subscriptionTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#user_email NotificationCenter#user_email}
  */
  readonly userEmail?: string;
}

export function notificationCenterRegisteredUsersToTerraform(struct?: NotificationCenterRegisteredUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subscription_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subscriptionTypes),
    user_email: cdktf.stringToTerraform(struct!.userEmail),
  }
}


export function notificationCenterRegisteredUsersToHclTerraform(struct?: NotificationCenterRegisteredUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subscription_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subscriptionTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_email: {
      value: cdktf.stringToHclTerraform(struct!.userEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterRegisteredUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationCenterRegisteredUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subscriptionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionTypes = this._subscriptionTypes;
    }
    if (this._userEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEmail = this._userEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterRegisteredUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subscriptionTypes = undefined;
      this._userEmail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subscriptionTypes = value.subscriptionTypes;
      this._userEmail = value.userEmail;
    }
  }

  // subscription_types - computed: false, optional: true, required: false
  private _subscriptionTypes?: string[]; 
  public get subscriptionTypes() {
    return this.getListAttribute('subscription_types');
  }
  public set subscriptionTypes(value: string[]) {
    this._subscriptionTypes = value;
  }
  public resetSubscriptionTypes() {
    this._subscriptionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypesInput() {
    return this._subscriptionTypes;
  }

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }
}

export class NotificationCenterRegisteredUsersList extends cdktf.ComplexList {
  public internalValue? : NotificationCenterRegisteredUsers[] | cdktf.IResolvable

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
  public get(index: number): NotificationCenterRegisteredUsersOutputReference {
    return new NotificationCenterRegisteredUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationCenterSubscriptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#endpoint NotificationCenter#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#subscription_type NotificationCenter#subscription_type}
  */
  readonly subscriptionType?: string;
}

export function notificationCenterSubscriptionsToTerraform(struct?: NotificationCenterSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    subscription_type: cdktf.stringToTerraform(struct!.subscriptionType),
  }
}


export function notificationCenterSubscriptionsToHclTerraform(struct?: NotificationCenterSubscriptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_type: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationCenterSubscriptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationCenterSubscriptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._subscriptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionType = this._subscriptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationCenterSubscriptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._subscriptionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._subscriptionType = value.subscriptionType;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // subscription_type - computed: false, optional: true, required: false
  private _subscriptionType?: string; 
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }
  public set subscriptionType(value: string) {
    this._subscriptionType = value;
  }
  public resetSubscriptionType() {
    this._subscriptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTypeInput() {
    return this._subscriptionType;
  }
}

export class NotificationCenterSubscriptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationCenterSubscriptions[] | cdktf.IResolvable

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
  public get(index: number): NotificationCenterSubscriptionsOutputReference {
    return new NotificationCenterSubscriptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center spotinst_notification_center}
*/
export class NotificationCenter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_notification_center";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationCenter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationCenter to import
  * @param importFromId The id of the existing NotificationCenter that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationCenter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_notification_center", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/notification_center spotinst_notification_center} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationCenterConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationCenterConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_notification_center',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
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
    this._isActive = config.isActive;
    this._name = config.name;
    this._privacyLevel = config.privacyLevel;
    this._computePolicyConfig.internalValue = config.computePolicyConfig;
    this._registeredUsers.internalValue = config.registeredUsers;
    this._subscriptions.internalValue = config.subscriptions;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // privacy_level - computed: false, optional: false, required: true
  private _privacyLevel?: string; 
  public get privacyLevel() {
    return this.getStringAttribute('privacy_level');
  }
  public set privacyLevel(value: string) {
    this._privacyLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLevelInput() {
    return this._privacyLevel;
  }

  // compute_policy_config - computed: false, optional: false, required: true
  private _computePolicyConfig = new NotificationCenterComputePolicyConfigOutputReference(this, "compute_policy_config");
  public get computePolicyConfig() {
    return this._computePolicyConfig;
  }
  public putComputePolicyConfig(value: NotificationCenterComputePolicyConfig) {
    this._computePolicyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computePolicyConfigInput() {
    return this._computePolicyConfig.internalValue;
  }

  // registered_users - computed: false, optional: true, required: false
  private _registeredUsers = new NotificationCenterRegisteredUsersList(this, "registered_users", true);
  public get registeredUsers() {
    return this._registeredUsers;
  }
  public putRegisteredUsers(value: NotificationCenterRegisteredUsers[] | cdktf.IResolvable) {
    this._registeredUsers.internalValue = value;
  }
  public resetRegisteredUsers() {
    this._registeredUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredUsersInput() {
    return this._registeredUsers.internalValue;
  }

  // subscriptions - computed: false, optional: true, required: false
  private _subscriptions = new NotificationCenterSubscriptionsList(this, "subscriptions", false);
  public get subscriptions() {
    return this._subscriptions;
  }
  public putSubscriptions(value: NotificationCenterSubscriptions[] | cdktf.IResolvable) {
    this._subscriptions.internalValue = value;
  }
  public resetSubscriptions() {
    this._subscriptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsInput() {
    return this._subscriptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      privacy_level: cdktf.stringToTerraform(this._privacyLevel),
      compute_policy_config: notificationCenterComputePolicyConfigToTerraform(this._computePolicyConfig.internalValue),
      registered_users: cdktf.listMapper(notificationCenterRegisteredUsersToTerraform, true)(this._registeredUsers.internalValue),
      subscriptions: cdktf.listMapper(notificationCenterSubscriptionsToTerraform, true)(this._subscriptions.internalValue),
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
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_level: {
        value: cdktf.stringToHclTerraform(this._privacyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_policy_config: {
        value: notificationCenterComputePolicyConfigToHclTerraform(this._computePolicyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationCenterComputePolicyConfigList",
      },
      registered_users: {
        value: cdktf.listMapperHcl(notificationCenterRegisteredUsersToHclTerraform, true)(this._registeredUsers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationCenterRegisteredUsersList",
      },
      subscriptions: {
        value: cdktf.listMapperHcl(notificationCenterSubscriptionsToHclTerraform, true)(this._subscriptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationCenterSubscriptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
