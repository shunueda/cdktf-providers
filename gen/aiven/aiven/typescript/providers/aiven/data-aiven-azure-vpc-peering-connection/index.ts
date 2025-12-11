// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenAzureVpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Azure subscription in UUID4 format. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#azure_subscription_id DataAivenAzureVpcPeeringConnection#azure_subscription_id}
  */
  readonly azureSubscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#id DataAivenAzureVpcPeeringConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Azure app that is allowed to create a peering to the Azure Virtual Network (VNet) in UUID4 format. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#peer_azure_app_id DataAivenAzureVpcPeeringConnection#peer_azure_app_id}
  */
  readonly peerAzureAppId: string;
  /**
  * The Azure tenant ID in UUID4 format. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#peer_azure_tenant_id DataAivenAzureVpcPeeringConnection#peer_azure_tenant_id}
  */
  readonly peerAzureTenantId: string;
  /**
  * The name of the Azure resource group associated with the VNet. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#peer_resource_group DataAivenAzureVpcPeeringConnection#peer_resource_group}
  */
  readonly peerResourceGroup: string;
  /**
  * The name of the Azure VNet. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#vnet_name DataAivenAzureVpcPeeringConnection#vnet_name}
  */
  readonly vnetName: string;
  /**
  * The ID of the Aiven VPC. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#vpc_id DataAivenAzureVpcPeeringConnection#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection aiven_azure_vpc_peering_connection}
*/
export class DataAivenAzureVpcPeeringConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_azure_vpc_peering_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenAzureVpcPeeringConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenAzureVpcPeeringConnection to import
  * @param importFromId The id of the existing DataAivenAzureVpcPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenAzureVpcPeeringConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_azure_vpc_peering_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/azure_vpc_peering_connection aiven_azure_vpc_peering_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenAzureVpcPeeringConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenAzureVpcPeeringConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_azure_vpc_peering_connection',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._id = config.id;
    this._peerAzureAppId = config.peerAzureAppId;
    this._peerAzureTenantId = config.peerAzureTenantId;
    this._peerResourceGroup = config.peerResourceGroup;
    this._vnetName = config.vnetName;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_subscription_id - computed: false, optional: false, required: true
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // peer_azure_app_id - computed: false, optional: false, required: true
  private _peerAzureAppId?: string; 
  public get peerAzureAppId() {
    return this.getStringAttribute('peer_azure_app_id');
  }
  public set peerAzureAppId(value: string) {
    this._peerAzureAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAzureAppIdInput() {
    return this._peerAzureAppId;
  }

  // peer_azure_tenant_id - computed: false, optional: false, required: true
  private _peerAzureTenantId?: string; 
  public get peerAzureTenantId() {
    return this.getStringAttribute('peer_azure_tenant_id');
  }
  public set peerAzureTenantId(value: string) {
    this._peerAzureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAzureTenantIdInput() {
    return this._peerAzureTenantId;
  }

  // peer_resource_group - computed: false, optional: false, required: true
  private _peerResourceGroup?: string; 
  public get peerResourceGroup() {
    return this.getStringAttribute('peer_resource_group');
  }
  public set peerResourceGroup(value: string) {
    this._peerResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerResourceGroupInput() {
    return this._peerResourceGroup;
  }

  // peering_connection_id - computed: true, optional: false, required: false
  public get peeringConnectionId() {
    return this.getStringAttribute('peering_connection_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_info - computed: true, optional: false, required: false
  private _stateInfo = new cdktf.StringMap(this, "state_info");
  public get stateInfo() {
    return this._stateInfo;
  }

  // vnet_name - computed: false, optional: false, required: true
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_subscription_id: cdktf.stringToTerraform(this._azureSubscriptionId),
      id: cdktf.stringToTerraform(this._id),
      peer_azure_app_id: cdktf.stringToTerraform(this._peerAzureAppId),
      peer_azure_tenant_id: cdktf.stringToTerraform(this._peerAzureTenantId),
      peer_resource_group: cdktf.stringToTerraform(this._peerResourceGroup),
      vnet_name: cdktf.stringToTerraform(this._vnetName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azureSubscriptionId),
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
      peer_azure_app_id: {
        value: cdktf.stringToHclTerraform(this._peerAzureAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._peerAzureTenantId),
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
      vnet_name: {
        value: cdktf.stringToHclTerraform(this._vnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
