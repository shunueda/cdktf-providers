// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceAdminConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dictionary attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#attribute_name DeviceAdminCondition#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Attribute value for condition. Value type is specified in dictionary object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#attribute_value DeviceAdminCondition#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * List of child conditions. `condition_type` must be one of `LibraryConditionAndBlock` or `LibraryConditionOrBlock`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#children DeviceAdminCondition#children}
  */
  readonly children?: DeviceAdminConditionChildren[] | cdktf.IResolvable;
  /**
  * Indicates whether the record is the condition itself or a logical aggregation. Logical aggreation indicates that additional conditions are present under the children attribute.
  *   - Choices: `LibraryConditionAndBlock`, `LibraryConditionAttributes`, `LibraryConditionOrBlock`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#condition_type DeviceAdminCondition#condition_type}
  */
  readonly conditionType: string;
  /**
  * Condition description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#description DeviceAdminCondition#description}
  */
  readonly description?: string;
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#dictionary_name DeviceAdminCondition#dictionary_name}
  */
  readonly dictionaryName?: string;
  /**
  * Dictionary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#dictionary_value DeviceAdminCondition#dictionary_value}
  */
  readonly dictionaryValue?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#is_negate DeviceAdminCondition#is_negate}
  */
  readonly isNegate?: boolean | cdktf.IResolvable;
  /**
  * Condition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#name DeviceAdminCondition#name}
  */
  readonly name: string;
  /**
  * Equality operator
  *   - Choices: `contains`, `endsWith`, `equals`, `greaterOrEquals`, `greaterThan`, `in`, `ipEquals`, `ipGreaterThan`, `ipLessThan`, `ipNotEquals`, `lessOrEquals`, `lessThan`, `matches`, `notContains`, `notEndsWith`, `notEquals`, `notIn`, `notStartsWith`, `startsWith`, `macContains`, `macEndsWith`, `macEquals`, `macIn`, `macNotContains`, `macNotEndsWith`, `macNotEquals`, `macNotIn`, `macNotStartsWith`, `macStartsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#operator DeviceAdminCondition#operator}
  */
  readonly operator?: string;
}
export interface DeviceAdminConditionChildrenChildren {
  /**
  * Dictionary attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#attribute_name DeviceAdminCondition#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Attribute value for condition. Value type is specified in dictionary object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#attribute_value DeviceAdminCondition#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Condition type.
  *   - Choices: `ConditionAttributes`, `ConditionReference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#condition_type DeviceAdminCondition#condition_type}
  */
  readonly conditionType: string;
  /**
  * Condition description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#description DeviceAdminCondition#description}
  */
  readonly description?: string;
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#dictionary_name DeviceAdminCondition#dictionary_name}
  */
  readonly dictionaryName?: string;
  /**
  * Dictionary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#dictionary_value DeviceAdminCondition#dictionary_value}
  */
  readonly dictionaryValue?: string;
  /**
  * UUID for condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#id DeviceAdminCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#is_negate DeviceAdminCondition#is_negate}
  */
  readonly isNegate?: boolean | cdktf.IResolvable;
  /**
  * Condition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#name DeviceAdminCondition#name}
  */
  readonly name?: string;
  /**
  * Equality operator
  *   - Choices: `contains`, `endsWith`, `equals`, `greaterOrEquals`, `greaterThan`, `in`, `ipEquals`, `ipGreaterThan`, `ipLessThan`, `ipNotEquals`, `lessOrEquals`, `lessThan`, `matches`, `notContains`, `notEndsWith`, `notEquals`, `notIn`, `notStartsWith`, `startsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#operator DeviceAdminCondition#operator}
  */
  readonly operator?: string;
}

export function deviceAdminConditionChildrenChildrenToTerraform(struct?: DeviceAdminConditionChildrenChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    description: cdktf.stringToTerraform(struct!.description),
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
    dictionary_value: cdktf.stringToTerraform(struct!.dictionaryValue),
    id: cdktf.stringToTerraform(struct!.id),
    is_negate: cdktf.booleanToTerraform(struct!.isNegate),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function deviceAdminConditionChildrenChildrenToHclTerraform(struct?: DeviceAdminConditionChildrenChildren | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DeviceAdminConditionChildrenChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceAdminConditionChildrenChildren | cdktf.IResolvable | undefined {
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
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceAdminConditionChildrenChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._conditionType = undefined;
      this._description = undefined;
      this._dictionaryName = undefined;
      this._dictionaryValue = undefined;
      this._id = undefined;
      this._isNegate = undefined;
      this._name = undefined;
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
      this._description = value.description;
      this._dictionaryName = value.dictionaryName;
      this._dictionaryValue = value.dictionaryValue;
      this._id = value.id;
      this._isNegate = value.isNegate;
      this._name = value.name;
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

export class DeviceAdminConditionChildrenChildrenList extends cdktf.ComplexList {
  public internalValue? : DeviceAdminConditionChildrenChildren[] | cdktf.IResolvable

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
  public get(index: number): DeviceAdminConditionChildrenChildrenOutputReference {
    return new DeviceAdminConditionChildrenChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceAdminConditionChildren {
  /**
  * Dictionary attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#attribute_name DeviceAdminCondition#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Attribute value for condition. Value type is specified in dictionary object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#attribute_value DeviceAdminCondition#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * List of child conditions. `condition_type` must be one of `ConditionAndBlock` or `ConditionOrBlock`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#children DeviceAdminCondition#children}
  */
  readonly children?: DeviceAdminConditionChildrenChildren[] | cdktf.IResolvable;
  /**
  * Indicates whether the record is the condition itself or a logical aggregation. Logical aggreation indicates that additional conditions are present under the children attribute.
  *   - Choices: `ConditionAndBlock`, `ConditionAttributes`, `ConditionOrBlock`, `ConditionReference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#condition_type DeviceAdminCondition#condition_type}
  */
  readonly conditionType: string;
  /**
  * Condition description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#description DeviceAdminCondition#description}
  */
  readonly description?: string;
  /**
  * Dictionary name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#dictionary_name DeviceAdminCondition#dictionary_name}
  */
  readonly dictionaryName?: string;
  /**
  * Dictionary value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#dictionary_value DeviceAdminCondition#dictionary_value}
  */
  readonly dictionaryValue?: string;
  /**
  * UUID for condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#id DeviceAdminCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whereas this condition is in negate mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#is_negate DeviceAdminCondition#is_negate}
  */
  readonly isNegate?: boolean | cdktf.IResolvable;
  /**
  * Condition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#name DeviceAdminCondition#name}
  */
  readonly name?: string;
  /**
  * Equality operator
  *   - Choices: `contains`, `endsWith`, `equals`, `greaterOrEquals`, `greaterThan`, `in`, `ipEquals`, `ipGreaterThan`, `ipLessThan`, `ipNotEquals`, `lessOrEquals`, `lessThan`, `matches`, `notContains`, `notEndsWith`, `notEquals`, `notIn`, `notStartsWith`, `startsWith`, `macContains`, `macEndsWith`, `macEquals`, `macIn`, `macNotContains`, `macNotEndsWith`, `macNotEquals`, `macNotIn`, `macNotStartsWith`, `macStartsWith`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#operator DeviceAdminCondition#operator}
  */
  readonly operator?: string;
}

export function deviceAdminConditionChildrenToTerraform(struct?: DeviceAdminConditionChildren | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    children: cdktf.listMapper(deviceAdminConditionChildrenChildrenToTerraform, false)(struct!.children),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
    description: cdktf.stringToTerraform(struct!.description),
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
    dictionary_value: cdktf.stringToTerraform(struct!.dictionaryValue),
    id: cdktf.stringToTerraform(struct!.id),
    is_negate: cdktf.booleanToTerraform(struct!.isNegate),
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function deviceAdminConditionChildrenToHclTerraform(struct?: DeviceAdminConditionChildren | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(deviceAdminConditionChildrenChildrenToHclTerraform, false)(struct!.children),
      isBlock: true,
      type: "set",
      storageClassType: "DeviceAdminConditionChildrenChildrenList",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DeviceAdminConditionChildrenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceAdminConditionChildren | cdktf.IResolvable | undefined {
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
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceAdminConditionChildren | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValue = undefined;
      this._children.internalValue = undefined;
      this._conditionType = undefined;
      this._description = undefined;
      this._dictionaryName = undefined;
      this._dictionaryValue = undefined;
      this._id = undefined;
      this._isNegate = undefined;
      this._name = undefined;
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
      this._description = value.description;
      this._dictionaryName = value.dictionaryName;
      this._dictionaryValue = value.dictionaryValue;
      this._id = value.id;
      this._isNegate = value.isNegate;
      this._name = value.name;
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
  private _children = new DeviceAdminConditionChildrenChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }
  public putChildren(value: DeviceAdminConditionChildrenChildren[] | cdktf.IResolvable) {
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

export class DeviceAdminConditionChildrenList extends cdktf.ComplexList {
  public internalValue? : DeviceAdminConditionChildren[] | cdktf.IResolvable

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
  public get(index: number): DeviceAdminConditionChildrenOutputReference {
    return new DeviceAdminConditionChildrenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition ise_device_admin_condition}
*/
export class DeviceAdminCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_device_admin_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceAdminCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceAdminCondition to import
  * @param importFromId The id of the existing DeviceAdminCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceAdminCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_device_admin_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/device_admin_condition ise_device_admin_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceAdminConditionConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceAdminConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_device_admin_condition',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeName = config.attributeName;
    this._attributeValue = config.attributeValue;
    this._children.internalValue = config.children;
    this._conditionType = config.conditionType;
    this._description = config.description;
    this._dictionaryName = config.dictionaryName;
    this._dictionaryValue = config.dictionaryValue;
    this._isNegate = config.isNegate;
    this._name = config.name;
    this._operator = config.operator;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _children = new DeviceAdminConditionChildrenList(this, "children", true);
  public get children() {
    return this._children;
  }
  public putChildren(value: DeviceAdminConditionChildren[] | cdktf.IResolvable) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      attribute_value: cdktf.stringToTerraform(this._attributeValue),
      children: cdktf.listMapper(deviceAdminConditionChildrenToTerraform, false)(this._children.internalValue),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      description: cdktf.stringToTerraform(this._description),
      dictionary_name: cdktf.stringToTerraform(this._dictionaryName),
      dictionary_value: cdktf.stringToTerraform(this._dictionaryValue),
      is_negate: cdktf.booleanToTerraform(this._isNegate),
      name: cdktf.stringToTerraform(this._name),
      operator: cdktf.stringToTerraform(this._operator),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_value: {
        value: cdktf.stringToHclTerraform(this._attributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      children: {
        value: cdktf.listMapperHcl(deviceAdminConditionChildrenToHclTerraform, false)(this._children.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DeviceAdminConditionChildrenList",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_name: {
        value: cdktf.stringToHclTerraform(this._dictionaryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary_value: {
        value: cdktf.stringToHclTerraform(this._dictionaryValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_negate: {
        value: cdktf.booleanToHclTerraform(this._isNegate),
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
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
