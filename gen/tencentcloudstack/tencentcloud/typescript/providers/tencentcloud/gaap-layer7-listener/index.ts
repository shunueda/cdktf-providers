// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaapLayer7ListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication type of the layer7 listener. `0` is one-way authentication and `1` is mutual authentication. NOTES: Only supports listeners of `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#auth_type GaapLayer7Listener#auth_type}
  */
  readonly authType?: number;
  /**
  * Certificate ID of the layer7 listener. NOTES: Only supports listeners of `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#certificate_id GaapLayer7Listener#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * ID of the client certificate. Set only when `auth_type` is specified as mutual authentication. NOTES: Only supports listeners of `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#client_certificate_id GaapLayer7Listener#client_certificate_id}
  */
  readonly clientCertificateId?: string;
  /**
  * ID list of the client certificate. Set only when `auth_type` is specified as mutual authentication. NOTES: Only supports listeners of `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#client_certificate_ids GaapLayer7Listener#client_certificate_ids}
  */
  readonly clientCertificateIds?: string[];
  /**
  * Protocol type of the forwarding. Valid value: `HTTP` and `HTTPS`. NOTES: Only supports listeners of `HTTPS` protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#forward_protocol GaapLayer7Listener#forward_protocol}
  */
  readonly forwardProtocol?: string;
  /**
  * Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#group_id GaapLayer7Listener#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#id GaapLayer7Listener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the layer7 listener, the maximum length is 30.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#name GaapLayer7Listener#name}
  */
  readonly name: string;
  /**
  * Port of the layer7 listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#port GaapLayer7Listener#port}
  */
  readonly port: number;
  /**
  * Protocol of the layer7 listener. Valid value: `HTTP` and `HTTPS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#protocol GaapLayer7Listener#protocol}
  */
  readonly protocol: string;
  /**
  * ID of the GAAP proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#proxy_id GaapLayer7Listener#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * Password Suite, optional GAAP_TLS_CIPHERS_STRICT, GAAP_TLS_CIPHERS_GENERAL, GAAP_TLS_CIPHERS_WIDE(default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#tls_ciphers GaapLayer7Listener#tls_ciphers}
  */
  readonly tlsCiphers?: string;
  /**
  * TLS version, optional TLSv1, TLSv1.1, TLSv1.2, TLSv1.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#tls_support_versions GaapLayer7Listener#tls_support_versions}
  */
  readonly tlsSupportVersions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener tencentcloud_gaap_layer7_listener}
*/
export class GaapLayer7Listener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_layer7_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaapLayer7Listener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaapLayer7Listener to import
  * @param importFromId The id of the existing GaapLayer7Listener that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaapLayer7Listener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_layer7_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/gaap_layer7_listener tencentcloud_gaap_layer7_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaapLayer7ListenerConfig
  */
  public constructor(scope: Construct, id: string, config: GaapLayer7ListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_layer7_listener',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._certificateId = config.certificateId;
    this._clientCertificateId = config.clientCertificateId;
    this._clientCertificateIds = config.clientCertificateIds;
    this._forwardProtocol = config.forwardProtocol;
    this._groupId = config.groupId;
    this._id = config.id;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
    this._proxyId = config.proxyId;
    this._tlsCiphers = config.tlsCiphers;
    this._tlsSupportVersions = config.tlsSupportVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: true, required: false
  private _authType?: number; 
  public get authType() {
    return this.getNumberAttribute('auth_type');
  }
  public set authType(value: number) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // forward_protocol - computed: false, optional: true, required: false
  private _forwardProtocol?: string; 
  public get forwardProtocol() {
    return this.getStringAttribute('forward_protocol');
  }
  public set forwardProtocol(value: string) {
    this._forwardProtocol = value;
  }
  public resetForwardProtocol() {
    this._forwardProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProtocolInput() {
    return this._forwardProtocol;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // proxy_id - computed: false, optional: true, required: false
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  public resetProxyId() {
    this._proxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tls_ciphers - computed: true, optional: true, required: false
  private _tlsCiphers?: string; 
  public get tlsCiphers() {
    return this.getStringAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_support_versions - computed: true, optional: true, required: false
  private _tlsSupportVersions?: string[]; 
  public get tlsSupportVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_support_versions'));
  }
  public set tlsSupportVersions(value: string[]) {
    this._tlsSupportVersions = value;
  }
  public resetTlsSupportVersions() {
    this._tlsSupportVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSupportVersionsInput() {
    return this._tlsSupportVersions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.numberToTerraform(this._authType),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
      client_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientCertificateIds),
      forward_protocol: cdktf.stringToTerraform(this._forwardProtocol),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      tls_ciphers: cdktf.stringToTerraform(this._tlsCiphers),
      tls_support_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsSupportVersions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.numberToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      forward_protocol: {
        value: cdktf.stringToHclTerraform(this._forwardProtocol),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ciphers: {
        value: cdktf.stringToHclTerraform(this._tlsCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_support_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsSupportVersions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
