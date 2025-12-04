// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRouterboardSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#___path___ SystemRouterboardSettings#___path___}
  */
  readonly path?: string;
  /**
  * An option to enable firmware upgrade automatically after the RouterOS upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#auto_upgrade SystemRouterboardSettings#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * An option to choose the onboard RS232 speed in bits per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#baud_rate SystemRouterboardSettings#baud_rate}
  */
  readonly baudRate?: number;
  /**
  * A delay for a keystroke while booting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#boot_delay SystemRouterboardSettings#boot_delay}
  */
  readonly bootDelay?: string;
  /**
  * An option to choose the way RouterBOOT loads the operating system. Possible values: `ethernet`, `flash-boot`, `flash-boot-once-then-nand`, `nand-if-fail-then-ethernet`, `nand-only`, `try-ethernet-once-then-nand`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#boot_device SystemRouterboardSettings#boot_device}
  */
  readonly bootDevice?: string;
  /**
  * An option to choose the booting operating system for CRS3xx series switches. Possible values: `router-os`, `swos`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#boot_os SystemRouterboardSettings#boot_os}
  */
  readonly bootOs?: string;
  /**
  * Boot protocol to use. Possible values: `bootp`, `dhcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#boot_protocol SystemRouterboardSettings#boot_protocol}
  */
  readonly bootProtocol?: string;
  /**
  * An option to change the CPU frequency of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#cpu_frequency SystemRouterboardSettings#cpu_frequency}
  */
  readonly cpuFrequency?: string;
  /**
  * An option whether to enter CPU suspend mode in HTL instruction. Possible values: `power-save`, `regular`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#cpu_mode SystemRouterboardSettings#cpu_mode}
  */
  readonly cpuMode?: string;
  /**
  * An option to enable reset via the onboard jumper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#enable_jumper_reset SystemRouterboardSettings#enable_jumper_reset}
  */
  readonly enableJumperReset?: boolean | cdktf.IResolvable;
  /**
  * An option to set which key will cause the BIOS to enter configuration mode during boot delay. Possible values: `any-key`, `delete-key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#enter_setup_on SystemRouterboardSettings#enter_setup_on}
  */
  readonly enterSetupOn?: string;
  /**
  * An option to use the backup RouterBOOT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#force_backup_booter SystemRouterboardSettings#force_backup_booter}
  */
  readonly forceBackupBooter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#id SystemRouterboardSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option to set a delay before the USB port is initialized. Used for mPCIe modems with RB9xx series devices only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#init_delay SystemRouterboardSettings#init_delay}
  */
  readonly initDelay?: string;
  /**
  * An option to change the memory data rate of the device. Values depend on the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#memory_data_rate SystemRouterboardSettings#memory_data_rate}
  */
  readonly memoryDataRate?: string;
  /**
  * An option to change the memory frequency of the device. Values depend on the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#memory_frequency SystemRouterboardSettings#memory_frequency}
  */
  readonly memoryFrequency?: string;
  /**
  * An option to enable preboot `etherboot`, which runs before the regular boot device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#preboot_etherboot SystemRouterboardSettings#preboot_etherboot}
  */
  readonly prebootEtherboot?: string;
  /**
  * An option to instruct `preboot-etherboot` to accept only from the specified Netinstall server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#preboot_etherboot_server SystemRouterboardSettings#preboot_etherboot_server}
  */
  readonly prebootEtherbootServer?: string;
  /**
  * An option to disable any access to the RouterBOOT configuration settings over a console cable and disables the operation of the reset button to change the boot mode (Netinstall will be disabled). Possible values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#protected_routerboot SystemRouterboardSettings#protected_routerboot}
  */
  readonly protectedRouterboot?: string;
  /**
  * An option to enable resetting everything by pressing the button at power-on for longer than the specified time but less than `reformat_hold_button_max.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#reformat_hold_button SystemRouterboardSettings#reformat_hold_button}
  */
  readonly reformatHoldButton?: string;
  /**
  * See `reformat_hold_button`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#reformat_hold_button_max SystemRouterboardSettings#reformat_hold_button_max}
  */
  readonly reformatHoldButtonMax?: string;
  /**
  * An option to enable extra-low TX power for high antenna gain devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#regulatory_domain_ce SystemRouterboardSettings#regulatory_domain_ce}
  */
  readonly regulatoryDomainCe?: boolean | cdktf.IResolvable;
  /**
  * An option to turn off output on the serial console and beeping sounds during booting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#silent_boot SystemRouterboardSettings#silent_boot}
  */
  readonly silentBoot?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings routeros_system_routerboard_settings}
*/
export class SystemRouterboardSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_routerboard_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRouterboardSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRouterboardSettings to import
  * @param importFromId The id of the existing SystemRouterboardSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRouterboardSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_routerboard_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_routerboard_settings routeros_system_routerboard_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRouterboardSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemRouterboardSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_routerboard_settings',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._autoUpgrade = config.autoUpgrade;
    this._baudRate = config.baudRate;
    this._bootDelay = config.bootDelay;
    this._bootDevice = config.bootDevice;
    this._bootOs = config.bootOs;
    this._bootProtocol = config.bootProtocol;
    this._cpuFrequency = config.cpuFrequency;
    this._cpuMode = config.cpuMode;
    this._enableJumperReset = config.enableJumperReset;
    this._enterSetupOn = config.enterSetupOn;
    this._forceBackupBooter = config.forceBackupBooter;
    this._id = config.id;
    this._initDelay = config.initDelay;
    this._memoryDataRate = config.memoryDataRate;
    this._memoryFrequency = config.memoryFrequency;
    this._prebootEtherboot = config.prebootEtherboot;
    this._prebootEtherbootServer = config.prebootEtherbootServer;
    this._protectedRouterboot = config.protectedRouterboot;
    this._reformatHoldButton = config.reformatHoldButton;
    this._reformatHoldButtonMax = config.reformatHoldButtonMax;
    this._regulatoryDomainCe = config.regulatoryDomainCe;
    this._silentBoot = config.silentBoot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // baud_rate - computed: false, optional: true, required: false
  private _baudRate?: number; 
  public get baudRate() {
    return this.getNumberAttribute('baud_rate');
  }
  public set baudRate(value: number) {
    this._baudRate = value;
  }
  public resetBaudRate() {
    this._baudRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baudRateInput() {
    return this._baudRate;
  }

  // boot_delay - computed: false, optional: true, required: false
  private _bootDelay?: string; 
  public get bootDelay() {
    return this.getStringAttribute('boot_delay');
  }
  public set bootDelay(value: string) {
    this._bootDelay = value;
  }
  public resetBootDelay() {
    this._bootDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDelayInput() {
    return this._bootDelay;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice?: string; 
  public get bootDevice() {
    return this.getStringAttribute('boot_device');
  }
  public set bootDevice(value: string) {
    this._bootDevice = value;
  }
  public resetBootDevice() {
    this._bootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice;
  }

  // boot_os - computed: false, optional: true, required: false
  private _bootOs?: string; 
  public get bootOs() {
    return this.getStringAttribute('boot_os');
  }
  public set bootOs(value: string) {
    this._bootOs = value;
  }
  public resetBootOs() {
    this._bootOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOsInput() {
    return this._bootOs;
  }

  // boot_protocol - computed: false, optional: true, required: false
  private _bootProtocol?: string; 
  public get bootProtocol() {
    return this.getStringAttribute('boot_protocol');
  }
  public set bootProtocol(value: string) {
    this._bootProtocol = value;
  }
  public resetBootProtocol() {
    this._bootProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootProtocolInput() {
    return this._bootProtocol;
  }

  // cpu_frequency - computed: false, optional: true, required: false
  private _cpuFrequency?: string; 
  public get cpuFrequency() {
    return this.getStringAttribute('cpu_frequency');
  }
  public set cpuFrequency(value: string) {
    this._cpuFrequency = value;
  }
  public resetCpuFrequency() {
    this._cpuFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFrequencyInput() {
    return this._cpuFrequency;
  }

  // cpu_mode - computed: false, optional: true, required: false
  private _cpuMode?: string; 
  public get cpuMode() {
    return this.getStringAttribute('cpu_mode');
  }
  public set cpuMode(value: string) {
    this._cpuMode = value;
  }
  public resetCpuMode() {
    this._cpuMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModeInput() {
    return this._cpuMode;
  }

  // enable_jumper_reset - computed: false, optional: true, required: false
  private _enableJumperReset?: boolean | cdktf.IResolvable; 
  public get enableJumperReset() {
    return this.getBooleanAttribute('enable_jumper_reset');
  }
  public set enableJumperReset(value: boolean | cdktf.IResolvable) {
    this._enableJumperReset = value;
  }
  public resetEnableJumperReset() {
    this._enableJumperReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumperResetInput() {
    return this._enableJumperReset;
  }

  // enter_setup_on - computed: false, optional: true, required: false
  private _enterSetupOn?: string; 
  public get enterSetupOn() {
    return this.getStringAttribute('enter_setup_on');
  }
  public set enterSetupOn(value: string) {
    this._enterSetupOn = value;
  }
  public resetEnterSetupOn() {
    this._enterSetupOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterSetupOnInput() {
    return this._enterSetupOn;
  }

  // force_backup_booter - computed: false, optional: true, required: false
  private _forceBackupBooter?: boolean | cdktf.IResolvable; 
  public get forceBackupBooter() {
    return this.getBooleanAttribute('force_backup_booter');
  }
  public set forceBackupBooter(value: boolean | cdktf.IResolvable) {
    this._forceBackupBooter = value;
  }
  public resetForceBackupBooter() {
    this._forceBackupBooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBackupBooterInput() {
    return this._forceBackupBooter;
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

  // init_delay - computed: false, optional: true, required: false
  private _initDelay?: string; 
  public get initDelay() {
    return this.getStringAttribute('init_delay');
  }
  public set initDelay(value: string) {
    this._initDelay = value;
  }
  public resetInitDelay() {
    this._initDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initDelayInput() {
    return this._initDelay;
  }

  // memory_data_rate - computed: false, optional: true, required: false
  private _memoryDataRate?: string; 
  public get memoryDataRate() {
    return this.getStringAttribute('memory_data_rate');
  }
  public set memoryDataRate(value: string) {
    this._memoryDataRate = value;
  }
  public resetMemoryDataRate() {
    this._memoryDataRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryDataRateInput() {
    return this._memoryDataRate;
  }

  // memory_frequency - computed: false, optional: true, required: false
  private _memoryFrequency?: string; 
  public get memoryFrequency() {
    return this.getStringAttribute('memory_frequency');
  }
  public set memoryFrequency(value: string) {
    this._memoryFrequency = value;
  }
  public resetMemoryFrequency() {
    this._memoryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryFrequencyInput() {
    return this._memoryFrequency;
  }

  // preboot_etherboot - computed: false, optional: true, required: false
  private _prebootEtherboot?: string; 
  public get prebootEtherboot() {
    return this.getStringAttribute('preboot_etherboot');
  }
  public set prebootEtherboot(value: string) {
    this._prebootEtherboot = value;
  }
  public resetPrebootEtherboot() {
    this._prebootEtherboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prebootEtherbootInput() {
    return this._prebootEtherboot;
  }

  // preboot_etherboot_server - computed: false, optional: true, required: false
  private _prebootEtherbootServer?: string; 
  public get prebootEtherbootServer() {
    return this.getStringAttribute('preboot_etherboot_server');
  }
  public set prebootEtherbootServer(value: string) {
    this._prebootEtherbootServer = value;
  }
  public resetPrebootEtherbootServer() {
    this._prebootEtherbootServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prebootEtherbootServerInput() {
    return this._prebootEtherbootServer;
  }

  // protected_routerboot - computed: false, optional: true, required: false
  private _protectedRouterboot?: string; 
  public get protectedRouterboot() {
    return this.getStringAttribute('protected_routerboot');
  }
  public set protectedRouterboot(value: string) {
    this._protectedRouterboot = value;
  }
  public resetProtectedRouterboot() {
    this._protectedRouterboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedRouterbootInput() {
    return this._protectedRouterboot;
  }

  // reformat_hold_button - computed: false, optional: true, required: false
  private _reformatHoldButton?: string; 
  public get reformatHoldButton() {
    return this.getStringAttribute('reformat_hold_button');
  }
  public set reformatHoldButton(value: string) {
    this._reformatHoldButton = value;
  }
  public resetReformatHoldButton() {
    this._reformatHoldButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reformatHoldButtonInput() {
    return this._reformatHoldButton;
  }

  // reformat_hold_button_max - computed: false, optional: true, required: false
  private _reformatHoldButtonMax?: string; 
  public get reformatHoldButtonMax() {
    return this.getStringAttribute('reformat_hold_button_max');
  }
  public set reformatHoldButtonMax(value: string) {
    this._reformatHoldButtonMax = value;
  }
  public resetReformatHoldButtonMax() {
    this._reformatHoldButtonMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reformatHoldButtonMaxInput() {
    return this._reformatHoldButtonMax;
  }

  // regulatory_domain_ce - computed: false, optional: true, required: false
  private _regulatoryDomainCe?: boolean | cdktf.IResolvable; 
  public get regulatoryDomainCe() {
    return this.getBooleanAttribute('regulatory_domain_ce');
  }
  public set regulatoryDomainCe(value: boolean | cdktf.IResolvable) {
    this._regulatoryDomainCe = value;
  }
  public resetRegulatoryDomainCe() {
    this._regulatoryDomainCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regulatoryDomainCeInput() {
    return this._regulatoryDomainCe;
  }

  // silent_boot - computed: false, optional: true, required: false
  private _silentBoot?: boolean | cdktf.IResolvable; 
  public get silentBoot() {
    return this.getBooleanAttribute('silent_boot');
  }
  public set silentBoot(value: boolean | cdktf.IResolvable) {
    this._silentBoot = value;
  }
  public resetSilentBoot() {
    this._silentBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silentBootInput() {
    return this._silentBoot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      auto_upgrade: cdktf.booleanToTerraform(this._autoUpgrade),
      baud_rate: cdktf.numberToTerraform(this._baudRate),
      boot_delay: cdktf.stringToTerraform(this._bootDelay),
      boot_device: cdktf.stringToTerraform(this._bootDevice),
      boot_os: cdktf.stringToTerraform(this._bootOs),
      boot_protocol: cdktf.stringToTerraform(this._bootProtocol),
      cpu_frequency: cdktf.stringToTerraform(this._cpuFrequency),
      cpu_mode: cdktf.stringToTerraform(this._cpuMode),
      enable_jumper_reset: cdktf.booleanToTerraform(this._enableJumperReset),
      enter_setup_on: cdktf.stringToTerraform(this._enterSetupOn),
      force_backup_booter: cdktf.booleanToTerraform(this._forceBackupBooter),
      id: cdktf.stringToTerraform(this._id),
      init_delay: cdktf.stringToTerraform(this._initDelay),
      memory_data_rate: cdktf.stringToTerraform(this._memoryDataRate),
      memory_frequency: cdktf.stringToTerraform(this._memoryFrequency),
      preboot_etherboot: cdktf.stringToTerraform(this._prebootEtherboot),
      preboot_etherboot_server: cdktf.stringToTerraform(this._prebootEtherbootServer),
      protected_routerboot: cdktf.stringToTerraform(this._protectedRouterboot),
      reformat_hold_button: cdktf.stringToTerraform(this._reformatHoldButton),
      reformat_hold_button_max: cdktf.stringToTerraform(this._reformatHoldButtonMax),
      regulatory_domain_ce: cdktf.booleanToTerraform(this._regulatoryDomainCe),
      silent_boot: cdktf.booleanToTerraform(this._silentBoot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_upgrade: {
        value: cdktf.booleanToHclTerraform(this._autoUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      baud_rate: {
        value: cdktf.numberToHclTerraform(this._baudRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boot_delay: {
        value: cdktf.stringToHclTerraform(this._bootDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_device: {
        value: cdktf.stringToHclTerraform(this._bootDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_os: {
        value: cdktf.stringToHclTerraform(this._bootOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_protocol: {
        value: cdktf.stringToHclTerraform(this._bootProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_frequency: {
        value: cdktf.stringToHclTerraform(this._cpuFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_mode: {
        value: cdktf.stringToHclTerraform(this._cpuMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_jumper_reset: {
        value: cdktf.booleanToHclTerraform(this._enableJumperReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enter_setup_on: {
        value: cdktf.stringToHclTerraform(this._enterSetupOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_backup_booter: {
        value: cdktf.booleanToHclTerraform(this._forceBackupBooter),
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
      init_delay: {
        value: cdktf.stringToHclTerraform(this._initDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_data_rate: {
        value: cdktf.stringToHclTerraform(this._memoryDataRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_frequency: {
        value: cdktf.stringToHclTerraform(this._memoryFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preboot_etherboot: {
        value: cdktf.stringToHclTerraform(this._prebootEtherboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preboot_etherboot_server: {
        value: cdktf.stringToHclTerraform(this._prebootEtherbootServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_routerboot: {
        value: cdktf.stringToHclTerraform(this._protectedRouterboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reformat_hold_button: {
        value: cdktf.stringToHclTerraform(this._reformatHoldButton),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reformat_hold_button_max: {
        value: cdktf.stringToHclTerraform(this._reformatHoldButtonMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regulatory_domain_ce: {
        value: cdktf.booleanToHclTerraform(this._regulatoryDomainCe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      silent_boot: {
        value: cdktf.booleanToHclTerraform(this._silentBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
