// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPingSweepDetectionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of scanned ip events (default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#events VisibilityPingSweepDetectionA#events}
  */
  readonly events?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#id VisibilityPingSweepDetectionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Time interval for ip sweep detection (default 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#interval VisibilityPingSweepDetectionA#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#uuid VisibilityPingSweepDetectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * Class list of ipv4 addresses to be whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#v4_list VisibilityPingSweepDetectionA#v4_list}
  */
  readonly v4List?: string;
  /**
  * Class list of ipv6 addresses to be whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#v6_list VisibilityPingSweepDetectionA#v6_list}
  */
  readonly v6List?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection thunder_visibility_ping_sweep_detection}
*/
export class VisibilityPingSweepDetectionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_ping_sweep_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPingSweepDetectionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPingSweepDetectionA to import
  * @param importFromId The id of the existing VisibilityPingSweepDetectionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPingSweepDetectionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_ping_sweep_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_ping_sweep_detection thunder_visibility_ping_sweep_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPingSweepDetectionAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityPingSweepDetectionAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_ping_sweep_detection',
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
    this._events = config.events;
    this._id = config.id;
    this._interval = config.interval;
    this._uuid = config.uuid;
    this._v4List = config.v4List;
    this._v6List = config.v6List;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // events - computed: false, optional: true, required: false
  private _events?: number; 
  public get events() {
    return this.getNumberAttribute('events');
  }
  public set events(value: number) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // v4_list - computed: false, optional: true, required: false
  private _v4List?: string; 
  public get v4List() {
    return this.getStringAttribute('v4_list');
  }
  public set v4List(value: string) {
    this._v4List = value;
  }
  public resetV4List() {
    this._v4List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4ListInput() {
    return this._v4List;
  }

  // v6_list - computed: false, optional: true, required: false
  private _v6List?: string; 
  public get v6List() {
    return this.getStringAttribute('v6_list');
  }
  public set v6List(value: string) {
    this._v6List = value;
  }
  public resetV6List() {
    this._v6List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6ListInput() {
    return this._v6List;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      events: cdktf.numberToTerraform(this._events),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_list: cdktf.stringToTerraform(this._v4List),
      v6_list: cdktf.stringToTerraform(this._v6List),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      events: {
        value: cdktf.numberToHclTerraform(this._events),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
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
      v4_list: {
        value: cdktf.stringToHclTerraform(this._v4List),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_list: {
        value: cdktf.stringToHclTerraform(this._v6List),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
