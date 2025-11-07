// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmazonMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of AWS services that needs to be discovered. https://www.site24x7.com/help/api/#aws_discover_services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#aws_discover_services AmazonMonitor#aws_discover_services}
  */
  readonly awsDiscoverServices?: string[];
  /**
  * Rediscovery polling interval for the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#aws_discovery_frequency AmazonMonitor#aws_discovery_frequency}
  */
  readonly awsDiscoveryFrequency?: number;
  /**
  * Display name for the AWS monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#display_name AmazonMonitor#display_name}
  */
  readonly displayName: string;
  /**
  * External ID for the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#external_id AmazonMonitor#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#id AmazonMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#notification_profile_id AmazonMonitor#notification_profile_id}
  */
  readonly notificationProfileId?: string;
  /**
  * Name of the notification profile to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#notification_profile_name AmazonMonitor#notification_profile_name}
  */
  readonly notificationProfileName?: string;
  /**
  * Role ARN for the AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#role_arn AmazonMonitor#role_arn}
  */
  readonly roleArn: string;
  /**
  * List of tag IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#tag_ids AmazonMonitor#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * List of tag names to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#tag_names AmazonMonitor#tag_names}
  */
  readonly tagNames?: string[];
  /**
  * List of Third Party Service IDs to be associated to the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#third_party_service_ids AmazonMonitor#third_party_service_ids}
  */
  readonly thirdPartyServiceIds?: string[];
  /**
  * List of user groups to be notified when the monitor is down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#user_group_ids AmazonMonitor#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * Name of the user groups to be associated with the monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#user_group_names AmazonMonitor#user_group_names}
  */
  readonly userGroupNames?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor site24x7_amazon_monitor}
*/
export class AmazonMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_amazon_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AmazonMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AmazonMonitor to import
  * @param importFromId The id of the existing AmazonMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AmazonMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_amazon_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/amazon_monitor site24x7_amazon_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmazonMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: AmazonMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_amazon_monitor',
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
    this._awsDiscoverServices = config.awsDiscoverServices;
    this._awsDiscoveryFrequency = config.awsDiscoveryFrequency;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._id = config.id;
    this._notificationProfileId = config.notificationProfileId;
    this._notificationProfileName = config.notificationProfileName;
    this._roleArn = config.roleArn;
    this._tagIds = config.tagIds;
    this._tagNames = config.tagNames;
    this._thirdPartyServiceIds = config.thirdPartyServiceIds;
    this._userGroupIds = config.userGroupIds;
    this._userGroupNames = config.userGroupNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_discover_services - computed: false, optional: true, required: false
  private _awsDiscoverServices?: string[]; 
  public get awsDiscoverServices() {
    return this.getListAttribute('aws_discover_services');
  }
  public set awsDiscoverServices(value: string[]) {
    this._awsDiscoverServices = value;
  }
  public resetAwsDiscoverServices() {
    this._awsDiscoverServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDiscoverServicesInput() {
    return this._awsDiscoverServices;
  }

  // aws_discovery_frequency - computed: false, optional: true, required: false
  private _awsDiscoveryFrequency?: number; 
  public get awsDiscoveryFrequency() {
    return this.getNumberAttribute('aws_discovery_frequency');
  }
  public set awsDiscoveryFrequency(value: number) {
    this._awsDiscoveryFrequency = value;
  }
  public resetAwsDiscoveryFrequency() {
    this._awsDiscoveryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDiscoveryFrequencyInput() {
    return this._awsDiscoveryFrequency;
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

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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
      aws_discover_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsDiscoverServices),
      aws_discovery_frequency: cdktf.numberToTerraform(this._awsDiscoveryFrequency),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      notification_profile_id: cdktf.stringToTerraform(this._notificationProfileId),
      notification_profile_name: cdktf.stringToTerraform(this._notificationProfileName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      tag_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagNames),
      third_party_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._thirdPartyServiceIds),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      user_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_discover_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsDiscoverServices),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_discovery_frequency: {
        value: cdktf.numberToHclTerraform(this._awsDiscoveryFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
