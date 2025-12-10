// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAzureVnetPeerV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Cluster Data Centre.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#cdc_id DataInstaclustrAzureVnetPeerV2Instance#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Resource Group Name of the Data Centre Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#data_centre_resource_group DataInstaclustrAzureVnetPeerV2Instance#data_centre_resource_group}
  */
  readonly dataCentreResourceGroup?: string;
  /**
  * Subscription ID of the Data Centre Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#data_centre_subscription_id DataInstaclustrAzureVnetPeerV2Instance#data_centre_subscription_id}
  */
  readonly dataCentreSubscriptionId?: string;
  /**
  * The name of the Data Centre Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#data_centre_virtual_network_name DataInstaclustrAzureVnetPeerV2Instance#data_centre_virtual_network_name}
  */
  readonly dataCentreVirtualNetworkName?: string;
  /**
  * Reason for Peering Connection Failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#failure_reason DataInstaclustrAzureVnetPeerV2Instance#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#id DataInstaclustrAzureVnetPeerV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name of the Vpc Peering Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#name DataInstaclustrAzureVnetPeerV2Instance#name}
  */
  readonly name?: string;
  /**
  * ID of the Active Directory Object to give peering permissions to, required for cross subscription peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#peer_ad_object_id DataInstaclustrAzureVnetPeerV2Instance#peer_ad_object_id}
  */
  readonly peerAdObjectId?: string;
  /**
  * Resource Group Name of the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#peer_resource_group DataInstaclustrAzureVnetPeerV2Instance#peer_resource_group}
  */
  readonly peerResourceGroup?: string;
  /**
  * The subnets for the peering VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#peer_subnets DataInstaclustrAzureVnetPeerV2Instance#peer_subnets}
  */
  readonly peerSubnets?: string[];
  /**
  * Subscription ID of the Virtual Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#peer_subscription_id DataInstaclustrAzureVnetPeerV2Instance#peer_subscription_id}
  */
  readonly peerSubscriptionId?: string;
  /**
  * The name of the VPC Network you wish to peer to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#peer_virtual_network_name DataInstaclustrAzureVnetPeerV2Instance#peer_virtual_network_name}
  */
  readonly peerVirtualNetworkName?: string;
  /**
  * Status of the VPC Peering Connection. Values can be `GENESIS`, `PROVISIONING`, `FAILED`, `INACTIVE`, `CONNECTED` or `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#status_code DataInstaclustrAzureVnetPeerV2Instance#status_code}
  */
  readonly statusCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance instaclustr_azure_vnet_peer_v2_instance}
*/
export class DataInstaclustrAzureVnetPeerV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_azure_vnet_peer_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAzureVnetPeerV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAzureVnetPeerV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAzureVnetPeerV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAzureVnetPeerV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_azure_vnet_peer_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_vnet_peer_v2_instance instaclustr_azure_vnet_peer_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAzureVnetPeerV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAzureVnetPeerV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_azure_vnet_peer_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.34',
        providerVersionConstraint: '2.1.34'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cdcId = config.cdcId;
    this._dataCentreResourceGroup = config.dataCentreResourceGroup;
    this._dataCentreSubscriptionId = config.dataCentreSubscriptionId;
    this._dataCentreVirtualNetworkName = config.dataCentreVirtualNetworkName;
    this._failureReason = config.failureReason;
    this._id = config.id;
    this._name = config.name;
    this._peerAdObjectId = config.peerAdObjectId;
    this._peerResourceGroup = config.peerResourceGroup;
    this._peerSubnets = config.peerSubnets;
    this._peerSubscriptionId = config.peerSubscriptionId;
    this._peerVirtualNetworkName = config.peerVirtualNetworkName;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // data_centre_resource_group - computed: true, optional: true, required: false
  private _dataCentreResourceGroup?: string; 
  public get dataCentreResourceGroup() {
    return this.getStringAttribute('data_centre_resource_group');
  }
  public set dataCentreResourceGroup(value: string) {
    this._dataCentreResourceGroup = value;
  }
  public resetDataCentreResourceGroup() {
    this._dataCentreResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreResourceGroupInput() {
    return this._dataCentreResourceGroup;
  }

  // data_centre_subscription_id - computed: true, optional: true, required: false
  private _dataCentreSubscriptionId?: string; 
  public get dataCentreSubscriptionId() {
    return this.getStringAttribute('data_centre_subscription_id');
  }
  public set dataCentreSubscriptionId(value: string) {
    this._dataCentreSubscriptionId = value;
  }
  public resetDataCentreSubscriptionId() {
    this._dataCentreSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreSubscriptionIdInput() {
    return this._dataCentreSubscriptionId;
  }

  // data_centre_virtual_network_name - computed: true, optional: true, required: false
  private _dataCentreVirtualNetworkName?: string; 
  public get dataCentreVirtualNetworkName() {
    return this.getStringAttribute('data_centre_virtual_network_name');
  }
  public set dataCentreVirtualNetworkName(value: string) {
    this._dataCentreVirtualNetworkName = value;
  }
  public resetDataCentreVirtualNetworkName() {
    this._dataCentreVirtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreVirtualNetworkNameInput() {
    return this._dataCentreVirtualNetworkName;
  }

  // failure_reason - computed: true, optional: true, required: false
  private _failureReason?: string; 
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }
  public set failureReason(value: string) {
    this._failureReason = value;
  }
  public resetFailureReason() {
    this._failureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peer_ad_object_id - computed: true, optional: true, required: false
  private _peerAdObjectId?: string; 
  public get peerAdObjectId() {
    return this.getStringAttribute('peer_ad_object_id');
  }
  public set peerAdObjectId(value: string) {
    this._peerAdObjectId = value;
  }
  public resetPeerAdObjectId() {
    this._peerAdObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAdObjectIdInput() {
    return this._peerAdObjectId;
  }

  // peer_resource_group - computed: true, optional: true, required: false
  private _peerResourceGroup?: string; 
  public get peerResourceGroup() {
    return this.getStringAttribute('peer_resource_group');
  }
  public set peerResourceGroup(value: string) {
    this._peerResourceGroup = value;
  }
  public resetPeerResourceGroup() {
    this._peerResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerResourceGroupInput() {
    return this._peerResourceGroup;
  }

  // peer_subnets - computed: true, optional: true, required: false
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // peer_subscription_id - computed: true, optional: true, required: false
  private _peerSubscriptionId?: string; 
  public get peerSubscriptionId() {
    return this.getStringAttribute('peer_subscription_id');
  }
  public set peerSubscriptionId(value: string) {
    this._peerSubscriptionId = value;
  }
  public resetPeerSubscriptionId() {
    this._peerSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubscriptionIdInput() {
    return this._peerSubscriptionId;
  }

  // peer_virtual_network_name - computed: true, optional: true, required: false
  private _peerVirtualNetworkName?: string; 
  public get peerVirtualNetworkName() {
    return this.getStringAttribute('peer_virtual_network_name');
  }
  public set peerVirtualNetworkName(value: string) {
    this._peerVirtualNetworkName = value;
  }
  public resetPeerVirtualNetworkName() {
    this._peerVirtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVirtualNetworkNameInput() {
    return this._peerVirtualNetworkName;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdc_id: cdktf.stringToTerraform(this._cdcId),
      data_centre_resource_group: cdktf.stringToTerraform(this._dataCentreResourceGroup),
      data_centre_subscription_id: cdktf.stringToTerraform(this._dataCentreSubscriptionId),
      data_centre_virtual_network_name: cdktf.stringToTerraform(this._dataCentreVirtualNetworkName),
      failure_reason: cdktf.stringToTerraform(this._failureReason),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      peer_ad_object_id: cdktf.stringToTerraform(this._peerAdObjectId),
      peer_resource_group: cdktf.stringToTerraform(this._peerResourceGroup),
      peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerSubnets),
      peer_subscription_id: cdktf.stringToTerraform(this._peerSubscriptionId),
      peer_virtual_network_name: cdktf.stringToTerraform(this._peerVirtualNetworkName),
      status_code: cdktf.stringToTerraform(this._statusCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdc_id: {
        value: cdktf.stringToHclTerraform(this._cdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre_resource_group: {
        value: cdktf.stringToHclTerraform(this._dataCentreResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre_subscription_id: {
        value: cdktf.stringToHclTerraform(this._dataCentreSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_centre_virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._dataCentreVirtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_reason: {
        value: cdktf.stringToHclTerraform(this._failureReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      peer_ad_object_id: {
        value: cdktf.stringToHclTerraform(this._peerAdObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_resource_group: {
        value: cdktf.stringToHclTerraform(this._peerResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_subscription_id: {
        value: cdktf.stringToHclTerraform(this._peerSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._peerVirtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_code: {
        value: cdktf.stringToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
