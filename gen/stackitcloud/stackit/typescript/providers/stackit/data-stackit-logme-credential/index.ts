// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitLogmeCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The credential's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential#credential_id DataStackitLogmeCredential#credential_id}
  */
  readonly credentialId: string;
  /**
  * ID of the LogMe instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential#instance_id DataStackitLogmeCredential#instance_id}
  */
  readonly instanceId: string;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential#project_id DataStackitLogmeCredential#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential stackit_logme_credential}
*/
export class DataStackitLogmeCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_logme_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitLogmeCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitLogmeCredential to import
  * @param importFromId The id of the existing DataStackitLogmeCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitLogmeCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_logme_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/data-sources/logme_credential stackit_logme_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitLogmeCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitLogmeCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_logme_credential',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialId = config.credentialId;
    this._instanceId = config.instanceId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_id: cdktf.stringToTerraform(this._credentialId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_id: {
        value: cdktf.stringToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
