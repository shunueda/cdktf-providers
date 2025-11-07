// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraBlueprintDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra ID of the blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_deployment#blueprint_id DataApstraBlueprintDeployment#blueprint_id}
  */
  readonly blueprintId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_deployment apstra_blueprint_deployment}
*/
export class DataApstraBlueprintDeployment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_blueprint_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraBlueprintDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraBlueprintDeployment to import
  * @param importFromId The id of the existing DataApstraBlueprintDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraBlueprintDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_blueprint_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/blueprint_deployment apstra_blueprint_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraBlueprintDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraBlueprintDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_blueprint_deployment',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
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

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
