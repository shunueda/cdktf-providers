// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the tenant image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#image_name TenantImage#image_name}
  */
  readonly imageName: string;
  /**
  * The path on the F5OS where the the tenant image is to be imported to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#local_path TenantImage#local_path}
  */
  readonly localPath?: string;
  /**
  * Protocol for image transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#protocol TenantImage#protocol}
  */
  readonly protocol?: string;
  /**
  * The hostname or IP address of the remote server on which the tenant image is stored.
  * The server must make the image accessible via the specified protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#remote_host TenantImage#remote_host}
  */
  readonly remoteHost?: string;
  /**
  * Password for the user on the remote server on which the tenant image is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#remote_password TenantImage#remote_password}
  */
  readonly remotePassword?: string;
  /**
  * The path to the tenant image on the remote server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#remote_path TenantImage#remote_path}
  */
  readonly remotePath?: string;
  /**
  * The port on the remote host to which you want to connect.
  * If the port is not provided, a default port for the selected protocol is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#remote_port TenantImage#remote_port}
  */
  readonly remotePort?: number;
  /**
  * User name for the remote server on which the tenant image is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#remote_user TenantImage#remote_user}
  */
  readonly remoteUser?: string;
  /**
  * The number of seconds to wait for image import to finish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#timeout TenantImage#timeout}
  */
  readonly timeout?: number;
  /**
  * The path to image on the local machine which is to be uploaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#upload_from_path TenantImage#upload_from_path}
  */
  readonly uploadFromPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image f5os_tenant_image}
*/
export class TenantImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_tenant_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantImage to import
  * @param importFromId The id of the existing TenantImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_tenant_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tenant_image f5os_tenant_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantImageConfig
  */
  public constructor(scope: Construct, id: string, config: TenantImageConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_tenant_image',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0',
        providerVersionConstraint: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._imageName = config.imageName;
    this._localPath = config.localPath;
    this._protocol = config.protocol;
    this._remoteHost = config.remoteHost;
    this._remotePassword = config.remotePassword;
    this._remotePath = config.remotePath;
    this._remotePort = config.remotePort;
    this._remoteUser = config.remoteUser;
    this._timeout = config.timeout;
    this._uploadFromPath = config.uploadFromPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_host - computed: false, optional: true, required: false
  private _remoteHost?: string; 
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }
  public set remoteHost(value: string) {
    this._remoteHost = value;
  }
  public resetRemoteHost() {
    this._remoteHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostInput() {
    return this._remoteHost;
  }

  // remote_password - computed: false, optional: true, required: false
  private _remotePassword?: string; 
  public get remotePassword() {
    return this.getStringAttribute('remote_password');
  }
  public set remotePassword(value: string) {
    this._remotePassword = value;
  }
  public resetRemotePassword() {
    this._remotePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePasswordInput() {
    return this._remotePassword;
  }

  // remote_path - computed: false, optional: true, required: false
  private _remotePath?: string; 
  public get remotePath() {
    return this.getStringAttribute('remote_path');
  }
  public set remotePath(value: string) {
    this._remotePath = value;
  }
  public resetRemotePath() {
    this._remotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePathInput() {
    return this._remotePath;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // remote_user - computed: false, optional: true, required: false
  private _remoteUser?: string; 
  public get remoteUser() {
    return this.getStringAttribute('remote_user');
  }
  public set remoteUser(value: string) {
    this._remoteUser = value;
  }
  public resetRemoteUser() {
    this._remoteUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUserInput() {
    return this._remoteUser;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // upload_from_path - computed: false, optional: true, required: false
  private _uploadFromPath?: string; 
  public get uploadFromPath() {
    return this.getStringAttribute('upload_from_path');
  }
  public set uploadFromPath(value: string) {
    this._uploadFromPath = value;
  }
  public resetUploadFromPath() {
    this._uploadFromPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFromPathInput() {
    return this._uploadFromPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_name: cdktf.stringToTerraform(this._imageName),
      local_path: cdktf.stringToTerraform(this._localPath),
      protocol: cdktf.stringToTerraform(this._protocol),
      remote_host: cdktf.stringToTerraform(this._remoteHost),
      remote_password: cdktf.stringToTerraform(this._remotePassword),
      remote_path: cdktf.stringToTerraform(this._remotePath),
      remote_port: cdktf.numberToTerraform(this._remotePort),
      remote_user: cdktf.stringToTerraform(this._remoteUser),
      timeout: cdktf.numberToTerraform(this._timeout),
      upload_from_path: cdktf.stringToTerraform(this._uploadFromPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_host: {
        value: cdktf.stringToHclTerraform(this._remoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_password: {
        value: cdktf.stringToHclTerraform(this._remotePassword),
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
      remote_port: {
        value: cdktf.numberToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_user: {
        value: cdktf.stringToHclTerraform(this._remoteUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_from_path: {
        value: cdktf.stringToHclTerraform(this._uploadFromPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
