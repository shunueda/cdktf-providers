// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Service token name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#name ServiceToken#name}
  */
  readonly name: string;
  /**
  * Service token state (1 is active, 2 is inactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#state ServiceToken#state}
  */
  readonly state?: number;
  /**
  * service_token_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#service_token_permissions ServiceToken#service_token_permissions}
  */
  readonly serviceTokenPermissions?: ServiceTokenServiceTokenPermissions[] | cdktf.IResolvable;
}
export interface ServiceTokenServiceTokenPermissions {
  /**
  * Whether or not to apply this permission to all projects for this service token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#all_projects ServiceToken#all_projects}
  */
  readonly allProjects: boolean | cdktf.IResolvable;
  /**
  * Set of permissions to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#permission_set ServiceToken#permission_set}
  */
  readonly permissionSet: string;
  /**
  * Project ID to apply this permission to for this service token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#project_id ServiceToken#project_id}
  */
  readonly projectId?: number;
  /**
  * What types of environments to apply Write permissions to.
  * Even if Write access is restricted to some environment types, the permission set will have Read access to all environments.
  * The values allowed are `all`, `development`, `staging`, `production` and `other`.
  * Not setting a value is the same as selecting `all`.
  * Not all permission sets support environment level write settings, only `analyst`, `database_admin`, `developer`, `git_admin` and `team_admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#writable_environment_categories ServiceToken#writable_environment_categories}
  */
  readonly writableEnvironmentCategories?: string[];
}

export function serviceTokenServiceTokenPermissionsToTerraform(struct?: ServiceTokenServiceTokenPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_projects: cdktf.booleanToTerraform(struct!.allProjects),
    permission_set: cdktf.stringToTerraform(struct!.permissionSet),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    writable_environment_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.writableEnvironmentCategories),
  }
}


export function serviceTokenServiceTokenPermissionsToHclTerraform(struct?: ServiceTokenServiceTokenPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.allProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permission_set: {
      value: cdktf.stringToHclTerraform(struct!.permissionSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    writable_environment_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.writableEnvironmentCategories),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceTokenServiceTokenPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceTokenServiceTokenPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProjects = this._allProjects;
    }
    if (this._permissionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionSet = this._permissionSet;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._writableEnvironmentCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.writableEnvironmentCategories = this._writableEnvironmentCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceTokenServiceTokenPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allProjects = undefined;
      this._permissionSet = undefined;
      this._projectId = undefined;
      this._writableEnvironmentCategories = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allProjects = value.allProjects;
      this._permissionSet = value.permissionSet;
      this._projectId = value.projectId;
      this._writableEnvironmentCategories = value.writableEnvironmentCategories;
    }
  }

  // all_projects - computed: false, optional: false, required: true
  private _allProjects?: boolean | cdktf.IResolvable; 
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }
  public set allProjects(value: boolean | cdktf.IResolvable) {
    this._allProjects = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allProjectsInput() {
    return this._allProjects;
  }

  // permission_set - computed: false, optional: false, required: true
  private _permissionSet?: string; 
  public get permissionSet() {
    return this.getStringAttribute('permission_set');
  }
  public set permissionSet(value: string) {
    this._permissionSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetInput() {
    return this._permissionSet;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // writable_environment_categories - computed: true, optional: true, required: false
  private _writableEnvironmentCategories?: string[]; 
  public get writableEnvironmentCategories() {
    return cdktf.Fn.tolist(this.getListAttribute('writable_environment_categories'));
  }
  public set writableEnvironmentCategories(value: string[]) {
    this._writableEnvironmentCategories = value;
  }
  public resetWritableEnvironmentCategories() {
    this._writableEnvironmentCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writableEnvironmentCategoriesInput() {
    return this._writableEnvironmentCategories;
  }
}

export class ServiceTokenServiceTokenPermissionsList extends cdktf.ComplexList {
  public internalValue? : ServiceTokenServiceTokenPermissions[] | cdktf.IResolvable

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
  public get(index: number): ServiceTokenServiceTokenPermissionsOutputReference {
    return new ServiceTokenServiceTokenPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token dbtcloud_service_token}
*/
export class ServiceToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_service_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceToken to import
  * @param importFromId The id of the existing ServiceToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_service_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/service_token dbtcloud_service_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_service_token',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._state = config.state;
    this._serviceTokenPermissions.internalValue = config.serviceTokenPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // state - computed: true, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // token_string - computed: true, optional: false, required: false
  public get tokenString() {
    return this.getStringAttribute('token_string');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // service_token_permissions - computed: false, optional: true, required: false
  private _serviceTokenPermissions = new ServiceTokenServiceTokenPermissionsList(this, "service_token_permissions", true);
  public get serviceTokenPermissions() {
    return this._serviceTokenPermissions;
  }
  public putServiceTokenPermissions(value: ServiceTokenServiceTokenPermissions[] | cdktf.IResolvable) {
    this._serviceTokenPermissions.internalValue = value;
  }
  public resetServiceTokenPermissions() {
    this._serviceTokenPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTokenPermissionsInput() {
    return this._serviceTokenPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.numberToTerraform(this._state),
      service_token_permissions: cdktf.listMapper(serviceTokenServiceTokenPermissionsToTerraform, true)(this._serviceTokenPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.numberToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_token_permissions: {
        value: cdktf.listMapperHcl(serviceTokenServiceTokenPermissionsToHclTerraform, true)(this._serviceTokenPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceTokenServiceTokenPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
