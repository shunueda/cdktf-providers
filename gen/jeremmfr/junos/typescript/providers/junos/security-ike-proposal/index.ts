// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIkeProposalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#authentication_algorithm SecurityIkeProposal#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#authentication_method SecurityIkeProposal#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Text description of IKE proposal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#description SecurityIkeProposal#description}
  */
  readonly description?: string;
  /**
  * Diffie-Hellman Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#dh_group SecurityIkeProposal#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Encryption algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#encryption_algorithm SecurityIkeProposal#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Lifetime, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#lifetime_seconds SecurityIkeProposal#lifetime_seconds}
  */
  readonly lifetimeSeconds?: number;
  /**
  * The name of IKE proposal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#name SecurityIkeProposal#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal junos_security_ike_proposal}
*/
export class SecurityIkeProposal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_ike_proposal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIkeProposal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIkeProposal to import
  * @param importFromId The id of the existing SecurityIkeProposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIkeProposal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_ike_proposal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_ike_proposal junos_security_ike_proposal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIkeProposalConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIkeProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_ike_proposal',
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
    this._authenticationAlgorithm = config.authenticationAlgorithm;
    this._authenticationMethod = config.authenticationMethod;
    this._description = config.description;
    this._dhGroup = config.dhGroup;
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._lifetimeSeconds = config.lifetimeSeconds;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

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

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifetime_seconds - computed: false, optional: true, required: false
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  public resetLifetimeSeconds() {
    this._lifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
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
      authentication_algorithm: cdktf.stringToTerraform(this._authenticationAlgorithm),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      description: cdktf.stringToTerraform(this._description),
      dh_group: cdktf.stringToTerraform(this._dhGroup),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      lifetime_seconds: cdktf.numberToTerraform(this._lifetimeSeconds),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_algorithm: {
        value: cdktf.stringToHclTerraform(this._authenticationAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.stringToHclTerraform(this._dhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._lifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
