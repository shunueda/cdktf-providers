// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosDefaultQosPolicyMapMatchClassMapPoliceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police#class_map_name DataNxosDefaultQosPolicyMapMatchClassMapPolice#class_map_name}
  */
  readonly classMapName: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police#device DataNxosDefaultQosPolicyMapMatchClassMapPolice#device}
  */
  readonly device?: string;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police#policy_map_name DataNxosDefaultQosPolicyMapMatchClassMapPolice#policy_map_name}
  */
  readonly policyMapName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police nxos_default_qos_policy_map_match_class_map_police}
*/
export class DataNxosDefaultQosPolicyMapMatchClassMapPolice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_default_qos_policy_map_match_class_map_police";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosDefaultQosPolicyMapMatchClassMapPolice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosDefaultQosPolicyMapMatchClassMapPolice to import
  * @param importFromId The id of the existing DataNxosDefaultQosPolicyMapMatchClassMapPolice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosDefaultQosPolicyMapMatchClassMapPolice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_default_qos_policy_map_match_class_map_police", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/default_qos_policy_map_match_class_map_police nxos_default_qos_policy_map_match_class_map_police} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosDefaultQosPolicyMapMatchClassMapPoliceConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosDefaultQosPolicyMapMatchClassMapPoliceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_default_qos_policy_map_match_class_map_police',
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

  // bc_rate - computed: true, optional: false, required: false
  public get bcRate() {
    return this.getNumberAttribute('bc_rate');
  }

  // bc_unit - computed: true, optional: false, required: false
  public get bcUnit() {
    return this.getStringAttribute('bc_unit');
  }

  // be_rate - computed: true, optional: false, required: false
  public get beRate() {
    return this.getNumberAttribute('be_rate');
  }

  // be_unit - computed: true, optional: false, required: false
  public get beUnit() {
    return this.getStringAttribute('be_unit');
  }

  // cir_rate - computed: true, optional: false, required: false
  public get cirRate() {
    return this.getNumberAttribute('cir_rate');
  }

  // cir_unit - computed: true, optional: false, required: false
  public get cirUnit() {
    return this.getStringAttribute('cir_unit');
  }

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

  // conform_action - computed: true, optional: false, required: false
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }

  // conform_set_cos - computed: true, optional: false, required: false
  public get conformSetCos() {
    return this.getNumberAttribute('conform_set_cos');
  }

  // conform_set_dscp - computed: true, optional: false, required: false
  public get conformSetDscp() {
    return this.getNumberAttribute('conform_set_dscp');
  }

  // conform_set_precedence - computed: true, optional: false, required: false
  public get conformSetPrecedence() {
    return this.getStringAttribute('conform_set_precedence');
  }

  // conform_set_qos_group - computed: true, optional: false, required: false
  public get conformSetQosGroup() {
    return this.getNumberAttribute('conform_set_qos_group');
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

  // exceed_action - computed: true, optional: false, required: false
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }

  // exceed_set_cos - computed: true, optional: false, required: false
  public get exceedSetCos() {
    return this.getNumberAttribute('exceed_set_cos');
  }

  // exceed_set_dscp - computed: true, optional: false, required: false
  public get exceedSetDscp() {
    return this.getNumberAttribute('exceed_set_dscp');
  }

  // exceed_set_precedence - computed: true, optional: false, required: false
  public get exceedSetPrecedence() {
    return this.getStringAttribute('exceed_set_precedence');
  }

  // exceed_set_qos_group - computed: true, optional: false, required: false
  public get exceedSetQosGroup() {
    return this.getNumberAttribute('exceed_set_qos_group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pir_rate - computed: true, optional: false, required: false
  public get pirRate() {
    return this.getNumberAttribute('pir_rate');
  }

  // pir_unit - computed: true, optional: false, required: false
  public get pirUnit() {
    return this.getStringAttribute('pir_unit');
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

  // violate_action - computed: true, optional: false, required: false
  public get violateAction() {
    return this.getStringAttribute('violate_action');
  }

  // violate_set_cos - computed: true, optional: false, required: false
  public get violateSetCos() {
    return this.getNumberAttribute('violate_set_cos');
  }

  // violate_set_dscp - computed: true, optional: false, required: false
  public get violateSetDscp() {
    return this.getNumberAttribute('violate_set_dscp');
  }

  // violate_set_precedence - computed: true, optional: false, required: false
  public get violateSetPrecedence() {
    return this.getStringAttribute('violate_set_precedence');
  }

  // violate_set_qos_group - computed: true, optional: false, required: false
  public get violateSetQosGroup() {
    return this.getNumberAttribute('violate_set_qos_group');
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
