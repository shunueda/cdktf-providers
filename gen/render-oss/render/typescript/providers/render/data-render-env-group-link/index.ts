// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/env_group_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRenderEnvGroupLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/env_group_link#env_group_id DataRenderEnvGroupLink#env_group_id}
  */
  readonly envGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/env_group_link render_env_group_link}
*/
export class DataRenderEnvGroupLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_env_group_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRenderEnvGroupLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRenderEnvGroupLink to import
  * @param importFromId The id of the existing DataRenderEnvGroupLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/env_group_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRenderEnvGroupLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_env_group_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/data-sources/env_group_link render_env_group_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRenderEnvGroupLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataRenderEnvGroupLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'render_env_group_link',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envGroupId = config.envGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_group_id - computed: false, optional: false, required: true
  private _envGroupId?: string; 
  public get envGroupId() {
    return this.getStringAttribute('env_group_id');
  }
  public set envGroupId(value: string) {
    this._envGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envGroupIdInput() {
    return this._envGroupId;
  }

  // service_ids - computed: true, optional: false, required: false
  public get serviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_group_id: cdktf.stringToTerraform(this._envGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_group_id: {
        value: cdktf.stringToHclTerraform(this._envGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
