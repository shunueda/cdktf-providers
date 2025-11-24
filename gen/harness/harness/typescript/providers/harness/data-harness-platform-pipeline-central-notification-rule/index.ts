// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformPipelineCentralNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#id DataHarnessPlatformPipelineCentralNotificationRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the Notification Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#identifier DataHarnessPlatformPipelineCentralNotificationRule#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#name DataHarnessPlatformPipelineCentralNotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#notification_channel_refs DataHarnessPlatformPipelineCentralNotificationRule#notification_channel_refs}
  */
  readonly notificationChannelRefs?: string[];
  /**
  * Identifier of the organization in which the Notification Rule is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#org DataHarnessPlatformPipelineCentralNotificationRule#org}
  */
  readonly org?: string;
  /**
  * Identifier of the project in which the Notification Rule is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#project DataHarnessPlatformPipelineCentralNotificationRule#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#status DataHarnessPlatformPipelineCentralNotificationRule#status}
  */
  readonly status?: string;
  /**
  * custom_notification_template_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#custom_notification_template_ref DataHarnessPlatformPipelineCentralNotificationRule#custom_notification_template_ref}
  */
  readonly customNotificationTemplateRef?: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef;
  /**
  * notification_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#notification_conditions DataHarnessPlatformPipelineCentralNotificationRule#notification_conditions}
  */
  readonly notificationConditions?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#name DataHarnessPlatformPipelineCentralNotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#type DataHarnessPlatformPipelineCentralNotificationRule#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#value DataHarnessPlatformPipelineCentralNotificationRule#value}
  */
  readonly value: string;
}

export function dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesToTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables | cdktf.IResolvable): any {
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


export function dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesToHclTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables | cdktf.IResolvable): any {
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

export class DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables | cdktf.IResolvable | undefined) {
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

export class DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesOutputReference {
    return new DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#template_ref DataHarnessPlatformPipelineCentralNotificationRule#template_ref}
  */
  readonly templateRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#version_label DataHarnessPlatformPipelineCentralNotificationRule#version_label}
  */
  readonly versionLabel: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#variables DataHarnessPlatformPipelineCentralNotificationRule#variables}
  */
  readonly variables?: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables[] | cdktf.IResolvable;
}

export function dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefToTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefOutputReference | DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_ref: cdktf.stringToTerraform(struct!.templateRef),
    version_label: cdktf.stringToTerraform(struct!.versionLabel),
    variables: cdktf.listMapper(dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesToTerraform, true)(struct!.variables),
  }
}


export function dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefToHclTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefOutputReference | DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_ref: {
      value: cdktf.stringToHclTerraform(struct!.templateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_label: {
      value: cdktf.stringToHclTerraform(struct!.versionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateRef = this._templateRef;
    }
    if (this._versionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionLabel = this._versionLabel;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateRef = undefined;
      this._versionLabel = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateRef = value.templateRef;
      this._versionLabel = value.versionLabel;
      this._variables.internalValue = value.variables;
    }
  }

  // template_ref - computed: false, optional: false, required: true
  private _templateRef?: string; 
  public get templateRef() {
    return this.getStringAttribute('template_ref');
  }
  public set templateRef(value: string) {
    this._templateRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateRefInput() {
    return this._templateRef;
  }

  // version_label - computed: false, optional: false, required: true
  private _versionLabel?: string; 
  public get versionLabel() {
    return this.getStringAttribute('version_label');
  }
  public set versionLabel(value: string) {
    this._versionLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionLabelInput() {
    return this._versionLabel;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}
export interface DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#scope_identifiers DataHarnessPlatformPipelineCentralNotificationRule#scope_identifiers}
  */
  readonly scopeIdentifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#type DataHarnessPlatformPipelineCentralNotificationRule#type}
  */
  readonly type?: string;
}

export function dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataToTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopeIdentifiers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataToHclTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope_identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopeIdentifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopeIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeIdentifiers = this._scopeIdentifiers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scopeIdentifiers = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scopeIdentifiers = value.scopeIdentifiers;
      this._type = value.type;
    }
  }

  // scope_identifiers - computed: false, optional: true, required: false
  private _scopeIdentifiers?: string[]; 
  public get scopeIdentifiers() {
    return this.getListAttribute('scope_identifiers');
  }
  public set scopeIdentifiers(value: string[]) {
    this._scopeIdentifiers = value;
  }
  public resetScopeIdentifiers() {
    this._scopeIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdentifiersInput() {
    return this._scopeIdentifiers;
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

export class DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataOutputReference {
    return new DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#entity_identifiers DataHarnessPlatformPipelineCentralNotificationRule#entity_identifiers}
  */
  readonly entityIdentifiers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#notification_entity DataHarnessPlatformPipelineCentralNotificationRule#notification_entity}
  */
  readonly notificationEntity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#notification_event DataHarnessPlatformPipelineCentralNotificationRule#notification_event}
  */
  readonly notificationEvent: string;
  /**
  * notification_event_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#notification_event_data DataHarnessPlatformPipelineCentralNotificationRule#notification_event_data}
  */
  readonly notificationEventData?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData[] | cdktf.IResolvable;
}

export function dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsToTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIdentifiers),
    notification_entity: cdktf.stringToTerraform(struct!.notificationEntity),
    notification_event: cdktf.stringToTerraform(struct!.notificationEvent),
    notification_event_data: cdktf.listMapper(dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataToTerraform, true)(struct!.notificationEventData),
  }
}


export function dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsToHclTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIdentifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notification_entity: {
      value: cdktf.stringToHclTerraform(struct!.notificationEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_event: {
      value: cdktf.stringToHclTerraform(struct!.notificationEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_event_data: {
      value: cdktf.listMapperHcl(dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataToHclTerraform, true)(struct!.notificationEventData),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdentifiers = this._entityIdentifiers;
    }
    if (this._notificationEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEntity = this._notificationEntity;
    }
    if (this._notificationEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEvent = this._notificationEvent;
    }
    if (this._notificationEventData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEventData = this._notificationEventData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityIdentifiers = undefined;
      this._notificationEntity = undefined;
      this._notificationEvent = undefined;
      this._notificationEventData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityIdentifiers = value.entityIdentifiers;
      this._notificationEntity = value.notificationEntity;
      this._notificationEvent = value.notificationEvent;
      this._notificationEventData.internalValue = value.notificationEventData;
    }
  }

  // entity_identifiers - computed: false, optional: true, required: false
  private _entityIdentifiers?: string[]; 
  public get entityIdentifiers() {
    return this.getListAttribute('entity_identifiers');
  }
  public set entityIdentifiers(value: string[]) {
    this._entityIdentifiers = value;
  }
  public resetEntityIdentifiers() {
    this._entityIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdentifiersInput() {
    return this._entityIdentifiers;
  }

  // notification_entity - computed: false, optional: false, required: true
  private _notificationEntity?: string; 
  public get notificationEntity() {
    return this.getStringAttribute('notification_entity');
  }
  public set notificationEntity(value: string) {
    this._notificationEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEntityInput() {
    return this._notificationEntity;
  }

  // notification_event - computed: false, optional: false, required: true
  private _notificationEvent?: string; 
  public get notificationEvent() {
    return this.getStringAttribute('notification_event');
  }
  public set notificationEvent(value: string) {
    this._notificationEvent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventInput() {
    return this._notificationEvent;
  }

  // notification_event_data - computed: false, optional: true, required: false
  private _notificationEventData = new DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventDataList(this, "notification_event_data", false);
  public get notificationEventData() {
    return this._notificationEventData;
  }
  public putNotificationEventData(value: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsNotificationEventData[] | cdktf.IResolvable) {
    this._notificationEventData.internalValue = value;
  }
  public resetNotificationEventData() {
    this._notificationEventData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventDataInput() {
    return this._notificationEventData.internalValue;
  }
}

export class DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsOutputReference {
    return new DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#condition_name DataHarnessPlatformPipelineCentralNotificationRule#condition_name}
  */
  readonly conditionName: string;
  /**
  * notification_event_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#notification_event_configs DataHarnessPlatformPipelineCentralNotificationRule#notification_event_configs}
  */
  readonly notificationEventConfigs: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs[] | cdktf.IResolvable;
}

export function dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsToTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_name: cdktf.stringToTerraform(struct!.conditionName),
    notification_event_configs: cdktf.listMapper(dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsToTerraform, true)(struct!.notificationEventConfigs),
  }
}


export function dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsToHclTerraform(struct?: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_name: {
      value: cdktf.stringToHclTerraform(struct!.conditionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_event_configs: {
      value: cdktf.listMapperHcl(dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsToHclTerraform, true)(struct!.notificationEventConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionName = this._conditionName;
    }
    if (this._notificationEventConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEventConfigs = this._notificationEventConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionName = undefined;
      this._notificationEventConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionName = value.conditionName;
      this._notificationEventConfigs.internalValue = value.notificationEventConfigs;
    }
  }

  // condition_name - computed: false, optional: false, required: true
  private _conditionName?: string; 
  public get conditionName() {
    return this.getStringAttribute('condition_name');
  }
  public set conditionName(value: string) {
    this._conditionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionNameInput() {
    return this._conditionName;
  }

  // notification_event_configs - computed: false, optional: false, required: true
  private _notificationEventConfigs = new DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigsList(this, "notification_event_configs", false);
  public get notificationEventConfigs() {
    return this._notificationEventConfigs;
  }
  public putNotificationEventConfigs(value: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsNotificationEventConfigs[] | cdktf.IResolvable) {
    this._notificationEventConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventConfigsInput() {
    return this._notificationEventConfigs.internalValue;
  }
}

export class DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsOutputReference {
    return new DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule harness_platform_pipeline_central_notification_rule}
*/
export class DataHarnessPlatformPipelineCentralNotificationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_pipeline_central_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformPipelineCentralNotificationRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformPipelineCentralNotificationRule to import
  * @param importFromId The id of the existing DataHarnessPlatformPipelineCentralNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformPipelineCentralNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_pipeline_central_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_central_notification_rule harness_platform_pipeline_central_notification_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformPipelineCentralNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformPipelineCentralNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_pipeline_central_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
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
    this._identifier = config.identifier;
    this._name = config.name;
    this._notificationChannelRefs = config.notificationChannelRefs;
    this._org = config.org;
    this._project = config.project;
    this._status = config.status;
    this._customNotificationTemplateRef.internalValue = config.customNotificationTemplateRef;
    this._notificationConditions.internalValue = config.notificationConditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
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

  // notification_channel_refs - computed: false, optional: true, required: false
  private _notificationChannelRefs?: string[]; 
  public get notificationChannelRefs() {
    return this.getListAttribute('notification_channel_refs');
  }
  public set notificationChannelRefs(value: string[]) {
    this._notificationChannelRefs = value;
  }
  public resetNotificationChannelRefs() {
    this._notificationChannelRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelRefsInput() {
    return this._notificationChannelRefs;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // custom_notification_template_ref - computed: false, optional: true, required: false
  private _customNotificationTemplateRef = new DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefOutputReference(this, "custom_notification_template_ref");
  public get customNotificationTemplateRef() {
    return this._customNotificationTemplateRef;
  }
  public putCustomNotificationTemplateRef(value: DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRef) {
    this._customNotificationTemplateRef.internalValue = value;
  }
  public resetCustomNotificationTemplateRef() {
    this._customNotificationTemplateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNotificationTemplateRefInput() {
    return this._customNotificationTemplateRef.internalValue;
  }

  // notification_conditions - computed: false, optional: true, required: false
  private _notificationConditions = new DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsList(this, "notification_conditions", false);
  public get notificationConditions() {
    return this._notificationConditions;
  }
  public putNotificationConditions(value: DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditions[] | cdktf.IResolvable) {
    this._notificationConditions.internalValue = value;
  }
  public resetNotificationConditions() {
    this._notificationConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConditionsInput() {
    return this._notificationConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      notification_channel_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationChannelRefs),
      org: cdktf.stringToTerraform(this._org),
      project: cdktf.stringToTerraform(this._project),
      status: cdktf.stringToTerraform(this._status),
      custom_notification_template_ref: dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefToTerraform(this._customNotificationTemplateRef.internalValue),
      notification_conditions: cdktf.listMapper(dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsToTerraform, true)(this._notificationConditions.internalValue),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      notification_channel_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationChannelRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_notification_template_ref: {
        value: dataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefToHclTerraform(this._customNotificationTemplateRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformPipelineCentralNotificationRuleCustomNotificationTemplateRefList",
      },
      notification_conditions: {
        value: cdktf.listMapperHcl(dataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsToHclTerraform, true)(this._notificationConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformPipelineCentralNotificationRuleNotificationConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
