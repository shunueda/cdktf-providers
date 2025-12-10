// https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsAgentConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/agent ns_agent}
*/
export class DataNsAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsAgent to import
  * @param importFromId The id of the existing DataNsAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.1/docs/data-sources/agent ns_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsAgentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsAgentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ns_agent',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_user_arn - computed: true, optional: false, required: false
  public get awsUserArn() {
    return this.getStringAttribute('aws_user_arn');
  }

  // aws_user_name - computed: true, optional: false, required: false
  public get awsUserName() {
    return this.getStringAttribute('aws_user_name');
  }

  // gcp_project_id - computed: true, optional: false, required: false
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }

  // gcp_service_account_email - computed: true, optional: false, required: false
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
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
