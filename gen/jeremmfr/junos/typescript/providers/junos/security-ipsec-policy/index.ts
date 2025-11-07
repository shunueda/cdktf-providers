// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIpsecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text description of IPSec policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy#description SecurityIpsecPolicy#description}
  */
  readonly description?: string;
  /**
  * The name of IPSec policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy#name SecurityIpsecPolicy#name}
  */
  readonly name: string;
  /**
  * Diffie-Hellman Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy#pfs_keys SecurityIpsecPolicy#pfs_keys}
  */
  readonly pfsKeys?: string;
  /**
  * Types of default IPSEC proposal-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy#proposal_set SecurityIpsecPolicy#proposal_set}
  */
  readonly proposalSet?: string;
  /**
  * IPSec proposals list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy#proposals SecurityIpsecPolicy#proposals}
  */
  readonly proposals?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy junos_security_ipsec_policy}
*/
export class SecurityIpsecPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_ipsec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIpsecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIpsecPolicy to import
  * @param importFromId The id of the existing SecurityIpsecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIpsecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_ipsec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ipsec_policy junos_security_ipsec_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIpsecPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIpsecPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_ipsec_policy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
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
    this._name = config.name;
    this._pfsKeys = config.pfsKeys;
    this._proposalSet = config.proposalSet;
    this._proposals = config.proposals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // pfs_keys - computed: false, optional: true, required: false
  private _pfsKeys?: string; 
  public get pfsKeys() {
    return this.getStringAttribute('pfs_keys');
  }
  public set pfsKeys(value: string) {
    this._pfsKeys = value;
  }
  public resetPfsKeys() {
    this._pfsKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsKeysInput() {
    return this._pfsKeys;
  }

  // proposal_set - computed: false, optional: true, required: false
  private _proposalSet?: string; 
  public get proposalSet() {
    return this.getStringAttribute('proposal_set');
  }
  public set proposalSet(value: string) {
    this._proposalSet = value;
  }
  public resetProposalSet() {
    this._proposalSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalSetInput() {
    return this._proposalSet;
  }

  // proposals - computed: false, optional: true, required: false
  private _proposals?: string[]; 
  public get proposals() {
    return this.getListAttribute('proposals');
  }
  public set proposals(value: string[]) {
    this._proposals = value;
  }
  public resetProposals() {
    this._proposals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalsInput() {
    return this._proposals;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      pfs_keys: cdktf.stringToTerraform(this._pfsKeys),
      proposal_set: cdktf.stringToTerraform(this._proposalSet),
      proposals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proposals),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pfs_keys: {
        value: cdktf.stringToHclTerraform(this._pfsKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposal_set: {
        value: cdktf.stringToHclTerraform(this._proposalSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposals: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proposals),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
