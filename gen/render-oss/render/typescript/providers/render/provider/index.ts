// https://registry.terraform.io/providers/render-oss/render/1.8.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RenderProviderConfig {
  /**
  * API key to use when interacting with the API. You can generate an API key from the user settings on the Render dashboard. The provider will read this value from the RENDER_API_KEY environment variable if set. This key is sensitive and should not be committed to source control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs#api_key RenderProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The user or team ID that owns the managed resources. All resources will be created under this owner ID. You can find the owner ID in the Render dashboard by navigating to the user or team settings and finding the ID in the URL. The ID will start with usr- for individual accounts and tea- for team accounts. The provider will read this value from the RENDER_OWNER_ID environment variable if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs#owner_id RenderProvider#owner_id}
  */
  readonly ownerId?: string;
  /**
  * If set to true, the provider won't deploy a service after updating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs#skip_deploy_after_service_update RenderProvider#skip_deploy_after_service_update}
  */
  readonly skipDeployAfterServiceUpdate?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the provider will wait for deployments to complete when creating web services, private services, and background workers before continuing. This is useful when you have services that depend on one another and the dependencies must be live for the dependent service to successfully start. The default value is false. The provider will read this value from the RENDER_WAIT_FOR_DEPLOY_COMPLETION environment variable if set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs#wait_for_deploy_completion RenderProvider#wait_for_deploy_completion}
  */
  readonly waitForDeployCompletion?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs#alias RenderProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs render}
*/
export class RenderProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RenderProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RenderProvider to import
  * @param importFromId The id of the existing RenderProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RenderProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.8.0/docs render} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RenderProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RenderProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'render',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      terraformProviderSource: 'render-oss/render'
    });
    this._apiKey = config.apiKey;
    this._ownerId = config.ownerId;
    this._skipDeployAfterServiceUpdate = config.skipDeployAfterServiceUpdate;
    this._waitForDeployCompletion = config.waitForDeployCompletion;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // owner_id - computed: false, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this._ownerId;
  }
  public set ownerId(value: string | undefined) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // skip_deploy_after_service_update - computed: false, optional: true, required: false
  private _skipDeployAfterServiceUpdate?: boolean | cdktf.IResolvable; 
  public get skipDeployAfterServiceUpdate() {
    return this._skipDeployAfterServiceUpdate;
  }
  public set skipDeployAfterServiceUpdate(value: boolean | cdktf.IResolvable | undefined) {
    this._skipDeployAfterServiceUpdate = value;
  }
  public resetSkipDeployAfterServiceUpdate() {
    this._skipDeployAfterServiceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeployAfterServiceUpdateInput() {
    return this._skipDeployAfterServiceUpdate;
  }

  // wait_for_deploy_completion - computed: false, optional: true, required: false
  private _waitForDeployCompletion?: boolean | cdktf.IResolvable; 
  public get waitForDeployCompletion() {
    return this._waitForDeployCompletion;
  }
  public set waitForDeployCompletion(value: boolean | cdktf.IResolvable | undefined) {
    this._waitForDeployCompletion = value;
  }
  public resetWaitForDeployCompletion() {
    this._waitForDeployCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeployCompletionInput() {
    return this._waitForDeployCompletion;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      skip_deploy_after_service_update: cdktf.booleanToTerraform(this._skipDeployAfterServiceUpdate),
      wait_for_deploy_completion: cdktf.booleanToTerraform(this._waitForDeployCompletion),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_deploy_after_service_update: {
        value: cdktf.booleanToHclTerraform(this._skipDeployAfterServiceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_deploy_completion: {
        value: cdktf.booleanToHclTerraform(this._waitForDeployCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
