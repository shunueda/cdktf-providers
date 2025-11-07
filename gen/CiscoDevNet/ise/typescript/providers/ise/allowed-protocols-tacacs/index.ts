// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllowedProtocolsTacacsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow CHAP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs#allow_chap AllowedProtocolsTacacs#allow_chap}
  */
  readonly allowChap: boolean | cdktf.IResolvable;
  /**
  * Allow MS CHAP v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs#allow_ms_chap_v1 AllowedProtocolsTacacs#allow_ms_chap_v1}
  */
  readonly allowMsChapV1: boolean | cdktf.IResolvable;
  /**
  * Allow PAP ASCII
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs#allow_pap_ascii AllowedProtocolsTacacs#allow_pap_ascii}
  */
  readonly allowPapAscii: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs#description AllowedProtocolsTacacs#description}
  */
  readonly description?: string;
  /**
  * The name of the allowed protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs#name AllowedProtocolsTacacs#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs ise_allowed_protocols_tacacs}
*/
export class AllowedProtocolsTacacs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_allowed_protocols_tacacs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllowedProtocolsTacacs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllowedProtocolsTacacs to import
  * @param importFromId The id of the existing AllowedProtocolsTacacs that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllowedProtocolsTacacs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_allowed_protocols_tacacs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/allowed_protocols_tacacs ise_allowed_protocols_tacacs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllowedProtocolsTacacsConfig
  */
  public constructor(scope: Construct, id: string, config: AllowedProtocolsTacacsConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_allowed_protocols_tacacs',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowChap = config.allowChap;
    this._allowMsChapV1 = config.allowMsChapV1;
    this._allowPapAscii = config.allowPapAscii;
    this._description = config.description;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_chap - computed: false, optional: false, required: true
  private _allowChap?: boolean | cdktf.IResolvable; 
  public get allowChap() {
    return this.getBooleanAttribute('allow_chap');
  }
  public set allowChap(value: boolean | cdktf.IResolvable) {
    this._allowChap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChapInput() {
    return this._allowChap;
  }

  // allow_ms_chap_v1 - computed: false, optional: false, required: true
  private _allowMsChapV1?: boolean | cdktf.IResolvable; 
  public get allowMsChapV1() {
    return this.getBooleanAttribute('allow_ms_chap_v1');
  }
  public set allowMsChapV1(value: boolean | cdktf.IResolvable) {
    this._allowMsChapV1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMsChapV1Input() {
    return this._allowMsChapV1;
  }

  // allow_pap_ascii - computed: false, optional: false, required: true
  private _allowPapAscii?: boolean | cdktf.IResolvable; 
  public get allowPapAscii() {
    return this.getBooleanAttribute('allow_pap_ascii');
  }
  public set allowPapAscii(value: boolean | cdktf.IResolvable) {
    this._allowPapAscii = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPapAsciiInput() {
    return this._allowPapAscii;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_chap: cdktf.booleanToTerraform(this._allowChap),
      allow_ms_chap_v1: cdktf.booleanToTerraform(this._allowMsChapV1),
      allow_pap_ascii: cdktf.booleanToTerraform(this._allowPapAscii),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_chap: {
        value: cdktf.booleanToHclTerraform(this._allowChap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_ms_chap_v1: {
        value: cdktf.booleanToHclTerraform(this._allowMsChapV1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_pap_ascii: {
        value: cdktf.booleanToHclTerraform(this._allowPapAscii),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
