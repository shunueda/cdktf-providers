// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/network_access_authorization_global_exception_rule_update_rank
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAccessAuthorizationGlobalExceptionRuleUpdateRankConfig extends cdktf.TerraformMetaArguments {
  /**
  * The rank (priority) in relation to other rules. Lower rank is higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/network_access_authorization_global_exception_rule_update_rank#rank NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank#rank}
  */
  readonly rank: number;
  /**
  * Authorization global exception rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/network_access_authorization_global_exception_rule_update_rank#rule_id NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank#rule_id}
  */
  readonly ruleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/network_access_authorization_global_exception_rule_update_rank ise_network_access_authorization_global_exception_rule_update_rank}
*/
export class NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_network_access_authorization_global_exception_rule_update_rank";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank to import
  * @param importFromId The id of the existing NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/network_access_authorization_global_exception_rule_update_rank#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAccessAuthorizationGlobalExceptionRuleUpdateRank to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_network_access_authorization_global_exception_rule_update_rank", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.13/docs/resources/network_access_authorization_global_exception_rule_update_rank ise_network_access_authorization_global_exception_rule_update_rank} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAccessAuthorizationGlobalExceptionRuleUpdateRankConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAccessAuthorizationGlobalExceptionRuleUpdateRankConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_network_access_authorization_global_exception_rule_update_rank',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.13',
        providerVersionConstraint: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rank = config.rank;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rank - computed: false, optional: false, required: true
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rank: cdktf.numberToTerraform(this._rank),
      rule_id: cdktf.stringToTerraform(this._ruleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
