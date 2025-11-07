// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicerPolicyObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Burst in bytes
  *   - Range: `15000`-`10000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object#burst PolicerPolicyObject#burst}
  */
  readonly burst: number;
  /**
  * Exceed action
  *   - Choices: `drop`, `remark`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object#exceed_action PolicerPolicyObject#exceed_action}
  */
  readonly exceedAction: string;
  /**
  * The name of the policy object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object#name PolicerPolicyObject#name}
  */
  readonly name: string;
  /**
  * Rate in bps
  *   - Range: `8`-`100000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object#rate PolicerPolicyObject#rate}
  */
  readonly rate: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object sdwan_policer_policy_object}
*/
export class PolicerPolicyObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policer_policy_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicerPolicyObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicerPolicyObject to import
  * @param importFromId The id of the existing PolicerPolicyObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicerPolicyObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policer_policy_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policer_policy_object sdwan_policer_policy_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicerPolicyObjectConfig
  */
  public constructor(scope: Construct, id: string, config: PolicerPolicyObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policer_policy_object',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._burst = config.burst;
    this._exceedAction = config.exceedAction;
    this._name = config.name;
    this._rate = config.rate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // burst - computed: false, optional: false, required: true
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // exceed_action - computed: false, optional: false, required: true
  private _exceedAction?: string; 
  public get exceedAction() {
    return this.getStringAttribute('exceed_action');
  }
  public set exceedAction(value: string) {
    this._exceedAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionInput() {
    return this._exceedAction;
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

  // rate - computed: false, optional: false, required: true
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      burst: cdktf.numberToTerraform(this._burst),
      exceed_action: cdktf.stringToTerraform(this._exceedAction),
      name: cdktf.stringToTerraform(this._name),
      rate: cdktf.numberToTerraform(this._rate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      burst: {
        value: cdktf.numberToHclTerraform(this._burst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceed_action: {
        value: cdktf.stringToHclTerraform(this._exceedAction),
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
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
