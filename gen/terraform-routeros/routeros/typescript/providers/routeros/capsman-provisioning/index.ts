// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanProvisioningConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#___path___ CapsmanProvisioning#___path___}
  */
  readonly path?: string;
  /**
  * Provisioning action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#action CapsmanProvisioning#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#comment CapsmanProvisioning#comment}
  */
  readonly comment?: string;
  /**
  * Regular expression to match radios by common name. Each CAP's common name identifier can be found under "/caps-man radio" as value "REMOTE-CAP-NAME"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#common_name_regexp CapsmanProvisioning#common_name_regexp}
  */
  readonly commonNameRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#disabled CapsmanProvisioning#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Match radios by supported wireless modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#hw_supported_modes CapsmanProvisioning#hw_supported_modes}
  */
  readonly hwSupportedModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#id CapsmanProvisioning#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Regular expression to match radios by router identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#identity_regexp CapsmanProvisioning#identity_regexp}
  */
  readonly identityRegexp?: string;
  /**
  * Match CAPs with IPs within configured address range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#ip_address_ranges CapsmanProvisioning#ip_address_ranges}
  */
  readonly ipAddressRanges?: string[];
  /**
  * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration profile will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#master_configuration CapsmanProvisioning#master_configuration}
  */
  readonly masterConfiguration: string;
  /**
  * Specify the syntax of the CAP interface name creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#name_format CapsmanProvisioning#name_format}
  */
  readonly nameFormat?: string;
  /**
  * Name prefix which can be used in the name-format for creating the CAP interface names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#name_prefix CapsmanProvisioning#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * MAC address of radio to be matched, empty MAC (00:00:00:00:00:00) means match all MAC addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#radio_mac CapsmanProvisioning#radio_mac}
  */
  readonly radioMac?: string;
  /**
  * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#slave_configurations CapsmanProvisioning#slave_configurations}
  */
  readonly slaveConfigurations?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning routeros_capsman_provisioning}
*/
export class CapsmanProvisioning extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_provisioning";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanProvisioning resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanProvisioning to import
  * @param importFromId The id of the existing CapsmanProvisioning that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanProvisioning to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_provisioning", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/capsman_provisioning routeros_capsman_provisioning} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanProvisioningConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanProvisioningConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_provisioning',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._comment = config.comment;
    this._commonNameRegexp = config.commonNameRegexp;
    this._disabled = config.disabled;
    this._hwSupportedModes = config.hwSupportedModes;
    this._id = config.id;
    this._identityRegexp = config.identityRegexp;
    this._ipAddressRanges = config.ipAddressRanges;
    this._masterConfiguration = config.masterConfiguration;
    this._nameFormat = config.nameFormat;
    this._namePrefix = config.namePrefix;
    this._radioMac = config.radioMac;
    this._slaveConfigurations = config.slaveConfigurations;
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

  // hw_supported_modes - computed: false, optional: true, required: false
  private _hwSupportedModes?: string[]; 
  public get hwSupportedModes() {
    return cdktf.Fn.tolist(this.getListAttribute('hw_supported_modes'));
  }
  public set hwSupportedModes(value: string[]) {
    this._hwSupportedModes = value;
  }
  public resetHwSupportedModes() {
    this._hwSupportedModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwSupportedModesInput() {
    return this._hwSupportedModes;
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

  // ip_address_ranges - computed: false, optional: true, required: false
  private _ipAddressRanges?: string[]; 
  public get ipAddressRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_address_ranges'));
  }
  public set ipAddressRanges(value: string[]) {
    this._ipAddressRanges = value;
  }
  public resetIpAddressRanges() {
    this._ipAddressRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressRangesInput() {
    return this._ipAddressRanges;
  }

  // master_configuration - computed: false, optional: false, required: true
  private _masterConfiguration?: string; 
  public get masterConfiguration() {
    return this.getStringAttribute('master_configuration');
  }
  public set masterConfiguration(value: string) {
    this._masterConfiguration = value;
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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
    return cdktf.Fn.tolist(this.getListAttribute('slave_configurations'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      action: cdktf.stringToTerraform(this._action),
      comment: cdktf.stringToTerraform(this._comment),
      common_name_regexp: cdktf.stringToTerraform(this._commonNameRegexp),
      disabled: cdktf.booleanToTerraform(this._disabled),
      hw_supported_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hwSupportedModes),
      id: cdktf.stringToTerraform(this._id),
      identity_regexp: cdktf.stringToTerraform(this._identityRegexp),
      ip_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddressRanges),
      master_configuration: cdktf.stringToTerraform(this._masterConfiguration),
      name_format: cdktf.stringToTerraform(this._nameFormat),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      radio_mac: cdktf.stringToTerraform(this._radioMac),
      slave_configurations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._slaveConfigurations),
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
      hw_supported_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hwSupportedModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      ip_address_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddressRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
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
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
