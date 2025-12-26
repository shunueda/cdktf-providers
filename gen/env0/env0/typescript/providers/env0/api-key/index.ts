// https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#id ApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the api key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#name ApiKey#name}
  */
  readonly name: string;
  /**
  * if set to 'true' will omit the api_key_secret from the state. This would mean that the api_key_secret cannot be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#omit_api_key_secret ApiKey#omit_api_key_secret}
  */
  readonly omitApiKeySecret?: boolean | cdktf.IResolvable;
  /**
  * the api key type. 'Admin', 'User' or a custom role id. Defaults to 'Admin'. For more details check https://docs.env0.com/docs/api-keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#organization_role ApiKey#organization_role}
  */
  readonly organizationRole?: string;
  /**
  * project_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#project_permissions ApiKey#project_permissions}
  */
  readonly projectPermissions?: ApiKeyProjectPermissions[] | cdktf.IResolvable;
}
export interface ApiKeyProjectPermissions {
  /**
  * The project ID to assign permissions to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#project_id ApiKey#project_id}
  */
  readonly projectId: string;
  /**
  * The role for this project. Must be one of: Planner, Viewer, Deployer, Admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#project_role ApiKey#project_role}
  */
  readonly projectRole: string;
}

export function apiKeyProjectPermissionsToTerraform(struct?: ApiKeyProjectPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_role: cdktf.stringToTerraform(struct!.projectRole),
  }
}


export function apiKeyProjectPermissionsToHclTerraform(struct?: ApiKeyProjectPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_role: {
      value: cdktf.stringToHclTerraform(struct!.projectRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiKeyProjectPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiKeyProjectPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectRole = this._projectRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiKeyProjectPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._projectRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._projectRole = value.projectRole;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_role - computed: false, optional: false, required: true
  private _projectRole?: string; 
  public get projectRole() {
    return this.getStringAttribute('project_role');
  }
  public set projectRole(value: string) {
    this._projectRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRoleInput() {
    return this._projectRole;
  }
}

export class ApiKeyProjectPermissionsList extends cdktf.ComplexList {
  public internalValue? : ApiKeyProjectPermissions[] | cdktf.IResolvable

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
  public get(index: number): ApiKeyProjectPermissionsOutputReference {
    return new ApiKeyProjectPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key env0_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/api_key env0_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_api_key',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.8',
        providerVersionConstraint: '1.29.8'
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
    this._name = config.name;
    this._omitApiKeySecret = config.omitApiKeySecret;
    this._organizationRole = config.organizationRole;
    this._projectPermissions.internalValue = config.projectPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }

  // api_key_secret - computed: true, optional: false, required: false
  public get apiKeySecret() {
    return this.getStringAttribute('api_key_secret');
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

  // omit_api_key_secret - computed: false, optional: true, required: false
  private _omitApiKeySecret?: boolean | cdktf.IResolvable; 
  public get omitApiKeySecret() {
    return this.getBooleanAttribute('omit_api_key_secret');
  }
  public set omitApiKeySecret(value: boolean | cdktf.IResolvable) {
    this._omitApiKeySecret = value;
  }
  public resetOmitApiKeySecret() {
    this._omitApiKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitApiKeySecretInput() {
    return this._omitApiKeySecret;
  }

  // organization_role - computed: false, optional: true, required: false
  private _organizationRole?: string; 
  public get organizationRole() {
    return this.getStringAttribute('organization_role');
  }
  public set organizationRole(value: string) {
    this._organizationRole = value;
  }
  public resetOrganizationRole() {
    this._organizationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleInput() {
    return this._organizationRole;
  }

  // project_permissions - computed: false, optional: true, required: false
  private _projectPermissions = new ApiKeyProjectPermissionsList(this, "project_permissions", true);
  public get projectPermissions() {
    return this._projectPermissions;
  }
  public putProjectPermissions(value: ApiKeyProjectPermissions[] | cdktf.IResolvable) {
    this._projectPermissions.internalValue = value;
  }
  public resetProjectPermissions() {
    this._projectPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectPermissionsInput() {
    return this._projectPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      omit_api_key_secret: cdktf.booleanToTerraform(this._omitApiKeySecret),
      organization_role: cdktf.stringToTerraform(this._organizationRole),
      project_permissions: cdktf.listMapper(apiKeyProjectPermissionsToTerraform, true)(this._projectPermissions.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omit_api_key_secret: {
        value: cdktf.booleanToHclTerraform(this._omitApiKeySecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization_role: {
        value: cdktf.stringToHclTerraform(this._organizationRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_permissions: {
        value: cdktf.listMapperHcl(apiKeyProjectPermissionsToHclTerraform, true)(this._projectPermissions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiKeyProjectPermissionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
