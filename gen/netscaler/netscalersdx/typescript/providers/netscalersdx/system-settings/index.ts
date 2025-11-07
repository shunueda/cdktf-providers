// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorize the DeviceAPIProxy request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#authorize_deviceapiproxy SystemSettings#authorize_deviceapiproxy}
  */
  readonly authorizeDeviceapiproxy?: boolean | cdktf.IResolvable;
  /**
  * Allow Basic Authentication Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#basicauth SystemSettings#basicauth}
  */
  readonly basicauth?: boolean | cdktf.IResolvable;
  /**
  * Disable old password input requirement while changing ADM agent password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#disable_agent_old_password_input SystemSettings#disable_agent_old_password_input}
  */
  readonly disableAgentOldPasswordInput?: boolean | cdktf.IResolvable;
  /**
  * Disk utilization threshold after which data processing it stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#disk_utilization_threshold SystemSettings#disk_utilization_threshold}
  */
  readonly diskUtilizationThreshold?: number;
  /**
  * Enable API Proxy Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_apiproxy_credentials SystemSettings#enable_apiproxy_credentials}
  */
  readonly enableApiproxyCredentials?: boolean | cdktf.IResolvable;
  /**
  * Enable Certificate Download.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_certificate_download SystemSettings#enable_certificate_download}
  */
  readonly enableCertificateDownload?: boolean | cdktf.IResolvable;
  /**
  * Used to enable/disable CUXIP(Customer User Experience Improvement Program).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_cuxip SystemSettings#enable_cuxip}
  */
  readonly enableCuxip?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable/disable deleting interface from ADCs on SDX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_delete_interface_on_adc SystemSettings#enable_delete_interface_on_adc}
  */
  readonly enableDeleteInterfaceOnAdc?: boolean | cdktf.IResolvable;
  /**
  * This setting enalbes nsrecover login for SVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_nsrecover_login SystemSettings#enable_nsrecover_login}
  */
  readonly enableNsrecoverLogin?: boolean | cdktf.IResolvable;
  /**
  * Enables session timeout feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_session_timeout SystemSettings#enable_session_timeout}
  */
  readonly enableSessionTimeout?: boolean | cdktf.IResolvable;
  /**
  * Enable Shell access for non-nsroot User(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#enable_shell_access SystemSettings#enable_shell_access}
  */
  readonly enableShellAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#id SystemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Metering for NetScaler VPX on SDX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#is_metering_enabled SystemSettings#is_metering_enabled}
  */
  readonly isMeteringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Count for number of NetScaler images to be saved in Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#keep_adc_image_count SystemSettings#keep_adc_image_count}
  */
  readonly keepAdcImageCount?: number;
  /**
  * Agent web socket keep alive ping interval for the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#keep_alive_ping_interval SystemSettings#keep_alive_ping_interval}
  */
  readonly keepAlivePingInterval?: number;
  /**
  * Prompt Credentials for Stylebooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#prompt_creds_for_stylebooks SystemSettings#prompt_creds_for_stylebooks}
  */
  readonly promptCredsForStylebooks?: boolean | cdktf.IResolvable;
  /**
  * Secure Access only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#secure_access_only SystemSettings#secure_access_only}
  */
  readonly secureAccessOnly?: boolean | cdktf.IResolvable;
  /**
  * Session timeout for the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#session_timeout SystemSettings#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * Session timeout unit for the system. Possible Values: [ Minutes, Hours ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#session_timeout_unit SystemSettings#session_timeout_unit}
  */
  readonly sessionTimeoutUnit?: string;
  /**
  * Communication with Instances. Minimum length =  1 Maximum length =  10. Possible Values: [ http, https ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#svm_ns_comm SystemSettings#svm_ns_comm}
  */
  readonly svmNsComm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings netscalersdx_system_settings}
*/
export class SystemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSettings to import
  * @param importFromId The id of the existing SystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/system_settings netscalersdx_system_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_system_settings',
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
    this._authorizeDeviceapiproxy = config.authorizeDeviceapiproxy;
    this._basicauth = config.basicauth;
    this._disableAgentOldPasswordInput = config.disableAgentOldPasswordInput;
    this._diskUtilizationThreshold = config.diskUtilizationThreshold;
    this._enableApiproxyCredentials = config.enableApiproxyCredentials;
    this._enableCertificateDownload = config.enableCertificateDownload;
    this._enableCuxip = config.enableCuxip;
    this._enableDeleteInterfaceOnAdc = config.enableDeleteInterfaceOnAdc;
    this._enableNsrecoverLogin = config.enableNsrecoverLogin;
    this._enableSessionTimeout = config.enableSessionTimeout;
    this._enableShellAccess = config.enableShellAccess;
    this._id = config.id;
    this._isMeteringEnabled = config.isMeteringEnabled;
    this._keepAdcImageCount = config.keepAdcImageCount;
    this._keepAlivePingInterval = config.keepAlivePingInterval;
    this._promptCredsForStylebooks = config.promptCredsForStylebooks;
    this._secureAccessOnly = config.secureAccessOnly;
    this._sessionTimeout = config.sessionTimeout;
    this._sessionTimeoutUnit = config.sessionTimeoutUnit;
    this._svmNsComm = config.svmNsComm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorize_deviceapiproxy - computed: true, optional: true, required: false
  private _authorizeDeviceapiproxy?: boolean | cdktf.IResolvable; 
  public get authorizeDeviceapiproxy() {
    return this.getBooleanAttribute('authorize_deviceapiproxy');
  }
  public set authorizeDeviceapiproxy(value: boolean | cdktf.IResolvable) {
    this._authorizeDeviceapiproxy = value;
  }
  public resetAuthorizeDeviceapiproxy() {
    this._authorizeDeviceapiproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeDeviceapiproxyInput() {
    return this._authorizeDeviceapiproxy;
  }

  // basicauth - computed: true, optional: true, required: false
  private _basicauth?: boolean | cdktf.IResolvable; 
  public get basicauth() {
    return this.getBooleanAttribute('basicauth');
  }
  public set basicauth(value: boolean | cdktf.IResolvable) {
    this._basicauth = value;
  }
  public resetBasicauth() {
    this._basicauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicauthInput() {
    return this._basicauth;
  }

  // disable_agent_old_password_input - computed: true, optional: true, required: false
  private _disableAgentOldPasswordInput?: boolean | cdktf.IResolvable; 
  public get disableAgentOldPasswordInput() {
    return this.getBooleanAttribute('disable_agent_old_password_input');
  }
  public set disableAgentOldPasswordInput(value: boolean | cdktf.IResolvable) {
    this._disableAgentOldPasswordInput = value;
  }
  public resetDisableAgentOldPasswordInput() {
    this._disableAgentOldPasswordInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAgentOldPasswordInputInput() {
    return this._disableAgentOldPasswordInput;
  }

  // disk_utilization_threshold - computed: true, optional: true, required: false
  private _diskUtilizationThreshold?: number; 
  public get diskUtilizationThreshold() {
    return this.getNumberAttribute('disk_utilization_threshold');
  }
  public set diskUtilizationThreshold(value: number) {
    this._diskUtilizationThreshold = value;
  }
  public resetDiskUtilizationThreshold() {
    this._diskUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUtilizationThresholdInput() {
    return this._diskUtilizationThreshold;
  }

  // enable_apiproxy_credentials - computed: true, optional: true, required: false
  private _enableApiproxyCredentials?: boolean | cdktf.IResolvable; 
  public get enableApiproxyCredentials() {
    return this.getBooleanAttribute('enable_apiproxy_credentials');
  }
  public set enableApiproxyCredentials(value: boolean | cdktf.IResolvable) {
    this._enableApiproxyCredentials = value;
  }
  public resetEnableApiproxyCredentials() {
    this._enableApiproxyCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApiproxyCredentialsInput() {
    return this._enableApiproxyCredentials;
  }

  // enable_certificate_download - computed: true, optional: true, required: false
  private _enableCertificateDownload?: boolean | cdktf.IResolvable; 
  public get enableCertificateDownload() {
    return this.getBooleanAttribute('enable_certificate_download');
  }
  public set enableCertificateDownload(value: boolean | cdktf.IResolvable) {
    this._enableCertificateDownload = value;
  }
  public resetEnableCertificateDownload() {
    this._enableCertificateDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificateDownloadInput() {
    return this._enableCertificateDownload;
  }

  // enable_cuxip - computed: true, optional: true, required: false
  private _enableCuxip?: boolean | cdktf.IResolvable; 
  public get enableCuxip() {
    return this.getBooleanAttribute('enable_cuxip');
  }
  public set enableCuxip(value: boolean | cdktf.IResolvable) {
    this._enableCuxip = value;
  }
  public resetEnableCuxip() {
    this._enableCuxip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCuxipInput() {
    return this._enableCuxip;
  }

  // enable_delete_interface_on_adc - computed: true, optional: true, required: false
  private _enableDeleteInterfaceOnAdc?: boolean | cdktf.IResolvable; 
  public get enableDeleteInterfaceOnAdc() {
    return this.getBooleanAttribute('enable_delete_interface_on_adc');
  }
  public set enableDeleteInterfaceOnAdc(value: boolean | cdktf.IResolvable) {
    this._enableDeleteInterfaceOnAdc = value;
  }
  public resetEnableDeleteInterfaceOnAdc() {
    this._enableDeleteInterfaceOnAdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeleteInterfaceOnAdcInput() {
    return this._enableDeleteInterfaceOnAdc;
  }

  // enable_nsrecover_login - computed: true, optional: true, required: false
  private _enableNsrecoverLogin?: boolean | cdktf.IResolvable; 
  public get enableNsrecoverLogin() {
    return this.getBooleanAttribute('enable_nsrecover_login');
  }
  public set enableNsrecoverLogin(value: boolean | cdktf.IResolvable) {
    this._enableNsrecoverLogin = value;
  }
  public resetEnableNsrecoverLogin() {
    this._enableNsrecoverLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNsrecoverLoginInput() {
    return this._enableNsrecoverLogin;
  }

  // enable_session_timeout - computed: true, optional: true, required: false
  private _enableSessionTimeout?: boolean | cdktf.IResolvable; 
  public get enableSessionTimeout() {
    return this.getBooleanAttribute('enable_session_timeout');
  }
  public set enableSessionTimeout(value: boolean | cdktf.IResolvable) {
    this._enableSessionTimeout = value;
  }
  public resetEnableSessionTimeout() {
    this._enableSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionTimeoutInput() {
    return this._enableSessionTimeout;
  }

  // enable_shell_access - computed: true, optional: true, required: false
  private _enableShellAccess?: boolean | cdktf.IResolvable; 
  public get enableShellAccess() {
    return this.getBooleanAttribute('enable_shell_access');
  }
  public set enableShellAccess(value: boolean | cdktf.IResolvable) {
    this._enableShellAccess = value;
  }
  public resetEnableShellAccess() {
    this._enableShellAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShellAccessInput() {
    return this._enableShellAccess;
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

  // is_metering_enabled - computed: true, optional: true, required: false
  private _isMeteringEnabled?: boolean | cdktf.IResolvable; 
  public get isMeteringEnabled() {
    return this.getBooleanAttribute('is_metering_enabled');
  }
  public set isMeteringEnabled(value: boolean | cdktf.IResolvable) {
    this._isMeteringEnabled = value;
  }
  public resetIsMeteringEnabled() {
    this._isMeteringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMeteringEnabledInput() {
    return this._isMeteringEnabled;
  }

  // keep_adc_image_count - computed: true, optional: true, required: false
  private _keepAdcImageCount?: number; 
  public get keepAdcImageCount() {
    return this.getNumberAttribute('keep_adc_image_count');
  }
  public set keepAdcImageCount(value: number) {
    this._keepAdcImageCount = value;
  }
  public resetKeepAdcImageCount() {
    this._keepAdcImageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAdcImageCountInput() {
    return this._keepAdcImageCount;
  }

  // keep_alive_ping_interval - computed: true, optional: true, required: false
  private _keepAlivePingInterval?: number; 
  public get keepAlivePingInterval() {
    return this.getNumberAttribute('keep_alive_ping_interval');
  }
  public set keepAlivePingInterval(value: number) {
    this._keepAlivePingInterval = value;
  }
  public resetKeepAlivePingInterval() {
    this._keepAlivePingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAlivePingIntervalInput() {
    return this._keepAlivePingInterval;
  }

  // prompt_creds_for_stylebooks - computed: true, optional: true, required: false
  private _promptCredsForStylebooks?: boolean | cdktf.IResolvable; 
  public get promptCredsForStylebooks() {
    return this.getBooleanAttribute('prompt_creds_for_stylebooks');
  }
  public set promptCredsForStylebooks(value: boolean | cdktf.IResolvable) {
    this._promptCredsForStylebooks = value;
  }
  public resetPromptCredsForStylebooks() {
    this._promptCredsForStylebooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptCredsForStylebooksInput() {
    return this._promptCredsForStylebooks;
  }

  // secure_access_only - computed: true, optional: true, required: false
  private _secureAccessOnly?: boolean | cdktf.IResolvable; 
  public get secureAccessOnly() {
    return this.getBooleanAttribute('secure_access_only');
  }
  public set secureAccessOnly(value: boolean | cdktf.IResolvable) {
    this._secureAccessOnly = value;
  }
  public resetSecureAccessOnly() {
    this._secureAccessOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessOnlyInput() {
    return this._secureAccessOnly;
  }

  // session_timeout - computed: true, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // session_timeout_unit - computed: true, optional: true, required: false
  private _sessionTimeoutUnit?: string; 
  public get sessionTimeoutUnit() {
    return this.getStringAttribute('session_timeout_unit');
  }
  public set sessionTimeoutUnit(value: string) {
    this._sessionTimeoutUnit = value;
  }
  public resetSessionTimeoutUnit() {
    this._sessionTimeoutUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutUnitInput() {
    return this._sessionTimeoutUnit;
  }

  // svm_ns_comm - computed: true, optional: true, required: false
  private _svmNsComm?: string; 
  public get svmNsComm() {
    return this.getStringAttribute('svm_ns_comm');
  }
  public set svmNsComm(value: string) {
    this._svmNsComm = value;
  }
  public resetSvmNsComm() {
    this._svmNsComm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNsCommInput() {
    return this._svmNsComm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorize_deviceapiproxy: cdktf.booleanToTerraform(this._authorizeDeviceapiproxy),
      basicauth: cdktf.booleanToTerraform(this._basicauth),
      disable_agent_old_password_input: cdktf.booleanToTerraform(this._disableAgentOldPasswordInput),
      disk_utilization_threshold: cdktf.numberToTerraform(this._diskUtilizationThreshold),
      enable_apiproxy_credentials: cdktf.booleanToTerraform(this._enableApiproxyCredentials),
      enable_certificate_download: cdktf.booleanToTerraform(this._enableCertificateDownload),
      enable_cuxip: cdktf.booleanToTerraform(this._enableCuxip),
      enable_delete_interface_on_adc: cdktf.booleanToTerraform(this._enableDeleteInterfaceOnAdc),
      enable_nsrecover_login: cdktf.booleanToTerraform(this._enableNsrecoverLogin),
      enable_session_timeout: cdktf.booleanToTerraform(this._enableSessionTimeout),
      enable_shell_access: cdktf.booleanToTerraform(this._enableShellAccess),
      id: cdktf.stringToTerraform(this._id),
      is_metering_enabled: cdktf.booleanToTerraform(this._isMeteringEnabled),
      keep_adc_image_count: cdktf.numberToTerraform(this._keepAdcImageCount),
      keep_alive_ping_interval: cdktf.numberToTerraform(this._keepAlivePingInterval),
      prompt_creds_for_stylebooks: cdktf.booleanToTerraform(this._promptCredsForStylebooks),
      secure_access_only: cdktf.booleanToTerraform(this._secureAccessOnly),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      session_timeout_unit: cdktf.stringToTerraform(this._sessionTimeoutUnit),
      svm_ns_comm: cdktf.stringToTerraform(this._svmNsComm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorize_deviceapiproxy: {
        value: cdktf.booleanToHclTerraform(this._authorizeDeviceapiproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      basicauth: {
        value: cdktf.booleanToHclTerraform(this._basicauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_agent_old_password_input: {
        value: cdktf.booleanToHclTerraform(this._disableAgentOldPasswordInput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_utilization_threshold: {
        value: cdktf.numberToHclTerraform(this._diskUtilizationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_apiproxy_credentials: {
        value: cdktf.booleanToHclTerraform(this._enableApiproxyCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_certificate_download: {
        value: cdktf.booleanToHclTerraform(this._enableCertificateDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cuxip: {
        value: cdktf.booleanToHclTerraform(this._enableCuxip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_delete_interface_on_adc: {
        value: cdktf.booleanToHclTerraform(this._enableDeleteInterfaceOnAdc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nsrecover_login: {
        value: cdktf.booleanToHclTerraform(this._enableNsrecoverLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_session_timeout: {
        value: cdktf.booleanToHclTerraform(this._enableSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_shell_access: {
        value: cdktf.booleanToHclTerraform(this._enableShellAccess),
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
      is_metering_enabled: {
        value: cdktf.booleanToHclTerraform(this._isMeteringEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_adc_image_count: {
        value: cdktf.numberToHclTerraform(this._keepAdcImageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_alive_ping_interval: {
        value: cdktf.numberToHclTerraform(this._keepAlivePingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prompt_creds_for_stylebooks: {
        value: cdktf.booleanToHclTerraform(this._promptCredsForStylebooks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secure_access_only: {
        value: cdktf.booleanToHclTerraform(this._secureAccessOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_timeout_unit: {
        value: cdktf.stringToHclTerraform(this._sessionTimeoutUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_ns_comm: {
        value: cdktf.stringToHclTerraform(this._svmNsComm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
