// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultQosPolicyMapMatchClassMapPoliceConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIR burst rate.
  *   - Range: `0`-`536870912`
  *   - Default value: `200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#bc_rate DefaultQosPolicyMapMatchClassMapPolice#bc_rate}
  */
  readonly bcRate?: number;
  /**
  * CIR burst rate unit.
  *   - Choices: `unspecified`, `bytes`, `kbytes`, `mbytes`, `ms`, `us`, `packets`
  *   - Default value: `ms`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#bc_unit DefaultQosPolicyMapMatchClassMapPolice#bc_unit}
  */
  readonly bcUnit?: string;
  /**
  * PIR burst rate.
  *   - Range: `0`-`536870912`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#be_rate DefaultQosPolicyMapMatchClassMapPolice#be_rate}
  */
  readonly beRate?: number;
  /**
  * PIR burst rate unit.
  *   - Choices: `unspecified`, `bytes`, `kbytes`, `mbytes`, `ms`, `us`, `packets`
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#be_unit DefaultQosPolicyMapMatchClassMapPolice#be_unit}
  */
  readonly beUnit?: string;
  /**
  * CIR rate.
  *   - Range: `0`-`100000000000`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#cir_rate DefaultQosPolicyMapMatchClassMapPolice#cir_rate}
  */
  readonly cirRate: number;
  /**
  * CIR rate unit.
  *   - Choices: `unspecified`, `bps`, `kbps`, `mbps`, `gbps`, `pps`, `pct`
  *   - Default value: `bps`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#cir_unit DefaultQosPolicyMapMatchClassMapPolice#cir_unit}
  */
  readonly cirUnit?: string;
  /**
  * Class map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#class_map_name DefaultQosPolicyMapMatchClassMapPolice#class_map_name}
  */
  readonly classMapName: string;
  /**
  * Conform action.
  *   - Choices: `unspecified`, `transmit`, `drop`, `set-cos-transmit`, `set-dscp-transmit`, `set-prec-transmit`, `set-qos-transmit`
  *   - Default value: `transmit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#conform_action DefaultQosPolicyMapMatchClassMapPolice#conform_action}
  */
  readonly conformAction?: string;
  /**
  * Set CoS for conforming traffic.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#conform_set_cos DefaultQosPolicyMapMatchClassMapPolice#conform_set_cos}
  */
  readonly conformSetCos?: number;
  /**
  * Set DSCP for conforming traffic.
  *   - Range: `0`-`63`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#conform_set_dscp DefaultQosPolicyMapMatchClassMapPolice#conform_set_dscp}
  */
  readonly conformSetDscp?: number;
  /**
  * Set precedence for conforming traffic.
  *   - Choices: `routine`, `priority`, `immediate`, `flash`, `flash-override`, `critical`, `internet`, `network`
  *   - Default value: `routine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#conform_set_precedence DefaultQosPolicyMapMatchClassMapPolice#conform_set_precedence}
  */
  readonly conformSetPrecedence?: string;
  /**
  * Set qos-group for conforming traffic.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#conform_set_qos_group DefaultQosPolicyMapMatchClassMapPolice#conform_set_qos_group}
  */
  readonly conformSetQosGroup?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#device DefaultQosPolicyMapMatchClassMapPolice#device}
  */
  readonly device?: string;
  /**
  * Exceed action.
  *   - Choices: `unspecified`, `transmit`, `drop`, `set-cos-transmit`, `set-dscp-transmit`, `set-prec-transmit`, `set-qos-transmit`
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#exceed_action DefaultQosPolicyMapMatchClassMapPolice#exceed_action}
  */
  readonly exceedAction?: string;
  /**
  * Set CoS for exceeding traffic.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#exceed_set_cos DefaultQosPolicyMapMatchClassMapPolice#exceed_set_cos}
  */
  readonly exceedSetCos?: number;
  /**
  * Set DSCP for exceeding traffic.
  *   - Range: `0`-`63`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#exceed_set_dscp DefaultQosPolicyMapMatchClassMapPolice#exceed_set_dscp}
  */
  readonly exceedSetDscp?: number;
  /**
  * Set precedence for exceeding traffic.
  *   - Choices: `routine`, `priority`, `immediate`, `flash`, `flash-override`, `critical`, `internet`, `network`
  *   - Default value: `routine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#exceed_set_precedence DefaultQosPolicyMapMatchClassMapPolice#exceed_set_precedence}
  */
  readonly exceedSetPrecedence?: string;
  /**
  * Set qos-group for exceeding traffic.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#exceed_set_qos_group DefaultQosPolicyMapMatchClassMapPolice#exceed_set_qos_group}
  */
  readonly exceedSetQosGroup?: number;
  /**
  * PIR rate.
  *   - Range: `0`-`100000000000`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#pir_rate DefaultQosPolicyMapMatchClassMapPolice#pir_rate}
  */
  readonly pirRate?: number;
  /**
  * PIR rate unit.
  *   - Choices: `unspecified`, `bps`, `kbps`, `mbps`, `gbps`, `pps`, `pct`
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#pir_unit DefaultQosPolicyMapMatchClassMapPolice#pir_unit}
  */
  readonly pirUnit?: string;
  /**
  * Policy map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#policy_map_name DefaultQosPolicyMapMatchClassMapPolice#policy_map_name}
  */
  readonly policyMapName: string;
  /**
  * Violate action.
  *   - Choices: `unspecified`, `transmit`, `drop`, `set-cos-transmit`, `set-dscp-transmit`, `set-prec-transmit`, `set-qos-transmit`
  *   - Default value: `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#violate_action DefaultQosPolicyMapMatchClassMapPolice#violate_action}
  */
  readonly violateAction?: string;
  /**
  * Set CoS for violating traffic.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#violate_set_cos DefaultQosPolicyMapMatchClassMapPolice#violate_set_cos}
  */
  readonly violateSetCos?: number;
  /**
  * Set DSCP for violating traffic.
  *   - Range: `0`-`63`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#violate_set_dscp DefaultQosPolicyMapMatchClassMapPolice#violate_set_dscp}
  */
  readonly violateSetDscp?: number;
  /**
  * Set precedence for violating traffic.
  *   - Choices: `routine`, `priority`, `immediate`, `flash`, `flash-override`, `critical`, `internet`, `network`
  *   - Default value: `routine`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#violate_set_precedence DefaultQosPolicyMapMatchClassMapPolice#violate_set_precedence}
  */
  readonly violateSetPrecedence?: string;
  /**
  * Set qos-group for violating traffic.
  *   - Range: `0`-`7`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#violate_set_qos_group DefaultQosPolicyMapMatchClassMapPolice#violate_set_qos_group}
  */
  readonly violateSetQosGroup?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police nxos_default_qos_policy_map_match_class_map_police}
*/
export class DefaultQosPolicyMapMatchClassMapPolice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_default_qos_policy_map_match_class_map_police";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultQosPolicyMapMatchClassMapPolice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultQosPolicyMapMatchClassMapPolice to import
  * @param importFromId The id of the existing DefaultQosPolicyMapMatchClassMapPolice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultQosPolicyMapMatchClassMapPolice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_default_qos_policy_map_match_class_map_police", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/default_qos_policy_map_match_class_map_police nxos_default_qos_policy_map_match_class_map_police} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultQosPolicyMapMatchClassMapPoliceConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultQosPolicyMapMatchClassMapPoliceConfig) {
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
    this._bcRate = config.bcRate;
    this._bcUnit = config.bcUnit;
    this._beRate = config.beRate;
    this._beUnit = config.beUnit;
    this._cirRate = config.cirRate;
    this._cirUnit = config.cirUnit;
    this._classMapName = config.classMapName;
    this._conformAction = config.conformAction;
    this._conformSetCos = config.conformSetCos;
    this._conformSetDscp = config.conformSetDscp;
    this._conformSetPrecedence = config.conformSetPrecedence;
    this._conformSetQosGroup = config.conformSetQosGroup;
    this._device = config.device;
    this._exceedAction = config.exceedAction;
    this._exceedSetCos = config.exceedSetCos;
    this._exceedSetDscp = config.exceedSetDscp;
    this._exceedSetPrecedence = config.exceedSetPrecedence;
    this._exceedSetQosGroup = config.exceedSetQosGroup;
    this._pirRate = config.pirRate;
    this._pirUnit = config.pirUnit;
    this._policyMapName = config.policyMapName;
    this._violateAction = config.violateAction;
    this._violateSetCos = config.violateSetCos;
    this._violateSetDscp = config.violateSetDscp;
    this._violateSetPrecedence = config.violateSetPrecedence;
    this._violateSetQosGroup = config.violateSetQosGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bc_rate - computed: true, optional: true, required: false
  private _bcRate?: number; 
  public get bcRate() {
    return this.getNumberAttribute('bc_rate');
  }
  public set bcRate(value: number) {
    this._bcRate = value;
  }
  public resetBcRate() {
    this._bcRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcRateInput() {
    return this._bcRate;
  }

  // bc_unit - computed: true, optional: true, required: false
  private _bcUnit?: string; 
  public get bcUnit() {
    return this.getStringAttribute('bc_unit');
  }
  public set bcUnit(value: string) {
    this._bcUnit = value;
  }
  public resetBcUnit() {
    this._bcUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcUnitInput() {
    return this._bcUnit;
  }

  // be_rate - computed: true, optional: true, required: false
  private _beRate?: number; 
  public get beRate() {
    return this.getNumberAttribute('be_rate');
  }
  public set beRate(value: number) {
    this._beRate = value;
  }
  public resetBeRate() {
    this._beRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beRateInput() {
    return this._beRate;
  }

  // be_unit - computed: true, optional: true, required: false
  private _beUnit?: string; 
  public get beUnit() {
    return this.getStringAttribute('be_unit');
  }
  public set beUnit(value: string) {
    this._beUnit = value;
  }
  public resetBeUnit() {
    this._beUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beUnitInput() {
    return this._beUnit;
  }

  // cir_rate - computed: false, optional: false, required: true
  private _cirRate?: number; 
  public get cirRate() {
    return this.getNumberAttribute('cir_rate');
  }
  public set cirRate(value: number) {
    this._cirRate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cirRateInput() {
    return this._cirRate;
  }

  // cir_unit - computed: true, optional: true, required: false
  private _cirUnit?: string; 
  public get cirUnit() {
    return this.getStringAttribute('cir_unit');
  }
  public set cirUnit(value: string) {
    this._cirUnit = value;
  }
  public resetCirUnit() {
    this._cirUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cirUnitInput() {
    return this._cirUnit;
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

  // conform_action - computed: true, optional: true, required: false
  private _conformAction?: string; 
  public get conformAction() {
    return this.getStringAttribute('conform_action');
  }
  public set conformAction(value: string) {
    this._conformAction = value;
  }
  public resetConformAction() {
    this._conformAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformActionInput() {
    return this._conformAction;
  }

  // conform_set_cos - computed: true, optional: true, required: false
  private _conformSetCos?: number; 
  public get conformSetCos() {
    return this.getNumberAttribute('conform_set_cos');
  }
  public set conformSetCos(value: number) {
    this._conformSetCos = value;
  }
  public resetConformSetCos() {
    this._conformSetCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformSetCosInput() {
    return this._conformSetCos;
  }

  // conform_set_dscp - computed: true, optional: true, required: false
  private _conformSetDscp?: number; 
  public get conformSetDscp() {
    return this.getNumberAttribute('conform_set_dscp');
  }
  public set conformSetDscp(value: number) {
    this._conformSetDscp = value;
  }
  public resetConformSetDscp() {
    this._conformSetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformSetDscpInput() {
    return this._conformSetDscp;
  }

  // conform_set_precedence - computed: true, optional: true, required: false
  private _conformSetPrecedence?: string; 
  public get conformSetPrecedence() {
    return this.getStringAttribute('conform_set_precedence');
  }
  public set conformSetPrecedence(value: string) {
    this._conformSetPrecedence = value;
  }
  public resetConformSetPrecedence() {
    this._conformSetPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformSetPrecedenceInput() {
    return this._conformSetPrecedence;
  }

  // conform_set_qos_group - computed: true, optional: true, required: false
  private _conformSetQosGroup?: number; 
  public get conformSetQosGroup() {
    return this.getNumberAttribute('conform_set_qos_group');
  }
  public set conformSetQosGroup(value: number) {
    this._conformSetQosGroup = value;
  }
  public resetConformSetQosGroup() {
    this._conformSetQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conformSetQosGroupInput() {
    return this._conformSetQosGroup;
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

  // exceed_action - computed: true, optional: true, required: false
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  public resetExceedAction() {
    this._exceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
  }

  // exceed_set_cos - computed: true, optional: true, required: false
  private _exceedSetCos?: number; 
  public get exceedSetCos() {
    return this.getNumberAttribute('exceed_set_cos');
  }
  public set exceedSetCos(value: number) {
    this._exceedSetCos = value;
  }
  public resetExceedSetCos() {
    this._exceedSetCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedSetCosInput() {
    return this._exceedSetCos;
  }

  // exceed_set_dscp - computed: true, optional: true, required: false
  private _exceedSetDscp?: number; 
  public get exceedSetDscp() {
    return this.getNumberAttribute('exceed_set_dscp');
  }
  public set exceedSetDscp(value: number) {
    this._exceedSetDscp = value;
  }
  public resetExceedSetDscp() {
    this._exceedSetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedSetDscpInput() {
    return this._exceedSetDscp;
  }

  // exceed_set_precedence - computed: true, optional: true, required: false
  private _exceedSetPrecedence?: string; 
  public get exceedSetPrecedence() {
    return this.getStringAttribute('exceed_set_precedence');
  }
  public set exceedSetPrecedence(value: string) {
    this._exceedSetPrecedence = value;
  }
  public resetExceedSetPrecedence() {
    this._exceedSetPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedSetPrecedenceInput() {
    return this._exceedSetPrecedence;
  }

  // exceed_set_qos_group - computed: true, optional: true, required: false
  private _exceedSetQosGroup?: number; 
  public get exceedSetQosGroup() {
    return this.getNumberAttribute('exceed_set_qos_group');
  }
  public set exceedSetQosGroup(value: number) {
    this._exceedSetQosGroup = value;
  }
  public resetExceedSetQosGroup() {
    this._exceedSetQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedSetQosGroupInput() {
    return this._exceedSetQosGroup;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pir_rate - computed: true, optional: true, required: false
  private _pirRate?: number; 
  public get pirRate() {
    return this.getNumberAttribute('pir_rate');
  }
  public set pirRate(value: number) {
    this._pirRate = value;
  }
  public resetPirRate() {
    this._pirRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pirRateInput() {
    return this._pirRate;
  }

  // pir_unit - computed: true, optional: true, required: false
  private _pirUnit?: string; 
  public get pirUnit() {
    return this.getStringAttribute('pir_unit');
  }
  public set pirUnit(value: string) {
    this._pirUnit = value;
  }
  public resetPirUnit() {
    this._pirUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pirUnitInput() {
    return this._pirUnit;
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

  // violate_action - computed: true, optional: true, required: false
  private _violateAction?: string; 
  public get violateAction() {
    return this.getStringAttribute('violate_action');
  }
  public set violateAction(value: string) {
    this._violateAction = value;
  }
  public resetViolateAction() {
    this._violateAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateActionInput() {
    return this._violateAction;
  }

  // violate_set_cos - computed: true, optional: true, required: false
  private _violateSetCos?: number; 
  public get violateSetCos() {
    return this.getNumberAttribute('violate_set_cos');
  }
  public set violateSetCos(value: number) {
    this._violateSetCos = value;
  }
  public resetViolateSetCos() {
    this._violateSetCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateSetCosInput() {
    return this._violateSetCos;
  }

  // violate_set_dscp - computed: true, optional: true, required: false
  private _violateSetDscp?: number; 
  public get violateSetDscp() {
    return this.getNumberAttribute('violate_set_dscp');
  }
  public set violateSetDscp(value: number) {
    this._violateSetDscp = value;
  }
  public resetViolateSetDscp() {
    this._violateSetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateSetDscpInput() {
    return this._violateSetDscp;
  }

  // violate_set_precedence - computed: true, optional: true, required: false
  private _violateSetPrecedence?: string; 
  public get violateSetPrecedence() {
    return this.getStringAttribute('violate_set_precedence');
  }
  public set violateSetPrecedence(value: string) {
    this._violateSetPrecedence = value;
  }
  public resetViolateSetPrecedence() {
    this._violateSetPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateSetPrecedenceInput() {
    return this._violateSetPrecedence;
  }

  // violate_set_qos_group - computed: true, optional: true, required: false
  private _violateSetQosGroup?: number; 
  public get violateSetQosGroup() {
    return this.getNumberAttribute('violate_set_qos_group');
  }
  public set violateSetQosGroup(value: number) {
    this._violateSetQosGroup = value;
  }
  public resetViolateSetQosGroup() {
    this._violateSetQosGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violateSetQosGroupInput() {
    return this._violateSetQosGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bc_rate: cdktf.numberToTerraform(this._bcRate),
      bc_unit: cdktf.stringToTerraform(this._bcUnit),
      be_rate: cdktf.numberToTerraform(this._beRate),
      be_unit: cdktf.stringToTerraform(this._beUnit),
      cir_rate: cdktf.numberToTerraform(this._cirRate),
      cir_unit: cdktf.stringToTerraform(this._cirUnit),
      class_map_name: cdktf.stringToTerraform(this._classMapName),
      conform_action: cdktf.stringToTerraform(this._conformAction),
      conform_set_cos: cdktf.numberToTerraform(this._conformSetCos),
      conform_set_dscp: cdktf.numberToTerraform(this._conformSetDscp),
      conform_set_precedence: cdktf.stringToTerraform(this._conformSetPrecedence),
      conform_set_qos_group: cdktf.numberToTerraform(this._conformSetQosGroup),
      device: cdktf.stringToTerraform(this._device),
      exceed_action: cdktf.stringToTerraform(this._exceedAction),
      exceed_set_cos: cdktf.numberToTerraform(this._exceedSetCos),
      exceed_set_dscp: cdktf.numberToTerraform(this._exceedSetDscp),
      exceed_set_precedence: cdktf.stringToTerraform(this._exceedSetPrecedence),
      exceed_set_qos_group: cdktf.numberToTerraform(this._exceedSetQosGroup),
      pir_rate: cdktf.numberToTerraform(this._pirRate),
      pir_unit: cdktf.stringToTerraform(this._pirUnit),
      policy_map_name: cdktf.stringToTerraform(this._policyMapName),
      violate_action: cdktf.stringToTerraform(this._violateAction),
      violate_set_cos: cdktf.numberToTerraform(this._violateSetCos),
      violate_set_dscp: cdktf.numberToTerraform(this._violateSetDscp),
      violate_set_precedence: cdktf.stringToTerraform(this._violateSetPrecedence),
      violate_set_qos_group: cdktf.numberToTerraform(this._violateSetQosGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bc_rate: {
        value: cdktf.numberToHclTerraform(this._bcRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bc_unit: {
        value: cdktf.stringToHclTerraform(this._bcUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      be_rate: {
        value: cdktf.numberToHclTerraform(this._beRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      be_unit: {
        value: cdktf.stringToHclTerraform(this._beUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cir_rate: {
        value: cdktf.numberToHclTerraform(this._cirRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cir_unit: {
        value: cdktf.stringToHclTerraform(this._cirUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_map_name: {
        value: cdktf.stringToHclTerraform(this._classMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conform_action: {
        value: cdktf.stringToHclTerraform(this._conformAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conform_set_cos: {
        value: cdktf.numberToHclTerraform(this._conformSetCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conform_set_dscp: {
        value: cdktf.numberToHclTerraform(this._conformSetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conform_set_precedence: {
        value: cdktf.stringToHclTerraform(this._conformSetPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conform_set_qos_group: {
        value: cdktf.numberToHclTerraform(this._conformSetQosGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_action: {
        value: cdktf.stringToHclTerraform(this._exceedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_set_cos: {
        value: cdktf.numberToHclTerraform(this._exceedSetCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceed_set_dscp: {
        value: cdktf.numberToHclTerraform(this._exceedSetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceed_set_precedence: {
        value: cdktf.stringToHclTerraform(this._exceedSetPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceed_set_qos_group: {
        value: cdktf.numberToHclTerraform(this._exceedSetQosGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pir_rate: {
        value: cdktf.numberToHclTerraform(this._pirRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pir_unit: {
        value: cdktf.stringToHclTerraform(this._pirUnit),
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
      violate_action: {
        value: cdktf.stringToHclTerraform(this._violateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violate_set_cos: {
        value: cdktf.numberToHclTerraform(this._violateSetCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      violate_set_dscp: {
        value: cdktf.numberToHclTerraform(this._violateSetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      violate_set_precedence: {
        value: cdktf.stringToHclTerraform(this._violateSetPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violate_set_qos_group: {
        value: cdktf.numberToHclTerraform(this._violateSetQosGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
