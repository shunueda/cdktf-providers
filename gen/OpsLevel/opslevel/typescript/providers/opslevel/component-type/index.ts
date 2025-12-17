// https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComponentTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique alias of the component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#alias ComponentType#alias}
  */
  readonly alias: string;
  /**
  * The description of the component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#description ComponentType#description}
  */
  readonly description?: string;
  /**
  * The icon associated with the component type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#icon ComponentType#icon}
  */
  readonly icon?: ComponentTypeIcon;
  /**
  * The unique name of the component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
  /**
  * The owner relationship configuration for this component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#owner_relationship ComponentType#owner_relationship}
  */
  readonly ownerRelationship?: ComponentTypeOwnerRelationship;
  /**
  * The properties of this component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#properties ComponentType#properties}
  */
  readonly properties: { [key: string]: ComponentTypeProperties } | cdktf.IResolvable;
  /**
  * The relationships that can be defined for this component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#relationships ComponentType#relationships}
  */
  readonly relationships?: { [key: string]: ComponentTypeRelationships } | cdktf.IResolvable;
}
export interface ComponentTypeIcon {
  /**
  * The color, represented as a hexcode, for the icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#color ComponentType#color}
  */
  readonly color: string;
  /**
  * The name of the icon in Phosphor icons for Vue, e.g. `PhBird`. See https://phosphoricons.com/ for a full list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
}

export function componentTypeIconToTerraform(struct?: ComponentTypeIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function componentTypeIconToHclTerraform(struct?: ComponentTypeIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentTypeIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentTypeIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._name = value.name;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
}
export interface ComponentTypeOwnerRelationshipManagementRules {
  /**
  * The condition operator for this rule. Either EQUALS or ARRAY_CONTAINS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#operator ComponentType#operator}
  */
  readonly operator: string;
  /**
  * The property on the source component to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#source_property ComponentType#source_property}
  */
  readonly sourceProperty: string;
  /**
  * When source_property is 'tag', this specifies the tag key to match. Required if source_property is 'tag', must not be set otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#source_tag_key ComponentType#source_tag_key}
  */
  readonly sourceTagKey?: string;
  /**
  * When source_property is 'tag', this specifies the matching operation. Either 'equals' or 'starts_with'. Defaults to 'equals'. Required if source_property is 'tag', must not be set otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#source_tag_operation ComponentType#source_tag_operation}
  */
  readonly sourceTagOperation?: string;
  /**
  * The category of the target resource. Either target_category or target_type must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#target_category ComponentType#target_category}
  */
  readonly targetCategory?: string;
  /**
  * The property on the target resource to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#target_property ComponentType#target_property}
  */
  readonly targetProperty: string;
  /**
  * When target_property is 'tag', this specifies the tag key to match. Required if target_property is 'tag', must not be set otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#target_tag_key ComponentType#target_tag_key}
  */
  readonly targetTagKey?: string;
  /**
  * When target_property is 'tag', this specifies the matching operation. Either 'equals' or 'starts_with'. Defaults to 'equals'. Required if target_property is 'tag', must not be set otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#target_tag_operation ComponentType#target_tag_operation}
  */
  readonly targetTagOperation?: string;
  /**
  * The type of the target resource. Either target_category or target_type must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#target_type ComponentType#target_type}
  */
  readonly targetType?: string;
}

export function componentTypeOwnerRelationshipManagementRulesToTerraform(struct?: ComponentTypeOwnerRelationshipManagementRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    source_property: cdktf.stringToTerraform(struct!.sourceProperty),
    source_tag_key: cdktf.stringToTerraform(struct!.sourceTagKey),
    source_tag_operation: cdktf.stringToTerraform(struct!.sourceTagOperation),
    target_category: cdktf.stringToTerraform(struct!.targetCategory),
    target_property: cdktf.stringToTerraform(struct!.targetProperty),
    target_tag_key: cdktf.stringToTerraform(struct!.targetTagKey),
    target_tag_operation: cdktf.stringToTerraform(struct!.targetTagOperation),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function componentTypeOwnerRelationshipManagementRulesToHclTerraform(struct?: ComponentTypeOwnerRelationshipManagementRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_property: {
      value: cdktf.stringToHclTerraform(struct!.sourceProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_tag_key: {
      value: cdktf.stringToHclTerraform(struct!.sourceTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_tag_operation: {
      value: cdktf.stringToHclTerraform(struct!.sourceTagOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_category: {
      value: cdktf.stringToHclTerraform(struct!.targetCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_property: {
      value: cdktf.stringToHclTerraform(struct!.targetProperty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_tag_key: {
      value: cdktf.stringToHclTerraform(struct!.targetTagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_tag_operation: {
      value: cdktf.stringToHclTerraform(struct!.targetTagOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentTypeOwnerRelationshipManagementRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComponentTypeOwnerRelationshipManagementRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._sourceProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProperty = this._sourceProperty;
    }
    if (this._sourceTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTagKey = this._sourceTagKey;
    }
    if (this._sourceTagOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTagOperation = this._sourceTagOperation;
    }
    if (this._targetCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCategory = this._targetCategory;
    }
    if (this._targetProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetProperty = this._targetProperty;
    }
    if (this._targetTagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTagKey = this._targetTagKey;
    }
    if (this._targetTagOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTagOperation = this._targetTagOperation;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeOwnerRelationshipManagementRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._sourceProperty = undefined;
      this._sourceTagKey = undefined;
      this._sourceTagOperation = undefined;
      this._targetCategory = undefined;
      this._targetProperty = undefined;
      this._targetTagKey = undefined;
      this._targetTagOperation = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._sourceProperty = value.sourceProperty;
      this._sourceTagKey = value.sourceTagKey;
      this._sourceTagOperation = value.sourceTagOperation;
      this._targetCategory = value.targetCategory;
      this._targetProperty = value.targetProperty;
      this._targetTagKey = value.targetTagKey;
      this._targetTagOperation = value.targetTagOperation;
      this._targetType = value.targetType;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // source_property - computed: false, optional: false, required: true
  private _sourceProperty?: string; 
  public get sourceProperty() {
    return this.getStringAttribute('source_property');
  }
  public set sourceProperty(value: string) {
    this._sourceProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePropertyInput() {
    return this._sourceProperty;
  }

  // source_tag_key - computed: false, optional: true, required: false
  private _sourceTagKey?: string; 
  public get sourceTagKey() {
    return this.getStringAttribute('source_tag_key');
  }
  public set sourceTagKey(value: string) {
    this._sourceTagKey = value;
  }
  public resetSourceTagKey() {
    this._sourceTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagKeyInput() {
    return this._sourceTagKey;
  }

  // source_tag_operation - computed: false, optional: true, required: false
  private _sourceTagOperation?: string; 
  public get sourceTagOperation() {
    return this.getStringAttribute('source_tag_operation');
  }
  public set sourceTagOperation(value: string) {
    this._sourceTagOperation = value;
  }
  public resetSourceTagOperation() {
    this._sourceTagOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTagOperationInput() {
    return this._sourceTagOperation;
  }

  // target_category - computed: false, optional: true, required: false
  private _targetCategory?: string; 
  public get targetCategory() {
    return this.getStringAttribute('target_category');
  }
  public set targetCategory(value: string) {
    this._targetCategory = value;
  }
  public resetTargetCategory() {
    this._targetCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCategoryInput() {
    return this._targetCategory;
  }

  // target_property - computed: false, optional: false, required: true
  private _targetProperty?: string; 
  public get targetProperty() {
    return this.getStringAttribute('target_property');
  }
  public set targetProperty(value: string) {
    this._targetProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPropertyInput() {
    return this._targetProperty;
  }

  // target_tag_key - computed: false, optional: true, required: false
  private _targetTagKey?: string; 
  public get targetTagKey() {
    return this.getStringAttribute('target_tag_key');
  }
  public set targetTagKey(value: string) {
    this._targetTagKey = value;
  }
  public resetTargetTagKey() {
    this._targetTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagKeyInput() {
    return this._targetTagKey;
  }

  // target_tag_operation - computed: false, optional: true, required: false
  private _targetTagOperation?: string; 
  public get targetTagOperation() {
    return this.getStringAttribute('target_tag_operation');
  }
  public set targetTagOperation(value: string) {
    this._targetTagOperation = value;
  }
  public resetTargetTagOperation() {
    this._targetTagOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTagOperationInput() {
    return this._targetTagOperation;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class ComponentTypeOwnerRelationshipManagementRulesList extends cdktf.ComplexList {
  public internalValue? : ComponentTypeOwnerRelationshipManagementRules[] | cdktf.IResolvable

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
  public get(index: number): ComponentTypeOwnerRelationshipManagementRulesOutputReference {
    return new ComponentTypeOwnerRelationshipManagementRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComponentTypeOwnerRelationship {
  /**
  * Rules that automatically manage relationships based on property matching conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#management_rules ComponentType#management_rules}
  */
  readonly managementRules?: ComponentTypeOwnerRelationshipManagementRules[] | cdktf.IResolvable;
}

export function componentTypeOwnerRelationshipToTerraform(struct?: ComponentTypeOwnerRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_rules: cdktf.listMapper(componentTypeOwnerRelationshipManagementRulesToTerraform, false)(struct!.managementRules),
  }
}


export function componentTypeOwnerRelationshipToHclTerraform(struct?: ComponentTypeOwnerRelationship | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_rules: {
      value: cdktf.listMapperHcl(componentTypeOwnerRelationshipManagementRulesToHclTerraform, false)(struct!.managementRules),
      isBlock: true,
      type: "list",
      storageClassType: "ComponentTypeOwnerRelationshipManagementRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentTypeOwnerRelationshipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentTypeOwnerRelationship | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementRules = this._managementRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeOwnerRelationship | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._managementRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._managementRules.internalValue = value.managementRules;
    }
  }

  // management_rules - computed: false, optional: true, required: false
  private _managementRules = new ComponentTypeOwnerRelationshipManagementRulesList(this, "management_rules", false);
  public get managementRules() {
    return this._managementRules;
  }
  public putManagementRules(value: ComponentTypeOwnerRelationshipManagementRules[] | cdktf.IResolvable) {
    this._managementRules.internalValue = value;
  }
  public resetManagementRules() {
    this._managementRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementRulesInput() {
    return this._managementRules.internalValue;
  }
}
export interface ComponentTypeProperties {
  /**
  * Whether or not the property is allowed to be set in opslevel.yml config files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#allowed_in_config_files ComponentType#allowed_in_config_files}
  */
  readonly allowedInConfigFiles?: boolean | cdktf.IResolvable;
  /**
  * The description of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#description ComponentType#description}
  */
  readonly description?: string;
  /**
  * The display status of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#display_status ComponentType#display_status}
  */
  readonly displayStatus?: string;
  /**
  * Restricts what sources are able to assign values to this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#locked_status ComponentType#locked_status}
  */
  readonly lockedStatus?: string;
  /**
  * The name of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
  /**
  * The schema of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#schema ComponentType#schema}
  */
  readonly schema?: string;
}

export function componentTypePropertiesToTerraform(struct?: ComponentTypeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_in_config_files: cdktf.booleanToTerraform(struct!.allowedInConfigFiles),
    description: cdktf.stringToTerraform(struct!.description),
    display_status: cdktf.stringToTerraform(struct!.displayStatus),
    locked_status: cdktf.stringToTerraform(struct!.lockedStatus),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function componentTypePropertiesToHclTerraform(struct?: ComponentTypeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_in_config_files: {
      value: cdktf.booleanToHclTerraform(struct!.allowedInConfigFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_status: {
      value: cdktf.stringToHclTerraform(struct!.displayStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked_status: {
      value: cdktf.stringToHclTerraform(struct!.lockedStatus),
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentTypePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ComponentTypeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInConfigFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInConfigFiles = this._allowedInConfigFiles;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayStatus = this._displayStatus;
    }
    if (this._lockedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockedStatus = this._lockedStatus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInConfigFiles = undefined;
      this._description = undefined;
      this._displayStatus = undefined;
      this._lockedStatus = undefined;
      this._name = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInConfigFiles = value.allowedInConfigFiles;
      this._description = value.description;
      this._displayStatus = value.displayStatus;
      this._lockedStatus = value.lockedStatus;
      this._name = value.name;
      this._schema = value.schema;
    }
  }

  // allowed_in_config_files - computed: true, optional: true, required: false
  private _allowedInConfigFiles?: boolean | cdktf.IResolvable; 
  public get allowedInConfigFiles() {
    return this.getBooleanAttribute('allowed_in_config_files');
  }
  public set allowedInConfigFiles(value: boolean | cdktf.IResolvable) {
    this._allowedInConfigFiles = value;
  }
  public resetAllowedInConfigFiles() {
    this._allowedInConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInConfigFilesInput() {
    return this._allowedInConfigFiles;
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

  // display_status - computed: true, optional: true, required: false
  private _displayStatus?: string; 
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }
  public set displayStatus(value: string) {
    this._displayStatus = value;
  }
  public resetDisplayStatus() {
    this._displayStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStatusInput() {
    return this._displayStatus;
  }

  // locked_status - computed: true, optional: true, required: false
  private _lockedStatus?: string; 
  public get lockedStatus() {
    return this.getStringAttribute('locked_status');
  }
  public set lockedStatus(value: string) {
    this._lockedStatus = value;
  }
  public resetLockedStatus() {
    this._lockedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedStatusInput() {
    return this._lockedStatus;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

export class ComponentTypePropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ComponentTypeProperties } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ComponentTypePropertiesOutputReference {
    return new ComponentTypePropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ComponentTypeRelationships {
  /**
  * The categories of resources that can be selected for this relationship definition. Can include any component category alias on your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#allowed_categories ComponentType#allowed_categories}
  */
  readonly allowedCategories?: string[];
  /**
  * The types of resources that can be selected for this relationship definition. Can include any component type alias on your account or 'team'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#allowed_types ComponentType#allowed_types}
  */
  readonly allowedTypes?: string[];
  /**
  * The description of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#description ComponentType#description}
  */
  readonly description?: string;
  /**
  * The display name of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
}

export function componentTypeRelationshipsToTerraform(struct?: ComponentTypeRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCategories),
    allowed_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedTypes),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function componentTypeRelationshipsToHclTerraform(struct?: ComponentTypeRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentTypeRelationshipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ComponentTypeRelationships | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCategories = this._allowedCategories;
    }
    if (this._allowedTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTypes = this._allowedTypes;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeRelationships | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedCategories = undefined;
      this._allowedTypes = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedCategories = value.allowedCategories;
      this._allowedTypes = value.allowedTypes;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // allowed_categories - computed: false, optional: true, required: false
  private _allowedCategories?: string[]; 
  public get allowedCategories() {
    return this.getListAttribute('allowed_categories');
  }
  public set allowedCategories(value: string[]) {
    this._allowedCategories = value;
  }
  public resetAllowedCategories() {
    this._allowedCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCategoriesInput() {
    return this._allowedCategories;
  }

  // allowed_types - computed: false, optional: true, required: false
  private _allowedTypes?: string[]; 
  public get allowedTypes() {
    return this.getListAttribute('allowed_types');
  }
  public set allowedTypes(value: string[]) {
    this._allowedTypes = value;
  }
  public resetAllowedTypes() {
    this._allowedTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTypesInput() {
    return this._allowedTypes;
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
}

export class ComponentTypeRelationshipsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ComponentTypeRelationships } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ComponentTypeRelationshipsOutputReference {
    return new ComponentTypeRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type opslevel_component_type}
*/
export class ComponentType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_component_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComponentType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComponentType to import
  * @param importFromId The id of the existing ComponentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComponentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_component_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/component_type opslevel_component_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComponentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ComponentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_component_type',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._description = config.description;
    this._icon.internalValue = config.icon;
    this._name = config.name;
    this._ownerRelationship.internalValue = config.ownerRelationship;
    this._properties.internalValue = config.properties;
    this._relationships.internalValue = config.relationships;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // icon - computed: false, optional: true, required: false
  private _icon = new ComponentTypeIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: ComponentTypeIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

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

  // owner_relationship - computed: false, optional: true, required: false
  private _ownerRelationship = new ComponentTypeOwnerRelationshipOutputReference(this, "owner_relationship");
  public get ownerRelationship() {
    return this._ownerRelationship;
  }
  public putOwnerRelationship(value: ComponentTypeOwnerRelationship) {
    this._ownerRelationship.internalValue = value;
  }
  public resetOwnerRelationship() {
    this._ownerRelationship.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerRelationshipInput() {
    return this._ownerRelationship.internalValue;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new ComponentTypePropertiesMap(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: { [key: string]: ComponentTypeProperties } | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // relationships - computed: false, optional: true, required: false
  private _relationships = new ComponentTypeRelationshipsMap(this, "relationships");
  public get relationships() {
    return this._relationships;
  }
  public putRelationships(value: { [key: string]: ComponentTypeRelationships } | cdktf.IResolvable) {
    this._relationships.internalValue = value;
  }
  public resetRelationships() {
    this._relationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipsInput() {
    return this._relationships.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      description: cdktf.stringToTerraform(this._description),
      icon: componentTypeIconToTerraform(this._icon.internalValue),
      name: cdktf.stringToTerraform(this._name),
      owner_relationship: componentTypeOwnerRelationshipToTerraform(this._ownerRelationship.internalValue),
      properties: cdktf.hashMapper(componentTypePropertiesToTerraform)(this._properties.internalValue),
      relationships: cdktf.hashMapper(componentTypeRelationshipsToTerraform)(this._relationships.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      icon: {
        value: componentTypeIconToHclTerraform(this._icon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComponentTypeIcon",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_relationship: {
        value: componentTypeOwnerRelationshipToHclTerraform(this._ownerRelationship.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComponentTypeOwnerRelationship",
      },
      properties: {
        value: cdktf.hashMapperHcl(componentTypePropertiesToHclTerraform)(this._properties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ComponentTypePropertiesMap",
      },
      relationships: {
        value: cdktf.hashMapperHcl(componentTypeRelationshipsToHclTerraform)(this._relationships.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ComponentTypeRelationshipsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
