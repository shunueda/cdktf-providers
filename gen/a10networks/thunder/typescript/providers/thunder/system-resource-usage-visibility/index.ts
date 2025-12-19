// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceUsageVisibilityAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility#id SystemResourceUsageVisibilityA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total number of monitored entities for visibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility#monitored_entity_count SystemResourceUsageVisibilityA#monitored_entity_count}
  */
  readonly monitoredEntityCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility#uuid SystemResourceUsageVisibilityA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility thunder_system_resource_usage_visibility}
*/
export class SystemResourceUsageVisibilityA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_usage_visibility";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceUsageVisibilityA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceUsageVisibilityA to import
  * @param importFromId The id of the existing SystemResourceUsageVisibilityA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceUsageVisibilityA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_usage_visibility", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_usage_visibility thunder_system_resource_usage_visibility} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceUsageVisibilityAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemResourceUsageVisibilityAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_usage_visibility',
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
    this._id = config.id;
    this._monitoredEntityCount = config.monitoredEntityCount;
    this._uuid = config.uuid;
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

  // monitored_entity_count - computed: false, optional: true, required: false
  private _monitoredEntityCount?: number; 
  public get monitoredEntityCount() {
    return this.getNumberAttribute('monitored_entity_count');
  }
  public set monitoredEntityCount(value: number) {
    this._monitoredEntityCount = value;
  }
  public resetMonitoredEntityCount() {
    this._monitoredEntityCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredEntityCountInput() {
    return this._monitoredEntityCount;
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
      id: cdktf.stringToTerraform(this._id),
      monitored_entity_count: cdktf.numberToTerraform(this._monitoredEntityCount),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      monitored_entity_count: {
        value: cdktf.numberToHclTerraform(this._monitoredEntityCount),
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
