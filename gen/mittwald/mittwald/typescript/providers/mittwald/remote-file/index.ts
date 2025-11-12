// https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the app to connect to. Either container_id+stack_id or app_id must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#app_id RemoteFile#app_id}
  */
  readonly appId?: string;
  /**
  * The ID of the container to connect to. Either container_id+stack_id or app_id must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#container_id RemoteFile#container_id}
  */
  readonly containerId?: string;
  /**
  * The contents of the file; use the file function to read from a file on the local filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#contents RemoteFile#contents}
  */
  readonly contents?: string;
  /**
  * The URL to fetch the contents of the file from. If specified and contents is not set, the file will be fetched from this URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#contents_from_url RemoteFile#contents_from_url}
  */
  readonly contentsFromUrl?: string;
  /**
  * The path of the file on the remote server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#path RemoteFile#path}
  */
  readonly path: string;
  /**
  * The SSH private key to use for the connection. If not specified, it will default to the contents ~/.ssh/id_rsa; use the file function to specify a file path instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#ssh_private_key RemoteFile#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * The SSH username to use for the connection. If not specified, it will default to the currently authenticated user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#ssh_user RemoteFile#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * The ID of the stack that the container belongs to. Required when container_id is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#stack_id RemoteFile#stack_id}
  */
  readonly stackId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file mittwald_remote_file}
*/
export class RemoteFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_remote_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteFile to import
  * @param importFromId The id of the existing RemoteFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_remote_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.4.5/docs/resources/remote_file mittwald_remote_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteFileConfig
  */
  public constructor(scope: Construct, id: string, config: RemoteFileConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_remote_file',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.4.5',
        providerVersionConstraint: '1.4.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._containerId = config.containerId;
    this._contents = config.contents;
    this._contentsFromUrl = config.contentsFromUrl;
    this._path = config.path;
    this._sshPrivateKey = config.sshPrivateKey;
    this._sshUser = config.sshUser;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // container_id - computed: false, optional: true, required: false
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // contents - computed: false, optional: true, required: false
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  public resetContents() {
    this._contents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // contents_from_url - computed: false, optional: true, required: false
  private _contentsFromUrl?: string; 
  public get contentsFromUrl() {
    return this.getStringAttribute('contents_from_url');
  }
  public set contentsFromUrl(value: string) {
    this._contentsFromUrl = value;
  }
  public resetContentsFromUrl() {
    this._contentsFromUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsFromUrlInput() {
    return this._contentsFromUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ssh_private_key - computed: false, optional: true, required: false
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  public resetSshPrivateKey() {
    this._sshPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // ssh_user - computed: false, optional: true, required: false
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  public resetSshUser() {
    this._sshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      container_id: cdktf.stringToTerraform(this._containerId),
      contents: cdktf.stringToTerraform(this._contents),
      contents_from_url: cdktf.stringToTerraform(this._contentsFromUrl),
      path: cdktf.stringToTerraform(this._path),
      ssh_private_key: cdktf.stringToTerraform(this._sshPrivateKey),
      ssh_user: cdktf.stringToTerraform(this._sshUser),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_id: {
        value: cdktf.stringToHclTerraform(this._containerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.stringToHclTerraform(this._contents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents_from_url: {
        value: cdktf.stringToHclTerraform(this._contentsFromUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_private_key: {
        value: cdktf.stringToHclTerraform(this._sshPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_user: {
        value: cdktf.stringToHclTerraform(this._sshUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
