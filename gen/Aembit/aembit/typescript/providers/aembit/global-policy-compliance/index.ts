// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalPolicyComplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines a compliance requirement for an Access Policy to have an Access Condition. Possible values are: Required, Recommended, Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance#access_policy_access_condition_compliance GlobalPolicyCompliance#access_policy_access_condition_compliance}
  */
  readonly accessPolicyAccessConditionCompliance: string;
  /**
  * Defines a compliance requirement for an Access Policy to have a Trust Provider. Possible values are: Required, Recommended, Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance#access_policy_trust_provider_compliance GlobalPolicyCompliance#access_policy_trust_provider_compliance}
  */
  readonly accessPolicyTrustProviderCompliance: string;
  /**
  * Defines a compliance requirement for an Agent Controller to specify Allowed TLS Hostname parameter. Possible values are: Required, Recommended, Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance#agent_controller_allowed_tls_hostname_compliance GlobalPolicyCompliance#agent_controller_allowed_tls_hostname_compliance}
  */
  readonly agentControllerAllowedTlsHostnameCompliance: string;
  /**
  * Defines a compliance requirement for an Agent Controller to have a Trust Provider. Possible values are: Required, Recommended, Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance#agent_controller_trust_provider_compliance GlobalPolicyCompliance#agent_controller_trust_provider_compliance}
  */
  readonly agentControllerTrustProviderCompliance: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance aembit_global_policy_compliance}
*/
export class GlobalPolicyCompliance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_global_policy_compliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalPolicyCompliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalPolicyCompliance to import
  * @param importFromId The id of the existing GlobalPolicyCompliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalPolicyCompliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_global_policy_compliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/global_policy_compliance aembit_global_policy_compliance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalPolicyComplianceConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalPolicyComplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_global_policy_compliance',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicyAccessConditionCompliance = config.accessPolicyAccessConditionCompliance;
    this._accessPolicyTrustProviderCompliance = config.accessPolicyTrustProviderCompliance;
    this._agentControllerAllowedTlsHostnameCompliance = config.agentControllerAllowedTlsHostnameCompliance;
    this._agentControllerTrustProviderCompliance = config.agentControllerTrustProviderCompliance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_access_condition_compliance - computed: false, optional: false, required: true
  private _accessPolicyAccessConditionCompliance?: string; 
  public get accessPolicyAccessConditionCompliance() {
    return this.getStringAttribute('access_policy_access_condition_compliance');
  }
  public set accessPolicyAccessConditionCompliance(value: string) {
    this._accessPolicyAccessConditionCompliance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyAccessConditionComplianceInput() {
    return this._accessPolicyAccessConditionCompliance;
  }

  // access_policy_trust_provider_compliance - computed: false, optional: false, required: true
  private _accessPolicyTrustProviderCompliance?: string; 
  public get accessPolicyTrustProviderCompliance() {
    return this.getStringAttribute('access_policy_trust_provider_compliance');
  }
  public set accessPolicyTrustProviderCompliance(value: string) {
    this._accessPolicyTrustProviderCompliance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTrustProviderComplianceInput() {
    return this._accessPolicyTrustProviderCompliance;
  }

  // agent_controller_allowed_tls_hostname_compliance - computed: false, optional: false, required: true
  private _agentControllerAllowedTlsHostnameCompliance?: string; 
  public get agentControllerAllowedTlsHostnameCompliance() {
    return this.getStringAttribute('agent_controller_allowed_tls_hostname_compliance');
  }
  public set agentControllerAllowedTlsHostnameCompliance(value: string) {
    this._agentControllerAllowedTlsHostnameCompliance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentControllerAllowedTlsHostnameComplianceInput() {
    return this._agentControllerAllowedTlsHostnameCompliance;
  }

  // agent_controller_trust_provider_compliance - computed: false, optional: false, required: true
  private _agentControllerTrustProviderCompliance?: string; 
  public get agentControllerTrustProviderCompliance() {
    return this.getStringAttribute('agent_controller_trust_provider_compliance');
  }
  public set agentControllerTrustProviderCompliance(value: string) {
    this._agentControllerTrustProviderCompliance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentControllerTrustProviderComplianceInput() {
    return this._agentControllerTrustProviderCompliance;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_access_condition_compliance: cdktf.stringToTerraform(this._accessPolicyAccessConditionCompliance),
      access_policy_trust_provider_compliance: cdktf.stringToTerraform(this._accessPolicyTrustProviderCompliance),
      agent_controller_allowed_tls_hostname_compliance: cdktf.stringToTerraform(this._agentControllerAllowedTlsHostnameCompliance),
      agent_controller_trust_provider_compliance: cdktf.stringToTerraform(this._agentControllerTrustProviderCompliance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_access_condition_compliance: {
        value: cdktf.stringToHclTerraform(this._accessPolicyAccessConditionCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_policy_trust_provider_compliance: {
        value: cdktf.stringToHclTerraform(this._accessPolicyTrustProviderCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_controller_allowed_tls_hostname_compliance: {
        value: cdktf.stringToHclTerraform(this._agentControllerAllowedTlsHostnameCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_controller_trust_provider_compliance: {
        value: cdktf.stringToHclTerraform(this._agentControllerTrustProviderCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
