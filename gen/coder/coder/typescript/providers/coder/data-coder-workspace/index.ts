// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoderWorkspaceConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace coder_workspace}
*/
export class DataCoderWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoderWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoderWorkspace to import
  * @param importFromId The id of the existing DataCoderWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoderWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace coder_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoderWorkspaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoderWorkspaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coder_workspace',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
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

  // access_port - computed: true, optional: false, required: false
  public get accessPort() {
    return this.getNumberAttribute('access_port');
  }

  // access_url - computed: true, optional: false, required: false
  public get accessUrl() {
    return this.getStringAttribute('access_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_prebuild - computed: true, optional: false, required: false
  public get isPrebuild() {
    return this.getBooleanAttribute('is_prebuild');
  }

  // is_prebuild_claim - computed: true, optional: false, required: false
  public get isPrebuildClaim() {
    return this.getBooleanAttribute('is_prebuild_claim');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prebuild_count - computed: true, optional: false, required: false
  public get prebuildCount() {
    return this.getNumberAttribute('prebuild_count');
  }

  // start_count - computed: true, optional: false, required: false
  public get startCount() {
    return this.getNumberAttribute('start_count');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // template_version - computed: true, optional: false, required: false
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }

  // transition - computed: true, optional: false, required: false
  public get transition() {
    return this.getStringAttribute('transition');
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
