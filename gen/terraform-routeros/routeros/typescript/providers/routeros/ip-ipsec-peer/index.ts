// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#___path___ IpIpsecPeer#___path___}
  */
  readonly path?: string;
  /**
  * If the remote peer's address matches this prefix, then the peer configuration is used in authentication and establishment of Phase 1. If several peer's addresses match several configuration entries, the most specific one (i.e. the one with the largest netmask) will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#address IpIpsecPeer#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#comment IpIpsecPeer#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#disabled IpIpsecPeer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Different ISAKMP phase 1 exchange modes according to RFC 2408. the main mode relaxes rfc2409 section 5.4, to allow pre-shared-key authentication in the main mode. ike2 mode enables Ikev2 RFC 7296. Parameters that are ignored by IKEv2 proposal-check, compatibility-options, lifebytes, dpd-maximum-failures, nat-traversal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#exchange_mode IpIpsecPeer#exchange_mode}
  */
  readonly exchangeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#id IpIpsecPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routers local address on which Phase 1 should be bounded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#local_address IpIpsecPeer#local_address}
  */
  readonly localAddress?: string;
  /**
  * Peer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#name IpIpsecPeer#name}
  */
  readonly name: string;
  /**
  * When a passive mode is enabled will wait for a remote peer to initiate an IKE connection. The enabled passive mode also indicates that the peer is xauth responder, and disabled passive mode - xauth initiator. When a passive mode is a disabled peer will try to establish not only phase1 but also phase2 automatically, if policies are configured or created during the phase1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#passive IpIpsecPeer#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Communication port used (when a router is an initiator) to connect to remote peer in cases if remote peer uses the non-default port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#port IpIpsecPeer#port}
  */
  readonly port?: number;
  /**
  * Name of the profile template that will be used during IKE negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#profile IpIpsecPeer#profile}
  */
  readonly profile?: string;
  /**
  * Specifies whether to send `initial contact` IKE packet or wait for remote side, this packet should trigger the removal of old peer SAs for current source address. Usually, in road warrior setups clients are initiators and this parameter should be set to no. Initial contact is not sent if modecfg or xauth is enabled for ikev1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#send_initial_contact IpIpsecPeer#send_initial_contact}
  */
  readonly sendInitialContact?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer routeros_ip_ipsec_peer}
*/
export class IpIpsecPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecPeer to import
  * @param importFromId The id of the existing IpIpsecPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/ip_ipsec_peer routeros_ip_ipsec_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecPeerConfig
  */
  public constructor(scope: Construct, id: string, config: IpIpsecPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_peer',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._address = config.address;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._exchangeMode = config.exchangeMode;
    this._id = config.id;
    this._localAddress = config.localAddress;
    this._name = config.name;
    this._passive = config.passive;
    this._port = config.port;
    this._profile = config.profile;
    this._sendInitialContact = config.sendInitialContact;
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

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // exchange_mode - computed: false, optional: true, required: false
  private _exchangeMode?: string; 
  public get exchangeMode() {
    return this.getStringAttribute('exchange_mode');
  }
  public set exchangeMode(value: string) {
    this._exchangeMode = value;
  }
  public resetExchangeMode() {
    this._exchangeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exchangeModeInput() {
    return this._exchangeMode;
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

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // responder - computed: true, optional: false, required: false
  public get responder() {
    return this.getBooleanAttribute('responder');
  }

  // send_initial_contact - computed: false, optional: true, required: false
  private _sendInitialContact?: boolean | cdktf.IResolvable; 
  public get sendInitialContact() {
    return this.getBooleanAttribute('send_initial_contact');
  }
  public set sendInitialContact(value: boolean | cdktf.IResolvable) {
    this._sendInitialContact = value;
  }
  public resetSendInitialContact() {
    this._sendInitialContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInitialContactInput() {
    return this._sendInitialContact;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      exchange_mode: cdktf.stringToTerraform(this._exchangeMode),
      id: cdktf.stringToTerraform(this._id),
      local_address: cdktf.stringToTerraform(this._localAddress),
      name: cdktf.stringToTerraform(this._name),
      passive: cdktf.booleanToTerraform(this._passive),
      port: cdktf.numberToTerraform(this._port),
      profile: cdktf.stringToTerraform(this._profile),
      send_initial_contact: cdktf.booleanToTerraform(this._sendInitialContact),
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
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      exchange_mode: {
        value: cdktf.stringToHclTerraform(this._exchangeMode),
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
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
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
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_initial_contact: {
        value: cdktf.booleanToHclTerraform(this._sendInitialContact),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
