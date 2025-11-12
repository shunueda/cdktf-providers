// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwpAwsOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#awp_centralized_cloud_account_id AwpAwsOnboarding#awp_centralized_cloud_account_id}
  */
  readonly awpCentralizedCloudAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#awp_version AwpAwsOnboarding#awp_version}
  */
  readonly awpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#cloudguard_account_id AwpAwsOnboarding#cloudguard_account_id}
  */
  readonly cloudguardAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#cross_account_role_external_id AwpAwsOnboarding#cross_account_role_external_id}
  */
  readonly crossAccountRoleExternalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#cross_account_role_name AwpAwsOnboarding#cross_account_role_name}
  */
  readonly crossAccountRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#force_delete AwpAwsOnboarding#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#id AwpAwsOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#scan_mode AwpAwsOnboarding#scan_mode}
  */
  readonly scanMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#should_create_policy AwpAwsOnboarding#should_create_policy}
  */
  readonly shouldCreatePolicy?: boolean | cdktf.IResolvable;
  /**
  * agentless_account_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#agentless_account_settings AwpAwsOnboarding#agentless_account_settings}
  */
  readonly agentlessAccountSettings?: AwpAwsOnboardingAgentlessAccountSettings;
}
export interface AwpAwsOnboardingAgentlessAccountSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#custom_tags AwpAwsOnboarding#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#disabled_regions AwpAwsOnboarding#disabled_regions}
  */
  readonly disabledRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#in_account_scanner_vpc AwpAwsOnboarding#in_account_scanner_vpc}
  */
  readonly inAccountScannerVpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#max_concurrent_scans_per_region AwpAwsOnboarding#max_concurrent_scans_per_region}
  */
  readonly maxConcurrentScansPerRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#scan_aws_licensed_images AwpAwsOnboarding#scan_aws_licensed_images}
  */
  readonly scanAwsLicensedImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#scan_machine_interval_in_hours AwpAwsOnboarding#scan_machine_interval_in_hours}
  */
  readonly scanMachineIntervalInHours?: number;
}

export function awpAwsOnboardingAgentlessAccountSettingsToTerraform(struct?: AwpAwsOnboardingAgentlessAccountSettingsOutputReference | AwpAwsOnboardingAgentlessAccountSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    disabled_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledRegions),
    in_account_scanner_vpc: cdktf.stringToTerraform(struct!.inAccountScannerVpc),
    max_concurrent_scans_per_region: cdktf.numberToTerraform(struct!.maxConcurrentScansPerRegion),
    scan_aws_licensed_images: cdktf.booleanToTerraform(struct!.scanAwsLicensedImages),
    scan_machine_interval_in_hours: cdktf.numberToTerraform(struct!.scanMachineIntervalInHours),
  }
}


export function awpAwsOnboardingAgentlessAccountSettingsToHclTerraform(struct?: AwpAwsOnboardingAgentlessAccountSettingsOutputReference | AwpAwsOnboardingAgentlessAccountSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disabled_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disabledRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    in_account_scanner_vpc: {
      value: cdktf.stringToHclTerraform(struct!.inAccountScannerVpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_scans_per_region: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentScansPerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_aws_licensed_images: {
      value: cdktf.booleanToHclTerraform(struct!.scanAwsLicensedImages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scan_machine_interval_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.scanMachineIntervalInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwpAwsOnboardingAgentlessAccountSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwpAwsOnboardingAgentlessAccountSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    if (this._disabledRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledRegions = this._disabledRegions;
    }
    if (this._inAccountScannerVpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.inAccountScannerVpc = this._inAccountScannerVpc;
    }
    if (this._maxConcurrentScansPerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentScansPerRegion = this._maxConcurrentScansPerRegion;
    }
    if (this._scanAwsLicensedImages !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanAwsLicensedImages = this._scanAwsLicensedImages;
    }
    if (this._scanMachineIntervalInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanMachineIntervalInHours = this._scanMachineIntervalInHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwpAwsOnboardingAgentlessAccountSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags = undefined;
      this._disabledRegions = undefined;
      this._inAccountScannerVpc = undefined;
      this._maxConcurrentScansPerRegion = undefined;
      this._scanAwsLicensedImages = undefined;
      this._scanMachineIntervalInHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags = value.customTags;
      this._disabledRegions = value.disabledRegions;
      this._inAccountScannerVpc = value.inAccountScannerVpc;
      this._maxConcurrentScansPerRegion = value.maxConcurrentScansPerRegion;
      this._scanAwsLicensedImages = value.scanAwsLicensedImages;
      this._scanMachineIntervalInHours = value.scanMachineIntervalInHours;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string }; 
  public get customTags() {
    return this.getStringMapAttribute('custom_tags');
  }
  public set customTags(value: { [key: string]: string }) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }

  // disabled_regions - computed: false, optional: true, required: false
  private _disabledRegions?: string[]; 
  public get disabledRegions() {
    return this.getListAttribute('disabled_regions');
  }
  public set disabledRegions(value: string[]) {
    this._disabledRegions = value;
  }
  public resetDisabledRegions() {
    this._disabledRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledRegionsInput() {
    return this._disabledRegions;
  }

  // in_account_scanner_vpc - computed: false, optional: true, required: false
  private _inAccountScannerVpc?: string; 
  public get inAccountScannerVpc() {
    return this.getStringAttribute('in_account_scanner_vpc');
  }
  public set inAccountScannerVpc(value: string) {
    this._inAccountScannerVpc = value;
  }
  public resetInAccountScannerVpc() {
    this._inAccountScannerVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inAccountScannerVpcInput() {
    return this._inAccountScannerVpc;
  }

  // max_concurrent_scans_per_region - computed: false, optional: true, required: false
  private _maxConcurrentScansPerRegion?: number; 
  public get maxConcurrentScansPerRegion() {
    return this.getNumberAttribute('max_concurrent_scans_per_region');
  }
  public set maxConcurrentScansPerRegion(value: number) {
    this._maxConcurrentScansPerRegion = value;
  }
  public resetMaxConcurrentScansPerRegion() {
    this._maxConcurrentScansPerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentScansPerRegionInput() {
    return this._maxConcurrentScansPerRegion;
  }

  // scan_aws_licensed_images - computed: false, optional: true, required: false
  private _scanAwsLicensedImages?: boolean | cdktf.IResolvable; 
  public get scanAwsLicensedImages() {
    return this.getBooleanAttribute('scan_aws_licensed_images');
  }
  public set scanAwsLicensedImages(value: boolean | cdktf.IResolvable) {
    this._scanAwsLicensedImages = value;
  }
  public resetScanAwsLicensedImages() {
    this._scanAwsLicensedImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAwsLicensedImagesInput() {
    return this._scanAwsLicensedImages;
  }

  // scan_machine_interval_in_hours - computed: false, optional: true, required: false
  private _scanMachineIntervalInHours?: number; 
  public get scanMachineIntervalInHours() {
    return this.getNumberAttribute('scan_machine_interval_in_hours');
  }
  public set scanMachineIntervalInHours(value: number) {
    this._scanMachineIntervalInHours = value;
  }
  public resetScanMachineIntervalInHours() {
    this._scanMachineIntervalInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMachineIntervalInHoursInput() {
    return this._scanMachineIntervalInHours;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding dome9_awp_aws_onboarding}
*/
export class AwpAwsOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_awp_aws_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwpAwsOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwpAwsOnboarding to import
  * @param importFromId The id of the existing AwpAwsOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwpAwsOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_awp_aws_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_aws_onboarding dome9_awp_aws_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwpAwsOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: AwpAwsOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_awp_aws_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awpCentralizedCloudAccountId = config.awpCentralizedCloudAccountId;
    this._awpVersion = config.awpVersion;
    this._cloudguardAccountId = config.cloudguardAccountId;
    this._crossAccountRoleExternalId = config.crossAccountRoleExternalId;
    this._crossAccountRoleName = config.crossAccountRoleName;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._scanMode = config.scanMode;
    this._shouldCreatePolicy = config.shouldCreatePolicy;
    this._agentlessAccountSettings.internalValue = config.agentlessAccountSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agentless_protection_enabled - computed: true, optional: false, required: false
  public get agentlessProtectionEnabled() {
    return this.getBooleanAttribute('agentless_protection_enabled');
  }

  // awp_centralized_cloud_account_id - computed: false, optional: true, required: false
  private _awpCentralizedCloudAccountId?: string; 
  public get awpCentralizedCloudAccountId() {
    return this.getStringAttribute('awp_centralized_cloud_account_id');
  }
  public set awpCentralizedCloudAccountId(value: string) {
    this._awpCentralizedCloudAccountId = value;
  }
  public resetAwpCentralizedCloudAccountId() {
    this._awpCentralizedCloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awpCentralizedCloudAccountIdInput() {
    return this._awpCentralizedCloudAccountId;
  }

  // awp_version - computed: false, optional: true, required: false
  private _awpVersion?: string; 
  public get awpVersion() {
    return this.getStringAttribute('awp_version');
  }
  public set awpVersion(value: string) {
    this._awpVersion = value;
  }
  public resetAwpVersion() {
    this._awpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awpVersionInput() {
    return this._awpVersion;
  }

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cloudguard_account_id - computed: false, optional: false, required: true
  private _cloudguardAccountId?: string; 
  public get cloudguardAccountId() {
    return this.getStringAttribute('cloudguard_account_id');
  }
  public set cloudguardAccountId(value: string) {
    this._cloudguardAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudguardAccountIdInput() {
    return this._cloudguardAccountId;
  }

  // cross_account_role_external_id - computed: false, optional: false, required: true
  private _crossAccountRoleExternalId?: string; 
  public get crossAccountRoleExternalId() {
    return this.getStringAttribute('cross_account_role_external_id');
  }
  public set crossAccountRoleExternalId(value: string) {
    this._crossAccountRoleExternalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleExternalIdInput() {
    return this._crossAccountRoleExternalId;
  }

  // cross_account_role_name - computed: false, optional: false, required: true
  private _crossAccountRoleName?: string; 
  public get crossAccountRoleName() {
    return this.getStringAttribute('cross_account_role_name');
  }
  public set crossAccountRoleName(value: string) {
    this._crossAccountRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountRoleNameInput() {
    return this._crossAccountRoleName;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // is_org_onboarding - computed: true, optional: false, required: false
  public get isOrgOnboarding() {
    return this.getBooleanAttribute('is_org_onboarding');
  }

  // missing_awp_private_network_regions - computed: true, optional: false, required: false
  public get missingAwpPrivateNetworkRegions() {
    return this.getListAttribute('missing_awp_private_network_regions');
  }

  // scan_mode - computed: false, optional: false, required: true
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
  }

  // should_create_policy - computed: false, optional: true, required: false
  private _shouldCreatePolicy?: boolean | cdktf.IResolvable; 
  public get shouldCreatePolicy() {
    return this.getBooleanAttribute('should_create_policy');
  }
  public set shouldCreatePolicy(value: boolean | cdktf.IResolvable) {
    this._shouldCreatePolicy = value;
  }
  public resetShouldCreatePolicy() {
    this._shouldCreatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldCreatePolicyInput() {
    return this._shouldCreatePolicy;
  }

  // should_update - computed: true, optional: false, required: false
  public get shouldUpdate() {
    return this.getBooleanAttribute('should_update');
  }

  // agentless_account_settings - computed: false, optional: true, required: false
  private _agentlessAccountSettings = new AwpAwsOnboardingAgentlessAccountSettingsOutputReference(this, "agentless_account_settings");
  public get agentlessAccountSettings() {
    return this._agentlessAccountSettings;
  }
  public putAgentlessAccountSettings(value: AwpAwsOnboardingAgentlessAccountSettings) {
    this._agentlessAccountSettings.internalValue = value;
  }
  public resetAgentlessAccountSettings() {
    this._agentlessAccountSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessAccountSettingsInput() {
    return this._agentlessAccountSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      awp_centralized_cloud_account_id: cdktf.stringToTerraform(this._awpCentralizedCloudAccountId),
      awp_version: cdktf.stringToTerraform(this._awpVersion),
      cloudguard_account_id: cdktf.stringToTerraform(this._cloudguardAccountId),
      cross_account_role_external_id: cdktf.stringToTerraform(this._crossAccountRoleExternalId),
      cross_account_role_name: cdktf.stringToTerraform(this._crossAccountRoleName),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      scan_mode: cdktf.stringToTerraform(this._scanMode),
      should_create_policy: cdktf.booleanToTerraform(this._shouldCreatePolicy),
      agentless_account_settings: awpAwsOnboardingAgentlessAccountSettingsToTerraform(this._agentlessAccountSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      awp_centralized_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._awpCentralizedCloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      awp_version: {
        value: cdktf.stringToHclTerraform(this._awpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudguard_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudguardAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_role_external_id: {
        value: cdktf.stringToHclTerraform(this._crossAccountRoleExternalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_account_role_name: {
        value: cdktf.stringToHclTerraform(this._crossAccountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      scan_mode: {
        value: cdktf.stringToHclTerraform(this._scanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_create_policy: {
        value: cdktf.booleanToHclTerraform(this._shouldCreatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      agentless_account_settings: {
        value: awpAwsOnboardingAgentlessAccountSettingsToHclTerraform(this._agentlessAccountSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwpAwsOnboardingAgentlessAccountSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
