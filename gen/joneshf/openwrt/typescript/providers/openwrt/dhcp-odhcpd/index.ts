// https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpOdhcpdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the section. This name is only used when interacting with UCI directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#id DhcpOdhcpd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Location of the lease/hostfile for DHCPv4 and DHCPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#leasefile DhcpOdhcpd#leasefile}
  */
  readonly leasefile?: string;
  /**
  * Location of the lease trigger script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#leasetrigger DhcpOdhcpd#leasetrigger}
  */
  readonly leasetrigger?: string;
  /**
  * Enable DHCPv4 if the 'dhcp' section constains a `start` option, but no `dhcpv4` option set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#legacy DhcpOdhcpd#legacy}
  */
  readonly legacy?: boolean | cdktf.IResolvable;
  /**
  * Syslog level priority (0-7).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#loglevel DhcpOdhcpd#loglevel}
  */
  readonly loglevel?: number;
  /**
  * Use odhcpd as the main DHCPv4 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#maindhcp DhcpOdhcpd#maindhcp}
  */
  readonly maindhcp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd openwrt_dhcp_odhcpd}
*/
export class DhcpOdhcpd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openwrt_dhcp_odhcpd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpOdhcpd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpOdhcpd to import
  * @param importFromId The id of the existing DhcpOdhcpd that should be imported. Refer to the {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpOdhcpd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openwrt_dhcp_odhcpd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/joneshf/openwrt/0.0.20/docs/resources/dhcp_odhcpd openwrt_dhcp_odhcpd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpOdhcpdConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpOdhcpdConfig) {
    super(scope, id, {
      terraformResourceType: 'openwrt_dhcp_odhcpd',
      terraformGeneratorMetadata: {
        providerName: 'openwrt',
        providerVersion: '0.0.20',
        providerVersionConstraint: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._leasefile = config.leasefile;
    this._leasetrigger = config.leasetrigger;
    this._legacy = config.legacy;
    this._loglevel = config.loglevel;
    this._maindhcp = config.maindhcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // leasefile - computed: true, optional: true, required: false
  private _leasefile?: string; 
  public get leasefile() {
    return this.getStringAttribute('leasefile');
  }
  public set leasefile(value: string) {
    this._leasefile = value;
  }
  public resetLeasefile() {
    this._leasefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasefileInput() {
    return this._leasefile;
  }

  // leasetrigger - computed: true, optional: true, required: false
  private _leasetrigger?: string; 
  public get leasetrigger() {
    return this.getStringAttribute('leasetrigger');
  }
  public set leasetrigger(value: string) {
    this._leasetrigger = value;
  }
  public resetLeasetrigger() {
    this._leasetrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasetriggerInput() {
    return this._leasetrigger;
  }

  // legacy - computed: true, optional: true, required: false
  private _legacy?: boolean | cdktf.IResolvable; 
  public get legacy() {
    return this.getBooleanAttribute('legacy');
  }
  public set legacy(value: boolean | cdktf.IResolvable) {
    this._legacy = value;
  }
  public resetLegacy() {
    this._legacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyInput() {
    return this._legacy;
  }

  // loglevel - computed: true, optional: true, required: false
  private _loglevel?: number; 
  public get loglevel() {
    return this.getNumberAttribute('loglevel');
  }
  public set loglevel(value: number) {
    this._loglevel = value;
  }
  public resetLoglevel() {
    this._loglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglevelInput() {
    return this._loglevel;
  }

  // maindhcp - computed: true, optional: true, required: false
  private _maindhcp?: boolean | cdktf.IResolvable; 
  public get maindhcp() {
    return this.getBooleanAttribute('maindhcp');
  }
  public set maindhcp(value: boolean | cdktf.IResolvable) {
    this._maindhcp = value;
  }
  public resetMaindhcp() {
    this._maindhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maindhcpInput() {
    return this._maindhcp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      leasefile: cdktf.stringToTerraform(this._leasefile),
      leasetrigger: cdktf.stringToTerraform(this._leasetrigger),
      legacy: cdktf.booleanToTerraform(this._legacy),
      loglevel: cdktf.numberToTerraform(this._loglevel),
      maindhcp: cdktf.booleanToTerraform(this._maindhcp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leasefile: {
        value: cdktf.stringToHclTerraform(this._leasefile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leasetrigger: {
        value: cdktf.stringToHclTerraform(this._leasetrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legacy: {
        value: cdktf.booleanToHclTerraform(this._legacy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loglevel: {
        value: cdktf.numberToHclTerraform(this._loglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maindhcp: {
        value: cdktf.booleanToHclTerraform(this._maindhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
