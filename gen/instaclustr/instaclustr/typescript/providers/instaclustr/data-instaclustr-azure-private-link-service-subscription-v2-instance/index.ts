// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAzurePrivateLinkServiceSubscriptionV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource Id in Azure for subscription for associated access to the private link service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance#azure_subscription_id DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * ID of the cluster data centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance#cluster_data_centre_id DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance#cluster_data_centre_id}
  */
  readonly clusterDataCentreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance#id DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Message to provide additional details of status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance#reason DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance#reason}
  */
  readonly reason?: string;
  /**
  * The status of subscription for the cluster data centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance#status DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance instaclustr_azure_private_link_service_subscription_v2_instance}
*/
export class DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_azure_private_link_service_subscription_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAzurePrivateLinkServiceSubscriptionV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_azure_private_link_service_subscription_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.34/docs/data-sources/azure_private_link_service_subscription_v2_instance instaclustr_azure_private_link_service_subscription_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAzurePrivateLinkServiceSubscriptionV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAzurePrivateLinkServiceSubscriptionV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_azure_private_link_service_subscription_v2_instance',
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
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._clusterDataCentreId = config.clusterDataCentreId;
    this._id = config.id;
    this._reason = config.reason;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_subscription_id - computed: true, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // cluster_data_centre_id - computed: true, optional: true, required: false
  private _clusterDataCentreId?: string; 
  public get clusterDataCentreId() {
    return this.getStringAttribute('cluster_data_centre_id');
  }
  public set clusterDataCentreId(value: string) {
    this._clusterDataCentreId = value;
  }
  public resetClusterDataCentreId() {
    this._clusterDataCentreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDataCentreIdInput() {
    return this._clusterDataCentreId;
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

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_subscription_id: cdktf.stringToTerraform(this._azureSubscriptionId),
      cluster_data_centre_id: cdktf.stringToTerraform(this._clusterDataCentreId),
      id: cdktf.stringToTerraform(this._id),
      reason: cdktf.stringToTerraform(this._reason),
      status: cdktf.stringToTerraform(this._status),
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
      cluster_data_centre_id: {
        value: cdktf.stringToHclTerraform(this._clusterDataCentreId),
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
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
