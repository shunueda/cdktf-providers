// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecRatePolicyActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#config_id AppsecRatePolicyAction#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#id AppsecRatePolicyAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Action to be taken for requests coming from an IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#ipv4_action AppsecRatePolicyAction#ipv4_action}
  */
  readonly ipv4Action: string;
  /**
  * Action to be taken for requests coming from an IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#ipv6_action AppsecRatePolicyAction#ipv6_action}
  */
  readonly ipv6Action: string;
  /**
  * Unique identifier of the rate policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#rate_policy_id AppsecRatePolicyAction#rate_policy_id}
  */
  readonly ratePolicyId: number;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#security_policy_id AppsecRatePolicyAction#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action akamai_appsec_rate_policy_action}
*/
export class AppsecRatePolicyAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_rate_policy_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecRatePolicyAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecRatePolicyAction to import
  * @param importFromId The id of the existing AppsecRatePolicyAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecRatePolicyAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_rate_policy_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_rate_policy_action akamai_appsec_rate_policy_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecRatePolicyActionConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecRatePolicyActionConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_rate_policy_action',
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
    this._ipv4Action = config.ipv4Action;
    this._ipv6Action = config.ipv6Action;
    this._ratePolicyId = config.ratePolicyId;
    this._securityPolicyId = config.securityPolicyId;
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

  // ipv4_action - computed: false, optional: false, required: true
  private _ipv4Action?: string; 
  public get ipv4Action() {
    return this.getStringAttribute('ipv4_action');
  }
  public set ipv4Action(value: string) {
    this._ipv4Action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ActionInput() {
    return this._ipv4Action;
  }

  // ipv6_action - computed: false, optional: false, required: true
  private _ipv6Action?: string; 
  public get ipv6Action() {
    return this.getStringAttribute('ipv6_action');
  }
  public set ipv6Action(value: string) {
    this._ipv6Action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ActionInput() {
    return this._ipv6Action;
  }

  // rate_policy_id - computed: false, optional: false, required: true
  private _ratePolicyId?: number; 
  public get ratePolicyId() {
    return this.getNumberAttribute('rate_policy_id');
  }
  public set ratePolicyId(value: number) {
    this._ratePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ratePolicyIdInput() {
    return this._ratePolicyId;
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
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      ipv4_action: cdktf.stringToTerraform(this._ipv4Action),
      ipv6_action: cdktf.stringToTerraform(this._ipv6Action),
      rate_policy_id: cdktf.numberToTerraform(this._ratePolicyId),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
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
      ipv4_action: {
        value: cdktf.stringToHclTerraform(this._ipv4Action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_action: {
        value: cdktf.stringToHclTerraform(this._ipv6Action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_policy_id: {
        value: cdktf.numberToHclTerraform(this._ratePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
