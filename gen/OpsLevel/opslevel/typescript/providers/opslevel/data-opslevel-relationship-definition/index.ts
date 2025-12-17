// https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/data-sources/relationship_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpslevelRelationshipDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier (id or alias) of the component type to lookup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/data-sources/relationship_definition#identifier DataOpslevelRelationshipDefinition#identifier}
  */
  readonly identifier: string;
}
export interface DataOpslevelRelationshipDefinitionManagementRules {
}

export function dataOpslevelRelationshipDefinitionManagementRulesToTerraform(struct?: DataOpslevelRelationshipDefinitionManagementRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpslevelRelationshipDefinitionManagementRulesToHclTerraform(struct?: DataOpslevelRelationshipDefinitionManagementRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpslevelRelationshipDefinitionManagementRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpslevelRelationshipDefinitionManagementRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpslevelRelationshipDefinitionManagementRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // source_property - computed: true, optional: false, required: false
  public get sourceProperty() {
    return this.getStringAttribute('source_property');
  }

  // source_tag_key - computed: true, optional: false, required: false
  public get sourceTagKey() {
    return this.getStringAttribute('source_tag_key');
  }

  // source_tag_operation - computed: true, optional: false, required: false
  public get sourceTagOperation() {
    return this.getStringAttribute('source_tag_operation');
  }

  // target_category - computed: true, optional: false, required: false
  public get targetCategory() {
    return this.getStringAttribute('target_category');
  }

  // target_property - computed: true, optional: false, required: false
  public get targetProperty() {
    return this.getStringAttribute('target_property');
  }

  // target_tag_key - computed: true, optional: false, required: false
  public get targetTagKey() {
    return this.getStringAttribute('target_tag_key');
  }

  // target_tag_operation - computed: true, optional: false, required: false
  public get targetTagOperation() {
    return this.getStringAttribute('target_tag_operation');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export class DataOpslevelRelationshipDefinitionManagementRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpslevelRelationshipDefinitionManagementRulesOutputReference {
    return new DataOpslevelRelationshipDefinitionManagementRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/data-sources/relationship_definition opslevel_relationship_definition}
*/
export class DataOpslevelRelationshipDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_relationship_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpslevelRelationshipDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpslevelRelationshipDefinition to import
  * @param importFromId The id of the existing DataOpslevelRelationshipDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/data-sources/relationship_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpslevelRelationshipDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_relationship_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/data-sources/relationship_definition opslevel_relationship_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpslevelRelationshipDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpslevelRelationshipDefinitionConfig) {
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
    this._identifier = config.identifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // allowed_categories - computed: true, optional: false, required: false
  public get allowedCategories() {
    return this.getListAttribute('allowed_categories');
  }

  // allowed_types - computed: true, optional: false, required: false
  public get allowedTypes() {
    return this.getListAttribute('allowed_types');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // management_rules - computed: true, optional: false, required: false
  private _managementRules = new DataOpslevelRelationshipDefinitionManagementRulesList(this, "management_rules", false);
  public get managementRules() {
    return this._managementRules;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
