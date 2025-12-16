// https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#description ProjectToken#description}
  */
  readonly description?: string;
  /**
  * Duration before the token will expire. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`. E.g. `12h`, `7d`. Default: No expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#expires_in ProjectToken#expires_in}
  */
  readonly expiresIn?: string;
  /**
  * The project associated with the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#project ProjectToken#project}
  */
  readonly project: string;
  /**
  * Duration to control token silent regeneration based on token age. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`. If set, then the token will be regenerated if it is older than `renew_after`. I.e. if `currentDate - issued_at > renew_after`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#renew_after ProjectToken#renew_after}
  */
  readonly renewAfter?: string;
  /**
  * Duration to control token silent regeneration based on remaining token lifetime. If `expires_in` is set, Terraform will regenerate the token if `expires_at - currentDate < renew_before`. Valid time units are `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#renew_before ProjectToken#renew_before}
  */
  readonly renewBefore?: string;
  /**
  * The name of the role in the project associated with the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#role ProjectToken#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token argocd_project_token}
*/
export class ProjectToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd_project_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectToken to import
  * @param importFromId The id of the existing ProjectToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd_project_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.4/docs/resources/project_token argocd_project_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'argocd_project_token',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.12.4',
        providerVersionConstraint: '7.12.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._expiresIn = config.expiresIn;
    this._project = config.project;
    this._renewAfter = config.renewAfter;
    this._renewBefore = config.renewBefore;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // expires_in - computed: false, optional: true, required: false
  private _expiresIn?: string; 
  public get expiresIn() {
    return this.getStringAttribute('expires_in');
  }
  public set expiresIn(value: string) {
    this._expiresIn = value;
  }
  public resetExpiresIn() {
    this._expiresIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getStringAttribute('issued_at');
  }

  // jwt - computed: true, optional: false, required: false
  public get jwt() {
    return this.getStringAttribute('jwt');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // renew_after - computed: false, optional: true, required: false
  private _renewAfter?: string; 
  public get renewAfter() {
    return this.getStringAttribute('renew_after');
  }
  public set renewAfter(value: string) {
    this._renewAfter = value;
  }
  public resetRenewAfter() {
    this._renewAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewAfterInput() {
    return this._renewAfter;
  }

  // renew_before - computed: false, optional: true, required: false
  private _renewBefore?: string; 
  public get renewBefore() {
    return this.getStringAttribute('renew_before');
  }
  public set renewBefore(value: string) {
    this._renewBefore = value;
  }
  public resetRenewBefore() {
    this._renewBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewBeforeInput() {
    return this._renewBefore;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      expires_in: cdktf.stringToTerraform(this._expiresIn),
      project: cdktf.stringToTerraform(this._project),
      renew_after: cdktf.stringToTerraform(this._renewAfter),
      renew_before: cdktf.stringToTerraform(this._renewBefore),
      role: cdktf.stringToTerraform(this._role),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_in: {
        value: cdktf.stringToHclTerraform(this._expiresIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_after: {
        value: cdktf.stringToHclTerraform(this._renewAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_before: {
        value: cdktf.stringToHclTerraform(this._renewBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
