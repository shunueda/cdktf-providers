// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemOverlayTunnelChildRemoteHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#host_mac SystemOverlayTunnelChildRemoteHost#host_mac}
  */
  readonly hostMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#id SystemOverlayTunnelChildRemoteHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#mkey SystemOverlayTunnelChildRemoteHost#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#pkey SystemOverlayTunnelChildRemoteHost#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#vdom SystemOverlayTunnelChildRemoteHost#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#vtep SystemOverlayTunnelChildRemoteHost#vtep}
  */
  readonly vtep?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host fortiadc_system_overlay_tunnel_child_remote_host}
*/
export class SystemOverlayTunnelChildRemoteHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_overlay_tunnel_child_remote_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemOverlayTunnelChildRemoteHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemOverlayTunnelChildRemoteHost to import
  * @param importFromId The id of the existing SystemOverlayTunnelChildRemoteHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemOverlayTunnelChildRemoteHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_overlay_tunnel_child_remote_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_overlay_tunnel_child_remote_host fortiadc_system_overlay_tunnel_child_remote_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemOverlayTunnelChildRemoteHostConfig
  */
  public constructor(scope: Construct, id: string, config: SystemOverlayTunnelChildRemoteHostConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_overlay_tunnel_child_remote_host',
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
    this._hostMac = config.hostMac;
    this._id = config.id;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._vdom = config.vdom;
    this._vtep = config.vtep;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_mac - computed: true, optional: true, required: false
  private _hostMac?: string; 
  public get hostMac() {
    return this.getStringAttribute('host_mac');
  }
  public set hostMac(value: string) {
    this._hostMac = value;
  }
  public resetHostMac() {
    this._hostMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMacInput() {
    return this._hostMac;
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

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
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

  // vtep - computed: true, optional: true, required: false
  private _vtep?: string; 
  public get vtep() {
    return this.getStringAttribute('vtep');
  }
  public set vtep(value: string) {
    this._vtep = value;
  }
  public resetVtep() {
    this._vtep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepInput() {
    return this._vtep;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_mac: cdktf.stringToTerraform(this._hostMac),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      vdom: cdktf.stringToTerraform(this._vdom),
      vtep: cdktf.stringToTerraform(this._vtep),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_mac: {
        value: cdktf.stringToHclTerraform(this._hostMac),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
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
      vtep: {
        value: cdktf.stringToHclTerraform(this._vtep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
