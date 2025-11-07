// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateIntermediateCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#ca_id SystemCertificateIntermediateCa#ca_id}
  */
  readonly caId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#host_header SystemCertificateIntermediateCa#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#id SystemCertificateIntermediateCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#mkey SystemCertificateIntermediateCa#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#scep_url SystemCertificateIntermediateCa#scep_url}
  */
  readonly scepUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#vdom SystemCertificateIntermediateCa#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca fortiadc_system_certificate_intermediate_ca}
*/
export class SystemCertificateIntermediateCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_certificate_intermediate_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificateIntermediateCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificateIntermediateCa to import
  * @param importFromId The id of the existing SystemCertificateIntermediateCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificateIntermediateCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_certificate_intermediate_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_intermediate_ca fortiadc_system_certificate_intermediate_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateIntermediateCaConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateIntermediateCaConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_certificate_intermediate_ca',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caId = config.caId;
    this._hostHeader = config.hostHeader;
    this._id = config.id;
    this._mkey = config.mkey;
    this._scepUrl = config.scepUrl;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_id - computed: false, optional: true, required: false
  private _caId?: string; 
  public get caId() {
    return this.getStringAttribute('ca_id');
  }
  public set caId(value: string) {
    this._caId = value;
  }
  public resetCaId() {
    this._caId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdInput() {
    return this._caId;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // scep_url - computed: false, optional: false, required: true
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_id: cdktf.stringToTerraform(this._caId),
      host_header: cdktf.stringToTerraform(this._hostHeader),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_id: {
        value: cdktf.stringToHclTerraform(this._caId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_header: {
        value: cdktf.stringToHclTerraform(this._hostHeader),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_url: {
        value: cdktf.stringToHclTerraform(this._scepUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
