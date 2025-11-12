// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth#class_map_name DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth#class_map_name}
  */
  readonly classMapName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth#device DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth#device}
  */
  readonly device?: string;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth#policy_map_name DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth#policy_map_name}
  */
  readonly policyMapName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth nxos_queuing_qos_policy_map_match_class_map_remaining_bandwidth}
*/
export class DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_queuing_qos_policy_map_match_class_map_remaining_bandwidth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth to import
  * @param importFromId The id of the existing DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_queuing_qos_policy_map_match_class_map_remaining_bandwidth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/queuing_qos_policy_map_match_class_map_remaining_bandwidth nxos_queuing_qos_policy_map_match_class_map_remaining_bandwidth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidthConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosQueuingQosPolicyMapMatchClassMapRemainingBandwidthConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_queuing_qos_policy_map_match_class_map_remaining_bandwidth',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_map_name: cdktf.stringToTerraform(this._classMapName),
      device: cdktf.stringToTerraform(this._device),
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
