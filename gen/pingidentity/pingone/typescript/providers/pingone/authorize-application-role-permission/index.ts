// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizeApplicationRolePermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application resource permission to assign to the application role.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission#application_resource_permission_id AuthorizeApplicationRolePermission#application_resource_permission_id}
  */
  readonly applicationResourcePermissionId: string;
  /**
  * The ID of the application role to configure the application role permission for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission#application_role_id AuthorizeApplicationRolePermission#application_role_id}
  */
  readonly applicationRoleId: string;
  /**
  * The ID of the environment to configure the application role permission in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission#environment_id AuthorizeApplicationRolePermission#environment_id}
  */
  readonly environmentId: string;
}
export interface AuthorizeApplicationRolePermissionResource {
}

export function authorizeApplicationRolePermissionResourceToTerraform(struct?: AuthorizeApplicationRolePermissionResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authorizeApplicationRolePermissionResourceToHclTerraform(struct?: AuthorizeApplicationRolePermissionResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthorizeApplicationRolePermissionResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApplicationRolePermissionResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApplicationRolePermissionResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission pingone_authorize_application_role_permission}
*/
export class AuthorizeApplicationRolePermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_authorize_application_role_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizeApplicationRolePermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizeApplicationRolePermission to import
  * @param importFromId The id of the existing AuthorizeApplicationRolePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizeApplicationRolePermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_authorize_application_role_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_application_role_permission pingone_authorize_application_role_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizeApplicationRolePermissionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizeApplicationRolePermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_authorize_application_role_permission',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationResourcePermissionId = config.applicationResourcePermissionId;
    this._applicationRoleId = config.applicationRoleId;
    this._environmentId = config.environmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // application_resource_permission_id - computed: false, optional: false, required: true
  private _applicationResourcePermissionId?: string; 
  public get applicationResourcePermissionId() {
    return this.getStringAttribute('application_resource_permission_id');
  }
  public set applicationResourcePermissionId(value: string) {
    this._applicationResourcePermissionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationResourcePermissionIdInput() {
    return this._applicationResourcePermissionId;
  }

  // application_role_id - computed: false, optional: false, required: true
  private _applicationRoleId?: string; 
  public get applicationRoleId() {
    return this.getStringAttribute('application_role_id');
  }
  public set applicationRoleId(value: string) {
    this._applicationRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRoleIdInput() {
    return this._applicationRoleId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // resource - computed: true, optional: false, required: false
  private _resource = new AuthorizeApplicationRolePermissionResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_resource_permission_id: cdktf.stringToTerraform(this._applicationResourcePermissionId),
      application_role_id: cdktf.stringToTerraform(this._applicationRoleId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_resource_permission_id: {
        value: cdktf.stringToHclTerraform(this._applicationResourcePermissionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_role_id: {
        value: cdktf.stringToHclTerraform(this._applicationRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
