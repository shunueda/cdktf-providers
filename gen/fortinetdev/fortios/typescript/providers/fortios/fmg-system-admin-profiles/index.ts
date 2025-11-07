// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmgSystemAdminProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#adom_policy_packages FmgSystemAdminProfiles#adom_policy_packages}
  */
  readonly adomPolicyPackages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#adom_switch FmgSystemAdminProfiles#adom_switch}
  */
  readonly adomSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#assignment FmgSystemAdminProfiles#assignment}
  */
  readonly assignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#config_retrieve FmgSystemAdminProfiles#config_retrieve}
  */
  readonly configRetrieve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#config_revert FmgSystemAdminProfiles#config_revert}
  */
  readonly configRevert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#consistency_check FmgSystemAdminProfiles#consistency_check}
  */
  readonly consistencyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#deploy_management FmgSystemAdminProfiles#deploy_management}
  */
  readonly deployManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#description FmgSystemAdminProfiles#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_ap FmgSystemAdminProfiles#device_ap}
  */
  readonly deviceAp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_config FmgSystemAdminProfiles#device_config}
  */
  readonly deviceConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_forticlient FmgSystemAdminProfiles#device_forticlient}
  */
  readonly deviceForticlient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_fortiswitch FmgSystemAdminProfiles#device_fortiswitch}
  */
  readonly deviceFortiswitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_manager FmgSystemAdminProfiles#device_manager}
  */
  readonly deviceManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_operation FmgSystemAdminProfiles#device_operation}
  */
  readonly deviceOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_profile FmgSystemAdminProfiles#device_profile}
  */
  readonly deviceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_revision_deletion FmgSystemAdminProfiles#device_revision_deletion}
  */
  readonly deviceRevisionDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#device_wan_link_load_balance FmgSystemAdminProfiles#device_wan_link_load_balance}
  */
  readonly deviceWanLinkLoadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#fortiguard_center FmgSystemAdminProfiles#fortiguard_center}
  */
  readonly fortiguardCenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#fortiguard_center_advanced FmgSystemAdminProfiles#fortiguard_center_advanced}
  */
  readonly fortiguardCenterAdvanced?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#fortiguard_center_firmware_managerment FmgSystemAdminProfiles#fortiguard_center_firmware_managerment}
  */
  readonly fortiguardCenterFirmwareManagerment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#fortiguard_center_licensing FmgSystemAdminProfiles#fortiguard_center_licensing}
  */
  readonly fortiguardCenterLicensing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#global_policy_packages FmgSystemAdminProfiles#global_policy_packages}
  */
  readonly globalPolicyPackages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#id FmgSystemAdminProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#import_policy_packages FmgSystemAdminProfiles#import_policy_packages}
  */
  readonly importPolicyPackages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#intf_mapping FmgSystemAdminProfiles#intf_mapping}
  */
  readonly intfMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#log_viewer FmgSystemAdminProfiles#log_viewer}
  */
  readonly logViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#policy_objects FmgSystemAdminProfiles#policy_objects}
  */
  readonly policyObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#profileid FmgSystemAdminProfiles#profileid}
  */
  readonly profileid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#set_install_targets FmgSystemAdminProfiles#set_install_targets}
  */
  readonly setInstallTargets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#system_setting FmgSystemAdminProfiles#system_setting}
  */
  readonly systemSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#terminal_access FmgSystemAdminProfiles#terminal_access}
  */
  readonly terminalAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#vpn_manager FmgSystemAdminProfiles#vpn_manager}
  */
  readonly vpnManager?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles fortios_fmg_system_admin_profiles}
*/
export class FmgSystemAdminProfiles extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_fmg_system_admin_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmgSystemAdminProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmgSystemAdminProfiles to import
  * @param importFromId The id of the existing FmgSystemAdminProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmgSystemAdminProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_fmg_system_admin_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/fmg_system_admin_profiles fortios_fmg_system_admin_profiles} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmgSystemAdminProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: FmgSystemAdminProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_fmg_system_admin_profiles',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adomPolicyPackages = config.adomPolicyPackages;
    this._adomSwitch = config.adomSwitch;
    this._assignment = config.assignment;
    this._configRetrieve = config.configRetrieve;
    this._configRevert = config.configRevert;
    this._consistencyCheck = config.consistencyCheck;
    this._deployManagement = config.deployManagement;
    this._description = config.description;
    this._deviceAp = config.deviceAp;
    this._deviceConfig = config.deviceConfig;
    this._deviceForticlient = config.deviceForticlient;
    this._deviceFortiswitch = config.deviceFortiswitch;
    this._deviceManager = config.deviceManager;
    this._deviceOperation = config.deviceOperation;
    this._deviceProfile = config.deviceProfile;
    this._deviceRevisionDeletion = config.deviceRevisionDeletion;
    this._deviceWanLinkLoadBalance = config.deviceWanLinkLoadBalance;
    this._fortiguardCenter = config.fortiguardCenter;
    this._fortiguardCenterAdvanced = config.fortiguardCenterAdvanced;
    this._fortiguardCenterFirmwareManagerment = config.fortiguardCenterFirmwareManagerment;
    this._fortiguardCenterLicensing = config.fortiguardCenterLicensing;
    this._globalPolicyPackages = config.globalPolicyPackages;
    this._id = config.id;
    this._importPolicyPackages = config.importPolicyPackages;
    this._intfMapping = config.intfMapping;
    this._logViewer = config.logViewer;
    this._policyObjects = config.policyObjects;
    this._profileid = config.profileid;
    this._setInstallTargets = config.setInstallTargets;
    this._systemSetting = config.systemSetting;
    this._terminalAccess = config.terminalAccess;
    this._vpnManager = config.vpnManager;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom_policy_packages - computed: false, optional: true, required: false
  private _adomPolicyPackages?: string; 
  public get adomPolicyPackages() {
    return this.getStringAttribute('adom_policy_packages');
  }
  public set adomPolicyPackages(value: string) {
    this._adomPolicyPackages = value;
  }
  public resetAdomPolicyPackages() {
    this._adomPolicyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomPolicyPackagesInput() {
    return this._adomPolicyPackages;
  }

  // adom_switch - computed: false, optional: true, required: false
  private _adomSwitch?: string; 
  public get adomSwitch() {
    return this.getStringAttribute('adom_switch');
  }
  public set adomSwitch(value: string) {
    this._adomSwitch = value;
  }
  public resetAdomSwitch() {
    this._adomSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomSwitchInput() {
    return this._adomSwitch;
  }

  // assignment - computed: false, optional: true, required: false
  private _assignment?: string; 
  public get assignment() {
    return this.getStringAttribute('assignment');
  }
  public set assignment(value: string) {
    this._assignment = value;
  }
  public resetAssignment() {
    this._assignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment;
  }

  // config_retrieve - computed: false, optional: true, required: false
  private _configRetrieve?: string; 
  public get configRetrieve() {
    return this.getStringAttribute('config_retrieve');
  }
  public set configRetrieve(value: string) {
    this._configRetrieve = value;
  }
  public resetConfigRetrieve() {
    this._configRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRetrieveInput() {
    return this._configRetrieve;
  }

  // config_revert - computed: false, optional: true, required: false
  private _configRevert?: string; 
  public get configRevert() {
    return this.getStringAttribute('config_revert');
  }
  public set configRevert(value: string) {
    this._configRevert = value;
  }
  public resetConfigRevert() {
    this._configRevert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRevertInput() {
    return this._configRevert;
  }

  // consistency_check - computed: false, optional: true, required: false
  private _consistencyCheck?: string; 
  public get consistencyCheck() {
    return this.getStringAttribute('consistency_check');
  }
  public set consistencyCheck(value: string) {
    this._consistencyCheck = value;
  }
  public resetConsistencyCheck() {
    this._consistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyCheckInput() {
    return this._consistencyCheck;
  }

  // deploy_management - computed: false, optional: true, required: false
  private _deployManagement?: string; 
  public get deployManagement() {
    return this.getStringAttribute('deploy_management');
  }
  public set deployManagement(value: string) {
    this._deployManagement = value;
  }
  public resetDeployManagement() {
    this._deployManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployManagementInput() {
    return this._deployManagement;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_ap - computed: false, optional: true, required: false
  private _deviceAp?: string; 
  public get deviceAp() {
    return this.getStringAttribute('device_ap');
  }
  public set deviceAp(value: string) {
    this._deviceAp = value;
  }
  public resetDeviceAp() {
    this._deviceAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceApInput() {
    return this._deviceAp;
  }

  // device_config - computed: false, optional: true, required: false
  private _deviceConfig?: string; 
  public get deviceConfig() {
    return this.getStringAttribute('device_config');
  }
  public set deviceConfig(value: string) {
    this._deviceConfig = value;
  }
  public resetDeviceConfig() {
    this._deviceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConfigInput() {
    return this._deviceConfig;
  }

  // device_forticlient - computed: false, optional: true, required: false
  private _deviceForticlient?: string; 
  public get deviceForticlient() {
    return this.getStringAttribute('device_forticlient');
  }
  public set deviceForticlient(value: string) {
    this._deviceForticlient = value;
  }
  public resetDeviceForticlient() {
    this._deviceForticlient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceForticlientInput() {
    return this._deviceForticlient;
  }

  // device_fortiswitch - computed: false, optional: true, required: false
  private _deviceFortiswitch?: string; 
  public get deviceFortiswitch() {
    return this.getStringAttribute('device_fortiswitch');
  }
  public set deviceFortiswitch(value: string) {
    this._deviceFortiswitch = value;
  }
  public resetDeviceFortiswitch() {
    this._deviceFortiswitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFortiswitchInput() {
    return this._deviceFortiswitch;
  }

  // device_manager - computed: false, optional: true, required: false
  private _deviceManager?: string; 
  public get deviceManager() {
    return this.getStringAttribute('device_manager');
  }
  public set deviceManager(value: string) {
    this._deviceManager = value;
  }
  public resetDeviceManager() {
    this._deviceManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagerInput() {
    return this._deviceManager;
  }

  // device_operation - computed: false, optional: true, required: false
  private _deviceOperation?: string; 
  public get deviceOperation() {
    return this.getStringAttribute('device_operation');
  }
  public set deviceOperation(value: string) {
    this._deviceOperation = value;
  }
  public resetDeviceOperation() {
    this._deviceOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOperationInput() {
    return this._deviceOperation;
  }

  // device_profile - computed: false, optional: true, required: false
  private _deviceProfile?: string; 
  public get deviceProfile() {
    return this.getStringAttribute('device_profile');
  }
  public set deviceProfile(value: string) {
    this._deviceProfile = value;
  }
  public resetDeviceProfile() {
    this._deviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProfileInput() {
    return this._deviceProfile;
  }

  // device_revision_deletion - computed: false, optional: true, required: false
  private _deviceRevisionDeletion?: string; 
  public get deviceRevisionDeletion() {
    return this.getStringAttribute('device_revision_deletion');
  }
  public set deviceRevisionDeletion(value: string) {
    this._deviceRevisionDeletion = value;
  }
  public resetDeviceRevisionDeletion() {
    this._deviceRevisionDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRevisionDeletionInput() {
    return this._deviceRevisionDeletion;
  }

  // device_wan_link_load_balance - computed: false, optional: true, required: false
  private _deviceWanLinkLoadBalance?: string; 
  public get deviceWanLinkLoadBalance() {
    return this.getStringAttribute('device_wan_link_load_balance');
  }
  public set deviceWanLinkLoadBalance(value: string) {
    this._deviceWanLinkLoadBalance = value;
  }
  public resetDeviceWanLinkLoadBalance() {
    this._deviceWanLinkLoadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceWanLinkLoadBalanceInput() {
    return this._deviceWanLinkLoadBalance;
  }

  // fortiguard_center - computed: false, optional: true, required: false
  private _fortiguardCenter?: string; 
  public get fortiguardCenter() {
    return this.getStringAttribute('fortiguard_center');
  }
  public set fortiguardCenter(value: string) {
    this._fortiguardCenter = value;
  }
  public resetFortiguardCenter() {
    this._fortiguardCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCenterInput() {
    return this._fortiguardCenter;
  }

  // fortiguard_center_advanced - computed: false, optional: true, required: false
  private _fortiguardCenterAdvanced?: string; 
  public get fortiguardCenterAdvanced() {
    return this.getStringAttribute('fortiguard_center_advanced');
  }
  public set fortiguardCenterAdvanced(value: string) {
    this._fortiguardCenterAdvanced = value;
  }
  public resetFortiguardCenterAdvanced() {
    this._fortiguardCenterAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCenterAdvancedInput() {
    return this._fortiguardCenterAdvanced;
  }

  // fortiguard_center_firmware_managerment - computed: false, optional: true, required: false
  private _fortiguardCenterFirmwareManagerment?: string; 
  public get fortiguardCenterFirmwareManagerment() {
    return this.getStringAttribute('fortiguard_center_firmware_managerment');
  }
  public set fortiguardCenterFirmwareManagerment(value: string) {
    this._fortiguardCenterFirmwareManagerment = value;
  }
  public resetFortiguardCenterFirmwareManagerment() {
    this._fortiguardCenterFirmwareManagerment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCenterFirmwareManagermentInput() {
    return this._fortiguardCenterFirmwareManagerment;
  }

  // fortiguard_center_licensing - computed: false, optional: true, required: false
  private _fortiguardCenterLicensing?: string; 
  public get fortiguardCenterLicensing() {
    return this.getStringAttribute('fortiguard_center_licensing');
  }
  public set fortiguardCenterLicensing(value: string) {
    this._fortiguardCenterLicensing = value;
  }
  public resetFortiguardCenterLicensing() {
    this._fortiguardCenterLicensing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCenterLicensingInput() {
    return this._fortiguardCenterLicensing;
  }

  // global_policy_packages - computed: false, optional: true, required: false
  private _globalPolicyPackages?: string; 
  public get globalPolicyPackages() {
    return this.getStringAttribute('global_policy_packages');
  }
  public set globalPolicyPackages(value: string) {
    this._globalPolicyPackages = value;
  }
  public resetGlobalPolicyPackages() {
    this._globalPolicyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyPackagesInput() {
    return this._globalPolicyPackages;
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

  // import_policy_packages - computed: false, optional: true, required: false
  private _importPolicyPackages?: string; 
  public get importPolicyPackages() {
    return this.getStringAttribute('import_policy_packages');
  }
  public set importPolicyPackages(value: string) {
    this._importPolicyPackages = value;
  }
  public resetImportPolicyPackages() {
    this._importPolicyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyPackagesInput() {
    return this._importPolicyPackages;
  }

  // intf_mapping - computed: false, optional: true, required: false
  private _intfMapping?: string; 
  public get intfMapping() {
    return this.getStringAttribute('intf_mapping');
  }
  public set intfMapping(value: string) {
    this._intfMapping = value;
  }
  public resetIntfMapping() {
    this._intfMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfMappingInput() {
    return this._intfMapping;
  }

  // log_viewer - computed: false, optional: true, required: false
  private _logViewer?: string; 
  public get logViewer() {
    return this.getStringAttribute('log_viewer');
  }
  public set logViewer(value: string) {
    this._logViewer = value;
  }
  public resetLogViewer() {
    this._logViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViewerInput() {
    return this._logViewer;
  }

  // policy_objects - computed: false, optional: true, required: false
  private _policyObjects?: string; 
  public get policyObjects() {
    return this.getStringAttribute('policy_objects');
  }
  public set policyObjects(value: string) {
    this._policyObjects = value;
  }
  public resetPolicyObjects() {
    this._policyObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectsInput() {
    return this._policyObjects;
  }

  // profileid - computed: false, optional: false, required: true
  private _profileid?: string; 
  public get profileid() {
    return this.getStringAttribute('profileid');
  }
  public set profileid(value: string) {
    this._profileid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileidInput() {
    return this._profileid;
  }

  // set_install_targets - computed: false, optional: true, required: false
  private _setInstallTargets?: string; 
  public get setInstallTargets() {
    return this.getStringAttribute('set_install_targets');
  }
  public set setInstallTargets(value: string) {
    this._setInstallTargets = value;
  }
  public resetSetInstallTargets() {
    this._setInstallTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInstallTargetsInput() {
    return this._setInstallTargets;
  }

  // system_setting - computed: false, optional: true, required: false
  private _systemSetting?: string; 
  public get systemSetting() {
    return this.getStringAttribute('system_setting');
  }
  public set systemSetting(value: string) {
    this._systemSetting = value;
  }
  public resetSystemSetting() {
    this._systemSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSettingInput() {
    return this._systemSetting;
  }

  // terminal_access - computed: false, optional: true, required: false
  private _terminalAccess?: string; 
  public get terminalAccess() {
    return this.getStringAttribute('terminal_access');
  }
  public set terminalAccess(value: string) {
    this._terminalAccess = value;
  }
  public resetTerminalAccess() {
    this._terminalAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalAccessInput() {
    return this._terminalAccess;
  }

  // vpn_manager - computed: false, optional: true, required: false
  private _vpnManager?: string; 
  public get vpnManager() {
    return this.getStringAttribute('vpn_manager');
  }
  public set vpnManager(value: string) {
    this._vpnManager = value;
  }
  public resetVpnManager() {
    this._vpnManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnManagerInput() {
    return this._vpnManager;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom_policy_packages: cdktf.stringToTerraform(this._adomPolicyPackages),
      adom_switch: cdktf.stringToTerraform(this._adomSwitch),
      assignment: cdktf.stringToTerraform(this._assignment),
      config_retrieve: cdktf.stringToTerraform(this._configRetrieve),
      config_revert: cdktf.stringToTerraform(this._configRevert),
      consistency_check: cdktf.stringToTerraform(this._consistencyCheck),
      deploy_management: cdktf.stringToTerraform(this._deployManagement),
      description: cdktf.stringToTerraform(this._description),
      device_ap: cdktf.stringToTerraform(this._deviceAp),
      device_config: cdktf.stringToTerraform(this._deviceConfig),
      device_forticlient: cdktf.stringToTerraform(this._deviceForticlient),
      device_fortiswitch: cdktf.stringToTerraform(this._deviceFortiswitch),
      device_manager: cdktf.stringToTerraform(this._deviceManager),
      device_operation: cdktf.stringToTerraform(this._deviceOperation),
      device_profile: cdktf.stringToTerraform(this._deviceProfile),
      device_revision_deletion: cdktf.stringToTerraform(this._deviceRevisionDeletion),
      device_wan_link_load_balance: cdktf.stringToTerraform(this._deviceWanLinkLoadBalance),
      fortiguard_center: cdktf.stringToTerraform(this._fortiguardCenter),
      fortiguard_center_advanced: cdktf.stringToTerraform(this._fortiguardCenterAdvanced),
      fortiguard_center_firmware_managerment: cdktf.stringToTerraform(this._fortiguardCenterFirmwareManagerment),
      fortiguard_center_licensing: cdktf.stringToTerraform(this._fortiguardCenterLicensing),
      global_policy_packages: cdktf.stringToTerraform(this._globalPolicyPackages),
      id: cdktf.stringToTerraform(this._id),
      import_policy_packages: cdktf.stringToTerraform(this._importPolicyPackages),
      intf_mapping: cdktf.stringToTerraform(this._intfMapping),
      log_viewer: cdktf.stringToTerraform(this._logViewer),
      policy_objects: cdktf.stringToTerraform(this._policyObjects),
      profileid: cdktf.stringToTerraform(this._profileid),
      set_install_targets: cdktf.stringToTerraform(this._setInstallTargets),
      system_setting: cdktf.stringToTerraform(this._systemSetting),
      terminal_access: cdktf.stringToTerraform(this._terminalAccess),
      vpn_manager: cdktf.stringToTerraform(this._vpnManager),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom_policy_packages: {
        value: cdktf.stringToHclTerraform(this._adomPolicyPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_switch: {
        value: cdktf.stringToHclTerraform(this._adomSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment: {
        value: cdktf.stringToHclTerraform(this._assignment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_retrieve: {
        value: cdktf.stringToHclTerraform(this._configRetrieve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_revert: {
        value: cdktf.stringToHclTerraform(this._configRevert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consistency_check: {
        value: cdktf.stringToHclTerraform(this._consistencyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_management: {
        value: cdktf.stringToHclTerraform(this._deployManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_ap: {
        value: cdktf.stringToHclTerraform(this._deviceAp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_config: {
        value: cdktf.stringToHclTerraform(this._deviceConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_forticlient: {
        value: cdktf.stringToHclTerraform(this._deviceForticlient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_fortiswitch: {
        value: cdktf.stringToHclTerraform(this._deviceFortiswitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_manager: {
        value: cdktf.stringToHclTerraform(this._deviceManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_operation: {
        value: cdktf.stringToHclTerraform(this._deviceOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_profile: {
        value: cdktf.stringToHclTerraform(this._deviceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_revision_deletion: {
        value: cdktf.stringToHclTerraform(this._deviceRevisionDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_wan_link_load_balance: {
        value: cdktf.stringToHclTerraform(this._deviceWanLinkLoadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_center: {
        value: cdktf.stringToHclTerraform(this._fortiguardCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_center_advanced: {
        value: cdktf.stringToHclTerraform(this._fortiguardCenterAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_center_firmware_managerment: {
        value: cdktf.stringToHclTerraform(this._fortiguardCenterFirmwareManagerment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_center_licensing: {
        value: cdktf.stringToHclTerraform(this._fortiguardCenterLicensing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_policy_packages: {
        value: cdktf.stringToHclTerraform(this._globalPolicyPackages),
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
      import_policy_packages: {
        value: cdktf.stringToHclTerraform(this._importPolicyPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intf_mapping: {
        value: cdktf.stringToHclTerraform(this._intfMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_viewer: {
        value: cdktf.stringToHclTerraform(this._logViewer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_objects: {
        value: cdktf.stringToHclTerraform(this._policyObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profileid: {
        value: cdktf.stringToHclTerraform(this._profileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_install_targets: {
        value: cdktf.stringToHclTerraform(this._setInstallTargets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_setting: {
        value: cdktf.stringToHclTerraform(this._systemSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminal_access: {
        value: cdktf.stringToHclTerraform(this._terminalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_manager: {
        value: cdktf.stringToHclTerraform(this._vpnManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
