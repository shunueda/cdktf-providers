// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugTableSyncEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * all Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#all DebugTableSyncEvent#all}
  */
  readonly all?: number;
  /**
  * ARP Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#arp DebugTableSyncEvent#arp}
  */
  readonly arp?: number;
  /**
  * IPv4 FIB Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#fibv4 DebugTableSyncEvent#fibv4}
  */
  readonly fibv4?: number;
  /**
  * IPv6 FIB Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#fibv6 DebugTableSyncEvent#fibv6}
  */
  readonly fibv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#id DebugTableSyncEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#mac DebugTableSyncEvent#mac}
  */
  readonly mac?: number;
  /**
  * ND6 Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#nd6 DebugTableSyncEvent#nd6}
  */
  readonly nd6?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#uuid DebugTableSyncEvent#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event thunder_debug_table_sync_event}
*/
export class DebugTableSyncEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_table_sync_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugTableSyncEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugTableSyncEvent to import
  * @param importFromId The id of the existing DebugTableSyncEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugTableSyncEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_table_sync_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_table_sync_event thunder_debug_table_sync_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugTableSyncEventConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugTableSyncEventConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_table_sync_event',
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
    this._all = config.all;
    this._arp = config.arp;
    this._fibv4 = config.fibv4;
    this._fibv6 = config.fibv6;
    this._id = config.id;
    this._mac = config.mac;
    this._nd6 = config.nd6;
    this._uuid = config.uuid;
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

  // arp - computed: false, optional: true, required: false
  private _arp?: number; 
  public get arp() {
    return this.getNumberAttribute('arp');
  }
  public set arp(value: number) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // fibv4 - computed: false, optional: true, required: false
  private _fibv4?: number; 
  public get fibv4() {
    return this.getNumberAttribute('fibv4');
  }
  public set fibv4(value: number) {
    this._fibv4 = value;
  }
  public resetFibv4() {
    this._fibv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fibv4Input() {
    return this._fibv4;
  }

  // fibv6 - computed: false, optional: true, required: false
  private _fibv6?: number; 
  public get fibv6() {
    return this.getNumberAttribute('fibv6');
  }
  public set fibv6(value: number) {
    this._fibv6 = value;
  }
  public resetFibv6() {
    this._fibv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fibv6Input() {
    return this._fibv6;
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

  // mac - computed: false, optional: true, required: false
  private _mac?: number; 
  public get mac() {
    return this.getNumberAttribute('mac');
  }
  public set mac(value: number) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // nd6 - computed: false, optional: true, required: false
  private _nd6?: number; 
  public get nd6() {
    return this.getNumberAttribute('nd6');
  }
  public set nd6(value: number) {
    this._nd6 = value;
  }
  public resetNd6() {
    this._nd6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6Input() {
    return this._nd6;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      arp: cdktf.numberToTerraform(this._arp),
      fibv4: cdktf.numberToTerraform(this._fibv4),
      fibv6: cdktf.numberToTerraform(this._fibv6),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.numberToTerraform(this._mac),
      nd6: cdktf.numberToTerraform(this._nd6),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      arp: {
        value: cdktf.numberToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fibv4: {
        value: cdktf.numberToHclTerraform(this._fibv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fibv6: {
        value: cdktf.numberToHclTerraform(this._fibv6),
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
      mac: {
        value: cdktf.numberToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nd6: {
        value: cdktf.numberToHclTerraform(this._nd6),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
