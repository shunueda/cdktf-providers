// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipFastAzureServiceDiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to look for public or private IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#address_realm DataBigipFastAzureServiceDiscovery#address_realm}
  */
  readonly addressRealm?: string;
  /**
  * Specifies whether you are updating your credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#credential_update DataBigipFastAzureServiceDiscovery#credential_update}
  */
  readonly credentialUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#id DataBigipFastAzureServiceDiscovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#minimum_monitors DataBigipFastAzureServiceDiscovery#minimum_monitors}
  */
  readonly minimumMonitors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#port DataBigipFastAzureServiceDiscovery#port}
  */
  readonly port?: number;
  /**
  * Name of Azure Resource group where Nodes reside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#resource_group DataBigipFastAzureServiceDiscovery#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Id of Azure Subscription Nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#subscription_id DataBigipFastAzureServiceDiscovery#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#tag_key DataBigipFastAzureServiceDiscovery#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#tag_value DataBigipFastAzureServiceDiscovery#tag_value}
  */
  readonly tagValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#type DataBigipFastAzureServiceDiscovery#type}
  */
  readonly type?: string;
  /**
  * Action to take when node cannot be detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#undetectable_action DataBigipFastAzureServiceDiscovery#undetectable_action}
  */
  readonly undetectableAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#update_interval DataBigipFastAzureServiceDiscovery#update_interval}
  */
  readonly updateInterval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery bigip_fast_azure_service_discovery}
*/
export class DataBigipFastAzureServiceDiscovery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_fast_azure_service_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipFastAzureServiceDiscovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipFastAzureServiceDiscovery to import
  * @param importFromId The id of the existing DataBigipFastAzureServiceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipFastAzureServiceDiscovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_fast_azure_service_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/fast_azure_service_discovery bigip_fast_azure_service_discovery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipFastAzureServiceDiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipFastAzureServiceDiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_fast_azure_service_discovery',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressRealm = config.addressRealm;
    this._credentialUpdate = config.credentialUpdate;
    this._id = config.id;
    this._minimumMonitors = config.minimumMonitors;
    this._port = config.port;
    this._resourceGroup = config.resourceGroup;
    this._subscriptionId = config.subscriptionId;
    this._tagKey = config.tagKey;
    this._tagValue = config.tagValue;
    this._type = config.type;
    this._undetectableAction = config.undetectableAction;
    this._updateInterval = config.updateInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_realm - computed: false, optional: true, required: false
  private _addressRealm?: string; 
  public get addressRealm() {
    return this.getStringAttribute('address_realm');
  }
  public set addressRealm(value: string) {
    this._addressRealm = value;
  }
  public resetAddressRealm() {
    this._addressRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRealmInput() {
    return this._addressRealm;
  }

  // azure_sd_json - computed: true, optional: false, required: false
  public get azureSdJson() {
    return this.getStringAttribute('azure_sd_json');
  }

  // credential_update - computed: false, optional: true, required: false
  private _credentialUpdate?: boolean | cdktf.IResolvable; 
  public get credentialUpdate() {
    return this.getBooleanAttribute('credential_update');
  }
  public set credentialUpdate(value: boolean | cdktf.IResolvable) {
    this._credentialUpdate = value;
  }
  public resetCredentialUpdate() {
    this._credentialUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialUpdateInput() {
    return this._credentialUpdate;
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

  // minimum_monitors - computed: false, optional: true, required: false
  private _minimumMonitors?: string; 
  public get minimumMonitors() {
    return this.getStringAttribute('minimum_monitors');
  }
  public set minimumMonitors(value: string) {
    this._minimumMonitors = value;
  }
  public resetMinimumMonitors() {
    this._minimumMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumMonitorsInput() {
    return this._minimumMonitors;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // undetectable_action - computed: false, optional: true, required: false
  private _undetectableAction?: string; 
  public get undetectableAction() {
    return this.getStringAttribute('undetectable_action');
  }
  public set undetectableAction(value: string) {
    this._undetectableAction = value;
  }
  public resetUndetectableAction() {
    this._undetectableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undetectableActionInput() {
    return this._undetectableAction;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_realm: cdktf.stringToTerraform(this._addressRealm),
      credential_update: cdktf.booleanToTerraform(this._credentialUpdate),
      id: cdktf.stringToTerraform(this._id),
      minimum_monitors: cdktf.stringToTerraform(this._minimumMonitors),
      port: cdktf.numberToTerraform(this._port),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      type: cdktf.stringToTerraform(this._type),
      undetectable_action: cdktf.stringToTerraform(this._undetectableAction),
      update_interval: cdktf.stringToTerraform(this._updateInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_realm: {
        value: cdktf.stringToHclTerraform(this._addressRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_update: {
        value: cdktf.booleanToHclTerraform(this._credentialUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_monitors: {
        value: cdktf.stringToHclTerraform(this._minimumMonitors),
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
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undetectable_action: {
        value: cdktf.stringToHclTerraform(this._undetectableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.stringToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
