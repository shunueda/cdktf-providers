// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAttackGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the attack group to be modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#attack_group AppsecAttackGroup#attack_group}
  */
  readonly attackGroup: string;
  /**
  * Action to be taken when the attack group is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#attack_group_action AppsecAttackGroup#attack_group_action}
  */
  readonly attackGroupAction: string;
  /**
  * JSON-formatted condition and exception information for the attack group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#condition_exception AppsecAttackGroup#condition_exception}
  */
  readonly conditionException?: string;
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#config_id AppsecAttackGroup#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#id AppsecAttackGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#security_policy_id AppsecAttackGroup#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group akamai_appsec_attack_group}
*/
export class AppsecAttackGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_attack_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAttackGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAttackGroup to import
  * @param importFromId The id of the existing AppsecAttackGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAttackGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_attack_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_attack_group akamai_appsec_attack_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAttackGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAttackGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_attack_group',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attackGroup = config.attackGroup;
    this._attackGroupAction = config.attackGroupAction;
    this._conditionException = config.conditionException;
    this._configId = config.configId;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_group - computed: false, optional: false, required: true
  private _attackGroup?: string; 
  public get attackGroup() {
    return this.getStringAttribute('attack_group');
  }
  public set attackGroup(value: string) {
    this._attackGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackGroupInput() {
    return this._attackGroup;
  }

  // attack_group_action - computed: false, optional: false, required: true
  private _attackGroupAction?: string; 
  public get attackGroupAction() {
    return this.getStringAttribute('attack_group_action');
  }
  public set attackGroupAction(value: string) {
    this._attackGroupAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackGroupActionInput() {
    return this._attackGroupAction;
  }

  // condition_exception - computed: false, optional: true, required: false
  private _conditionException?: string; 
  public get conditionException() {
    return this.getStringAttribute('condition_exception');
  }
  public set conditionException(value: string) {
    this._conditionException = value;
  }
  public resetConditionException() {
    this._conditionException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExceptionInput() {
    return this._conditionException;
  }

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

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_group: cdktf.stringToTerraform(this._attackGroup),
      attack_group_action: cdktf.stringToTerraform(this._attackGroupAction),
      condition_exception: cdktf.stringToTerraform(this._conditionException),
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_group: {
        value: cdktf.stringToHclTerraform(this._attackGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_group_action: {
        value: cdktf.stringToHclTerraform(this._attackGroupAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_exception: {
        value: cdktf.stringToHclTerraform(this._conditionException),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
