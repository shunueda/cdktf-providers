// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientGroupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#decision_strategy OpenidClientGroupPolicy#decision_strategy}
  */
  readonly decisionStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#description OpenidClientGroupPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#groups_claim OpenidClientGroupPolicy#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#id OpenidClientGroupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#logic OpenidClientGroupPolicy#logic}
  */
  readonly logic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#name OpenidClientGroupPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#realm_id OpenidClientGroupPolicy#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#resource_server_id OpenidClientGroupPolicy#resource_server_id}
  */
  readonly resourceServerId: string;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#groups OpenidClientGroupPolicy#groups}
  */
  readonly groups: OpenidClientGroupPolicyGroups[] | cdktf.IResolvable;
}
export interface OpenidClientGroupPolicyGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#extend_children OpenidClientGroupPolicy#extend_children}
  */
  readonly extendChildren: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#id OpenidClientGroupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#path OpenidClientGroupPolicy#path}
  */
  readonly path: string;
}

export function openidClientGroupPolicyGroupsToTerraform(struct?: OpenidClientGroupPolicyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extend_children: cdktf.booleanToTerraform(struct!.extendChildren),
    id: cdktf.stringToTerraform(struct!.id),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function openidClientGroupPolicyGroupsToHclTerraform(struct?: OpenidClientGroupPolicyGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extend_children: {
      value: cdktf.booleanToHclTerraform(struct!.extendChildren),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenidClientGroupPolicyGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenidClientGroupPolicyGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendChildren !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendChildren = this._extendChildren;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenidClientGroupPolicyGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendChildren = undefined;
      this._id = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendChildren = value.extendChildren;
      this._id = value.id;
      this._path = value.path;
    }
  }

  // extend_children - computed: false, optional: false, required: true
  private _extendChildren?: boolean | cdktf.IResolvable; 
  public get extendChildren() {
    return this.getBooleanAttribute('extend_children');
  }
  public set extendChildren(value: boolean | cdktf.IResolvable) {
    this._extendChildren = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendChildrenInput() {
    return this._extendChildren;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class OpenidClientGroupPolicyGroupsList extends cdktf.ComplexList {
  public internalValue? : OpenidClientGroupPolicyGroups[] | cdktf.IResolvable

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
  public get(index: number): OpenidClientGroupPolicyGroupsOutputReference {
    return new OpenidClientGroupPolicyGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy keycloak_openid_client_group_policy}
*/
export class OpenidClientGroupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_group_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientGroupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientGroupPolicy to import
  * @param importFromId The id of the existing OpenidClientGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientGroupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_group_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/openid_client_group_policy keycloak_openid_client_group_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientGroupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_group_policy',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._decisionStrategy = config.decisionStrategy;
    this._description = config.description;
    this._groupsClaim = config.groupsClaim;
    this._id = config.id;
    this._logic = config.logic;
    this._name = config.name;
    this._realmId = config.realmId;
    this._resourceServerId = config.resourceServerId;
    this._groups.internalValue = config.groups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decision_strategy - computed: false, optional: false, required: true
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
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

  // logic - computed: false, optional: true, required: false
  private _logic?: string; 
  public get logic() {
    return this.getStringAttribute('logic');
  }
  public set logic(value: string) {
    this._logic = value;
  }
  public resetLogic() {
    this._logic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicInput() {
    return this._logic;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // resource_server_id - computed: false, optional: false, required: true
  private _resourceServerId?: string; 
  public get resourceServerId() {
    return this.getStringAttribute('resource_server_id');
  }
  public set resourceServerId(value: string) {
    this._resourceServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerIdInput() {
    return this._resourceServerId;
  }

  // groups - computed: false, optional: false, required: true
  private _groups = new OpenidClientGroupPolicyGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: OpenidClientGroupPolicyGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      decision_strategy: cdktf.stringToTerraform(this._decisionStrategy),
      description: cdktf.stringToTerraform(this._description),
      groups_claim: cdktf.stringToTerraform(this._groupsClaim),
      id: cdktf.stringToTerraform(this._id),
      logic: cdktf.stringToTerraform(this._logic),
      name: cdktf.stringToTerraform(this._name),
      realm_id: cdktf.stringToTerraform(this._realmId),
      resource_server_id: cdktf.stringToTerraform(this._resourceServerId),
      groups: cdktf.listMapper(openidClientGroupPolicyGroupsToTerraform, true)(this._groups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      decision_strategy: {
        value: cdktf.stringToHclTerraform(this._decisionStrategy),
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
      groups_claim: {
        value: cdktf.stringToHclTerraform(this._groupsClaim),
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
      logic: {
        value: cdktf.stringToHclTerraform(this._logic),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_server_id: {
        value: cdktf.stringToHclTerraform(this._resourceServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(openidClientGroupPolicyGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenidClientGroupPolicyGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
