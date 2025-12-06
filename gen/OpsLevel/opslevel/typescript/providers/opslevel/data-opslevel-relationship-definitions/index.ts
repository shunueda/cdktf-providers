// https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/data-sources/relationship_definitions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpslevelRelationshipDefinitionsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataOpslevelRelationshipDefinitionsAllManagementRules {
}

export function dataOpslevelRelationshipDefinitionsAllManagementRulesToTerraform(struct?: DataOpslevelRelationshipDefinitionsAllManagementRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpslevelRelationshipDefinitionsAllManagementRulesToHclTerraform(struct?: DataOpslevelRelationshipDefinitionsAllManagementRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpslevelRelationshipDefinitionsAllManagementRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpslevelRelationshipDefinitionsAllManagementRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpslevelRelationshipDefinitionsAllManagementRules | undefined) {
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

export class DataOpslevelRelationshipDefinitionsAllManagementRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpslevelRelationshipDefinitionsAllManagementRulesOutputReference {
    return new DataOpslevelRelationshipDefinitionsAllManagementRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpslevelRelationshipDefinitionsAll {
}

export function dataOpslevelRelationshipDefinitionsAllToTerraform(struct?: DataOpslevelRelationshipDefinitionsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpslevelRelationshipDefinitionsAllToHclTerraform(struct?: DataOpslevelRelationshipDefinitionsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpslevelRelationshipDefinitionsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpslevelRelationshipDefinitionsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpslevelRelationshipDefinitionsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // management_rules - computed: true, optional: false, required: false
  private _managementRules = new DataOpslevelRelationshipDefinitionsAllManagementRulesList(this, "management_rules", false);
  public get managementRules() {
    return this._managementRules;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOpslevelRelationshipDefinitionsAllList extends cdktf.ComplexList {

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
  public get(index: number): DataOpslevelRelationshipDefinitionsAllOutputReference {
    return new DataOpslevelRelationshipDefinitionsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/data-sources/relationship_definitions opslevel_relationship_definitions}
*/
export class DataOpslevelRelationshipDefinitions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_relationship_definitions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpslevelRelationshipDefinitions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpslevelRelationshipDefinitions to import
  * @param importFromId The id of the existing DataOpslevelRelationshipDefinitions that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/data-sources/relationship_definitions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpslevelRelationshipDefinitions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_relationship_definitions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/data-sources/relationship_definitions opslevel_relationship_definitions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpslevelRelationshipDefinitionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpslevelRelationshipDefinitionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opslevel_relationship_definitions',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: true, optional: false, required: false
  private _all = new DataOpslevelRelationshipDefinitionsAllList(this, "all", false);
  public get all() {
    return this._all;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
