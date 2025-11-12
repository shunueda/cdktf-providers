// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchaclPolicerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#description SwitchaclPolicer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#fswid SwitchaclPolicer#fswid}
  */
  readonly fswid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#guaranteed_bandwidth SwitchaclPolicer#guaranteed_bandwidth}
  */
  readonly guaranteedBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#guaranteed_burst SwitchaclPolicer#guaranteed_burst}
  */
  readonly guaranteedBurst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#id SwitchaclPolicer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#maximum_burst SwitchaclPolicer#maximum_burst}
  */
  readonly maximumBurst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#type SwitchaclPolicer#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer fortiswitch_switchacl_policer}
*/
export class SwitchaclPolicer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchacl_policer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchaclPolicer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchaclPolicer to import
  * @param importFromId The id of the existing SwitchaclPolicer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchaclPolicer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchacl_policer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_policer fortiswitch_switchacl_policer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchaclPolicerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchaclPolicerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchacl_policer',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fswid = config.fswid;
    this._guaranteedBandwidth = config.guaranteedBandwidth;
    this._guaranteedBurst = config.guaranteedBurst;
    this._id = config.id;
    this._maximumBurst = config.maximumBurst;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fswid - computed: true, optional: true, required: false
  private _fswid?: number; 
  public get fswid() {
    return this.getNumberAttribute('fswid');
  }
  public set fswid(value: number) {
    this._fswid = value;
  }
  public resetFswid() {
    this._fswid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
  }

  // guaranteed_bandwidth - computed: true, optional: true, required: false
  private _guaranteedBandwidth?: number; 
  public get guaranteedBandwidth() {
    return this.getNumberAttribute('guaranteed_bandwidth');
  }
  public set guaranteedBandwidth(value: number) {
    this._guaranteedBandwidth = value;
  }
  public resetGuaranteedBandwidth() {
    this._guaranteedBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBandwidthInput() {
    return this._guaranteedBandwidth;
  }

  // guaranteed_burst - computed: true, optional: true, required: false
  private _guaranteedBurst?: number; 
  public get guaranteedBurst() {
    return this.getNumberAttribute('guaranteed_burst');
  }
  public set guaranteedBurst(value: number) {
    this._guaranteedBurst = value;
  }
  public resetGuaranteedBurst() {
    this._guaranteedBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guaranteedBurstInput() {
    return this._guaranteedBurst;
  }

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

  // maximum_burst - computed: true, optional: true, required: false
  private _maximumBurst?: number; 
  public get maximumBurst() {
    return this.getNumberAttribute('maximum_burst');
  }
  public set maximumBurst(value: number) {
    this._maximumBurst = value;
  }
  public resetMaximumBurst() {
    this._maximumBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBurstInput() {
    return this._maximumBurst;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fswid: cdktf.numberToTerraform(this._fswid),
      guaranteed_bandwidth: cdktf.numberToTerraform(this._guaranteedBandwidth),
      guaranteed_burst: cdktf.numberToTerraform(this._guaranteedBurst),
      id: cdktf.stringToTerraform(this._id),
      maximum_burst: cdktf.numberToTerraform(this._maximumBurst),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fswid: {
        value: cdktf.numberToHclTerraform(this._fswid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_bandwidth: {
        value: cdktf.numberToHclTerraform(this._guaranteedBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guaranteed_burst: {
        value: cdktf.numberToHclTerraform(this._guaranteedBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_burst: {
        value: cdktf.numberToHclTerraform(this._maximumBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
