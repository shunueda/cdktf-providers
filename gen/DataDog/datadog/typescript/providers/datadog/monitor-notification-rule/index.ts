// https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the monitor notification rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#name MonitorNotificationRule#name}
  */
  readonly name: string;
  /**
  * List of recipients to notify. Cannot be used with `conditional_recipients`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}
  */
  readonly recipients?: string[];
  /**
  * conditional_recipients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#conditional_recipients MonitorNotificationRule#conditional_recipients}
  */
  readonly conditionalRecipients?: MonitorNotificationRuleConditionalRecipients;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#filter MonitorNotificationRule#filter}
  */
  readonly filter?: MonitorNotificationRuleFilter;
}
export interface MonitorNotificationRuleConditionalRecipientsConditions {
  /**
  * List of recipients to notify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}
  */
  readonly recipients: string[];
  /**
  * The scope to which the monitor applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}
  */
  readonly scope: string;
}

export function monitorNotificationRuleConditionalRecipientsConditionsToTerraform(struct?: MonitorNotificationRuleConditionalRecipientsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function monitorNotificationRuleConditionalRecipientsConditionsToHclTerraform(struct?: MonitorNotificationRuleConditionalRecipientsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorNotificationRuleConditionalRecipientsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorNotificationRuleConditionalRecipientsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorNotificationRuleConditionalRecipientsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recipients = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recipients = value.recipients;
      this._scope = value.scope;
    }
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class MonitorNotificationRuleConditionalRecipientsConditionsList extends cdktf.ComplexList {
  public internalValue? : MonitorNotificationRuleConditionalRecipientsConditions[] | cdktf.IResolvable

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
  public get(index: number): MonitorNotificationRuleConditionalRecipientsConditionsOutputReference {
    return new MonitorNotificationRuleConditionalRecipientsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorNotificationRuleConditionalRecipients {
  /**
  * If none of the `conditions` applied, `fallback_recipients` will get notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#fallback_recipients MonitorNotificationRule#fallback_recipients}
  */
  readonly fallbackRecipients?: string[];
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#conditions MonitorNotificationRule#conditions}
  */
  readonly conditions?: MonitorNotificationRuleConditionalRecipientsConditions[] | cdktf.IResolvable;
}

export function monitorNotificationRuleConditionalRecipientsToTerraform(struct?: MonitorNotificationRuleConditionalRecipients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fallbackRecipients),
    conditions: cdktf.listMapper(monitorNotificationRuleConditionalRecipientsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function monitorNotificationRuleConditionalRecipientsToHclTerraform(struct?: MonitorNotificationRuleConditionalRecipients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fallbackRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    conditions: {
      value: cdktf.listMapperHcl(monitorNotificationRuleConditionalRecipientsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "MonitorNotificationRuleConditionalRecipientsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorNotificationRuleConditionalRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorNotificationRuleConditionalRecipients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRecipients = this._fallbackRecipients;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorNotificationRuleConditionalRecipients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackRecipients = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackRecipients = value.fallbackRecipients;
      this._conditions.internalValue = value.conditions;
    }
  }

  // fallback_recipients - computed: false, optional: true, required: false
  private _fallbackRecipients?: string[]; 
  public get fallbackRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('fallback_recipients'));
  }
  public set fallbackRecipients(value: string[]) {
    this._fallbackRecipients = value;
  }
  public resetFallbackRecipients() {
    this._fallbackRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRecipientsInput() {
    return this._fallbackRecipients;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new MonitorNotificationRuleConditionalRecipientsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: MonitorNotificationRuleConditionalRecipientsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface MonitorNotificationRuleFilter {
  /**
  * The scope to which the monitor applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}
  */
  readonly scope?: string;
  /**
  * All tags that target monitors must match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#tags MonitorNotificationRule#tags}
  */
  readonly tags?: string[];
}

export function monitorNotificationRuleFilterToTerraform(struct?: MonitorNotificationRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function monitorNotificationRuleFilterToHclTerraform(struct?: MonitorNotificationRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorNotificationRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MonitorNotificationRuleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorNotificationRuleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tags = value.tags;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule datadog_monitor_notification_rule}
*/
export class MonitorNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_monitor_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorNotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorNotificationRule to import
  * @param importFromId The id of the existing MonitorNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "datadog_monitor_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.83.0/docs/resources/monitor_notification_rule datadog_monitor_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_monitor_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.83.0',
        providerVersionConstraint: '3.83.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._recipients = config.recipients;
    this._conditionalRecipients.internalValue = config.conditionalRecipients;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // conditional_recipients - computed: false, optional: true, required: false
  private _conditionalRecipients = new MonitorNotificationRuleConditionalRecipientsOutputReference(this, "conditional_recipients");
  public get conditionalRecipients() {
    return this._conditionalRecipients;
  }
  public putConditionalRecipients(value: MonitorNotificationRuleConditionalRecipients) {
    this._conditionalRecipients.internalValue = value;
  }
  public resetConditionalRecipients() {
    this._conditionalRecipients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalRecipientsInput() {
    return this._conditionalRecipients.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new MonitorNotificationRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MonitorNotificationRuleFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recipients),
      conditional_recipients: monitorNotificationRuleConditionalRecipientsToTerraform(this._conditionalRecipients.internalValue),
      filter: monitorNotificationRuleFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recipients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recipients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      conditional_recipients: {
        value: monitorNotificationRuleConditionalRecipientsToHclTerraform(this._conditionalRecipients.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorNotificationRuleConditionalRecipients",
      },
      filter: {
        value: monitorNotificationRuleFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MonitorNotificationRuleFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
