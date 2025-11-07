// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwpAzureOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#centralized_cloud_account_id AwpAzureOnboarding#centralized_cloud_account_id}
  */
  readonly centralizedCloudAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#cloudguard_account_id AwpAzureOnboarding#cloudguard_account_id}
  */
  readonly cloudguardAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#id AwpAzureOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#management_group_id AwpAzureOnboarding#management_group_id}
  */
  readonly managementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#scan_mode AwpAzureOnboarding#scan_mode}
  */
  readonly scanMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#should_create_policy AwpAzureOnboarding#should_create_policy}
  */
  readonly shouldCreatePolicy?: boolean | cdktf.IResolvable;
  /**
  * agentless_account_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#agentless_account_settings AwpAzureOnboarding#agentless_account_settings}
  */
  readonly agentlessAccountSettings?: AwpAzureOnboardingAgentlessAccountSettings;
}
export interface AwpAzureOnboardingAgentlessAccountSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#custom_tags AwpAzureOnboarding#custom_tags}
  */
  readonly customTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#disabled_regions AwpAzureOnboarding#disabled_regions}
  */
  readonly disabledRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#in_account_scanner_vpc AwpAzureOnboarding#in_account_scanner_vpc}
  */
  readonly inAccountScannerVpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#max_concurrent_scans_per_region AwpAzureOnboarding#max_concurrent_scans_per_region}
  */
  readonly maxConcurrentScansPerRegion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#scan_machine_interval_in_hours AwpAzureOnboarding#scan_machine_interval_in_hours}
  */
  readonly scanMachineIntervalInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#skip_function_apps_scan AwpAzureOnboarding#skip_function_apps_scan}
  */
  readonly skipFunctionAppsScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#sse_cmk_encrypted_disks_scan AwpAzureOnboarding#sse_cmk_encrypted_disks_scan}
  */
  readonly sseCmkEncryptedDisksScan?: boolean | cdktf.IResolvable;
}

export function awpAzureOnboardingAgentlessAccountSettingsToTerraform(struct?: AwpAzureOnboardingAgentlessAccountSettingsOutputReference | AwpAzureOnboardingAgentlessAccountSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customTags),
    disabled_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disabledRegions),
    in_account_scanner_vpc: cdktf.stringToTerraform(struct!.inAccountScannerVpc),
    max_concurrent_scans_per_region: cdktf.numberToTerraform(struct!.maxConcurrentScansPerRegion),
    scan_machine_interval_in_hours: cdktf.numberToTerraform(struct!.scanMachineIntervalInHours),
    skip_function_apps_scan: cdktf.booleanToTerraform(struct!.skipFunctionAppsScan),
    sse_cmk_encrypted_disks_scan: cdktf.booleanToTerraform(struct!.sseCmkEncryptedDisksScan),
  }
}


export function awpAzureOnboardingAgentlessAccountSettingsToHclTerraform(struct?: AwpAzureOnboardingAgentlessAccountSettingsOutputReference | AwpAzureOnboardingAgentlessAccountSettings): any {
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
    scan_machine_interval_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.scanMachineIntervalInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_function_apps_scan: {
      value: cdktf.booleanToHclTerraform(struct!.skipFunctionAppsScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sse_cmk_encrypted_disks_scan: {
      value: cdktf.booleanToHclTerraform(struct!.sseCmkEncryptedDisksScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwpAzureOnboardingAgentlessAccountSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwpAzureOnboardingAgentlessAccountSettings | undefined {
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
    if (this._scanMachineIntervalInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanMachineIntervalInHours = this._scanMachineIntervalInHours;
    }
    if (this._skipFunctionAppsScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipFunctionAppsScan = this._skipFunctionAppsScan;
    }
    if (this._sseCmkEncryptedDisksScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCmkEncryptedDisksScan = this._sseCmkEncryptedDisksScan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwpAzureOnboardingAgentlessAccountSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags = undefined;
      this._disabledRegions = undefined;
      this._inAccountScannerVpc = undefined;
      this._maxConcurrentScansPerRegion = undefined;
      this._scanMachineIntervalInHours = undefined;
      this._skipFunctionAppsScan = undefined;
      this._sseCmkEncryptedDisksScan = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags = value.customTags;
      this._disabledRegions = value.disabledRegions;
      this._inAccountScannerVpc = value.inAccountScannerVpc;
      this._maxConcurrentScansPerRegion = value.maxConcurrentScansPerRegion;
      this._scanMachineIntervalInHours = value.scanMachineIntervalInHours;
      this._skipFunctionAppsScan = value.skipFunctionAppsScan;
      this._sseCmkEncryptedDisksScan = value.sseCmkEncryptedDisksScan;
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

  // skip_function_apps_scan - computed: false, optional: true, required: false
  private _skipFunctionAppsScan?: boolean | cdktf.IResolvable; 
  public get skipFunctionAppsScan() {
    return this.getBooleanAttribute('skip_function_apps_scan');
  }
  public set skipFunctionAppsScan(value: boolean | cdktf.IResolvable) {
    this._skipFunctionAppsScan = value;
  }
  public resetSkipFunctionAppsScan() {
    this._skipFunctionAppsScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFunctionAppsScanInput() {
    return this._skipFunctionAppsScan;
  }

  // sse_cmk_encrypted_disks_scan - computed: false, optional: true, required: false
  private _sseCmkEncryptedDisksScan?: boolean | cdktf.IResolvable; 
  public get sseCmkEncryptedDisksScan() {
    return this.getBooleanAttribute('sse_cmk_encrypted_disks_scan');
  }
  public set sseCmkEncryptedDisksScan(value: boolean | cdktf.IResolvable) {
    this._sseCmkEncryptedDisksScan = value;
  }
  public resetSseCmkEncryptedDisksScan() {
    this._sseCmkEncryptedDisksScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCmkEncryptedDisksScanInput() {
    return this._sseCmkEncryptedDisksScan;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding dome9_awp_azure_onboarding}
*/
export class AwpAzureOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_awp_azure_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwpAzureOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwpAzureOnboarding to import
  * @param importFromId The id of the existing AwpAzureOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwpAzureOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_awp_azure_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/awp_azure_onboarding dome9_awp_azure_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwpAzureOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: AwpAzureOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_awp_azure_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._centralizedCloudAccountId = config.centralizedCloudAccountId;
    this._cloudguardAccountId = config.cloudguardAccountId;
    this._id = config.id;
    this._managementGroupId = config.managementGroupId;
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

  // centralized_cloud_account_id - computed: false, optional: true, required: false
  private _centralizedCloudAccountId?: string; 
  public get centralizedCloudAccountId() {
    return this.getStringAttribute('centralized_cloud_account_id');
  }
  public set centralizedCloudAccountId(value: string) {
    this._centralizedCloudAccountId = value;
  }
  public resetCentralizedCloudAccountId() {
    this._centralizedCloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralizedCloudAccountIdInput() {
    return this._centralizedCloudAccountId;
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

  // management_group_id - computed: false, optional: true, required: false
  private _managementGroupId?: string; 
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  public resetManagementGroupId() {
    this._managementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId;
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
  private _agentlessAccountSettings = new AwpAzureOnboardingAgentlessAccountSettingsOutputReference(this, "agentless_account_settings");
  public get agentlessAccountSettings() {
    return this._agentlessAccountSettings;
  }
  public putAgentlessAccountSettings(value: AwpAzureOnboardingAgentlessAccountSettings) {
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
      centralized_cloud_account_id: cdktf.stringToTerraform(this._centralizedCloudAccountId),
      cloudguard_account_id: cdktf.stringToTerraform(this._cloudguardAccountId),
      id: cdktf.stringToTerraform(this._id),
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      scan_mode: cdktf.stringToTerraform(this._scanMode),
      should_create_policy: cdktf.booleanToTerraform(this._shouldCreatePolicy),
      agentless_account_settings: awpAzureOnboardingAgentlessAccountSettingsToTerraform(this._agentlessAccountSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      centralized_cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._centralizedCloudAccountId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_group_id: {
        value: cdktf.stringToHclTerraform(this._managementGroupId),
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
        value: awpAzureOnboardingAgentlessAccountSettingsToHclTerraform(this._agentlessAccountSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwpAzureOnboardingAgentlessAccountSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
