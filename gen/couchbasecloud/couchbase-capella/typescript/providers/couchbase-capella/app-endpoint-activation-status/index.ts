// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEndpointActivationStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#app_endpoint_name AppEndpointActivationStatus#app_endpoint_name}
  */
  readonly appEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#app_service_id AppEndpointActivationStatus#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#cluster_id AppEndpointActivationStatus#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#organization_id AppEndpointActivationStatus#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#project_id AppEndpointActivationStatus#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#state AppEndpointActivationStatus#state}
  */
  readonly state: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status couchbase-capella_app_endpoint_activation_status}
*/
export class AppEndpointActivationStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_app_endpoint_activation_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppEndpointActivationStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppEndpointActivationStatus to import
  * @param importFromId The id of the existing AppEndpointActivationStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppEndpointActivationStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_app_endpoint_activation_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_activation_status couchbase-capella_app_endpoint_activation_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEndpointActivationStatusConfig
  */
  public constructor(scope: Construct, id: string, config: AppEndpointActivationStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_app_endpoint_activation_status',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
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
    this._appEndpointName = config.appEndpointName;
    this._appServiceId = config.appServiceId;
    this._clusterId = config.clusterId;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_endpoint_name - computed: false, optional: false, required: true
  private _appEndpointName?: string; 
  public get appEndpointName() {
    return this.getStringAttribute('app_endpoint_name');
  }
  public set appEndpointName(value: string) {
    this._appEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appEndpointNameInput() {
    return this._appEndpointName;
  }

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId?: string; 
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_endpoint_name: cdktf.stringToTerraform(this._appEndpointName),
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._appEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service_id: {
        value: cdktf.stringToHclTerraform(this._appServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
