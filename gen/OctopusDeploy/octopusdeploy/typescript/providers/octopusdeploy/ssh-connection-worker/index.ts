// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshConnectionWorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#account_id SshConnectionWorker#account_id}
  */
  readonly accountId: string;
  /**
  * NET Core platform of self-contained version of Calamari
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#dotnet_platform SshConnectionWorker#dotnet_platform}
  */
  readonly dotnetPlatform: string;
  /**
  * The host fingerprint to be verified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#fingerprint SshConnectionWorker#fingerprint}
  */
  readonly fingerprint: string;
  /**
  * The hostname or IP address of the deployment target to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#host SshConnectionWorker#host}
  */
  readonly host: string;
  /**
  * When disabled, worker will not be included in any deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#is_disabled SshConnectionWorker#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Select the machine policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#machine_policy_id SshConnectionWorker#machine_policy_id}
  */
  readonly machinePolicyId: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#name SshConnectionWorker#name}
  */
  readonly name: string;
  /**
  * The port number of the host to connect to (usually 22)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#port SshConnectionWorker#port}
  */
  readonly port: number;
  /**
  * Specify the connection type for the Tentacle: direct(when not set) or via a proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#proxy_id SshConnectionWorker#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * The space ID associated with this Listening tentacle worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#space_id SshConnectionWorker#space_id}
  */
  readonly spaceId?: string;
  /**
  * Select at least one worker pool for the worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#worker_pool_ids SshConnectionWorker#worker_pool_ids}
  */
  readonly workerPoolIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker octopusdeploy_ssh_connection_worker}
*/
export class SshConnectionWorker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_ssh_connection_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshConnectionWorker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshConnectionWorker to import
  * @param importFromId The id of the existing SshConnectionWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshConnectionWorker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_ssh_connection_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/ssh_connection_worker octopusdeploy_ssh_connection_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshConnectionWorkerConfig
  */
  public constructor(scope: Construct, id: string, config: SshConnectionWorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_ssh_connection_worker',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._dotnetPlatform = config.dotnetPlatform;
    this._fingerprint = config.fingerprint;
    this._host = config.host;
    this._isDisabled = config.isDisabled;
    this._machinePolicyId = config.machinePolicyId;
    this._name = config.name;
    this._port = config.port;
    this._proxyId = config.proxyId;
    this._spaceId = config.spaceId;
    this._workerPoolIds = config.workerPoolIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // dotnet_platform - computed: false, optional: false, required: true
  private _dotnetPlatform?: string; 
  public get dotnetPlatform() {
    return this.getStringAttribute('dotnet_platform');
  }
  public set dotnetPlatform(value: string) {
    this._dotnetPlatform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dotnetPlatformInput() {
    return this._dotnetPlatform;
  }

  // fingerprint - computed: false, optional: false, required: true
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

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
    return this.getStringAttribute('id');
  }

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // machine_policy_id - computed: false, optional: false, required: true
  private _machinePolicyId?: string; 
  public get machinePolicyId() {
    return this.getStringAttribute('machine_policy_id');
  }
  public set machinePolicyId(value: string) {
    this._machinePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePolicyIdInput() {
    return this._machinePolicyId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_id - computed: false, optional: true, required: false
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  public resetProxyId() {
    this._proxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // worker_pool_ids - computed: false, optional: false, required: true
  private _workerPoolIds?: string[]; 
  public get workerPoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('worker_pool_ids'));
  }
  public set workerPoolIds(value: string[]) {
    this._workerPoolIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolIdsInput() {
    return this._workerPoolIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      dotnet_platform: cdktf.stringToTerraform(this._dotnetPlatform),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      host: cdktf.stringToTerraform(this._host),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      machine_policy_id: cdktf.stringToTerraform(this._machinePolicyId),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      worker_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerPoolIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dotnet_platform: {
        value: cdktf.stringToHclTerraform(this._dotnetPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_policy_id: {
        value: cdktf.stringToHclTerraform(this._machinePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_pool_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerPoolIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
