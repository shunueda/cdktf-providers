// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultQosPolicyMapMatchClassMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map#device DefaultQosPolicyMapMatchClassMap#device}
  */
  readonly device?: string;
  /**
  * Class map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map#name DefaultQosPolicyMapMatchClassMap#name}
  */
  readonly name: string;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map#policy_map_name DefaultQosPolicyMapMatchClassMap#policy_map_name}
  */
  readonly policyMapName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map nxos_default_qos_policy_map_match_class_map}
*/
export class DefaultQosPolicyMapMatchClassMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_default_qos_policy_map_match_class_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultQosPolicyMapMatchClassMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultQosPolicyMapMatchClassMap to import
  * @param importFromId The id of the existing DefaultQosPolicyMapMatchClassMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultQosPolicyMapMatchClassMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_default_qos_policy_map_match_class_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map nxos_default_qos_policy_map_match_class_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultQosPolicyMapMatchClassMapConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultQosPolicyMapMatchClassMapConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_default_qos_policy_map_match_class_map',
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
    this._device = config.device;
    this._name = config.name;
    this._policyMapName = config.policyMapName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      policy_map_name: cdktf.stringToTerraform(this._policyMapName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
