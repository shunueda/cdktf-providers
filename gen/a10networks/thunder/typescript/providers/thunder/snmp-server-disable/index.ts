// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerDisableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable a10cmsubagent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#a10cmsubagent SnmpServerDisable#a10cmsubagent}
  */
  readonly a10Cmsubagent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#id SnmpServerDisable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#uuid SnmpServerDisable#uuid}
  */
  readonly uuid?: string;
  /**
  * traps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#traps SnmpServerDisable#traps}
  */
  readonly traps?: SnmpServerDisableTraps;
}
export interface SnmpServerDisableTraps {
  /**
  * Disable all traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#all SnmpServerDisable#all}
  */
  readonly all?: number;
  /**
  * Disable all gslb traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#gslb SnmpServerDisable#gslb}
  */
  readonly gslb?: number;
  /**
  * Disable all slb traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#slb SnmpServerDisable#slb}
  */
  readonly slb?: number;
  /**
  * Disable all slb-change traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#slb_change SnmpServerDisable#slb_change}
  */
  readonly slbChange?: number;
  /**
  * Disable all snmp traps on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#snmp SnmpServerDisable#snmp}
  */
  readonly snmp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#uuid SnmpServerDisable#uuid}
  */
  readonly uuid?: string;
  /**
  * Disable all vrrp-a on this partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#vrrp_a SnmpServerDisable#vrrp_a}
  */
  readonly vrrpA?: number;
}

export function snmpServerDisableTrapsToTerraform(struct?: SnmpServerDisableTrapsOutputReference | SnmpServerDisableTraps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    gslb: cdktf.numberToTerraform(struct!.gslb),
    slb: cdktf.numberToTerraform(struct!.slb),
    slb_change: cdktf.numberToTerraform(struct!.slbChange),
    snmp: cdktf.numberToTerraform(struct!.snmp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vrrp_a: cdktf.numberToTerraform(struct!.vrrpA),
  }
}


export function snmpServerDisableTrapsToHclTerraform(struct?: SnmpServerDisableTrapsOutputReference | SnmpServerDisableTraps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb: {
      value: cdktf.numberToHclTerraform(struct!.gslb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb: {
      value: cdktf.numberToHclTerraform(struct!.slb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_change: {
      value: cdktf.numberToHclTerraform(struct!.slbChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp: {
      value: cdktf.numberToHclTerraform(struct!.snmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_a: {
      value: cdktf.numberToHclTerraform(struct!.vrrpA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerDisableTrapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerDisableTraps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._gslb !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslb = this._gslb;
    }
    if (this._slb !== undefined) {
      hasAnyValues = true;
      internalValueResult.slb = this._slb;
    }
    if (this._slbChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbChange = this._slbChange;
    }
    if (this._snmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp = this._snmp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vrrpA !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpA = this._vrrpA;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerDisableTraps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._gslb = undefined;
      this._slb = undefined;
      this._slbChange = undefined;
      this._snmp = undefined;
      this._uuid = undefined;
      this._vrrpA = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._gslb = value.gslb;
      this._slb = value.slb;
      this._slbChange = value.slbChange;
      this._snmp = value.snmp;
      this._uuid = value.uuid;
      this._vrrpA = value.vrrpA;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable thunder_snmp_server_disable}
*/
export class SnmpServerDisable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_disable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerDisable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerDisable to import
  * @param importFromId The id of the existing SnmpServerDisable that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerDisable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_disable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_disable thunder_snmp_server_disable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerDisableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerDisableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_disable',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._a10Cmsubagent = config.a10Cmsubagent;
    this._id = config.id;
    this._uuid = config.uuid;
    this._traps.internalValue = config.traps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a10cmsubagent - computed: false, optional: true, required: false
  private _a10Cmsubagent?: number; 
  public get a10Cmsubagent() {
    return this.getNumberAttribute('a10cmsubagent');
  }
  public set a10Cmsubagent(value: number) {
    this._a10Cmsubagent = value;
  }
  public resetA10Cmsubagent() {
    this._a10Cmsubagent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10CmsubagentInput() {
    return this._a10Cmsubagent;
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

  // traps - computed: false, optional: true, required: false
  private _traps = new SnmpServerDisableTrapsOutputReference(this, "traps");
  public get traps() {
    return this._traps;
  }
  public putTraps(value: SnmpServerDisableTraps) {
    this._traps.internalValue = value;
  }
  public resetTraps() {
    this._traps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsInput() {
    return this._traps.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      a10cmsubagent: cdktf.numberToTerraform(this._a10Cmsubagent),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      traps: snmpServerDisableTrapsToTerraform(this._traps.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      a10cmsubagent: {
        value: cdktf.numberToHclTerraform(this._a10Cmsubagent),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traps: {
        value: snmpServerDisableTrapsToHclTerraform(this._traps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerDisableTrapsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
