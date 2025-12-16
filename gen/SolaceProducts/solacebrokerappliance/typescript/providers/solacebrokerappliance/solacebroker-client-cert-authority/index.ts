// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerClientCertAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Certificate Authority.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#cert_authority_name SolacebrokerClientCertAuthority#cert_authority_name}
  */
  readonly certAuthorityName: string;
  /**
  * The PEM formatted content for the trusted root certificate of a client Certificate Authority.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#cert_content SolacebrokerClientCertAuthority#cert_content}
  */
  readonly certContent?: string;
  /**
  * The scheduled CRL refresh day(s), specified as "daily" or a comma-separated list of days. Days must be specified as "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", or "Sat", with no spaces, and in sorted order from Sunday to Saturday. The empty-string ("") can also be specified, indicating no schedule is configured ("crl_time_list" must also be configured to the empty-string).
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"daily"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#crl_day_list SolacebrokerClientCertAuthority#crl_day_list}
  */
  readonly crlDayList?: string;
  /**
  * The scheduled CRL refresh time(s), specified as "hourly" or a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. The empty-string ("") can also be specified, indicating no schedule is configured ("crl_day_list" must also be configured to the empty-string).
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `"3:00"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#crl_time_list SolacebrokerClientCertAuthority#crl_time_list}
  */
  readonly crlTimeList?: string;
  /**
  * The URL for the CRL source. This is a required attribute for CRL to be operational and the URL must be complete with http:// included. IPv6 addresses must be enclosed in square-brackets.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as revocation_check_enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#crl_url SolacebrokerClientCertAuthority#crl_url}
  */
  readonly crlUrl?: string;
  /**
  * Enable or disable allowing a non-responder certificate to sign an OCSP response. Typically used with an OCSP override URL in cases where a single certificate is used to sign client certificates and OCSP responses.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#ocsp_non_responder_cert_enabled SolacebrokerClientCertAuthority#ocsp_non_responder_cert_enabled}
  */
  readonly ocspNonResponderCertEnabled?: boolean | cdktf.IResolvable;
  /**
  * The OCSP responder URL to use for overriding the one supplied in the client certificate. The URL must be complete with http:// included.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#ocsp_override_url SolacebrokerClientCertAuthority#ocsp_override_url}
  */
  readonly ocspOverrideUrl?: string;
  /**
  * The timeout in seconds to receive a response from the OCSP responder after sending a request or making the initial connection attempt.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#ocsp_timeout SolacebrokerClientCertAuthority#ocsp_timeout}
  */
  readonly ocspTimeout?: number;
  /**
  * Enable or disable Certificate Authority revocation checking.
  * 
  * The minimum access scope/level required to retrieve this attribute is "global/read-only". The minimum access scope/level required to change this attribute is "global/admin". Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#revocation_check_enabled SolacebrokerClientCertAuthority#revocation_check_enabled}
  */
  readonly revocationCheckEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority solacebroker_client_cert_authority}
*/
export class SolacebrokerClientCertAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_client_cert_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerClientCertAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerClientCertAuthority to import
  * @param importFromId The id of the existing SolacebrokerClientCertAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerClientCertAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_client_cert_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_client_cert_authority solacebroker_client_cert_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerClientCertAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerClientCertAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_client_cert_authority',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certAuthorityName = config.certAuthorityName;
    this._certContent = config.certContent;
    this._crlDayList = config.crlDayList;
    this._crlTimeList = config.crlTimeList;
    this._crlUrl = config.crlUrl;
    this._ocspNonResponderCertEnabled = config.ocspNonResponderCertEnabled;
    this._ocspOverrideUrl = config.ocspOverrideUrl;
    this._ocspTimeout = config.ocspTimeout;
    this._revocationCheckEnabled = config.revocationCheckEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_authority_name - computed: false, optional: false, required: true
  private _certAuthorityName?: string; 
  public get certAuthorityName() {
    return this.getStringAttribute('cert_authority_name');
  }
  public set certAuthorityName(value: string) {
    this._certAuthorityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certAuthorityNameInput() {
    return this._certAuthorityName;
  }

  // cert_content - computed: false, optional: true, required: false
  private _certContent?: string; 
  public get certContent() {
    return this.getStringAttribute('cert_content');
  }
  public set certContent(value: string) {
    this._certContent = value;
  }
  public resetCertContent() {
    this._certContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certContentInput() {
    return this._certContent;
  }

  // crl_day_list - computed: false, optional: true, required: false
  private _crlDayList?: string; 
  public get crlDayList() {
    return this.getStringAttribute('crl_day_list');
  }
  public set crlDayList(value: string) {
    this._crlDayList = value;
  }
  public resetCrlDayList() {
    this._crlDayList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlDayListInput() {
    return this._crlDayList;
  }

  // crl_time_list - computed: false, optional: true, required: false
  private _crlTimeList?: string; 
  public get crlTimeList() {
    return this.getStringAttribute('crl_time_list');
  }
  public set crlTimeList(value: string) {
    this._crlTimeList = value;
  }
  public resetCrlTimeList() {
    this._crlTimeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlTimeListInput() {
    return this._crlTimeList;
  }

  // crl_url - computed: false, optional: true, required: false
  private _crlUrl?: string; 
  public get crlUrl() {
    return this.getStringAttribute('crl_url');
  }
  public set crlUrl(value: string) {
    this._crlUrl = value;
  }
  public resetCrlUrl() {
    this._crlUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlUrlInput() {
    return this._crlUrl;
  }

  // ocsp_non_responder_cert_enabled - computed: false, optional: true, required: false
  private _ocspNonResponderCertEnabled?: boolean | cdktf.IResolvable; 
  public get ocspNonResponderCertEnabled() {
    return this.getBooleanAttribute('ocsp_non_responder_cert_enabled');
  }
  public set ocspNonResponderCertEnabled(value: boolean | cdktf.IResolvable) {
    this._ocspNonResponderCertEnabled = value;
  }
  public resetOcspNonResponderCertEnabled() {
    this._ocspNonResponderCertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspNonResponderCertEnabledInput() {
    return this._ocspNonResponderCertEnabled;
  }

  // ocsp_override_url - computed: false, optional: true, required: false
  private _ocspOverrideUrl?: string; 
  public get ocspOverrideUrl() {
    return this.getStringAttribute('ocsp_override_url');
  }
  public set ocspOverrideUrl(value: string) {
    this._ocspOverrideUrl = value;
  }
  public resetOcspOverrideUrl() {
    this._ocspOverrideUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspOverrideUrlInput() {
    return this._ocspOverrideUrl;
  }

  // ocsp_timeout - computed: false, optional: true, required: false
  private _ocspTimeout?: number; 
  public get ocspTimeout() {
    return this.getNumberAttribute('ocsp_timeout');
  }
  public set ocspTimeout(value: number) {
    this._ocspTimeout = value;
  }
  public resetOcspTimeout() {
    this._ocspTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspTimeoutInput() {
    return this._ocspTimeout;
  }

  // revocation_check_enabled - computed: false, optional: true, required: false
  private _revocationCheckEnabled?: boolean | cdktf.IResolvable; 
  public get revocationCheckEnabled() {
    return this.getBooleanAttribute('revocation_check_enabled');
  }
  public set revocationCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._revocationCheckEnabled = value;
  }
  public resetRevocationCheckEnabled() {
    this._revocationCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationCheckEnabledInput() {
    return this._revocationCheckEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_authority_name: cdktf.stringToTerraform(this._certAuthorityName),
      cert_content: cdktf.stringToTerraform(this._certContent),
      crl_day_list: cdktf.stringToTerraform(this._crlDayList),
      crl_time_list: cdktf.stringToTerraform(this._crlTimeList),
      crl_url: cdktf.stringToTerraform(this._crlUrl),
      ocsp_non_responder_cert_enabled: cdktf.booleanToTerraform(this._ocspNonResponderCertEnabled),
      ocsp_override_url: cdktf.stringToTerraform(this._ocspOverrideUrl),
      ocsp_timeout: cdktf.numberToTerraform(this._ocspTimeout),
      revocation_check_enabled: cdktf.booleanToTerraform(this._revocationCheckEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_authority_name: {
        value: cdktf.stringToHclTerraform(this._certAuthorityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_content: {
        value: cdktf.stringToHclTerraform(this._certContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_day_list: {
        value: cdktf.stringToHclTerraform(this._crlDayList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_time_list: {
        value: cdktf.stringToHclTerraform(this._crlTimeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_url: {
        value: cdktf.stringToHclTerraform(this._crlUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_non_responder_cert_enabled: {
        value: cdktf.booleanToHclTerraform(this._ocspNonResponderCertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_override_url: {
        value: cdktf.stringToHclTerraform(this._ocspOverrideUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_timeout: {
        value: cdktf.numberToHclTerraform(this._ocspTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      revocation_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._revocationCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
