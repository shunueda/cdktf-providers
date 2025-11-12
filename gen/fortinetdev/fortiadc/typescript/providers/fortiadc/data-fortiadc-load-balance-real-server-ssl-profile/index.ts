// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalanceRealServerSslProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile#id DataFortiadcLoadBalanceRealServerSslProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile#mkey DataFortiadcLoadBalanceRealServerSslProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile#vdom DataFortiadcLoadBalanceRealServerSslProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile fortiadc_load_balance_real_server_ssl_profile}
*/
export class DataFortiadcLoadBalanceRealServerSslProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_real_server_ssl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalanceRealServerSslProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalanceRealServerSslProfile to import
  * @param importFromId The id of the existing DataFortiadcLoadBalanceRealServerSslProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalanceRealServerSslProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_real_server_ssl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_real_server_ssl_profile fortiadc_load_balance_real_server_ssl_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalanceRealServerSslProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalanceRealServerSslProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_real_server_ssl_profile',
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

  // allow_ssl_versions - computed: true, optional: false, required: false
  public get allowSslVersions() {
    return this.getStringAttribute('allow_ssl_versions');
  }

  // cert_verify - computed: true, optional: false, required: false
  public get certVerify() {
    return this.getStringAttribute('cert_verify');
  }

  // ciphers_tlsv13 - computed: true, optional: false, required: false
  public get ciphersTlsv13() {
    return this.getStringAttribute('ciphers_tlsv13');
  }

  // customized_ssl_ciphers - computed: true, optional: false, required: false
  public get customizedSslCiphers() {
    return this.getStringAttribute('customized_ssl_ciphers');
  }

  // customized_ssl_ciphers_flag - computed: true, optional: false, required: false
  public get customizedSslCiphersFlag() {
    return this.getStringAttribute('customized_ssl_ciphers_flag');
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

  // local_cert - computed: true, optional: false, required: false
  public get localCert() {
    return this.getStringAttribute('local_cert');
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

  // new_ssl_ciphers_long - computed: true, optional: false, required: false
  public get newSslCiphersLong() {
    return this.getStringAttribute('new_ssl_ciphers_long');
  }

  // renegotiate_period - computed: true, optional: false, required: false
  public get renegotiatePeriod() {
    return this.getStringAttribute('renegotiate_period');
  }

  // renegotiate_size - computed: true, optional: false, required: false
  public get renegotiateSize() {
    return this.getStringAttribute('renegotiate_size');
  }

  // renegotiation - computed: true, optional: false, required: false
  public get renegotiation() {
    return this.getStringAttribute('renegotiation');
  }

  // renegotiation_deny_action - computed: true, optional: false, required: false
  public get renegotiationDenyAction() {
    return this.getStringAttribute('renegotiation_deny_action');
  }

  // rfc7919_comply - computed: true, optional: false, required: false
  public get rfc7919Comply() {
    return this.getStringAttribute('rfc7919_comply');
  }

  // secure_renegotiation - computed: true, optional: false, required: false
  public get secureRenegotiation() {
    return this.getStringAttribute('secure_renegotiation');
  }

  // server_ocsp_stapling - computed: true, optional: false, required: false
  public get serverOcspStapling() {
    return this.getStringAttribute('server_ocsp_stapling');
  }

  // session_reuse_flag - computed: true, optional: false, required: false
  public get sessionReuseFlag() {
    return this.getStringAttribute('session_reuse_flag');
  }

  // session_reuse_limit - computed: true, optional: false, required: false
  public get sessionReuseLimit() {
    return this.getStringAttribute('session_reuse_limit');
  }

  // sni - computed: true, optional: false, required: false
  public get sni() {
    return this.getStringAttribute('sni');
  }

  // sni_forward_flag - computed: true, optional: false, required: false
  public get sniForwardFlag() {
    return this.getStringAttribute('sni_forward_flag');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // supported_groups - computed: true, optional: false, required: false
  public get supportedGroups() {
    return this.getStringAttribute('supported_groups');
  }

  // tls_ticket_flag - computed: true, optional: false, required: false
  public get tlsTicketFlag() {
    return this.getStringAttribute('tls_ticket_flag');
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
