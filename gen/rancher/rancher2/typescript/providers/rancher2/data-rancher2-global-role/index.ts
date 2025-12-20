// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRancher2GlobalRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role#id DataRancher2GlobalRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Names of role templates whose permissions are granted by this global role in every cluster besides the local cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role#inherited_cluster_roles DataRancher2GlobalRole#inherited_cluster_roles}
  */
  readonly inheritedClusterRoles?: string[];
  /**
  * Global role policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role#name DataRancher2GlobalRole#name}
  */
  readonly name: string;
}
export interface DataRancher2GlobalRoleRules {
}

export function dataRancher2GlobalRoleRulesToTerraform(struct?: DataRancher2GlobalRoleRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRancher2GlobalRoleRulesToHclTerraform(struct?: DataRancher2GlobalRoleRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRancher2GlobalRoleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRancher2GlobalRoleRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRancher2GlobalRoleRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_groups - computed: true, optional: false, required: false
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }

  // non_resource_urls - computed: true, optional: false, required: false
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }

  // resource_names - computed: true, optional: false, required: false
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // verbs - computed: true, optional: false, required: false
  public get verbs() {
    return this.getListAttribute('verbs');
  }
}

export class DataRancher2GlobalRoleRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataRancher2GlobalRoleRulesOutputReference {
    return new DataRancher2GlobalRoleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role rancher2_global_role}
*/
export class DataRancher2GlobalRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_global_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRancher2GlobalRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRancher2GlobalRole to import
  * @param importFromId The id of the existing DataRancher2GlobalRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRancher2GlobalRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_global_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/data-sources/global_role rancher2_global_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRancher2GlobalRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataRancher2GlobalRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_global_role',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
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
    this._inheritedClusterRoles = config.inheritedClusterRoles;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // builtin - computed: true, optional: false, required: false
  public get builtin() {
    return this.getBooleanAttribute('builtin');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // inherited_cluster_roles - computed: false, optional: true, required: false
  private _inheritedClusterRoles?: string[]; 
  public get inheritedClusterRoles() {
    return this.getListAttribute('inherited_cluster_roles');
  }
  public set inheritedClusterRoles(value: string[]) {
    this._inheritedClusterRoles = value;
  }
  public resetInheritedClusterRoles() {
    this._inheritedClusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedClusterRolesInput() {
    return this._inheritedClusterRoles;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
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

  // new_user_default - computed: true, optional: false, required: false
  public get newUserDefault() {
    return this.getBooleanAttribute('new_user_default');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataRancher2GlobalRoleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      inherited_cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inheritedClusterRoles),
      name: cdktf.stringToTerraform(this._name),
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
      inherited_cluster_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inheritedClusterRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
