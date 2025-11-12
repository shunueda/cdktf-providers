// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * the env0 project id to associate the credentials with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials#env0_project_id GcpCredentials#env0_project_id}
  */
  readonly env0ProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials#id GcpCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name for the credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials#name GcpCredentials#name}
  */
  readonly name: string;
  /**
  * the gcp project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials#project_id GcpCredentials#project_id}
  */
  readonly projectId?: string;
  /**
  * the gcp service account key. In case your organization is self-hosted, please use a secret reference in the shape of ${gcp:<secret-id>}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials#service_account_key GcpCredentials#service_account_key}
  */
  readonly serviceAccountKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials env0_gcp_credentials}
*/
export class GcpCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_gcp_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpCredentials to import
  * @param importFromId The id of the existing GcpCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_gcp_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/gcp_credentials env0_gcp_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: GcpCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_gcp_credentials',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._env0ProjectId = config.env0ProjectId;
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._serviceAccountKey = config.serviceAccountKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env0_project_id - computed: false, optional: true, required: false
  private _env0ProjectId?: string; 
  public get env0ProjectId() {
    return this.getStringAttribute('env0_project_id');
  }
  public set env0ProjectId(value: string) {
    this._env0ProjectId = value;
  }
  public resetEnv0ProjectId() {
    this._env0ProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get env0ProjectIdInput() {
    return this._env0ProjectId;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_key - computed: false, optional: false, required: true
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }
  public set serviceAccountKey(value: string) {
    this._serviceAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env0_project_id: cdktf.stringToTerraform(this._env0ProjectId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_account_key: cdktf.stringToTerraform(this._serviceAccountKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env0_project_id: {
        value: cdktf.stringToHclTerraform(this._env0ProjectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      service_account_key: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
