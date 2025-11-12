// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlueprintDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra ID of the blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_deployment#blueprint_id BlueprintDeployment#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Comment associated with the Deployment/Commit. This field supports templating using the `text/template` library (currently supported replacements: [`{{.TerraformVersion}}`, `{{.ProviderVersion}}`]) and environment variable expansion using `os.ExpandEnv` to include contextual information like the Terraform username, CI system job ID, etc...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_deployment#comment BlueprintDeployment#comment}
  */
  readonly comment?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_deployment apstra_blueprint_deployment}
*/
export class BlueprintDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_blueprint_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlueprintDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlueprintDeployment to import
  * @param importFromId The id of the existing BlueprintDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlueprintDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_blueprint_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/resources/blueprint_deployment apstra_blueprint_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlueprintDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: BlueprintDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_blueprint_deployment',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._comment = config.comment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // has_uncommitted_changes - computed: true, optional: false, required: false
  public get hasUncommittedChanges() {
    return this.getBooleanAttribute('has_uncommitted_changes');
  }

  // revision_active - computed: true, optional: false, required: false
  public get revisionActive() {
    return this.getNumberAttribute('revision_active');
  }

  // revision_staged - computed: true, optional: false, required: false
  public get revisionStaged() {
    return this.getNumberAttribute('revision_staged');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      comment: cdktf.stringToTerraform(this._comment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
