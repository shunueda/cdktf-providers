// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_aws_credential_prerequisites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCdpEnvironmentsAwsCredentialPrerequisitesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_aws_credential_prerequisites cdp_environments_aws_credential_prerequisites}
*/
export class DataCdpEnvironmentsAwsCredentialPrerequisites extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_aws_credential_prerequisites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCdpEnvironmentsAwsCredentialPrerequisites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCdpEnvironmentsAwsCredentialPrerequisites to import
  * @param importFromId The id of the existing DataCdpEnvironmentsAwsCredentialPrerequisites that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_aws_credential_prerequisites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCdpEnvironmentsAwsCredentialPrerequisites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_aws_credential_prerequisites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_aws_credential_prerequisites cdp_environments_aws_credential_prerequisites} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCdpEnvironmentsAwsCredentialPrerequisitesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCdpEnvironmentsAwsCredentialPrerequisitesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_aws_credential_prerequisites',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
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

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new cdktf.StringMap(this, "policies");
  public get policies() {
    return this._policies;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
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
