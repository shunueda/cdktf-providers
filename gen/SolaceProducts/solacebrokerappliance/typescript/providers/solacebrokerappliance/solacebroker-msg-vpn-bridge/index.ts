// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#bridge_name SolacebrokerMsgVpnBridge#bridge_name}
  */
  readonly bridgeName: string;
  /**
  * The virtual router of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "primary" - The Bridge is used for the primary virtual router.
  * "backup" - The Bridge is used for the backup virtual router.
  * "auto" - The Bridge is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#bridge_virtual_router SolacebrokerMsgVpnBridge#bridge_virtual_router}
  */
  readonly bridgeVirtualRouter: string;
  /**
  * Enable or disable the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#enabled SolacebrokerMsgVpnBridge#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum time-to-live (TTL) in hops. Messages are discarded if their TTL exceeds this value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#max_ttl SolacebrokerMsgVpnBridge#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#msg_vpn_name SolacebrokerMsgVpnBridge#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The Client Username the Bridge uses to login to the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_authentication_basic_client_username SolacebrokerMsgVpnBridge#remote_authentication_basic_client_username}
  */
  readonly remoteAuthenticationBasicClientUsername?: string;
  /**
  * The password for the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_authentication_basic_password SolacebrokerMsgVpnBridge#remote_authentication_basic_password}
  */
  readonly remoteAuthenticationBasicPassword?: string;
  /**
  * The PEM formatted content for the client certificate used by the Bridge to login to the remote Message VPN. It must consist of a private key and between one and three certificates comprising the certificate trust chain.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_authentication_client_cert_content SolacebrokerMsgVpnBridge#remote_authentication_client_cert_content}
  */
  readonly remoteAuthenticationClientCertContent?: string;
  /**
  * The password for the client certificate.
  * 
  * The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `""`. Available since SEMP API version 2.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_authentication_client_cert_password SolacebrokerMsgVpnBridge#remote_authentication_client_cert_password}
  */
  readonly remoteAuthenticationClientCertPassword?: string;
  /**
  * The authentication scheme for the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"basic"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "basic" - Basic Authentication Scheme (via username and password).
  * "client-certificate" - Client Certificate Authentication Scheme (via certificate file or content).
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_authentication_scheme SolacebrokerMsgVpnBridge#remote_authentication_scheme}
  */
  readonly remoteAuthenticationScheme?: string;
  /**
  * The number of retry attempts to establish a connection before moving on to the next remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_connection_retry_count SolacebrokerMsgVpnBridge#remote_connection_retry_count}
  */
  readonly remoteConnectionRetryCount?: number;
  /**
  * The number of seconds the broker waits for the bridge connection to be established before attempting a new connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_connection_retry_delay SolacebrokerMsgVpnBridge#remote_connection_retry_delay}
  */
  readonly remoteConnectionRetryDelay?: number;
  /**
  * The priority for deliver-to-one (DTO) messages transmitted from the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"p1"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "p1" - The 1st or highest priority.
  * "p2" - The 2nd highest priority.
  * "p3" - The 3rd highest priority.
  * "p4" - The 4th highest priority.
  * "da" - Ignore priority and deliver always.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#remote_deliver_to_one_priority SolacebrokerMsgVpnBridge#remote_deliver_to_one_priority}
  */
  readonly remoteDeliverToOnePriority?: string;
  /**
  * The colon-separated list of cipher suites supported for TLS connections to the remote Message VPN. The value "default" implies all supported suites ordered from most secure to least secure.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"default"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#tls_cipher_suite_list SolacebrokerMsgVpnBridge#tls_cipher_suite_list}
  */
  readonly tlsCipherSuiteList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge solacebroker_msg_vpn_bridge}
*/
export class SolacebrokerMsgVpnBridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnBridge to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_bridge solacebroker_msg_vpn_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_bridge',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bridgeName = config.bridgeName;
    this._bridgeVirtualRouter = config.bridgeVirtualRouter;
    this._enabled = config.enabled;
    this._maxTtl = config.maxTtl;
    this._msgVpnName = config.msgVpnName;
    this._remoteAuthenticationBasicClientUsername = config.remoteAuthenticationBasicClientUsername;
    this._remoteAuthenticationBasicPassword = config.remoteAuthenticationBasicPassword;
    this._remoteAuthenticationClientCertContent = config.remoteAuthenticationClientCertContent;
    this._remoteAuthenticationClientCertPassword = config.remoteAuthenticationClientCertPassword;
    this._remoteAuthenticationScheme = config.remoteAuthenticationScheme;
    this._remoteConnectionRetryCount = config.remoteConnectionRetryCount;
    this._remoteConnectionRetryDelay = config.remoteConnectionRetryDelay;
    this._remoteDeliverToOnePriority = config.remoteDeliverToOnePriority;
    this._tlsCipherSuiteList = config.tlsCipherSuiteList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_name - computed: false, optional: false, required: true
  private _bridgeName?: string; 
  public get bridgeName() {
    return this.getStringAttribute('bridge_name');
  }
  public set bridgeName(value: string) {
    this._bridgeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeNameInput() {
    return this._bridgeName;
  }

  // bridge_virtual_router - computed: false, optional: false, required: true
  private _bridgeVirtualRouter?: string; 
  public get bridgeVirtualRouter() {
    return this.getStringAttribute('bridge_virtual_router');
  }
  public set bridgeVirtualRouter(value: string) {
    this._bridgeVirtualRouter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeVirtualRouterInput() {
    return this._bridgeVirtualRouter;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // remote_authentication_basic_client_username - computed: false, optional: true, required: false
  private _remoteAuthenticationBasicClientUsername?: string; 
  public get remoteAuthenticationBasicClientUsername() {
    return this.getStringAttribute('remote_authentication_basic_client_username');
  }
  public set remoteAuthenticationBasicClientUsername(value: string) {
    this._remoteAuthenticationBasicClientUsername = value;
  }
  public resetRemoteAuthenticationBasicClientUsername() {
    this._remoteAuthenticationBasicClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthenticationBasicClientUsernameInput() {
    return this._remoteAuthenticationBasicClientUsername;
  }

  // remote_authentication_basic_password - computed: false, optional: true, required: false
  private _remoteAuthenticationBasicPassword?: string; 
  public get remoteAuthenticationBasicPassword() {
    return this.getStringAttribute('remote_authentication_basic_password');
  }
  public set remoteAuthenticationBasicPassword(value: string) {
    this._remoteAuthenticationBasicPassword = value;
  }
  public resetRemoteAuthenticationBasicPassword() {
    this._remoteAuthenticationBasicPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthenticationBasicPasswordInput() {
    return this._remoteAuthenticationBasicPassword;
  }

  // remote_authentication_client_cert_content - computed: false, optional: true, required: false
  private _remoteAuthenticationClientCertContent?: string; 
  public get remoteAuthenticationClientCertContent() {
    return this.getStringAttribute('remote_authentication_client_cert_content');
  }
  public set remoteAuthenticationClientCertContent(value: string) {
    this._remoteAuthenticationClientCertContent = value;
  }
  public resetRemoteAuthenticationClientCertContent() {
    this._remoteAuthenticationClientCertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthenticationClientCertContentInput() {
    return this._remoteAuthenticationClientCertContent;
  }

  // remote_authentication_client_cert_password - computed: false, optional: true, required: false
  private _remoteAuthenticationClientCertPassword?: string; 
  public get remoteAuthenticationClientCertPassword() {
    return this.getStringAttribute('remote_authentication_client_cert_password');
  }
  public set remoteAuthenticationClientCertPassword(value: string) {
    this._remoteAuthenticationClientCertPassword = value;
  }
  public resetRemoteAuthenticationClientCertPassword() {
    this._remoteAuthenticationClientCertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthenticationClientCertPasswordInput() {
    return this._remoteAuthenticationClientCertPassword;
  }

  // remote_authentication_scheme - computed: false, optional: true, required: false
  private _remoteAuthenticationScheme?: string; 
  public get remoteAuthenticationScheme() {
    return this.getStringAttribute('remote_authentication_scheme');
  }
  public set remoteAuthenticationScheme(value: string) {
    this._remoteAuthenticationScheme = value;
  }
  public resetRemoteAuthenticationScheme() {
    this._remoteAuthenticationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthenticationSchemeInput() {
    return this._remoteAuthenticationScheme;
  }

  // remote_connection_retry_count - computed: false, optional: true, required: false
  private _remoteConnectionRetryCount?: number; 
  public get remoteConnectionRetryCount() {
    return this.getNumberAttribute('remote_connection_retry_count');
  }
  public set remoteConnectionRetryCount(value: number) {
    this._remoteConnectionRetryCount = value;
  }
  public resetRemoteConnectionRetryCount() {
    this._remoteConnectionRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConnectionRetryCountInput() {
    return this._remoteConnectionRetryCount;
  }

  // remote_connection_retry_delay - computed: false, optional: true, required: false
  private _remoteConnectionRetryDelay?: number; 
  public get remoteConnectionRetryDelay() {
    return this.getNumberAttribute('remote_connection_retry_delay');
  }
  public set remoteConnectionRetryDelay(value: number) {
    this._remoteConnectionRetryDelay = value;
  }
  public resetRemoteConnectionRetryDelay() {
    this._remoteConnectionRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConnectionRetryDelayInput() {
    return this._remoteConnectionRetryDelay;
  }

  // remote_deliver_to_one_priority - computed: false, optional: true, required: false
  private _remoteDeliverToOnePriority?: string; 
  public get remoteDeliverToOnePriority() {
    return this.getStringAttribute('remote_deliver_to_one_priority');
  }
  public set remoteDeliverToOnePriority(value: string) {
    this._remoteDeliverToOnePriority = value;
  }
  public resetRemoteDeliverToOnePriority() {
    this._remoteDeliverToOnePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDeliverToOnePriorityInput() {
    return this._remoteDeliverToOnePriority;
  }

  // tls_cipher_suite_list - computed: false, optional: true, required: false
  private _tlsCipherSuiteList?: string; 
  public get tlsCipherSuiteList() {
    return this.getStringAttribute('tls_cipher_suite_list');
  }
  public set tlsCipherSuiteList(value: string) {
    this._tlsCipherSuiteList = value;
  }
  public resetTlsCipherSuiteList() {
    this._tlsCipherSuiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuiteListInput() {
    return this._tlsCipherSuiteList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_name: cdktf.stringToTerraform(this._bridgeName),
      bridge_virtual_router: cdktf.stringToTerraform(this._bridgeVirtualRouter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      remote_authentication_basic_client_username: cdktf.stringToTerraform(this._remoteAuthenticationBasicClientUsername),
      remote_authentication_basic_password: cdktf.stringToTerraform(this._remoteAuthenticationBasicPassword),
      remote_authentication_client_cert_content: cdktf.stringToTerraform(this._remoteAuthenticationClientCertContent),
      remote_authentication_client_cert_password: cdktf.stringToTerraform(this._remoteAuthenticationClientCertPassword),
      remote_authentication_scheme: cdktf.stringToTerraform(this._remoteAuthenticationScheme),
      remote_connection_retry_count: cdktf.numberToTerraform(this._remoteConnectionRetryCount),
      remote_connection_retry_delay: cdktf.numberToTerraform(this._remoteConnectionRetryDelay),
      remote_deliver_to_one_priority: cdktf.stringToTerraform(this._remoteDeliverToOnePriority),
      tls_cipher_suite_list: cdktf.stringToTerraform(this._tlsCipherSuiteList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_name: {
        value: cdktf.stringToHclTerraform(this._bridgeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_virtual_router: {
        value: cdktf.stringToHclTerraform(this._bridgeVirtualRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_ttl: {
        value: cdktf.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_authentication_basic_client_username: {
        value: cdktf.stringToHclTerraform(this._remoteAuthenticationBasicClientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_authentication_basic_password: {
        value: cdktf.stringToHclTerraform(this._remoteAuthenticationBasicPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_authentication_client_cert_content: {
        value: cdktf.stringToHclTerraform(this._remoteAuthenticationClientCertContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_authentication_client_cert_password: {
        value: cdktf.stringToHclTerraform(this._remoteAuthenticationClientCertPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_authentication_scheme: {
        value: cdktf.stringToHclTerraform(this._remoteAuthenticationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_connection_retry_count: {
        value: cdktf.numberToHclTerraform(this._remoteConnectionRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_connection_retry_delay: {
        value: cdktf.numberToHclTerraform(this._remoteConnectionRetryDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_deliver_to_one_priority: {
        value: cdktf.stringToHclTerraform(this._remoteDeliverToOnePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cipher_suite_list: {
        value: cdktf.stringToHclTerraform(this._tlsCipherSuiteList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
