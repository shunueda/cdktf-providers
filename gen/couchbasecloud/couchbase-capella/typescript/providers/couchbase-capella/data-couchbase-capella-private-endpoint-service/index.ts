// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaPrivateEndpointServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service#cluster_id DataCouchbaseCapellaPrivateEndpointService#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service#organization_id DataCouchbaseCapellaPrivateEndpointService#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service#project_id DataCouchbaseCapellaPrivateEndpointService#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service couchbase-capella_private_endpoint_service}
*/
export class DataCouchbaseCapellaPrivateEndpointService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_private_endpoint_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaPrivateEndpointService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaPrivateEndpointService to import
  * @param importFromId The id of the existing DataCouchbaseCapellaPrivateEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaPrivateEndpointService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_private_endpoint_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/private_endpoint_service couchbase-capella_private_endpoint_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaPrivateEndpointServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaPrivateEndpointServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_private_endpoint_service',
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
    this._clusterId = config.clusterId;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
