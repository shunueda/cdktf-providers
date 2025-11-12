// https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SigningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias of the signing key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#alias SigningKey#alias}
  */
  readonly alias: string;
  /**
  * When set to `true`, the public key will be automatically propagated to the Edge Node just once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#fail_on_propagation_failure SigningKey#fail_on_propagation_failure}
  */
  readonly failOnPropagationFailure?: boolean | cdktf.IResolvable;
  /**
  * Passphrase for key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#passphrase SigningKey#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#private_key SigningKey#private_key}
  */
  readonly privateKey: string;
  /**
  * When set to `true`, the public key will be automatically propagated to the Edge Node just once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#propagate_to_edge_nodes SigningKey#propagate_to_edge_nodes}
  */
  readonly propagateToEdgeNodes?: boolean | cdktf.IResolvable;
  /**
  * Type of the signing key. Valid value: `gpg` or `pgp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#protocol SigningKey#protocol}
  */
  readonly protocol: string;
  /**
  * Public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#public_key SigningKey#public_key}
  */
  readonly publicKey: string;
  /**
  * Set this to `true` if this is the first key that is set or if there is no default key in Artifactory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#set_as_default SigningKey#set_as_default}
  */
  readonly setAsDefault?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key distribution_signing_key}
*/
export class SigningKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "distribution_signing_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SigningKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SigningKey to import
  * @param importFromId The id of the existing SigningKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SigningKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "distribution_signing_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/distribution/1.3.0/docs/resources/signing_key distribution_signing_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SigningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SigningKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'distribution_signing_key',
      terraformGeneratorMetadata: {
        providerName: 'distribution',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._failOnPropagationFailure = config.failOnPropagationFailure;
    this._passphrase = config.passphrase;
    this._privateKey = config.privateKey;
    this._propagateToEdgeNodes = config.propagateToEdgeNodes;
    this._protocol = config.protocol;
    this._publicKey = config.publicKey;
    this._setAsDefault = config.setAsDefault;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // fail_on_propagation_failure - computed: false, optional: true, required: false
  private _failOnPropagationFailure?: boolean | cdktf.IResolvable; 
  public get failOnPropagationFailure() {
    return this.getBooleanAttribute('fail_on_propagation_failure');
  }
  public set failOnPropagationFailure(value: boolean | cdktf.IResolvable) {
    this._failOnPropagationFailure = value;
  }
  public resetFailOnPropagationFailure() {
    this._failOnPropagationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnPropagationFailureInput() {
    return this._failOnPropagationFailure;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // propagate_to_edge_nodes - computed: false, optional: true, required: false
  private _propagateToEdgeNodes?: boolean | cdktf.IResolvable; 
  public get propagateToEdgeNodes() {
    return this.getBooleanAttribute('propagate_to_edge_nodes');
  }
  public set propagateToEdgeNodes(value: boolean | cdktf.IResolvable) {
    this._propagateToEdgeNodes = value;
  }
  public resetPropagateToEdgeNodes() {
    this._propagateToEdgeNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateToEdgeNodesInput() {
    return this._propagateToEdgeNodes;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // set_as_default - computed: false, optional: true, required: false
  private _setAsDefault?: boolean | cdktf.IResolvable; 
  public get setAsDefault() {
    return this.getBooleanAttribute('set_as_default');
  }
  public set setAsDefault(value: boolean | cdktf.IResolvable) {
    this._setAsDefault = value;
  }
  public resetSetAsDefault() {
    this._setAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAsDefaultInput() {
    return this._setAsDefault;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      fail_on_propagation_failure: cdktf.booleanToTerraform(this._failOnPropagationFailure),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      private_key: cdktf.stringToTerraform(this._privateKey),
      propagate_to_edge_nodes: cdktf.booleanToTerraform(this._propagateToEdgeNodes),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_key: cdktf.stringToTerraform(this._publicKey),
      set_as_default: cdktf.booleanToTerraform(this._setAsDefault),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_on_propagation_failure: {
        value: cdktf.booleanToHclTerraform(this._failOnPropagationFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_to_edge_nodes: {
        value: cdktf.booleanToHclTerraform(this._propagateToEdgeNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_as_default: {
        value: cdktf.booleanToHclTerraform(this._setAsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
