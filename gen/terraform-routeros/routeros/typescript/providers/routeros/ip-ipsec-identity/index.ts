// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#___path___ IpIpsecIdentity#___path___}
  */
  readonly path?: string;
  /**
  * Authentication method:
  *   * digital-signature - authenticate using a pair of RSA certificates;
  *   * eap - IKEv2 EAP authentication for initiator (peer with a netmask of `/32`). Must be used together with eap-methods;
  *   * eap-radius - IKEv2 EAP RADIUS passthrough authentication for the responder (RFC 3579). A server certificate in this case is required. If a server certificate is not specified then only clients supporting EAP-only (RFC 5998) will be able to connect. Note that the EAP method should be compatible with EAP-only;
  *   * pre-shared-key - authenticate by a password (pre-shared secret) string shared between the peers (not recommended since an offline attack on the pre-shared key is possible);
  *   * rsa-key - authenticate using an RSA key imported in keys menu. Only supported in IKEv1;
  *   * pre-shared-key-xauth - authenticate by a password (pre-shared secret) string shared between the peers + XAuth username and password. Only supported in IKEv1;
  *   * rsa-signature-hybrid - responder certificate authentication with initiator XAuth. Only supported in IKEv1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#auth_method IpIpsecIdentity#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Name of a certificate listed in System/Certificates (signing packets; the certificate must have the private key). Applicable if digital signature authentication method (`auth-method=digital-signature`) or EAP (a`uth-method=eap`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#certificate IpIpsecIdentity#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#comment IpIpsecIdentity#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#disabled IpIpsecIdentity#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * All EAP methods requires whole certificate chain including intermediate and root CA certificates to be present in System/Certificates menu. Also, the username and password (if required by the authentication server) must be specified. Multiple EAP methods may be specified and will be used in a specified order. Currently supported EAP methods:
  *   * eap-mschapv2;
  *   * eap-peap - also known as PEAPv0/EAP-MSCHAPv2;
  *   * eap-tls - requires additional client certificate specified under certificate parameter;
  *   * eap-ttls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#eap_methods IpIpsecIdentity#eap_methods}
  */
  readonly eapMethods?: string;
  /**
  * Allow this peer to establish SA for non-existing policies. Such policies are created dynamically for the lifetime of SA. Automatic policies allows, for example, to create IPsec secured L2TP tunnels, or any other setup where remote peer's IP address is not known at the configuration time. `no` - do not generate policies; `port-override` - generate policies and force policy to use any port (old behavior); `port-strict` - use ports from peer's proposal, which should match peer's policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#generate_policy IpIpsecIdentity#generate_policy}
  */
  readonly generatePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#id IpIpsecIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the private key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#key IpIpsecIdentity#key}
  */
  readonly key?: string;
  /**
  * Defines the logic used for peer's identity validation. `remote-id` - will verify the peer's ID according to remote-id setting. `certificate` will verify the peer's certificate with what is specified under remote-certificate setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#match_by IpIpsecIdentity#match_by}
  */
  readonly matchBy?: string;
  /**
  * Name of the configuration parameters from mode-config menu. When parameter is set mode-config is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#mode_config IpIpsecIdentity#mode_config}
  */
  readonly modeConfig?: string;
  /**
  * On initiator, this controls what ID_i is sent to the responder. On responder, this controls what ID_r is sent to the initiator. In IKEv2, responder also expects this ID in received ID_r from initiator. `auto` - tries to use correct ID automatically: IP for pre-shared key, SAN (DN if not present) for certificate based connections; `address` - IP address is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name; `fqdn` - fully qualified domain name; `key-id` - use the specified key ID for the identity; `user-fqdn` - specifies a fully-qualified username string, for example, `user@domain.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#my_id IpIpsecIdentity#my_id}
  */
  readonly myId?: string;
  /**
  * Adds IP/Firewall/Raw rules matching IPsec policy to a specified chain. Use together with generate-policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#notrack_chain IpIpsecIdentity#notrack_chain}
  */
  readonly notrackChain?: string;
  /**
  * XAuth or EAP password. Applicable if pre-shared key with XAuth authentication method (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#password IpIpsecIdentity#password}
  */
  readonly password?: string;
  /**
  * Name of the peer on which the identity applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#peer IpIpsecIdentity#peer}
  */
  readonly peer: string;
  /**
  * If generate-policy is enabled, traffic selectors are checked against templates from the same group. If none of the templates match, Phase 2 SA will not be established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#policy_template_group IpIpsecIdentity#policy_template_group}
  */
  readonly policyTemplateGroup?: string;
  /**
  * Name of a certificate (listed in `System/Certificates`) for authenticating the remote side (validating packets; no private key required). If a remote-certificate is not specified then the received certificate from a remote peer is used and checked against CA in the certificate menu. Proper CA must be imported in a certificate store. If remote-certificate and match-by=certificate is specified, only the specific client certificate will be matched. Applicable if digital signature authentication method (`auth-method=digital-signature`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#remote_certificate IpIpsecIdentity#remote_certificate}
  */
  readonly remoteCertificate?: string;
  /**
  * This parameter controls what ID value to expect from the remote peer. Note that all types except for ignoring will verify remote peer's ID with a received certificate. In case when the peer sends the certificate name as its ID, it is checked against the certificate, else the ID is checked against Subject Alt. Name. `auto` - accept all ID's;address - IP address is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name; `fqdn` - fully qualified domain name. Only supported in IKEv2; `user-fqdn` - a fully-qualified username string, for example, `user@domain.com`. Only supported in IKEv2; `key-id` - specific key ID for the identity. Only supported in IKEv2; `ignore` - do not verify received ID with certificate (dangerous). * Wildcard key ID matching **is not supported**, for example `remote-id=`key-id:CN=*.domain.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#remote_id IpIpsecIdentity#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Name of the public key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#remote_key IpIpsecIdentity#remote_key}
  */
  readonly remoteKey?: string;
  /**
  * Secret string. If it starts with '0x', it is parsed as a hexadecimal value. Applicable if pre-shared key authentication method (`auth-method=pre-shared-key` and `auth-method=pre-shared-key-xauth`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#secret IpIpsecIdentity#secret}
  */
  readonly secret?: string;
  /**
  * XAuth or EAP username. Applicable if pre-shared key with XAuth authentication method (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#username IpIpsecIdentity#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity routeros_ip_ipsec_identity}
*/
export class IpIpsecIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecIdentity to import
  * @param importFromId The id of the existing IpIpsecIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/ip_ipsec_identity routeros_ip_ipsec_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: IpIpsecIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_identity',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._authMethod = config.authMethod;
    this._certificate = config.certificate;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._eapMethods = config.eapMethods;
    this._generatePolicy = config.generatePolicy;
    this._id = config.id;
    this._key = config.key;
    this._matchBy = config.matchBy;
    this._modeConfig = config.modeConfig;
    this._myId = config.myId;
    this._notrackChain = config.notrackChain;
    this._password = config.password;
    this._peer = config.peer;
    this._policyTemplateGroup = config.policyTemplateGroup;
    this._remoteCertificate = config.remoteCertificate;
    this._remoteId = config.remoteId;
    this._remoteKey = config.remoteKey;
    this._secret = config.secret;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // eap_methods - computed: false, optional: true, required: false
  private _eapMethods?: string; 
  public get eapMethods() {
    return this.getStringAttribute('eap_methods');
  }
  public set eapMethods(value: string) {
    this._eapMethods = value;
  }
  public resetEapMethods() {
    this._eapMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodsInput() {
    return this._eapMethods;
  }

  // generate_policy - computed: false, optional: true, required: false
  private _generatePolicy?: string; 
  public get generatePolicy() {
    return this.getStringAttribute('generate_policy');
  }
  public set generatePolicy(value: string) {
    this._generatePolicy = value;
  }
  public resetGeneratePolicy() {
    this._generatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePolicyInput() {
    return this._generatePolicy;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
  }

  // mode_config - computed: false, optional: true, required: false
  private _modeConfig?: string; 
  public get modeConfig() {
    return this.getStringAttribute('mode_config');
  }
  public set modeConfig(value: string) {
    this._modeConfig = value;
  }
  public resetModeConfig() {
    this._modeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeConfigInput() {
    return this._modeConfig;
  }

  // my_id - computed: false, optional: true, required: false
  private _myId?: string; 
  public get myId() {
    return this.getStringAttribute('my_id');
  }
  public set myId(value: string) {
    this._myId = value;
  }
  public resetMyId() {
    this._myId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myIdInput() {
    return this._myId;
  }

  // notrack_chain - computed: false, optional: true, required: false
  private _notrackChain?: string; 
  public get notrackChain() {
    return this.getStringAttribute('notrack_chain');
  }
  public set notrackChain(value: string) {
    this._notrackChain = value;
  }
  public resetNotrackChain() {
    this._notrackChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notrackChainInput() {
    return this._notrackChain;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer - computed: false, optional: false, required: true
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // policy_template_group - computed: false, optional: true, required: false
  private _policyTemplateGroup?: string; 
  public get policyTemplateGroup() {
    return this.getStringAttribute('policy_template_group');
  }
  public set policyTemplateGroup(value: string) {
    this._policyTemplateGroup = value;
  }
  public resetPolicyTemplateGroup() {
    this._policyTemplateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTemplateGroupInput() {
    return this._policyTemplateGroup;
  }

  // remote_certificate - computed: false, optional: true, required: false
  private _remoteCertificate?: string; 
  public get remoteCertificate() {
    return this.getStringAttribute('remote_certificate');
  }
  public set remoteCertificate(value: string) {
    this._remoteCertificate = value;
  }
  public resetRemoteCertificate() {
    this._remoteCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCertificateInput() {
    return this._remoteCertificate;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_key - computed: false, optional: true, required: false
  private _remoteKey?: string; 
  public get remoteKey() {
    return this.getStringAttribute('remote_key');
  }
  public set remoteKey(value: string) {
    this._remoteKey = value;
  }
  public resetRemoteKey() {
    this._remoteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteKeyInput() {
    return this._remoteKey;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      auth_method: cdktf.stringToTerraform(this._authMethod),
      certificate: cdktf.stringToTerraform(this._certificate),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      eap_methods: cdktf.stringToTerraform(this._eapMethods),
      generate_policy: cdktf.stringToTerraform(this._generatePolicy),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      match_by: cdktf.stringToTerraform(this._matchBy),
      mode_config: cdktf.stringToTerraform(this._modeConfig),
      my_id: cdktf.stringToTerraform(this._myId),
      notrack_chain: cdktf.stringToTerraform(this._notrackChain),
      password: cdktf.stringToTerraform(this._password),
      peer: cdktf.stringToTerraform(this._peer),
      policy_template_group: cdktf.stringToTerraform(this._policyTemplateGroup),
      remote_certificate: cdktf.stringToTerraform(this._remoteCertificate),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      remote_key: cdktf.stringToTerraform(this._remoteKey),
      secret: cdktf.stringToTerraform(this._secret),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eap_methods: {
        value: cdktf.stringToHclTerraform(this._eapMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_policy: {
        value: cdktf.stringToHclTerraform(this._generatePolicy),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_by: {
        value: cdktf.stringToHclTerraform(this._matchBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_config: {
        value: cdktf.stringToHclTerraform(this._modeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_id: {
        value: cdktf.stringToHclTerraform(this._myId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notrack_chain: {
        value: cdktf.stringToHclTerraform(this._notrackChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer: {
        value: cdktf.stringToHclTerraform(this._peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_template_group: {
        value: cdktf.stringToHclTerraform(this._policyTemplateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_certificate: {
        value: cdktf.stringToHclTerraform(this._remoteCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_id: {
        value: cdktf.stringToHclTerraform(this._remoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_key: {
        value: cdktf.stringToHclTerraform(this._remoteKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
