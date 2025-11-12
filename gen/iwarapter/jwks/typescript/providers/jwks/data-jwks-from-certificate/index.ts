// https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJwksFromCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Used to populate the alg field of the JWK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate#alg DataJwksFromCertificate#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate#id DataJwksFromCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to override the kid field of the JWK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate#kid DataJwksFromCertificate#kid}
  */
  readonly kid?: string;
  /**
  * Requires a PEM-encoded single certificate or correctly ordered certificate chain that starts with an end-entity certificate.
  * 							Each certificate in the chain is the certificate of the CA that issued the previous certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate#pem DataJwksFromCertificate#pem}
  */
  readonly pem: string;
  /**
  * Used to populate the use field of the JWK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate#use DataJwksFromCertificate#use}
  */
  readonly use?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate jwks_from_certificate}
*/
export class DataJwksFromCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jwks_from_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJwksFromCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJwksFromCertificate to import
  * @param importFromId The id of the existing DataJwksFromCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJwksFromCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jwks_from_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/iwarapter/jwks/0.1.0/docs/data-sources/from_certificate jwks_from_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJwksFromCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataJwksFromCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'jwks_from_certificate',
      terraformGeneratorMetadata: {
        providerName: 'jwks',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alg = config.alg;
    this._id = config.id;
    this._kid = config.kid;
    this._pem = config.pem;
    this._use = config.use;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
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

  // jwks - computed: true, optional: false, required: false
  public get jwks() {
    return this.getStringAttribute('jwks');
  }

  // kid - computed: false, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // pem - computed: false, optional: false, required: true
  private _pem?: string; 
  public get pem() {
    return this.getStringAttribute('pem');
  }
  public set pem(value: string) {
    this._pem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem;
  }

  // use - computed: false, optional: true, required: false
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alg: cdktf.stringToTerraform(this._alg),
      id: cdktf.stringToTerraform(this._id),
      kid: cdktf.stringToTerraform(this._kid),
      pem: cdktf.stringToTerraform(this._pem),
      use: cdktf.stringToTerraform(this._use),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alg: {
        value: cdktf.stringToHclTerraform(this._alg),
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
      kid: {
        value: cdktf.stringToHclTerraform(this._kid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pem: {
        value: cdktf.stringToHclTerraform(this._pem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use: {
        value: cdktf.stringToHclTerraform(this._use),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
