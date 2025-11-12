// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcipherSslciphersuiteBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#ciphergroupname SslcipherSslciphersuiteBinding#ciphergroupname}
  */
  readonly ciphergroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#ciphername SslcipherSslciphersuiteBinding#ciphername}
  */
  readonly ciphername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#cipheroperation SslcipherSslciphersuiteBinding#cipheroperation}
  */
  readonly cipheroperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#cipherpriority SslcipherSslciphersuiteBinding#cipherpriority}
  */
  readonly cipherpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#ciphgrpals SslcipherSslciphersuiteBinding#ciphgrpals}
  */
  readonly ciphgrpals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#description SslcipherSslciphersuiteBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#id SslcipherSslciphersuiteBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding citrixadc_sslcipher_sslciphersuite_binding}
*/
export class SslcipherSslciphersuiteBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcipher_sslciphersuite_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslcipherSslciphersuiteBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslcipherSslciphersuiteBinding to import
  * @param importFromId The id of the existing SslcipherSslciphersuiteBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslcipherSslciphersuiteBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcipher_sslciphersuite_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcipher_sslciphersuite_binding citrixadc_sslcipher_sslciphersuite_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcipherSslciphersuiteBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslcipherSslciphersuiteBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcipher_sslciphersuite_binding',
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
    this._ciphergroupname = config.ciphergroupname;
    this._ciphername = config.ciphername;
    this._cipheroperation = config.cipheroperation;
    this._cipherpriority = config.cipherpriority;
    this._ciphgrpals = config.ciphgrpals;
    this._description = config.description;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphergroupname - computed: false, optional: false, required: true
  private _ciphergroupname?: string; 
  public get ciphergroupname() {
    return this.getStringAttribute('ciphergroupname');
  }
  public set ciphergroupname(value: string) {
    this._ciphergroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphergroupnameInput() {
    return this._ciphergroupname;
  }

  // ciphername - computed: false, optional: false, required: true
  private _ciphername?: string; 
  public get ciphername() {
    return this.getStringAttribute('ciphername');
  }
  public set ciphername(value: string) {
    this._ciphername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphernameInput() {
    return this._ciphername;
  }

  // cipheroperation - computed: true, optional: true, required: false
  private _cipheroperation?: string; 
  public get cipheroperation() {
    return this.getStringAttribute('cipheroperation');
  }
  public set cipheroperation(value: string) {
    this._cipheroperation = value;
  }
  public resetCipheroperation() {
    this._cipheroperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipheroperationInput() {
    return this._cipheroperation;
  }

  // cipherpriority - computed: true, optional: true, required: false
  private _cipherpriority?: number; 
  public get cipherpriority() {
    return this.getNumberAttribute('cipherpriority');
  }
  public set cipherpriority(value: number) {
    this._cipherpriority = value;
  }
  public resetCipherpriority() {
    this._cipherpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherpriorityInput() {
    return this._cipherpriority;
  }

  // ciphgrpals - computed: true, optional: true, required: false
  private _ciphgrpals?: string; 
  public get ciphgrpals() {
    return this.getStringAttribute('ciphgrpals');
  }
  public set ciphgrpals(value: string) {
    this._ciphgrpals = value;
  }
  public resetCiphgrpals() {
    this._ciphgrpals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphgrpalsInput() {
    return this._ciphgrpals;
  }

  // description - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphergroupname: cdktf.stringToTerraform(this._ciphergroupname),
      ciphername: cdktf.stringToTerraform(this._ciphername),
      cipheroperation: cdktf.stringToTerraform(this._cipheroperation),
      cipherpriority: cdktf.numberToTerraform(this._cipherpriority),
      ciphgrpals: cdktf.stringToTerraform(this._ciphgrpals),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphergroupname: {
        value: cdktf.stringToHclTerraform(this._ciphergroupname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphername: {
        value: cdktf.stringToHclTerraform(this._ciphername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipheroperation: {
        value: cdktf.stringToHclTerraform(this._cipheroperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipherpriority: {
        value: cdktf.numberToHclTerraform(this._cipherpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ciphgrpals: {
        value: cdktf.stringToHclTerraform(this._ciphgrpals),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
