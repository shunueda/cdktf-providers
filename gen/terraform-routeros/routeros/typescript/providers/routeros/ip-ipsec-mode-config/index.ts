// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpIpsecModeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#___path___ IpIpsecModeConfig#___path___}
  */
  readonly path?: string;
  /**
  * Single IP address for the initiator instead of specifying a whole address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#address IpIpsecModeConfig#address}
  */
  readonly address?: string;
  /**
  * Name of the address pool from which the responder will try to assign address if mode-config is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#address_pool IpIpsecModeConfig#address_pool}
  */
  readonly addressPool?: string;
  /**
  * Prefix length (netmask) of the assigned address from the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#address_prefix_length IpIpsecModeConfig#address_prefix_length}
  */
  readonly addressPrefixLength?: number;
  /**
  * Firewall connection mark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#connection_mark IpIpsecModeConfig#connection_mark}
  */
  readonly connectionMark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#id IpIpsecModeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#name IpIpsecModeConfig#name}
  */
  readonly name: string;
  /**
  * Specifies whether the configuration will work as an initiator (client) or responder (server). The initiator will request for mode-config parameters from the responder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#responder IpIpsecModeConfig#responder}
  */
  readonly responder?: boolean | cdktf.IResolvable;
  /**
  * List of DNS names that will be resolved using a system-dns=yes or static-dns= setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#split_dns IpIpsecModeConfig#split_dns}
  */
  readonly splitDns?: string[];
  /**
  * List of subnets in CIDR format, which to tunnel. Subnets will be sent to the peer using the CISCO UNITY extension, a remote peer will create specific dynamic policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#split_include IpIpsecModeConfig#split_include}
  */
  readonly splitInclude?: string[];
  /**
  * Specifying an address list will generate dynamic source NAT rules. This parameter is only available with responder=no. A roadWarrior client with NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#src_address_list IpIpsecModeConfig#src_address_list}
  */
  readonly srcAddressList?: string;
  /**
  * Manually specified DNS server's IP address to be sent to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#static_dns IpIpsecModeConfig#static_dns}
  */
  readonly staticDns?: string;
  /**
  * When this option is enabled DNS addresses will be taken from `/ip dns`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#system_dns IpIpsecModeConfig#system_dns}
  */
  readonly systemDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#use_responder_dns IpIpsecModeConfig#use_responder_dns}
  */
  readonly useResponderDns?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config routeros_ip_ipsec_mode_config}
*/
export class IpIpsecModeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_ipsec_mode_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpIpsecModeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpIpsecModeConfig to import
  * @param importFromId The id of the existing IpIpsecModeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpIpsecModeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_ipsec_mode_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/ip_ipsec_mode_config routeros_ip_ipsec_mode_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpIpsecModeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IpIpsecModeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_ipsec_mode_config',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
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
    this._addressPool = config.addressPool;
    this._addressPrefixLength = config.addressPrefixLength;
    this._connectionMark = config.connectionMark;
    this._id = config.id;
    this._name = config.name;
    this._responder = config.responder;
    this._splitDns = config.splitDns;
    this._splitInclude = config.splitInclude;
    this._srcAddressList = config.srcAddressList;
    this._staticDns = config.staticDns;
    this._systemDns = config.systemDns;
    this._useResponderDns = config.useResponderDns;
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

  // address_pool - computed: false, optional: true, required: false
  private _addressPool?: string; 
  public get addressPool() {
    return this.getStringAttribute('address_pool');
  }
  public set addressPool(value: string) {
    this._addressPool = value;
  }
  public resetAddressPool() {
    this._addressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolInput() {
    return this._addressPool;
  }

  // address_prefix_length - computed: false, optional: true, required: false
  private _addressPrefixLength?: number; 
  public get addressPrefixLength() {
    return this.getNumberAttribute('address_prefix_length');
  }
  public set addressPrefixLength(value: number) {
    this._addressPrefixLength = value;
  }
  public resetAddressPrefixLength() {
    this._addressPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPrefixLengthInput() {
    return this._addressPrefixLength;
  }

  // connection_mark - computed: false, optional: true, required: false
  private _connectionMark?: string; 
  public get connectionMark() {
    return this.getStringAttribute('connection_mark');
  }
  public set connectionMark(value: string) {
    this._connectionMark = value;
  }
  public resetConnectionMark() {
    this._connectionMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMarkInput() {
    return this._connectionMark;
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

  // responder - computed: false, optional: true, required: false
  private _responder?: boolean | cdktf.IResolvable; 
  public get responder() {
    return this.getBooleanAttribute('responder');
  }
  public set responder(value: boolean | cdktf.IResolvable) {
    this._responder = value;
  }
  public resetResponder() {
    this._responder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderInput() {
    return this._responder;
  }

  // split_dns - computed: false, optional: true, required: false
  private _splitDns?: string[]; 
  public get splitDns() {
    return cdktf.Fn.tolist(this.getListAttribute('split_dns'));
  }
  public set splitDns(value: string[]) {
    this._splitDns = value;
  }
  public resetSplitDns() {
    this._splitDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDnsInput() {
    return this._splitDns;
  }

  // split_include - computed: false, optional: true, required: false
  private _splitInclude?: string[]; 
  public get splitInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('split_include'));
  }
  public set splitInclude(value: string[]) {
    this._splitInclude = value;
  }
  public resetSplitInclude() {
    this._splitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitIncludeInput() {
    return this._splitInclude;
  }

  // src_address_list - computed: false, optional: true, required: false
  private _srcAddressList?: string; 
  public get srcAddressList() {
    return this.getStringAttribute('src_address_list');
  }
  public set srcAddressList(value: string) {
    this._srcAddressList = value;
  }
  public resetSrcAddressList() {
    this._srcAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressListInput() {
    return this._srcAddressList;
  }

  // static_dns - computed: false, optional: true, required: false
  private _staticDns?: string; 
  public get staticDns() {
    return this.getStringAttribute('static_dns');
  }
  public set staticDns(value: string) {
    this._staticDns = value;
  }
  public resetStaticDns() {
    this._staticDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDnsInput() {
    return this._staticDns;
  }

  // system_dns - computed: false, optional: true, required: false
  private _systemDns?: boolean | cdktf.IResolvable; 
  public get systemDns() {
    return this.getBooleanAttribute('system_dns');
  }
  public set systemDns(value: boolean | cdktf.IResolvable) {
    this._systemDns = value;
  }
  public resetSystemDns() {
    this._systemDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDnsInput() {
    return this._systemDns;
  }

  // use_responder_dns - computed: false, optional: true, required: false
  private _useResponderDns?: string; 
  public get useResponderDns() {
    return this.getStringAttribute('use_responder_dns');
  }
  public set useResponderDns(value: string) {
    this._useResponderDns = value;
  }
  public resetUseResponderDns() {
    this._useResponderDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useResponderDnsInput() {
    return this._useResponderDns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      address_pool: cdktf.stringToTerraform(this._addressPool),
      address_prefix_length: cdktf.numberToTerraform(this._addressPrefixLength),
      connection_mark: cdktf.stringToTerraform(this._connectionMark),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      responder: cdktf.booleanToTerraform(this._responder),
      split_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splitDns),
      split_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._splitInclude),
      src_address_list: cdktf.stringToTerraform(this._srcAddressList),
      static_dns: cdktf.stringToTerraform(this._staticDns),
      system_dns: cdktf.booleanToTerraform(this._systemDns),
      use_responder_dns: cdktf.stringToTerraform(this._useResponderDns),
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
      address_pool: {
        value: cdktf.stringToHclTerraform(this._addressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_prefix_length: {
        value: cdktf.numberToHclTerraform(this._addressPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_mark: {
        value: cdktf.stringToHclTerraform(this._connectionMark),
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
      responder: {
        value: cdktf.booleanToHclTerraform(this._responder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      split_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._splitDns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      split_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._splitInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_address_list: {
        value: cdktf.stringToHclTerraform(this._srcAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_dns: {
        value: cdktf.stringToHclTerraform(this._staticDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_dns: {
        value: cdktf.booleanToHclTerraform(this._systemDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_responder_dns: {
        value: cdktf.stringToHclTerraform(this._useResponderDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
