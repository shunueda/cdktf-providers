// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RolebindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the IAM group to grant the identity access to with the role's capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding#group Rolebinding#group}
  */
  readonly group: string;
  /**
  * The id of an identity to grant role's capabilities to at the scope of the IAM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding#identity Rolebinding#identity}
  */
  readonly identity: string;
  /**
  * The role to grant identity at the scope of the IAM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding#role Rolebinding#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding chainguard_rolebinding}
*/
export class Rolebinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_rolebinding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rolebinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rolebinding to import
  * @param importFromId The id of the existing Rolebinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rolebinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_rolebinding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.42/docs/resources/rolebinding chainguard_rolebinding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RolebindingConfig
  */
  public constructor(scope: Construct, id: string, config: RolebindingConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_rolebinding',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.42',
        providerVersionConstraint: '0.1.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._identity = config.identity;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      identity: cdktf.stringToTerraform(this._identity),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
