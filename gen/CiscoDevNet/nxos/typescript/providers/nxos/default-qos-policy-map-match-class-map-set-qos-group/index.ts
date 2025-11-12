// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultQosPolicyMapMatchClassMapSetQosGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group#class_map_name DefaultQosPolicyMapMatchClassMapSetQosGroup#class_map_name}
  */
  readonly classMapName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group#device DefaultQosPolicyMapMatchClassMapSetQosGroup#device}
  */
  readonly device?: string;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group#policy_map_name DefaultQosPolicyMapMatchClassMapSetQosGroup#policy_map_name}
  */
  readonly policyMapName: string;
  /**
  * QoS group ID.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group#qos_group_id DefaultQosPolicyMapMatchClassMapSetQosGroup#qos_group_id}
  */
  readonly qosGroupId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group nxos_default_qos_policy_map_match_class_map_set_qos_group}
*/
export class DefaultQosPolicyMapMatchClassMapSetQosGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_default_qos_policy_map_match_class_map_set_qos_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultQosPolicyMapMatchClassMapSetQosGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultQosPolicyMapMatchClassMapSetQosGroup to import
  * @param importFromId The id of the existing DefaultQosPolicyMapMatchClassMapSetQosGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultQosPolicyMapMatchClassMapSetQosGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_default_qos_policy_map_match_class_map_set_qos_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_set_qos_group nxos_default_qos_policy_map_match_class_map_set_qos_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultQosPolicyMapMatchClassMapSetQosGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultQosPolicyMapMatchClassMapSetQosGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_default_qos_policy_map_match_class_map_set_qos_group',
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
    this._qosGroupId = config.qosGroupId;
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

  // qos_group_id - computed: true, optional: true, required: false
  private _qosGroupId?: number; 
  public get qosGroupId() {
    return this.getNumberAttribute('qos_group_id');
  }
  public set qosGroupId(value: number) {
    this._qosGroupId = value;
  }
  public resetQosGroupId() {
    this._qosGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosGroupIdInput() {
    return this._qosGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_map_name: cdktf.stringToTerraform(this._classMapName),
      device: cdktf.stringToTerraform(this._device),
      policy_map_name: cdktf.stringToTerraform(this._policyMapName),
      qos_group_id: cdktf.numberToTerraform(this._qosGroupId),
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
      qos_group_id: {
        value: cdktf.numberToHclTerraform(this._qosGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
