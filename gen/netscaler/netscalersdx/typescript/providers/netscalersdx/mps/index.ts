// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure Message of the Day (contents of motd file), this needs to be set true if user wants to configure message if the day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#config_motd Mps#config_motd}
  */
  readonly configMotd?: boolean | cdktf.IResolvable;
  /**
  * Indicates the type of deployment of NetScaler ADM: standalone or ha or scaleout..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#deployment_type Mps#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Indicates whether the historical tables database migration is in progress or not..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#hist_mig_inprog Mps#hist_mig_inprog}
  */
  readonly histMigInprog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#id Mps#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True if its a cloud deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#is_cloud Mps#is_cloud}
  */
  readonly isCloud?: boolean | cdktf.IResolvable;
  /**
  * True if its a container deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#is_container Mps#is_container}
  */
  readonly isContainer?: boolean | cdktf.IResolvable;
  /**
  * Is Member Of Default Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#is_member_of_default_group Mps#is_member_of_default_group}
  */
  readonly isMemberOfDefaultGroup?: boolean | cdktf.IResolvable;
  /**
  * Indicates the node's state: ACTIVE or PASSIVE in a HA deployment..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#is_passive Mps#is_passive}
  */
  readonly isPassive?: boolean | cdktf.IResolvable;
  /**
  * True, if third party VM is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#is_thirdparty_vm_supported Mps#is_thirdparty_vm_supported}
  */
  readonly isThirdpartyVmSupported?: boolean | cdktf.IResolvable;
  /**
  * Maps API Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#maps_apikey Mps#maps_apikey}
  */
  readonly mapsApikey?: string;
  /**
  * Message of the Day (contents of motd file) that can be shown on UI after successful login. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#motd Mps#motd}
  */
  readonly motd?: string;
  /**
  * privilege_feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#privilege_feature Mps#privilege_feature}
  */
  readonly privilegeFeature?: string;
  /**
  * Indicates the next version the agent needs to upgrade to..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#upgrade_agent_version Mps#upgrade_agent_version}
  */
  readonly upgradeAgentVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps netscalersdx_mps}
*/
export class Mps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_mps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mps to import
  * @param importFromId The id of the existing Mps that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_mps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps netscalersdx_mps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_mps',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configMotd = config.configMotd;
    this._deploymentType = config.deploymentType;
    this._histMigInprog = config.histMigInprog;
    this._id = config.id;
    this._isCloud = config.isCloud;
    this._isContainer = config.isContainer;
    this._isMemberOfDefaultGroup = config.isMemberOfDefaultGroup;
    this._isPassive = config.isPassive;
    this._isThirdpartyVmSupported = config.isThirdpartyVmSupported;
    this._mapsApikey = config.mapsApikey;
    this._motd = config.motd;
    this._privilegeFeature = config.privilegeFeature;
    this._upgradeAgentVersion = config.upgradeAgentVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_motd - computed: true, optional: true, required: false
  private _configMotd?: boolean | cdktf.IResolvable; 
  public get configMotd() {
    return this.getBooleanAttribute('config_motd');
  }
  public set configMotd(value: boolean | cdktf.IResolvable) {
    this._configMotd = value;
  }
  public resetConfigMotd() {
    this._configMotd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMotdInput() {
    return this._configMotd;
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

  // hist_mig_inprog - computed: true, optional: true, required: false
  private _histMigInprog?: boolean | cdktf.IResolvable; 
  public get histMigInprog() {
    return this.getBooleanAttribute('hist_mig_inprog');
  }
  public set histMigInprog(value: boolean | cdktf.IResolvable) {
    this._histMigInprog = value;
  }
  public resetHistMigInprog() {
    this._histMigInprog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histMigInprogInput() {
    return this._histMigInprog;
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

  // is_cloud - computed: true, optional: true, required: false
  private _isCloud?: boolean | cdktf.IResolvable; 
  public get isCloud() {
    return this.getBooleanAttribute('is_cloud');
  }
  public set isCloud(value: boolean | cdktf.IResolvable) {
    this._isCloud = value;
  }
  public resetIsCloud() {
    this._isCloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCloudInput() {
    return this._isCloud;
  }

  // is_container - computed: true, optional: true, required: false
  private _isContainer?: boolean | cdktf.IResolvable; 
  public get isContainer() {
    return this.getBooleanAttribute('is_container');
  }
  public set isContainer(value: boolean | cdktf.IResolvable) {
    this._isContainer = value;
  }
  public resetIsContainer() {
    this._isContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContainerInput() {
    return this._isContainer;
  }

  // is_member_of_default_group - computed: true, optional: true, required: false
  private _isMemberOfDefaultGroup?: boolean | cdktf.IResolvable; 
  public get isMemberOfDefaultGroup() {
    return this.getBooleanAttribute('is_member_of_default_group');
  }
  public set isMemberOfDefaultGroup(value: boolean | cdktf.IResolvable) {
    this._isMemberOfDefaultGroup = value;
  }
  public resetIsMemberOfDefaultGroup() {
    this._isMemberOfDefaultGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemberOfDefaultGroupInput() {
    return this._isMemberOfDefaultGroup;
  }

  // is_passive - computed: true, optional: true, required: false
  private _isPassive?: boolean | cdktf.IResolvable; 
  public get isPassive() {
    return this.getBooleanAttribute('is_passive');
  }
  public set isPassive(value: boolean | cdktf.IResolvable) {
    this._isPassive = value;
  }
  public resetIsPassive() {
    this._isPassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPassiveInput() {
    return this._isPassive;
  }

  // is_thirdparty_vm_supported - computed: true, optional: true, required: false
  private _isThirdpartyVmSupported?: boolean | cdktf.IResolvable; 
  public get isThirdpartyVmSupported() {
    return this.getBooleanAttribute('is_thirdparty_vm_supported');
  }
  public set isThirdpartyVmSupported(value: boolean | cdktf.IResolvable) {
    this._isThirdpartyVmSupported = value;
  }
  public resetIsThirdpartyVmSupported() {
    this._isThirdpartyVmSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isThirdpartyVmSupportedInput() {
    return this._isThirdpartyVmSupported;
  }

  // maps_apikey - computed: true, optional: true, required: false
  private _mapsApikey?: string; 
  public get mapsApikey() {
    return this.getStringAttribute('maps_apikey');
  }
  public set mapsApikey(value: string) {
    this._mapsApikey = value;
  }
  public resetMapsApikey() {
    this._mapsApikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapsApikeyInput() {
    return this._mapsApikey;
  }

  // motd - computed: true, optional: true, required: false
  private _motd?: string; 
  public get motd() {
    return this.getStringAttribute('motd');
  }
  public set motd(value: string) {
    this._motd = value;
  }
  public resetMotd() {
    this._motd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdInput() {
    return this._motd;
  }

  // privilege_feature - computed: true, optional: true, required: false
  private _privilegeFeature?: string; 
  public get privilegeFeature() {
    return this.getStringAttribute('privilege_feature');
  }
  public set privilegeFeature(value: string) {
    this._privilegeFeature = value;
  }
  public resetPrivilegeFeature() {
    this._privilegeFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeFeatureInput() {
    return this._privilegeFeature;
  }

  // upgrade_agent_version - computed: true, optional: true, required: false
  private _upgradeAgentVersion?: string; 
  public get upgradeAgentVersion() {
    return this.getStringAttribute('upgrade_agent_version');
  }
  public set upgradeAgentVersion(value: string) {
    this._upgradeAgentVersion = value;
  }
  public resetUpgradeAgentVersion() {
    this._upgradeAgentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAgentVersionInput() {
    return this._upgradeAgentVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_motd: cdktf.booleanToTerraform(this._configMotd),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      hist_mig_inprog: cdktf.booleanToTerraform(this._histMigInprog),
      id: cdktf.stringToTerraform(this._id),
      is_cloud: cdktf.booleanToTerraform(this._isCloud),
      is_container: cdktf.booleanToTerraform(this._isContainer),
      is_member_of_default_group: cdktf.booleanToTerraform(this._isMemberOfDefaultGroup),
      is_passive: cdktf.booleanToTerraform(this._isPassive),
      is_thirdparty_vm_supported: cdktf.booleanToTerraform(this._isThirdpartyVmSupported),
      maps_apikey: cdktf.stringToTerraform(this._mapsApikey),
      motd: cdktf.stringToTerraform(this._motd),
      privilege_feature: cdktf.stringToTerraform(this._privilegeFeature),
      upgrade_agent_version: cdktf.stringToTerraform(this._upgradeAgentVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_motd: {
        value: cdktf.booleanToHclTerraform(this._configMotd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hist_mig_inprog: {
        value: cdktf.booleanToHclTerraform(this._histMigInprog),
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
      is_cloud: {
        value: cdktf.booleanToHclTerraform(this._isCloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_container: {
        value: cdktf.booleanToHclTerraform(this._isContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_member_of_default_group: {
        value: cdktf.booleanToHclTerraform(this._isMemberOfDefaultGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_passive: {
        value: cdktf.booleanToHclTerraform(this._isPassive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_thirdparty_vm_supported: {
        value: cdktf.booleanToHclTerraform(this._isThirdpartyVmSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maps_apikey: {
        value: cdktf.stringToHclTerraform(this._mapsApikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd: {
        value: cdktf.stringToHclTerraform(this._motd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privilege_feature: {
        value: cdktf.stringToHclTerraform(this._privilegeFeature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_agent_version: {
        value: cdktf.stringToHclTerraform(this._upgradeAgentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
