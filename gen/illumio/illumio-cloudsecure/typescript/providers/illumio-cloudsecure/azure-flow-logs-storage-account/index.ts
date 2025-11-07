// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/azure_flow_logs_storage_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureFlowLogsStorageAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource ID of the Azure Storage Account containing flow logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/azure_flow_logs_storage_account#storage_account_resource_id AzureFlowLogsStorageAccount#storage_account_resource_id}
  */
  readonly storageAccountResourceId: string;
  /**
  * Azure subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/azure_flow_logs_storage_account#subscription_id AzureFlowLogsStorageAccount#subscription_id}
  */
  readonly subscriptionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/azure_flow_logs_storage_account illumio-cloudsecure_azure_flow_logs_storage_account}
*/
export class AzureFlowLogsStorageAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_azure_flow_logs_storage_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureFlowLogsStorageAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureFlowLogsStorageAccount to import
  * @param importFromId The id of the existing AzureFlowLogsStorageAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/azure_flow_logs_storage_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureFlowLogsStorageAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_azure_flow_logs_storage_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.5.3/docs/resources/azure_flow_logs_storage_account illumio-cloudsecure_azure_flow_logs_storage_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureFlowLogsStorageAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureFlowLogsStorageAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_azure_flow_logs_storage_account',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._storageAccountResourceId = config.storageAccountResourceId;
    this._subscriptionId = config.subscriptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_account_resource_id - computed: false, optional: false, required: true
  private _storageAccountResourceId?: string; 
  public get storageAccountResourceId() {
    return this.getStringAttribute('storage_account_resource_id');
  }
  public set storageAccountResourceId(value: string) {
    this._storageAccountResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountResourceIdInput() {
    return this._storageAccountResourceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      storage_account_resource_id: cdktf.stringToTerraform(this._storageAccountResourceId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      storage_account_resource_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountResourceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
