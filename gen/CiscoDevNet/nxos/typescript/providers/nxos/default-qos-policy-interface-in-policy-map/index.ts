// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultQosPolicyInterfaceInPolicyMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map#device DefaultQosPolicyInterfaceInPolicyMap#device}
  */
  readonly device?: string;
  /**
  * Must match first field in the output of `show intf brief`. Example: `eth1/1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map#interface_id DefaultQosPolicyInterfaceInPolicyMap#interface_id}
  */
  readonly interfaceId: string;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map#policy_map_name DefaultQosPolicyInterfaceInPolicyMap#policy_map_name}
  */
  readonly policyMapName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map nxos_default_qos_policy_interface_in_policy_map}
*/
export class DefaultQosPolicyInterfaceInPolicyMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_default_qos_policy_interface_in_policy_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultQosPolicyInterfaceInPolicyMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultQosPolicyInterfaceInPolicyMap to import
  * @param importFromId The id of the existing DefaultQosPolicyInterfaceInPolicyMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultQosPolicyInterfaceInPolicyMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_default_qos_policy_interface_in_policy_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_interface_in_policy_map nxos_default_qos_policy_interface_in_policy_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultQosPolicyInterfaceInPolicyMapConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultQosPolicyInterfaceInPolicyMapConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_default_qos_policy_interface_in_policy_map',
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
    this._interfaceId = config.interfaceId;
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

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: string; 
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }
  public set interfaceId(value: string) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
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
      interface_id: cdktf.stringToTerraform(this._interfaceId),
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
      interface_id: {
        value: cdktf.stringToHclTerraform(this._interfaceId),
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
