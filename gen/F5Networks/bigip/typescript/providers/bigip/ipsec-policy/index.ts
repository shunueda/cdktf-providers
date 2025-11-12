// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the algorithm to use for IKE authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#auth_algorithm IpsecPolicy#auth_algorithm}
  */
  readonly authAlgorithm?: string;
  /**
  * Description of the IPsec policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#description IpsecPolicy#description}
  */
  readonly description?: string;
  /**
  * Specifies the algorithm to use for IKE encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#encrypt_algorithm IpsecPolicy#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#id IpsecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether to use IPComp encapsulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#ipcomp IpsecPolicy#ipcomp}
  */
  readonly ipcomp?: string;
  /**
  * Specifies the length of time before the IKE security association expires, in kilobytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#kb_lifetime IpsecPolicy#kb_lifetime}
  */
  readonly kbLifetime?: number;
  /**
  * Specifies the length of time before the IKE security association expires, in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#lifetime IpsecPolicy#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Specifies the processing mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#mode IpsecPolicy#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the name of the IPsec policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#name IpsecPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the Diffie-Hellman group to use for IKE Phase 2 negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#perfect_forward_secrecy IpsecPolicy#perfect_forward_secrecy}
  */
  readonly perfectForwardSecrecy?: string;
  /**
  * Specifies the IPsec protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#protocol IpsecPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Specifies the local endpoint IP address of the IPsec tunnel. This parameter is only valid when mode is tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#tunnel_local_address IpsecPolicy#tunnel_local_address}
  */
  readonly tunnelLocalAddress?: string;
  /**
  * Specifies the remote endpoint IP address of the IPsec tunnel. This parameter is only valid when mode is tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#tunnel_remote_address IpsecPolicy#tunnel_remote_address}
  */
  readonly tunnelRemoteAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy bigip_ipsec_policy}
*/
export class IpsecPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ipsec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecPolicy to import
  * @param importFromId The id of the existing IpsecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ipsec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_policy bigip_ipsec_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ipsec_policy',
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
    this._authAlgorithm = config.authAlgorithm;
    this._description = config.description;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._id = config.id;
    this._ipcomp = config.ipcomp;
    this._kbLifetime = config.kbLifetime;
    this._lifetime = config.lifetime;
    this._mode = config.mode;
    this._name = config.name;
    this._perfectForwardSecrecy = config.perfectForwardSecrecy;
    this._protocol = config.protocol;
    this._tunnelLocalAddress = config.tunnelLocalAddress;
    this._tunnelRemoteAddress = config.tunnelRemoteAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_algorithm - computed: true, optional: true, required: false
  private _authAlgorithm?: string; 
  public get authAlgorithm() {
    return this.getStringAttribute('auth_algorithm');
  }
  public set authAlgorithm(value: string) {
    this._authAlgorithm = value;
  }
  public resetAuthAlgorithm() {
    this._authAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgorithmInput() {
    return this._authAlgorithm;
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

  // encrypt_algorithm - computed: true, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
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

  // ipcomp - computed: true, optional: true, required: false
  private _ipcomp?: string; 
  public get ipcomp() {
    return this.getStringAttribute('ipcomp');
  }
  public set ipcomp(value: string) {
    this._ipcomp = value;
  }
  public resetIpcomp() {
    this._ipcomp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcompInput() {
    return this._ipcomp;
  }

  // kb_lifetime - computed: true, optional: true, required: false
  private _kbLifetime?: number; 
  public get kbLifetime() {
    return this.getNumberAttribute('kb_lifetime');
  }
  public set kbLifetime(value: number) {
    this._kbLifetime = value;
  }
  public resetKbLifetime() {
    this._kbLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbLifetimeInput() {
    return this._kbLifetime;
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

  // perfect_forward_secrecy - computed: true, optional: true, required: false
  private _perfectForwardSecrecy?: string; 
  public get perfectForwardSecrecy() {
    return this.getStringAttribute('perfect_forward_secrecy');
  }
  public set perfectForwardSecrecy(value: string) {
    this._perfectForwardSecrecy = value;
  }
  public resetPerfectForwardSecrecy() {
    this._perfectForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfectForwardSecrecyInput() {
    return this._perfectForwardSecrecy;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tunnel_local_address - computed: true, optional: true, required: false
  private _tunnelLocalAddress?: string; 
  public get tunnelLocalAddress() {
    return this.getStringAttribute('tunnel_local_address');
  }
  public set tunnelLocalAddress(value: string) {
    this._tunnelLocalAddress = value;
  }
  public resetTunnelLocalAddress() {
    this._tunnelLocalAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLocalAddressInput() {
    return this._tunnelLocalAddress;
  }

  // tunnel_remote_address - computed: true, optional: true, required: false
  private _tunnelRemoteAddress?: string; 
  public get tunnelRemoteAddress() {
    return this.getStringAttribute('tunnel_remote_address');
  }
  public set tunnelRemoteAddress(value: string) {
    this._tunnelRemoteAddress = value;
  }
  public resetTunnelRemoteAddress() {
    this._tunnelRemoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRemoteAddressInput() {
    return this._tunnelRemoteAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_algorithm: cdktf.stringToTerraform(this._authAlgorithm),
      description: cdktf.stringToTerraform(this._description),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      ipcomp: cdktf.stringToTerraform(this._ipcomp),
      kb_lifetime: cdktf.numberToTerraform(this._kbLifetime),
      lifetime: cdktf.numberToTerraform(this._lifetime),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      perfect_forward_secrecy: cdktf.stringToTerraform(this._perfectForwardSecrecy),
      protocol: cdktf.stringToTerraform(this._protocol),
      tunnel_local_address: cdktf.stringToTerraform(this._tunnelLocalAddress),
      tunnel_remote_address: cdktf.stringToTerraform(this._tunnelRemoteAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_algorithm: {
        value: cdktf.stringToHclTerraform(this._authAlgorithm),
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
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
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
      ipcomp: {
        value: cdktf.stringToHclTerraform(this._ipcomp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kb_lifetime: {
        value: cdktf.numberToHclTerraform(this._kbLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perfect_forward_secrecy: {
        value: cdktf.stringToHclTerraform(this._perfectForwardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_local_address: {
        value: cdktf.stringToHclTerraform(this._tunnelLocalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_remote_address: {
        value: cdktf.stringToHclTerraform(this._tunnelRemoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
