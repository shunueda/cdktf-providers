// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceAdminPolicySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of child conditions. `condition_type` must be one of `ConditionAndBlock` or `ConditionOrBlock`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#children DeviceAdminPolicySet#children}
  */
  readonly children?: DeviceAdminPolicySetChildren[] | cdktf.IResolvable;
  /**
  * Dictionary attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_attribute_name DeviceAdminPolicySet#condition_attribute_name}
  */
  readonly conditionAttributeName?: string;
  /**
  * Attribute value for condition. Value type is specified in dictionary object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_attribute_value DeviceAdminPolicySet#condition_attribute_value}
  */
  readonly conditionAttributeValue?: string;
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_dictionary_name DeviceAdminPolicySet#condition_dictionary_name}
  */
  readonly conditionDictionaryName?: string;
  /**
  * Dictionary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_dictionary_value DeviceAdminPolicySet#condition_dictionary_value}
  */
  readonly conditionDictionaryValue?: string;
  /**
  * UUID for condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_id DeviceAdminPolicySet#condition_id}
  */
  readonly conditionId?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_is_negate DeviceAdminPolicySet#condition_is_negate}
  */
  readonly conditionIsNegate?: boolean | cdktf.IResolvable;
  /**
  * Equality operator
  *   - Choices: `contains`, `endsWith`, `equals`, `greaterOrEquals`, `greaterThan`, `in`, `ipEquals`, `ipGreaterThan`, `ipLessThan`, `ipNotEquals`, `lessOrEquals`, `lessThan`, `matches`, `notContains`, `notEndsWith`, `notEquals`, `notIn`, `notStartsWith`, `startsWith`, `macContains`, `macEndsWith`, `macEquals`, `macIn`, `macNotContains`, `macNotEndsWith`, `macNotEquals`, `macNotIn`, `macNotStartsWith`, `macStartsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_operator DeviceAdminPolicySet#condition_operator}
  */
  readonly conditionOperator?: string;
  /**
  * Indicates whether the record is the condition itself or a logical aggregation. Logical aggreation indicates that additional conditions are present under the children attribute.
  *   - Choices: `ConditionAndBlock`, `ConditionAttributes`, `ConditionOrBlock`, `ConditionReference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_type DeviceAdminPolicySet#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Indicates if this policy set is the default one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#default DeviceAdminPolicySet#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The description of the policy set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#description DeviceAdminPolicySet#description}
  */
  readonly description?: string;
  /**
  * Flag which indicates if the policy set service is of type 'Proxy Sequence' or 'Allowed Protocols'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#is_proxy DeviceAdminPolicySet#is_proxy}
  */
  readonly isProxy?: boolean | cdktf.IResolvable;
  /**
  * Given name for the policy set, [Valid characters are alphanumerics, underscore, hyphen, space, period, parentheses]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#name DeviceAdminPolicySet#name}
  */
  readonly name: string;
  /**
  * The rank (priority) in relation to other policy sets. Lower rank is higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#rank DeviceAdminPolicySet#rank}
  */
  readonly rank?: number;
  /**
  * Policy set service identifier. 'Allowed Protocols' or 'Server Sequence'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#service_name DeviceAdminPolicySet#service_name}
  */
  readonly serviceName: string;
  /**
  * The state that the policy set is in. A disabled policy set cannot be matched.
  *   - Choices: `disabled`, `enabled`, `monitor`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#state DeviceAdminPolicySet#state}
  */
  readonly state?: string;
}
export interface DeviceAdminPolicySetChildrenChildren {
  /**
  * Dictionary attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#attribute_name DeviceAdminPolicySet#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Attribute value for condition. Value type is specified in dictionary object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#attribute_value DeviceAdminPolicySet#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Condition type.
  *   - Choices: `ConditionAttributes`, `ConditionReference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_type DeviceAdminPolicySet#condition_type}
  */
  readonly conditionType: string;
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#dictionary_name DeviceAdminPolicySet#dictionary_name}
  */
  readonly dictionaryName?: string;
  /**
  * Dictionary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#dictionary_value DeviceAdminPolicySet#dictionary_value}
  */
  readonly dictionaryValue?: string;
  /**
  * UUID for condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#id DeviceAdminPolicySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#is_negate DeviceAdminPolicySet#is_negate}
  */
  readonly isNegate?: boolean | cdktf.IResolvable;
  /**
  * Equality operator
  *   - Choices: `contains`, `endsWith`, `equals`, `greaterOrEquals`, `greaterThan`, `in`, `ipEquals`, `ipGreaterThan`, `ipLessThan`, `ipNotEquals`, `lessOrEquals`, `lessThan`, `matches`, `notContains`, `notEndsWith`, `notEquals`, `notIn`, `notStartsWith`, `startsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#operator DeviceAdminPolicySet#operator}
  */
  readonly operator?: string;
}

export function deviceAdminPolicySetChildrenChildrenToTerraform(struct?: DeviceAdminPolicySetChildrenChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
    dictionary_value: cdktf.stringToTerraform(struct!.dictionaryValue),
    id: cdktf.stringToTerraform(struct!.id),
    is_negate: cdktf.booleanToTerraform(struct!.isNegate),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function deviceAdminPolicySetChildrenChildrenToHclTerraform(struct?: DeviceAdminPolicySetChildrenChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.dictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_value: {
      value: cdktf.stringToHclTerraform(struct!.dictionaryValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_negate: {
      value: cdktf.booleanToHclTerraform(struct!.isNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DeviceAdminPolicySetChildrenChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceAdminPolicySetChildrenChildren | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._dictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryName = this._dictionaryName;
    }
    if (this._dictionaryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryValue = this._dictionaryValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNegate = this._isNegate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceAdminPolicySetChildrenChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._conditionType = undefined;
      this._dictionaryName = undefined;
      this._dictionaryValue = undefined;
      this._id = undefined;
      this._isNegate = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._conditionType = value.conditionType;
      this._dictionaryName = value.dictionaryName;
      this._dictionaryValue = value.dictionaryValue;
      this._id = value.id;
      this._isNegate = value.isNegate;
      this._operator = value.operator;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // dictionary_name - computed: false, optional: true, required: false
  private _dictionaryName?: string; 
  public get dictionaryName() {
    return this.getStringAttribute('dictionary_name');
  }
  public set dictionaryName(value: string) {
    this._dictionaryName = value;
  }
  public resetDictionaryName() {
    this._dictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryNameInput() {
    return this._dictionaryName;
  }

  // dictionary_value - computed: false, optional: true, required: false
  private _dictionaryValue?: string; 
  public get dictionaryValue() {
    return this.getStringAttribute('dictionary_value');
  }
  public set dictionaryValue(value: string) {
    this._dictionaryValue = value;
  }
  public resetDictionaryValue() {
    this._dictionaryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryValueInput() {
    return this._dictionaryValue;
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

  // is_negate - computed: false, optional: true, required: false
  private _isNegate?: boolean | cdktf.IResolvable; 
  public get isNegate() {
    return this.getBooleanAttribute('is_negate');
  }
  public set isNegate(value: boolean | cdktf.IResolvable) {
    this._isNegate = value;
  }
  public resetIsNegate() {
    this._isNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNegateInput() {
    return this._isNegate;
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

export class DeviceAdminPolicySetChildrenChildrenList extends cdktf.ComplexList {
  public internalValue? : DeviceAdminPolicySetChildrenChildren[] | cdktf.IResolvable

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
  public get(index: number): DeviceAdminPolicySetChildrenChildrenOutputReference {
    return new DeviceAdminPolicySetChildrenChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceAdminPolicySetChildren {
  /**
  * Dictionary attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#attribute_name DeviceAdminPolicySet#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Attribute value for condition. Value type is specified in dictionary object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#attribute_value DeviceAdminPolicySet#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * List of child conditions. `condition_type` must be one of `ConditionAndBlock` or `ConditionOrBlock`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#children DeviceAdminPolicySet#children}
  */
  readonly children?: DeviceAdminPolicySetChildrenChildren[] | cdktf.IResolvable;
  /**
  * Indicates whether the record is the condition itself or a logical aggregation. Logical aggreation indicates that additional conditions are present under the children attribute.
  *   - Choices: `ConditionAndBlock`, `ConditionAttributes`, `ConditionOrBlock`, `ConditionReference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#condition_type DeviceAdminPolicySet#condition_type}
  */
  readonly conditionType: string;
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#dictionary_name DeviceAdminPolicySet#dictionary_name}
  */
  readonly dictionaryName?: string;
  /**
  * Dictionary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#dictionary_value DeviceAdminPolicySet#dictionary_value}
  */
  readonly dictionaryValue?: string;
  /**
  * UUID for condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#id DeviceAdminPolicySet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#is_negate DeviceAdminPolicySet#is_negate}
  */
  readonly isNegate?: boolean | cdktf.IResolvable;
  /**
  * Equality operator
  *   - Choices: `contains`, `endsWith`, `equals`, `greaterOrEquals`, `greaterThan`, `in`, `ipEquals`, `ipGreaterThan`, `ipLessThan`, `ipNotEquals`, `lessOrEquals`, `lessThan`, `matches`, `notContains`, `notEndsWith`, `notEquals`, `notIn`, `notStartsWith`, `startsWith`, `macContains`, `macEndsWith`, `macEquals`, `macIn`, `macNotContains`, `macNotEndsWith`, `macNotEquals`, `macNotIn`, `macNotStartsWith`, `macStartsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#operator DeviceAdminPolicySet#operator}
  */
  readonly operator?: string;
}

export function deviceAdminPolicySetChildrenToTerraform(struct?: DeviceAdminPolicySetChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    children: cdktf.listMapper(deviceAdminPolicySetChildrenChildrenToTerraform, false)(struct!.children),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
    dictionary_value: cdktf.stringToTerraform(struct!.dictionaryValue),
    id: cdktf.stringToTerraform(struct!.id),
    is_negate: cdktf.booleanToTerraform(struct!.isNegate),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function deviceAdminPolicySetChildrenToHclTerraform(struct?: DeviceAdminPolicySetChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    children: {
      value: cdktf.listMapperHcl(deviceAdminPolicySetChildrenChildrenToHclTerraform, false)(struct!.children),
      isBlock: true,
      type: "set",
      storageClassType: "DeviceAdminPolicySetChildrenChildrenList",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.dictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary_value: {
      value: cdktf.stringToHclTerraform(struct!.dictionaryValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_negate: {
      value: cdktf.booleanToHclTerraform(struct!.isNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DeviceAdminPolicySetChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceAdminPolicySetChildren | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._children?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.children = this._children?.internalValue;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    if (this._dictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryName = this._dictionaryName;
    }
    if (this._dictionaryValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryValue = this._dictionaryValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNegate = this._isNegate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceAdminPolicySetChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._children.internalValue = undefined;
      this._conditionType = undefined;
      this._dictionaryName = undefined;
      this._dictionaryValue = undefined;
      this._id = undefined;
      this._isNegate = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValue = value.attributeValue;
      this._children.internalValue = value.children;
      this._conditionType = value.conditionType;
      this._dictionaryName = value.dictionaryName;
      this._dictionaryValue = value.dictionaryValue;
      this._id = value.id;
      this._isNegate = value.isNegate;
      this._operator = value.operator;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // children - computed: false, optional: true, required: false
  private _children = new DeviceAdminPolicySetChildrenChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }
  public putChildren(value: DeviceAdminPolicySetChildrenChildren[] | cdktf.IResolvable) {
    this._children.internalValue = value;
  }
  public resetChildren() {
    this._children.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children.internalValue;
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }

  // dictionary_name - computed: false, optional: true, required: false
  private _dictionaryName?: string; 
  public get dictionaryName() {
    return this.getStringAttribute('dictionary_name');
  }
  public set dictionaryName(value: string) {
    this._dictionaryName = value;
  }
  public resetDictionaryName() {
    this._dictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryNameInput() {
    return this._dictionaryName;
  }

  // dictionary_value - computed: false, optional: true, required: false
  private _dictionaryValue?: string; 
  public get dictionaryValue() {
    return this.getStringAttribute('dictionary_value');
  }
  public set dictionaryValue(value: string) {
    this._dictionaryValue = value;
  }
  public resetDictionaryValue() {
    this._dictionaryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryValueInput() {
    return this._dictionaryValue;
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

  // is_negate - computed: false, optional: true, required: false
  private _isNegate?: boolean | cdktf.IResolvable; 
  public get isNegate() {
    return this.getBooleanAttribute('is_negate');
  }
  public set isNegate(value: boolean | cdktf.IResolvable) {
    this._isNegate = value;
  }
  public resetIsNegate() {
    this._isNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNegateInput() {
    return this._isNegate;
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

export class DeviceAdminPolicySetChildrenList extends cdktf.ComplexList {
  public internalValue? : DeviceAdminPolicySetChildren[] | cdktf.IResolvable

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
  public get(index: number): DeviceAdminPolicySetChildrenOutputReference {
    return new DeviceAdminPolicySetChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set ise_device_admin_policy_set}
*/
export class DeviceAdminPolicySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_device_admin_policy_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceAdminPolicySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceAdminPolicySet to import
  * @param importFromId The id of the existing DeviceAdminPolicySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceAdminPolicySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_device_admin_policy_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/device_admin_policy_set ise_device_admin_policy_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceAdminPolicySetConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceAdminPolicySetConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_device_admin_policy_set',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._children.internalValue = config.children;
    this._conditionAttributeName = config.conditionAttributeName;
    this._conditionAttributeValue = config.conditionAttributeValue;
    this._conditionDictionaryName = config.conditionDictionaryName;
    this._conditionDictionaryValue = config.conditionDictionaryValue;
    this._conditionId = config.conditionId;
    this._conditionIsNegate = config.conditionIsNegate;
    this._conditionOperator = config.conditionOperator;
    this._conditionType = config.conditionType;
    this._default = config.default;
    this._description = config.description;
    this._isProxy = config.isProxy;
    this._name = config.name;
    this._rank = config.rank;
    this._serviceName = config.serviceName;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: false, optional: true, required: false
  private _children = new DeviceAdminPolicySetChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }
  public putChildren(value: DeviceAdminPolicySetChildren[] | cdktf.IResolvable) {
    this._children.internalValue = value;
  }
  public resetChildren() {
    this._children.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children.internalValue;
  }

  // condition_attribute_name - computed: false, optional: true, required: false
  private _conditionAttributeName?: string; 
  public get conditionAttributeName() {
    return this.getStringAttribute('condition_attribute_name');
  }
  public set conditionAttributeName(value: string) {
    this._conditionAttributeName = value;
  }
  public resetConditionAttributeName() {
    this._conditionAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionAttributeNameInput() {
    return this._conditionAttributeName;
  }

  // condition_attribute_value - computed: false, optional: true, required: false
  private _conditionAttributeValue?: string; 
  public get conditionAttributeValue() {
    return this.getStringAttribute('condition_attribute_value');
  }
  public set conditionAttributeValue(value: string) {
    this._conditionAttributeValue = value;
  }
  public resetConditionAttributeValue() {
    this._conditionAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionAttributeValueInput() {
    return this._conditionAttributeValue;
  }

  // condition_dictionary_name - computed: false, optional: true, required: false
  private _conditionDictionaryName?: string; 
  public get conditionDictionaryName() {
    return this.getStringAttribute('condition_dictionary_name');
  }
  public set conditionDictionaryName(value: string) {
    this._conditionDictionaryName = value;
  }
  public resetConditionDictionaryName() {
    this._conditionDictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDictionaryNameInput() {
    return this._conditionDictionaryName;
  }

  // condition_dictionary_value - computed: false, optional: true, required: false
  private _conditionDictionaryValue?: string; 
  public get conditionDictionaryValue() {
    return this.getStringAttribute('condition_dictionary_value');
  }
  public set conditionDictionaryValue(value: string) {
    this._conditionDictionaryValue = value;
  }
  public resetConditionDictionaryValue() {
    this._conditionDictionaryValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionDictionaryValueInput() {
    return this._conditionDictionaryValue;
  }

  // condition_id - computed: false, optional: true, required: false
  private _conditionId?: string; 
  public get conditionId() {
    return this.getStringAttribute('condition_id');
  }
  public set conditionId(value: string) {
    this._conditionId = value;
  }
  public resetConditionId() {
    this._conditionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionIdInput() {
    return this._conditionId;
  }

  // condition_is_negate - computed: false, optional: true, required: false
  private _conditionIsNegate?: boolean | cdktf.IResolvable; 
  public get conditionIsNegate() {
    return this.getBooleanAttribute('condition_is_negate');
  }
  public set conditionIsNegate(value: boolean | cdktf.IResolvable) {
    this._conditionIsNegate = value;
  }
  public resetConditionIsNegate() {
    this._conditionIsNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionIsNegateInput() {
    return this._conditionIsNegate;
  }

  // condition_operator - computed: false, optional: true, required: false
  private _conditionOperator?: string; 
  public get conditionOperator() {
    return this.getStringAttribute('condition_operator');
  }
  public set conditionOperator(value: string) {
    this._conditionOperator = value;
  }
  public resetConditionOperator() {
    this._conditionOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionOperatorInput() {
    return this._conditionOperator;
  }

  // condition_type - computed: false, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_proxy - computed: false, optional: true, required: false
  private _isProxy?: boolean | cdktf.IResolvable; 
  public get isProxy() {
    return this.getBooleanAttribute('is_proxy');
  }
  public set isProxy(value: boolean | cdktf.IResolvable) {
    this._isProxy = value;
  }
  public resetIsProxy() {
    this._isProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyInput() {
    return this._isProxy;
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

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      children: cdktf.listMapper(deviceAdminPolicySetChildrenToTerraform, false)(this._children.internalValue),
      condition_attribute_name: cdktf.stringToTerraform(this._conditionAttributeName),
      condition_attribute_value: cdktf.stringToTerraform(this._conditionAttributeValue),
      condition_dictionary_name: cdktf.stringToTerraform(this._conditionDictionaryName),
      condition_dictionary_value: cdktf.stringToTerraform(this._conditionDictionaryValue),
      condition_id: cdktf.stringToTerraform(this._conditionId),
      condition_is_negate: cdktf.booleanToTerraform(this._conditionIsNegate),
      condition_operator: cdktf.stringToTerraform(this._conditionOperator),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      default: cdktf.booleanToTerraform(this._default),
      description: cdktf.stringToTerraform(this._description),
      is_proxy: cdktf.booleanToTerraform(this._isProxy),
      name: cdktf.stringToTerraform(this._name),
      rank: cdktf.numberToTerraform(this._rank),
      service_name: cdktf.stringToTerraform(this._serviceName),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      children: {
        value: cdktf.listMapperHcl(deviceAdminPolicySetChildrenToHclTerraform, false)(this._children.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeviceAdminPolicySetChildrenList",
      },
      condition_attribute_name: {
        value: cdktf.stringToHclTerraform(this._conditionAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_attribute_value: {
        value: cdktf.stringToHclTerraform(this._conditionAttributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_dictionary_name: {
        value: cdktf.stringToHclTerraform(this._conditionDictionaryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_dictionary_value: {
        value: cdktf.stringToHclTerraform(this._conditionDictionaryValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_id: {
        value: cdktf.stringToHclTerraform(this._conditionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_is_negate: {
        value: cdktf.booleanToHclTerraform(this._conditionIsNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition_operator: {
        value: cdktf.stringToHclTerraform(this._conditionOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_proxy: {
        value: cdktf.booleanToHclTerraform(this._isProxy),
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
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
