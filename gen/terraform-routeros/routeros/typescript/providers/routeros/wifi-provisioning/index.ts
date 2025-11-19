// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiProvisioningConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#___path___ WifiProvisioning#___path___}
  */
  readonly path?: string;
  /**
  * Provisioning action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#action WifiProvisioning#action}
  */
  readonly action?: string;
  /**
  * Match CAPs by IPs within configured address ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#address_ranges WifiProvisioning#address_ranges}
  */
  readonly addressRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#comment WifiProvisioning#comment}
  */
  readonly comment?: string;
  /**
  * Regular expression to match radios by common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#common_name_regexp WifiProvisioning#common_name_regexp}
  */
  readonly commonNameRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#disabled WifiProvisioning#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#id WifiProvisioning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Regular expression to match radios by router identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#identity_regexp WifiProvisioning#identity_regexp}
  */
  readonly identityRegexp?: string;
  /**
  * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration profile will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#master_configuration WifiProvisioning#master_configuration}
  */
  readonly masterConfiguration?: string;
  /**
  * Specify the format of the CAP interface name creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#name_format WifiProvisioning#name_format}
  */
  readonly nameFormat?: string;
  /**
  * MAC address of radio to be matched, empty MAC means match all MAC addresses. `00:00:00:00:00:00` is not considered empty MAC-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#radio_mac WifiProvisioning#radio_mac}
  */
  readonly radioMac?: string;
  /**
  * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#slave_configurations WifiProvisioning#slave_configurations}
  */
  readonly slaveConfigurations?: string[];
  /**
  * The name format of the slave CAP interfaces. This option is available in RouterOS starting from version 7.16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#slave_name_format WifiProvisioning#slave_name_format}
  */
  readonly slaveNameFormat?: string;
  /**
  * Match CAPs by supported modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#supported_bands WifiProvisioning#supported_bands}
  */
  readonly supportedBands?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning routeros_wifi_provisioning}
*/
export class WifiProvisioning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_provisioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiProvisioning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiProvisioning to import
  * @param importFromId The id of the existing WifiProvisioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiProvisioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_provisioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/wifi_provisioning routeros_wifi_provisioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiProvisioningConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WifiProvisioningConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_provisioning',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
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
    this._action = config.action;
    this._addressRanges = config.addressRanges;
    this._comment = config.comment;
    this._commonNameRegexp = config.commonNameRegexp;
    this._disabled = config.disabled;
    this._id = config.id;
    this._identityRegexp = config.identityRegexp;
    this._masterConfiguration = config.masterConfiguration;
    this._nameFormat = config.nameFormat;
    this._radioMac = config.radioMac;
    this._slaveConfigurations = config.slaveConfigurations;
    this._slaveNameFormat = config.slaveNameFormat;
    this._supportedBands = config.supportedBands;
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

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address_ranges - computed: false, optional: true, required: false
  private _addressRanges?: string[]; 
  public get addressRanges() {
    return this.getListAttribute('address_ranges');
  }
  public set addressRanges(value: string[]) {
    this._addressRanges = value;
  }
  public resetAddressRanges() {
    this._addressRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressRangesInput() {
    return this._addressRanges;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // common_name_regexp - computed: false, optional: true, required: false
  private _commonNameRegexp?: string; 
  public get commonNameRegexp() {
    return this.getStringAttribute('common_name_regexp');
  }
  public set commonNameRegexp(value: string) {
    this._commonNameRegexp = value;
  }
  public resetCommonNameRegexp() {
    this._commonNameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameRegexpInput() {
    return this._commonNameRegexp;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // identity_regexp - computed: false, optional: true, required: false
  private _identityRegexp?: string; 
  public get identityRegexp() {
    return this.getStringAttribute('identity_regexp');
  }
  public set identityRegexp(value: string) {
    this._identityRegexp = value;
  }
  public resetIdentityRegexp() {
    this._identityRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRegexpInput() {
    return this._identityRegexp;
  }

  // master_configuration - computed: false, optional: true, required: false
  private _masterConfiguration?: string; 
  public get masterConfiguration() {
    return this.getStringAttribute('master_configuration');
  }
  public set masterConfiguration(value: string) {
    this._masterConfiguration = value;
  }
  public resetMasterConfiguration() {
    this._masterConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterConfigurationInput() {
    return this._masterConfiguration;
  }

  // name_format - computed: false, optional: true, required: false
  private _nameFormat?: string; 
  public get nameFormat() {
    return this.getStringAttribute('name_format');
  }
  public set nameFormat(value: string) {
    this._nameFormat = value;
  }
  public resetNameFormat() {
    this._nameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFormatInput() {
    return this._nameFormat;
  }

  // radio_mac - computed: false, optional: true, required: false
  private _radioMac?: string; 
  public get radioMac() {
    return this.getStringAttribute('radio_mac');
  }
  public set radioMac(value: string) {
    this._radioMac = value;
  }
  public resetRadioMac() {
    this._radioMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioMacInput() {
    return this._radioMac;
  }

  // slave_configurations - computed: false, optional: true, required: false
  private _slaveConfigurations?: string[]; 
  public get slaveConfigurations() {
    return this.getListAttribute('slave_configurations');
  }
  public set slaveConfigurations(value: string[]) {
    this._slaveConfigurations = value;
  }
  public resetSlaveConfigurations() {
    this._slaveConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveConfigurationsInput() {
    return this._slaveConfigurations;
  }

  // slave_name_format - computed: false, optional: true, required: false
  private _slaveNameFormat?: string; 
  public get slaveNameFormat() {
    return this.getStringAttribute('slave_name_format');
  }
  public set slaveNameFormat(value: string) {
    this._slaveNameFormat = value;
  }
  public resetSlaveNameFormat() {
    this._slaveNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveNameFormatInput() {
    return this._slaveNameFormat;
  }

  // supported_bands - computed: false, optional: true, required: false
  private _supportedBands?: string[]; 
  public get supportedBands() {
    return this.getListAttribute('supported_bands');
  }
  public set supportedBands(value: string[]) {
    this._supportedBands = value;
  }
  public resetSupportedBands() {
    this._supportedBands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedBandsInput() {
    return this._supportedBands;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      action: cdktf.stringToTerraform(this._action),
      address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressRanges),
      comment: cdktf.stringToTerraform(this._comment),
      common_name_regexp: cdktf.stringToTerraform(this._commonNameRegexp),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      identity_regexp: cdktf.stringToTerraform(this._identityRegexp),
      master_configuration: cdktf.stringToTerraform(this._masterConfiguration),
      name_format: cdktf.stringToTerraform(this._nameFormat),
      radio_mac: cdktf.stringToTerraform(this._radioMac),
      slave_configurations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slaveConfigurations),
      slave_name_format: cdktf.stringToTerraform(this._slaveNameFormat),
      supported_bands: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedBands),
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
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name_regexp: {
        value: cdktf.stringToHclTerraform(this._commonNameRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      identity_regexp: {
        value: cdktf.stringToHclTerraform(this._identityRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_configuration: {
        value: cdktf.stringToHclTerraform(this._masterConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_format: {
        value: cdktf.stringToHclTerraform(this._nameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_mac: {
        value: cdktf.stringToHclTerraform(this._radioMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slave_configurations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._slaveConfigurations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slave_name_format: {
        value: cdktf.stringToHclTerraform(this._slaveNameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_bands: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedBands),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
