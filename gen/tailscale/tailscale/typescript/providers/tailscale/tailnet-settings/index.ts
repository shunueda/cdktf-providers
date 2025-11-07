// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TailnetSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Link to your external ACL definition or management system. Must be a valid URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#acls_external_link TailnetSettings#acls_external_link}
  */
  readonly aclsExternalLink?: string;
  /**
  * Prevent users from editing policies in the admin console to avoid conflicts with external management workflows like GitOps or Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#acls_externally_managed_on TailnetSettings#acls_externally_managed_on}
  */
  readonly aclsExternallyManagedOn?: boolean | cdktf.IResolvable;
  /**
  * Whether device approval is enabled for the tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#devices_approval_on TailnetSettings#devices_approval_on}
  */
  readonly devicesApprovalOn?: boolean | cdktf.IResolvable;
  /**
  * Whether auto updates are enabled for devices that belong to this tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#devices_auto_updates_on TailnetSettings#devices_auto_updates_on}
  */
  readonly devicesAutoUpdatesOn?: boolean | cdktf.IResolvable;
  /**
  * The key expiry duration for devices on this tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#devices_key_duration_days TailnetSettings#devices_key_duration_days}
  */
  readonly devicesKeyDurationDays?: number;
  /**
  * Whether provisioning of HTTPS certificates is enabled for the tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#https_enabled TailnetSettings#https_enabled}
  */
  readonly httpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#id TailnetSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether network flow logs are enabled for the tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#network_flow_logging_on TailnetSettings#network_flow_logging_on}
  */
  readonly networkFlowLoggingOn?: boolean | cdktf.IResolvable;
  /**
  * Whether identity collection is enabled for device posture integrations for the tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#posture_identity_collection_on TailnetSettings#posture_identity_collection_on}
  */
  readonly postureIdentityCollectionOn?: boolean | cdktf.IResolvable;
  /**
  * Whether regional routing is enabled for the tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#regional_routing_on TailnetSettings#regional_routing_on}
  */
  readonly regionalRoutingOn?: boolean | cdktf.IResolvable;
  /**
  * Whether user approval is enabled for this tailnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#users_approval_on TailnetSettings#users_approval_on}
  */
  readonly usersApprovalOn?: boolean | cdktf.IResolvable;
  /**
  * Which user roles are allowed to join external tailnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#users_role_allowed_to_join_external_tailnet TailnetSettings#users_role_allowed_to_join_external_tailnet}
  */
  readonly usersRoleAllowedToJoinExternalTailnet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings tailscale_tailnet_settings}
*/
export class TailnetSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_tailnet_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TailnetSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TailnetSettings to import
  * @param importFromId The id of the existing TailnetSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TailnetSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_tailnet_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_settings tailscale_tailnet_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TailnetSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TailnetSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tailscale_tailnet_settings',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclsExternalLink = config.aclsExternalLink;
    this._aclsExternallyManagedOn = config.aclsExternallyManagedOn;
    this._devicesApprovalOn = config.devicesApprovalOn;
    this._devicesAutoUpdatesOn = config.devicesAutoUpdatesOn;
    this._devicesKeyDurationDays = config.devicesKeyDurationDays;
    this._httpsEnabled = config.httpsEnabled;
    this._id = config.id;
    this._networkFlowLoggingOn = config.networkFlowLoggingOn;
    this._postureIdentityCollectionOn = config.postureIdentityCollectionOn;
    this._regionalRoutingOn = config.regionalRoutingOn;
    this._usersApprovalOn = config.usersApprovalOn;
    this._usersRoleAllowedToJoinExternalTailnet = config.usersRoleAllowedToJoinExternalTailnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls_external_link - computed: true, optional: true, required: false
  private _aclsExternalLink?: string; 
  public get aclsExternalLink() {
    return this.getStringAttribute('acls_external_link');
  }
  public set aclsExternalLink(value: string) {
    this._aclsExternalLink = value;
  }
  public resetAclsExternalLink() {
    this._aclsExternalLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsExternalLinkInput() {
    return this._aclsExternalLink;
  }

  // acls_externally_managed_on - computed: true, optional: true, required: false
  private _aclsExternallyManagedOn?: boolean | cdktf.IResolvable; 
  public get aclsExternallyManagedOn() {
    return this.getBooleanAttribute('acls_externally_managed_on');
  }
  public set aclsExternallyManagedOn(value: boolean | cdktf.IResolvable) {
    this._aclsExternallyManagedOn = value;
  }
  public resetAclsExternallyManagedOn() {
    this._aclsExternallyManagedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsExternallyManagedOnInput() {
    return this._aclsExternallyManagedOn;
  }

  // devices_approval_on - computed: true, optional: true, required: false
  private _devicesApprovalOn?: boolean | cdktf.IResolvable; 
  public get devicesApprovalOn() {
    return this.getBooleanAttribute('devices_approval_on');
  }
  public set devicesApprovalOn(value: boolean | cdktf.IResolvable) {
    this._devicesApprovalOn = value;
  }
  public resetDevicesApprovalOn() {
    this._devicesApprovalOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesApprovalOnInput() {
    return this._devicesApprovalOn;
  }

  // devices_auto_updates_on - computed: true, optional: true, required: false
  private _devicesAutoUpdatesOn?: boolean | cdktf.IResolvable; 
  public get devicesAutoUpdatesOn() {
    return this.getBooleanAttribute('devices_auto_updates_on');
  }
  public set devicesAutoUpdatesOn(value: boolean | cdktf.IResolvable) {
    this._devicesAutoUpdatesOn = value;
  }
  public resetDevicesAutoUpdatesOn() {
    this._devicesAutoUpdatesOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesAutoUpdatesOnInput() {
    return this._devicesAutoUpdatesOn;
  }

  // devices_key_duration_days - computed: true, optional: true, required: false
  private _devicesKeyDurationDays?: number; 
  public get devicesKeyDurationDays() {
    return this.getNumberAttribute('devices_key_duration_days');
  }
  public set devicesKeyDurationDays(value: number) {
    this._devicesKeyDurationDays = value;
  }
  public resetDevicesKeyDurationDays() {
    this._devicesKeyDurationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesKeyDurationDaysInput() {
    return this._devicesKeyDurationDays;
  }

  // https_enabled - computed: true, optional: true, required: false
  private _httpsEnabled?: boolean | cdktf.IResolvable; 
  public get httpsEnabled() {
    return this.getBooleanAttribute('https_enabled');
  }
  public set httpsEnabled(value: boolean | cdktf.IResolvable) {
    this._httpsEnabled = value;
  }
  public resetHttpsEnabled() {
    this._httpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsEnabledInput() {
    return this._httpsEnabled;
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

  // network_flow_logging_on - computed: true, optional: true, required: false
  private _networkFlowLoggingOn?: boolean | cdktf.IResolvable; 
  public get networkFlowLoggingOn() {
    return this.getBooleanAttribute('network_flow_logging_on');
  }
  public set networkFlowLoggingOn(value: boolean | cdktf.IResolvable) {
    this._networkFlowLoggingOn = value;
  }
  public resetNetworkFlowLoggingOn() {
    this._networkFlowLoggingOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFlowLoggingOnInput() {
    return this._networkFlowLoggingOn;
  }

  // posture_identity_collection_on - computed: true, optional: true, required: false
  private _postureIdentityCollectionOn?: boolean | cdktf.IResolvable; 
  public get postureIdentityCollectionOn() {
    return this.getBooleanAttribute('posture_identity_collection_on');
  }
  public set postureIdentityCollectionOn(value: boolean | cdktf.IResolvable) {
    this._postureIdentityCollectionOn = value;
  }
  public resetPostureIdentityCollectionOn() {
    this._postureIdentityCollectionOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postureIdentityCollectionOnInput() {
    return this._postureIdentityCollectionOn;
  }

  // regional_routing_on - computed: true, optional: true, required: false
  private _regionalRoutingOn?: boolean | cdktf.IResolvable; 
  public get regionalRoutingOn() {
    return this.getBooleanAttribute('regional_routing_on');
  }
  public set regionalRoutingOn(value: boolean | cdktf.IResolvable) {
    this._regionalRoutingOn = value;
  }
  public resetRegionalRoutingOn() {
    this._regionalRoutingOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalRoutingOnInput() {
    return this._regionalRoutingOn;
  }

  // users_approval_on - computed: true, optional: true, required: false
  private _usersApprovalOn?: boolean | cdktf.IResolvable; 
  public get usersApprovalOn() {
    return this.getBooleanAttribute('users_approval_on');
  }
  public set usersApprovalOn(value: boolean | cdktf.IResolvable) {
    this._usersApprovalOn = value;
  }
  public resetUsersApprovalOn() {
    this._usersApprovalOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersApprovalOnInput() {
    return this._usersApprovalOn;
  }

  // users_role_allowed_to_join_external_tailnet - computed: true, optional: true, required: false
  private _usersRoleAllowedToJoinExternalTailnet?: string; 
  public get usersRoleAllowedToJoinExternalTailnet() {
    return this.getStringAttribute('users_role_allowed_to_join_external_tailnet');
  }
  public set usersRoleAllowedToJoinExternalTailnet(value: string) {
    this._usersRoleAllowedToJoinExternalTailnet = value;
  }
  public resetUsersRoleAllowedToJoinExternalTailnet() {
    this._usersRoleAllowedToJoinExternalTailnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersRoleAllowedToJoinExternalTailnetInput() {
    return this._usersRoleAllowedToJoinExternalTailnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acls_external_link: cdktf.stringToTerraform(this._aclsExternalLink),
      acls_externally_managed_on: cdktf.booleanToTerraform(this._aclsExternallyManagedOn),
      devices_approval_on: cdktf.booleanToTerraform(this._devicesApprovalOn),
      devices_auto_updates_on: cdktf.booleanToTerraform(this._devicesAutoUpdatesOn),
      devices_key_duration_days: cdktf.numberToTerraform(this._devicesKeyDurationDays),
      https_enabled: cdktf.booleanToTerraform(this._httpsEnabled),
      id: cdktf.stringToTerraform(this._id),
      network_flow_logging_on: cdktf.booleanToTerraform(this._networkFlowLoggingOn),
      posture_identity_collection_on: cdktf.booleanToTerraform(this._postureIdentityCollectionOn),
      regional_routing_on: cdktf.booleanToTerraform(this._regionalRoutingOn),
      users_approval_on: cdktf.booleanToTerraform(this._usersApprovalOn),
      users_role_allowed_to_join_external_tailnet: cdktf.stringToTerraform(this._usersRoleAllowedToJoinExternalTailnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acls_external_link: {
        value: cdktf.stringToHclTerraform(this._aclsExternalLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acls_externally_managed_on: {
        value: cdktf.booleanToHclTerraform(this._aclsExternallyManagedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      devices_approval_on: {
        value: cdktf.booleanToHclTerraform(this._devicesApprovalOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      devices_auto_updates_on: {
        value: cdktf.booleanToHclTerraform(this._devicesAutoUpdatesOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      devices_key_duration_days: {
        value: cdktf.numberToHclTerraform(this._devicesKeyDurationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_enabled: {
        value: cdktf.booleanToHclTerraform(this._httpsEnabled),
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
      network_flow_logging_on: {
        value: cdktf.booleanToHclTerraform(this._networkFlowLoggingOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      posture_identity_collection_on: {
        value: cdktf.booleanToHclTerraform(this._postureIdentityCollectionOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      regional_routing_on: {
        value: cdktf.booleanToHclTerraform(this._regionalRoutingOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users_approval_on: {
        value: cdktf.booleanToHclTerraform(this._usersApprovalOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      users_role_allowed_to_join_external_tailnet: {
        value: cdktf.stringToHclTerraform(this._usersRoleAllowedToJoinExternalTailnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
