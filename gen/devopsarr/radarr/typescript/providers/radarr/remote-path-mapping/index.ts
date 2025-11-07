// https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemotePathMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Download Client host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping#host RemotePathMapping#host}
  */
  readonly host: string;
  /**
  * Local path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping#local_path RemotePathMapping#local_path}
  */
  readonly localPath: string;
  /**
  * Download Client remote path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping#remote_path RemotePathMapping#remote_path}
  */
  readonly remotePath: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping radarr_remote_path_mapping}
*/
export class RemotePathMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "radarr_remote_path_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemotePathMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemotePathMapping to import
  * @param importFromId The id of the existing RemotePathMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemotePathMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "radarr_remote_path_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/radarr/2.3.3/docs/resources/remote_path_mapping radarr_remote_path_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemotePathMappingConfig
  */
  public constructor(scope: Construct, id: string, config: RemotePathMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'radarr_remote_path_mapping',
      terraformGeneratorMetadata: {
        providerName: 'radarr',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._localPath = config.localPath;
    this._remotePath = config.remotePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // local_path - computed: false, optional: false, required: true
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // remote_path - computed: false, optional: false, required: true
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      local_path: cdktf.stringToTerraform(this._localPath),
      remote_path: cdktf.stringToTerraform(this._remotePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_path: {
        value: cdktf.stringToHclTerraform(this._localPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_path: {
        value: cdktf.stringToHclTerraform(this._remotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
