// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/allowed_protocols
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseAllowedProtocolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/allowed_protocols#id DataIseAllowedProtocols#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the allowed protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/allowed_protocols#name DataIseAllowedProtocols#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/allowed_protocols ise_allowed_protocols}
*/
export class DataIseAllowedProtocols extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_allowed_protocols";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseAllowedProtocols resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseAllowedProtocols to import
  * @param importFromId The id of the existing DataIseAllowedProtocols that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/allowed_protocols#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseAllowedProtocols to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_allowed_protocols", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/allowed_protocols ise_allowed_protocols} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseAllowedProtocolsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseAllowedProtocolsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_allowed_protocols',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_5g - computed: true, optional: false, required: false
  public get allow5G() {
    return this.getBooleanAttribute('allow_5g');
  }

  // allow_chap - computed: true, optional: false, required: false
  public get allowChap() {
    return this.getBooleanAttribute('allow_chap');
  }

  // allow_eap_fast - computed: true, optional: false, required: false
  public get allowEapFast() {
    return this.getBooleanAttribute('allow_eap_fast');
  }

  // allow_eap_md5 - computed: true, optional: false, required: false
  public get allowEapMd5() {
    return this.getBooleanAttribute('allow_eap_md5');
  }

  // allow_eap_tls - computed: true, optional: false, required: false
  public get allowEapTls() {
    return this.getBooleanAttribute('allow_eap_tls');
  }

  // allow_eap_ttls - computed: true, optional: false, required: false
  public get allowEapTtls() {
    return this.getBooleanAttribute('allow_eap_ttls');
  }

  // allow_leap - computed: true, optional: false, required: false
  public get allowLeap() {
    return this.getBooleanAttribute('allow_leap');
  }

  // allow_ms_chap_v1 - computed: true, optional: false, required: false
  public get allowMsChapV1() {
    return this.getBooleanAttribute('allow_ms_chap_v1');
  }

  // allow_ms_chap_v2 - computed: true, optional: false, required: false
  public get allowMsChapV2() {
    return this.getBooleanAttribute('allow_ms_chap_v2');
  }

  // allow_pap_ascii - computed: true, optional: false, required: false
  public get allowPapAscii() {
    return this.getBooleanAttribute('allow_pap_ascii');
  }

  // allow_peap - computed: true, optional: false, required: false
  public get allowPeap() {
    return this.getBooleanAttribute('allow_peap');
  }

  // allow_preferred_eap_protocol - computed: true, optional: false, required: false
  public get allowPreferredEapProtocol() {
    return this.getBooleanAttribute('allow_preferred_eap_protocol');
  }

  // allow_teap - computed: true, optional: false, required: false
  public get allowTeap() {
    return this.getBooleanAttribute('allow_teap');
  }

  // allow_weak_ciphers_for_eap - computed: true, optional: false, required: false
  public get allowWeakCiphersForEap() {
    return this.getBooleanAttribute('allow_weak_ciphers_for_eap');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // eap_fast_accept_client_cert - computed: true, optional: false, required: false
  public get eapFastAcceptClientCert() {
    return this.getBooleanAttribute('eap_fast_accept_client_cert');
  }

  // eap_fast_allow_machine_authentication - computed: true, optional: false, required: false
  public get eapFastAllowMachineAuthentication() {
    return this.getBooleanAttribute('eap_fast_allow_machine_authentication');
  }

  // eap_fast_eap_gtc - computed: true, optional: false, required: false
  public get eapFastEapGtc() {
    return this.getBooleanAttribute('eap_fast_eap_gtc');
  }

  // eap_fast_eap_gtc_pwd_change - computed: true, optional: false, required: false
  public get eapFastEapGtcPwdChange() {
    return this.getBooleanAttribute('eap_fast_eap_gtc_pwd_change');
  }

  // eap_fast_eap_gtc_pwd_change_retries - computed: true, optional: false, required: false
  public get eapFastEapGtcPwdChangeRetries() {
    return this.getNumberAttribute('eap_fast_eap_gtc_pwd_change_retries');
  }

  // eap_fast_eap_ms_chap_v2 - computed: true, optional: false, required: false
  public get eapFastEapMsChapV2() {
    return this.getBooleanAttribute('eap_fast_eap_ms_chap_v2');
  }

  // eap_fast_eap_ms_chap_v2_pwd_change - computed: true, optional: false, required: false
  public get eapFastEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('eap_fast_eap_ms_chap_v2_pwd_change');
  }

  // eap_fast_eap_ms_chap_v2_pwd_change_retries - computed: true, optional: false, required: false
  public get eapFastEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('eap_fast_eap_ms_chap_v2_pwd_change_retries');
  }

  // eap_fast_eap_tls - computed: true, optional: false, required: false
  public get eapFastEapTls() {
    return this.getBooleanAttribute('eap_fast_eap_tls');
  }

  // eap_fast_eap_tls_auth_of_expired_certs - computed: true, optional: false, required: false
  public get eapFastEapTlsAuthOfExpiredCerts() {
    return this.getBooleanAttribute('eap_fast_eap_tls_auth_of_expired_certs');
  }

  // eap_fast_enable_eap_chaining - computed: true, optional: false, required: false
  public get eapFastEnableEapChaining() {
    return this.getBooleanAttribute('eap_fast_enable_eap_chaining');
  }

  // eap_fast_pacs_allow_anonymous_provisioning - computed: true, optional: false, required: false
  public get eapFastPacsAllowAnonymousProvisioning() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_anonymous_provisioning');
  }

  // eap_fast_pacs_allow_authenticated_provisioning - computed: true, optional: false, required: false
  public get eapFastPacsAllowAuthenticatedProvisioning() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_authenticated_provisioning');
  }

  // eap_fast_pacs_allow_client_cert - computed: true, optional: false, required: false
  public get eapFastPacsAllowClientCert() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_client_cert');
  }

  // eap_fast_pacs_allow_machine_authentication - computed: true, optional: false, required: false
  public get eapFastPacsAllowMachineAuthentication() {
    return this.getBooleanAttribute('eap_fast_pacs_allow_machine_authentication');
  }

  // eap_fast_pacs_authorization_pac_ttl - computed: true, optional: false, required: false
  public get eapFastPacsAuthorizationPacTtl() {
    return this.getNumberAttribute('eap_fast_pacs_authorization_pac_ttl');
  }

  // eap_fast_pacs_authorization_pac_ttl_unit - computed: true, optional: false, required: false
  public get eapFastPacsAuthorizationPacTtlUnit() {
    return this.getStringAttribute('eap_fast_pacs_authorization_pac_ttl_unit');
  }

  // eap_fast_pacs_machine_pac_ttl - computed: true, optional: false, required: false
  public get eapFastPacsMachinePacTtl() {
    return this.getNumberAttribute('eap_fast_pacs_machine_pac_ttl');
  }

  // eap_fast_pacs_machine_pac_ttl_unit - computed: true, optional: false, required: false
  public get eapFastPacsMachinePacTtlUnit() {
    return this.getStringAttribute('eap_fast_pacs_machine_pac_ttl_unit');
  }

  // eap_fast_pacs_server_returns - computed: true, optional: false, required: false
  public get eapFastPacsServerReturns() {
    return this.getBooleanAttribute('eap_fast_pacs_server_returns');
  }

  // eap_fast_pacs_stateless_session_resume - computed: true, optional: false, required: false
  public get eapFastPacsStatelessSessionResume() {
    return this.getBooleanAttribute('eap_fast_pacs_stateless_session_resume');
  }

  // eap_fast_pacs_tunnel_pac_ttl - computed: true, optional: false, required: false
  public get eapFastPacsTunnelPacTtl() {
    return this.getNumberAttribute('eap_fast_pacs_tunnel_pac_ttl');
  }

  // eap_fast_pacs_tunnel_pac_ttl_unit - computed: true, optional: false, required: false
  public get eapFastPacsTunnelPacTtlUnit() {
    return this.getStringAttribute('eap_fast_pacs_tunnel_pac_ttl_unit');
  }

  // eap_fast_pacs_use_proactive_pac_update_percentage - computed: true, optional: false, required: false
  public get eapFastPacsUseProactivePacUpdatePercentage() {
    return this.getNumberAttribute('eap_fast_pacs_use_proactive_pac_update_percentage');
  }

  // eap_fast_use_pacs - computed: true, optional: false, required: false
  public get eapFastUsePacs() {
    return this.getBooleanAttribute('eap_fast_use_pacs');
  }

  // eap_tls_allow_auth_of_expired_certs - computed: true, optional: false, required: false
  public get eapTlsAllowAuthOfExpiredCerts() {
    return this.getBooleanAttribute('eap_tls_allow_auth_of_expired_certs');
  }

  // eap_tls_enable_stateless_session_resume - computed: true, optional: false, required: false
  public get eapTlsEnableStatelessSessionResume() {
    return this.getBooleanAttribute('eap_tls_enable_stateless_session_resume');
  }

  // eap_tls_l_bit - computed: true, optional: false, required: false
  public get eapTlsLBit() {
    return this.getBooleanAttribute('eap_tls_l_bit');
  }

  // eap_tls_session_ticket_percentage - computed: true, optional: false, required: false
  public get eapTlsSessionTicketPercentage() {
    return this.getNumberAttribute('eap_tls_session_ticket_percentage');
  }

  // eap_tls_session_ticket_ttl - computed: true, optional: false, required: false
  public get eapTlsSessionTicketTtl() {
    return this.getNumberAttribute('eap_tls_session_ticket_ttl');
  }

  // eap_tls_session_ticket_ttl_unit - computed: true, optional: false, required: false
  public get eapTlsSessionTicketTtlUnit() {
    return this.getStringAttribute('eap_tls_session_ticket_ttl_unit');
  }

  // eap_ttls_chap - computed: true, optional: false, required: false
  public get eapTtlsChap() {
    return this.getBooleanAttribute('eap_ttls_chap');
  }

  // eap_ttls_eap_md5 - computed: true, optional: false, required: false
  public get eapTtlsEapMd5() {
    return this.getBooleanAttribute('eap_ttls_eap_md5');
  }

  // eap_ttls_eap_ms_chap_v2 - computed: true, optional: false, required: false
  public get eapTtlsEapMsChapV2() {
    return this.getBooleanAttribute('eap_ttls_eap_ms_chap_v2');
  }

  // eap_ttls_eap_ms_chap_v2_pwd_change - computed: true, optional: false, required: false
  public get eapTtlsEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('eap_ttls_eap_ms_chap_v2_pwd_change');
  }

  // eap_ttls_eap_ms_chap_v2_pwd_change_retries - computed: true, optional: false, required: false
  public get eapTtlsEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('eap_ttls_eap_ms_chap_v2_pwd_change_retries');
  }

  // eap_ttls_ms_chap_v1 - computed: true, optional: false, required: false
  public get eapTtlsMsChapV1() {
    return this.getBooleanAttribute('eap_ttls_ms_chap_v1');
  }

  // eap_ttls_ms_chap_v2 - computed: true, optional: false, required: false
  public get eapTtlsMsChapV2() {
    return this.getBooleanAttribute('eap_ttls_ms_chap_v2');
  }

  // eap_ttls_pap_ascii - computed: true, optional: false, required: false
  public get eapTtlsPapAscii() {
    return this.getBooleanAttribute('eap_ttls_pap_ascii');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peap_allow_peap_eap_gtc - computed: true, optional: false, required: false
  public get peapAllowPeapEapGtc() {
    return this.getBooleanAttribute('peap_allow_peap_eap_gtc');
  }

  // peap_allow_peap_eap_gtc_pwd_change - computed: true, optional: false, required: false
  public get peapAllowPeapEapGtcPwdChange() {
    return this.getBooleanAttribute('peap_allow_peap_eap_gtc_pwd_change');
  }

  // peap_allow_peap_eap_gtc_pwd_change_retries - computed: true, optional: false, required: false
  public get peapAllowPeapEapGtcPwdChangeRetries() {
    return this.getNumberAttribute('peap_allow_peap_eap_gtc_pwd_change_retries');
  }

  // peap_allow_peap_eap_ms_chap_v2 - computed: true, optional: false, required: false
  public get peapAllowPeapEapMsChapV2() {
    return this.getBooleanAttribute('peap_allow_peap_eap_ms_chap_v2');
  }

  // peap_allow_peap_eap_ms_chap_v2_pwd_change - computed: true, optional: false, required: false
  public get peapAllowPeapEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('peap_allow_peap_eap_ms_chap_v2_pwd_change');
  }

  // peap_allow_peap_eap_ms_chap_v2_pwd_change_retries - computed: true, optional: false, required: false
  public get peapAllowPeapEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('peap_allow_peap_eap_ms_chap_v2_pwd_change_retries');
  }

  // peap_allow_peap_eap_tls - computed: true, optional: false, required: false
  public get peapAllowPeapEapTls() {
    return this.getBooleanAttribute('peap_allow_peap_eap_tls');
  }

  // peap_allow_peap_eap_tls_auth_of_expired_certs - computed: true, optional: false, required: false
  public get peapAllowPeapEapTlsAuthOfExpiredCerts() {
    return this.getBooleanAttribute('peap_allow_peap_eap_tls_auth_of_expired_certs');
  }

  // peap_peap_v0 - computed: true, optional: false, required: false
  public get peapPeapV0() {
    return this.getBooleanAttribute('peap_peap_v0');
  }

  // preferred_eap_protocol - computed: true, optional: false, required: false
  public get preferredEapProtocol() {
    return this.getStringAttribute('preferred_eap_protocol');
  }

  // process_host_lookup - computed: true, optional: false, required: false
  public get processHostLookup() {
    return this.getBooleanAttribute('process_host_lookup');
  }

  // require_cryptobinding - computed: true, optional: false, required: false
  public get requireCryptobinding() {
    return this.getBooleanAttribute('require_cryptobinding');
  }

  // require_message_auth - computed: true, optional: false, required: false
  public get requireMessageAuth() {
    return this.getBooleanAttribute('require_message_auth');
  }

  // teap_downgrade_msk - computed: true, optional: false, required: false
  public get teapDowngradeMsk() {
    return this.getBooleanAttribute('teap_downgrade_msk');
  }

  // teap_eap_accept_client_cert_during_tunnel_est - computed: true, optional: false, required: false
  public get teapEapAcceptClientCertDuringTunnelEst() {
    return this.getBooleanAttribute('teap_eap_accept_client_cert_during_tunnel_est');
  }

  // teap_eap_chaining - computed: true, optional: false, required: false
  public get teapEapChaining() {
    return this.getBooleanAttribute('teap_eap_chaining');
  }

  // teap_eap_ms_chap_v2 - computed: true, optional: false, required: false
  public get teapEapMsChapV2() {
    return this.getBooleanAttribute('teap_eap_ms_chap_v2');
  }

  // teap_eap_ms_chap_v2_pwd_change - computed: true, optional: false, required: false
  public get teapEapMsChapV2PwdChange() {
    return this.getBooleanAttribute('teap_eap_ms_chap_v2_pwd_change');
  }

  // teap_eap_ms_chap_v2_pwd_change_retries - computed: true, optional: false, required: false
  public get teapEapMsChapV2PwdChangeRetries() {
    return this.getNumberAttribute('teap_eap_ms_chap_v2_pwd_change_retries');
  }

  // teap_eap_tls - computed: true, optional: false, required: false
  public get teapEapTls() {
    return this.getBooleanAttribute('teap_eap_tls');
  }

  // teap_eap_tls_auth_of_expired_certs - computed: true, optional: false, required: false
  public get teapEapTlsAuthOfExpiredCerts() {
    return this.getBooleanAttribute('teap_eap_tls_auth_of_expired_certs');
  }

  // teap_request_basic_pwd_auth - computed: true, optional: false, required: false
  public get teapRequestBasicPwdAuth() {
    return this.getBooleanAttribute('teap_request_basic_pwd_auth');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
