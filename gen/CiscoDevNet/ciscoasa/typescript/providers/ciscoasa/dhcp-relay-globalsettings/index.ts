// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpRelayGlobalsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings#id DhcpRelayGlobalsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings#ipv4_timeout DhcpRelayGlobalsettings#ipv4_timeout}
  */
  readonly ipv4Timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings#ipv6_timeout DhcpRelayGlobalsettings#ipv6_timeout}
  */
  readonly ipv6Timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings#trusted_on_all_interfaces DhcpRelayGlobalsettings#trusted_on_all_interfaces}
  */
  readonly trustedOnAllInterfaces?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings ciscoasa_dhcp_relay_globalsettings}
*/
export class DhcpRelayGlobalsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_dhcp_relay_globalsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpRelayGlobalsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpRelayGlobalsettings to import
  * @param importFromId The id of the existing DhcpRelayGlobalsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpRelayGlobalsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_dhcp_relay_globalsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_relay_globalsettings ciscoasa_dhcp_relay_globalsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpRelayGlobalsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DhcpRelayGlobalsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_dhcp_relay_globalsettings',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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
    this._ipv4Timeout = config.ipv4Timeout;
    this._ipv6Timeout = config.ipv6Timeout;
    this._trustedOnAllInterfaces = config.trustedOnAllInterfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv4_timeout - computed: false, optional: true, required: false
  private _ipv4Timeout?: number; 
  public get ipv4Timeout() {
    return this.getNumberAttribute('ipv4_timeout');
  }
  public set ipv4Timeout(value: number) {
    this._ipv4Timeout = value;
  }
  public resetIpv4Timeout() {
    this._ipv4Timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TimeoutInput() {
    return this._ipv4Timeout;
  }

  // ipv6_timeout - computed: false, optional: true, required: false
  private _ipv6Timeout?: number; 
  public get ipv6Timeout() {
    return this.getNumberAttribute('ipv6_timeout');
  }
  public set ipv6Timeout(value: number) {
    this._ipv6Timeout = value;
  }
  public resetIpv6Timeout() {
    this._ipv6Timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TimeoutInput() {
    return this._ipv6Timeout;
  }

  // trusted_on_all_interfaces - computed: false, optional: true, required: false
  private _trustedOnAllInterfaces?: boolean | cdktf.IResolvable; 
  public get trustedOnAllInterfaces() {
    return this.getBooleanAttribute('trusted_on_all_interfaces');
  }
  public set trustedOnAllInterfaces(value: boolean | cdktf.IResolvable) {
    this._trustedOnAllInterfaces = value;
  }
  public resetTrustedOnAllInterfaces() {
    this._trustedOnAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedOnAllInterfacesInput() {
    return this._trustedOnAllInterfaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv4_timeout: cdktf.numberToTerraform(this._ipv4Timeout),
      ipv6_timeout: cdktf.numberToTerraform(this._ipv6Timeout),
      trusted_on_all_interfaces: cdktf.booleanToTerraform(this._trustedOnAllInterfaces),
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
      ipv4_timeout: {
        value: cdktf.numberToHclTerraform(this._ipv4Timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_timeout: {
        value: cdktf.numberToHclTerraform(this._ipv6Timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trusted_on_all_interfaces: {
        value: cdktf.booleanToHclTerraform(this._trustedOnAllInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
