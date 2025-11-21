// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/ai_data_platform_ai_data_platform
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiDataPlatformAiDataPlatformConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/ai_data_platform_ai_data_platform#ai_data_platform_id DataOciAiDataPlatformAiDataPlatform#ai_data_platform_id}
  */
  readonly aiDataPlatformId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/ai_data_platform_ai_data_platform oci_ai_data_platform_ai_data_platform}
*/
export class DataOciAiDataPlatformAiDataPlatform extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_data_platform_ai_data_platform";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiDataPlatformAiDataPlatform resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiDataPlatformAiDataPlatform to import
  * @param importFromId The id of the existing DataOciAiDataPlatformAiDataPlatform that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/ai_data_platform_ai_data_platform#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiDataPlatformAiDataPlatform to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_data_platform_ai_data_platform", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/ai_data_platform_ai_data_platform oci_ai_data_platform_ai_data_platform} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiDataPlatformAiDataPlatformConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiDataPlatformAiDataPlatformConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_data_platform_ai_data_platform',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aiDataPlatformId = config.aiDataPlatformId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_data_platform_id - computed: false, optional: false, required: true
  private _aiDataPlatformId?: string; 
  public get aiDataPlatformId() {
    return this.getStringAttribute('ai_data_platform_id');
  }
  public set aiDataPlatformId(value: string) {
    this._aiDataPlatformId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aiDataPlatformIdInput() {
    return this._aiDataPlatformId;
  }

  // ai_data_platform_type - computed: true, optional: false, required: false
  public get aiDataPlatformType() {
    return this.getStringAttribute('ai_data_platform_type');
  }

  // alias_key - computed: true, optional: false, required: false
  public get aliasKey() {
    return this.getStringAttribute('alias_key');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // default_workspace_name - computed: true, optional: false, required: false
  public get defaultWorkspaceName() {
    return this.getStringAttribute('default_workspace_name');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // web_socket_endpoint - computed: true, optional: false, required: false
  public get webSocketEndpoint() {
    return this.getStringAttribute('web_socket_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ai_data_platform_id: cdktf.stringToTerraform(this._aiDataPlatformId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_data_platform_id: {
        value: cdktf.stringToHclTerraform(this._aiDataPlatformId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
