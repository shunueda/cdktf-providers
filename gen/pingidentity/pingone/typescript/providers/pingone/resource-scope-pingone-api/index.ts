// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceScopePingoneApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description to apply to the resource scope.  The description can only be set when defining new scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api#description ResourceScopePingoneApi#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to create the resource scope in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api#environment_id ResourceScopePingoneApi#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name of the resource scope.  Predefined scopes of `p1:read:user` and `p1:update:user` can be overridden, and new scopes can be defined as subscopes in the format `p1:read:user:{suffix}` or `p1:update:user:{suffix}`.  E.g. `p1:read:user:newscope` or `p1:update:user:newscope`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api#name ResourceScopePingoneApi#name}
  */
  readonly name: string;
  /**
  * A list that specifies the user schema attributes that can be read or updated for the specified PingOne access control scope. The value is an array of schema attribute paths (such as `username`, `name.given`, `shirtSize`) that the scope controls. This property is supported only for the `p1:read:user`, `p1:update:user` and `p1:read:user:{suffix}` and `p1:update:user:{suffix}` scopes. No other PingOne platform scopes allow this behavior. Any attributes not listed in the attribute array are excluded from the read or update action. The wildcard path (`*`) in the array includes all attributes and cannot be used in conjunction with any other user schema attribute paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api#schema_attributes ResourceScopePingoneApi#schema_attributes}
  */
  readonly schemaAttributes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api pingone_resource_scope_pingone_api}
*/
export class ResourceScopePingoneApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_resource_scope_pingone_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceScopePingoneApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceScopePingoneApi to import
  * @param importFromId The id of the existing ResourceScopePingoneApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceScopePingoneApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_resource_scope_pingone_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_scope_pingone_api pingone_resource_scope_pingone_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceScopePingoneApiConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceScopePingoneApiConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_resource_scope_pingone_api',
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
    this._name = config.name;
    this._schemaAttributes = config.schemaAttributes;
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

  // schema_attributes - computed: false, optional: true, required: false
  private _schemaAttributes?: string[]; 
  public get schemaAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_attributes'));
  }
  public set schemaAttributes(value: string[]) {
    this._schemaAttributes = value;
  }
  public resetSchemaAttributes() {
    this._schemaAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaAttributesInput() {
    return this._schemaAttributes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      schema_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaAttributes),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaAttributes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
