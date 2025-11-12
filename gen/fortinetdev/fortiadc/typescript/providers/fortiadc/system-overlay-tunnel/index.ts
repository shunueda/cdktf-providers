// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemOverlayTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#dstip SystemOverlayTunnel#dstip}
  */
  readonly dstip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#id SystemOverlayTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#interface SystemOverlayTunnel#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#ipversion SystemOverlayTunnel#ipversion}
  */
  readonly ipversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#mkey SystemOverlayTunnel#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#mttl SystemOverlayTunnel#mttl}
  */
  readonly mttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#port SystemOverlayTunnel#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#tunnel_type SystemOverlayTunnel#tunnel_type}
  */
  readonly tunnelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#vdom SystemOverlayTunnel#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#vni SystemOverlayTunnel#vni}
  */
  readonly vni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#vsid SystemOverlayTunnel#vsid}
  */
  readonly vsid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel fortiadc_system_overlay_tunnel}
*/
export class SystemOverlayTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_overlay_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemOverlayTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemOverlayTunnel to import
  * @param importFromId The id of the existing SystemOverlayTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemOverlayTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_overlay_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel fortiadc_system_overlay_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemOverlayTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: SystemOverlayTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_overlay_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstip = config.dstip;
    this._id = config.id;
    this._interface = config.interface;
    this._ipversion = config.ipversion;
    this._mkey = config.mkey;
    this._mttl = config.mttl;
    this._port = config.port;
    this._tunnelType = config.tunnelType;
    this._vdom = config.vdom;
    this._vni = config.vni;
    this._vsid = config.vsid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dstip - computed: true, optional: true, required: false
  private _dstip?: string; 
  public get dstip() {
    return this.getStringAttribute('dstip');
  }
  public set dstip(value: string) {
    this._dstip = value;
  }
  public resetDstip() {
    this._dstip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstipInput() {
    return this._dstip;
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

  // ipversion - computed: true, optional: true, required: false
  private _ipversion?: string; 
  public get ipversion() {
    return this.getStringAttribute('ipversion');
  }
  public set ipversion(value: string) {
    this._ipversion = value;
  }
  public resetIpversion() {
    this._ipversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipversionInput() {
    return this._ipversion;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // mttl - computed: true, optional: true, required: false
  private _mttl?: string; 
  public get mttl() {
    return this.getStringAttribute('mttl');
  }
  public set mttl(value: string) {
    this._mttl = value;
  }
  public resetMttl() {
    this._mttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mttlInput() {
    return this._mttl;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tunnel_type - computed: true, optional: true, required: false
  private _tunnelType?: string; 
  public get tunnelType() {
    return this.getStringAttribute('tunnel_type');
  }
  public set tunnelType(value: string) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vni - computed: true, optional: true, required: false
  private _vni?: string; 
  public get vni() {
    return this.getStringAttribute('vni');
  }
  public set vni(value: string) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // vsid - computed: true, optional: true, required: false
  private _vsid?: string; 
  public get vsid() {
    return this.getStringAttribute('vsid');
  }
  public set vsid(value: string) {
    this._vsid = value;
  }
  public resetVsid() {
    this._vsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsidInput() {
    return this._vsid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dstip: cdktf.stringToTerraform(this._dstip),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ipversion: cdktf.stringToTerraform(this._ipversion),
      mkey: cdktf.stringToTerraform(this._mkey),
      mttl: cdktf.stringToTerraform(this._mttl),
      port: cdktf.stringToTerraform(this._port),
      tunnel_type: cdktf.stringToTerraform(this._tunnelType),
      vdom: cdktf.stringToTerraform(this._vdom),
      vni: cdktf.stringToTerraform(this._vni),
      vsid: cdktf.stringToTerraform(this._vsid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dstip: {
        value: cdktf.stringToHclTerraform(this._dstip),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipversion: {
        value: cdktf.stringToHclTerraform(this._ipversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mttl: {
        value: cdktf.stringToHclTerraform(this._mttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_type: {
        value: cdktf.stringToHclTerraform(this._tunnelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.stringToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsid: {
        value: cdktf.stringToHclTerraform(this._vsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
