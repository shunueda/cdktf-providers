// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceScopeOpenidConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description to apply to the resource scope.  The description can only be set when defining new scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid#description ResourceScopeOpenid#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to create the resource scope in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid#environment_id ResourceScopeOpenid#environment_id}
  */
  readonly environmentId: string;
  /**
  * A set of custom resource attribute IDs.  This property does not control predefined OpenID Connect (OIDC) mappings, such as the `email` claim in the OIDC `email` scope or the `name` claim in the `profile` scope. You can create custom attributes, and these custom attributes can be added to `mapped_claims` and will display in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid#mapped_claims ResourceScopeOpenid#mapped_claims}
  */
  readonly mappedClaims?: string[];
  /**
  * The name of the resource scope.  Predefined scopes of `address`, `email`, `openid`, `phone` and `profile` can be overridden, and new scopes can be defined.  E.g. `myawesomescope`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid#name ResourceScopeOpenid#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid pingone_resource_scope_openid}
*/
export class ResourceScopeOpenid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_resource_scope_openid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceScopeOpenid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceScopeOpenid to import
  * @param importFromId The id of the existing ResourceScopeOpenid that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceScopeOpenid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_resource_scope_openid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_openid pingone_resource_scope_openid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceScopeOpenidConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceScopeOpenidConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_resource_scope_openid',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
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
    this._environmentId = config.environmentId;
    this._mappedClaims = config.mappedClaims;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapped_claims - computed: false, optional: true, required: false
  private _mappedClaims?: string[]; 
  public get mappedClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('mapped_claims'));
  }
  public set mappedClaims(value: string[]) {
    this._mappedClaims = value;
  }
  public resetMappedClaims() {
    this._mappedClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedClaimsInput() {
    return this._mappedClaims;
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      mapped_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mappedClaims),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapped_claims: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mappedClaims),
        isBlock: false,
        type: "set",
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
