// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedServerReinstallTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, reboot the server on the specified boot id during destroy phase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#bootid_on_destroy DedicatedServerReinstallTask#bootid_on_destroy}
  */
  readonly bootidOnDestroy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#id DedicatedServerReinstallTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Operating System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#os DedicatedServerReinstallTask#os}
  */
  readonly os: string;
  /**
  * Attribute 'properties' is deprecated and has no effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#properties DedicatedServerReinstallTask#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The internal name of your dedicated server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#service_name DedicatedServerReinstallTask#service_name}
  */
  readonly serviceName: string;
  /**
  * customizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#customizations DedicatedServerReinstallTask#customizations}
  */
  readonly customizations?: DedicatedServerReinstallTaskCustomizations;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#storage DedicatedServerReinstallTask#storage}
  */
  readonly storage?: DedicatedServerReinstallTaskStorage[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#timeouts DedicatedServerReinstallTask#timeouts}
  */
  readonly timeouts?: DedicatedServerReinstallTaskTimeouts;
}
export interface DedicatedServerReinstallTaskCustomizations {
  /**
  * Config Drive MetaData
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#config_drive_metadata DedicatedServerReinstallTask#config_drive_metadata}
  */
  readonly configDriveMetadata?: { [key: string]: string };
  /**
  * Config Drive UserData
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#config_drive_user_data DedicatedServerReinstallTask#config_drive_user_data}
  */
  readonly configDriveUserData?: string;
  /**
  * EFI bootloader path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#efi_bootloader_path DedicatedServerReinstallTask#efi_bootloader_path}
  */
  readonly efiBootloaderPath?: string;
  /**
  * Custom hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#hostname DedicatedServerReinstallTask#hostname}
  */
  readonly hostname?: string;
  /**
  * Image HTTP Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#http_headers DedicatedServerReinstallTask#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Image checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#image_check_sum DedicatedServerReinstallTask#image_check_sum}
  */
  readonly imageCheckSum?: string;
  /**
  * Checksum type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#image_check_sum_type DedicatedServerReinstallTask#image_check_sum_type}
  */
  readonly imageCheckSumType?: string;
  /**
  * Image Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#image_type DedicatedServerReinstallTask#image_type}
  */
  readonly imageType?: string;
  /**
  * Image URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#image_url DedicatedServerReinstallTask#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Display Language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#language DedicatedServerReinstallTask#language}
  */
  readonly language?: string;
  /**
  * Post-Installation Script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#post_installation_script DedicatedServerReinstallTask#post_installation_script}
  */
  readonly postInstallationScript?: string;
  /**
  * Post-Installation Script File Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#post_installation_script_extension DedicatedServerReinstallTask#post_installation_script_extension}
  */
  readonly postInstallationScriptExtension?: string;
  /**
  * SSH Public Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#ssh_key DedicatedServerReinstallTask#ssh_key}
  */
  readonly sshKey?: string;
}

export function dedicatedServerReinstallTaskCustomizationsToTerraform(struct?: DedicatedServerReinstallTaskCustomizationsOutputReference | DedicatedServerReinstallTaskCustomizations): any {
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


export function dedicatedServerReinstallTaskCustomizationsToHclTerraform(struct?: DedicatedServerReinstallTaskCustomizationsOutputReference | DedicatedServerReinstallTaskCustomizations): any {
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

export class DedicatedServerReinstallTaskCustomizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DedicatedServerReinstallTaskCustomizations | undefined {
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

  public set internalValue(value: DedicatedServerReinstallTaskCustomizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DedicatedServerReinstallTaskStorageHardwareRaid {
  /**
  * Number of arrays (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#arrays DedicatedServerReinstallTask#arrays}
  */
  readonly arrays?: number;
  /**
  * Total number of disks in the disk group involved in the hardware raid configuration (all disks of the disk group by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#disks DedicatedServerReinstallTask#disks}
  */
  readonly disks?: number;
  /**
  * Hardware raid type (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#raid_level DedicatedServerReinstallTask#raid_level}
  */
  readonly raidLevel?: number;
  /**
  * Number of disks in the disk group involved in the spare (default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#spares DedicatedServerReinstallTask#spares}
  */
  readonly spares?: number;
}

export function dedicatedServerReinstallTaskStorageHardwareRaidToTerraform(struct?: DedicatedServerReinstallTaskStorageHardwareRaid | cdktf.IResolvable): any {
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


export function dedicatedServerReinstallTaskStorageHardwareRaidToHclTerraform(struct?: DedicatedServerReinstallTaskStorageHardwareRaid | cdktf.IResolvable): any {
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

export class DedicatedServerReinstallTaskStorageHardwareRaidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStorageHardwareRaid | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerReinstallTaskStorageHardwareRaid | cdktf.IResolvable | undefined) {
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

export class DedicatedServerReinstallTaskStorageHardwareRaidList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStorageHardwareRaid[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStorageHardwareRaidOutputReference {
    return new DedicatedServerReinstallTaskStorageHardwareRaidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv {
  /**
  * Logical volume name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#name DedicatedServerReinstallTask#name}
  */
  readonly name?: string;
}

export function dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvToTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvToHclTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv | cdktf.IResolvable): any {
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

export class DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv | cdktf.IResolvable | undefined) {
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

export class DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvOutputReference {
    return new DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp {
  /**
  * zpool name (generated automatically if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#name DedicatedServerReinstallTask#name}
  */
  readonly name?: string;
}

export function dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpToTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpToHclTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp | cdktf.IResolvable): any {
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

export class DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp | cdktf.IResolvable | undefined) {
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

export class DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpOutputReference {
    return new DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskStoragePartitioningLayoutExtras {
  /**
  * lv block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#lv DedicatedServerReinstallTask#lv}
  */
  readonly lv?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv[] | cdktf.IResolvable;
  /**
  * zp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#zp DedicatedServerReinstallTask#zp}
  */
  readonly zp?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp[] | cdktf.IResolvable;
}

export function dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasToTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lv: cdktf.listMapper(dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvToTerraform, true)(struct!.lv),
    zp: cdktf.listMapper(dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpToTerraform, true)(struct!.zp),
  }
}


export function dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasToHclTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lv: {
      value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvToHclTerraform, true)(struct!.lv),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvList",
    },
    zp: {
      value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpToHclTerraform, true)(struct!.zp),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStoragePartitioningLayoutExtras | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerReinstallTaskStoragePartitioningLayoutExtras | cdktf.IResolvable | undefined) {
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
  private _lv = new DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLvList(this, "lv", false);
  public get lv() {
    return this._lv;
  }
  public putLv(value: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasLv[] | cdktf.IResolvable) {
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
  private _zp = new DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZpList(this, "zp", false);
  public get zp() {
    return this._zp;
  }
  public putZp(value: DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasZp[] | cdktf.IResolvable) {
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

export class DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStoragePartitioningLayoutExtras[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasOutputReference {
    return new DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskStoragePartitioningLayout {
  /**
  * File system type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#file_system DedicatedServerReinstallTask#file_system}
  */
  readonly fileSystem: string;
  /**
  * Mount point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#mount_point DedicatedServerReinstallTask#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Software raid type (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#raid_level DedicatedServerReinstallTask#raid_level}
  */
  readonly raidLevel?: number;
  /**
  * Partition size in MiB (default value is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#size DedicatedServerReinstallTask#size}
  */
  readonly size?: number;
  /**
  * extras block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#extras DedicatedServerReinstallTask#extras}
  */
  readonly extras?: DedicatedServerReinstallTaskStoragePartitioningLayoutExtras[] | cdktf.IResolvable;
}

export function dedicatedServerReinstallTaskStoragePartitioningLayoutToTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    raid_level: cdktf.numberToTerraform(struct!.raidLevel),
    size: cdktf.numberToTerraform(struct!.size),
    extras: cdktf.listMapper(dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasToTerraform, true)(struct!.extras),
  }
}


export function dedicatedServerReinstallTaskStoragePartitioningLayoutToHclTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioningLayout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    extras: {
      value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStoragePartitioningLayoutExtrasToHclTerraform, true)(struct!.extras),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerReinstallTaskStoragePartitioningLayoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStoragePartitioningLayout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._extras?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extras = this._extras?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerReinstallTaskStoragePartitioningLayout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystem = undefined;
      this._mountPoint = undefined;
      this._raidLevel = undefined;
      this._size = undefined;
      this._extras.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystem = value.fileSystem;
      this._mountPoint = value.mountPoint;
      this._raidLevel = value.raidLevel;
      this._size = value.size;
      this._extras.internalValue = value.extras;
    }
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

  // extras - computed: false, optional: true, required: false
  private _extras = new DedicatedServerReinstallTaskStoragePartitioningLayoutExtrasList(this, "extras", false);
  public get extras() {
    return this._extras;
  }
  public putExtras(value: DedicatedServerReinstallTaskStoragePartitioningLayoutExtras[] | cdktf.IResolvable) {
    this._extras.internalValue = value;
  }
  public resetExtras() {
    this._extras.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extrasInput() {
    return this._extras.internalValue;
  }
}

export class DedicatedServerReinstallTaskStoragePartitioningLayoutList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStoragePartitioningLayout[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStoragePartitioningLayoutOutputReference {
    return new DedicatedServerReinstallTaskStoragePartitioningLayoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskStoragePartitioning {
  /**
  * Total number of disks in the disk group involved in the partitioning configuration (all disks of the disk group by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#disks DedicatedServerReinstallTask#disks}
  */
  readonly disks?: number;
  /**
  * Partitioning scheme name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#scheme_name DedicatedServerReinstallTask#scheme_name}
  */
  readonly schemeName?: string;
  /**
  * layout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#layout DedicatedServerReinstallTask#layout}
  */
  readonly layout?: DedicatedServerReinstallTaskStoragePartitioningLayout[] | cdktf.IResolvable;
}

export function dedicatedServerReinstallTaskStoragePartitioningToTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disks: cdktf.numberToTerraform(struct!.disks),
    scheme_name: cdktf.stringToTerraform(struct!.schemeName),
    layout: cdktf.listMapper(dedicatedServerReinstallTaskStoragePartitioningLayoutToTerraform, true)(struct!.layout),
  }
}


export function dedicatedServerReinstallTaskStoragePartitioningToHclTerraform(struct?: DedicatedServerReinstallTaskStoragePartitioning | cdktf.IResolvable): any {
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
    scheme_name: {
      value: cdktf.stringToHclTerraform(struct!.schemeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    layout: {
      value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStoragePartitioningLayoutToHclTerraform, true)(struct!.layout),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerReinstallTaskStoragePartitioningLayoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerReinstallTaskStoragePartitioningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStoragePartitioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disks !== undefined) {
      hasAnyValues = true;
      internalValueResult.disks = this._disks;
    }
    if (this._schemeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeName = this._schemeName;
    }
    if (this._layout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.layout = this._layout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerReinstallTaskStoragePartitioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disks = undefined;
      this._schemeName = undefined;
      this._layout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disks = value.disks;
      this._schemeName = value.schemeName;
      this._layout.internalValue = value.layout;
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

  // layout - computed: false, optional: true, required: false
  private _layout = new DedicatedServerReinstallTaskStoragePartitioningLayoutList(this, "layout", false);
  public get layout() {
    return this._layout;
  }
  public putLayout(value: DedicatedServerReinstallTaskStoragePartitioningLayout[] | cdktf.IResolvable) {
    this._layout.internalValue = value;
  }
  public resetLayout() {
    this._layout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout.internalValue;
  }
}

export class DedicatedServerReinstallTaskStoragePartitioningList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStoragePartitioning[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStoragePartitioningOutputReference {
    return new DedicatedServerReinstallTaskStoragePartitioningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskStorage {
  /**
  * Disk group id (default is 0, meaning automatic)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#disk_group_id DedicatedServerReinstallTask#disk_group_id}
  */
  readonly diskGroupId?: number;
  /**
  * hardware_raid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#hardware_raid DedicatedServerReinstallTask#hardware_raid}
  */
  readonly hardwareRaid?: DedicatedServerReinstallTaskStorageHardwareRaid[] | cdktf.IResolvable;
  /**
  * partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#partitioning DedicatedServerReinstallTask#partitioning}
  */
  readonly partitioning?: DedicatedServerReinstallTaskStoragePartitioning[] | cdktf.IResolvable;
}

export function dedicatedServerReinstallTaskStorageToTerraform(struct?: DedicatedServerReinstallTaskStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_group_id: cdktf.numberToTerraform(struct!.diskGroupId),
    hardware_raid: cdktf.listMapper(dedicatedServerReinstallTaskStorageHardwareRaidToTerraform, true)(struct!.hardwareRaid),
    partitioning: cdktf.listMapper(dedicatedServerReinstallTaskStoragePartitioningToTerraform, true)(struct!.partitioning),
  }
}


export function dedicatedServerReinstallTaskStorageToHclTerraform(struct?: DedicatedServerReinstallTaskStorage | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStorageHardwareRaidToHclTerraform, true)(struct!.hardwareRaid),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerReinstallTaskStorageHardwareRaidList",
    },
    partitioning: {
      value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStoragePartitioningToHclTerraform, true)(struct!.partitioning),
      isBlock: true,
      type: "list",
      storageClassType: "DedicatedServerReinstallTaskStoragePartitioningList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerReinstallTaskStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DedicatedServerReinstallTaskStorage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DedicatedServerReinstallTaskStorage | cdktf.IResolvable | undefined) {
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
  private _hardwareRaid = new DedicatedServerReinstallTaskStorageHardwareRaidList(this, "hardware_raid", false);
  public get hardwareRaid() {
    return this._hardwareRaid;
  }
  public putHardwareRaid(value: DedicatedServerReinstallTaskStorageHardwareRaid[] | cdktf.IResolvable) {
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
  private _partitioning = new DedicatedServerReinstallTaskStoragePartitioningList(this, "partitioning", false);
  public get partitioning() {
    return this._partitioning;
  }
  public putPartitioning(value: DedicatedServerReinstallTaskStoragePartitioning[] | cdktf.IResolvable) {
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

export class DedicatedServerReinstallTaskStorageList extends cdktf.ComplexList {
  public internalValue? : DedicatedServerReinstallTaskStorage[] | cdktf.IResolvable

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
  public get(index: number): DedicatedServerReinstallTaskStorageOutputReference {
    return new DedicatedServerReinstallTaskStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DedicatedServerReinstallTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#create DedicatedServerReinstallTask#create}
  */
  readonly create?: string;
}

export function dedicatedServerReinstallTaskTimeoutsToTerraform(struct?: DedicatedServerReinstallTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function dedicatedServerReinstallTaskTimeoutsToHclTerraform(struct?: DedicatedServerReinstallTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DedicatedServerReinstallTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DedicatedServerReinstallTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DedicatedServerReinstallTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task ovh_dedicated_server_reinstall_task}
*/
export class DedicatedServerReinstallTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server_reinstall_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedServerReinstallTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedServerReinstallTask to import
  * @param importFromId The id of the existing DedicatedServerReinstallTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedServerReinstallTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server_reinstall_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dedicated_server_reinstall_task ovh_dedicated_server_reinstall_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedServerReinstallTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedServerReinstallTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server_reinstall_task',
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
    this._bootidOnDestroy = config.bootidOnDestroy;
    this._id = config.id;
    this._os = config.os;
    this._properties = config.properties;
    this._serviceName = config.serviceName;
    this._customizations.internalValue = config.customizations;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootid_on_destroy - computed: false, optional: true, required: false
  private _bootidOnDestroy?: number; 
  public get bootidOnDestroy() {
    return this.getNumberAttribute('bootid_on_destroy');
  }
  public set bootidOnDestroy(value: number) {
    this._bootidOnDestroy = value;
  }
  public resetBootidOnDestroy() {
    this._bootidOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootidOnDestroyInput() {
    return this._bootidOnDestroy;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // done_date - computed: true, optional: false, required: false
  public get doneDate() {
    return this.getStringAttribute('done_date');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
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

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // customizations - computed: false, optional: true, required: false
  private _customizations = new DedicatedServerReinstallTaskCustomizationsOutputReference(this, "customizations");
  public get customizations() {
    return this._customizations;
  }
  public putCustomizations(value: DedicatedServerReinstallTaskCustomizations) {
    this._customizations.internalValue = value;
  }
  public resetCustomizations() {
    this._customizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationsInput() {
    return this._customizations.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DedicatedServerReinstallTaskStorageList(this, "storage", false);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DedicatedServerReinstallTaskStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DedicatedServerReinstallTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DedicatedServerReinstallTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bootid_on_destroy: cdktf.numberToTerraform(this._bootidOnDestroy),
      id: cdktf.stringToTerraform(this._id),
      os: cdktf.stringToTerraform(this._os),
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      service_name: cdktf.stringToTerraform(this._serviceName),
      customizations: dedicatedServerReinstallTaskCustomizationsToTerraform(this._customizations.internalValue),
      storage: cdktf.listMapper(dedicatedServerReinstallTaskStorageToTerraform, true)(this._storage.internalValue),
      timeouts: dedicatedServerReinstallTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bootid_on_destroy: {
        value: cdktf.numberToHclTerraform(this._bootidOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customizations: {
        value: dedicatedServerReinstallTaskCustomizationsToHclTerraform(this._customizations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerReinstallTaskCustomizationsList",
      },
      storage: {
        value: cdktf.listMapperHcl(dedicatedServerReinstallTaskStorageToHclTerraform, true)(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DedicatedServerReinstallTaskStorageList",
      },
      timeouts: {
        value: dedicatedServerReinstallTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DedicatedServerReinstallTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
