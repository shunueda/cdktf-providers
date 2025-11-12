// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertkeySslocspresponderBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding#ca SslcertkeySslocspresponderBinding#ca}
  */
  readonly ca?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding#certkey SslcertkeySslocspresponderBinding#certkey}
  */
  readonly certkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding#id SslcertkeySslocspresponderBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding#ocspresponder SslcertkeySslocspresponderBinding#ocspresponder}
  */
  readonly ocspresponder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding#priority SslcertkeySslocspresponderBinding#priority}
  */
  readonly priority?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding citrixadc_sslcertkey_sslocspresponder_binding}
*/
export class SslcertkeySslocspresponderBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertkey_sslocspresponder_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslcertkeySslocspresponderBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslcertkeySslocspresponderBinding to import
  * @param importFromId The id of the existing SslcertkeySslocspresponderBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslcertkeySslocspresponderBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertkey_sslocspresponder_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_sslocspresponder_binding citrixadc_sslcertkey_sslocspresponder_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertkeySslocspresponderBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslcertkeySslocspresponderBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertkey_sslocspresponder_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ca = config.ca;
    this._certkey = config.certkey;
    this._id = config.id;
    this._ocspresponder = config.ocspresponder;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: true, optional: true, required: false
  private _ca?: boolean | cdktf.IResolvable; 
  public get ca() {
    return this.getBooleanAttribute('ca');
  }
  public set ca(value: boolean | cdktf.IResolvable) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // certkey - computed: false, optional: false, required: true
  private _certkey?: string; 
  public get certkey() {
    return this.getStringAttribute('certkey');
  }
  public set certkey(value: string) {
    this._certkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeyInput() {
    return this._certkey;
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

  // ocspresponder - computed: false, optional: false, required: true
  private _ocspresponder?: string; 
  public get ocspresponder() {
    return this.getStringAttribute('ocspresponder');
  }
  public set ocspresponder(value: string) {
    this._ocspresponder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspresponderInput() {
    return this._ocspresponder;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.booleanToTerraform(this._ca),
      certkey: cdktf.stringToTerraform(this._certkey),
      id: cdktf.stringToTerraform(this._id),
      ocspresponder: cdktf.stringToTerraform(this._ocspresponder),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.booleanToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certkey: {
        value: cdktf.stringToHclTerraform(this._certkey),
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
      ocspresponder: {
        value: cdktf.stringToHclTerraform(this._ocspresponder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
