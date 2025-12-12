// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListeningTentacleWorkerConfig extends cdktf.TerraformMetaArguments {
  /**
  * When disabled, worker will not be included in any deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#is_disabled ListeningTentacleWorker#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Select the machine policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#machine_policy_id ListeningTentacleWorker#machine_policy_id}
  */
  readonly machinePolicyId: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#name ListeningTentacleWorker#name}
  */
  readonly name: string;
  /**
  * Specify the connection type for the Tentacle: direct(when not set) or via a proxy server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#proxy_id ListeningTentacleWorker#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * The space ID associated with this Listening tentacle worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#space_id ListeningTentacleWorker#space_id}
  */
  readonly spaceId?: string;
  /**
  * The X509 certificate thumbprint that securely identifies the Tentacle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#thumbprint ListeningTentacleWorker#thumbprint}
  */
  readonly thumbprint: string;
  /**
  * The network address at which the Tentacle can be reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#uri ListeningTentacleWorker#uri}
  */
  readonly uri: string;
  /**
  * Select at least one worker pool for the worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#worker_pool_ids ListeningTentacleWorker#worker_pool_ids}
  */
  readonly workerPoolIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker octopusdeploy_listening_tentacle_worker}
*/
export class ListeningTentacleWorker extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_listening_tentacle_worker";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ListeningTentacleWorker resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ListeningTentacleWorker to import
  * @param importFromId The id of the existing ListeningTentacleWorker that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ListeningTentacleWorker to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_listening_tentacle_worker", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/listening_tentacle_worker octopusdeploy_listening_tentacle_worker} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListeningTentacleWorkerConfig
  */
  public constructor(scope: Construct, id: string, config: ListeningTentacleWorkerConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_listening_tentacle_worker',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isDisabled = config.isDisabled;
    this._machinePolicyId = config.machinePolicyId;
    this._name = config.name;
    this._proxyId = config.proxyId;
    this._spaceId = config.spaceId;
    this._thumbprint = config.thumbprint;
    this._uri = config.uri;
    this._workerPoolIds = config.workerPoolIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // thumbprint - computed: false, optional: false, required: true
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      machine_policy_id: cdktf.stringToTerraform(this._machinePolicyId),
      name: cdktf.stringToTerraform(this._name),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
      space_id: cdktf.stringToTerraform(this._spaceId),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      uri: cdktf.stringToTerraform(this._uri),
      worker_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerPoolIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      thumbprint: {
        value: cdktf.stringToHclTerraform(this._thumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
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
