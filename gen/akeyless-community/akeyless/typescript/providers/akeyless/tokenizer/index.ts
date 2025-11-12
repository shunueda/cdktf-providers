// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TokenizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alphabet to use in custom vaultless tokenization, such as '0123456789' for credit cards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#alphabet Tokenizer#alphabet}
  */
  readonly alphabet?: string;
  /**
  * The Decoding output template to use in custom vaultless tokenization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#decoding_template Tokenizer#decoding_template}
  */
  readonly decodingTemplate?: string;
  /**
  * Protection from accidental deletion of this item, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#delete_protection Tokenizer#delete_protection}
  */
  readonly deleteProtection?: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#description Tokenizer#description}
  */
  readonly description?: string;
  /**
  * The Encoding output template to use in custom vaultless tokenization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#encoding_template Tokenizer#encoding_template}
  */
  readonly encodingTemplate?: string;
  /**
  * AES key name to use in vaultless tokenization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#encryption_key_name Tokenizer#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#id Tokenizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tokenizer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#name Tokenizer#name}
  */
  readonly name: string;
  /**
  * Pattern to use in custom vaultless tokenization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#pattern Tokenizer#pattern}
  */
  readonly pattern?: string;
  /**
  * List of the tags attached to this key. To specify multiple tags use argument multiple times: --tag Tag1 --tag Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#tag Tokenizer#tag}
  */
  readonly tag?: string[];
  /**
  * Which template type this tokenizer is used for [SSN,CreditCard,USPhoneNumber,Custom]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#template_type Tokenizer#template_type}
  */
  readonly templateType: string;
  /**
  * Tokenizer type(vaultless)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#tokenizer_type Tokenizer#tokenizer_type}
  */
  readonly tokenizerType?: string;
  /**
  * The tweak type to use in vaultless tokenization [Supplied, Generated, Internal, Masking]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#tweak_type Tokenizer#tweak_type}
  */
  readonly tweakType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer akeyless_tokenizer}
*/
export class Tokenizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_tokenizer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tokenizer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tokenizer to import
  * @param importFromId The id of the existing Tokenizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tokenizer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_tokenizer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/tokenizer akeyless_tokenizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TokenizerConfig
  */
  public constructor(scope: Construct, id: string, config: TokenizerConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_tokenizer',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alphabet = config.alphabet;
    this._decodingTemplate = config.decodingTemplate;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._encodingTemplate = config.encodingTemplate;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._name = config.name;
    this._pattern = config.pattern;
    this._tag = config.tag;
    this._templateType = config.templateType;
    this._tokenizerType = config.tokenizerType;
    this._tweakType = config.tweakType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alphabet - computed: false, optional: true, required: false
  private _alphabet?: string; 
  public get alphabet() {
    return this.getStringAttribute('alphabet');
  }
  public set alphabet(value: string) {
    this._alphabet = value;
  }
  public resetAlphabet() {
    this._alphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabetInput() {
    return this._alphabet;
  }

  // decoding_template - computed: false, optional: true, required: false
  private _decodingTemplate?: string; 
  public get decodingTemplate() {
    return this.getStringAttribute('decoding_template');
  }
  public set decodingTemplate(value: string) {
    this._decodingTemplate = value;
  }
  public resetDecodingTemplate() {
    this._decodingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingTemplateInput() {
    return this._decodingTemplate;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: string; 
  public get deleteProtection() {
    return this.getStringAttribute('delete_protection');
  }
  public set deleteProtection(value: string) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // encoding_template - computed: false, optional: true, required: false
  private _encodingTemplate?: string; 
  public get encodingTemplate() {
    return this.getStringAttribute('encoding_template');
  }
  public set encodingTemplate(value: string) {
    this._encodingTemplate = value;
  }
  public resetEncodingTemplate() {
    this._encodingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingTemplateInput() {
    return this._encodingTemplate;
  }

  // encryption_key_name - computed: false, optional: true, required: false
  private _encryptionKeyName?: string; 
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }
  public set encryptionKeyName(value: string) {
    this._encryptionKeyName = value;
  }
  public resetEncryptionKeyName() {
    this._encryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyNameInput() {
    return this._encryptionKeyName;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return cdktf.Fn.tolist(this.getListAttribute('tag'));
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // template_type - computed: false, optional: false, required: true
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // tokenizer_type - computed: false, optional: true, required: false
  private _tokenizerType?: string; 
  public get tokenizerType() {
    return this.getStringAttribute('tokenizer_type');
  }
  public set tokenizerType(value: string) {
    this._tokenizerType = value;
  }
  public resetTokenizerType() {
    this._tokenizerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenizerTypeInput() {
    return this._tokenizerType;
  }

  // tweak - computed: true, optional: false, required: false
  public get tweak() {
    return this.getStringAttribute('tweak');
  }

  // tweak_type - computed: false, optional: true, required: false
  private _tweakType?: string; 
  public get tweakType() {
    return this.getStringAttribute('tweak_type');
  }
  public set tweakType(value: string) {
    this._tweakType = value;
  }
  public resetTweakType() {
    this._tweakType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tweakTypeInput() {
    return this._tweakType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alphabet: cdktf.stringToTerraform(this._alphabet),
      decoding_template: cdktf.stringToTerraform(this._decodingTemplate),
      delete_protection: cdktf.stringToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      encoding_template: cdktf.stringToTerraform(this._encodingTemplate),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pattern: cdktf.stringToTerraform(this._pattern),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      template_type: cdktf.stringToTerraform(this._templateType),
      tokenizer_type: cdktf.stringToTerraform(this._tokenizerType),
      tweak_type: cdktf.stringToTerraform(this._tweakType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alphabet: {
        value: cdktf.stringToHclTerraform(this._alphabet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decoding_template: {
        value: cdktf.stringToHclTerraform(this._decodingTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.stringToHclTerraform(this._deleteProtection),
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
      encoding_template: {
        value: cdktf.stringToHclTerraform(this._encodingTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyName),
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
      pattern: {
        value: cdktf.stringToHclTerraform(this._pattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template_type: {
        value: cdktf.stringToHclTerraform(this._templateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tokenizer_type: {
        value: cdktf.stringToHclTerraform(this._tokenizerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tweak_type: {
        value: cdktf.stringToHclTerraform(this._tweakType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
