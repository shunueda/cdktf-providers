// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchaclSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings#density_mode SwitchaclSettings#density_mode}
  */
  readonly densityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings#id SwitchaclSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings#trunk_load_balance SwitchaclSettings#trunk_load_balance}
  */
  readonly trunkLoadBalance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings fortiswitch_switchacl_settings}
*/
export class SwitchaclSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchacl_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchaclSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchaclSettings to import
  * @param importFromId The id of the existing SwitchaclSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchaclSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchacl_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchacl_settings fortiswitch_switchacl_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchaclSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchaclSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchacl_settings',
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
    this._densityMode = config.densityMode;
    this._id = config.id;
    this._trunkLoadBalance = config.trunkLoadBalance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // density_mode - computed: true, optional: true, required: false
  private _densityMode?: string; 
  public get densityMode() {
    return this.getStringAttribute('density_mode');
  }
  public set densityMode(value: string) {
    this._densityMode = value;
  }
  public resetDensityMode() {
    this._densityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get densityModeInput() {
    return this._densityMode;
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

  // trunk_load_balance - computed: true, optional: true, required: false
  private _trunkLoadBalance?: string; 
  public get trunkLoadBalance() {
    return this.getStringAttribute('trunk_load_balance');
  }
  public set trunkLoadBalance(value: string) {
    this._trunkLoadBalance = value;
  }
  public resetTrunkLoadBalance() {
    this._trunkLoadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkLoadBalanceInput() {
    return this._trunkLoadBalance;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      density_mode: cdktf.stringToTerraform(this._densityMode),
      id: cdktf.stringToTerraform(this._id),
      trunk_load_balance: cdktf.stringToTerraform(this._trunkLoadBalance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      density_mode: {
        value: cdktf.stringToHclTerraform(this._densityMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk_load_balance: {
        value: cdktf.stringToHclTerraform(this._trunkLoadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
