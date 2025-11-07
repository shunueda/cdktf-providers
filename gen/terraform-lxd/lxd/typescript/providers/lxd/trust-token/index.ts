// https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token#name TrustToken#name}
  */
  readonly name: string;
  /**
  * List of projects to restrict the token to. By default, no restriction applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token#projects TrustToken#projects}
  */
  readonly projects?: string[];
  /**
  * The remote in which the trust token is created. If not provided, the provider's default remote is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token#remote TrustToken#remote}
  */
  readonly remote?: string;
  /**
  * When to trigger the token generation. Possible values are once and always (if missing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token#trigger TrustToken#trigger}
  */
  readonly trigger?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token lxd_trust_token}
*/
export class TrustToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lxd_trust_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustToken to import
  * @param importFromId The id of the existing TrustToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lxd_trust_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/trust_token lxd_trust_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustTokenConfig
  */
  public constructor(scope: Construct, id: string, config: TrustTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'lxd_trust_token',
      terraformGeneratorMetadata: {
        providerName: 'lxd',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projects = config.projects;
    this._remote = config.remote;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
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

  // operation_id - computed: true, optional: false, required: false
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }

  // projects - computed: true, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projects),
      remote: cdktf.stringToTerraform(this._remote),
      trigger: cdktf.stringToTerraform(this._trigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
