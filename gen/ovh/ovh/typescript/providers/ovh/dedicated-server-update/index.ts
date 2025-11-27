// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DedicatedServerUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The boot id of your dedicated server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#boot_id DedicatedServerUpdate#boot_id}
  */
  readonly bootId?: number;
  /**
  * The boot script of your dedicated server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#boot_script DedicatedServerUpdate#boot_script}
  */
  readonly bootScript?: string;
  /**
  * Display name of the dedicated server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#display_name DedicatedServerUpdate#display_name}
  */
  readonly displayName?: string;
  /**
  * The path of the EFI bootloader.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#efi_bootloader_path DedicatedServerUpdate#efi_bootloader_path}
  */
  readonly efiBootloaderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#id DedicatedServerUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Icmp monitoring state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#monitoring DedicatedServerUpdate#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * The internal name of your dedicated server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#service_name DedicatedServerUpdate#service_name}
  */
  readonly serviceName: string;
  /**
  * error, hacked, hackedBlocked, ok
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#state DedicatedServerUpdate#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update ovh_dedicated_server_update}
*/
export class DedicatedServerUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dedicated_server_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DedicatedServerUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DedicatedServerUpdate to import
  * @param importFromId The id of the existing DedicatedServerUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DedicatedServerUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dedicated_server_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/dedicated_server_update ovh_dedicated_server_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DedicatedServerUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: DedicatedServerUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dedicated_server_update',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
    this._displayName = config.displayName;
    this._efiBootloaderPath = config.efiBootloaderPath;
    this._id = config.id;
    this._monitoring = config.monitoring;
    this._serviceName = config.serviceName;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // boot_script - computed: false, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_id: cdktf.numberToTerraform(this._bootId),
      boot_script: cdktf.stringToTerraform(this._bootScript),
      display_name: cdktf.stringToTerraform(this._displayName),
      efi_bootloader_path: cdktf.stringToTerraform(this._efiBootloaderPath),
      id: cdktf.stringToTerraform(this._id),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      service_name: cdktf.stringToTerraform(this._serviceName),
      state: cdktf.stringToTerraform(this._state),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
