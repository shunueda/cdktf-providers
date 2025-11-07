// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AprUserRiskResponseStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies a security configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy#config_id AprUserRiskResponseStrategy#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy#id AprUserRiskResponseStrategy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy#user_risk_response_strategy AprUserRiskResponseStrategy#user_risk_response_strategy}
  */
  readonly userRiskResponseStrategy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy akamai_apr_user_risk_response_strategy}
*/
export class AprUserRiskResponseStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_apr_user_risk_response_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AprUserRiskResponseStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AprUserRiskResponseStrategy to import
  * @param importFromId The id of the existing AprUserRiskResponseStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AprUserRiskResponseStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_apr_user_risk_response_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/apr_user_risk_response_strategy akamai_apr_user_risk_response_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AprUserRiskResponseStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: AprUserRiskResponseStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_apr_user_risk_response_strategy',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._id = config.id;
    this._userRiskResponseStrategy = config.userRiskResponseStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // user_risk_response_strategy - computed: false, optional: false, required: true
  private _userRiskResponseStrategy?: string; 
  public get userRiskResponseStrategy() {
    return this.getStringAttribute('user_risk_response_strategy');
  }
  public set userRiskResponseStrategy(value: string) {
    this._userRiskResponseStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRiskResponseStrategyInput() {
    return this._userRiskResponseStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      user_risk_response_strategy: cdktf.stringToTerraform(this._userRiskResponseStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
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
      user_risk_response_strategy: {
        value: cdktf.stringToHclTerraform(this._userRiskResponseStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
