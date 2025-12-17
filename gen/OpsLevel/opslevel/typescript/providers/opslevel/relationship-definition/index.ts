// https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RelationshipDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#alias RelationshipDefinition#alias}
  */
  readonly alias: string;
  /**
  * The categories of resources that can be selected for this relationship definition. Can include any component category alias on your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#allowed_categories RelationshipDefinition#allowed_categories}
  */
  readonly allowedCategories?: string[];
  /**
  * The types of resources that can be selected for this relationship definition. Can include any component type alias on your account or 'team' or 'user'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#allowed_types RelationshipDefinition#allowed_types}
  */
  readonly allowedTypes?: string[];
  /**
  * The component type that the relationship belongs to. Must be a valid component type alias from your OpsLevel account or 'team'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#component_type RelationshipDefinition#component_type}
  */
  readonly componentType: string;
  /**
  * The description of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#description RelationshipDefinition#description}
  */
  readonly description?: string;
  /**
  * Rules that automatically manage relationships based on property matching conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#management_rules RelationshipDefinition#management_rules}
  */
  readonly managementRules?: RelationshipDefinitionManagementRules[] | cdktf.IResolvable;
  /**
  * The display name of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#name RelationshipDefinition#name}
  */
  readonly name: string;
}
export interface RelationshipDefinitionManagementRules {
  /**
  * The condition operator for this rule. Either EQUALS or ARRAY_CONTAINS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#operator RelationshipDefinition#operator}
  */
  readonly operator: string;
  /**
  * The property on the source component to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#source_property RelationshipDefinition#source_property}
  */
  readonly sourceProperty: string;
  /**
  * When source_property is 'tag', this specifies the tag key to match. Required if source_property is 'tag', must not be set otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#source_tag_key RelationshipDefinition#source_tag_key}
  */
  readonly sourceTagKey?: string;
  /**
  * When source_property is 'tag', this specifies the matching operation. Either 'equals' or 'starts_with'. Defaults to 'equals'. Required if source_property is 'tag', must not be set otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#source_tag_operation RelationshipDefinition#source_tag_operation}
  */
  readonly sourceTagOperation?: string;
  /**
  * The category of the target resource. Either target_category or target_type must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#target_category RelationshipDefinition#target_category}
  */
  readonly targetCategory?: string;
  /**
  * The property on the target resource to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#target_property RelationshipDefinition#target_property}
  */
  readonly targetProperty: string;
  /**
  * When target_property is 'tag', this specifies the tag key to match. Required if target_property is 'tag', must not be set otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#target_tag_key RelationshipDefinition#target_tag_key}
  */
  readonly targetTagKey?: string;
  /**
  * When target_property is 'tag', this specifies the matching operation. Either 'equals' or 'starts_with'. Defaults to 'equals'. Required if target_property is 'tag', must not be set otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#target_tag_operation RelationshipDefinition#target_tag_operation}
  */
  readonly targetTagOperation?: string;
  /**
  * The type of the target resource. Either target_category or target_type must be specified, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#target_type RelationshipDefinition#target_type}
  */
  readonly targetType?: string;
}

export function relationshipDefinitionManagementRulesToTerraform(struct?: RelationshipDefinitionManagementRules | cdktf.IResolvable): any {
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


export function relationshipDefinitionManagementRulesToHclTerraform(struct?: RelationshipDefinitionManagementRules | cdktf.IResolvable): any {
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

export class RelationshipDefinitionManagementRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RelationshipDefinitionManagementRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RelationshipDefinitionManagementRules | cdktf.IResolvable | undefined) {
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

export class RelationshipDefinitionManagementRulesList extends cdktf.ComplexList {
  public internalValue? : RelationshipDefinitionManagementRules[] | cdktf.IResolvable

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
  public get(index: number): RelationshipDefinitionManagementRulesOutputReference {
    return new RelationshipDefinitionManagementRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition opslevel_relationship_definition}
*/
export class RelationshipDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_relationship_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RelationshipDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RelationshipDefinition to import
  * @param importFromId The id of the existing RelationshipDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RelationshipDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_relationship_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/relationship_definition opslevel_relationship_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RelationshipDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: RelationshipDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_relationship_definition',
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
    this._allowedCategories = config.allowedCategories;
    this._allowedTypes = config.allowedTypes;
    this._componentType = config.componentType;
    this._description = config.description;
    this._managementRules.internalValue = config.managementRules;
    this._name = config.name;
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

  // component_type - computed: false, optional: false, required: true
  private _componentType?: string; 
  public get componentType() {
    return this.getStringAttribute('component_type');
  }
  public set componentType(value: string) {
    this._componentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentTypeInput() {
    return this._componentType;
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

  // management_rules - computed: false, optional: true, required: false
  private _managementRules = new RelationshipDefinitionManagementRulesList(this, "management_rules", false);
  public get managementRules() {
    return this._managementRules;
  }
  public putManagementRules(value: RelationshipDefinitionManagementRules[] | cdktf.IResolvable) {
    this._managementRules.internalValue = value;
  }
  public resetManagementRules() {
    this._managementRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementRulesInput() {
    return this._managementRules.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      allowed_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCategories),
      allowed_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedTypes),
      component_type: cdktf.stringToTerraform(this._componentType),
      description: cdktf.stringToTerraform(this._description),
      management_rules: cdktf.listMapper(relationshipDefinitionManagementRulesToTerraform, false)(this._managementRules.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      allowed_categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCategories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      component_type: {
        value: cdktf.stringToHclTerraform(this._componentType),
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
      management_rules: {
        value: cdktf.listMapperHcl(relationshipDefinitionManagementRulesToHclTerraform, false)(this._managementRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RelationshipDefinitionManagementRulesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
