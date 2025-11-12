// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The admin SQL user password for the workspace group. If not provided, the server will automatically generate a secure password. Please note that updates to the admin password might take a brief moment to become effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#admin_password WorkspaceGroup#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * The name of the cloud provider used to resolve region. Possible values are 'AWS', 'GCP', and 'Azure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#cloud_provider WorkspaceGroup#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * The deployment type that will be applied to all the workspaces within the workspace group. It can have one of the following values: `PRODUCTION` or `NON-PRODUCTION`. The default value is `PRODUCTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#deployment_type WorkspaceGroup#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * The expiration timestamp of the workspace group. If not specified, the workspace group never expires. Upon expiration, the workspace group is terminated and all its data is lost. Set the expiration time as an RFC3339 UTC timestamp, e.g., "2221-01-02T15:04:05Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#expires_at WorkspaceGroup#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * List of allowed CIDR ranges. An empty list blocks all inbound requests. For unrestricted traffic, use ["0.0.0.0/0"]. Note that updates to firewall ranges may take a brief moment to become effective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#firewall_ranges WorkspaceGroup#firewall_ranges}
  */
  readonly firewallRanges: string[];
  /**
  * Enables deployment across two Availability Zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#high_availability_two_zones WorkspaceGroup#high_availability_two_zones}
  */
  readonly highAvailabilityTwoZones?: boolean | cdktf.IResolvable;
  /**
  * Name of the workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#name WorkspaceGroup#name}
  */
  readonly name: string;
  /**
  * If enabled, the deployment gets the latest features and updates immediately. Suitable only for `NON-PRODUCTION` deployments and cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#opt_in_preview_feature WorkspaceGroup#opt_in_preview_feature}
  */
  readonly optInPreviewFeature?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of the region where the workspace group is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#region_id WorkspaceGroup#region_id}
  */
  readonly regionId?: string;
  /**
  * The region code name used to resolve region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#region_name WorkspaceGroup#region_name}
  */
  readonly regionName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group singlestoredb_workspace_group}
*/
export class WorkspaceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_workspace_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceGroup to import
  * @param importFromId The id of the existing WorkspaceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_workspace_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.6/docs/resources/workspace_group singlestoredb_workspace_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_workspace_group',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.6',
        providerVersionConstraint: '0.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPassword = config.adminPassword;
    this._cloudProvider = config.cloudProvider;
    this._deploymentType = config.deploymentType;
    this._expiresAt = config.expiresAt;
    this._firewallRanges = config.firewallRanges;
    this._highAvailabilityTwoZones = config.highAvailabilityTwoZones;
    this._name = config.name;
    this._optInPreviewFeature = config.optInPreviewFeature;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // firewall_ranges - computed: false, optional: false, required: true
  private _firewallRanges?: string[]; 
  public get firewallRanges() {
    return this.getListAttribute('firewall_ranges');
  }
  public set firewallRanges(value: string[]) {
    this._firewallRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallRangesInput() {
    return this._firewallRanges;
  }

  // high_availability_two_zones - computed: true, optional: true, required: false
  private _highAvailabilityTwoZones?: boolean | cdktf.IResolvable; 
  public get highAvailabilityTwoZones() {
    return this.getBooleanAttribute('high_availability_two_zones');
  }
  public set highAvailabilityTwoZones(value: boolean | cdktf.IResolvable) {
    this._highAvailabilityTwoZones = value;
  }
  public resetHighAvailabilityTwoZones() {
    this._highAvailabilityTwoZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityTwoZonesInput() {
    return this._highAvailabilityTwoZones;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // opt_in_preview_feature - computed: true, optional: true, required: false
  private _optInPreviewFeature?: boolean | cdktf.IResolvable; 
  public get optInPreviewFeature() {
    return this.getBooleanAttribute('opt_in_preview_feature');
  }
  public set optInPreviewFeature(value: boolean | cdktf.IResolvable) {
    this._optInPreviewFeature = value;
  }
  public resetOptInPreviewFeature() {
    this._optInPreviewFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optInPreviewFeatureInput() {
    return this._optInPreviewFeature;
  }

  // outbound_allow_list - computed: true, optional: false, required: false
  public get outboundAllowList() {
    return this.getStringAttribute('outbound_allow_list');
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      firewall_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firewallRanges),
      high_availability_two_zones: cdktf.booleanToTerraform(this._highAvailabilityTwoZones),
      name: cdktf.stringToTerraform(this._name),
      opt_in_preview_feature: cdktf.booleanToTerraform(this._optInPreviewFeature),
      region_id: cdktf.stringToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firewallRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      high_availability_two_zones: {
        value: cdktf.booleanToHclTerraform(this._highAvailabilityTwoZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opt_in_preview_feature: {
        value: cdktf.booleanToHclTerraform(this._optInPreviewFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
