// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCouchbaseCapellaAzureNetworkPeerCommandConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#cluster_id DataCouchbaseCapellaAzureNetworkPeerCommand#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#organization_id DataCouchbaseCapellaAzureNetworkPeerCommand#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#project_id DataCouchbaseCapellaAzureNetworkPeerCommand#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#resource_group DataCouchbaseCapellaAzureNetworkPeerCommand#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#subscription_id DataCouchbaseCapellaAzureNetworkPeerCommand#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#tenant_id DataCouchbaseCapellaAzureNetworkPeerCommand#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#vnet_id DataCouchbaseCapellaAzureNetworkPeerCommand#vnet_id}
  */
  readonly vnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#vnet_peering_service_principal DataCouchbaseCapellaAzureNetworkPeerCommand#vnet_peering_service_principal}
  */
  readonly vnetPeeringServicePrincipal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command couchbase-capella_azure_network_peer_command}
*/
export class DataCouchbaseCapellaAzureNetworkPeerCommand extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_azure_network_peer_command";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCouchbaseCapellaAzureNetworkPeerCommand resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCouchbaseCapellaAzureNetworkPeerCommand to import
  * @param importFromId The id of the existing DataCouchbaseCapellaAzureNetworkPeerCommand that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCouchbaseCapellaAzureNetworkPeerCommand to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_azure_network_peer_command", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/data-sources/azure_network_peer_command couchbase-capella_azure_network_peer_command} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCouchbaseCapellaAzureNetworkPeerCommandConfig
  */
  public constructor(scope: Construct, id: string, config: DataCouchbaseCapellaAzureNetworkPeerCommandConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_azure_network_peer_command',
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
    this._resourceGroup = config.resourceGroup;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._vnetId = config.vnetId;
    this._vnetPeeringServicePrincipal = config.vnetPeeringServicePrincipal;
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

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vnet_id - computed: false, optional: false, required: true
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }

  // vnet_peering_service_principal - computed: false, optional: false, required: true
  private _vnetPeeringServicePrincipal?: string; 
  public get vnetPeeringServicePrincipal() {
    return this.getStringAttribute('vnet_peering_service_principal');
  }
  public set vnetPeeringServicePrincipal(value: string) {
    this._vnetPeeringServicePrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetPeeringServicePrincipalInput() {
    return this._vnetPeeringServicePrincipal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vnet_id: cdktf.stringToTerraform(this._vnetId),
      vnet_peering_service_principal: cdktf.stringToTerraform(this._vnetPeeringServicePrincipal),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_id: {
        value: cdktf.stringToHclTerraform(this._vnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_peering_service_principal: {
        value: cdktf.stringToHclTerraform(this._vnetPeeringServicePrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
