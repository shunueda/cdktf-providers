// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIkePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text description of IKE policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#description SecurityIkePolicy#description}
  */
  readonly description?: string;
  /**
  * IKE mode for Phase 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#mode SecurityIkePolicy#mode}
  */
  readonly mode?: string;
  /**
  * The name of IKE policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#name SecurityIkePolicy#name}
  */
  readonly name: string;
  /**
  * Preshared key with format as hexadecimal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#pre_shared_key_hexa SecurityIkePolicy#pre_shared_key_hexa}
  */
  readonly preSharedKeyHexa?: string;
  /**
  * Preshared key wit format as text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#pre_shared_key_text SecurityIkePolicy#pre_shared_key_text}
  */
  readonly preSharedKeyText?: string;
  /**
  * Types of default IKE proposal-set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#proposal_set SecurityIkePolicy#proposal_set}
  */
  readonly proposalSet?: string;
  /**
  * IKE proposals list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#proposals SecurityIkePolicy#proposals}
  */
  readonly proposals?: string[];
  /**
  * Re-auth Peer after reauth-frequency times hard lifetime. (0-100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#reauth_frequency SecurityIkePolicy#reauth_frequency}
  */
  readonly reauthFrequency?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy junos_security_ike_policy}
*/
export class SecurityIkePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_ike_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIkePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIkePolicy to import
  * @param importFromId The id of the existing SecurityIkePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIkePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_ike_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_ike_policy junos_security_ike_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIkePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIkePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_ike_policy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
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
    this._mode = config.mode;
    this._name = config.name;
    this._preSharedKeyHexa = config.preSharedKeyHexa;
    this._preSharedKeyText = config.preSharedKeyText;
    this._proposalSet = config.proposalSet;
    this._proposals = config.proposals;
    this._reauthFrequency = config.reauthFrequency;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // pre_shared_key_hexa - computed: false, optional: true, required: false
  private _preSharedKeyHexa?: string; 
  public get preSharedKeyHexa() {
    return this.getStringAttribute('pre_shared_key_hexa');
  }
  public set preSharedKeyHexa(value: string) {
    this._preSharedKeyHexa = value;
  }
  public resetPreSharedKeyHexa() {
    this._preSharedKeyHexa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyHexaInput() {
    return this._preSharedKeyHexa;
  }

  // pre_shared_key_text - computed: false, optional: true, required: false
  private _preSharedKeyText?: string; 
  public get preSharedKeyText() {
    return this.getStringAttribute('pre_shared_key_text');
  }
  public set preSharedKeyText(value: string) {
    this._preSharedKeyText = value;
  }
  public resetPreSharedKeyText() {
    this._preSharedKeyText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyTextInput() {
    return this._preSharedKeyText;
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

  // reauth_frequency - computed: false, optional: true, required: false
  private _reauthFrequency?: number; 
  public get reauthFrequency() {
    return this.getNumberAttribute('reauth_frequency');
  }
  public set reauthFrequency(value: number) {
    this._reauthFrequency = value;
  }
  public resetReauthFrequency() {
    this._reauthFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthFrequencyInput() {
    return this._reauthFrequency;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      pre_shared_key_hexa: cdktf.stringToTerraform(this._preSharedKeyHexa),
      pre_shared_key_text: cdktf.stringToTerraform(this._preSharedKeyText),
      proposal_set: cdktf.stringToTerraform(this._proposalSet),
      proposals: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proposals),
      reauth_frequency: cdktf.numberToTerraform(this._reauthFrequency),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      pre_shared_key_hexa: {
        value: cdktf.stringToHclTerraform(this._preSharedKeyHexa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key_text: {
        value: cdktf.stringToHclTerraform(this._preSharedKeyText),
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
      reauth_frequency: {
        value: cdktf.numberToHclTerraform(this._reauthFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
