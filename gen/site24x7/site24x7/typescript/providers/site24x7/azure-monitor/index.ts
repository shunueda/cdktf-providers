// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatically add newly-added subscriptions (1 for Yes, 0 for No).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#auto_add_subscription AzureMonitor#auto_add_subscription}
  */
  readonly autoAddSubscription?: number;
  /**
  * Tags to exclude Azure resources from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#azure_exclude_tags AzureMonitor#azure_exclude_tags}
  */
  readonly azureExcludeTags?: { [key: string]: string };
  /**
  * Tags to include Azure resources in discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#azure_include_tags AzureMonitor#azure_include_tags}
  */
  readonly azureIncludeTags?: { [key: string]: string };
  /**
  * The Client ID for the Azure Service Principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#client_id AzureMonitor#client_id}
  */
  readonly clientId: string;
  /**
  * The Client Secret associated with the Azure Service Principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#client_secret AzureMonitor#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Rediscovery interval (e.g., 30, 60, 360, etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#discovery_interval AzureMonitor#discovery_interval}
  */
  readonly discoveryInterval?: string;
  /**
  * Display name for the Azure monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#display_name AzureMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#id AzureMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use 0 for Azure Account, 1 for Management Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#management_group_reg AzureMonitor#management_group_reg}
  */
  readonly managementGroupReg: number;
  /**
  * Notification profile associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#notification_profile_id AzureMonitor#notification_profile_id}
  */
  readonly notificationProfileId: string;
  /**
  * List of Azure service types to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#services AzureMonitor#services}
  */
  readonly services: string[];
  /**
  * The Tenant ID associated with the Microsoft Entra ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#tenant_id AzureMonitor#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Threshold profile ID to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#threshold_profile_id AzureMonitor#threshold_profile_id}
  */
  readonly thresholdProfileId: string;
  /**
  * Type of the monitor (should be AZURE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#type AzureMonitor#type}
  */
  readonly type: string;
  /**
  * User group IDs to be notified during outages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#user_group_ids AzureMonitor#user_group_ids}
  */
  readonly userGroupIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor site24x7_azure_monitor}
*/
export class AzureMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_azure_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureMonitor to import
  * @param importFromId The id of the existing AzureMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_azure_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/azure_monitor site24x7_azure_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: AzureMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_azure_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAddSubscription = config.autoAddSubscription;
    this._azureExcludeTags = config.azureExcludeTags;
    this._azureIncludeTags = config.azureIncludeTags;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._discoveryInterval = config.discoveryInterval;
    this._displayName = config.displayName;
    this._id = config.id;
    this._managementGroupReg = config.managementGroupReg;
    this._notificationProfileId = config.notificationProfileId;
    this._services = config.services;
    this._tenantId = config.tenantId;
    this._thresholdProfileId = config.thresholdProfileId;
    this._type = config.type;
    this._userGroupIds = config.userGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_add_subscription - computed: false, optional: true, required: false
  private _autoAddSubscription?: number; 
  public get autoAddSubscription() {
    return this.getNumberAttribute('auto_add_subscription');
  }
  public set autoAddSubscription(value: number) {
    this._autoAddSubscription = value;
  }
  public resetAutoAddSubscription() {
    this._autoAddSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAddSubscriptionInput() {
    return this._autoAddSubscription;
  }

  // azure_exclude_tags - computed: false, optional: true, required: false
  private _azureExcludeTags?: { [key: string]: string }; 
  public get azureExcludeTags() {
    return this.getStringMapAttribute('azure_exclude_tags');
  }
  public set azureExcludeTags(value: { [key: string]: string }) {
    this._azureExcludeTags = value;
  }
  public resetAzureExcludeTags() {
    this._azureExcludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureExcludeTagsInput() {
    return this._azureExcludeTags;
  }

  // azure_include_tags - computed: false, optional: true, required: false
  private _azureIncludeTags?: { [key: string]: string }; 
  public get azureIncludeTags() {
    return this.getStringMapAttribute('azure_include_tags');
  }
  public set azureIncludeTags(value: { [key: string]: string }) {
    this._azureIncludeTags = value;
  }
  public resetAzureIncludeTags() {
    this._azureIncludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureIncludeTagsInput() {
    return this._azureIncludeTags;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // discovery_interval - computed: false, optional: true, required: false
  private _discoveryInterval?: string; 
  public get discoveryInterval() {
    return this.getStringAttribute('discovery_interval');
  }
  public set discoveryInterval(value: string) {
    this._discoveryInterval = value;
  }
  public resetDiscoveryInterval() {
    this._discoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryIntervalInput() {
    return this._discoveryInterval;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // management_group_reg - computed: false, optional: false, required: true
  private _managementGroupReg?: number; 
  public get managementGroupReg() {
    return this.getNumberAttribute('management_group_reg');
  }
  public set managementGroupReg(value: number) {
    this._managementGroupReg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupRegInput() {
    return this._managementGroupReg;
  }

  // notification_profile_id - computed: false, optional: false, required: true
  private _notificationProfileId?: string; 
  public get notificationProfileId() {
    return this.getStringAttribute('notification_profile_id');
  }
  public set notificationProfileId(value: string) {
    this._notificationProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileIdInput() {
    return this._notificationProfileId;
  }

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
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

  // threshold_profile_id - computed: false, optional: false, required: true
  private _thresholdProfileId?: string; 
  public get thresholdProfileId() {
    return this.getStringAttribute('threshold_profile_id');
  }
  public set thresholdProfileId(value: string) {
    this._thresholdProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdProfileIdInput() {
    return this._thresholdProfileId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_group_ids - computed: false, optional: false, required: true
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_add_subscription: cdktf.numberToTerraform(this._autoAddSubscription),
      azure_exclude_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._azureExcludeTags),
      azure_include_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._azureIncludeTags),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      discovery_interval: cdktf.stringToTerraform(this._discoveryInterval),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      management_group_reg: cdktf.numberToTerraform(this._managementGroupReg),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      threshold_profile_id: cdktf.stringToTerraform(this._thresholdProfileId),
      type: cdktf.stringToTerraform(this._type),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_add_subscription: {
        value: cdktf.numberToHclTerraform(this._autoAddSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      azure_exclude_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._azureExcludeTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      azure_include_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._azureIncludeTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discovery_interval: {
        value: cdktf.stringToHclTerraform(this._discoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      management_group_reg: {
        value: cdktf.numberToHclTerraform(this._managementGroupReg),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_profile_id: {
        value: cdktf.stringToHclTerraform(this._thresholdProfileId),
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
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
