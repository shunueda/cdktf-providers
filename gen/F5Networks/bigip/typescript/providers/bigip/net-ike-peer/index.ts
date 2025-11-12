// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetIkePeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application service that the object belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#app_service NetIkePeer#app_service}
  */
  readonly appService?: string;
  /**
  * The trusted root and intermediate certificate authorities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#ca_cert_file NetIkePeer#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Specifies the file name of the Certificate Revocation List. Only supported in IKEv1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#crl_file NetIkePeer#crl_file}
  */
  readonly crlFile?: string;
  /**
  * User defined description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#description NetIkePeer#description}
  */
  readonly description?: string;
  /**
  * Specifies the number of seconds between Dead Peer Detection messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#dpd_delay NetIkePeer#dpd_delay}
  */
  readonly dpdDelay?: number;
  /**
  * Enable or disable the generation of Security Policy Database entries(SPD) when the device is the responder of the IKE remote node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#generate_policy NetIkePeer#generate_policy}
  */
  readonly generatePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#id NetIkePeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines the lifetime in minutes of an IKE SA which will be proposed in the phase 1 negotiations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#lifetime NetIkePeer#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Defines the exchange mode for phase 1 when racoon is the initiator, or the acceptable exchange mode when racoon is the responder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#mode NetIkePeer#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the name of the certificate file object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#my_cert_file NetIkePeer#my_cert_file}
  */
  readonly myCertFile?: string;
  /**
  * Specifies the name of the certificate key file object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#my_cert_key_file NetIkePeer#my_cert_key_file}
  */
  readonly myCertKeyFile?: string;
  /**
  * Specifies the passphrase of the key used for my-cert-key-file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#my_cert_key_passphrase NetIkePeer#my_cert_key_passphrase}
  */
  readonly myCertKeyPassphrase?: string;
  /**
  * Specifies the identifier type sent to the remote host to use in the phase 1 negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#my_id_type NetIkePeer#my_id_type}
  */
  readonly myIdType?: string;
  /**
  * Specifies the identifier value sent to the remote host in the phase 1 negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#my_id_value NetIkePeer#my_id_value}
  */
  readonly myIdValue?: string;
  /**
  * Name of the IKE PEER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#name NetIkePeer#name}
  */
  readonly name: string;
  /**
  * Enables use of the NAT-Traversal IPsec extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#nat_traversal NetIkePeer#nat_traversal}
  */
  readonly natTraversal?: string;
  /**
  * Specifies whether the local IKE agent can be the initiator of the IKE negotiation with this ike-peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#passive NetIkePeer#passive}
  */
  readonly passive?: string;
  /**
  * Specifies the peer’s certificate for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#peers_cert_file NetIkePeer#peers_cert_file}
  */
  readonly peersCertFile?: string;
  /**
  * Specifies that the only peers-cert-type supported is certfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#peers_cert_type NetIkePeer#peers_cert_type}
  */
  readonly peersCertType?: string;
  /**
  * Specifies which of address, fqdn, asn1dn, user-fqdn or keyid-tag types to use as peers-id-type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#peers_id_type NetIkePeer#peers_id_type}
  */
  readonly peersIdType?: string;
  /**
  * Specifies the peer’s identifier to be received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#peers_id_value NetIkePeer#peers_id_value}
  */
  readonly peersIdValue?: string;
  /**
  * Specifies the authentication method used for phase 1 negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#phase1_auth_method NetIkePeer#phase1_auth_method}
  */
  readonly phase1AuthMethod?: string;
  /**
  * Specifies the encryption algorithm used for the isakmp phase 1 negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#phase1_encrypt_algorithm NetIkePeer#phase1_encrypt_algorithm}
  */
  readonly phase1EncryptAlgorithm?: string;
  /**
  * Defines the hash algorithm used for the isakmp phase 1 negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#phase1_hash_algorithm NetIkePeer#phase1_hash_algorithm}
  */
  readonly phase1HashAlgorithm?: string;
  /**
  * Defines the Diffie-Hellman group for key exchange to provide perfect forward secrecy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#phase1_perfect_forward_secrecy NetIkePeer#phase1_perfect_forward_secrecy}
  */
  readonly phase1PerfectForwardSecrecy?: string;
  /**
  * Specifies the preshared key for ISAKMP SAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#preshared_key NetIkePeer#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * Display the encrypted preshared-key for the IKE remote node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#preshared_key_encrypted NetIkePeer#preshared_key_encrypted}
  */
  readonly presharedKeyEncrypted?: string;
  /**
  * Specifies the pseudo-random function used to derive keying material for all cryptographic operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#prf NetIkePeer#prf}
  */
  readonly prf?: string;
  /**
  * If this value is enabled, both values of ID payloads in the phase 2 exchange are used as the addresses of end-point of IPsec-SAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#proxy_support NetIkePeer#proxy_support}
  */
  readonly proxySupport?: string;
  /**
  * Specifies the IP address of the IKE remote node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#remote_address NetIkePeer#remote_address}
  */
  readonly remoteAddress: string;
  /**
  * Specifies the replay window size of the IPsec SAs negotiated with the IKE remote node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#replay_window_size NetIkePeer#replay_window_size}
  */
  readonly replayWindowSize?: number;
  /**
  * Enables or disables this IKE remote node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#state NetIkePeer#state}
  */
  readonly state?: string;
  /**
  * Specifies the names of the traffic-selector objects associated with this ike-peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#traffic_selector NetIkePeer#traffic_selector}
  */
  readonly trafficSelector?: string[];
  /**
  * Specifies whether to verify the certificate chain of the remote peer based on the trusted certificates in ca-cert-file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#verify_cert NetIkePeer#verify_cert}
  */
  readonly verifyCert?: string;
  /**
  * Specifies which version of IKE to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#version NetIkePeer#version}
  */
  readonly version?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer bigip_net_ike_peer}
*/
export class NetIkePeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_net_ike_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetIkePeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetIkePeer to import
  * @param importFromId The id of the existing NetIkePeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetIkePeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_net_ike_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/net_ike_peer bigip_net_ike_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetIkePeerConfig
  */
  public constructor(scope: Construct, id: string, config: NetIkePeerConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_net_ike_peer',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appService = config.appService;
    this._caCertFile = config.caCertFile;
    this._crlFile = config.crlFile;
    this._description = config.description;
    this._dpdDelay = config.dpdDelay;
    this._generatePolicy = config.generatePolicy;
    this._id = config.id;
    this._lifetime = config.lifetime;
    this._mode = config.mode;
    this._myCertFile = config.myCertFile;
    this._myCertKeyFile = config.myCertKeyFile;
    this._myCertKeyPassphrase = config.myCertKeyPassphrase;
    this._myIdType = config.myIdType;
    this._myIdValue = config.myIdValue;
    this._name = config.name;
    this._natTraversal = config.natTraversal;
    this._passive = config.passive;
    this._peersCertFile = config.peersCertFile;
    this._peersCertType = config.peersCertType;
    this._peersIdType = config.peersIdType;
    this._peersIdValue = config.peersIdValue;
    this._phase1AuthMethod = config.phase1AuthMethod;
    this._phase1EncryptAlgorithm = config.phase1EncryptAlgorithm;
    this._phase1HashAlgorithm = config.phase1HashAlgorithm;
    this._phase1PerfectForwardSecrecy = config.phase1PerfectForwardSecrecy;
    this._presharedKey = config.presharedKey;
    this._presharedKeyEncrypted = config.presharedKeyEncrypted;
    this._prf = config.prf;
    this._proxySupport = config.proxySupport;
    this._remoteAddress = config.remoteAddress;
    this._replayWindowSize = config.replayWindowSize;
    this._state = config.state;
    this._trafficSelector = config.trafficSelector;
    this._verifyCert = config.verifyCert;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service - computed: false, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // ca_cert_file - computed: true, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this.getStringAttribute('ca_cert_file');
  }
  public set caCertFile(value: string) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // crl_file - computed: true, optional: true, required: false
  private _crlFile?: string; 
  public get crlFile() {
    return this.getStringAttribute('crl_file');
  }
  public set crlFile(value: string) {
    this._crlFile = value;
  }
  public resetCrlFile() {
    this._crlFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlFileInput() {
    return this._crlFile;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dpd_delay - computed: true, optional: true, required: false
  private _dpdDelay?: number; 
  public get dpdDelay() {
    return this.getNumberAttribute('dpd_delay');
  }
  public set dpdDelay(value: number) {
    this._dpdDelay = value;
  }
  public resetDpdDelay() {
    this._dpdDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdDelayInput() {
    return this._dpdDelay;
  }

  // generate_policy - computed: true, optional: true, required: false
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

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // my_cert_file - computed: true, optional: true, required: false
  private _myCertFile?: string; 
  public get myCertFile() {
    return this.getStringAttribute('my_cert_file');
  }
  public set myCertFile(value: string) {
    this._myCertFile = value;
  }
  public resetMyCertFile() {
    this._myCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myCertFileInput() {
    return this._myCertFile;
  }

  // my_cert_key_file - computed: true, optional: true, required: false
  private _myCertKeyFile?: string; 
  public get myCertKeyFile() {
    return this.getStringAttribute('my_cert_key_file');
  }
  public set myCertKeyFile(value: string) {
    this._myCertKeyFile = value;
  }
  public resetMyCertKeyFile() {
    this._myCertKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myCertKeyFileInput() {
    return this._myCertKeyFile;
  }

  // my_cert_key_passphrase - computed: true, optional: true, required: false
  private _myCertKeyPassphrase?: string; 
  public get myCertKeyPassphrase() {
    return this.getStringAttribute('my_cert_key_passphrase');
  }
  public set myCertKeyPassphrase(value: string) {
    this._myCertKeyPassphrase = value;
  }
  public resetMyCertKeyPassphrase() {
    this._myCertKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myCertKeyPassphraseInput() {
    return this._myCertKeyPassphrase;
  }

  // my_id_type - computed: true, optional: true, required: false
  private _myIdType?: string; 
  public get myIdType() {
    return this.getStringAttribute('my_id_type');
  }
  public set myIdType(value: string) {
    this._myIdType = value;
  }
  public resetMyIdType() {
    this._myIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myIdTypeInput() {
    return this._myIdType;
  }

  // my_id_value - computed: true, optional: true, required: false
  private _myIdValue?: string; 
  public get myIdValue() {
    return this.getStringAttribute('my_id_value');
  }
  public set myIdValue(value: string) {
    this._myIdValue = value;
  }
  public resetMyIdValue() {
    this._myIdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myIdValueInput() {
    return this._myIdValue;
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

  // nat_traversal - computed: true, optional: true, required: false
  private _natTraversal?: string; 
  public get natTraversal() {
    return this.getStringAttribute('nat_traversal');
  }
  public set natTraversal(value: string) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // peers_cert_file - computed: true, optional: true, required: false
  private _peersCertFile?: string; 
  public get peersCertFile() {
    return this.getStringAttribute('peers_cert_file');
  }
  public set peersCertFile(value: string) {
    this._peersCertFile = value;
  }
  public resetPeersCertFile() {
    this._peersCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersCertFileInput() {
    return this._peersCertFile;
  }

  // peers_cert_type - computed: true, optional: true, required: false
  private _peersCertType?: string; 
  public get peersCertType() {
    return this.getStringAttribute('peers_cert_type');
  }
  public set peersCertType(value: string) {
    this._peersCertType = value;
  }
  public resetPeersCertType() {
    this._peersCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersCertTypeInput() {
    return this._peersCertType;
  }

  // peers_id_type - computed: true, optional: true, required: false
  private _peersIdType?: string; 
  public get peersIdType() {
    return this.getStringAttribute('peers_id_type');
  }
  public set peersIdType(value: string) {
    this._peersIdType = value;
  }
  public resetPeersIdType() {
    this._peersIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersIdTypeInput() {
    return this._peersIdType;
  }

  // peers_id_value - computed: true, optional: true, required: false
  private _peersIdValue?: string; 
  public get peersIdValue() {
    return this.getStringAttribute('peers_id_value');
  }
  public set peersIdValue(value: string) {
    this._peersIdValue = value;
  }
  public resetPeersIdValue() {
    this._peersIdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersIdValueInput() {
    return this._peersIdValue;
  }

  // phase1_auth_method - computed: true, optional: true, required: false
  private _phase1AuthMethod?: string; 
  public get phase1AuthMethod() {
    return this.getStringAttribute('phase1_auth_method');
  }
  public set phase1AuthMethod(value: string) {
    this._phase1AuthMethod = value;
  }
  public resetPhase1AuthMethod() {
    this._phase1AuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1AuthMethodInput() {
    return this._phase1AuthMethod;
  }

  // phase1_encrypt_algorithm - computed: true, optional: true, required: false
  private _phase1EncryptAlgorithm?: string; 
  public get phase1EncryptAlgorithm() {
    return this.getStringAttribute('phase1_encrypt_algorithm');
  }
  public set phase1EncryptAlgorithm(value: string) {
    this._phase1EncryptAlgorithm = value;
  }
  public resetPhase1EncryptAlgorithm() {
    this._phase1EncryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1EncryptAlgorithmInput() {
    return this._phase1EncryptAlgorithm;
  }

  // phase1_hash_algorithm - computed: true, optional: true, required: false
  private _phase1HashAlgorithm?: string; 
  public get phase1HashAlgorithm() {
    return this.getStringAttribute('phase1_hash_algorithm');
  }
  public set phase1HashAlgorithm(value: string) {
    this._phase1HashAlgorithm = value;
  }
  public resetPhase1HashAlgorithm() {
    this._phase1HashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1HashAlgorithmInput() {
    return this._phase1HashAlgorithm;
  }

  // phase1_perfect_forward_secrecy - computed: true, optional: true, required: false
  private _phase1PerfectForwardSecrecy?: string; 
  public get phase1PerfectForwardSecrecy() {
    return this.getStringAttribute('phase1_perfect_forward_secrecy');
  }
  public set phase1PerfectForwardSecrecy(value: string) {
    this._phase1PerfectForwardSecrecy = value;
  }
  public resetPhase1PerfectForwardSecrecy() {
    this._phase1PerfectForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1PerfectForwardSecrecyInput() {
    return this._phase1PerfectForwardSecrecy;
  }

  // preshared_key - computed: false, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // preshared_key_encrypted - computed: true, optional: true, required: false
  private _presharedKeyEncrypted?: string; 
  public get presharedKeyEncrypted() {
    return this.getStringAttribute('preshared_key_encrypted');
  }
  public set presharedKeyEncrypted(value: string) {
    this._presharedKeyEncrypted = value;
  }
  public resetPresharedKeyEncrypted() {
    this._presharedKeyEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyEncryptedInput() {
    return this._presharedKeyEncrypted;
  }

  // prf - computed: true, optional: true, required: false
  private _prf?: string; 
  public get prf() {
    return this.getStringAttribute('prf');
  }
  public set prf(value: string) {
    this._prf = value;
  }
  public resetPrf() {
    this._prf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfInput() {
    return this._prf;
  }

  // proxy_support - computed: true, optional: true, required: false
  private _proxySupport?: string; 
  public get proxySupport() {
    return this.getStringAttribute('proxy_support');
  }
  public set proxySupport(value: string) {
    this._proxySupport = value;
  }
  public resetProxySupport() {
    this._proxySupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySupportInput() {
    return this._proxySupport;
  }

  // remote_address - computed: false, optional: false, required: true
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // replay_window_size - computed: true, optional: true, required: false
  private _replayWindowSize?: number; 
  public get replayWindowSize() {
    return this.getNumberAttribute('replay_window_size');
  }
  public set replayWindowSize(value: number) {
    this._replayWindowSize = value;
  }
  public resetReplayWindowSize() {
    this._replayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayWindowSizeInput() {
    return this._replayWindowSize;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // traffic_selector - computed: true, optional: true, required: false
  private _trafficSelector?: string[]; 
  public get trafficSelector() {
    return this.getListAttribute('traffic_selector');
  }
  public set trafficSelector(value: string[]) {
    this._trafficSelector = value;
  }
  public resetTrafficSelector() {
    this._trafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorInput() {
    return this._trafficSelector;
  }

  // verify_cert - computed: true, optional: true, required: false
  private _verifyCert?: string; 
  public get verifyCert() {
    return this.getStringAttribute('verify_cert');
  }
  public set verifyCert(value: string) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string[]; 
  public get version() {
    return this.getListAttribute('version');
  }
  public set version(value: string[]) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service: cdktf.stringToTerraform(this._appService),
      ca_cert_file: cdktf.stringToTerraform(this._caCertFile),
      crl_file: cdktf.stringToTerraform(this._crlFile),
      description: cdktf.stringToTerraform(this._description),
      dpd_delay: cdktf.numberToTerraform(this._dpdDelay),
      generate_policy: cdktf.stringToTerraform(this._generatePolicy),
      id: cdktf.stringToTerraform(this._id),
      lifetime: cdktf.numberToTerraform(this._lifetime),
      mode: cdktf.stringToTerraform(this._mode),
      my_cert_file: cdktf.stringToTerraform(this._myCertFile),
      my_cert_key_file: cdktf.stringToTerraform(this._myCertKeyFile),
      my_cert_key_passphrase: cdktf.stringToTerraform(this._myCertKeyPassphrase),
      my_id_type: cdktf.stringToTerraform(this._myIdType),
      my_id_value: cdktf.stringToTerraform(this._myIdValue),
      name: cdktf.stringToTerraform(this._name),
      nat_traversal: cdktf.stringToTerraform(this._natTraversal),
      passive: cdktf.stringToTerraform(this._passive),
      peers_cert_file: cdktf.stringToTerraform(this._peersCertFile),
      peers_cert_type: cdktf.stringToTerraform(this._peersCertType),
      peers_id_type: cdktf.stringToTerraform(this._peersIdType),
      peers_id_value: cdktf.stringToTerraform(this._peersIdValue),
      phase1_auth_method: cdktf.stringToTerraform(this._phase1AuthMethod),
      phase1_encrypt_algorithm: cdktf.stringToTerraform(this._phase1EncryptAlgorithm),
      phase1_hash_algorithm: cdktf.stringToTerraform(this._phase1HashAlgorithm),
      phase1_perfect_forward_secrecy: cdktf.stringToTerraform(this._phase1PerfectForwardSecrecy),
      preshared_key: cdktf.stringToTerraform(this._presharedKey),
      preshared_key_encrypted: cdktf.stringToTerraform(this._presharedKeyEncrypted),
      prf: cdktf.stringToTerraform(this._prf),
      proxy_support: cdktf.stringToTerraform(this._proxySupport),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      replay_window_size: cdktf.numberToTerraform(this._replayWindowSize),
      state: cdktf.stringToTerraform(this._state),
      traffic_selector: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficSelector),
      verify_cert: cdktf.stringToTerraform(this._verifyCert),
      version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service: {
        value: cdktf.stringToHclTerraform(this._appService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._caCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_file: {
        value: cdktf.stringToHclTerraform(this._crlFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_delay: {
        value: cdktf.numberToHclTerraform(this._dpdDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      lifetime: {
        value: cdktf.numberToHclTerraform(this._lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_cert_file: {
        value: cdktf.stringToHclTerraform(this._myCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_cert_key_file: {
        value: cdktf.stringToHclTerraform(this._myCertKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_cert_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._myCertKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_id_type: {
        value: cdktf.stringToHclTerraform(this._myIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      my_id_value: {
        value: cdktf.stringToHclTerraform(this._myIdValue),
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
      nat_traversal: {
        value: cdktf.stringToHclTerraform(this._natTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.stringToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers_cert_file: {
        value: cdktf.stringToHclTerraform(this._peersCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers_cert_type: {
        value: cdktf.stringToHclTerraform(this._peersCertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers_id_type: {
        value: cdktf.stringToHclTerraform(this._peersIdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers_id_value: {
        value: cdktf.stringToHclTerraform(this._peersIdValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_auth_method: {
        value: cdktf.stringToHclTerraform(this._phase1AuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._phase1EncryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._phase1HashAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_perfect_forward_secrecy: {
        value: cdktf.stringToHclTerraform(this._phase1PerfectForwardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preshared_key: {
        value: cdktf.stringToHclTerraform(this._presharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preshared_key_encrypted: {
        value: cdktf.stringToHclTerraform(this._presharedKeyEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prf: {
        value: cdktf.stringToHclTerraform(this._prf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_support: {
        value: cdktf.stringToHclTerraform(this._proxySupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_window_size: {
        value: cdktf.numberToHclTerraform(this._replayWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_selector: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficSelector),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      verify_cert: {
        value: cdktf.stringToHclTerraform(this._verifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._version),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
