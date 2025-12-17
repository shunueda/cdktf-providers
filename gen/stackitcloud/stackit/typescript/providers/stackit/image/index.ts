// https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Properties to set hardware and scheduling settings for an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#config Image#config}
  */
  readonly config?: ImageConfigA;
  /**
  * The disk format of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#disk_format Image#disk_format}
  */
  readonly diskFormat: string;
  /**
  * Labels are key-value string pairs which can be attached to a resource container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#labels Image#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The filepath of the raw image file to be uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#local_file_path Image#local_file_path}
  */
  readonly localFilePath: string;
  /**
  * The minimum disk size of the image in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#min_disk_size Image#min_disk_size}
  */
  readonly minDiskSize?: number;
  /**
  * The minimum RAM of the image in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#min_ram Image#min_ram}
  */
  readonly minRam?: number;
  /**
  * The name of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the image is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#project_id Image#project_id}
  */
  readonly projectId: string;
}
export interface ImageChecksum {
}

export function imageChecksumToTerraform(struct?: ImageChecksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageChecksumToHclTerraform(struct?: ImageChecksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageChecksumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageChecksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageChecksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }
}
export interface ImageConfigA {
  /**
  * Enables the BIOS bootmenu.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#boot_menu Image#boot_menu}
  */
  readonly bootMenu?: boolean | cdktf.IResolvable;
  /**
  * Sets CDROM bus controller type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#cdrom_bus Image#cdrom_bus}
  */
  readonly cdromBus?: string;
  /**
  * Sets Disk bus controller type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#disk_bus Image#disk_bus}
  */
  readonly diskBus?: string;
  /**
  * Sets virtual network interface model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#nic_model Image#nic_model}
  */
  readonly nicModel?: string;
  /**
  * Enables operating system specific optimizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#operating_system Image#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Operating system distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#operating_system_distro Image#operating_system_distro}
  */
  readonly operatingSystemDistro?: string;
  /**
  * Version of the operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#operating_system_version Image#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
  /**
  * Sets the device bus when the image is used as a rescue image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#rescue_bus Image#rescue_bus}
  */
  readonly rescueBus?: string;
  /**
  * Sets the device when the image is used as a rescue image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#rescue_device Image#rescue_device}
  */
  readonly rescueDevice?: string;
  /**
  * Enables Secure Boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#secure_boot Image#secure_boot}
  */
  readonly secureBoot?: boolean | cdktf.IResolvable;
  /**
  * Enables UEFI boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#uefi Image#uefi}
  */
  readonly uefi?: boolean | cdktf.IResolvable;
  /**
  * Sets Graphic device model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#video_model Image#video_model}
  */
  readonly videoModel?: string;
  /**
  * Enables the use of VirtIO SCSI to provide block device access. By default instances use VirtIO Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#virtio_scsi Image#virtio_scsi}
  */
  readonly virtioScsi?: boolean | cdktf.IResolvable;
}

export function imageConfigAToTerraform(struct?: ImageConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_menu: cdktf.booleanToTerraform(struct!.bootMenu),
    cdrom_bus: cdktf.stringToTerraform(struct!.cdromBus),
    disk_bus: cdktf.stringToTerraform(struct!.diskBus),
    nic_model: cdktf.stringToTerraform(struct!.nicModel),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    operating_system_distro: cdktf.stringToTerraform(struct!.operatingSystemDistro),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
    rescue_bus: cdktf.stringToTerraform(struct!.rescueBus),
    rescue_device: cdktf.stringToTerraform(struct!.rescueDevice),
    secure_boot: cdktf.booleanToTerraform(struct!.secureBoot),
    uefi: cdktf.booleanToTerraform(struct!.uefi),
    video_model: cdktf.stringToTerraform(struct!.videoModel),
    virtio_scsi: cdktf.booleanToTerraform(struct!.virtioScsi),
  }
}


export function imageConfigAToHclTerraform(struct?: ImageConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_menu: {
      value: cdktf.booleanToHclTerraform(struct!.bootMenu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cdrom_bus: {
      value: cdktf.stringToHclTerraform(struct!.cdromBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_bus: {
      value: cdktf.stringToHclTerraform(struct!.diskBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_model: {
      value: cdktf.stringToHclTerraform(struct!.nicModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_distro: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemDistro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rescue_bus: {
      value: cdktf.stringToHclTerraform(struct!.rescueBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rescue_device: {
      value: cdktf.stringToHclTerraform(struct!.rescueDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.secureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uefi: {
      value: cdktf.booleanToHclTerraform(struct!.uefi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    video_model: {
      value: cdktf.stringToHclTerraform(struct!.videoModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtio_scsi: {
      value: cdktf.booleanToHclTerraform(struct!.virtioScsi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootMenu !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootMenu = this._bootMenu;
    }
    if (this._cdromBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdromBus = this._cdromBus;
    }
    if (this._diskBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskBus = this._diskBus;
    }
    if (this._nicModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicModel = this._nicModel;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._operatingSystemDistro !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemDistro = this._operatingSystemDistro;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    if (this._rescueBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescueBus = this._rescueBus;
    }
    if (this._rescueDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.rescueDevice = this._rescueDevice;
    }
    if (this._secureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureBoot = this._secureBoot;
    }
    if (this._uefi !== undefined) {
      hasAnyValues = true;
      internalValueResult.uefi = this._uefi;
    }
    if (this._videoModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoModel = this._videoModel;
    }
    if (this._virtioScsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtioScsi = this._virtioScsi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootMenu = undefined;
      this._cdromBus = undefined;
      this._diskBus = undefined;
      this._nicModel = undefined;
      this._operatingSystem = undefined;
      this._operatingSystemDistro = undefined;
      this._operatingSystemVersion = undefined;
      this._rescueBus = undefined;
      this._rescueDevice = undefined;
      this._secureBoot = undefined;
      this._uefi = undefined;
      this._videoModel = undefined;
      this._virtioScsi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootMenu = value.bootMenu;
      this._cdromBus = value.cdromBus;
      this._diskBus = value.diskBus;
      this._nicModel = value.nicModel;
      this._operatingSystem = value.operatingSystem;
      this._operatingSystemDistro = value.operatingSystemDistro;
      this._operatingSystemVersion = value.operatingSystemVersion;
      this._rescueBus = value.rescueBus;
      this._rescueDevice = value.rescueDevice;
      this._secureBoot = value.secureBoot;
      this._uefi = value.uefi;
      this._videoModel = value.videoModel;
      this._virtioScsi = value.virtioScsi;
    }
  }

  // boot_menu - computed: true, optional: true, required: false
  private _bootMenu?: boolean | cdktf.IResolvable; 
  public get bootMenu() {
    return this.getBooleanAttribute('boot_menu');
  }
  public set bootMenu(value: boolean | cdktf.IResolvable) {
    this._bootMenu = value;
  }
  public resetBootMenu() {
    this._bootMenu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootMenuInput() {
    return this._bootMenu;
  }

  // cdrom_bus - computed: true, optional: true, required: false
  private _cdromBus?: string; 
  public get cdromBus() {
    return this.getStringAttribute('cdrom_bus');
  }
  public set cdromBus(value: string) {
    this._cdromBus = value;
  }
  public resetCdromBus() {
    this._cdromBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdromBusInput() {
    return this._cdromBus;
  }

  // disk_bus - computed: true, optional: true, required: false
  private _diskBus?: string; 
  public get diskBus() {
    return this.getStringAttribute('disk_bus');
  }
  public set diskBus(value: string) {
    this._diskBus = value;
  }
  public resetDiskBus() {
    this._diskBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBusInput() {
    return this._diskBus;
  }

  // nic_model - computed: true, optional: true, required: false
  private _nicModel?: string; 
  public get nicModel() {
    return this.getStringAttribute('nic_model');
  }
  public set nicModel(value: string) {
    this._nicModel = value;
  }
  public resetNicModel() {
    this._nicModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicModelInput() {
    return this._nicModel;
  }

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // operating_system_distro - computed: true, optional: true, required: false
  private _operatingSystemDistro?: string; 
  public get operatingSystemDistro() {
    return this.getStringAttribute('operating_system_distro');
  }
  public set operatingSystemDistro(value: string) {
    this._operatingSystemDistro = value;
  }
  public resetOperatingSystemDistro() {
    this._operatingSystemDistro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemDistroInput() {
    return this._operatingSystemDistro;
  }

  // operating_system_version - computed: true, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }

  // rescue_bus - computed: true, optional: true, required: false
  private _rescueBus?: string; 
  public get rescueBus() {
    return this.getStringAttribute('rescue_bus');
  }
  public set rescueBus(value: string) {
    this._rescueBus = value;
  }
  public resetRescueBus() {
    this._rescueBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescueBusInput() {
    return this._rescueBus;
  }

  // rescue_device - computed: true, optional: true, required: false
  private _rescueDevice?: string; 
  public get rescueDevice() {
    return this.getStringAttribute('rescue_device');
  }
  public set rescueDevice(value: string) {
    this._rescueDevice = value;
  }
  public resetRescueDevice() {
    this._rescueDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescueDeviceInput() {
    return this._rescueDevice;
  }

  // secure_boot - computed: true, optional: true, required: false
  private _secureBoot?: boolean | cdktf.IResolvable; 
  public get secureBoot() {
    return this.getBooleanAttribute('secure_boot');
  }
  public set secureBoot(value: boolean | cdktf.IResolvable) {
    this._secureBoot = value;
  }
  public resetSecureBoot() {
    this._secureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootInput() {
    return this._secureBoot;
  }

  // uefi - computed: true, optional: true, required: false
  private _uefi?: boolean | cdktf.IResolvable; 
  public get uefi() {
    return this.getBooleanAttribute('uefi');
  }
  public set uefi(value: boolean | cdktf.IResolvable) {
    this._uefi = value;
  }
  public resetUefi() {
    this._uefi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiInput() {
    return this._uefi;
  }

  // video_model - computed: true, optional: true, required: false
  private _videoModel?: string; 
  public get videoModel() {
    return this.getStringAttribute('video_model');
  }
  public set videoModel(value: string) {
    this._videoModel = value;
  }
  public resetVideoModel() {
    this._videoModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoModelInput() {
    return this._videoModel;
  }

  // virtio_scsi - computed: true, optional: true, required: false
  private _virtioScsi?: boolean | cdktf.IResolvable; 
  public get virtioScsi() {
    return this.getBooleanAttribute('virtio_scsi');
  }
  public set virtioScsi(value: boolean | cdktf.IResolvable) {
    this._virtioScsi = value;
  }
  public resetVirtioScsi() {
    this._virtioScsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtioScsiInput() {
    return this._virtioScsi;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image stackit_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/image stackit_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_image',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.74.0',
        providerVersionConstraint: '0.74.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._diskFormat = config.diskFormat;
    this._labels = config.labels;
    this._localFilePath = config.localFilePath;
    this._minDiskSize = config.minDiskSize;
    this._minRam = config.minRam;
    this._name = config.name;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  private _checksum = new ImageChecksumOutputReference(this, "checksum");
  public get checksum() {
    return this._checksum;
  }

  // config - computed: true, optional: true, required: false
  private _config = new ImageConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ImageConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // disk_format - computed: false, optional: false, required: true
  private _diskFormat?: string; 
  public get diskFormat() {
    return this.getStringAttribute('disk_format');
  }
  public set diskFormat(value: string) {
    this._diskFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFormatInput() {
    return this._diskFormat;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // local_file_path - computed: false, optional: false, required: true
  private _localFilePath?: string; 
  public get localFilePath() {
    return this.getStringAttribute('local_file_path');
  }
  public set localFilePath(value: string) {
    this._localFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localFilePathInput() {
    return this._localFilePath;
  }

  // min_disk_size - computed: true, optional: true, required: false
  private _minDiskSize?: number; 
  public get minDiskSize() {
    return this.getNumberAttribute('min_disk_size');
  }
  public set minDiskSize(value: number) {
    this._minDiskSize = value;
  }
  public resetMinDiskSize() {
    this._minDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDiskSizeInput() {
    return this._minDiskSize;
  }

  // min_ram - computed: true, optional: true, required: false
  private _minRam?: number; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam;
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

  // protected - computed: true, optional: false, required: false
  public get protected() {
    return this.getBooleanAttribute('protected');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: imageConfigAToTerraform(this._config.internalValue),
      disk_format: cdktf.stringToTerraform(this._diskFormat),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      local_file_path: cdktf.stringToTerraform(this._localFilePath),
      min_disk_size: cdktf.numberToTerraform(this._minDiskSize),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: imageConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageConfigA",
      },
      disk_format: {
        value: cdktf.stringToHclTerraform(this._diskFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      local_file_path: {
        value: cdktf.stringToHclTerraform(this._localFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_disk_size: {
        value: cdktf.numberToHclTerraform(this._minDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ram: {
        value: cdktf.numberToHclTerraform(this._minRam),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
