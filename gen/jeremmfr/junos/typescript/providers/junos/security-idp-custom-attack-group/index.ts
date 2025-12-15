// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIdpCustomAttackGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of attacks/attack groups belonging to this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack_group#member SecurityIdpCustomAttackGroup#member}
  */
  readonly member: string[];
  /**
  * Custom attack group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack_group#name SecurityIdpCustomAttackGroup#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack_group junos_security_idp_custom_attack_group}
*/
export class SecurityIdpCustomAttackGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_idp_custom_attack_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIdpCustomAttackGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIdpCustomAttackGroup to import
  * @param importFromId The id of the existing SecurityIdpCustomAttackGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIdpCustomAttackGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_idp_custom_attack_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_idp_custom_attack_group junos_security_idp_custom_attack_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIdpCustomAttackGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIdpCustomAttackGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_idp_custom_attack_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._member = config.member;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._member),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._member),
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
