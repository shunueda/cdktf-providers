// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetHttpsAdvancedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls whether to log and send a notification for dropped traffic.<br><ul style="list-style-type:square"><li>None - Does not record the event.</li><li>Log - Records the event details in SmartView.</li><li>Alert - Logs the event and executes a command.</li><li>Mail - Sends an email to the administrator.</li><li>SNMP Trap - Sends an SNMP alert to the SNMP GU.</li><li>User Defined Alert - Sends customized alerts.</li></ul>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#blocked_certificate_tracking ManagementSetHttpsAdvancedSettings#blocked_certificate_tracking}
  */
  readonly blockedCertificateTracking?: string;
  /**
  * Whether all requests should be bypassed or blocked-in case of client errors (Client closes the connection due to authentication issues during handshake)<br><ul style="list-style-type:square"><li>true - Fail-open (bypass all requests).</li><li>false - Fail-close (block all requests.</li></ul><br>The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#bypass_on_client_failure ManagementSetHttpsAdvancedSettings#bypass_on_client_failure}
  */
  readonly bypassOnClientFailure?: boolean | cdktf.IResolvable;
  /**
  * Whether all requests should be bypassed or blocked-in case of server errors (for example validation error during GW-Server authentication)<br><ul style="list-style-type:square"><li>true - Fail-open (bypass all requests).</li><li>false - Fail-close (block all requests.</li></ul><br>The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#bypass_on_failure ManagementSetHttpsAdvancedSettings#bypass_on_failure}
  */
  readonly bypassOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Bypass the HTTPS Inspection temporarily to improve connectivity during a heavy load on the Security Gateway. The HTTPS Inspection would resume as soon as the load decreases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#bypass_under_load ManagementSetHttpsAdvancedSettings#bypass_under_load}
  */
  readonly bypassUnderLoad?: { [key: string]: string };
  /**
  * Configure the value "true" to bypass traffic to well-known software update services.<br>The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#bypass_update_services ManagementSetHttpsAdvancedSettings#bypass_update_services}
  */
  readonly bypassUpdateServices?: boolean | cdktf.IResolvable;
  /**
  * Configure the value "bypass" to bypass traffic from certificate-pinned applications approved by Check Point.<br>HTTPS Inspection cannot inspect connections initiated by certificate-pinned applications.<br>Configure the value "detect" to send logs for traffic from certificate-pinned applications approved by Check Point.<br>The default value is bypass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#certificate_pinned_apps_action ManagementSetHttpsAdvancedSettings#certificate_pinned_apps_action}
  */
  readonly certificatePinnedAppsAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#id ManagementSetHttpsAdvancedSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#ignore_errors ManagementSetHttpsAdvancedSettings#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#ignore_warnings ManagementSetHttpsAdvancedSettings#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * The value "true" configures the Security Gateway to send HTTPS Inspection session logs.<br>The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#log_sessions ManagementSetHttpsAdvancedSettings#log_sessions}
  */
  readonly logSessions?: boolean | cdktf.IResolvable;
  /**
  * Configure the value "true" to use the "Certificate Authority Information Access" extension to retrieve certificates that are missing from the certificate chain.<br>The default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#retrieve_intermediate_ca_certificates ManagementSetHttpsAdvancedSettings#retrieve_intermediate_ca_certificates}
  */
  readonly retrieveIntermediateCaCertificates?: boolean | cdktf.IResolvable;
  /**
  * When a Security Gateway receives an untrusted certificate from a website server, define when to drop the connection and how to track it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#server_certificate_validation_actions ManagementSetHttpsAdvancedSettings#server_certificate_validation_actions}
  */
  readonly serverCertificateValidationActions?: { [key: string]: string };
  /**
  * Whether all requests should be allowed or blocked until categorization is complete.<br><ul style="list-style-type:square"><li>Background - to allow requests until categorization is complete.</li><li>Hold- to block requests until categorization is complete.</li></ul><br>The default value is hold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#site_categorization_allow_mode ManagementSetHttpsAdvancedSettings#site_categorization_allow_mode}
  */
  readonly siteCategorizationAllowMode?: string;
  /**
  * blocked_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#blocked_certificates ManagementSetHttpsAdvancedSettings#blocked_certificates}
  */
  readonly blockedCertificates?: ManagementSetHttpsAdvancedSettingsBlockedCertificates[] | cdktf.IResolvable;
}
export interface ManagementSetHttpsAdvancedSettingsBlockedCertificates {
  /**
  * Certificate Serial Number (unique) in hexadecimal format HH:HH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#cert_serial_number ManagementSetHttpsAdvancedSettings#cert_serial_number}
  */
  readonly certSerialNumber?: string;
  /**
  * Describes the certificate by default, can be overridden by any text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#comments ManagementSetHttpsAdvancedSettings#comments}
  */
  readonly comments?: string;
  /**
  * Describes the name, cannot be overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#name ManagementSetHttpsAdvancedSettings#name}
  */
  readonly name?: string;
}

export function managementSetHttpsAdvancedSettingsBlockedCertificatesToTerraform(struct?: ManagementSetHttpsAdvancedSettingsBlockedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_serial_number: cdktf.stringToTerraform(struct!.certSerialNumber),
    comments: cdktf.stringToTerraform(struct!.comments),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function managementSetHttpsAdvancedSettingsBlockedCertificatesToHclTerraform(struct?: ManagementSetHttpsAdvancedSettingsBlockedCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.certSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementSetHttpsAdvancedSettingsBlockedCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementSetHttpsAdvancedSettingsBlockedCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSerialNumber = this._certSerialNumber;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementSetHttpsAdvancedSettingsBlockedCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certSerialNumber = undefined;
      this._comments = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certSerialNumber = value.certSerialNumber;
      this._comments = value.comments;
      this._name = value.name;
    }
  }

  // cert_serial_number - computed: false, optional: true, required: false
  private _certSerialNumber?: string; 
  public get certSerialNumber() {
    return this.getStringAttribute('cert_serial_number');
  }
  public set certSerialNumber(value: string) {
    this._certSerialNumber = value;
  }
  public resetCertSerialNumber() {
    this._certSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSerialNumberInput() {
    return this._certSerialNumber;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class ManagementSetHttpsAdvancedSettingsBlockedCertificatesList extends cdktf.ComplexList {
  public internalValue? : ManagementSetHttpsAdvancedSettingsBlockedCertificates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ManagementSetHttpsAdvancedSettingsBlockedCertificatesOutputReference {
    return new ManagementSetHttpsAdvancedSettingsBlockedCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings checkpoint_management_set_https_advanced_settings}
*/
export class ManagementSetHttpsAdvancedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_https_advanced_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetHttpsAdvancedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetHttpsAdvancedSettings to import
  * @param importFromId The id of the existing ManagementSetHttpsAdvancedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetHttpsAdvancedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_https_advanced_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_set_https_advanced_settings checkpoint_management_set_https_advanced_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetHttpsAdvancedSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetHttpsAdvancedSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_https_advanced_settings',
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
    this._blockedCertificateTracking = config.blockedCertificateTracking;
    this._bypassOnClientFailure = config.bypassOnClientFailure;
    this._bypassOnFailure = config.bypassOnFailure;
    this._bypassUnderLoad = config.bypassUnderLoad;
    this._bypassUpdateServices = config.bypassUpdateServices;
    this._certificatePinnedAppsAction = config.certificatePinnedAppsAction;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._logSessions = config.logSessions;
    this._retrieveIntermediateCaCertificates = config.retrieveIntermediateCaCertificates;
    this._serverCertificateValidationActions = config.serverCertificateValidationActions;
    this._siteCategorizationAllowMode = config.siteCategorizationAllowMode;
    this._blockedCertificates.internalValue = config.blockedCertificates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_certificate_tracking - computed: false, optional: true, required: false
  private _blockedCertificateTracking?: string; 
  public get blockedCertificateTracking() {
    return this.getStringAttribute('blocked_certificate_tracking');
  }
  public set blockedCertificateTracking(value: string) {
    this._blockedCertificateTracking = value;
  }
  public resetBlockedCertificateTracking() {
    this._blockedCertificateTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedCertificateTrackingInput() {
    return this._blockedCertificateTracking;
  }

  // bypass_on_client_failure - computed: false, optional: true, required: false
  private _bypassOnClientFailure?: boolean | cdktf.IResolvable; 
  public get bypassOnClientFailure() {
    return this.getBooleanAttribute('bypass_on_client_failure');
  }
  public set bypassOnClientFailure(value: boolean | cdktf.IResolvable) {
    this._bypassOnClientFailure = value;
  }
  public resetBypassOnClientFailure() {
    this._bypassOnClientFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassOnClientFailureInput() {
    return this._bypassOnClientFailure;
  }

  // bypass_on_failure - computed: false, optional: true, required: false
  private _bypassOnFailure?: boolean | cdktf.IResolvable; 
  public get bypassOnFailure() {
    return this.getBooleanAttribute('bypass_on_failure');
  }
  public set bypassOnFailure(value: boolean | cdktf.IResolvable) {
    this._bypassOnFailure = value;
  }
  public resetBypassOnFailure() {
    this._bypassOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassOnFailureInput() {
    return this._bypassOnFailure;
  }

  // bypass_under_load - computed: false, optional: true, required: false
  private _bypassUnderLoad?: { [key: string]: string }; 
  public get bypassUnderLoad() {
    return this.getStringMapAttribute('bypass_under_load');
  }
  public set bypassUnderLoad(value: { [key: string]: string }) {
    this._bypassUnderLoad = value;
  }
  public resetBypassUnderLoad() {
    this._bypassUnderLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUnderLoadInput() {
    return this._bypassUnderLoad;
  }

  // bypass_update_services - computed: false, optional: true, required: false
  private _bypassUpdateServices?: boolean | cdktf.IResolvable; 
  public get bypassUpdateServices() {
    return this.getBooleanAttribute('bypass_update_services');
  }
  public set bypassUpdateServices(value: boolean | cdktf.IResolvable) {
    this._bypassUpdateServices = value;
  }
  public resetBypassUpdateServices() {
    this._bypassUpdateServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUpdateServicesInput() {
    return this._bypassUpdateServices;
  }

  // certificate_pinned_apps_action - computed: false, optional: true, required: false
  private _certificatePinnedAppsAction?: string; 
  public get certificatePinnedAppsAction() {
    return this.getStringAttribute('certificate_pinned_apps_action');
  }
  public set certificatePinnedAppsAction(value: string) {
    this._certificatePinnedAppsAction = value;
  }
  public resetCertificatePinnedAppsAction() {
    this._certificatePinnedAppsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePinnedAppsActionInput() {
    return this._certificatePinnedAppsAction;
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

  // log_sessions - computed: false, optional: true, required: false
  private _logSessions?: boolean | cdktf.IResolvable; 
  public get logSessions() {
    return this.getBooleanAttribute('log_sessions');
  }
  public set logSessions(value: boolean | cdktf.IResolvable) {
    this._logSessions = value;
  }
  public resetLogSessions() {
    this._logSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSessionsInput() {
    return this._logSessions;
  }

  // retrieve_intermediate_ca_certificates - computed: false, optional: true, required: false
  private _retrieveIntermediateCaCertificates?: boolean | cdktf.IResolvable; 
  public get retrieveIntermediateCaCertificates() {
    return this.getBooleanAttribute('retrieve_intermediate_ca_certificates');
  }
  public set retrieveIntermediateCaCertificates(value: boolean | cdktf.IResolvable) {
    this._retrieveIntermediateCaCertificates = value;
  }
  public resetRetrieveIntermediateCaCertificates() {
    this._retrieveIntermediateCaCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveIntermediateCaCertificatesInput() {
    return this._retrieveIntermediateCaCertificates;
  }

  // server_certificate_validation_actions - computed: false, optional: true, required: false
  private _serverCertificateValidationActions?: { [key: string]: string }; 
  public get serverCertificateValidationActions() {
    return this.getStringMapAttribute('server_certificate_validation_actions');
  }
  public set serverCertificateValidationActions(value: { [key: string]: string }) {
    this._serverCertificateValidationActions = value;
  }
  public resetServerCertificateValidationActions() {
    this._serverCertificateValidationActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateValidationActionsInput() {
    return this._serverCertificateValidationActions;
  }

  // site_categorization_allow_mode - computed: false, optional: true, required: false
  private _siteCategorizationAllowMode?: string; 
  public get siteCategorizationAllowMode() {
    return this.getStringAttribute('site_categorization_allow_mode');
  }
  public set siteCategorizationAllowMode(value: string) {
    this._siteCategorizationAllowMode = value;
  }
  public resetSiteCategorizationAllowMode() {
    this._siteCategorizationAllowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteCategorizationAllowModeInput() {
    return this._siteCategorizationAllowMode;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // blocked_certificates - computed: false, optional: true, required: false
  private _blockedCertificates = new ManagementSetHttpsAdvancedSettingsBlockedCertificatesList(this, "blocked_certificates", false);
  public get blockedCertificates() {
    return this._blockedCertificates;
  }
  public putBlockedCertificates(value: ManagementSetHttpsAdvancedSettingsBlockedCertificates[] | cdktf.IResolvable) {
    this._blockedCertificates.internalValue = value;
  }
  public resetBlockedCertificates() {
    this._blockedCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedCertificatesInput() {
    return this._blockedCertificates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_certificate_tracking: cdktf.stringToTerraform(this._blockedCertificateTracking),
      bypass_on_client_failure: cdktf.booleanToTerraform(this._bypassOnClientFailure),
      bypass_on_failure: cdktf.booleanToTerraform(this._bypassOnFailure),
      bypass_under_load: cdktf.hashMapper(cdktf.stringToTerraform)(this._bypassUnderLoad),
      bypass_update_services: cdktf.booleanToTerraform(this._bypassUpdateServices),
      certificate_pinned_apps_action: cdktf.stringToTerraform(this._certificatePinnedAppsAction),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      log_sessions: cdktf.booleanToTerraform(this._logSessions),
      retrieve_intermediate_ca_certificates: cdktf.booleanToTerraform(this._retrieveIntermediateCaCertificates),
      server_certificate_validation_actions: cdktf.hashMapper(cdktf.stringToTerraform)(this._serverCertificateValidationActions),
      site_categorization_allow_mode: cdktf.stringToTerraform(this._siteCategorizationAllowMode),
      blocked_certificates: cdktf.listMapper(managementSetHttpsAdvancedSettingsBlockedCertificatesToTerraform, true)(this._blockedCertificates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_certificate_tracking: {
        value: cdktf.stringToHclTerraform(this._blockedCertificateTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_on_client_failure: {
        value: cdktf.booleanToHclTerraform(this._bypassOnClientFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_on_failure: {
        value: cdktf.booleanToHclTerraform(this._bypassOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_under_load: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bypassUnderLoad),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bypass_update_services: {
        value: cdktf.booleanToHclTerraform(this._bypassUpdateServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_pinned_apps_action: {
        value: cdktf.stringToHclTerraform(this._certificatePinnedAppsAction),
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
      log_sessions: {
        value: cdktf.booleanToHclTerraform(this._logSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retrieve_intermediate_ca_certificates: {
        value: cdktf.booleanToHclTerraform(this._retrieveIntermediateCaCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_certificate_validation_actions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._serverCertificateValidationActions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      site_categorization_allow_mode: {
        value: cdktf.stringToHclTerraform(this._siteCategorizationAllowMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_certificates: {
        value: cdktf.listMapperHcl(managementSetHttpsAdvancedSettingsBlockedCertificatesToHclTerraform, true)(this._blockedCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementSetHttpsAdvancedSettingsBlockedCertificatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
