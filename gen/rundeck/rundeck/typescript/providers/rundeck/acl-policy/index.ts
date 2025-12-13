// https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/acl_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name for the ACL policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/acl_policy#name AclPolicy#name}
  */
  readonly name: string;
  /**
  * YAML formatted ACL Policy string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/acl_policy#policy AclPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/acl_policy rundeck_acl_policy}
*/
export class AclPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rundeck_acl_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclPolicy to import
  * @param importFromId The id of the existing AclPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/acl_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rundeck_acl_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rundeck/rundeck/1.0.0/docs/resources/acl_policy rundeck_acl_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AclPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'rundeck_acl_policy',
      terraformGeneratorMetadata: {
        providerName: 'rundeck',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
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
    this._policy = config.policy;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      policy: cdktf.stringToTerraform(this._policy),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
