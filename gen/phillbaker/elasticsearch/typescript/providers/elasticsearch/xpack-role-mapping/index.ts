// https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface XpackRoleMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mappings that have `enabled` set to `false` are ignored when role mapping is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#enabled XpackRoleMapping#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#id XpackRoleMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Additional metadata that helps define which roles are assigned to each user. Keys beginning with `_` are reserved for system usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#metadata XpackRoleMapping#metadata}
  */
  readonly metadata?: string;
  /**
  * The distinct name that identifies the role mapping, used solely as an identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#role_mapping_name XpackRoleMapping#role_mapping_name}
  */
  readonly roleMappingName: string;
  /**
  * A list of role names that are granted to the users that match the role mapping rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#roles XpackRoleMapping#roles}
  */
  readonly roles: string[];
  /**
  * A list of mustache templates that will be evaluated to determine the roles names that should granted to the users that match the role mapping rules. This matches fields of users, rules can be grouped into `all` and `any` top level keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#rules XpackRoleMapping#rules}
  */
  readonly rules: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping elasticsearch_xpack_role_mapping}
*/
export class XpackRoleMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_xpack_role_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a XpackRoleMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the XpackRoleMapping to import
  * @param importFromId The id of the existing XpackRoleMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the XpackRoleMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_xpack_role_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phillbaker/elasticsearch/2.0.7/docs/resources/xpack_role_mapping elasticsearch_xpack_role_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options XpackRoleMappingConfig
  */
  public constructor(scope: Construct, id: string, config: XpackRoleMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_xpack_role_mapping',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._metadata = config.metadata;
    this._roleMappingName = config.roleMappingName;
    this._roles = config.roles;
    this._rules = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // role_mapping_name - computed: false, optional: false, required: true
  private _roleMappingName?: string; 
  public get roleMappingName() {
    return this.getStringAttribute('role_mapping_name');
  }
  public set roleMappingName(value: string) {
    this._roleMappingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleMappingNameInput() {
    return this._roleMappingName;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // rules - computed: false, optional: false, required: true
  private _rules?: string; 
  public get rules() {
    return this.getStringAttribute('rules');
  }
  public set rules(value: string) {
    this._rules = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      role_mapping_name: cdktf.stringToTerraform(this._roleMappingName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      rules: cdktf.stringToTerraform(this._rules),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_mapping_name: {
        value: cdktf.stringToHclTerraform(this._roleMappingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.stringToHclTerraform(this._rules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
