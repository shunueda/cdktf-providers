// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/global_policy_compliance_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitGlobalPolicyComplianceDataConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/global_policy_compliance_data aembit_global_policy_compliance_data}
*/
export class DataAembitGlobalPolicyComplianceData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_global_policy_compliance_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitGlobalPolicyComplianceData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitGlobalPolicyComplianceData to import
  * @param importFromId The id of the existing DataAembitGlobalPolicyComplianceData that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/global_policy_compliance_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitGlobalPolicyComplianceData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_global_policy_compliance_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/global_policy_compliance_data aembit_global_policy_compliance_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitGlobalPolicyComplianceDataConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitGlobalPolicyComplianceDataConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_global_policy_compliance_data',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_access_condition_compliance - computed: true, optional: false, required: false
  public get accessPolicyAccessConditionCompliance() {
    return this.getStringAttribute('access_policy_access_condition_compliance');
  }

  // access_policy_trust_provider_compliance - computed: true, optional: false, required: false
  public get accessPolicyTrustProviderCompliance() {
    return this.getStringAttribute('access_policy_trust_provider_compliance');
  }

  // agent_controller_allowed_tls_hostname_compliance - computed: true, optional: false, required: false
  public get agentControllerAllowedTlsHostnameCompliance() {
    return this.getStringAttribute('agent_controller_allowed_tls_hostname_compliance');
  }

  // agent_controller_trust_provider_compliance - computed: true, optional: false, required: false
  public get agentControllerTrustProviderCompliance() {
    return this.getStringAttribute('agent_controller_trust_provider_compliance');
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
