// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client email for GCP Service Account authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#client_email GcpMonitor#client_email}
  */
  readonly clientEmail: string;
  /**
  * Display name for the GCP monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#display_name GcpMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * List of GCP services that need to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#gcp_discover_services GcpMonitor#gcp_discover_services}
  */
  readonly gcpDiscoverServices?: number[];
  /**
  * Rediscovery polling interval for the GCP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#gcp_discovery_frequency GcpMonitor#gcp_discovery_frequency}
  */
  readonly gcpDiscoveryFrequency?: string;
  /**
  * Onboarding Method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#gcp_registration_method GcpMonitor#gcp_registration_method}
  */
  readonly gcpRegistrationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#id GcpMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#notification_profile_id GcpMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#notification_profile_name GcpMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * Private key for GCP Service Account authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#private_key GcpMonitor#private_key}
  */
  readonly privateKey: string;
  /**
  * Project ID of the GCP account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#project_id GcpMonitor#project_id}
  */
  readonly projectId: string;
  /**
  * Preferred rediscovery frequency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#stop_rediscover_option GcpMonitor#stop_rediscover_option}
  */
  readonly stopRediscoverOption: number;
  /**
  * List of tag IDs to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#tag_ids GcpMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#tag_names GcpMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#third_party_service_ids GcpMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#user_group_ids GcpMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#user_group_names GcpMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor site24x7_gcp_monitor}
*/
export class GcpMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_gcp_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpMonitor to import
  * @param importFromId The id of the existing GcpMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_gcp_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/gcp_monitor site24x7_gcp_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: GcpMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_gcp_monitor',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientEmail = config.clientEmail;
    this._displayName = config.displayName;
    this._gcpDiscoverServices = config.gcpDiscoverServices;
    this._gcpDiscoveryFrequency = config.gcpDiscoveryFrequency;
    this._gcpRegistrationMethod = config.gcpRegistrationMethod;
    this._id = config.id;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._privateKey = config.privateKey;
    this._projectId = config.projectId;
    this._stopRediscoverOption = config.stopRediscoverOption;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_email - computed: false, optional: false, required: true
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
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

  // gcp_discover_services - computed: false, optional: true, required: false
  private _gcpDiscoverServices?: number[]; 
  public get gcpDiscoverServices() {
    return this.getNumberListAttribute('gcp_discover_services');
  }
  public set gcpDiscoverServices(value: number[]) {
    this._gcpDiscoverServices = value;
  }
  public resetGcpDiscoverServices() {
    this._gcpDiscoverServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpDiscoverServicesInput() {
    return this._gcpDiscoverServices;
  }

  // gcp_discovery_frequency - computed: false, optional: true, required: false
  private _gcpDiscoveryFrequency?: string; 
  public get gcpDiscoveryFrequency() {
    return this.getStringAttribute('gcp_discovery_frequency');
  }
  public set gcpDiscoveryFrequency(value: string) {
    this._gcpDiscoveryFrequency = value;
  }
  public resetGcpDiscoveryFrequency() {
    this._gcpDiscoveryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpDiscoveryFrequencyInput() {
    return this._gcpDiscoveryFrequency;
  }

  // gcp_registration_method - computed: false, optional: true, required: false
  private _gcpRegistrationMethod?: string; 
  public get gcpRegistrationMethod() {
    return this.getStringAttribute('gcp_registration_method');
  }
  public set gcpRegistrationMethod(value: string) {
    this._gcpRegistrationMethod = value;
  }
  public resetGcpRegistrationMethod() {
    this._gcpRegistrationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpRegistrationMethodInput() {
    return this._gcpRegistrationMethod;
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

  // notification_profile_id - computed: true, optional: true, required: false
  private _notificationProfileId?: string; 
  public get notificationProfileId() {
    return this.getStringAttribute('notification_profile_id');
  }
  public set notificationProfileId(value: string) {
    this._notificationProfileId = value;
  }
  public resetNotificationProfileId() {
    this._notificationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileIdInput() {
    return this._notificationProfileId;
  }

  // notification_profile_name - computed: false, optional: true, required: false
  private _notificationProfileName?: string; 
  public get notificationProfileName() {
    return this.getStringAttribute('notification_profile_name');
  }
  public set notificationProfileName(value: string) {
    this._notificationProfileName = value;
  }
  public resetNotificationProfileName() {
    this._notificationProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProfileNameInput() {
    return this._notificationProfileName;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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

  // stop_rediscover_option - computed: false, optional: false, required: true
  private _stopRediscoverOption?: number; 
  public get stopRediscoverOption() {
    return this.getNumberAttribute('stop_rediscover_option');
  }
  public set stopRediscoverOption(value: number) {
    this._stopRediscoverOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stopRediscoverOptionInput() {
    return this._stopRediscoverOption;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_ids'));
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // tag_names - computed: false, optional: true, required: false
  private _tagNames?: string[]; 
  public get tagNames() {
    return this.getListAttribute('tag_names');
  }
  public set tagNames(value: string[]) {
    this._tagNames = value;
  }
  public resetTagNames() {
    this._tagNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamesInput() {
    return this._tagNames;
  }

  // third_party_service_ids - computed: false, optional: true, required: false
  private _thirdPartyServiceIds?: string[]; 
  public get thirdPartyServiceIds() {
    return this.getListAttribute('third_party_service_ids');
  }
  public set thirdPartyServiceIds(value: string[]) {
    this._thirdPartyServiceIds = value;
  }
  public resetThirdPartyServiceIds() {
    this._thirdPartyServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServiceIdsInput() {
    return this._thirdPartyServiceIds;
  }

  // user_group_ids - computed: true, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // user_group_names - computed: false, optional: true, required: false
  private _userGroupNames?: string[]; 
  public get userGroupNames() {
    return this.getListAttribute('user_group_names');
  }
  public set userGroupNames(value: string[]) {
    this._userGroupNames = value;
  }
  public resetUserGroupNames() {
    this._userGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupNamesInput() {
    return this._userGroupNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_email: cdktf.stringToTerraform(this._clientEmail),
      display_name: cdktf.stringToTerraform(this._displayName),
      gcp_discover_services: cdktf.listMapper(cdktf.numberToTerraform, false)(this._gcpDiscoverServices),
      gcp_discovery_frequency: cdktf.stringToTerraform(this._gcpDiscoveryFrequency),
      gcp_registration_method: cdktf.stringToTerraform(this._gcpRegistrationMethod),
      id: cdktf.stringToTerraform(this._id),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      private_key: cdktf.stringToTerraform(this._privateKey),
      project_id: cdktf.stringToTerraform(this._projectId),
      stop_rediscover_option: cdktf.numberToTerraform(this._stopRediscoverOption),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_email: {
        value: cdktf.stringToHclTerraform(this._clientEmail),
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
      gcp_discover_services: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._gcpDiscoverServices),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      gcp_discovery_frequency: {
        value: cdktf.stringToHclTerraform(this._gcpDiscoveryFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_registration_method: {
        value: cdktf.stringToHclTerraform(this._gcpRegistrationMethod),
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
      notification_profile_id: {
        value: cdktf.stringToHclTerraform(this._notificationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_profile_name: {
        value: cdktf.stringToHclTerraform(this._notificationProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
      stop_rediscover_option: {
        value: cdktf.numberToHclTerraform(this._stopRediscoverOption),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      third_party_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._thirdPartyServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
