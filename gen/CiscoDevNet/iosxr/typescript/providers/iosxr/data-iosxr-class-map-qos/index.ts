// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/class_map_qos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrClassMapQosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the class-map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/class_map_qos#class_map_name DataIosxrClassMapQos#class_map_name}
  */
  readonly classMapName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/class_map_qos#device DataIosxrClassMapQos#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/class_map_qos iosxr_class_map_qos}
*/
export class DataIosxrClassMapQos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_class_map_qos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrClassMapQos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrClassMapQos to import
  * @param importFromId The id of the existing DataIosxrClassMapQos that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/class_map_qos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrClassMapQos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_class_map_qos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/class_map_qos iosxr_class_map_qos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrClassMapQosConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrClassMapQosConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_class_map_qos',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // match_any - computed: true, optional: false, required: false
  public get matchAny() {
    return this.getBooleanAttribute('match_any');
  }

  // match_dscp - computed: true, optional: false, required: false
  public get matchDscp() {
    return this.getListAttribute('match_dscp');
  }

  // match_mpls_experimental_topmost - computed: true, optional: false, required: false
  public get matchMplsExperimentalTopmost() {
    return this.getNumberListAttribute('match_mpls_experimental_topmost');
  }

  // match_qos_group - computed: true, optional: false, required: false
  public get matchQosGroup() {
    return this.getListAttribute('match_qos_group');
  }

  // match_traffic_class - computed: true, optional: false, required: false
  public get matchTrafficClass() {
    return this.getListAttribute('match_traffic_class');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_map_name: cdktf.stringToTerraform(this._classMapName),
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
