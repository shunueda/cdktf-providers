// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuickdeployTemplateImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Azure-generated URL for the Guest Disk for the encrypted Template Image VHD. Only applicable for V2 generation images. Required only when `secure_boot_enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#guest_disk_uri QuickdeployTemplateImage#guest_disk_uri}
  */
  readonly guestDiskUri?: string;
  /**
  * The generation of the virtual machine this image will be used to create. Choose between `V1` and `V2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#machine_generation QuickdeployTemplateImage#machine_generation}
  */
  readonly machineGeneration: string;
  /**
  * Name of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#name QuickdeployTemplateImage#name}
  */
  readonly name: string;
  /**
  * Notes of the image. Note length cannot exceed 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#notes QuickdeployTemplateImage#notes}
  */
  readonly notes?: string;
  /**
  * The OS platform of the image. Choose between `Windows` and `Linux`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#os_platform QuickdeployTemplateImage#os_platform}
  */
  readonly osPlatform: string;
  /**
  * The Azure region to import the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#region QuickdeployTemplateImage#region}
  */
  readonly region: string;
  /**
  * Defines whether the image supports Secure Boot. Only applicable for V2 generation images. Default is `false`.
  * 
  * ~> **Please Note** When using Secure Boot, the guest disk URI must be specified in the `guest_disk_uri` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#secure_boot_enabled QuickdeployTemplateImage#secure_boot_enabled}
  */
  readonly secureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Citrix Managed Azure subscription to import the image. Defaults to `Citrix Managed` if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#subscription_name QuickdeployTemplateImage#subscription_name}
  */
  readonly subscriptionName?: string;
  /**
  * The Azure-generated URL for the Image's Virtual Hard Disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#vhd_uri QuickdeployTemplateImage#vhd_uri}
  */
  readonly vhdUri: string;
  /**
  * Defines whether the image supports vTPM TrustedLaunch. Only applicable for V2 generation images. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#vtpm_enabled QuickdeployTemplateImage#vtpm_enabled}
  */
  readonly vtpmEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image citrix_quickdeploy_template_image}
*/
export class QuickdeployTemplateImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_quickdeploy_template_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuickdeployTemplateImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuickdeployTemplateImage to import
  * @param importFromId The id of the existing QuickdeployTemplateImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuickdeployTemplateImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_quickdeploy_template_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/quickdeploy_template_image citrix_quickdeploy_template_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuickdeployTemplateImageConfig
  */
  public constructor(scope: Construct, id: string, config: QuickdeployTemplateImageConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_quickdeploy_template_image',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._guestDiskUri = config.guestDiskUri;
    this._machineGeneration = config.machineGeneration;
    this._name = config.name;
    this._notes = config.notes;
    this._osPlatform = config.osPlatform;
    this._region = config.region;
    this._secureBootEnabled = config.secureBootEnabled;
    this._subscriptionName = config.subscriptionName;
    this._vhdUri = config.vhdUri;
    this._vtpmEnabled = config.vtpmEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // guest_disk_uri - computed: false, optional: true, required: false
  private _guestDiskUri?: string; 
  public get guestDiskUri() {
    return this.getStringAttribute('guest_disk_uri');
  }
  public set guestDiskUri(value: string) {
    this._guestDiskUri = value;
  }
  public resetGuestDiskUri() {
    this._guestDiskUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestDiskUriInput() {
    return this._guestDiskUri;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // machine_generation - computed: false, optional: false, required: true
  private _machineGeneration?: string; 
  public get machineGeneration() {
    return this.getStringAttribute('machine_generation');
  }
  public set machineGeneration(value: string) {
    this._machineGeneration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGenerationInput() {
    return this._machineGeneration;
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // os_platform - computed: false, optional: false, required: true
  private _osPlatform?: string; 
  public get osPlatform() {
    return this.getStringAttribute('os_platform');
  }
  public set osPlatform(value: string) {
    this._osPlatform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osPlatformInput() {
    return this._osPlatform;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secure_boot_enabled - computed: true, optional: true, required: false
  private _secureBootEnabled?: boolean | cdktf.IResolvable; 
  public get secureBootEnabled() {
    return this.getBooleanAttribute('secure_boot_enabled');
  }
  public set secureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._secureBootEnabled = value;
  }
  public resetSecureBootEnabled() {
    this._secureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootEnabledInput() {
    return this._secureBootEnabled;
  }

  // subscription_name - computed: true, optional: true, required: false
  private _subscriptionName?: string; 
  public get subscriptionName() {
    return this.getStringAttribute('subscription_name');
  }
  public set subscriptionName(value: string) {
    this._subscriptionName = value;
  }
  public resetSubscriptionName() {
    this._subscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionNameInput() {
    return this._subscriptionName;
  }

  // vhd_uri - computed: false, optional: false, required: true
  private _vhdUri?: string; 
  public get vhdUri() {
    return this.getStringAttribute('vhd_uri');
  }
  public set vhdUri(value: string) {
    this._vhdUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhdUriInput() {
    return this._vhdUri;
  }

  // vtpm_enabled - computed: true, optional: true, required: false
  private _vtpmEnabled?: boolean | cdktf.IResolvable; 
  public get vtpmEnabled() {
    return this.getBooleanAttribute('vtpm_enabled');
  }
  public set vtpmEnabled(value: boolean | cdktf.IResolvable) {
    this._vtpmEnabled = value;
  }
  public resetVtpmEnabled() {
    this._vtpmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtpmEnabledInput() {
    return this._vtpmEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      guest_disk_uri: cdktf.stringToTerraform(this._guestDiskUri),
      machine_generation: cdktf.stringToTerraform(this._machineGeneration),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      os_platform: cdktf.stringToTerraform(this._osPlatform),
      region: cdktf.stringToTerraform(this._region),
      secure_boot_enabled: cdktf.booleanToTerraform(this._secureBootEnabled),
      subscription_name: cdktf.stringToTerraform(this._subscriptionName),
      vhd_uri: cdktf.stringToTerraform(this._vhdUri),
      vtpm_enabled: cdktf.booleanToTerraform(this._vtpmEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      guest_disk_uri: {
        value: cdktf.stringToHclTerraform(this._guestDiskUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_generation: {
        value: cdktf.stringToHclTerraform(this._machineGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_platform: {
        value: cdktf.stringToHclTerraform(this._osPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_boot_enabled: {
        value: cdktf.booleanToHclTerraform(this._secureBootEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_name: {
        value: cdktf.stringToHclTerraform(this._subscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhd_uri: {
        value: cdktf.stringToHclTerraform(this._vhdUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vtpm_enabled: {
        value: cdktf.booleanToHclTerraform(this._vtpmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
