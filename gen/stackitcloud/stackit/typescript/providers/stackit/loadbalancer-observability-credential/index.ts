// https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerObservabilityCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Observability credential name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential#display_name LoadbalancerObservabilityCredential#display_name}
  */
  readonly displayName: string;
  /**
  * The username for the observability service (e.g. Argus) where the logs/metrics will be pushed into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential#password LoadbalancerObservabilityCredential#password}
  */
  readonly password: string;
  /**
  * STACKIT project ID to which the load balancer observability credential is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential#project_id LoadbalancerObservabilityCredential#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential#region LoadbalancerObservabilityCredential#region}
  */
  readonly region?: string;
  /**
  * The password for the observability service (e.g. Argus) where the logs/metrics will be pushed into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential#username LoadbalancerObservabilityCredential#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential stackit_loadbalancer_observability_credential}
*/
export class LoadbalancerObservabilityCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_loadbalancer_observability_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadbalancerObservabilityCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadbalancerObservabilityCredential to import
  * @param importFromId The id of the existing LoadbalancerObservabilityCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadbalancerObservabilityCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_loadbalancer_observability_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/loadbalancer_observability_credential stackit_loadbalancer_observability_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerObservabilityCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerObservabilityCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_loadbalancer_observability_credential',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.74.0',
        providerVersionConstraint: '0.74.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._password = config.password;
    this._projectId = config.projectId;
    this._region = config.region;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_ref - computed: true, optional: false, required: false
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
