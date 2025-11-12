// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSystemCertificateOcspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp#id DataFortiadcSystemCertificateOcsp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp#mkey DataFortiadcSystemCertificateOcsp#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp#vdom DataFortiadcSystemCertificateOcsp#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp fortiadc_system_certificate_ocsp}
*/
export class DataFortiadcSystemCertificateOcsp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_certificate_ocsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSystemCertificateOcsp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSystemCertificateOcsp to import
  * @param importFromId The id of the existing DataFortiadcSystemCertificateOcsp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSystemCertificateOcsp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_certificate_ocsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/system_certificate_ocsp fortiadc_system_certificate_ocsp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSystemCertificateOcspConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSystemCertificateOcspConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_certificate_ocsp',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_trusted_root_ca - computed: true, optional: false, required: false
  public get acceptTrustedRootCa() {
    return this.getStringAttribute('accept_trusted_root_ca');
  }

  // ca_chain - computed: true, optional: false, required: false
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }

  // caching - computed: true, optional: false, required: false
  public get caching() {
    return this.getStringAttribute('caching');
  }

  // caching_expire_ahead_time - computed: true, optional: false, required: false
  public get cachingExpireAheadTime() {
    return this.getStringAttribute('caching_expire_ahead_time');
  }

  // caching_extra_max_age_check - computed: true, optional: false, required: false
  public get cachingExtraMaxAgeCheck() {
    return this.getStringAttribute('caching_extra_max_age_check');
  }

  // criteria_check - computed: true, optional: false, required: false
  public get criteriaCheck() {
    return this.getStringAttribute('criteria_check');
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

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getStringAttribute('max_age');
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

  // nonce_check - computed: true, optional: false, required: false
  public get nonceCheck() {
    return this.getStringAttribute('nonce_check');
  }

  // reject_ocsp_response_with_missing_nextupdate - computed: true, optional: false, required: false
  public get rejectOcspResponseWithMissingNextupdate() {
    return this.getStringAttribute('reject_ocsp_response_with_missing_nextupdate');
  }

  // remote_certificates - computed: true, optional: false, required: false
  public get remoteCertificates() {
    return this.getStringAttribute('remote_certificates');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // tunnel_ip - computed: true, optional: false, required: false
  public get tunnelIp() {
    return this.getStringAttribute('tunnel_ip');
  }

  // tunnel_password - computed: true, optional: false, required: false
  public get tunnelPassword() {
    return this.getStringAttribute('tunnel_password');
  }

  // tunnel_port - computed: true, optional: false, required: false
  public get tunnelPort() {
    return this.getStringAttribute('tunnel_port');
  }

  // tunnel_status - computed: true, optional: false, required: false
  public get tunnelStatus() {
    return this.getStringAttribute('tunnel_status');
  }

  // tunnel_username - computed: true, optional: false, required: false
  public get tunnelUsername() {
    return this.getStringAttribute('tunnel_username');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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

  // verify_others - computed: true, optional: false, required: false
  public get verifyOthers() {
    return this.getStringAttribute('verify_others');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
