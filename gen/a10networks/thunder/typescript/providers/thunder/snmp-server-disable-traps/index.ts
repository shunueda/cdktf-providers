// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerDisableTrapsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable all traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#all SnmpServerDisableTrapsA#all}
  */
  readonly all?: number;
  /**
  * Disable all gslb traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#gslb SnmpServerDisableTrapsA#gslb}
  */
  readonly gslb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#id SnmpServerDisableTrapsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disable all slb traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#slb SnmpServerDisableTrapsA#slb}
  */
  readonly slb?: number;
  /**
  * Disable all slb-change traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#slb_change SnmpServerDisableTrapsA#slb_change}
  */
  readonly slbChange?: number;
  /**
  * Disable all snmp traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#snmp SnmpServerDisableTrapsA#snmp}
  */
  readonly snmp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#uuid SnmpServerDisableTrapsA#uuid}
  */
  readonly uuid?: string;
  /**
  * Disable all vrrp-a on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#vrrp_a SnmpServerDisableTrapsA#vrrp_a}
  */
  readonly vrrpA?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps thunder_snmp_server_disable_traps}
*/
export class SnmpServerDisableTrapsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_disable_traps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerDisableTrapsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerDisableTrapsA to import
  * @param importFromId The id of the existing SnmpServerDisableTrapsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerDisableTrapsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_disable_traps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_disable_traps thunder_snmp_server_disable_traps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerDisableTrapsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerDisableTrapsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_disable_traps',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._gslb = config.gslb;
    this._id = config.id;
    this._slb = config.slb;
    this._slbChange = config.slbChange;
    this._snmp = config.snmp;
    this._uuid = config.uuid;
    this._vrrpA = config.vrrpA;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // gslb - computed: false, optional: true, required: false
  private _gslb?: number; 
  public get gslb() {
    return this.getNumberAttribute('gslb');
  }
  public set gslb(value: number) {
    this._gslb = value;
  }
  public resetGslb() {
    this._gslb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbInput() {
    return this._gslb;
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

  // slb - computed: false, optional: true, required: false
  private _slb?: number; 
  public get slb() {
    return this.getNumberAttribute('slb');
  }
  public set slb(value: number) {
    this._slb = value;
  }
  public resetSlb() {
    this._slb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInput() {
    return this._slb;
  }

  // slb_change - computed: false, optional: true, required: false
  private _slbChange?: number; 
  public get slbChange() {
    return this.getNumberAttribute('slb_change');
  }
  public set slbChange(value: number) {
    this._slbChange = value;
  }
  public resetSlbChange() {
    this._slbChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbChangeInput() {
    return this._slbChange;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp?: number; 
  public get snmp() {
    return this.getNumberAttribute('snmp');
  }
  public set snmp(value: number) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrrp_a - computed: false, optional: true, required: false
  private _vrrpA?: number; 
  public get vrrpA() {
    return this.getNumberAttribute('vrrp_a');
  }
  public set vrrpA(value: number) {
    this._vrrpA = value;
  }
  public resetVrrpA() {
    this._vrrpA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpAInput() {
    return this._vrrpA;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      gslb: cdktf.numberToTerraform(this._gslb),
      id: cdktf.stringToTerraform(this._id),
      slb: cdktf.numberToTerraform(this._slb),
      slb_change: cdktf.numberToTerraform(this._slbChange),
      snmp: cdktf.numberToTerraform(this._snmp),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrrp_a: cdktf.numberToTerraform(this._vrrpA),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gslb: {
        value: cdktf.numberToHclTerraform(this._gslb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slb: {
        value: cdktf.numberToHclTerraform(this._slb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_change: {
        value: cdktf.numberToHclTerraform(this._slbChange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp: {
        value: cdktf.numberToHclTerraform(this._snmp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrrp_a: {
        value: cdktf.numberToHclTerraform(this._vrrpA),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
