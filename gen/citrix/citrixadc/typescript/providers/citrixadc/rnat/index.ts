// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#aclname Rnat#aclname}
  */
  readonly aclname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#connfailover Rnat#connfailover}
  */
  readonly connfailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#id Rnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#name Rnat#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#natip Rnat#natip}
  */
  readonly natip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#netmask Rnat#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#network Rnat#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#ownergroup Rnat#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#redirectport Rnat#redirectport}
  */
  readonly redirectport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#srcippersistency Rnat#srcippersistency}
  */
  readonly srcippersistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#td Rnat#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#useproxyport Rnat#useproxyport}
  */
  readonly useproxyport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat citrixadc_rnat}
*/
export class Rnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rnat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rnat to import
  * @param importFromId The id of the existing Rnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rnat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rnat citrixadc_rnat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RnatConfig
  */
  public constructor(scope: Construct, id: string, config: RnatConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rnat',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclname = config.aclname;
    this._connfailover = config.connfailover;
    this._id = config.id;
    this._name = config.name;
    this._natip = config.natip;
    this._netmask = config.netmask;
    this._network = config.network;
    this._ownergroup = config.ownergroup;
    this._redirectport = config.redirectport;
    this._srcippersistency = config.srcippersistency;
    this._td = config.td;
    this._useproxyport = config.useproxyport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aclname - computed: true, optional: true, required: false
  private _aclname?: string; 
  public get aclname() {
    return this.getStringAttribute('aclname');
  }
  public set aclname(value: string) {
    this._aclname = value;
  }
  public resetAclname() {
    this._aclname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclnameInput() {
    return this._aclname;
  }

  // connfailover - computed: true, optional: true, required: false
  private _connfailover?: string; 
  public get connfailover() {
    return this.getStringAttribute('connfailover');
  }
  public set connfailover(value: string) {
    this._connfailover = value;
  }
  public resetConnfailover() {
    this._connfailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connfailoverInput() {
    return this._connfailover;
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

  // natip - computed: true, optional: true, required: false
  private _natip?: string; 
  public get natip() {
    return this.getStringAttribute('natip');
  }
  public set natip(value: string) {
    this._natip = value;
  }
  public resetNatip() {
    this._natip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natipInput() {
    return this._natip;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // redirectport - computed: true, optional: true, required: false
  private _redirectport?: number; 
  public get redirectport() {
    return this.getNumberAttribute('redirectport');
  }
  public set redirectport(value: number) {
    this._redirectport = value;
  }
  public resetRedirectport() {
    this._redirectport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectportInput() {
    return this._redirectport;
  }

  // srcippersistency - computed: true, optional: true, required: false
  private _srcippersistency?: string; 
  public get srcippersistency() {
    return this.getStringAttribute('srcippersistency');
  }
  public set srcippersistency(value: string) {
    this._srcippersistency = value;
  }
  public resetSrcippersistency() {
    this._srcippersistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcippersistencyInput() {
    return this._srcippersistency;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // useproxyport - computed: true, optional: true, required: false
  private _useproxyport?: string; 
  public get useproxyport() {
    return this.getStringAttribute('useproxyport');
  }
  public set useproxyport(value: string) {
    this._useproxyport = value;
  }
  public resetUseproxyport() {
    this._useproxyport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useproxyportInput() {
    return this._useproxyport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aclname: cdktf.stringToTerraform(this._aclname),
      connfailover: cdktf.stringToTerraform(this._connfailover),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      natip: cdktf.stringToTerraform(this._natip),
      netmask: cdktf.stringToTerraform(this._netmask),
      network: cdktf.stringToTerraform(this._network),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      redirectport: cdktf.numberToTerraform(this._redirectport),
      srcippersistency: cdktf.stringToTerraform(this._srcippersistency),
      td: cdktf.numberToTerraform(this._td),
      useproxyport: cdktf.stringToTerraform(this._useproxyport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aclname: {
        value: cdktf.stringToHclTerraform(this._aclname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connfailover: {
        value: cdktf.stringToHclTerraform(this._connfailover),
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
      natip: {
        value: cdktf.stringToHclTerraform(this._natip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      redirectport: {
        value: cdktf.numberToHclTerraform(this._redirectport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcippersistency: {
        value: cdktf.stringToHclTerraform(this._srcippersistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      useproxyport: {
        value: cdktf.stringToHclTerraform(this._useproxyport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
