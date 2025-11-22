// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Role description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#description Role#description}
  */
  readonly description: string;
  /**
  * Role effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#effect Role#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of policies for the role. See https://docs.datastax.com/en/astra/docs/user-permissions.html#_operational_roles_detail for supported policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#policy Role#policy}
  */
  readonly policy: string[];
  /**
  * Resources for which role is applicable (format is "drn:astra:org:<org UUID>", followed by optional resource criteria. See example usage above).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#resources Role#resources}
  */
  readonly resources: string[];
  /**
  * Role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#role_name Role#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role astra_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/role astra_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_role',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
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
    this._effect = config.effect;
    this._id = config.id;
    this._policy = config.policy;
    this._resources = config.resources;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      effect: cdktf.stringToTerraform(this._effect),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policy),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      role_name: cdktf.stringToTerraform(this._roleName),
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
      effect: {
        value: cdktf.stringToHclTerraform(this._effect),
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
      policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
