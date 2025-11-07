// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DelegatedAdminResourceRightsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies administrator(s) permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#admin_permission DelegatedAdminResourceRights#admin_permission}
  */
  readonly adminPermission?: string[];
  /**
  * Specifies the scope of these Delegated Admin Resource Rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#admin_scope DelegatedAdminResourceRights#admin_scope}
  */
  readonly adminScope?: string;
  /**
  * Name of the parent Delegated Admin Rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#delegated_admin_rights_name DelegatedAdminResourceRights#delegated_admin_rights_name}
  */
  readonly delegatedAdminRightsName: string;
  /**
  * A description for this Delegated Admin Resource Rights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#description DelegatedAdminResourceRights#description}
  */
  readonly description?: string;
  /**
  * Indicates whether these Delegated Admin Resource Rights are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#enabled DelegatedAdminResourceRights#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies subtrees within the search base whose entries can be managed by the administrator(s). The admin-scope must be set to resources-in-specific-subtrees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#resource_subtree DelegatedAdminResourceRights#resource_subtree}
  */
  readonly resourceSubtree?: string[];
  /**
  * Specifies groups whose members can be managed by the administrator(s). The admin-scope must be set to resources-in-specific-groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#resources_in_group DelegatedAdminResourceRights#resources_in_group}
  */
  readonly resourcesInGroup?: string[];
  /**
  * Specifies the resource type applicable to these Delegated Admin Resource Rights.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#rest_resource_type DelegatedAdminResourceRights#rest_resource_type}
  */
  readonly restResourceType: string;
  /**
  * The type of Delegated Admin Resource Rights resource. Options are ['delegated-admin-resource-rights']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#type DelegatedAdminResourceRights#type}
  */
  readonly type?: string;
}
export interface DelegatedAdminResourceRightsRequiredActions {
}

export function delegatedAdminResourceRightsRequiredActionsToTerraform(struct?: DelegatedAdminResourceRightsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function delegatedAdminResourceRightsRequiredActionsToHclTerraform(struct?: DelegatedAdminResourceRightsRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DelegatedAdminResourceRightsRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DelegatedAdminResourceRightsRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DelegatedAdminResourceRightsRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DelegatedAdminResourceRightsRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DelegatedAdminResourceRightsRequiredActionsOutputReference {
    return new DelegatedAdminResourceRightsRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights pingdirectory_delegated_admin_resource_rights}
*/
export class DelegatedAdminResourceRights extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_delegated_admin_resource_rights";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DelegatedAdminResourceRights resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DelegatedAdminResourceRights to import
  * @param importFromId The id of the existing DelegatedAdminResourceRights that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DelegatedAdminResourceRights to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_delegated_admin_resource_rights", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/delegated_admin_resource_rights pingdirectory_delegated_admin_resource_rights} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DelegatedAdminResourceRightsConfig
  */
  public constructor(scope: Construct, id: string, config: DelegatedAdminResourceRightsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_delegated_admin_resource_rights',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPermission = config.adminPermission;
    this._adminScope = config.adminScope;
    this._delegatedAdminRightsName = config.delegatedAdminRightsName;
    this._description = config.description;
    this._enabled = config.enabled;
    this._resourceSubtree = config.resourceSubtree;
    this._resourcesInGroup = config.resourcesInGroup;
    this._restResourceType = config.restResourceType;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_permission - computed: true, optional: true, required: false
  private _adminPermission?: string[]; 
  public get adminPermission() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_permission'));
  }
  public set adminPermission(value: string[]) {
    this._adminPermission = value;
  }
  public resetAdminPermission() {
    this._adminPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPermissionInput() {
    return this._adminPermission;
  }

  // admin_scope - computed: true, optional: true, required: false
  private _adminScope?: string; 
  public get adminScope() {
    return this.getStringAttribute('admin_scope');
  }
  public set adminScope(value: string) {
    this._adminScope = value;
  }
  public resetAdminScope() {
    this._adminScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminScopeInput() {
    return this._adminScope;
  }

  // delegated_admin_rights_name - computed: false, optional: false, required: true
  private _delegatedAdminRightsName?: string; 
  public get delegatedAdminRightsName() {
    return this.getStringAttribute('delegated_admin_rights_name');
  }
  public set delegatedAdminRightsName(value: string) {
    this._delegatedAdminRightsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedAdminRightsNameInput() {
    return this._delegatedAdminRightsName;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DelegatedAdminResourceRightsRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // resource_subtree - computed: true, optional: true, required: false
  private _resourceSubtree?: string[]; 
  public get resourceSubtree() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_subtree'));
  }
  public set resourceSubtree(value: string[]) {
    this._resourceSubtree = value;
  }
  public resetResourceSubtree() {
    this._resourceSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSubtreeInput() {
    return this._resourceSubtree;
  }

  // resources_in_group - computed: true, optional: true, required: false
  private _resourcesInGroup?: string[]; 
  public get resourcesInGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('resources_in_group'));
  }
  public set resourcesInGroup(value: string[]) {
    this._resourcesInGroup = value;
  }
  public resetResourcesInGroup() {
    this._resourcesInGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInGroupInput() {
    return this._resourcesInGroup;
  }

  // rest_resource_type - computed: false, optional: false, required: true
  private _restResourceType?: string; 
  public get restResourceType() {
    return this.getStringAttribute('rest_resource_type');
  }
  public set restResourceType(value: string) {
    this._restResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restResourceTypeInput() {
    return this._restResourceType;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_permission: cdktf.listMapper(cdktf.stringToTerraform, false)(this._adminPermission),
      admin_scope: cdktf.stringToTerraform(this._adminScope),
      delegated_admin_rights_name: cdktf.stringToTerraform(this._delegatedAdminRightsName),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      resource_subtree: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceSubtree),
      resources_in_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourcesInGroup),
      rest_resource_type: cdktf.stringToTerraform(this._restResourceType),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_permission: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._adminPermission),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      admin_scope: {
        value: cdktf.stringToHclTerraform(this._adminScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_admin_rights_name: {
        value: cdktf.stringToHclTerraform(this._delegatedAdminRightsName),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_subtree: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceSubtree),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resources_in_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourcesInGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rest_resource_type: {
        value: cdktf.stringToHclTerraform(this._restResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
