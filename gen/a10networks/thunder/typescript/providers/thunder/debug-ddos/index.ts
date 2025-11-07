// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugDdosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Debug DDOS Control Var
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#control_var DebugDdos#control_var}
  */
  readonly controlVar?: number;
  /**
  * Debug DDOS DNS Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#dns_cache DebugDdos#dns_cache}
  */
  readonly dnsCache?: number;
  /**
  * Debug DDOS event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#event DebugDdos#event}
  */
  readonly event?: number;
  /**
  * Set debug DDOS event filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#event_filter DebugDdos#event_filter}
  */
  readonly eventFilter?: string;
  /**
  * Debug flow samples based DDOS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#flow_based_detection DebugDdos#flow_based_detection}
  */
  readonly flowBasedDetection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#id DebugDdos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Debug level (Level 1-4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#level DebugDdos#level}
  */
  readonly level?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#uuid DebugDdos#uuid}
  */
  readonly uuid?: string;
  /**
  * Debug DDOS zbar event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#zbar DebugDdos#zbar}
  */
  readonly zbar?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos thunder_debug_ddos}
*/
export class DebugDdos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ddos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugDdos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugDdos to import
  * @param importFromId The id of the existing DebugDdos that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugDdos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ddos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ddos thunder_debug_ddos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugDdosConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugDdosConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ddos',
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
    this._controlVar = config.controlVar;
    this._dnsCache = config.dnsCache;
    this._event = config.event;
    this._eventFilter = config.eventFilter;
    this._flowBasedDetection = config.flowBasedDetection;
    this._id = config.id;
    this._level = config.level;
    this._uuid = config.uuid;
    this._zbar = config.zbar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_var - computed: false, optional: true, required: false
  private _controlVar?: number; 
  public get controlVar() {
    return this.getNumberAttribute('control_var');
  }
  public set controlVar(value: number) {
    this._controlVar = value;
  }
  public resetControlVar() {
    this._controlVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlVarInput() {
    return this._controlVar;
  }

  // dns_cache - computed: false, optional: true, required: false
  private _dnsCache?: number; 
  public get dnsCache() {
    return this.getNumberAttribute('dns_cache');
  }
  public set dnsCache(value: number) {
    this._dnsCache = value;
  }
  public resetDnsCache() {
    this._dnsCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheInput() {
    return this._dnsCache;
  }

  // event - computed: false, optional: true, required: false
  private _event?: number; 
  public get event() {
    return this.getNumberAttribute('event');
  }
  public set event(value: number) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // event_filter - computed: false, optional: true, required: false
  private _eventFilter?: string; 
  public get eventFilter() {
    return this.getStringAttribute('event_filter');
  }
  public set eventFilter(value: string) {
    this._eventFilter = value;
  }
  public resetEventFilter() {
    this._eventFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter;
  }

  // flow_based_detection - computed: false, optional: true, required: false
  private _flowBasedDetection?: number; 
  public get flowBasedDetection() {
    return this.getNumberAttribute('flow_based_detection');
  }
  public set flowBasedDetection(value: number) {
    this._flowBasedDetection = value;
  }
  public resetFlowBasedDetection() {
    this._flowBasedDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowBasedDetectionInput() {
    return this._flowBasedDetection;
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

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // zbar - computed: false, optional: true, required: false
  private _zbar?: number; 
  public get zbar() {
    return this.getNumberAttribute('zbar');
  }
  public set zbar(value: number) {
    this._zbar = value;
  }
  public resetZbar() {
    this._zbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zbarInput() {
    return this._zbar;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_var: cdktf.numberToTerraform(this._controlVar),
      dns_cache: cdktf.numberToTerraform(this._dnsCache),
      event: cdktf.numberToTerraform(this._event),
      event_filter: cdktf.stringToTerraform(this._eventFilter),
      flow_based_detection: cdktf.numberToTerraform(this._flowBasedDetection),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.numberToTerraform(this._level),
      uuid: cdktf.stringToTerraform(this._uuid),
      zbar: cdktf.numberToTerraform(this._zbar),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_var: {
        value: cdktf.numberToHclTerraform(this._controlVar),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_cache: {
        value: cdktf.numberToHclTerraform(this._dnsCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event: {
        value: cdktf.numberToHclTerraform(this._event),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      event_filter: {
        value: cdktf.stringToHclTerraform(this._eventFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_based_detection: {
        value: cdktf.numberToHclTerraform(this._flowBasedDetection),
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
      level: {
        value: cdktf.numberToHclTerraform(this._level),
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
      zbar: {
        value: cdktf.numberToHclTerraform(this._zbar),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
