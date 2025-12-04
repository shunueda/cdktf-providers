// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GreConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#___path___ Gre#___path___}
  */
  readonly path?: string;
  /**
  * Whether to allow FastPath processing. Must be disabled if IPsec tunneling is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#allow_fast_path Gre#allow_fast_path}
  */
  readonly allowFastPath?: boolean | cdktf.IResolvable;
  /**
  * Controls whether to change MSS size for received TCP SYN packets. When enabled, a router will change the MSS size for received TCP SYN packets if the current MSS size exceeds the tunnel interface MTU (taking into account the TCP/IP overhead). The received encapsulated packet will still contain the original MSS, and only after decapsulation the MSS is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#clamp_tcp_mss Gre#clamp_tcp_mss}
  */
  readonly clampTcpMss?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#comment Gre#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#disabled Gre#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#dont_fragment Gre#dont_fragment}
  */
  readonly dontFragment?: string;
  /**
  * Set dscp value in GRE header to a fixed value '0..63' or 'inherit' from dscp value taken from tunnelled traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#dscp Gre#dscp}
  */
  readonly dscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#id Gre#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When secret is specified, router adds dynamic IPsec peer to remote-address with pre-shared key and policy (by default phase2 uses sha1/aes128cbc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#ipsec_secret Gre#ipsec_secret}
  */
  readonly ipsecSecret?: string;
  /**
  * Tunnel keepalive parameter sets the time interval in which the tunnel running flag will remain even if the remote end of tunnel goes down. If configured time,retries fail, interface running flag is removed. Parameters are written in following format: `KeepaliveInterval,KeepaliveRetries` where `KeepaliveInterval` is time interval and `KeepaliveRetries` - number of retry attempts. `KeepaliveInterval` is integer 0..4294967295
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#keepalive Gre#keepalive}
  */
  readonly keepalive?: string;
  /**
  * Source address of the tunnel packets, local on the router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#local_address Gre#local_address}
  */
  readonly localAddress?: string;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#mtu Gre#mtu}
  */
  readonly mtu?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#name Gre#name}
  */
  readonly name: string;
  /**
  * IP address of the remote end of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#remote_address Gre#remote_address}
  */
  readonly remoteAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre routeros_gre}
*/
export class Gre extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_gre";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gre resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gre to import
  * @param importFromId The id of the existing Gre that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gre to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_gre", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/gre routeros_gre} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GreConfig
  */
  public constructor(scope: Construct, id: string, config: GreConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_gre',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
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
    this._allowFastPath = config.allowFastPath;
    this._clampTcpMss = config.clampTcpMss;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dontFragment = config.dontFragment;
    this._dscp = config.dscp;
    this._id = config.id;
    this._ipsecSecret = config.ipsecSecret;
    this._keepalive = config.keepalive;
    this._localAddress = config.localAddress;
    this._mtu = config.mtu;
    this._name = config.name;
    this._remoteAddress = config.remoteAddress;
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

  // actual_mtu - computed: true, optional: false, required: false
  public get actualMtu() {
    return this.getNumberAttribute('actual_mtu');
  }

  // allow_fast_path - computed: false, optional: true, required: false
  private _allowFastPath?: boolean | cdktf.IResolvable; 
  public get allowFastPath() {
    return this.getBooleanAttribute('allow_fast_path');
  }
  public set allowFastPath(value: boolean | cdktf.IResolvable) {
    this._allowFastPath = value;
  }
  public resetAllowFastPath() {
    this._allowFastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFastPathInput() {
    return this._allowFastPath;
  }

  // clamp_tcp_mss - computed: false, optional: true, required: false
  private _clampTcpMss?: boolean | cdktf.IResolvable; 
  public get clampTcpMss() {
    return this.getBooleanAttribute('clamp_tcp_mss');
  }
  public set clampTcpMss(value: boolean | cdktf.IResolvable) {
    this._clampTcpMss = value;
  }
  public resetClampTcpMss() {
    this._clampTcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clampTcpMssInput() {
    return this._clampTcpMss;
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

  // dont_fragment - computed: false, optional: true, required: false
  private _dontFragment?: string; 
  public get dontFragment() {
    return this.getStringAttribute('dont_fragment');
  }
  public set dontFragment(value: string) {
    this._dontFragment = value;
  }
  public resetDontFragment() {
    this._dontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontFragmentInput() {
    return this._dontFragment;
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

  // ipsec_secret - computed: false, optional: true, required: false
  private _ipsecSecret?: string; 
  public get ipsecSecret() {
    return this.getStringAttribute('ipsec_secret');
  }
  public set ipsecSecret(value: string) {
    this._ipsecSecret = value;
  }
  public resetIpsecSecret() {
    this._ipsecSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSecretInput() {
    return this._ipsecSecret;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: string; 
  public get keepalive() {
    return this.getStringAttribute('keepalive');
  }
  public set keepalive(value: string) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // l2mtu - computed: true, optional: false, required: false
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_fast_path: cdktf.booleanToTerraform(this._allowFastPath),
      clamp_tcp_mss: cdktf.booleanToTerraform(this._clampTcpMss),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dont_fragment: cdktf.stringToTerraform(this._dontFragment),
      dscp: cdktf.stringToTerraform(this._dscp),
      id: cdktf.stringToTerraform(this._id),
      ipsec_secret: cdktf.stringToTerraform(this._ipsecSecret),
      keepalive: cdktf.stringToTerraform(this._keepalive),
      local_address: cdktf.stringToTerraform(this._localAddress),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
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
      allow_fast_path: {
        value: cdktf.booleanToHclTerraform(this._allowFastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clamp_tcp_mss: {
        value: cdktf.booleanToHclTerraform(this._clampTcpMss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      dont_fragment: {
        value: cdktf.stringToHclTerraform(this._dontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp: {
        value: cdktf.stringToHclTerraform(this._dscp),
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
      ipsec_secret: {
        value: cdktf.stringToHclTerraform(this._ipsecSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive: {
        value: cdktf.stringToHclTerraform(this._keepalive),
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
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
