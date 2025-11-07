// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpDhcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The mode of the DHCPv4 server. Must be one of: "disabled", "server".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#dhcpv4 DhcpDhcp#dhcpv4}
  */
  readonly dhcpv4?: string;
  /**
  * The mode of the DHCPv6 server. Must be one of: "disabled", "relay", "server".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#dhcpv6 DhcpDhcp#dhcpv6}
  */
  readonly dhcpv6?: string;
  /**
  * Forces DHCP serving on the specified interface even if another DHCP server is detected on the same network segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#force DhcpDhcp#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#id DhcpDhcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Specifies whether dnsmasq should ignore this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#ignore DhcpDhcp#ignore}
  */
  readonly ignore?: boolean | cdktf.IResolvable;
  /**
  * The interface associated with this DHCP address pool. This name is what the interface is known as in UCI, or the `id` field in Terraform. Required if `ignore` is not `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#interface DhcpDhcp#interface}
  */
  readonly interface?: string;
  /**
  * The lease time of addresses handed out to clients. E.g. `12h`, or `30m`. Required if `ignore` is not `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#leasetime DhcpDhcp#leasetime}
  */
  readonly leasetime?: string;
  /**
  * Specifies the size of the address pool. E.g. With start = 100, and limit = 150, the maximum address will be 249. Required if `ignore` is not `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#limit DhcpDhcp#limit}
  */
  readonly limit?: number;
  /**
  * The mode of Router Advertisements. Must be one of: "disabled", "relay", "server".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#ra DhcpDhcp#ra}
  */
  readonly ra?: string;
  /**
  * Router Advertisement flags to include in messages. Must be one of: "home-agent", "managed-config", "none", "other-config".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#ra_flags DhcpDhcp#ra_flags}
  */
  readonly raFlags?: string[];
  /**
  * Specifies the offset from the network address of the underlying interface to calculate the minimum address that may be leased to clients. It may be greater than 255 to span subnets. Required if `ignore` is not `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#start DhcpDhcp#start}
  */
  readonly start?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp openwrt_dhcp_dhcp}
*/
export class DhcpDhcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_dhcp_dhcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpDhcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpDhcp to import
  * @param importFromId The id of the existing DhcpDhcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpDhcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_dhcp_dhcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_dhcp openwrt_dhcp_dhcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpDhcpConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpDhcpConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_dhcp_dhcp',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpv4 = config.dhcpv4;
    this._dhcpv6 = config.dhcpv6;
    this._force = config.force;
    this._id = config.id;
    this._ignore = config.ignore;
    this._interface = config.interface;
    this._leasetime = config.leasetime;
    this._limit = config.limit;
    this._ra = config.ra;
    this._raFlags = config.raFlags;
    this._start = config.start;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcpv4 - computed: true, optional: true, required: false
  private _dhcpv4?: string; 
  public get dhcpv4() {
    return this.getStringAttribute('dhcpv4');
  }
  public set dhcpv4(value: string) {
    this._dhcpv4 = value;
  }
  public resetDhcpv4() {
    this._dhcpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv4Input() {
    return this._dhcpv4;
  }

  // dhcpv6 - computed: true, optional: true, required: false
  private _dhcpv6?: string; 
  public get dhcpv6() {
    return this.getStringAttribute('dhcpv6');
  }
  public set dhcpv6(value: string) {
    this._dhcpv6 = value;
  }
  public resetDhcpv6() {
    this._dhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpv6Input() {
    return this._dhcpv6;
  }

  // force - computed: true, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore - computed: true, optional: true, required: false
  private _ignore?: boolean | cdktf.IResolvable; 
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }
  public set ignore(value: boolean | cdktf.IResolvable) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // leasetime - computed: true, optional: true, required: false
  private _leasetime?: string; 
  public get leasetime() {
    return this.getStringAttribute('leasetime');
  }
  public set leasetime(value: string) {
    this._leasetime = value;
  }
  public resetLeasetime() {
    this._leasetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasetimeInput() {
    return this._leasetime;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // ra - computed: true, optional: true, required: false
  private _ra?: string; 
  public get ra() {
    return this.getStringAttribute('ra');
  }
  public set ra(value: string) {
    this._ra = value;
  }
  public resetRa() {
    this._ra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raInput() {
    return this._ra;
  }

  // ra_flags - computed: true, optional: true, required: false
  private _raFlags?: string[]; 
  public get raFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('ra_flags'));
  }
  public set raFlags(value: string[]) {
    this._raFlags = value;
  }
  public resetRaFlags() {
    this._raFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raFlagsInput() {
    return this._raFlags;
  }

  // start - computed: true, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcpv4: cdktf.stringToTerraform(this._dhcpv4),
      dhcpv6: cdktf.stringToTerraform(this._dhcpv6),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      ignore: cdktf.booleanToTerraform(this._ignore),
      interface: cdktf.stringToTerraform(this._interface),
      leasetime: cdktf.stringToTerraform(this._leasetime),
      limit: cdktf.numberToTerraform(this._limit),
      ra: cdktf.stringToTerraform(this._ra),
      ra_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._raFlags),
      start: cdktf.numberToTerraform(this._start),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcpv4: {
        value: cdktf.stringToHclTerraform(this._dhcpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcpv6: {
        value: cdktf.stringToHclTerraform(this._dhcpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore: {
        value: cdktf.booleanToHclTerraform(this._ignore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leasetime: {
        value: cdktf.stringToHclTerraform(this._leasetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ra: {
        value: cdktf.stringToHclTerraform(this._ra),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ra_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._raFlags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      start: {
        value: cdktf.numberToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
