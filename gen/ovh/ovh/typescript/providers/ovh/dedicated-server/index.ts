// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#boot_id DedicatedServer#boot_id}
  */
  readonly bootId?: number;
  /**
  * Ipxe script served on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#boot_script DedicatedServer#boot_script}
  */
  readonly bootScript?: string;
  /**
  * OS reinstallation customizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#customizations DedicatedServer#customizations}
  */
  readonly customizations?: DedicatedServerCustomizations;
  /**
  * The display name of your dedicated server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#display_name DedicatedServer#display_name}
  */
  readonly displayName?: string;
  /**
  * Path of the EFI bootloader served on boot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#efi_bootloader_path DedicatedServer#efi_bootloader_path}
  */
  readonly efiBootloaderPath?: string;
  /**
  * Whether we should avoid terminating the service when destroying the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#keep_service_after_destroy DedicatedServer#keep_service_after_destroy}
  */
  readonly keepServiceAfterDestroy?: boolean | cdktf.IResolvable;
  /**
  * Icmp monitoring state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#monitoring DedicatedServer#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Prevent datacenter intervention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#no_intervention DedicatedServer#no_intervention}
  */
  readonly noIntervention?: boolean | cdktf.IResolvable;
  /**
  * Operating system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#os DedicatedServer#os}
  */
  readonly os?: string;
  /**
  * OVH subsidiaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#ovh_subsidiary DedicatedServer#ovh_subsidiary}
  */
  readonly ovhSubsidiary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#plan DedicatedServer#plan}
  */
  readonly plan?: DedicatedServerPlan[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#plan_option DedicatedServer#plan_option}
  */
  readonly planOption?: DedicatedServerPlanOption[] | cdktf.IResolvable;
  /**
  * Defines whether the server should not be reinstalled after creating the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#prevent_install_on_create DedicatedServer#prevent_install_on_create}
  */
  readonly preventInstallOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the server should not be reinstalled when importing the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#prevent_install_on_import DedicatedServer#prevent_install_on_import}
  */
  readonly preventInstallOnImport?: boolean | cdktf.IResolvable;
  /**
  * Arbitrary properties to pass to cloud-init's config drive datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#properties DedicatedServer#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Custom email used to receive rescue credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#rescue_mail DedicatedServer#rescue_mail}
  */
  readonly rescueMail?: string;
  /**
  * Public SSH Key used in the rescue mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#rescue_ssh_key DedicatedServer#rescue_ssh_key}
  */
  readonly rescueSshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#root_device DedicatedServer#root_device}
  */
  readonly rootDevice?: string;
  /**
  * Actions to run before destroying the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#run_actions_before_destroy DedicatedServer#run_actions_before_destroy}
  */
  readonly runActionsBeforeDestroy?: string[];
  /**
  * The internal name of your dedicated server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#service_name DedicatedServer#service_name}
  */
  readonly serviceName?: string;
  /**
  * All states a Dedicated can be in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#state DedicatedServer#state}
  */
  readonly state?: string;
  /**
  * OS reinstallation storage configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#storage DedicatedServer#storage}
  */
  readonly storage?: DedicatedServerStorage[] | cdktf.IResolvable;
}
export interface DedicatedServerCustomizations {
  /**
  * Config Drive MetaData
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#config_drive_metadata DedicatedServer#config_drive_metadata}
  */
  readonly configDriveMetadata?: { [key: string]: string };
  /**
  * Config Drive UserData
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#config_drive_user_data DedicatedServer#config_drive_user_data}
  */
  readonly configDriveUserData?: string;
  /**
  * Path of the EFI bootloader from the OS installed on the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#efi_bootloader_path DedicatedServer#efi_bootloader_path}
  */
  readonly efiBootloaderPath?: string;
  /**
  * Custom hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#hostname DedicatedServer#hostname}
  */
  readonly hostname?: string;
  /**
  * Image HTTP Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#http_headers DedicatedServer#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Image checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#image_check_sum DedicatedServer#image_check_sum}
  */
  readonly imageCheckSum?: string;
  /**
  * Checksum type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#image_check_sum_type DedicatedServer#image_check_sum_type}
  */
  readonly imageCheckSumType?: string;
  /**
  * Image Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#image_type DedicatedServer#image_type}
  */
  readonly imageType?: string;
  /**
  * Image URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#image_url DedicatedServer#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Display Language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#language DedicatedServer#language}
  */
  readonly language?: string;
  /**
  * Post-Installation Script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#post_installation_script DedicatedServer#post_installation_script}
  */
  readonly postInstallationScript?: string;
  /**
  * Post-Installation Script File Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#post_installation_script_extension DedicatedServer#post_installation_script_extension}
  */
  readonly postInstallationScriptExtension?: string;
  /**
  * SSH Public Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#ssh_key DedicatedServer#ssh_key}
  */
  readonly sshKey?: string;
}

export function dedicatedServerCustomizationsToTerraform(struct?: DedicatedServerCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_drive_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configDriveMetadata),
    config_drive_user_data: cdktf.stringToTerraform(struct!.configDriveUserData),
    efi_bootloader_path: cdktf.stringToTerraform(struct!.efiBootloaderPath),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    image_check_sum: cdktf.stringToTerraform(struct!.imageCheckSum),
    image_check_sum_type: cdktf.stringToTerraform(struct!.imageCheckSumType),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    image_url: cdktf.stringToTerraform(struct!.imageUrl),
    language: cdktf.stringToTerraform(struct!.language),
    post_installation_script: cdktf.stringToTerraform(struct!.postInstallationScript),
    post_installation_script_extension: cdktf.stringToTerraform(struct!.postInstallationScriptExtension),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
  }
}


export function dedicatedServerCustomizationsToHclTerraform(struct?: DedicatedServerCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_drive_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configDriveMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_drive_user_data: {
      value: cdktf.stringToHclTerraform(struct!.configDriveUserData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    efi_bootloader_path: {
      value: cdktf.stringToHclTerraform(struct!.efiBootloaderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image_check_sum: {
      value: cdktf.stringToHclTerraform(struct!.imageCheckSum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_check_sum_type: {
      value: cdktf.stringToHclTerraform(struct!.imageCheckSumType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_url: {
      value: cdktf.stringToHclTerraform(struct!.imageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_installation_script: {
      value: cdktf.stringToHclTerraform(struct!.postInstallationScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_installation_script_extension: {
      value: cdktf.stringToHclTerraform(struct!.postInstallationScriptExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerCustomizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerCustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configDriveMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.configDriveMetadata = this._configDriveMetadata;
    }
    if (this._configDriveUserData !== undefined) {
      hasAnyValues = true;
      internalValueResult.configDriveUserData = this._configDriveUserData;
    }
    if (this._efiBootloaderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.efiBootloaderPath = this._efiBootloaderPath;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._imageCheckSum !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageCheckSum = this._imageCheckSum;
    }
    if (this._imageCheckSumType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageCheckSumType = this._imageCheckSumType;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._imageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrl = this._imageUrl;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._postInstallationScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postInstallationScript = this._postInstallationScript;
    }
    if (this._postInstallationScriptExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.postInstallationScriptExtension = this._postInstallationScriptExtension;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerCustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configDriveMetadata = undefined;
      this._configDriveUserData = undefined;
      this._efiBootloaderPath = undefined;
      this._hostname = undefined;
      this._httpHeaders = undefined;
      this._imageCheckSum = undefined;
      this._imageCheckSumType = undefined;
      this._imageType = undefined;
      this._imageUrl = undefined;
      this._language = undefined;
      this._postInstallationScript = undefined;
      this._postInstallationScriptExtension = undefined;
      this._sshKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configDriveMetadata = value.configDriveMetadata;
      this._configDriveUserData = value.configDriveUserData;
      this._efiBootloaderPath = value.efiBootloaderPath;
      this._hostname = value.hostname;
      this._httpHeaders = value.httpHeaders;
      this._imageCheckSum = value.imageCheckSum;
      this._imageCheckSumType = value.imageCheckSumType;
      this._imageType = value.imageType;
      this._imageUrl = value.imageUrl;
      this._language = value.language;
      this._postInstallationScript = value.postInstallationScript;
      this._postInstallationScriptExtension = value.postInstallationScriptExtension;
      this._sshKey = value.sshKey;
    }
  }

  // config_drive_metadata - computed: false, optional: true, required: false
  private _configDriveMetadata?: { [key: string]: string }; 
  public get configDriveMetadata() {
    return this.getStringMapAttribute('config_drive_metadata');
  }
  public set configDriveMetadata(value: { [key: string]: string }) {
    this._configDriveMetadata = value;
  }
  public resetConfigDriveMetadata() {
    this._configDriveMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDriveMetadataInput() {
    return this._configDriveMetadata;
  }

  // config_drive_user_data - computed: false, optional: true, required: false
  private _configDriveUserData?: string; 
  public get configDriveUserData() {
    return this.getStringAttribute('config_drive_user_data');
  }
  public set configDriveUserData(value: string) {
    this._configDriveUserData = value;
  }
  public resetConfigDriveUserData() {
    this._configDriveUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDriveUserDataInput() {
    return this._configDriveUserData;
  }

  // efi_bootloader_path - computed: false, optional: true, required: false
  private _efiBootloaderPath?: string; 
  public get efiBootloaderPath() {
    return this.getStringAttribute('efi_bootloader_path');
  }
  public set efiBootloaderPath(value: string) {
    this._efiBootloaderPath = value;
  }
  public resetEfiBootloaderPath() {
    this._efiBootloaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiBootloaderPathInput() {
    return this._efiBootloaderPath;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // image_check_sum - computed: false, optional: true, required: false
  private _imageCheckSum?: string; 
  public get imageCheckSum() {
    return this.getStringAttribute('image_check_sum');
  }
  public set imageCheckSum(value: string) {
    this._imageCheckSum = value;
  }
  public resetImageCheckSum() {
    this._imageCheckSum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCheckSumInput() {
    return this._imageCheckSum;
  }

  // image_check_sum_type - computed: false, optional: true, required: false
  private _imageCheckSumType?: string; 
  public get imageCheckSumType() {
    return this.getStringAttribute('image_check_sum_type');
  }
  public set imageCheckSumType(value: string) {
    this._imageCheckSumType = value;
  }
  public resetImageCheckSumType() {
    this._imageCheckSumType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCheckSumTypeInput() {
    return this._imageCheckSumType;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // post_installation_script - computed: false, optional: true, required: false
  private _postInstallationScript?: string; 
  public get postInstallationScript() {
    return this.getStringAttribute('post_installation_script');
  }
  public set postInstallationScript(value: string) {
    this._postInstallationScript = value;
  }
  public resetPostInstallationScript() {
    this._postInstallationScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInstallationScriptInput() {
    return this._postInstallationScript;
  }

  // post_installation_script_extension - computed: false, optional: true, required: false
  private _postInstallationScriptExtension?: string; 
  public get postInstallationScriptExtension() {
    return this.getStringAttribute('post_installation_script_extension');
  }
  public set postInstallationScriptExtension(value: string) {
    this._postInstallationScriptExtension = value;
  }
  public resetPostInstallationScriptExtension() {
    this._postInstallationScriptExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInstallationScriptExtensionInput() {
    return this._postInstallationScriptExtension;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }
}
export interface DedicatedServerIam {
}

export function dedicatedServerIamToTerraform(struct?: DedicatedServerIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedServerIamToHclTerraform(struct?: DedicatedServerIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedServerIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }
}
export interface DedicatedServerOrderDetails {
}

export function dedicatedServerOrderDetailsToTerraform(struct?: DedicatedServerOrderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedServerOrderDetailsToHclTerraform(struct?: DedicatedServerOrderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedServerOrderDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerOrderDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerOrderDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detail_type - computed: true, optional: false, required: false
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // order_detail_id - computed: true, optional: false, required: false
  public get orderDetailId() {
    return this.getNumberAttribute('order_detail_id');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getStringAttribute('quantity');
  }
}

export class DedicatedServerOrderDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerOrderDetailsOutputReference {
    return new DedicatedServerOrderDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerOrder {
}

export function dedicatedServerOrderToTerraform(struct?: DedicatedServerOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dedicatedServerOrderToHclTerraform(struct?: DedicatedServerOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DedicatedServerOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // date - computed: true, optional: false, required: false
  public get date() {
    return this.getStringAttribute('date');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DedicatedServerOrderDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
}
export interface DedicatedServerPlanConfiguration {
  /**
  * Label for your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#label DedicatedServer#label}
  */
  readonly label: string;
  /**
  * Value or resource URL on API.OVH.COM of your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#value DedicatedServer#value}
  */
  readonly value: string;
}

export function dedicatedServerPlanConfigurationToTerraform(struct?: DedicatedServerPlanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dedicatedServerPlanConfigurationToHclTerraform(struct?: DedicatedServerPlanConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerPlanConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerPlanConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerPlanConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: true, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DedicatedServerPlanConfigurationList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerPlanConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerPlanConfigurationOutputReference {
    return new DedicatedServerPlanConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#configuration DedicatedServer#configuration}
  */
  readonly configuration?: DedicatedServerPlanConfiguration[] | cdktf.IResolvable;
  /**
  * Duration selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#duration DedicatedServer#duration}
  */
  readonly duration: string;
  /**
  * Cart item to be linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#item_id DedicatedServer#item_id}
  */
  readonly itemId?: number;
  /**
  * Identifier of the option offer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#plan_code DedicatedServer#plan_code}
  */
  readonly planCode: string;
  /**
  * Pricing mode selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#pricing_mode DedicatedServer#pricing_mode}
  */
  readonly pricingMode: string;
  /**
  * Quantity of product desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#quantity DedicatedServer#quantity}
  */
  readonly quantity?: number;
}

export function dedicatedServerPlanToTerraform(struct?: DedicatedServerPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.listMapper(dedicatedServerPlanConfigurationToTerraform, false)(struct!.configuration),
    duration: cdktf.stringToTerraform(struct!.duration),
    item_id: cdktf.numberToTerraform(struct!.itemId),
    plan_code: cdktf.stringToTerraform(struct!.planCode),
    pricing_mode: cdktf.stringToTerraform(struct!.pricingMode),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}


export function dedicatedServerPlanToHclTerraform(struct?: DedicatedServerPlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.listMapperHcl(dedicatedServerPlanConfigurationToHclTerraform, false)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerPlanConfigurationList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item_id: {
      value: cdktf.numberToHclTerraform(struct!.itemId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plan_code: {
      value: cdktf.stringToHclTerraform(struct!.planCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_mode: {
      value: cdktf.stringToHclTerraform(struct!.pricingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerPlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._itemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemId = this._itemId;
    }
    if (this._planCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCode = this._planCode;
    }
    if (this._pricingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingMode = this._pricingMode;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerPlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._duration = undefined;
      this._itemId = undefined;
      this._planCode = undefined;
      this._pricingMode = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._duration = value.duration;
      this._itemId = value.itemId;
      this._planCode = value.planCode;
      this._pricingMode = value.pricingMode;
      this._quantity = value.quantity;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new DedicatedServerPlanConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DedicatedServerPlanConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // item_id - computed: false, optional: true, required: false
  private _itemId?: number; 
  public get itemId() {
    return this.getNumberAttribute('item_id');
  }
  public set itemId(value: number) {
    this._itemId = value;
  }
  public resetItemId() {
    this._itemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // pricing_mode - computed: false, optional: false, required: true
  private _pricingMode?: string; 
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }
  public set pricingMode(value: string) {
    this._pricingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModeInput() {
    return this._pricingMode;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class DedicatedServerPlanList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerPlan[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerPlanOutputReference {
    return new DedicatedServerPlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerPlanOptionConfiguration {
  /**
  * Label for your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#label DedicatedServer#label}
  */
  readonly label: string;
  /**
  * Value or resource URL on API.OVH.COM of your configuration item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#value DedicatedServer#value}
  */
  readonly value: string;
}

export function dedicatedServerPlanOptionConfigurationToTerraform(struct?: DedicatedServerPlanOptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dedicatedServerPlanOptionConfigurationToHclTerraform(struct?: DedicatedServerPlanOptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerPlanOptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerPlanOptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerPlanOptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DedicatedServerPlanOptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerPlanOptionConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerPlanOptionConfigurationOutputReference {
    return new DedicatedServerPlanOptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerPlanOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#configuration DedicatedServer#configuration}
  */
  readonly configuration?: DedicatedServerPlanOptionConfiguration[] | cdktf.IResolvable;
  /**
  * Duration selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#duration DedicatedServer#duration}
  */
  readonly duration: string;
  /**
  * Identifier of the option offer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#plan_code DedicatedServer#plan_code}
  */
  readonly planCode: string;
  /**
  * Pricing mode selected for the purchase of the product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#pricing_mode DedicatedServer#pricing_mode}
  */
  readonly pricingMode: string;
  /**
  * Quantity of product desired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#quantity DedicatedServer#quantity}
  */
  readonly quantity: number;
}

export function dedicatedServerPlanOptionToTerraform(struct?: DedicatedServerPlanOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.listMapper(dedicatedServerPlanOptionConfigurationToTerraform, false)(struct!.configuration),
    duration: cdktf.stringToTerraform(struct!.duration),
    plan_code: cdktf.stringToTerraform(struct!.planCode),
    pricing_mode: cdktf.stringToTerraform(struct!.pricingMode),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}


export function dedicatedServerPlanOptionToHclTerraform(struct?: DedicatedServerPlanOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.listMapperHcl(dedicatedServerPlanOptionConfigurationToHclTerraform, false)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerPlanOptionConfigurationList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_code: {
      value: cdktf.stringToHclTerraform(struct!.planCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pricing_mode: {
      value: cdktf.stringToHclTerraform(struct!.pricingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerPlanOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerPlanOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._planCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCode = this._planCode;
    }
    if (this._pricingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingMode = this._pricingMode;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerPlanOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._duration = undefined;
      this._planCode = undefined;
      this._pricingMode = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._duration = value.duration;
      this._planCode = value.planCode;
      this._pricingMode = value.pricingMode;
      this._quantity = value.quantity;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new DedicatedServerPlanOptionConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DedicatedServerPlanOptionConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // plan_code - computed: false, optional: false, required: true
  private _planCode?: string; 
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
  public set planCode(value: string) {
    this._planCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planCodeInput() {
    return this._planCode;
  }

  // pricing_mode - computed: false, optional: false, required: true
  private _pricingMode?: string; 
  public get pricingMode() {
    return this.getStringAttribute('pricing_mode');
  }
  public set pricingMode(value: string) {
    this._pricingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModeInput() {
    return this._pricingMode;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class DedicatedServerPlanOptionList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerPlanOption[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerPlanOptionOutputReference {
    return new DedicatedServerPlanOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerStorageHardwareRaid {
  /**
  * Number of arrays (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#arrays DedicatedServer#arrays}
  */
  readonly arrays?: number;
  /**
  * Total number of disks in the disk group involved in the hardware raid configuration (all disks of the disk group by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#disks DedicatedServer#disks}
  */
  readonly disks?: number;
  /**
  * Hardware raid type (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#raid_level DedicatedServer#raid_level}
  */
  readonly raidLevel?: number;
  /**
  * Number of disks in the disk group involved in the spare (default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#spares DedicatedServer#spares}
  */
  readonly spares?: number;
}

export function dedicatedServerStorageHardwareRaidToTerraform(struct?: DedicatedServerStorageHardwareRaid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arrays: cdktf.numberToTerraform(struct!.arrays),
    disks: cdktf.numberToTerraform(struct!.disks),
    raid_level: cdktf.numberToTerraform(struct!.raidLevel),
    spares: cdktf.numberToTerraform(struct!.spares),
  }
}


export function dedicatedServerStorageHardwareRaidToHclTerraform(struct?: DedicatedServerStorageHardwareRaid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arrays: {
      value: cdktf.numberToHclTerraform(struct!.arrays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disks: {
      value: cdktf.numberToHclTerraform(struct!.disks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    raid_level: {
      value: cdktf.numberToHclTerraform(struct!.raidLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spares: {
      value: cdktf.numberToHclTerraform(struct!.spares),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStorageHardwareRaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerStorageHardwareRaid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrays !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrays = this._arrays;
    }
    if (this._disks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks;
    }
    if (this._raidLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidLevel = this._raidLevel;
    }
    if (this._spares !== undefined) {
      hasAnyValues = true;
      internalValueResult.spares = this._spares;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStorageHardwareRaid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrays = undefined;
      this._disks = undefined;
      this._raidLevel = undefined;
      this._spares = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrays = value.arrays;
      this._disks = value.disks;
      this._raidLevel = value.raidLevel;
      this._spares = value.spares;
    }
  }

  // arrays - computed: false, optional: true, required: false
  private _arrays?: number; 
  public get arrays() {
    return this.getNumberAttribute('arrays');
  }
  public set arrays(value: number) {
    this._arrays = value;
  }
  public resetArrays() {
    this._arrays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arraysInput() {
    return this._arrays;
  }

  // disks - computed: false, optional: true, required: false
  private _disks?: number; 
  public get disks() {
    return this.getNumberAttribute('disks');
  }
  public set disks(value: number) {
    this._disks = value;
  }
  public resetDisks() {
    this._disks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // raid_level - computed: false, optional: true, required: false
  private _raidLevel?: number; 
  public get raidLevel() {
    return this.getNumberAttribute('raid_level');
  }
  public set raidLevel(value: number) {
    this._raidLevel = value;
  }
  public resetRaidLevel() {
    this._raidLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidLevelInput() {
    return this._raidLevel;
  }

  // spares - computed: false, optional: true, required: false
  private _spares?: number; 
  public get spares() {
    return this.getNumberAttribute('spares');
  }
  public set spares(value: number) {
    this._spares = value;
  }
  public resetSpares() {
    this._spares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparesInput() {
    return this._spares;
  }
}

export class DedicatedServerStorageHardwareRaidList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerStorageHardwareRaid[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerStorageHardwareRaidOutputReference {
    return new DedicatedServerStorageHardwareRaidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerStoragePartitioningLayoutExtrasLv {
  /**
  * Logical volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#name DedicatedServer#name}
  */
  readonly name?: string;
}

export function dedicatedServerStoragePartitioningLayoutExtrasLvToTerraform(struct?: DedicatedServerStoragePartitioningLayoutExtrasLv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dedicatedServerStoragePartitioningLayoutExtrasLvToHclTerraform(struct?: DedicatedServerStoragePartitioningLayoutExtrasLv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStoragePartitioningLayoutExtrasLvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerStoragePartitioningLayoutExtrasLv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStoragePartitioningLayoutExtrasLv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DedicatedServerStoragePartitioningLayoutExtrasZp {
  /**
  * zpool name (generated automatically if not specified, note that multiple ZFS partitions with same zpool names will be configured as multiple datasets belonging to the same zpool if compatible)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#name DedicatedServer#name}
  */
  readonly name?: string;
}

export function dedicatedServerStoragePartitioningLayoutExtrasZpToTerraform(struct?: DedicatedServerStoragePartitioningLayoutExtrasZp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dedicatedServerStoragePartitioningLayoutExtrasZpToHclTerraform(struct?: DedicatedServerStoragePartitioningLayoutExtrasZp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStoragePartitioningLayoutExtrasZpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerStoragePartitioningLayoutExtrasZp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStoragePartitioningLayoutExtrasZp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DedicatedServerStoragePartitioningLayoutExtras {
  /**
  * LVM-specific parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#lv DedicatedServer#lv}
  */
  readonly lv?: DedicatedServerStoragePartitioningLayoutExtrasLv;
  /**
  * ZFS-specific parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#zp DedicatedServer#zp}
  */
  readonly zp?: DedicatedServerStoragePartitioningLayoutExtrasZp;
}

export function dedicatedServerStoragePartitioningLayoutExtrasToTerraform(struct?: DedicatedServerStoragePartitioningLayoutExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lv: dedicatedServerStoragePartitioningLayoutExtrasLvToTerraform(struct!.lv),
    zp: dedicatedServerStoragePartitioningLayoutExtrasZpToTerraform(struct!.zp),
  }
}


export function dedicatedServerStoragePartitioningLayoutExtrasToHclTerraform(struct?: DedicatedServerStoragePartitioningLayoutExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lv: {
      value: dedicatedServerStoragePartitioningLayoutExtrasLvToHclTerraform(struct!.lv),
      isBlock: true,
      type: "struct",
      storageClassType: "DedicatedServerStoragePartitioningLayoutExtrasLv",
    },
    zp: {
      value: dedicatedServerStoragePartitioningLayoutExtrasZpToHclTerraform(struct!.zp),
      isBlock: true,
      type: "struct",
      storageClassType: "DedicatedServerStoragePartitioningLayoutExtrasZp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStoragePartitioningLayoutExtrasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerStoragePartitioningLayoutExtras | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lv = this._lv?.internalValue;
    }
    if (this._zp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zp = this._zp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStoragePartitioningLayoutExtras | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lv.internalValue = undefined;
      this._zp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lv.internalValue = value.lv;
      this._zp.internalValue = value.zp;
    }
  }

  // lv - computed: false, optional: true, required: false
  private _lv = new DedicatedServerStoragePartitioningLayoutExtrasLvOutputReference(this, "lv");
  public get lv() {
    return this._lv;
  }
  public putLv(value: DedicatedServerStoragePartitioningLayoutExtrasLv) {
    this._lv.internalValue = value;
  }
  public resetLv() {
    this._lv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lvInput() {
    return this._lv.internalValue;
  }

  // zp - computed: false, optional: true, required: false
  private _zp = new DedicatedServerStoragePartitioningLayoutExtrasZpOutputReference(this, "zp");
  public get zp() {
    return this._zp;
  }
  public putZp(value: DedicatedServerStoragePartitioningLayoutExtrasZp) {
    this._zp.internalValue = value;
  }
  public resetZp() {
    this._zp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpInput() {
    return this._zp.internalValue;
  }
}
export interface DedicatedServerStoragePartitioningLayout {
  /**
  * Partition extras parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#extras DedicatedServer#extras}
  */
  readonly extras?: DedicatedServerStoragePartitioningLayoutExtras;
  /**
  * File system type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#file_system DedicatedServer#file_system}
  */
  readonly fileSystem: string;
  /**
  * Mount point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#mount_point DedicatedServer#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Software raid type (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#raid_level DedicatedServer#raid_level}
  */
  readonly raidLevel?: number;
  /**
  * Partition size in MiB (default value is 0 which means to fill the disk with that partition)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#size DedicatedServer#size}
  */
  readonly size?: number;
}

export function dedicatedServerStoragePartitioningLayoutToTerraform(struct?: DedicatedServerStoragePartitioningLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extras: dedicatedServerStoragePartitioningLayoutExtrasToTerraform(struct!.extras),
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    raid_level: cdktf.numberToTerraform(struct!.raidLevel),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dedicatedServerStoragePartitioningLayoutToHclTerraform(struct?: DedicatedServerStoragePartitioningLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extras: {
      value: dedicatedServerStoragePartitioningLayoutExtrasToHclTerraform(struct!.extras),
      isBlock: true,
      type: "struct",
      storageClassType: "DedicatedServerStoragePartitioningLayoutExtras",
    },
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point: {
      value: cdktf.stringToHclTerraform(struct!.mountPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raid_level: {
      value: cdktf.numberToHclTerraform(struct!.raidLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStoragePartitioningLayoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerStoragePartitioningLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extras?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extras = this._extras?.internalValue;
    }
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._mountPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoint = this._mountPoint;
    }
    if (this._raidLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.raidLevel = this._raidLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStoragePartitioningLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extras.internalValue = undefined;
      this._fileSystem = undefined;
      this._mountPoint = undefined;
      this._raidLevel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extras.internalValue = value.extras;
      this._fileSystem = value.fileSystem;
      this._mountPoint = value.mountPoint;
      this._raidLevel = value.raidLevel;
      this._size = value.size;
    }
  }

  // extras - computed: false, optional: true, required: false
  private _extras = new DedicatedServerStoragePartitioningLayoutExtrasOutputReference(this, "extras");
  public get extras() {
    return this._extras;
  }
  public putExtras(value: DedicatedServerStoragePartitioningLayoutExtras) {
    this._extras.internalValue = value;
  }
  public resetExtras() {
    this._extras.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extrasInput() {
    return this._extras.internalValue;
  }

  // file_system - computed: false, optional: false, required: true
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // mount_point - computed: false, optional: false, required: true
  private _mountPoint?: string; 
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
  public set mountPoint(value: string) {
    this._mountPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint;
  }

  // raid_level - computed: false, optional: true, required: false
  private _raidLevel?: number; 
  public get raidLevel() {
    return this.getNumberAttribute('raid_level');
  }
  public set raidLevel(value: number) {
    this._raidLevel = value;
  }
  public resetRaidLevel() {
    this._raidLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidLevelInput() {
    return this._raidLevel;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class DedicatedServerStoragePartitioningLayoutList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerStoragePartitioningLayout[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerStoragePartitioningLayoutOutputReference {
    return new DedicatedServerStoragePartitioningLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerStoragePartitioning {
  /**
  * Total number of disks in the disk group involved in the partitioning configuration (all disks of the disk group by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#disks DedicatedServer#disks}
  */
  readonly disks?: number;
  /**
  * Custom partitioning layout (default is the default layout of the operating system's default partitioning scheme)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#layout DedicatedServer#layout}
  */
  readonly layout?: DedicatedServerStoragePartitioningLayout[] | cdktf.IResolvable;
  /**
  * Partitioning scheme (if applicable with selected operating system)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#scheme_name DedicatedServer#scheme_name}
  */
  readonly schemeName?: string;
}

export function dedicatedServerStoragePartitioningToTerraform(struct?: DedicatedServerStoragePartitioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disks: cdktf.numberToTerraform(struct!.disks),
    layout: cdktf.listMapper(dedicatedServerStoragePartitioningLayoutToTerraform, false)(struct!.layout),
    scheme_name: cdktf.stringToTerraform(struct!.schemeName),
  }
}


export function dedicatedServerStoragePartitioningToHclTerraform(struct?: DedicatedServerStoragePartitioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disks: {
      value: cdktf.numberToHclTerraform(struct!.disks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layout: {
      value: cdktf.listMapperHcl(dedicatedServerStoragePartitioningLayoutToHclTerraform, false)(struct!.layout),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerStoragePartitioningLayoutList",
    },
    scheme_name: {
      value: cdktf.stringToHclTerraform(struct!.schemeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStoragePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerStoragePartitioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    if (this._schemeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeName = this._schemeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStoragePartitioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disks = undefined;
      this._layout.internalValue = undefined;
      this._schemeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disks = value.disks;
      this._layout.internalValue = value.layout;
      this._schemeName = value.schemeName;
    }
  }

  // disks - computed: false, optional: true, required: false
  private _disks?: number; 
  public get disks() {
    return this.getNumberAttribute('disks');
  }
  public set disks(value: number) {
    this._disks = value;
  }
  public resetDisks() {
    this._disks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // layout - computed: false, optional: true, required: false
  private _layout = new DedicatedServerStoragePartitioningLayoutList(this, "layout", false);
  public get layout() {
    return this._layout;
  }
  public putLayout(value: DedicatedServerStoragePartitioningLayout[] | cdktf.IResolvable) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }

  // scheme_name - computed: false, optional: true, required: false
  private _schemeName?: string; 
  public get schemeName() {
    return this.getStringAttribute('scheme_name');
  }
  public set schemeName(value: string) {
    this._schemeName = value;
  }
  public resetSchemeName() {
    this._schemeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeNameInput() {
    return this._schemeName;
  }
}
export interface DedicatedServerStorage {
  /**
  * Disk group id (default is 0, meaning automatic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#disk_group_id DedicatedServer#disk_group_id}
  */
  readonly diskGroupId?: number;
  /**
  * Hardware Raid configurations (if not specified, all disks of the chosen disk group id will be configured in JBOD mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#hardware_raid DedicatedServer#hardware_raid}
  */
  readonly hardwareRaid?: DedicatedServerStorageHardwareRaid[] | cdktf.IResolvable;
  /**
  * Partitioning configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#partitioning DedicatedServer#partitioning}
  */
  readonly partitioning?: DedicatedServerStoragePartitioning;
}

export function dedicatedServerStorageToTerraform(struct?: DedicatedServerStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_group_id: cdktf.numberToTerraform(struct!.diskGroupId),
    hardware_raid: cdktf.listMapper(dedicatedServerStorageHardwareRaidToTerraform, false)(struct!.hardwareRaid),
    partitioning: dedicatedServerStoragePartitioningToTerraform(struct!.partitioning),
  }
}


export function dedicatedServerStorageToHclTerraform(struct?: DedicatedServerStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_group_id: {
      value: cdktf.numberToHclTerraform(struct!.diskGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hardware_raid: {
      value: cdktf.listMapperHcl(dedicatedServerStorageHardwareRaidToHclTerraform, false)(struct!.hardwareRaid),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerStorageHardwareRaidList",
    },
    partitioning: {
      value: dedicatedServerStoragePartitioningToHclTerraform(struct!.partitioning),
      isBlock: true,
      type: "struct",
      storageClassType: "DedicatedServerStoragePartitioning",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DedicatedServerStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGroupId = this._diskGroupId;
    }
    if (this._hardwareRaid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareRaid = this._hardwareRaid?.internalValue;
    }
    if (this._partitioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitioning = this._partitioning?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskGroupId = undefined;
      this._hardwareRaid.internalValue = undefined;
      this._partitioning.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskGroupId = value.diskGroupId;
      this._hardwareRaid.internalValue = value.hardwareRaid;
      this._partitioning.internalValue = value.partitioning;
    }
  }

  // disk_group_id - computed: false, optional: true, required: false
  private _diskGroupId?: number; 
  public get diskGroupId() {
    return this.getNumberAttribute('disk_group_id');
  }
  public set diskGroupId(value: number) {
    this._diskGroupId = value;
  }
  public resetDiskGroupId() {
    this._diskGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGroupIdInput() {
    return this._diskGroupId;
  }

  // hardware_raid - computed: false, optional: true, required: false
  private _hardwareRaid = new DedicatedServerStorageHardwareRaidList(this, "hardware_raid", false);
  public get hardwareRaid() {
    return this._hardwareRaid;
  }
  public putHardwareRaid(value: DedicatedServerStorageHardwareRaid[] | cdktf.IResolvable) {
    this._hardwareRaid.internalValue = value;
  }
  public resetHardwareRaid() {
    this._hardwareRaid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareRaidInput() {
    return this._hardwareRaid.internalValue;
  }

  // partitioning - computed: false, optional: true, required: false
  private _partitioning = new DedicatedServerStoragePartitioningOutputReference(this, "partitioning");
  public get partitioning() {
    return this._partitioning;
  }
  public putPartitioning(value: DedicatedServerStoragePartitioning) {
    this._partitioning.internalValue = value;
  }
  public resetPartitioning() {
    this._partitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitioningInput() {
    return this._partitioning.internalValue;
  }
}

export class DedicatedServerStorageList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerStorage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DedicatedServerStorageOutputReference {
    return new DedicatedServerStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server ovh_dedicated_server}
*/
export class DedicatedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedServer to import
  * @param importFromId The id of the existing DedicatedServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server ovh_dedicated_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DedicatedServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootId = config.bootId;
    this._bootScript = config.bootScript;
    this._customizations.internalValue = config.customizations;
    this._displayName = config.displayName;
    this._efiBootloaderPath = config.efiBootloaderPath;
    this._keepServiceAfterDestroy = config.keepServiceAfterDestroy;
    this._monitoring = config.monitoring;
    this._noIntervention = config.noIntervention;
    this._os = config.os;
    this._ovhSubsidiary = config.ovhSubsidiary;
    this._plan.internalValue = config.plan;
    this._planOption.internalValue = config.planOption;
    this._preventInstallOnCreate = config.preventInstallOnCreate;
    this._preventInstallOnImport = config.preventInstallOnImport;
    this._properties = config.properties;
    this._rescueMail = config.rescueMail;
    this._rescueSshKey = config.rescueSshKey;
    this._rootDevice = config.rootDevice;
    this._runActionsBeforeDestroy = config.runActionsBeforeDestroy;
    this._serviceName = config.serviceName;
    this._state = config.state;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // boot_id - computed: true, optional: true, required: false
  private _bootId?: number; 
  public get bootId() {
    return this.getNumberAttribute('boot_id');
  }
  public set bootId(value: number) {
    this._bootId = value;
  }
  public resetBootId() {
    this._bootId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootIdInput() {
    return this._bootId;
  }

  // boot_script - computed: true, optional: true, required: false
  private _bootScript?: string; 
  public get bootScript() {
    return this.getStringAttribute('boot_script');
  }
  public set bootScript(value: string) {
    this._bootScript = value;
  }
  public resetBootScript() {
    this._bootScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootScriptInput() {
    return this._bootScript;
  }

  // commercial_range - computed: true, optional: false, required: false
  public get commercialRange() {
    return this.getStringAttribute('commercial_range');
  }

  // customizations - computed: false, optional: true, required: false
  private _customizations = new DedicatedServerCustomizationsOutputReference(this, "customizations");
  public get customizations() {
    return this._customizations;
  }
  public putCustomizations(value: DedicatedServerCustomizations) {
    this._customizations.internalValue = value;
  }
  public resetCustomizations() {
    this._customizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationsInput() {
    return this._customizations.internalValue;
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // efi_bootloader_path - computed: true, optional: true, required: false
  private _efiBootloaderPath?: string; 
  public get efiBootloaderPath() {
    return this.getStringAttribute('efi_bootloader_path');
  }
  public set efiBootloaderPath(value: string) {
    this._efiBootloaderPath = value;
  }
  public resetEfiBootloaderPath() {
    this._efiBootloaderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiBootloaderPathInput() {
    return this._efiBootloaderPath;
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new DedicatedServerIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // keep_service_after_destroy - computed: false, optional: true, required: false
  private _keepServiceAfterDestroy?: boolean | cdktf.IResolvable; 
  public get keepServiceAfterDestroy() {
    return this.getBooleanAttribute('keep_service_after_destroy');
  }
  public set keepServiceAfterDestroy(value: boolean | cdktf.IResolvable) {
    this._keepServiceAfterDestroy = value;
  }
  public resetKeepServiceAfterDestroy() {
    this._keepServiceAfterDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepServiceAfterDestroyInput() {
    return this._keepServiceAfterDestroy;
  }

  // link_speed - computed: true, optional: false, required: false
  public get linkSpeed() {
    return this.getNumberAttribute('link_speed');
  }

  // monitoring - computed: true, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_upgrade_system - computed: true, optional: false, required: false
  public get newUpgradeSystem() {
    return this.getBooleanAttribute('new_upgrade_system');
  }

  // no_intervention - computed: true, optional: true, required: false
  private _noIntervention?: boolean | cdktf.IResolvable; 
  public get noIntervention() {
    return this.getBooleanAttribute('no_intervention');
  }
  public set noIntervention(value: boolean | cdktf.IResolvable) {
    this._noIntervention = value;
  }
  public resetNoIntervention() {
    this._noIntervention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInterventionInput() {
    return this._noIntervention;
  }

  // order - computed: true, optional: false, required: false
  private _order = new DedicatedServerOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // ovh_subsidiary - computed: false, optional: true, required: false
  private _ovhSubsidiary?: string; 
  public get ovhSubsidiary() {
    return this.getStringAttribute('ovh_subsidiary');
  }
  public set ovhSubsidiary(value: string) {
    this._ovhSubsidiary = value;
  }
  public resetOvhSubsidiary() {
    this._ovhSubsidiary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhSubsidiaryInput() {
    return this._ovhSubsidiary;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new DedicatedServerPlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: DedicatedServerPlan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // plan_option - computed: false, optional: true, required: false
  private _planOption = new DedicatedServerPlanOptionList(this, "plan_option", false);
  public get planOption() {
    return this._planOption;
  }
  public putPlanOption(value: DedicatedServerPlanOption[] | cdktf.IResolvable) {
    this._planOption.internalValue = value;
  }
  public resetPlanOption() {
    this._planOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planOptionInput() {
    return this._planOption.internalValue;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // prevent_install_on_create - computed: false, optional: true, required: false
  private _preventInstallOnCreate?: boolean | cdktf.IResolvable; 
  public get preventInstallOnCreate() {
    return this.getBooleanAttribute('prevent_install_on_create');
  }
  public set preventInstallOnCreate(value: boolean | cdktf.IResolvable) {
    this._preventInstallOnCreate = value;
  }
  public resetPreventInstallOnCreate() {
    this._preventInstallOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInstallOnCreateInput() {
    return this._preventInstallOnCreate;
  }

  // prevent_install_on_import - computed: false, optional: true, required: false
  private _preventInstallOnImport?: boolean | cdktf.IResolvable; 
  public get preventInstallOnImport() {
    return this.getBooleanAttribute('prevent_install_on_import');
  }
  public set preventInstallOnImport(value: boolean | cdktf.IResolvable) {
    this._preventInstallOnImport = value;
  }
  public resetPreventInstallOnImport() {
    this._preventInstallOnImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventInstallOnImportInput() {
    return this._preventInstallOnImport;
  }

  // professional_use - computed: true, optional: false, required: false
  public get professionalUse() {
    return this.getBooleanAttribute('professional_use');
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // rack - computed: true, optional: false, required: false
  public get rack() {
    return this.getStringAttribute('rack');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // rescue_mail - computed: false, optional: true, required: false
  private _rescueMail?: string; 
  public get rescueMail() {
    return this.getStringAttribute('rescue_mail');
  }
  public set rescueMail(value: string) {
    this._rescueMail = value;
  }
  public resetRescueMail() {
    this._rescueMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescueMailInput() {
    return this._rescueMail;
  }

  // rescue_ssh_key - computed: false, optional: true, required: false
  private _rescueSshKey?: string; 
  public get rescueSshKey() {
    return this.getStringAttribute('rescue_ssh_key');
  }
  public set rescueSshKey(value: string) {
    this._rescueSshKey = value;
  }
  public resetRescueSshKey() {
    this._rescueSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescueSshKeyInput() {
    return this._rescueSshKey;
  }

  // reverse - computed: true, optional: false, required: false
  public get reverse() {
    return this.getStringAttribute('reverse');
  }

  // root_device - computed: true, optional: true, required: false
  private _rootDevice?: string; 
  public get rootDevice() {
    return this.getStringAttribute('root_device');
  }
  public set rootDevice(value: string) {
    this._rootDevice = value;
  }
  public resetRootDevice() {
    this._rootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceInput() {
    return this._rootDevice;
  }

  // run_actions_before_destroy - computed: false, optional: true, required: false
  private _runActionsBeforeDestroy?: string[]; 
  public get runActionsBeforeDestroy() {
    return this.getListAttribute('run_actions_before_destroy');
  }
  public set runActionsBeforeDestroy(value: string[]) {
    this._runActionsBeforeDestroy = value;
  }
  public resetRunActionsBeforeDestroy() {
    this._runActionsBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runActionsBeforeDestroyInput() {
    return this._runActionsBeforeDestroy;
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DedicatedServerStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DedicatedServerStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // support_level - computed: true, optional: false, required: false
  public get supportLevel() {
    return this.getStringAttribute('support_level');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_id: cdktf.numberToTerraform(this._bootId),
      boot_script: cdktf.stringToTerraform(this._bootScript),
      customizations: dedicatedServerCustomizationsToTerraform(this._customizations.internalValue),
      display_name: cdktf.stringToTerraform(this._displayName),
      efi_bootloader_path: cdktf.stringToTerraform(this._efiBootloaderPath),
      keep_service_after_destroy: cdktf.booleanToTerraform(this._keepServiceAfterDestroy),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      no_intervention: cdktf.booleanToTerraform(this._noIntervention),
      os: cdktf.stringToTerraform(this._os),
      ovh_subsidiary: cdktf.stringToTerraform(this._ovhSubsidiary),
      plan: cdktf.listMapper(dedicatedServerPlanToTerraform, false)(this._plan.internalValue),
      plan_option: cdktf.listMapper(dedicatedServerPlanOptionToTerraform, false)(this._planOption.internalValue),
      prevent_install_on_create: cdktf.booleanToTerraform(this._preventInstallOnCreate),
      prevent_install_on_import: cdktf.booleanToTerraform(this._preventInstallOnImport),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      rescue_mail: cdktf.stringToTerraform(this._rescueMail),
      rescue_ssh_key: cdktf.stringToTerraform(this._rescueSshKey),
      root_device: cdktf.stringToTerraform(this._rootDevice),
      run_actions_before_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._runActionsBeforeDestroy),
      service_name: cdktf.stringToTerraform(this._serviceName),
      state: cdktf.stringToTerraform(this._state),
      storage: cdktf.listMapper(dedicatedServerStorageToTerraform, false)(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_id: {
        value: cdktf.numberToHclTerraform(this._bootId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_script: {
        value: cdktf.stringToHclTerraform(this._bootScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customizations: {
        value: dedicatedServerCustomizationsToHclTerraform(this._customizations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedServerCustomizations",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      efi_bootloader_path: {
        value: cdktf.stringToHclTerraform(this._efiBootloaderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_service_after_destroy: {
        value: cdktf.booleanToHclTerraform(this._keepServiceAfterDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_intervention: {
        value: cdktf.booleanToHclTerraform(this._noIntervention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovh_subsidiary: {
        value: cdktf.stringToHclTerraform(this._ovhSubsidiary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.listMapperHcl(dedicatedServerPlanToHclTerraform, false)(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerPlanList",
      },
      plan_option: {
        value: cdktf.listMapperHcl(dedicatedServerPlanOptionToHclTerraform, false)(this._planOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerPlanOptionList",
      },
      prevent_install_on_create: {
        value: cdktf.booleanToHclTerraform(this._preventInstallOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_install_on_import: {
        value: cdktf.booleanToHclTerraform(this._preventInstallOnImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rescue_mail: {
        value: cdktf.stringToHclTerraform(this._rescueMail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rescue_ssh_key: {
        value: cdktf.stringToHclTerraform(this._rescueSshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_device: {
        value: cdktf.stringToHclTerraform(this._rootDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_actions_before_destroy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._runActionsBeforeDestroy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.listMapperHcl(dedicatedServerStorageToHclTerraform, false)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
