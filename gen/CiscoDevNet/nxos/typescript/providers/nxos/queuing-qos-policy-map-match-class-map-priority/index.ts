// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QueuingQosPolicyMapMatchClassMapPriorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority#class_map_name QueuingQosPolicyMapMatchClassMapPriority#class_map_name}
  */
  readonly classMapName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority#device QueuingQosPolicyMapMatchClassMapPriority#device}
  */
  readonly device?: string;
  /**
  * Priority level.
  *   - Range: `1`-`8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority#level QueuingQosPolicyMapMatchClassMapPriority#level}
  */
  readonly level: number;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority#policy_map_name QueuingQosPolicyMapMatchClassMapPriority#policy_map_name}
  */
  readonly policyMapName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority nxos_queuing_qos_policy_map_match_class_map_priority}
*/
export class QueuingQosPolicyMapMatchClassMapPriority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_queuing_qos_policy_map_match_class_map_priority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QueuingQosPolicyMapMatchClassMapPriority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QueuingQosPolicyMapMatchClassMapPriority to import
  * @param importFromId The id of the existing QueuingQosPolicyMapMatchClassMapPriority that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QueuingQosPolicyMapMatchClassMapPriority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_queuing_qos_policy_map_match_class_map_priority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/queuing_qos_policy_map_match_class_map_priority nxos_queuing_qos_policy_map_match_class_map_priority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QueuingQosPolicyMapMatchClassMapPriorityConfig
  */
  public constructor(scope: Construct, id: string, config: QueuingQosPolicyMapMatchClassMapPriorityConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_queuing_qos_policy_map_match_class_map_priority',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classMapName = config.classMapName;
    this._device = config.device;
    this._level = config.level;
    this._policyMapName = config.policyMapName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_map_name - computed: false, optional: false, required: true
  private _classMapName?: string; 
  public get classMapName() {
    return this.getStringAttribute('class_map_name');
  }
  public set classMapName(value: string) {
    this._classMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapNameInput() {
    return this._classMapName;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: false, optional: false, required: true
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // policy_map_name - computed: false, optional: false, required: true
  private _policyMapName?: string; 
  public get policyMapName() {
    return this.getStringAttribute('policy_map_name');
  }
  public set policyMapName(value: string) {
    this._policyMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMapNameInput() {
    return this._policyMapName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_map_name: cdktf.stringToTerraform(this._classMapName),
      device: cdktf.stringToTerraform(this._device),
      level: cdktf.numberToTerraform(this._level),
      policy_map_name: cdktf.stringToTerraform(this._policyMapName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_map_name: {
        value: cdktf.stringToHclTerraform(this._classMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      policy_map_name: {
        value: cdktf.stringToHclTerraform(this._policyMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
