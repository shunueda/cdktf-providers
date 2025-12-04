// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfUnitRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#description TsfUnitRule#description}
  */
  readonly description?: string;
  /**
  * gateway entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#gateway_instance_id TsfUnitRule#gateway_instance_id}
  */
  readonly gatewayInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#id TsfUnitRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#name TsfUnitRule#name}
  */
  readonly name: string;
  /**
  * unit_rule_item_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#unit_rule_item_list TsfUnitRule#unit_rule_item_list}
  */
  readonly unitRuleItemList?: TsfUnitRuleUnitRuleItemListStruct[] | cdktf.IResolvable;
}
export interface TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct {
  /**
  * rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#rule_id TsfUnitRule#rule_id}
  */
  readonly ruleId?: string;
  /**
  * label name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#tag_field TsfUnitRule#tag_field}
  */
  readonly tagField: string;
  /**
  * Operator: IN/NOT_IN/EQUAL/NOT_EQUAL/REGEX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#tag_operator TsfUnitRule#tag_operator}
  */
  readonly tagOperator: string;
  /**
  * Tag Type: U(User Tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#tag_type TsfUnitRule#tag_type}
  */
  readonly tagType: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#tag_value TsfUnitRule#tag_value}
  */
  readonly tagValue: string;
  /**
  * Unitization rule item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#unit_rule_item_id TsfUnitRule#unit_rule_item_id}
  */
  readonly unitRuleItemId?: string;
}

export function tsfUnitRuleUnitRuleItemListUnitRuleTagListStructToTerraform(struct?: TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    tag_field: cdktf.stringToTerraform(struct!.tagField),
    tag_operator: cdktf.stringToTerraform(struct!.tagOperator),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
    unit_rule_item_id: cdktf.stringToTerraform(struct!.unitRuleItemId),
  }
}


export function tsfUnitRuleUnitRuleItemListUnitRuleTagListStructToHclTerraform(struct?: TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_field: {
      value: cdktf.stringToHclTerraform(struct!.tagField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_operator: {
      value: cdktf.stringToHclTerraform(struct!.tagOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_type: {
      value: cdktf.stringToHclTerraform(struct!.tagType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_rule_item_id: {
      value: cdktf.stringToHclTerraform(struct!.unitRuleItemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfUnitRuleUnitRuleItemListUnitRuleTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._tagField !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagField = this._tagField;
    }
    if (this._tagOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOperator = this._tagOperator;
    }
    if (this._tagType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagType = this._tagType;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    if (this._unitRuleItemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitRuleItemId = this._unitRuleItemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleId = undefined;
      this._tagField = undefined;
      this._tagOperator = undefined;
      this._tagType = undefined;
      this._tagValue = undefined;
      this._unitRuleItemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleId = value.ruleId;
      this._tagField = value.tagField;
      this._tagOperator = value.tagOperator;
      this._tagType = value.tagType;
      this._tagValue = value.tagValue;
      this._unitRuleItemId = value.unitRuleItemId;
    }
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // tag_field - computed: false, optional: false, required: true
  private _tagField?: string; 
  public get tagField() {
    return this.getStringAttribute('tag_field');
  }
  public set tagField(value: string) {
    this._tagField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFieldInput() {
    return this._tagField;
  }

  // tag_operator - computed: false, optional: false, required: true
  private _tagOperator?: string; 
  public get tagOperator() {
    return this.getStringAttribute('tag_operator');
  }
  public set tagOperator(value: string) {
    this._tagOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOperatorInput() {
    return this._tagOperator;
  }

  // tag_type - computed: false, optional: false, required: true
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
    this._tagType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // unit_rule_item_id - computed: true, optional: true, required: false
  private _unitRuleItemId?: string; 
  public get unitRuleItemId() {
    return this.getStringAttribute('unit_rule_item_id');
  }
  public set unitRuleItemId(value: string) {
    this._unitRuleItemId = value;
  }
  public resetUnitRuleItemId() {
    this._unitRuleItemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitRuleItemIdInput() {
    return this._unitRuleItemId;
  }
}

export class TsfUnitRuleUnitRuleItemListUnitRuleTagListStructList extends cdktf.ComplexList {
  public internalValue? : TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfUnitRuleUnitRuleItemListUnitRuleTagListStructOutputReference {
    return new TsfUnitRuleUnitRuleItemListUnitRuleTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfUnitRuleUnitRuleItemListStruct {
  /**
  * rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#description TsfUnitRule#description}
  */
  readonly description?: string;
  /**
  * destination namespace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#dest_namespace_id TsfUnitRule#dest_namespace_id}
  */
  readonly destNamespaceId: string;
  /**
  * destination namespace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#dest_namespace_name TsfUnitRule#dest_namespace_name}
  */
  readonly destNamespaceName: string;
  /**
  * rule item name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#name TsfUnitRule#name}
  */
  readonly name: string;
  /**
  * rule order, the smaller the higher the priority: the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#priority TsfUnitRule#priority}
  */
  readonly priority?: number;
  /**
  * logical relationship: AND/OR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#relationship TsfUnitRule#relationship}
  */
  readonly relationship: string;
  /**
  * rule item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#rule_id TsfUnitRule#rule_id}
  */
  readonly ruleId?: string;
  /**
  * Unitization rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#unit_rule_id TsfUnitRule#unit_rule_id}
  */
  readonly unitRuleId?: string;
  /**
  * unit_rule_tag_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#unit_rule_tag_list TsfUnitRule#unit_rule_tag_list}
  */
  readonly unitRuleTagList?: TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct[] | cdktf.IResolvable;
}

export function tsfUnitRuleUnitRuleItemListStructToTerraform(struct?: TsfUnitRuleUnitRuleItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dest_namespace_id: cdktf.stringToTerraform(struct!.destNamespaceId),
    dest_namespace_name: cdktf.stringToTerraform(struct!.destNamespaceName),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    relationship: cdktf.stringToTerraform(struct!.relationship),
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    unit_rule_id: cdktf.stringToTerraform(struct!.unitRuleId),
    unit_rule_tag_list: cdktf.listMapper(tsfUnitRuleUnitRuleItemListUnitRuleTagListStructToTerraform, true)(struct!.unitRuleTagList),
  }
}


export function tsfUnitRuleUnitRuleItemListStructToHclTerraform(struct?: TsfUnitRuleUnitRuleItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.destNamespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.destNamespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relationship: {
      value: cdktf.stringToHclTerraform(struct!.relationship),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.unitRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit_rule_tag_list: {
      value: cdktf.listMapperHcl(tsfUnitRuleUnitRuleItemListUnitRuleTagListStructToHclTerraform, true)(struct!.unitRuleTagList),
      isBlock: true,
      type: "list",
      storageClassType: "TsfUnitRuleUnitRuleItemListUnitRuleTagListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfUnitRuleUnitRuleItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfUnitRuleUnitRuleItemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destNamespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destNamespaceId = this._destNamespaceId;
    }
    if (this._destNamespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destNamespaceName = this._destNamespaceName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._relationship !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationship = this._relationship;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._unitRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitRuleId = this._unitRuleId;
    }
    if (this._unitRuleTagList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitRuleTagList = this._unitRuleTagList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfUnitRuleUnitRuleItemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destNamespaceId = undefined;
      this._destNamespaceName = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._relationship = undefined;
      this._ruleId = undefined;
      this._unitRuleId = undefined;
      this._unitRuleTagList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destNamespaceId = value.destNamespaceId;
      this._destNamespaceName = value.destNamespaceName;
      this._name = value.name;
      this._priority = value.priority;
      this._relationship = value.relationship;
      this._ruleId = value.ruleId;
      this._unitRuleId = value.unitRuleId;
      this._unitRuleTagList.internalValue = value.unitRuleTagList;
    }
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

  // dest_namespace_id - computed: false, optional: false, required: true
  private _destNamespaceId?: string; 
  public get destNamespaceId() {
    return this.getStringAttribute('dest_namespace_id');
  }
  public set destNamespaceId(value: string) {
    this._destNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destNamespaceIdInput() {
    return this._destNamespaceId;
  }

  // dest_namespace_name - computed: false, optional: false, required: true
  private _destNamespaceName?: string; 
  public get destNamespaceName() {
    return this.getStringAttribute('dest_namespace_name');
  }
  public set destNamespaceName(value: string) {
    this._destNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destNamespaceNameInput() {
    return this._destNamespaceName;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // relationship - computed: false, optional: false, required: true
  private _relationship?: string; 
  public get relationship() {
    return this.getStringAttribute('relationship');
  }
  public set relationship(value: string) {
    this._relationship = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipInput() {
    return this._relationship;
  }

  // rule_id - computed: true, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // unit_rule_id - computed: true, optional: true, required: false
  private _unitRuleId?: string; 
  public get unitRuleId() {
    return this.getStringAttribute('unit_rule_id');
  }
  public set unitRuleId(value: string) {
    this._unitRuleId = value;
  }
  public resetUnitRuleId() {
    this._unitRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitRuleIdInput() {
    return this._unitRuleId;
  }

  // unit_rule_tag_list - computed: false, optional: true, required: false
  private _unitRuleTagList = new TsfUnitRuleUnitRuleItemListUnitRuleTagListStructList(this, "unit_rule_tag_list", false);
  public get unitRuleTagList() {
    return this._unitRuleTagList;
  }
  public putUnitRuleTagList(value: TsfUnitRuleUnitRuleItemListUnitRuleTagListStruct[] | cdktf.IResolvable) {
    this._unitRuleTagList.internalValue = value;
  }
  public resetUnitRuleTagList() {
    this._unitRuleTagList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitRuleTagListInput() {
    return this._unitRuleTagList.internalValue;
  }
}

export class TsfUnitRuleUnitRuleItemListStructList extends cdktf.ComplexList {
  public internalValue? : TsfUnitRuleUnitRuleItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfUnitRuleUnitRuleItemListStructOutputReference {
    return new TsfUnitRuleUnitRuleItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule tencentcloud_tsf_unit_rule}
*/
export class TsfUnitRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_unit_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfUnitRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfUnitRule to import
  * @param importFromId The id of the existing TsfUnitRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfUnitRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_unit_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/tsf_unit_rule tencentcloud_tsf_unit_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfUnitRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TsfUnitRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_unit_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._gatewayInstanceId = config.gatewayInstanceId;
    this._id = config.id;
    this._name = config.name;
    this._unitRuleItemList.internalValue = config.unitRuleItemList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // gateway_instance_id - computed: false, optional: false, required: true
  private _gatewayInstanceId?: string; 
  public get gatewayInstanceId() {
    return this.getStringAttribute('gateway_instance_id');
  }
  public set gatewayInstanceId(value: string) {
    this._gatewayInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInstanceIdInput() {
    return this._gatewayInstanceId;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // unit_rule_item_list - computed: false, optional: true, required: false
  private _unitRuleItemList = new TsfUnitRuleUnitRuleItemListStructList(this, "unit_rule_item_list", false);
  public get unitRuleItemList() {
    return this._unitRuleItemList;
  }
  public putUnitRuleItemList(value: TsfUnitRuleUnitRuleItemListStruct[] | cdktf.IResolvable) {
    this._unitRuleItemList.internalValue = value;
  }
  public resetUnitRuleItemList() {
    this._unitRuleItemList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitRuleItemListInput() {
    return this._unitRuleItemList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gateway_instance_id: cdktf.stringToTerraform(this._gatewayInstanceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      unit_rule_item_list: cdktf.listMapper(tsfUnitRuleUnitRuleItemListStructToTerraform, true)(this._unitRuleItemList.internalValue),
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
      gateway_instance_id: {
        value: cdktf.stringToHclTerraform(this._gatewayInstanceId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_rule_item_list: {
        value: cdktf.listMapperHcl(tsfUnitRuleUnitRuleItemListStructToHclTerraform, true)(this._unitRuleItemList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfUnitRuleUnitRuleItemListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
