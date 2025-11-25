// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAzureTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure Tenant account type. Value is 'commercial' for Commercial cloud accounts. For GovCloud environments, value can be either 'commercial' or 'gov' depending on the account type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#account_type CloudAzureTenant#account_type}
  */
  readonly accountType?: string;
  /**
  * Azure location where CrowdStrike infrastructure resources (such as Event Hubs) were deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#cs_infra_location CloudAzureTenant#cs_infra_location}
  */
  readonly csInfraLocation?: string;
  /**
  * Azure subscription ID where CrowdStrike infrastructure resources (such as Event Hubs) were deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#cs_infra_subscription_id CloudAzureTenant#cs_infra_subscription_id}
  */
  readonly csInfraSubscriptionId?: string;
  /**
  * The environment added to resources created during onboarding. It will be used if you generate new .tfvars from the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#environment CloudAzureTenant#environment}
  */
  readonly environment?: string;
  /**
  * A list of Azure management group IDs to monitor. All subscriptions under the management groups will be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#management_group_ids CloudAzureTenant#management_group_ids}
  */
  readonly managementGroupIds?: string[];
  /**
  * A list of Microsoft Graph permission IDs to assign to the service principal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#microsoft_graph_permission_ids CloudAzureTenant#microsoft_graph_permission_ids}
  */
  readonly microsoftGraphPermissionIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#realtime_visibility CloudAzureTenant#realtime_visibility}
  */
  readonly realtimeVisibility?: CloudAzureTenantRealtimeVisibility;
  /**
  * The prefix added to resources created during onboarding. It will be used if you generate new .tfvars from the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#resource_name_prefix CloudAzureTenant#resource_name_prefix}
  */
  readonly resourceNamePrefix?: string;
  /**
  * The suffix added to resources created during onboarding. It will be used if you generate new .tfvars from the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#resource_name_suffix CloudAzureTenant#resource_name_suffix}
  */
  readonly resourceNameSuffix?: string;
  /**
  * A list of subscription IDs to register in addition to any subscriptions that are targeted by management_group_ids.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#subscription_ids CloudAzureTenant#subscription_ids}
  */
  readonly subscriptionIds?: string[];
  /**
  * Tags applied to managed resources. This does not effect the registration of the tenant. It will be used if you generate new .tfvars from the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#tags CloudAzureTenant#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Azure Tenant ID to register into Falcon Cloud Security. If subscription_ids and management_group_ids are not provided, then all subscriptions in the tenant are targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#tenant_id CloudAzureTenant#tenant_id}
  */
  readonly tenantId: string;
}
export interface CloudAzureTenantRealtimeVisibility {
  /**
  * Enable real-time visibility and detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#enabled CloudAzureTenant#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cloudAzureTenantRealtimeVisibilityToTerraform(struct?: CloudAzureTenantRealtimeVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudAzureTenantRealtimeVisibilityToHclTerraform(struct?: CloudAzureTenantRealtimeVisibility | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAzureTenantRealtimeVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAzureTenantRealtimeVisibility | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAzureTenantRealtimeVisibility | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant crowdstrike_cloud_azure_tenant}
*/
export class CloudAzureTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_cloud_azure_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAzureTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAzureTenant to import
  * @param importFromId The id of the existing CloudAzureTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAzureTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_cloud_azure_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.48/docs/resources/cloud_azure_tenant crowdstrike_cloud_azure_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAzureTenantConfig
  */
  public constructor(scope: Construct, id: string, config: CloudAzureTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_cloud_azure_tenant',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.48',
        providerVersionConstraint: '0.0.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountType = config.accountType;
    this._csInfraLocation = config.csInfraLocation;
    this._csInfraSubscriptionId = config.csInfraSubscriptionId;
    this._environment = config.environment;
    this._managementGroupIds = config.managementGroupIds;
    this._microsoftGraphPermissionIds = config.microsoftGraphPermissionIds;
    this._realtimeVisibility.internalValue = config.realtimeVisibility;
    this._resourceNamePrefix = config.resourceNamePrefix;
    this._resourceNameSuffix = config.resourceNameSuffix;
    this._subscriptionIds = config.subscriptionIds;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_type - computed: true, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // cs_azure_client_id - computed: true, optional: false, required: false
  public get csAzureClientId() {
    return this.getStringAttribute('cs_azure_client_id');
  }

  // cs_infra_location - computed: false, optional: true, required: false
  private _csInfraLocation?: string; 
  public get csInfraLocation() {
    return this.getStringAttribute('cs_infra_location');
  }
  public set csInfraLocation(value: string) {
    this._csInfraLocation = value;
  }
  public resetCsInfraLocation() {
    this._csInfraLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csInfraLocationInput() {
    return this._csInfraLocation;
  }

  // cs_infra_subscription_id - computed: false, optional: true, required: false
  private _csInfraSubscriptionId?: string; 
  public get csInfraSubscriptionId() {
    return this.getStringAttribute('cs_infra_subscription_id');
  }
  public set csInfraSubscriptionId(value: string) {
    this._csInfraSubscriptionId = value;
  }
  public resetCsInfraSubscriptionId() {
    this._csInfraSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csInfraSubscriptionIdInput() {
    return this._csInfraSubscriptionId;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // management_group_ids - computed: false, optional: true, required: false
  private _managementGroupIds?: string[]; 
  public get managementGroupIds() {
    return this.getListAttribute('management_group_ids');
  }
  public set managementGroupIds(value: string[]) {
    this._managementGroupIds = value;
  }
  public resetManagementGroupIds() {
    this._managementGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdsInput() {
    return this._managementGroupIds;
  }

  // microsoft_graph_permission_ids - computed: false, optional: false, required: true
  private _microsoftGraphPermissionIds?: string[]; 
  public get microsoftGraphPermissionIds() {
    return this.getListAttribute('microsoft_graph_permission_ids');
  }
  public set microsoftGraphPermissionIds(value: string[]) {
    this._microsoftGraphPermissionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftGraphPermissionIdsInput() {
    return this._microsoftGraphPermissionIds;
  }

  // realtime_visibility - computed: true, optional: true, required: false
  private _realtimeVisibility = new CloudAzureTenantRealtimeVisibilityOutputReference(this, "realtime_visibility");
  public get realtimeVisibility() {
    return this._realtimeVisibility;
  }
  public putRealtimeVisibility(value: CloudAzureTenantRealtimeVisibility) {
    this._realtimeVisibility.internalValue = value;
  }
  public resetRealtimeVisibility() {
    this._realtimeVisibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeVisibilityInput() {
    return this._realtimeVisibility.internalValue;
  }

  // resource_name_prefix - computed: true, optional: true, required: false
  private _resourceNamePrefix?: string; 
  public get resourceNamePrefix() {
    return this.getStringAttribute('resource_name_prefix');
  }
  public set resourceNamePrefix(value: string) {
    this._resourceNamePrefix = value;
  }
  public resetResourceNamePrefix() {
    this._resourceNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamePrefixInput() {
    return this._resourceNamePrefix;
  }

  // resource_name_suffix - computed: true, optional: true, required: false
  private _resourceNameSuffix?: string; 
  public get resourceNameSuffix() {
    return this.getStringAttribute('resource_name_suffix');
  }
  public set resourceNameSuffix(value: string) {
    this._resourceNameSuffix = value;
  }
  public resetResourceNameSuffix() {
    this._resourceNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameSuffixInput() {
    return this._resourceNameSuffix;
  }

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[]; 
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }
  public set subscriptionIds(value: string[]) {
    this._subscriptionIds = value;
  }
  public resetSubscriptionIds() {
    this._subscriptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdsInput() {
    return this._subscriptionIds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_type: cdktf.stringToTerraform(this._accountType),
      cs_infra_location: cdktf.stringToTerraform(this._csInfraLocation),
      cs_infra_subscription_id: cdktf.stringToTerraform(this._csInfraSubscriptionId),
      environment: cdktf.stringToTerraform(this._environment),
      management_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementGroupIds),
      microsoft_graph_permission_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._microsoftGraphPermissionIds),
      realtime_visibility: cloudAzureTenantRealtimeVisibilityToTerraform(this._realtimeVisibility.internalValue),
      resource_name_prefix: cdktf.stringToTerraform(this._resourceNamePrefix),
      resource_name_suffix: cdktf.stringToTerraform(this._resourceNameSuffix),
      subscription_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriptionIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_type: {
        value: cdktf.stringToHclTerraform(this._accountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cs_infra_location: {
        value: cdktf.stringToHclTerraform(this._csInfraLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cs_infra_subscription_id: {
        value: cdktf.stringToHclTerraform(this._csInfraSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      microsoft_graph_permission_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._microsoftGraphPermissionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      realtime_visibility: {
        value: cloudAzureTenantRealtimeVisibilityToHclTerraform(this._realtimeVisibility.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAzureTenantRealtimeVisibility",
      },
      resource_name_prefix: {
        value: cdktf.stringToHclTerraform(this._resourceNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name_suffix: {
        value: cdktf.stringToHclTerraform(this._resourceNameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
