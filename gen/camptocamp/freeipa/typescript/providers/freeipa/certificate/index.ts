// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/certificate#csr Certificate#csr}
  */
  readonly csr: string;
  /**
  * Principal for this certificate (e.g. HTTP/test.example.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/certificate#principal Certificate#principal}
  */
  readonly principal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/certificate freeipa_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/certificate freeipa_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_certificate',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._csr = config.csr;
    this._principal = config.principal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // csr - computed: false, optional: false, required: true
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csr: cdktf.stringToTerraform(this._csr),
      principal: cdktf.stringToTerraform(this._principal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal: {
        value: cdktf.stringToHclTerraform(this._principal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
