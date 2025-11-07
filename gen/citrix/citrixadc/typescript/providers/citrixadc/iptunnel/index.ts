// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IptunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#grepayload Iptunnel#grepayload}
  */
  readonly grepayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#id Iptunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#ipsecprofilename Iptunnel#ipsecprofilename}
  */
  readonly ipsecprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#local Iptunnel#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#name Iptunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#ownergroup Iptunnel#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#protocol Iptunnel#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#remote Iptunnel#remote}
  */
  readonly remote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#remotesubnetmask Iptunnel#remotesubnetmask}
  */
  readonly remotesubnetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#vlan Iptunnel#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel citrixadc_iptunnel}
*/
export class Iptunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_iptunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Iptunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Iptunnel to import
  * @param importFromId The id of the existing Iptunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Iptunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_iptunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/iptunnel citrixadc_iptunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IptunnelConfig
  */
  public constructor(scope: Construct, id: string, config: IptunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_iptunnel',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grepayload = config.grepayload;
    this._id = config.id;
    this._ipsecprofilename = config.ipsecprofilename;
    this._local = config.local;
    this._name = config.name;
    this._ownergroup = config.ownergroup;
    this._protocol = config.protocol;
    this._remote = config.remote;
    this._remotesubnetmask = config.remotesubnetmask;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grepayload - computed: true, optional: true, required: false
  private _grepayload?: string; 
  public get grepayload() {
    return this.getStringAttribute('grepayload');
  }
  public set grepayload(value: string) {
    this._grepayload = value;
  }
  public resetGrepayload() {
    this._grepayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grepayloadInput() {
    return this._grepayload;
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

  // ipsecprofilename - computed: true, optional: true, required: false
  private _ipsecprofilename?: string; 
  public get ipsecprofilename() {
    return this.getStringAttribute('ipsecprofilename');
  }
  public set ipsecprofilename(value: string) {
    this._ipsecprofilename = value;
  }
  public resetIpsecprofilename() {
    this._ipsecprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecprofilenameInput() {
    return this._ipsecprofilename;
  }

  // local - computed: true, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // ownergroup - computed: true, optional: true, required: false
  private _ownergroup?: string; 
  public get ownergroup() {
    return this.getStringAttribute('ownergroup');
  }
  public set ownergroup(value: string) {
    this._ownergroup = value;
  }
  public resetOwnergroup() {
    this._ownergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownergroupInput() {
    return this._ownergroup;
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

  // remote - computed: true, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // remotesubnetmask - computed: true, optional: true, required: false
  private _remotesubnetmask?: string; 
  public get remotesubnetmask() {
    return this.getStringAttribute('remotesubnetmask');
  }
  public set remotesubnetmask(value: string) {
    this._remotesubnetmask = value;
  }
  public resetRemotesubnetmask() {
    this._remotesubnetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotesubnetmaskInput() {
    return this._remotesubnetmask;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grepayload: cdktf.stringToTerraform(this._grepayload),
      id: cdktf.stringToTerraform(this._id),
      ipsecprofilename: cdktf.stringToTerraform(this._ipsecprofilename),
      local: cdktf.stringToTerraform(this._local),
      name: cdktf.stringToTerraform(this._name),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      protocol: cdktf.stringToTerraform(this._protocol),
      remote: cdktf.stringToTerraform(this._remote),
      remotesubnetmask: cdktf.stringToTerraform(this._remotesubnetmask),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grepayload: {
        value: cdktf.stringToHclTerraform(this._grepayload),
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
      ipsecprofilename: {
        value: cdktf.stringToHclTerraform(this._ipsecprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.stringToHclTerraform(this._local),
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
      ownergroup: {
        value: cdktf.stringToHclTerraform(this._ownergroup),
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
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remotesubnetmask: {
        value: cdktf.stringToHclTerraform(this._remotesubnetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
