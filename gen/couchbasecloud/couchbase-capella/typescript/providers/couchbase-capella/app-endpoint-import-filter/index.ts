// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEndpointImportFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#app_endpoint_name AppEndpointImportFilter#app_endpoint_name}
  */
  readonly appEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#app_service_id AppEndpointImportFilter#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#cluster_id AppEndpointImportFilter#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#collection AppEndpointImportFilter#collection}
  */
  readonly collection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#import_filter AppEndpointImportFilter#import_filter}
  */
  readonly importFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#organization_id AppEndpointImportFilter#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#project_id AppEndpointImportFilter#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#scope AppEndpointImportFilter#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter couchbase-capella_app_endpoint_import_filter}
*/
export class AppEndpointImportFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_app_endpoint_import_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppEndpointImportFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppEndpointImportFilter to import
  * @param importFromId The id of the existing AppEndpointImportFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppEndpointImportFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_app_endpoint_import_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_import_filter couchbase-capella_app_endpoint_import_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEndpointImportFilterConfig
  */
  public constructor(scope: Construct, id: string, config: AppEndpointImportFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_app_endpoint_import_filter',
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
    this._collection = config.collection;
    this._importFilter = config.importFilter;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._scope = config.scope;
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

  // collection - computed: true, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // import_filter - computed: false, optional: false, required: true
  private _importFilter?: string; 
  public get importFilter() {
    return this.getStringAttribute('import_filter');
  }
  public set importFilter(value: string) {
    this._importFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importFilterInput() {
    return this._importFilter;
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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_endpoint_name: cdktf.stringToTerraform(this._appEndpointName),
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      collection: cdktf.stringToTerraform(this._collection),
      import_filter: cdktf.stringToTerraform(this._importFilter),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      scope: cdktf.stringToTerraform(this._scope),
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
      collection: {
        value: cdktf.stringToHclTerraform(this._collection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_filter: {
        value: cdktf.stringToHclTerraform(this._importFilter),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
