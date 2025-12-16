// https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email address this alert source receives alerts to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#email_address AlertSource#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#http_custom_options AlertSource#http_custom_options}
  */
  readonly httpCustomOptions?: AlertSourceHttpCustomOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#jira_options AlertSource#jira_options}
  */
  readonly jiraOptions?: AlertSourceJiraOptions;
  /**
  * Unique name of the alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#name AlertSource#name}
  */
  readonly name: string;
  /**
  * Type of alert source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#source_type AlertSource#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#template AlertSource#template}
  */
  readonly template: AlertSourceTemplate;
}
export interface AlertSourceHttpCustomOptions {
  /**
  * JSON path to extract the deduplication key from the payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#deduplication_key_path AlertSource#deduplication_key_path}
  */
  readonly deduplicationKeyPath: string;
  /**
  * JavaScript expression that returns an object with all alert fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#transform_expression AlertSource#transform_expression}
  */
  readonly transformExpression: string;
}

export function alertSourceHttpCustomOptionsToTerraform(struct?: AlertSourceHttpCustomOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deduplication_key_path: cdktf.stringToTerraform(struct!.deduplicationKeyPath),
    transform_expression: cdktf.stringToTerraform(struct!.transformExpression),
  }
}


export function alertSourceHttpCustomOptionsToHclTerraform(struct?: AlertSourceHttpCustomOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deduplication_key_path: {
      value: cdktf.stringToHclTerraform(struct!.deduplicationKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transform_expression: {
      value: cdktf.stringToHclTerraform(struct!.transformExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceHttpCustomOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceHttpCustomOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deduplicationKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.deduplicationKeyPath = this._deduplicationKeyPath;
    }
    if (this._transformExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformExpression = this._transformExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceHttpCustomOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deduplicationKeyPath = undefined;
      this._transformExpression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deduplicationKeyPath = value.deduplicationKeyPath;
      this._transformExpression = value.transformExpression;
    }
  }

  // deduplication_key_path - computed: false, optional: false, required: true
  private _deduplicationKeyPath?: string; 
  public get deduplicationKeyPath() {
    return this.getStringAttribute('deduplication_key_path');
  }
  public set deduplicationKeyPath(value: string) {
    this._deduplicationKeyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationKeyPathInput() {
    return this._deduplicationKeyPath;
  }

  // transform_expression - computed: false, optional: false, required: true
  private _transformExpression?: string; 
  public get transformExpression() {
    return this.getStringAttribute('transform_expression');
  }
  public set transformExpression(value: string) {
    this._transformExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformExpressionInput() {
    return this._transformExpression;
  }
}
export interface AlertSourceJiraOptions {
  /**
  * Which projects in Jira should this alert source watch for new issues? IDs can either be IDs of the projects in Jira, or ID of catalog entries in the 'Jira Project' catalog type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#project_ids AlertSource#project_ids}
  */
  readonly projectIds?: string[];
}

export function alertSourceJiraOptionsToTerraform(struct?: AlertSourceJiraOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
  }
}


export function alertSourceJiraOptionsToHclTerraform(struct?: AlertSourceJiraOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceJiraOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceJiraOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceJiraOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectIds = value.projectIds;
    }
  }

  // project_ids - computed: false, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }
}
export interface AlertSourceTemplateAttributesBindingArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateAttributesBindingArrayValueToTerraform(struct?: AlertSourceTemplateAttributesBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateAttributesBindingArrayValueToHclTerraform(struct?: AlertSourceTemplateAttributesBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateAttributesBindingArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateAttributesBindingArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateAttributesBindingArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertSourceTemplateAttributesBindingArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateAttributesBindingArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateAttributesBindingArrayValueOutputReference {
    return new AlertSourceTemplateAttributesBindingArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateAttributesBindingValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateAttributesBindingValueToTerraform(struct?: AlertSourceTemplateAttributesBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateAttributesBindingValueToHclTerraform(struct?: AlertSourceTemplateAttributesBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateAttributesBindingValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateAttributesBindingValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateAttributesBindingValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateAttributesBinding {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array_value AlertSource#array_value}
  */
  readonly arrayValue?: AlertSourceTemplateAttributesBindingArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: AlertSourceTemplateAttributesBindingValue;
}

export function alertSourceTemplateAttributesBindingToTerraform(struct?: AlertSourceTemplateAttributesBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertSourceTemplateAttributesBindingArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertSourceTemplateAttributesBindingValueToTerraform(struct!.value),
  }
}


export function alertSourceTemplateAttributesBindingToHclTerraform(struct?: AlertSourceTemplateAttributesBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertSourceTemplateAttributesBindingArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateAttributesBindingArrayValueList",
    },
    value: {
      value: alertSourceTemplateAttributesBindingValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateAttributesBindingValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateAttributesBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateAttributesBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateAttributesBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertSourceTemplateAttributesBindingArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertSourceTemplateAttributesBindingArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertSourceTemplateAttributesBindingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertSourceTemplateAttributesBindingValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlertSourceTemplateAttributes {
  /**
  * ID of the alert attribute to set with this binding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#alert_attribute_id AlertSource#alert_attribute_id}
  */
  readonly alertAttributeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#binding AlertSource#binding}
  */
  readonly binding: AlertSourceTemplateAttributesBinding;
}

export function alertSourceTemplateAttributesToTerraform(struct?: AlertSourceTemplateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_attribute_id: cdktf.stringToTerraform(struct!.alertAttributeId),
    binding: alertSourceTemplateAttributesBindingToTerraform(struct!.binding),
  }
}


export function alertSourceTemplateAttributesToHclTerraform(struct?: AlertSourceTemplateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_attribute_id: {
      value: cdktf.stringToHclTerraform(struct!.alertAttributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binding: {
      value: alertSourceTemplateAttributesBindingToHclTerraform(struct!.binding),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateAttributesBinding",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertAttributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertAttributeId = this._alertAttributeId;
    }
    if (this._binding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertAttributeId = undefined;
      this._binding.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertAttributeId = value.alertAttributeId;
      this._binding.internalValue = value.binding;
    }
  }

  // alert_attribute_id - computed: false, optional: false, required: true
  private _alertAttributeId?: string; 
  public get alertAttributeId() {
    return this.getStringAttribute('alert_attribute_id');
  }
  public set alertAttributeId(value: string) {
    this._alertAttributeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertAttributeIdInput() {
    return this._alertAttributeId;
  }

  // binding - computed: false, optional: false, required: true
  private _binding = new AlertSourceTemplateAttributesBindingOutputReference(this, "binding");
  public get binding() {
    return this._binding;
  }
  public putBinding(value: AlertSourceTemplateAttributesBinding) {
    this._binding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }
}

export class AlertSourceTemplateAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateAttributesOutputReference {
    return new AlertSourceTemplateAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateDescription {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateDescriptionToTerraform(struct?: AlertSourceTemplateDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateDescriptionToHclTerraform(struct?: AlertSourceTemplateDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateDescriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateDescription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateDescription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateExpressionsElseBranchResultArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsElseBranchResultArrayValueToTerraform(struct?: AlertSourceTemplateExpressionsElseBranchResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsElseBranchResultArrayValueToHclTerraform(struct?: AlertSourceTemplateExpressionsElseBranchResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsElseBranchResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsElseBranchResultArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsElseBranchResultArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertSourceTemplateExpressionsElseBranchResultArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsElseBranchResultArrayValueOutputReference {
    return new AlertSourceTemplateExpressionsElseBranchResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsElseBranchResultValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsElseBranchResultValueToTerraform(struct?: AlertSourceTemplateExpressionsElseBranchResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsElseBranchResultValueToHclTerraform(struct?: AlertSourceTemplateExpressionsElseBranchResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsElseBranchResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsElseBranchResultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsElseBranchResultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateExpressionsElseBranchResult {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array_value AlertSource#array_value}
  */
  readonly arrayValue?: AlertSourceTemplateExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: AlertSourceTemplateExpressionsElseBranchResultValue;
}

export function alertSourceTemplateExpressionsElseBranchResultToTerraform(struct?: AlertSourceTemplateExpressionsElseBranchResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertSourceTemplateExpressionsElseBranchResultArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertSourceTemplateExpressionsElseBranchResultValueToTerraform(struct!.value),
  }
}


export function alertSourceTemplateExpressionsElseBranchResultToHclTerraform(struct?: AlertSourceTemplateExpressionsElseBranchResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsElseBranchResultArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsElseBranchResultArrayValueList",
    },
    value: {
      value: alertSourceTemplateExpressionsElseBranchResultValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsElseBranchResultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsElseBranchResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsElseBranchResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsElseBranchResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertSourceTemplateExpressionsElseBranchResultArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertSourceTemplateExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertSourceTemplateExpressionsElseBranchResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertSourceTemplateExpressionsElseBranchResultValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlertSourceTemplateExpressionsElseBranch {
  /**
  * The result assumed if the else branch is reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#result AlertSource#result}
  */
  readonly result: AlertSourceTemplateExpressionsElseBranchResult;
}

export function alertSourceTemplateExpressionsElseBranchToTerraform(struct?: AlertSourceTemplateExpressionsElseBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    result: alertSourceTemplateExpressionsElseBranchResultToTerraform(struct!.result),
  }
}


export function alertSourceTemplateExpressionsElseBranchToHclTerraform(struct?: AlertSourceTemplateExpressionsElseBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    result: {
      value: alertSourceTemplateExpressionsElseBranchResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsElseBranchResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsElseBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsElseBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsElseBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result.internalValue = value.result;
    }
  }

  // result - computed: false, optional: false, required: true
  private _result = new AlertSourceTemplateExpressionsElseBranchResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: AlertSourceTemplateExpressionsElseBranchResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array_value AlertSource#array_value}
  */
  readonly arrayValue?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#operation AlertSource#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#param_bindings AlertSource#param_bindings}
  */
  readonly paramBindings: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#subject AlertSource#subject}
  */
  readonly subject: string;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#conditions AlertSource#conditions}
  */
  readonly conditions: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueOutputReference {
    return new AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesResultValueToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranchesResult {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array_value AlertSource#array_value}
  */
  readonly arrayValue?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesResultToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertSourceTemplateExpressionsOperationsBranchesBranchesResultValueToTerraform(struct!.value),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesResultToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueList",
    },
    value: {
      value: alertSourceTemplateExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesResultValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesBranches {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#condition_groups AlertSource#condition_groups}
  */
  readonly conditionGroups: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable;
  /**
  * The result assumed if the condition groups are satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#result AlertSource#result}
  */
  readonly result: AlertSourceTemplateExpressionsOperationsBranchesBranchesResult;
}

export function alertSourceTemplateExpressionsOperationsBranchesBranchesToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsToTerraform, false)(struct!.conditionGroups),
    result: alertSourceTemplateExpressionsOperationsBranchesBranchesResultToTerraform(struct!.result),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesBranchesToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsList",
    },
    result: {
      value: alertSourceTemplateExpressionsOperationsBranchesBranchesResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
      this._result.internalValue = value.result;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // result - computed: false, optional: false, required: true
  private _result = new AlertSourceTemplateExpressionsOperationsBranchesBranchesResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: AlertSourceTemplateExpressionsOperationsBranchesBranchesResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}

export class AlertSourceTemplateExpressionsOperationsBranchesBranchesList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsBranchesBranches[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsBranchesBranchesOutputReference {
    return new AlertSourceTemplateExpressionsOperationsBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsBranchesReturns {
  /**
  * Whether the return value should be single or multi-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array AlertSource#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Expected return type of this expression (what to try casting the result to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#type AlertSource#type}
  */
  readonly type: string;
}

export function alertSourceTemplateExpressionsOperationsBranchesReturnsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesReturnsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranchesReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
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

export class AlertSourceTemplateExpressionsOperationsBranchesReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranchesReturns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranchesReturns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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
export interface AlertSourceTemplateExpressionsOperationsBranches {
  /**
  * The branches to apply for this operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#branches AlertSource#branches}
  */
  readonly branches: AlertSourceTemplateExpressionsOperationsBranchesBranches[] | cdktf.IResolvable;
  /**
  * The return type of an operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#returns AlertSource#returns}
  */
  readonly returns: AlertSourceTemplateExpressionsOperationsBranchesReturns;
}

export function alertSourceTemplateExpressionsOperationsBranchesToTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: cdktf.listMapper(alertSourceTemplateExpressionsOperationsBranchesBranchesToTerraform, false)(struct!.branches),
    returns: alertSourceTemplateExpressionsOperationsBranchesReturnsToTerraform(struct!.returns),
  }
}


export function alertSourceTemplateExpressionsOperationsBranchesToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsBranchesBranchesToHclTerraform, false)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesBranchesList",
    },
    returns: {
      value: alertSourceTemplateExpressionsOperationsBranchesReturnsToHclTerraform(struct!.returns),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranchesReturns",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsBranchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._returns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._returns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._returns.internalValue = value.returns;
    }
  }

  // branches - computed: false, optional: false, required: true
  private _branches = new AlertSourceTemplateExpressionsOperationsBranchesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: AlertSourceTemplateExpressionsOperationsBranchesBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // returns - computed: false, optional: false, required: true
  private _returns = new AlertSourceTemplateExpressionsOperationsBranchesReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
  public putReturns(value: AlertSourceTemplateExpressionsOperationsBranchesReturns) {
    this._returns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns.internalValue;
  }
}
export interface AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array_value AlertSource#array_value}
  */
  readonly arrayValue?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#value AlertSource#value}
  */
  readonly value?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue;
}

export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#operation AlertSource#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#param_bindings AlertSource#param_bindings}
  */
  readonly paramBindings: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#subject AlertSource#subject}
  */
  readonly subject: string;
}

export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsFilterConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#conditions AlertSource#conditions}
  */
  readonly conditions: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertSourceTemplateExpressionsOperationsFilterConditionGroupsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilterConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperationsFilterConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertSourceTemplateExpressionsOperationsFilterConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsFilterConditionGroupsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressionsOperationsFilter {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#condition_groups AlertSource#condition_groups}
  */
  readonly conditionGroups: AlertSourceTemplateExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable;
}

export function alertSourceTemplateExpressionsOperationsFilterToTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(alertSourceTemplateExpressionsOperationsFilterConditionGroupsToTerraform, false)(struct!.conditionGroups),
  }
}


export function alertSourceTemplateExpressionsOperationsFilterToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsFilterConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsFilterConditionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertSourceTemplateExpressionsOperationsFilterConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertSourceTemplateExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }
}
export interface AlertSourceTemplateExpressionsOperationsNavigate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference: string;
}

export function alertSourceTemplateExpressionsOperationsNavigateToTerraform(struct?: AlertSourceTemplateExpressionsOperationsNavigate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateExpressionsOperationsNavigateToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsNavigate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsNavigateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsNavigate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsNavigate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference = value.reference;
    }
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplateExpressionsOperationsParseReturns {
  /**
  * Whether the return value should be single or multi-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#array AlertSource#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Expected return type of this expression (what to try casting the result to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#type AlertSource#type}
  */
  readonly type: string;
}

export function alertSourceTemplateExpressionsOperationsParseReturnsToTerraform(struct?: AlertSourceTemplateExpressionsOperationsParseReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertSourceTemplateExpressionsOperationsParseReturnsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsParseReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
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

export class AlertSourceTemplateExpressionsOperationsParseReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsParseReturns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsParseReturns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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
export interface AlertSourceTemplateExpressionsOperationsParse {
  /**
  * The return type of an operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#returns AlertSource#returns}
  */
  readonly returns: AlertSourceTemplateExpressionsOperationsParseReturns;
  /**
  * The ES5 Javascript expression to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#source AlertSource#source}
  */
  readonly source: string;
}

export function alertSourceTemplateExpressionsOperationsParseToTerraform(struct?: AlertSourceTemplateExpressionsOperationsParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    returns: alertSourceTemplateExpressionsOperationsParseReturnsToTerraform(struct!.returns),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function alertSourceTemplateExpressionsOperationsParseToHclTerraform(struct?: AlertSourceTemplateExpressionsOperationsParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    returns: {
      value: alertSourceTemplateExpressionsOperationsParseReturnsToHclTerraform(struct!.returns),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsParseReturns",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateExpressionsOperationsParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperationsParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._returns.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._returns.internalValue = value.returns;
      this._source = value.source;
    }
  }

  // returns - computed: false, optional: false, required: true
  private _returns = new AlertSourceTemplateExpressionsOperationsParseReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
  public putReturns(value: AlertSourceTemplateExpressionsOperationsParseReturns) {
    this._returns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface AlertSourceTemplateExpressionsOperations {
  /**
  * An operation type that allows for a value to be set conditionally by a series of logical branches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#branches AlertSource#branches}
  */
  readonly branches?: AlertSourceTemplateExpressionsOperationsBranches;
  /**
  * An operation type that allows values to be filtered out by conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#filter AlertSource#filter}
  */
  readonly filter?: AlertSourceTemplateExpressionsOperationsFilter;
  /**
  * An operation type that allows attributes of a type to be accessed by reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#navigate AlertSource#navigate}
  */
  readonly navigate?: AlertSourceTemplateExpressionsOperationsNavigate;
  /**
  * Indicates which operation type to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#operation_type AlertSource#operation_type}
  */
  readonly operationType: string;
  /**
  * An operation type that allows a value to parsed from within a JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#parse AlertSource#parse}
  */
  readonly parse?: AlertSourceTemplateExpressionsOperationsParse;
}

export function alertSourceTemplateExpressionsOperationsToTerraform(struct?: AlertSourceTemplateExpressionsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: alertSourceTemplateExpressionsOperationsBranchesToTerraform(struct!.branches),
    filter: alertSourceTemplateExpressionsOperationsFilterToTerraform(struct!.filter),
    navigate: alertSourceTemplateExpressionsOperationsNavigateToTerraform(struct!.navigate),
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    parse: alertSourceTemplateExpressionsOperationsParseToTerraform(struct!.parse),
  }
}


export function alertSourceTemplateExpressionsOperationsToHclTerraform(struct?: AlertSourceTemplateExpressionsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: alertSourceTemplateExpressionsOperationsBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsBranches",
    },
    filter: {
      value: alertSourceTemplateExpressionsOperationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsFilter",
    },
    navigate: {
      value: alertSourceTemplateExpressionsOperationsNavigateToHclTerraform(struct!.navigate),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsNavigate",
    },
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse: {
      value: alertSourceTemplateExpressionsOperationsParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsOperationsParse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressionsOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._navigate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.navigate = this._navigate?.internalValue;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressionsOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._navigate.internalValue = undefined;
      this._operationType = undefined;
      this._parse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._filter.internalValue = value.filter;
      this._navigate.internalValue = value.navigate;
      this._operationType = value.operationType;
      this._parse.internalValue = value.parse;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new AlertSourceTemplateExpressionsOperationsBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: AlertSourceTemplateExpressionsOperationsBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new AlertSourceTemplateExpressionsOperationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AlertSourceTemplateExpressionsOperationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // navigate - computed: false, optional: true, required: false
  private _navigate = new AlertSourceTemplateExpressionsOperationsNavigateOutputReference(this, "navigate");
  public get navigate() {
    return this._navigate;
  }
  public putNavigate(value: AlertSourceTemplateExpressionsOperationsNavigate) {
    this._navigate.internalValue = value;
  }
  public resetNavigate() {
    this._navigate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navigateInput() {
    return this._navigate.internalValue;
  }

  // operation_type - computed: false, optional: false, required: true
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // parse - computed: false, optional: true, required: false
  private _parse = new AlertSourceTemplateExpressionsOperationsParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: AlertSourceTemplateExpressionsOperationsParse) {
    this._parse.internalValue = value;
  }
  public resetParse() {
    this._parse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
  }
}

export class AlertSourceTemplateExpressionsOperationsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressionsOperations[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOperationsOutputReference {
    return new AlertSourceTemplateExpressionsOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateExpressions {
  /**
  * The else branch to resort to if all operations fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#else_branch AlertSource#else_branch}
  */
  readonly elseBranch?: AlertSourceTemplateExpressionsElseBranch;
  /**
  * The human readable label of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#label AlertSource#label}
  */
  readonly label: string;
  /**
  * The operations to execute in sequence for this expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#operations AlertSource#operations}
  */
  readonly operations: AlertSourceTemplateExpressionsOperations[] | cdktf.IResolvable;
  /**
  * A short ID that can be used to reference the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference: string;
  /**
  * The root reference for this expression (i.e. where the expression starts)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#root_reference AlertSource#root_reference}
  */
  readonly rootReference: string;
}

export function alertSourceTemplateExpressionsToTerraform(struct?: AlertSourceTemplateExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    else_branch: alertSourceTemplateExpressionsElseBranchToTerraform(struct!.elseBranch),
    label: cdktf.stringToTerraform(struct!.label),
    operations: cdktf.listMapper(alertSourceTemplateExpressionsOperationsToTerraform, false)(struct!.operations),
    reference: cdktf.stringToTerraform(struct!.reference),
    root_reference: cdktf.stringToTerraform(struct!.rootReference),
  }
}


export function alertSourceTemplateExpressionsToHclTerraform(struct?: AlertSourceTemplateExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    else_branch: {
      value: alertSourceTemplateExpressionsElseBranchToHclTerraform(struct!.elseBranch),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateExpressionsElseBranch",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsOperationsToHclTerraform, false)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "AlertSourceTemplateExpressionsOperationsList",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_reference: {
      value: cdktf.stringToHclTerraform(struct!.rootReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertSourceTemplateExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elseBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elseBranch = this._elseBranch?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._rootReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootReference = this._rootReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elseBranch.internalValue = undefined;
      this._label = undefined;
      this._operations.internalValue = undefined;
      this._reference = undefined;
      this._rootReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elseBranch.internalValue = value.elseBranch;
      this._label = value.label;
      this._operations.internalValue = value.operations;
      this._reference = value.reference;
      this._rootReference = value.rootReference;
    }
  }

  // else_branch - computed: false, optional: true, required: false
  private _elseBranch = new AlertSourceTemplateExpressionsElseBranchOutputReference(this, "else_branch");
  public get elseBranch() {
    return this._elseBranch;
  }
  public putElseBranch(value: AlertSourceTemplateExpressionsElseBranch) {
    this._elseBranch.internalValue = value;
  }
  public resetElseBranch() {
    this._elseBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseBranchInput() {
    return this._elseBranch.internalValue;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new AlertSourceTemplateExpressionsOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AlertSourceTemplateExpressionsOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // root_reference - computed: false, optional: false, required: true
  private _rootReference?: string; 
  public get rootReference() {
    return this.getStringAttribute('root_reference');
  }
  public set rootReference(value: string) {
    this._rootReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootReferenceInput() {
    return this._rootReference;
  }
}

export class AlertSourceTemplateExpressionsList extends cdktf.ComplexList {
  public internalValue? : AlertSourceTemplateExpressions[] | cdktf.IResolvable

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
  public get(index: number): AlertSourceTemplateExpressionsOutputReference {
    return new AlertSourceTemplateExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertSourceTemplateTitle {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#literal AlertSource#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#reference AlertSource#reference}
  */
  readonly reference?: string;
}

export function alertSourceTemplateTitleToTerraform(struct?: AlertSourceTemplateTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertSourceTemplateTitleToHclTerraform(struct?: AlertSourceTemplateTitle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateTitleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplateTitle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplateTitle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertSourceTemplate {
  /**
  * Attributes to set on alerts coming from this source, with a binding describing how to set them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#attributes AlertSource#attributes}
  */
  readonly attributes: AlertSourceTemplateAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#description AlertSource#description}
  */
  readonly description: AlertSourceTemplateDescription;
  /**
  * The expressions to be prepared for use by steps and conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#expressions AlertSource#expressions}
  */
  readonly expressions: AlertSourceTemplateExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#title AlertSource#title}
  */
  readonly title: AlertSourceTemplateTitle;
}

export function alertSourceTemplateToTerraform(struct?: AlertSourceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(alertSourceTemplateAttributesToTerraform, false)(struct!.attributes),
    description: alertSourceTemplateDescriptionToTerraform(struct!.description),
    expressions: cdktf.listMapper(alertSourceTemplateExpressionsToTerraform, false)(struct!.expressions),
    title: alertSourceTemplateTitleToTerraform(struct!.title),
  }
}


export function alertSourceTemplateToHclTerraform(struct?: AlertSourceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(alertSourceTemplateAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "AlertSourceTemplateAttributesList",
    },
    description: {
      value: alertSourceTemplateDescriptionToHclTerraform(struct!.description),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateDescription",
    },
    expressions: {
      value: cdktf.listMapperHcl(alertSourceTemplateExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "set",
      storageClassType: "AlertSourceTemplateExpressionsList",
    },
    title: {
      value: alertSourceTemplateTitleToHclTerraform(struct!.title),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertSourceTemplateTitle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertSourceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertSourceTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._description?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description?.internalValue;
    }
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    if (this._title?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertSourceTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._description.internalValue = undefined;
      this._expressions.internalValue = undefined;
      this._title.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._description.internalValue = value.description;
      this._expressions.internalValue = value.expressions;
      this._title.internalValue = value.title;
    }
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new AlertSourceTemplateAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: AlertSourceTemplateAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description = new AlertSourceTemplateDescriptionOutputReference(this, "description");
  public get description() {
    return this._description;
  }
  public putDescription(value: AlertSourceTemplateDescription) {
    this._description.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description.internalValue;
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new AlertSourceTemplateExpressionsList(this, "expressions", true);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: AlertSourceTemplateExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // title - computed: false, optional: false, required: true
  private _title = new AlertSourceTemplateTitleOutputReference(this, "title");
  public get title() {
    return this._title;
  }
  public putTitle(value: AlertSourceTemplateTitle) {
    this._title.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source incident_alert_source}
*/
export class AlertSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_alert_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertSource to import
  * @param importFromId The id of the existing AlertSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_alert_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.22.0/docs/resources/alert_source incident_alert_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertSourceConfig
  */
  public constructor(scope: Construct, id: string, config: AlertSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_alert_source',
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
    this._emailAddress = config.emailAddress;
    this._httpCustomOptions.internalValue = config.httpCustomOptions;
    this._jiraOptions.internalValue = config.jiraOptions;
    this._name = config.name;
    this._sourceType = config.sourceType;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // http_custom_options - computed: false, optional: true, required: false
  private _httpCustomOptions = new AlertSourceHttpCustomOptionsOutputReference(this, "http_custom_options");
  public get httpCustomOptions() {
    return this._httpCustomOptions;
  }
  public putHttpCustomOptions(value: AlertSourceHttpCustomOptions) {
    this._httpCustomOptions.internalValue = value;
  }
  public resetHttpCustomOptions() {
    this._httpCustomOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCustomOptionsInput() {
    return this._httpCustomOptions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jira_options - computed: false, optional: true, required: false
  private _jiraOptions = new AlertSourceJiraOptionsOutputReference(this, "jira_options");
  public get jiraOptions() {
    return this._jiraOptions;
  }
  public putJiraOptions(value: AlertSourceJiraOptions) {
    this._jiraOptions.internalValue = value;
  }
  public resetJiraOptions() {
    this._jiraOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraOptionsInput() {
    return this._jiraOptions.internalValue;
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

  // secret_token - computed: true, optional: false, required: false
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // template - computed: false, optional: false, required: true
  private _template = new AlertSourceTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: AlertSourceTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_address: cdktf.stringToTerraform(this._emailAddress),
      http_custom_options: alertSourceHttpCustomOptionsToTerraform(this._httpCustomOptions.internalValue),
      jira_options: alertSourceJiraOptionsToTerraform(this._jiraOptions.internalValue),
      name: cdktf.stringToTerraform(this._name),
      source_type: cdktf.stringToTerraform(this._sourceType),
      template: alertSourceTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_custom_options: {
        value: alertSourceHttpCustomOptionsToHclTerraform(this._httpCustomOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertSourceHttpCustomOptions",
      },
      jira_options: {
        value: alertSourceJiraOptionsToHclTerraform(this._jiraOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertSourceJiraOptions",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: alertSourceTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertSourceTemplate",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
