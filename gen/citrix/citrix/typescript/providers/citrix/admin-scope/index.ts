// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the admin scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope#description AdminScope#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the admin scope is a tenant scope. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope#is_tenant_scope AdminScope#is_tenant_scope}
  */
  readonly isTenantScope?: boolean | cdktf.IResolvable;
  /**
  * Name of the admin scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope#name AdminScope#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope citrix_admin_scope}
*/
export class AdminScope extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_admin_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminScope to import
  * @param importFromId The id of the existing AdminScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_admin_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/admin_scope citrix_admin_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminScopeConfig
  */
  public constructor(scope: Construct, id: string, config: AdminScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_admin_scope',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._isTenantScope = config.isTenantScope;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // is_all_scope - computed: true, optional: false, required: false
  public get isAllScope() {
    return this.getBooleanAttribute('is_all_scope');
  }

  // is_built_in - computed: true, optional: false, required: false
  public get isBuiltIn() {
    return this.getBooleanAttribute('is_built_in');
  }

  // is_tenant_scope - computed: true, optional: true, required: false
  private _isTenantScope?: boolean | cdktf.IResolvable; 
  public get isTenantScope() {
    return this.getBooleanAttribute('is_tenant_scope');
  }
  public set isTenantScope(value: boolean | cdktf.IResolvable) {
    this._isTenantScope = value;
  }
  public resetIsTenantScope() {
    this._isTenantScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTenantScopeInput() {
    return this._isTenantScope;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_tenant_scope: cdktf.booleanToTerraform(this._isTenantScope),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_tenant_scope: {
        value: cdktf.booleanToHclTerraform(this._isTenantScope),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
