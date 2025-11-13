// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaapHttpDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether basic authentication is enable, default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#basic_auth GaapHttpDomain#basic_auth}
  */
  readonly basicAuth?: boolean | cdktf.IResolvable;
  /**
  * ID of the basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#basic_auth_id GaapHttpDomain#basic_auth_id}
  */
  readonly basicAuthId?: string;
  /**
  * ID of the server certificate, default value is `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#certificate_id GaapHttpDomain#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * ID of the client certificate, default value is `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#client_certificate_id GaapHttpDomain#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * ID list of the poly client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#client_certificate_ids GaapHttpDomain#client_certificate_ids}
  */
  readonly clientCertificateIds?: string[];
  /**
  * Forward domain of the layer7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#domain GaapHttpDomain#domain}
  */
  readonly domain: string;
  /**
  * Indicates whether SSL certificate authentication is enable, default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#gaap_auth GaapHttpDomain#gaap_auth}
  */
  readonly gaapAuth?: boolean | cdktf.IResolvable;
  /**
  * ID of the SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#gaap_auth_id GaapHttpDomain#gaap_auth_id}
  */
  readonly gaapAuthId?: string;
  /**
  * Group Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#group_id GaapHttpDomain#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#id GaapHttpDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to use as the default domain name, the default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#is_default_server GaapHttpDomain#is_default_server}
  */
  readonly isDefaultServer?: boolean | cdktf.IResolvable;
  /**
  * ID of the layer7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#listener_id GaapHttpDomain#listener_id}
  */
  readonly listenerId: string;
  /**
  * Indicates whether realserver authentication is enable, default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#realserver_auth GaapHttpDomain#realserver_auth}
  */
  readonly realserverAuth?: boolean | cdktf.IResolvable;
  /**
  * CA certificate domain of the realserver. It has been deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#realserver_certificate_domain GaapHttpDomain#realserver_certificate_domain}
  */
  readonly realserverCertificateDomain?: string;
  /**
  * CA certificate ID of the realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#realserver_certificate_id GaapHttpDomain#realserver_certificate_id}
  */
  readonly realserverCertificateId?: string;
  /**
  * CA certificate ID list of the realserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#realserver_certificate_ids GaapHttpDomain#realserver_certificate_ids}
  */
  readonly realserverCertificateIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain tencentcloud_gaap_http_domain}
*/
export class GaapHttpDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_http_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaapHttpDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaapHttpDomain to import
  * @param importFromId The id of the existing GaapHttpDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaapHttpDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_http_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/gaap_http_domain tencentcloud_gaap_http_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaapHttpDomainConfig
  */
  public constructor(scope: Construct, id: string, config: GaapHttpDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_http_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicAuth = config.basicAuth;
    this._basicAuthId = config.basicAuthId;
    this._certificateId = config.certificateId;
    this._clientCertificateId = config.clientCertificateId;
    this._clientCertificateIds = config.clientCertificateIds;
    this._domain = config.domain;
    this._gaapAuth = config.gaapAuth;
    this._gaapAuthId = config.gaapAuthId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._isDefaultServer = config.isDefaultServer;
    this._listenerId = config.listenerId;
    this._realserverAuth = config.realserverAuth;
    this._realserverCertificateDomain = config.realserverCertificateDomain;
    this._realserverCertificateId = config.realserverCertificateId;
    this._realserverCertificateIds = config.realserverCertificateIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth?: boolean | cdktf.IResolvable; 
  public get basicAuth() {
    return this.getBooleanAttribute('basic_auth');
  }
  public set basicAuth(value: boolean | cdktf.IResolvable) {
    this._basicAuth = value;
  }
  public resetBasicAuth() {
    this._basicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth;
  }

  // basic_auth_id - computed: true, optional: true, required: false
  private _basicAuthId?: string; 
  public get basicAuthId() {
    return this.getStringAttribute('basic_auth_id');
  }
  public set basicAuthId(value: string) {
    this._basicAuthId = value;
  }
  public resetBasicAuthId() {
    this._basicAuthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthIdInput() {
    return this._basicAuthId;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // client_certificate_id - computed: true, optional: true, required: false
  private _clientCertificateId?: string; 
  public get clientCertificateId() {
    return this.getStringAttribute('client_certificate_id');
  }
  public set clientCertificateId(value: string) {
    this._clientCertificateId = value;
  }
  public resetClientCertificateId() {
    this._clientCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdInput() {
    return this._clientCertificateId;
  }

  // client_certificate_ids - computed: true, optional: true, required: false
  private _clientCertificateIds?: string[]; 
  public get clientCertificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('client_certificate_ids'));
  }
  public set clientCertificateIds(value: string[]) {
    this._clientCertificateIds = value;
  }
  public resetClientCertificateIds() {
    this._clientCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateIdsInput() {
    return this._clientCertificateIds;
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

  // gaap_auth - computed: false, optional: true, required: false
  private _gaapAuth?: boolean | cdktf.IResolvable; 
  public get gaapAuth() {
    return this.getBooleanAttribute('gaap_auth');
  }
  public set gaapAuth(value: boolean | cdktf.IResolvable) {
    this._gaapAuth = value;
  }
  public resetGaapAuth() {
    this._gaapAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaapAuthInput() {
    return this._gaapAuth;
  }

  // gaap_auth_id - computed: true, optional: true, required: false
  private _gaapAuthId?: string; 
  public get gaapAuthId() {
    return this.getStringAttribute('gaap_auth_id');
  }
  public set gaapAuthId(value: string) {
    this._gaapAuthId = value;
  }
  public resetGaapAuthId() {
    this._gaapAuthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaapAuthIdInput() {
    return this._gaapAuthId;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // is_default_server - computed: false, optional: true, required: false
  private _isDefaultServer?: boolean | cdktf.IResolvable; 
  public get isDefaultServer() {
    return this.getBooleanAttribute('is_default_server');
  }
  public set isDefaultServer(value: boolean | cdktf.IResolvable) {
    this._isDefaultServer = value;
  }
  public resetIsDefaultServer() {
    this._isDefaultServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultServerInput() {
    return this._isDefaultServer;
  }

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // realserver_auth - computed: false, optional: true, required: false
  private _realserverAuth?: boolean | cdktf.IResolvable; 
  public get realserverAuth() {
    return this.getBooleanAttribute('realserver_auth');
  }
  public set realserverAuth(value: boolean | cdktf.IResolvable) {
    this._realserverAuth = value;
  }
  public resetRealserverAuth() {
    this._realserverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserverAuthInput() {
    return this._realserverAuth;
  }

  // realserver_certificate_domain - computed: true, optional: true, required: false
  private _realserverCertificateDomain?: string; 
  public get realserverCertificateDomain() {
    return this.getStringAttribute('realserver_certificate_domain');
  }
  public set realserverCertificateDomain(value: string) {
    this._realserverCertificateDomain = value;
  }
  public resetRealserverCertificateDomain() {
    this._realserverCertificateDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserverCertificateDomainInput() {
    return this._realserverCertificateDomain;
  }

  // realserver_certificate_id - computed: true, optional: true, required: false
  private _realserverCertificateId?: string; 
  public get realserverCertificateId() {
    return this.getStringAttribute('realserver_certificate_id');
  }
  public set realserverCertificateId(value: string) {
    this._realserverCertificateId = value;
  }
  public resetRealserverCertificateId() {
    this._realserverCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserverCertificateIdInput() {
    return this._realserverCertificateId;
  }

  // realserver_certificate_ids - computed: true, optional: true, required: false
  private _realserverCertificateIds?: string[]; 
  public get realserverCertificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('realserver_certificate_ids'));
  }
  public set realserverCertificateIds(value: string[]) {
    this._realserverCertificateIds = value;
  }
  public resetRealserverCertificateIds() {
    this._realserverCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserverCertificateIdsInput() {
    return this._realserverCertificateIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_auth: cdktf.booleanToTerraform(this._basicAuth),
      basic_auth_id: cdktf.stringToTerraform(this._basicAuthId),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      client_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientCertificateIds),
      domain: cdktf.stringToTerraform(this._domain),
      gaap_auth: cdktf.booleanToTerraform(this._gaapAuth),
      gaap_auth_id: cdktf.stringToTerraform(this._gaapAuthId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      is_default_server: cdktf.booleanToTerraform(this._isDefaultServer),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      realserver_auth: cdktf.booleanToTerraform(this._realserverAuth),
      realserver_certificate_domain: cdktf.stringToTerraform(this._realserverCertificateDomain),
      realserver_certificate_id: cdktf.stringToTerraform(this._realserverCertificateId),
      realserver_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realserverCertificateIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_auth: {
        value: cdktf.booleanToHclTerraform(this._basicAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      basic_auth_id: {
        value: cdktf.stringToHclTerraform(this._basicAuthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_id: {
        value: cdktf.stringToHclTerraform(this._clientCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientCertificateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gaap_auth: {
        value: cdktf.booleanToHclTerraform(this._gaapAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gaap_auth_id: {
        value: cdktf.stringToHclTerraform(this._gaapAuthId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      is_default_server: {
        value: cdktf.booleanToHclTerraform(this._isDefaultServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realserver_auth: {
        value: cdktf.booleanToHclTerraform(this._realserverAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realserver_certificate_domain: {
        value: cdktf.stringToHclTerraform(this._realserverCertificateDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realserver_certificate_id: {
        value: cdktf.stringToHclTerraform(this._realserverCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realserver_certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realserverCertificateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
