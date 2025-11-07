// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandSetThreatAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feed retrieving intervals of External Feed, in the form of HH:MM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#feed_retrieving_interval ManagementCommandSetThreatAdvancedSettings#feed_retrieving_interval}
  */
  readonly feedRetrievingInterval?: string;
  /**
  * Enable HTTP Inspection on non standard ports for Threat Prevention blades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#httpi_non_standard_ports ManagementCommandSetThreatAdvancedSettings#httpi_non_standard_ports}
  */
  readonly httpiNonStandardPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#id ManagementCommandSetThreatAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#ignore_errors ManagementCommandSetThreatAdvancedSettings#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#ignore_warnings ManagementCommandSetThreatAdvancedSettings#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * In case of internal system error, allow or block all connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#internal_error_fail_mode ManagementCommandSetThreatAdvancedSettings#internal_error_fail_mode}
  */
  readonly internalErrorFailMode?: string;
  /**
  * Session unification timeout for logs (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#log_unification_timeout ManagementCommandSetThreatAdvancedSettings#log_unification_timeout}
  */
  readonly logUnificationTimeout?: number;
  /**
  * resource_classification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#resource_classification ManagementCommandSetThreatAdvancedSettings#resource_classification}
  */
  readonly resourceClassification?: ManagementCommandSetThreatAdvancedSettingsResourceClassification;
}
export interface ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings {
  /**
  * Custom Settings for Anti Bot Blade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#anti_bot ManagementCommandSetThreatAdvancedSettings#anti_bot}
  */
  readonly antiBot?: string;
  /**
  * Custom Settings for Anti Virus Blade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#anti_virus ManagementCommandSetThreatAdvancedSettings#anti_virus}
  */
  readonly antiVirus?: string;
  /**
  * Custom Settings for Zero Phishing Blade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#zero_phishing ManagementCommandSetThreatAdvancedSettings#zero_phishing}
  */
  readonly zeroPhishing?: string;
}

export function managementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsToTerraform(struct?: ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsOutputReference | ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_bot: cdktf.stringToTerraform(struct!.antiBot),
    anti_virus: cdktf.stringToTerraform(struct!.antiVirus),
    zero_phishing: cdktf.stringToTerraform(struct!.zeroPhishing),
  }
}


export function managementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsToHclTerraform(struct?: ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsOutputReference | ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_bot: {
      value: cdktf.stringToHclTerraform(struct!.antiBot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_virus: {
      value: cdktf.stringToHclTerraform(struct!.antiVirus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_phishing: {
      value: cdktf.stringToHclTerraform(struct!.zeroPhishing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiBot !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiBot = this._antiBot;
    }
    if (this._antiVirus !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiVirus = this._antiVirus;
    }
    if (this._zeroPhishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroPhishing = this._zeroPhishing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiBot = undefined;
      this._antiVirus = undefined;
      this._zeroPhishing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiBot = value.antiBot;
      this._antiVirus = value.antiVirus;
      this._zeroPhishing = value.zeroPhishing;
    }
  }

  // anti_bot - computed: false, optional: true, required: false
  private _antiBot?: string; 
  public get antiBot() {
    return this.getStringAttribute('anti_bot');
  }
  public set antiBot(value: string) {
    this._antiBot = value;
  }
  public resetAntiBot() {
    this._antiBot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiBotInput() {
    return this._antiBot;
  }

  // anti_virus - computed: false, optional: true, required: false
  private _antiVirus?: string; 
  public get antiVirus() {
    return this.getStringAttribute('anti_virus');
  }
  public set antiVirus(value: string) {
    this._antiVirus = value;
  }
  public resetAntiVirus() {
    this._antiVirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus;
  }

  // zero_phishing - computed: false, optional: true, required: false
  private _zeroPhishing?: string; 
  public get zeroPhishing() {
    return this.getStringAttribute('zero_phishing');
  }
  public set zeroPhishing(value: string) {
    this._zeroPhishing = value;
  }
  public resetZeroPhishing() {
    this._zeroPhishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPhishingInput() {
    return this._zeroPhishing;
  }
}
export interface ManagementCommandSetThreatAdvancedSettingsResourceClassification {
  /**
  * Set all services to the same mode or choose a custom mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#mode ManagementCommandSetThreatAdvancedSettings#mode}
  */
  readonly mode?: string;
  /**
  * Block connections when the web service is unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#web_service_fail_mode ManagementCommandSetThreatAdvancedSettings#web_service_fail_mode}
  */
  readonly webServiceFailMode?: string;
  /**
  * custom_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#custom_settings ManagementCommandSetThreatAdvancedSettings#custom_settings}
  */
  readonly customSettings?: ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings;
}

export function managementCommandSetThreatAdvancedSettingsResourceClassificationToTerraform(struct?: ManagementCommandSetThreatAdvancedSettingsResourceClassificationOutputReference | ManagementCommandSetThreatAdvancedSettingsResourceClassification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    web_service_fail_mode: cdktf.stringToTerraform(struct!.webServiceFailMode),
    custom_settings: managementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsToTerraform(struct!.customSettings),
  }
}


export function managementCommandSetThreatAdvancedSettingsResourceClassificationToHclTerraform(struct?: ManagementCommandSetThreatAdvancedSettingsResourceClassificationOutputReference | ManagementCommandSetThreatAdvancedSettingsResourceClassification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_service_fail_mode: {
      value: cdktf.stringToHclTerraform(struct!.webServiceFailMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_settings: {
      value: managementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsToHclTerraform(struct!.customSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCommandSetThreatAdvancedSettingsResourceClassificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementCommandSetThreatAdvancedSettingsResourceClassification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._webServiceFailMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServiceFailMode = this._webServiceFailMode;
    }
    if (this._customSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSettings = this._customSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCommandSetThreatAdvancedSettingsResourceClassification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._webServiceFailMode = undefined;
      this._customSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._webServiceFailMode = value.webServiceFailMode;
      this._customSettings.internalValue = value.customSettings;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // web_service_fail_mode - computed: false, optional: true, required: false
  private _webServiceFailMode?: string; 
  public get webServiceFailMode() {
    return this.getStringAttribute('web_service_fail_mode');
  }
  public set webServiceFailMode(value: string) {
    this._webServiceFailMode = value;
  }
  public resetWebServiceFailMode() {
    this._webServiceFailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServiceFailModeInput() {
    return this._webServiceFailMode;
  }

  // custom_settings - computed: false, optional: true, required: false
  private _customSettings = new ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettingsOutputReference(this, "custom_settings");
  public get customSettings() {
    return this._customSettings;
  }
  public putCustomSettings(value: ManagementCommandSetThreatAdvancedSettingsResourceClassificationCustomSettings) {
    this._customSettings.internalValue = value;
  }
  public resetCustomSettings() {
    this._customSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSettingsInput() {
    return this._customSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings checkpoint_management_command_set_threat_advanced_settings}
*/
export class ManagementCommandSetThreatAdvancedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_set_threat_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandSetThreatAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandSetThreatAdvancedSettings to import
  * @param importFromId The id of the existing ManagementCommandSetThreatAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandSetThreatAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_set_threat_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_threat_advanced_settings checkpoint_management_command_set_threat_advanced_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandSetThreatAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandSetThreatAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_set_threat_advanced_settings',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feedRetrievingInterval = config.feedRetrievingInterval;
    this._httpiNonStandardPorts = config.httpiNonStandardPorts;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._internalErrorFailMode = config.internalErrorFailMode;
    this._logUnificationTimeout = config.logUnificationTimeout;
    this._resourceClassification.internalValue = config.resourceClassification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feed_retrieving_interval - computed: false, optional: true, required: false
  private _feedRetrievingInterval?: string; 
  public get feedRetrievingInterval() {
    return this.getStringAttribute('feed_retrieving_interval');
  }
  public set feedRetrievingInterval(value: string) {
    this._feedRetrievingInterval = value;
  }
  public resetFeedRetrievingInterval() {
    this._feedRetrievingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedRetrievingIntervalInput() {
    return this._feedRetrievingInterval;
  }

  // httpi_non_standard_ports - computed: false, optional: true, required: false
  private _httpiNonStandardPorts?: boolean | cdktf.IResolvable; 
  public get httpiNonStandardPorts() {
    return this.getBooleanAttribute('httpi_non_standard_ports');
  }
  public set httpiNonStandardPorts(value: boolean | cdktf.IResolvable) {
    this._httpiNonStandardPorts = value;
  }
  public resetHttpiNonStandardPorts() {
    this._httpiNonStandardPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpiNonStandardPortsInput() {
    return this._httpiNonStandardPorts;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // internal_error_fail_mode - computed: false, optional: true, required: false
  private _internalErrorFailMode?: string; 
  public get internalErrorFailMode() {
    return this.getStringAttribute('internal_error_fail_mode');
  }
  public set internalErrorFailMode(value: string) {
    this._internalErrorFailMode = value;
  }
  public resetInternalErrorFailMode() {
    this._internalErrorFailMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorFailModeInput() {
    return this._internalErrorFailMode;
  }

  // log_unification_timeout - computed: false, optional: true, required: false
  private _logUnificationTimeout?: number; 
  public get logUnificationTimeout() {
    return this.getNumberAttribute('log_unification_timeout');
  }
  public set logUnificationTimeout(value: number) {
    this._logUnificationTimeout = value;
  }
  public resetLogUnificationTimeout() {
    this._logUnificationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUnificationTimeoutInput() {
    return this._logUnificationTimeout;
  }

  // resource_classification - computed: false, optional: true, required: false
  private _resourceClassification = new ManagementCommandSetThreatAdvancedSettingsResourceClassificationOutputReference(this, "resource_classification");
  public get resourceClassification() {
    return this._resourceClassification;
  }
  public putResourceClassification(value: ManagementCommandSetThreatAdvancedSettingsResourceClassification) {
    this._resourceClassification.internalValue = value;
  }
  public resetResourceClassification() {
    this._resourceClassification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceClassificationInput() {
    return this._resourceClassification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feed_retrieving_interval: cdktf.stringToTerraform(this._feedRetrievingInterval),
      httpi_non_standard_ports: cdktf.booleanToTerraform(this._httpiNonStandardPorts),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      internal_error_fail_mode: cdktf.stringToTerraform(this._internalErrorFailMode),
      log_unification_timeout: cdktf.numberToTerraform(this._logUnificationTimeout),
      resource_classification: managementCommandSetThreatAdvancedSettingsResourceClassificationToTerraform(this._resourceClassification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feed_retrieving_interval: {
        value: cdktf.stringToHclTerraform(this._feedRetrievingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httpi_non_standard_ports: {
        value: cdktf.booleanToHclTerraform(this._httpiNonStandardPorts),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internal_error_fail_mode: {
        value: cdktf.stringToHclTerraform(this._internalErrorFailMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_unification_timeout: {
        value: cdktf.numberToHclTerraform(this._logUnificationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_classification: {
        value: managementCommandSetThreatAdvancedSettingsResourceClassificationToHclTerraform(this._resourceClassification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCommandSetThreatAdvancedSettingsResourceClassificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
