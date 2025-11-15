// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#accept_agreement LicenseResource#accept_agreement}
  */
  readonly acceptAgreement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#accept_end LicenseResource#accept_end}
  */
  readonly acceptEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#accept_user LicenseResource#accept_user}
  */
  readonly acceptUser?: boolean | cdktf.IResolvable;
  /**
  * License Level Network-Advantage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#boot_level_network_advantage LicenseResource#boot_level_network_advantage}
  */
  readonly bootLevelNetworkAdvantage?: boolean | cdktf.IResolvable;
  /**
  * select add-on to include
  *   - Choices: `dna-advantage`, `dna-essentials`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#boot_level_network_advantage_addon LicenseResource#boot_level_network_advantage_addon}
  */
  readonly bootLevelNetworkAdvantageAddon?: string;
  /**
  * License Level Network-Essentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#boot_level_network_essentials LicenseResource#boot_level_network_essentials}
  */
  readonly bootLevelNetworkEssentials?: boolean | cdktf.IResolvable;
  /**
  * select add-on to include
  *   - Choices: `dna-essentials`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#boot_level_network_essentials_addon LicenseResource#boot_level_network_essentials_addon}
  */
  readonly bootLevelNetworkEssentialsAddon?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#delete_mode LicenseResource#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#device LicenseResource#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#feature_name LicenseResource#feature_name}
  */
  readonly featureName?: string;
  /**
  * Enable 6x1G port bundles
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#feature_port_b_6xonegig LicenseResource#feature_port_b_6xonegig}
  */
  readonly featurePortB6Xonegig?: number;
  /**
  * Enable Bulk port licenses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#feature_port_bulk LicenseResource#feature_port_bulk}
  */
  readonly featurePortBulk?: boolean | cdktf.IResolvable;
  /**
  * Enable 1G port bundles
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#feature_port_onegig LicenseResource#feature_port_onegig}
  */
  readonly featurePortOnegig?: number;
  /**
  * Enable 10G port bundles
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#feature_port_tengig LicenseResource#feature_port_tengig}
  */
  readonly featurePortTengig?: number;
  /**
  * The transport type. If transport-type is set to        callhome then any additional transport settings must        be done from the callhome CLI.        If the transport-type is set to smart, additional        settings are available below.        If the transport-type is set to cslu,        url needs to be set for cisco smart license utility.        If the transport-type is set to off, user has to manually        upload the usage reports.
  *   - Choices: `Off`, `automatic`, `callhome`, `cslu`, `smart`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#smart_transport_type LicenseResource#smart_transport_type}
  */
  readonly smartTransportType?: string;
  /**
  * Specify the URL to be used for sending utility usage reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#smart_url_cslu LicenseResource#smart_url_cslu}
  */
  readonly smartUrlCslu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#udi_pid LicenseResource#udi_pid}
  */
  readonly udiPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#udi_sn LicenseResource#udi_sn}
  */
  readonly udiSn?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license iosxe_license}
*/
export class LicenseResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseResource to import
  * @param importFromId The id of the existing LicenseResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/license iosxe_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicenseResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_license',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptAgreement = config.acceptAgreement;
    this._acceptEnd = config.acceptEnd;
    this._acceptUser = config.acceptUser;
    this._bootLevelNetworkAdvantage = config.bootLevelNetworkAdvantage;
    this._bootLevelNetworkAdvantageAddon = config.bootLevelNetworkAdvantageAddon;
    this._bootLevelNetworkEssentials = config.bootLevelNetworkEssentials;
    this._bootLevelNetworkEssentialsAddon = config.bootLevelNetworkEssentialsAddon;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._featureName = config.featureName;
    this._featurePortB6Xonegig = config.featurePortB6Xonegig;
    this._featurePortBulk = config.featurePortBulk;
    this._featurePortOnegig = config.featurePortOnegig;
    this._featurePortTengig = config.featurePortTengig;
    this._smartTransportType = config.smartTransportType;
    this._smartUrlCslu = config.smartUrlCslu;
    this._udiPid = config.udiPid;
    this._udiSn = config.udiSn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_agreement - computed: false, optional: true, required: false
  private _acceptAgreement?: boolean | cdktf.IResolvable; 
  public get acceptAgreement() {
    return this.getBooleanAttribute('accept_agreement');
  }
  public set acceptAgreement(value: boolean | cdktf.IResolvable) {
    this._acceptAgreement = value;
  }
  public resetAcceptAgreement() {
    this._acceptAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAgreementInput() {
    return this._acceptAgreement;
  }

  // accept_end - computed: false, optional: true, required: false
  private _acceptEnd?: boolean | cdktf.IResolvable; 
  public get acceptEnd() {
    return this.getBooleanAttribute('accept_end');
  }
  public set acceptEnd(value: boolean | cdktf.IResolvable) {
    this._acceptEnd = value;
  }
  public resetAcceptEnd() {
    this._acceptEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEndInput() {
    return this._acceptEnd;
  }

  // accept_user - computed: false, optional: true, required: false
  private _acceptUser?: boolean | cdktf.IResolvable; 
  public get acceptUser() {
    return this.getBooleanAttribute('accept_user');
  }
  public set acceptUser(value: boolean | cdktf.IResolvable) {
    this._acceptUser = value;
  }
  public resetAcceptUser() {
    this._acceptUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptUserInput() {
    return this._acceptUser;
  }

  // boot_level_network_advantage - computed: false, optional: true, required: false
  private _bootLevelNetworkAdvantage?: boolean | cdktf.IResolvable; 
  public get bootLevelNetworkAdvantage() {
    return this.getBooleanAttribute('boot_level_network_advantage');
  }
  public set bootLevelNetworkAdvantage(value: boolean | cdktf.IResolvable) {
    this._bootLevelNetworkAdvantage = value;
  }
  public resetBootLevelNetworkAdvantage() {
    this._bootLevelNetworkAdvantage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootLevelNetworkAdvantageInput() {
    return this._bootLevelNetworkAdvantage;
  }

  // boot_level_network_advantage_addon - computed: false, optional: true, required: false
  private _bootLevelNetworkAdvantageAddon?: string; 
  public get bootLevelNetworkAdvantageAddon() {
    return this.getStringAttribute('boot_level_network_advantage_addon');
  }
  public set bootLevelNetworkAdvantageAddon(value: string) {
    this._bootLevelNetworkAdvantageAddon = value;
  }
  public resetBootLevelNetworkAdvantageAddon() {
    this._bootLevelNetworkAdvantageAddon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootLevelNetworkAdvantageAddonInput() {
    return this._bootLevelNetworkAdvantageAddon;
  }

  // boot_level_network_essentials - computed: false, optional: true, required: false
  private _bootLevelNetworkEssentials?: boolean | cdktf.IResolvable; 
  public get bootLevelNetworkEssentials() {
    return this.getBooleanAttribute('boot_level_network_essentials');
  }
  public set bootLevelNetworkEssentials(value: boolean | cdktf.IResolvable) {
    this._bootLevelNetworkEssentials = value;
  }
  public resetBootLevelNetworkEssentials() {
    this._bootLevelNetworkEssentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootLevelNetworkEssentialsInput() {
    return this._bootLevelNetworkEssentials;
  }

  // boot_level_network_essentials_addon - computed: false, optional: true, required: false
  private _bootLevelNetworkEssentialsAddon?: string; 
  public get bootLevelNetworkEssentialsAddon() {
    return this.getStringAttribute('boot_level_network_essentials_addon');
  }
  public set bootLevelNetworkEssentialsAddon(value: string) {
    this._bootLevelNetworkEssentialsAddon = value;
  }
  public resetBootLevelNetworkEssentialsAddon() {
    this._bootLevelNetworkEssentialsAddon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootLevelNetworkEssentialsAddonInput() {
    return this._bootLevelNetworkEssentialsAddon;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // feature_port_b_6xonegig - computed: false, optional: true, required: false
  private _featurePortB6Xonegig?: number; 
  public get featurePortB6Xonegig() {
    return this.getNumberAttribute('feature_port_b_6xonegig');
  }
  public set featurePortB6Xonegig(value: number) {
    this._featurePortB6Xonegig = value;
  }
  public resetFeaturePortB6Xonegig() {
    this._featurePortB6Xonegig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePortB6XonegigInput() {
    return this._featurePortB6Xonegig;
  }

  // feature_port_bulk - computed: false, optional: true, required: false
  private _featurePortBulk?: boolean | cdktf.IResolvable; 
  public get featurePortBulk() {
    return this.getBooleanAttribute('feature_port_bulk');
  }
  public set featurePortBulk(value: boolean | cdktf.IResolvable) {
    this._featurePortBulk = value;
  }
  public resetFeaturePortBulk() {
    this._featurePortBulk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePortBulkInput() {
    return this._featurePortBulk;
  }

  // feature_port_onegig - computed: false, optional: true, required: false
  private _featurePortOnegig?: number; 
  public get featurePortOnegig() {
    return this.getNumberAttribute('feature_port_onegig');
  }
  public set featurePortOnegig(value: number) {
    this._featurePortOnegig = value;
  }
  public resetFeaturePortOnegig() {
    this._featurePortOnegig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePortOnegigInput() {
    return this._featurePortOnegig;
  }

  // feature_port_tengig - computed: false, optional: true, required: false
  private _featurePortTengig?: number; 
  public get featurePortTengig() {
    return this.getNumberAttribute('feature_port_tengig');
  }
  public set featurePortTengig(value: number) {
    this._featurePortTengig = value;
  }
  public resetFeaturePortTengig() {
    this._featurePortTengig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePortTengigInput() {
    return this._featurePortTengig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // smart_transport_type - computed: false, optional: true, required: false
  private _smartTransportType?: string; 
  public get smartTransportType() {
    return this.getStringAttribute('smart_transport_type');
  }
  public set smartTransportType(value: string) {
    this._smartTransportType = value;
  }
  public resetSmartTransportType() {
    this._smartTransportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartTransportTypeInput() {
    return this._smartTransportType;
  }

  // smart_url_cslu - computed: false, optional: true, required: false
  private _smartUrlCslu?: string; 
  public get smartUrlCslu() {
    return this.getStringAttribute('smart_url_cslu');
  }
  public set smartUrlCslu(value: string) {
    this._smartUrlCslu = value;
  }
  public resetSmartUrlCslu() {
    this._smartUrlCslu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartUrlCsluInput() {
    return this._smartUrlCslu;
  }

  // udi_pid - computed: false, optional: true, required: false
  private _udiPid?: string; 
  public get udiPid() {
    return this.getStringAttribute('udi_pid');
  }
  public set udiPid(value: string) {
    this._udiPid = value;
  }
  public resetUdiPid() {
    this._udiPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udiPidInput() {
    return this._udiPid;
  }

  // udi_sn - computed: false, optional: true, required: false
  private _udiSn?: string; 
  public get udiSn() {
    return this.getStringAttribute('udi_sn');
  }
  public set udiSn(value: string) {
    this._udiSn = value;
  }
  public resetUdiSn() {
    this._udiSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udiSnInput() {
    return this._udiSn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_agreement: cdktf.booleanToTerraform(this._acceptAgreement),
      accept_end: cdktf.booleanToTerraform(this._acceptEnd),
      accept_user: cdktf.booleanToTerraform(this._acceptUser),
      boot_level_network_advantage: cdktf.booleanToTerraform(this._bootLevelNetworkAdvantage),
      boot_level_network_advantage_addon: cdktf.stringToTerraform(this._bootLevelNetworkAdvantageAddon),
      boot_level_network_essentials: cdktf.booleanToTerraform(this._bootLevelNetworkEssentials),
      boot_level_network_essentials_addon: cdktf.stringToTerraform(this._bootLevelNetworkEssentialsAddon),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      feature_name: cdktf.stringToTerraform(this._featureName),
      feature_port_b_6xonegig: cdktf.numberToTerraform(this._featurePortB6Xonegig),
      feature_port_bulk: cdktf.booleanToTerraform(this._featurePortBulk),
      feature_port_onegig: cdktf.numberToTerraform(this._featurePortOnegig),
      feature_port_tengig: cdktf.numberToTerraform(this._featurePortTengig),
      smart_transport_type: cdktf.stringToTerraform(this._smartTransportType),
      smart_url_cslu: cdktf.stringToTerraform(this._smartUrlCslu),
      udi_pid: cdktf.stringToTerraform(this._udiPid),
      udi_sn: cdktf.stringToTerraform(this._udiSn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_agreement: {
        value: cdktf.booleanToHclTerraform(this._acceptAgreement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accept_end: {
        value: cdktf.booleanToHclTerraform(this._acceptEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accept_user: {
        value: cdktf.booleanToHclTerraform(this._acceptUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_level_network_advantage: {
        value: cdktf.booleanToHclTerraform(this._bootLevelNetworkAdvantage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_level_network_advantage_addon: {
        value: cdktf.stringToHclTerraform(this._bootLevelNetworkAdvantageAddon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_level_network_essentials: {
        value: cdktf.booleanToHclTerraform(this._bootLevelNetworkEssentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_level_network_essentials_addon: {
        value: cdktf.stringToHclTerraform(this._bootLevelNetworkEssentialsAddon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_name: {
        value: cdktf.stringToHclTerraform(this._featureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_port_b_6xonegig: {
        value: cdktf.numberToHclTerraform(this._featurePortB6Xonegig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_port_bulk: {
        value: cdktf.booleanToHclTerraform(this._featurePortBulk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_port_onegig: {
        value: cdktf.numberToHclTerraform(this._featurePortOnegig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_port_tengig: {
        value: cdktf.numberToHclTerraform(this._featurePortTengig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smart_transport_type: {
        value: cdktf.stringToHclTerraform(this._smartTransportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_url_cslu: {
        value: cdktf.stringToHclTerraform(this._smartUrlCslu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udi_pid: {
        value: cdktf.stringToHclTerraform(this._udiPid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udi_sn: {
        value: cdktf.stringToHclTerraform(this._udiSn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
