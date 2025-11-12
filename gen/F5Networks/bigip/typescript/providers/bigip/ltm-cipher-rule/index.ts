// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmCipherRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies one or more Cipher Suites used.Note: For SM2, type the following cipher suite string: ECC-SM4-SM3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#cipher LtmCipherRule#cipher}
  */
  readonly cipher: string;
  /**
  * Specifies descriptive text that identifies the cipher rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#description LtmCipherRule#description}
  */
  readonly description?: string;
  /**
  * Specifies the DH Groups Elliptic Curve Diffie-Hellman key exchange algorithms, separated by colons (:).Note: You can also type a special keyword, DEFAULT, which represents the recommended set of named groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#dh_groups LtmCipherRule#dh_groups}
  */
  readonly dhGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#id LtmCipherRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the cipher rule,name should be in pattern ``partition` + `cipher rule name``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#name LtmCipherRule#name}
  */
  readonly name: string;
  /**
  * Specifies the Signature Algorithms, separated by colons (:), that you want to include in the cipher rule. You can also type a special keyword, DEFAULT, which represents the recommended set of signature algorithms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#signature_algorithms LtmCipherRule#signature_algorithms}
  */
  readonly signatureAlgorithms?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule bigip_ltm_cipher_rule}
*/
export class LtmCipherRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_cipher_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmCipherRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmCipherRule to import
  * @param importFromId The id of the existing LtmCipherRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmCipherRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_cipher_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_cipher_rule bigip_ltm_cipher_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmCipherRuleConfig
  */
  public constructor(scope: Construct, id: string, config: LtmCipherRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_cipher_rule',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipher = config.cipher;
    this._description = config.description;
    this._dhGroups = config.dhGroups;
    this._id = config.id;
    this._name = config.name;
    this._signatureAlgorithms = config.signatureAlgorithms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher - computed: false, optional: false, required: true
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
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

  // dh_groups - computed: true, optional: true, required: false
  private _dhGroups?: string; 
  public get dhGroups() {
    return this.getStringAttribute('dh_groups');
  }
  public set dhGroups(value: string) {
    this._dhGroups = value;
  }
  public resetDhGroups() {
    this._dhGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupsInput() {
    return this._dhGroups;
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

  // signature_algorithms - computed: true, optional: true, required: false
  private _signatureAlgorithms?: string; 
  public get signatureAlgorithms() {
    return this.getStringAttribute('signature_algorithms');
  }
  public set signatureAlgorithms(value: string) {
    this._signatureAlgorithms = value;
  }
  public resetSignatureAlgorithms() {
    this._signatureAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmsInput() {
    return this._signatureAlgorithms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher: cdktf.stringToTerraform(this._cipher),
      description: cdktf.stringToTerraform(this._description),
      dh_groups: cdktf.stringToTerraform(this._dhGroups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      signature_algorithms: cdktf.stringToTerraform(this._signatureAlgorithms),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
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
      dh_groups: {
        value: cdktf.stringToHclTerraform(this._dhGroups),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithms: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
