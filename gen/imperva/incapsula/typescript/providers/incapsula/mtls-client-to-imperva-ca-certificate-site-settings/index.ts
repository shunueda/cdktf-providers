// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MtlsClientToImpervaCaCertificateSiteSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Permitted client certificate fingerprints. If left empty, all fingerprints are permitted. Default - empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#fingerprints MtlsClientToImpervaCaCertificateSiteSettings#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * When set to true, the contents specified in headerValue are sent to the origin server in the header specified by headerName. Default - false. If parameter is set to true, specify of `header_name`, `header_value` are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#forward_to_origin MtlsClientToImpervaCaCertificateSiteSettings#forward_to_origin}
  */
  readonly forwardToOrigin?: boolean | cdktf.IResolvable;
  /**
  * The name of the header to send header content in. By default, the header name is 'clientCertificateInfo'. Specifying this parameter is relevant only if `forward_to_origin` is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#header_name MtlsClientToImpervaCaCertificateSiteSettings#header_name}
  */
  readonly headerName?: string;
  /**
  * The content to send in the header specified by headerName. One of the following: FULL_CERT (for full certificate in Base64) COMMON_NAME (for certificate's common name (CN)) FINGERPRINT (for the certificate fingerprints in SHA1) SERIAL_NUMBER (for the certificate's serial number). Specifying this parameter is relevant only if `forward_to_origin` is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#header_value MtlsClientToImpervaCaCertificateSiteSettings#header_value}
  */
  readonly headerValue?: string;
  /**
  * The hosts on which client certificate authentication is supported. If left empty, client certificates are supported on all hosts. Default: empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#hosts MtlsClientToImpervaCaCertificateSiteSettings#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#id MtlsClientToImpervaCaCertificateSiteSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disables SSL session resumption for site. Needed when Incapsula Client Certificate is needed only for specific hosts/ports and site have clients that reuse TLS session across different hosts/ports. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#is_disable_session_resumption MtlsClientToImpervaCaCertificateSiteSettings#is_disable_session_resumption}
  */
  readonly isDisableSessionResumption?: boolean | cdktf.IResolvable;
  /**
  * When set to true, client certificates are not supported on the hosts listed in the Hosts field ('blacklisted'). Default - false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#is_hosts_exception MtlsClientToImpervaCaCertificateSiteSettings#is_hosts_exception}
  */
  readonly isHostsException?: boolean | cdktf.IResolvable;
  /**
  * When set to true, client certificates are not supported on the ports listed in the Ports field ('blacklisted'). Default - false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#is_ports_exception MtlsClientToImpervaCaCertificateSiteSettings#is_ports_exception}
  */
  readonly isPortsException?: boolean | cdktf.IResolvable;
  /**
  * The ports on which client certificate authentication is supported. If left empty, client certificates are supported on all ports. Default: empty list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#ports MtlsClientToImpervaCaCertificateSiteSettings#ports}
  */
  readonly ports?: number[];
  /**
  * When set to true, the end user is required to present the client certificate in order to access the site. Default - false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#require_client_certificate MtlsClientToImpervaCaCertificateSiteSettings#require_client_certificate}
  */
  readonly requireClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#site_id MtlsClientToImpervaCaCertificateSiteSettings#site_id}
  */
  readonly siteId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings incapsula_mtls_client_to_imperva_ca_certificate_site_settings}
*/
export class MtlsClientToImpervaCaCertificateSiteSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_mtls_client_to_imperva_ca_certificate_site_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MtlsClientToImpervaCaCertificateSiteSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MtlsClientToImpervaCaCertificateSiteSettings to import
  * @param importFromId The id of the existing MtlsClientToImpervaCaCertificateSiteSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MtlsClientToImpervaCaCertificateSiteSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_mtls_client_to_imperva_ca_certificate_site_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_client_to_imperva_ca_certificate_site_settings incapsula_mtls_client_to_imperva_ca_certificate_site_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MtlsClientToImpervaCaCertificateSiteSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: MtlsClientToImpervaCaCertificateSiteSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_mtls_client_to_imperva_ca_certificate_site_settings',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fingerprints = config.fingerprints;
    this._forwardToOrigin = config.forwardToOrigin;
    this._headerName = config.headerName;
    this._headerValue = config.headerValue;
    this._hosts = config.hosts;
    this._id = config.id;
    this._isDisableSessionResumption = config.isDisableSessionResumption;
    this._isHostsException = config.isHostsException;
    this._isPortsException = config.isPortsException;
    this._ports = config.ports;
    this._requireClientCertificate = config.requireClientCertificate;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return cdktf.Fn.tolist(this.getListAttribute('fingerprints'));
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
  }

  // forward_to_origin - computed: false, optional: true, required: false
  private _forwardToOrigin?: boolean | cdktf.IResolvable; 
  public get forwardToOrigin() {
    return this.getBooleanAttribute('forward_to_origin');
  }
  public set forwardToOrigin(value: boolean | cdktf.IResolvable) {
    this._forwardToOrigin = value;
  }
  public resetForwardToOrigin() {
    this._forwardToOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToOriginInput() {
    return this._forwardToOrigin;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // is_disable_session_resumption - computed: false, optional: true, required: false
  private _isDisableSessionResumption?: boolean | cdktf.IResolvable; 
  public get isDisableSessionResumption() {
    return this.getBooleanAttribute('is_disable_session_resumption');
  }
  public set isDisableSessionResumption(value: boolean | cdktf.IResolvable) {
    this._isDisableSessionResumption = value;
  }
  public resetIsDisableSessionResumption() {
    this._isDisableSessionResumption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisableSessionResumptionInput() {
    return this._isDisableSessionResumption;
  }

  // is_hosts_exception - computed: false, optional: true, required: false
  private _isHostsException?: boolean | cdktf.IResolvable; 
  public get isHostsException() {
    return this.getBooleanAttribute('is_hosts_exception');
  }
  public set isHostsException(value: boolean | cdktf.IResolvable) {
    this._isHostsException = value;
  }
  public resetIsHostsException() {
    this._isHostsException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHostsExceptionInput() {
    return this._isHostsException;
  }

  // is_ports_exception - computed: false, optional: true, required: false
  private _isPortsException?: boolean | cdktf.IResolvable; 
  public get isPortsException() {
    return this.getBooleanAttribute('is_ports_exception');
  }
  public set isPortsException(value: boolean | cdktf.IResolvable) {
    this._isPortsException = value;
  }
  public resetIsPortsException() {
    this._isPortsException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPortsExceptionInput() {
    return this._isPortsException;
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // require_client_certificate - computed: false, optional: true, required: false
  private _requireClientCertificate?: boolean | cdktf.IResolvable; 
  public get requireClientCertificate() {
    return this.getBooleanAttribute('require_client_certificate');
  }
  public set requireClientCertificate(value: boolean | cdktf.IResolvable) {
    this._requireClientCertificate = value;
  }
  public resetRequireClientCertificate() {
    this._requireClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireClientCertificateInput() {
    return this._requireClientCertificate;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fingerprints),
      forward_to_origin: cdktf.booleanToTerraform(this._forwardToOrigin),
      header_name: cdktf.stringToTerraform(this._headerName),
      header_value: cdktf.stringToTerraform(this._headerValue),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      is_disable_session_resumption: cdktf.booleanToTerraform(this._isDisableSessionResumption),
      is_hosts_exception: cdktf.booleanToTerraform(this._isHostsException),
      is_ports_exception: cdktf.booleanToTerraform(this._isPortsException),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      require_client_certificate: cdktf.booleanToTerraform(this._requireClientCertificate),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fingerprints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fingerprints),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      forward_to_origin: {
        value: cdktf.booleanToHclTerraform(this._forwardToOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value: {
        value: cdktf.stringToHclTerraform(this._headerValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disable_session_resumption: {
        value: cdktf.booleanToHclTerraform(this._isDisableSessionResumption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_hosts_exception: {
        value: cdktf.booleanToHclTerraform(this._isHostsException),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ports_exception: {
        value: cdktf.booleanToHclTerraform(this._isPortsException),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      require_client_certificate: {
        value: cdktf.booleanToHclTerraform(this._requireClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
