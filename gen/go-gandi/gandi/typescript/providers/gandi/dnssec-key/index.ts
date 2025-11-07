// https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnssecKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * DNSSEC algorithm type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key#algorithm DnssecKey#algorithm}
  */
  readonly algorithm: number;
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key#domain DnssecKey#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key#id DnssecKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNSSEC public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key#public_key DnssecKey#public_key}
  */
  readonly publicKey: string;
  /**
  * DNSSEC key type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key#type DnssecKey#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key gandi_dnssec_key}
*/
export class DnssecKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gandi_dnssec_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnssecKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnssecKey to import
  * @param importFromId The id of the existing DnssecKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnssecKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gandi_dnssec_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/go-gandi/gandi/2.3.0/docs/resources/dnssec_key gandi_dnssec_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnssecKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DnssecKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'gandi_dnssec_key',
      terraformGeneratorMetadata: {
        providerName: 'gandi',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._domain = config.domain;
    this._id = config.id;
    this._publicKey = config.publicKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: number; 
  public get algorithm() {
    return this.getNumberAttribute('algorithm');
  }
  public set algorithm(value: number) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.numberToTerraform(this._algorithm),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      public_key: cdktf.stringToTerraform(this._publicKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.numberToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
