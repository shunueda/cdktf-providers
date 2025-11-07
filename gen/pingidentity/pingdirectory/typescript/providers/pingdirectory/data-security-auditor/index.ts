// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSecurityAuditorConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, the auditor will report all users with account expiration times are in the future, but are within the specified length of time away from the current time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#account_expiration_warning_interval DataSecurityAuditor#account_expiration_warning_interval}
  */
  readonly accountExpirationWarningInterval?: string;
  /**
  * Specifies which backends the data security auditor may be applied to. By default, the data security auditors will audit entries in all backend types that support data auditing (Local DB, LDIF, and Config File Handler).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#audit_backend DataSecurityAuditor#audit_backend}
  */
  readonly auditBackend?: string[];
  /**
  * Specifies the severity of events to include in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#audit_severity DataSecurityAuditor#audit_severity}
  */
  readonly auditSeverity?: string;
  /**
  * Indicates whether the Data Security Auditor is enabled for use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#enabled DataSecurityAuditor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Data Security Auditor. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#extension_argument DataSecurityAuditor#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Data Security Auditor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#extension_class DataSecurityAuditor#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * The filter to use to identify entries that should be reported. Multiple filters may be configured, and each reported entry will indicate which of these filter(s) matched that entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#filter DataSecurityAuditor#filter}
  */
  readonly filter?: string[];
  /**
  * The length of time to use as the error interval for idle accounts. If the length of time since a user last authenticated is greater than the error interval, then an error will be generated for that account. If no error interval is defined, then only the warning interval will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#idle_account_error_interval DataSecurityAuditor#idle_account_error_interval}
  */
  readonly idleAccountErrorInterval?: string;
  /**
  * The length of time to use as the warning interval for idle accounts. If the length of time since a user last authenticated is greater than the warning interval but less than the error interval (or if it is greater than the warning interval and no error interval is defined), then a warning will be generated for that account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#idle_account_warning_interval DataSecurityAuditor#idle_account_warning_interval}
  */
  readonly idleAccountWarningInterval?: string;
  /**
  * Specifies the attributes from the audited entries that should be included detailed reports. By default, no attributes are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#include_attribute DataSecurityAuditor#include_attribute}
  */
  readonly includeAttribute?: string[];
  /**
  * If defined, only entries with the specified privileges will be reported. By default, entries with any privilege assigned will be reported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#include_privilege DataSecurityAuditor#include_privilege}
  */
  readonly includePrivilege?: string[];
  /**
  * If set, users that have not authenticated for more than the specified time will be reported even if idle account lockout is not configured. Note that users may only be reported if the last login time tracking is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#maximum_idle_time DataSecurityAuditor#maximum_idle_time}
  */
  readonly maximumIdleTime?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#name DataSecurityAuditor#name}
  */
  readonly name: string;
  /**
  * The length of time to use as the error interval for accounts that do not appear to have authenticated. If this is not specified, then the never-logged-in warning interval will be used. The idle account warning and error intervals will be used if no never-logged-in interval is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#never_logged_in_account_error_interval DataSecurityAuditor#never_logged_in_account_error_interval}
  */
  readonly neverLoggedInAccountErrorInterval?: string;
  /**
  * The length of time to use as the warning interval for accounts that do not appear to have authenticated. If this is not specified, then the idle account warning interval will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#never_logged_in_account_warning_interval DataSecurityAuditor#never_logged_in_account_warning_interval}
  */
  readonly neverLoggedInAccountWarningInterval?: string;
  /**
  * If set, the auditor will report all users with passwords older than the specified value even if password expiration is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#password_evaluation_age DataSecurityAuditor#password_evaluation_age}
  */
  readonly passwordEvaluationAge?: string;
  /**
  * Specifies the name of the detailed report file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#report_file DataSecurityAuditor#report_file}
  */
  readonly reportFile?: string;
  /**
  * The type of Data Security Auditor resource. Options are ['expired-password', 'idle-account', 'disabled-account', 'weakly-encoded-password', 'privilege', 'account-usability-issues', 'locked-account', 'filter', 'account-validity-window', 'multiple-password', 'deprecated-password-storage-scheme', 'nonexistent-password-policy', 'access-control', 'third-party']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#type DataSecurityAuditor#type}
  */
  readonly type: string;
  /**
  * Reporting on users with passwords encoded using the Crypt Password Storage scheme may be further limited by selecting one or more encoding mechanisms that are considered weak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#weak_crypt_encoding DataSecurityAuditor#weak_crypt_encoding}
  */
  readonly weakCryptEncoding?: string[];
  /**
  * The password storage schemes that are considered weak. Users with any of the specified password storage schemes will be included in the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#weak_password_storage_scheme DataSecurityAuditor#weak_password_storage_scheme}
  */
  readonly weakPasswordStorageScheme?: string[];
}
export interface DataSecurityAuditorRequiredActions {
}

export function dataSecurityAuditorRequiredActionsToTerraform(struct?: DataSecurityAuditorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSecurityAuditorRequiredActionsToHclTerraform(struct?: DataSecurityAuditorRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSecurityAuditorRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSecurityAuditorRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSecurityAuditorRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSecurityAuditorRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataSecurityAuditorRequiredActionsOutputReference {
    return new DataSecurityAuditorRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor pingdirectory_data_security_auditor}
*/
export class DataSecurityAuditor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_data_security_auditor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSecurityAuditor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSecurityAuditor to import
  * @param importFromId The id of the existing DataSecurityAuditor that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSecurityAuditor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_data_security_auditor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/data_security_auditor pingdirectory_data_security_auditor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSecurityAuditorConfig
  */
  public constructor(scope: Construct, id: string, config: DataSecurityAuditorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_data_security_auditor',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountExpirationWarningInterval = config.accountExpirationWarningInterval;
    this._auditBackend = config.auditBackend;
    this._auditSeverity = config.auditSeverity;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._filter = config.filter;
    this._idleAccountErrorInterval = config.idleAccountErrorInterval;
    this._idleAccountWarningInterval = config.idleAccountWarningInterval;
    this._includeAttribute = config.includeAttribute;
    this._includePrivilege = config.includePrivilege;
    this._maximumIdleTime = config.maximumIdleTime;
    this._name = config.name;
    this._neverLoggedInAccountErrorInterval = config.neverLoggedInAccountErrorInterval;
    this._neverLoggedInAccountWarningInterval = config.neverLoggedInAccountWarningInterval;
    this._passwordEvaluationAge = config.passwordEvaluationAge;
    this._reportFile = config.reportFile;
    this._type = config.type;
    this._weakCryptEncoding = config.weakCryptEncoding;
    this._weakPasswordStorageScheme = config.weakPasswordStorageScheme;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_expiration_warning_interval - computed: false, optional: true, required: false
  private _accountExpirationWarningInterval?: string; 
  public get accountExpirationWarningInterval() {
    return this.getStringAttribute('account_expiration_warning_interval');
  }
  public set accountExpirationWarningInterval(value: string) {
    this._accountExpirationWarningInterval = value;
  }
  public resetAccountExpirationWarningInterval() {
    this._accountExpirationWarningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountExpirationWarningIntervalInput() {
    return this._accountExpirationWarningInterval;
  }

  // audit_backend - computed: true, optional: true, required: false
  private _auditBackend?: string[]; 
  public get auditBackend() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_backend'));
  }
  public set auditBackend(value: string[]) {
    this._auditBackend = value;
  }
  public resetAuditBackend() {
    this._auditBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditBackendInput() {
    return this._auditBackend;
  }

  // audit_severity - computed: true, optional: true, required: false
  private _auditSeverity?: string; 
  public get auditSeverity() {
    return this.getStringAttribute('audit_severity');
  }
  public set auditSeverity(value: string) {
    this._auditSeverity = value;
  }
  public resetAuditSeverity() {
    this._auditSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSeverityInput() {
    return this._auditSeverity;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: false, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string[]; 
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }
  public set filter(value: string[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_account_error_interval - computed: false, optional: true, required: false
  private _idleAccountErrorInterval?: string; 
  public get idleAccountErrorInterval() {
    return this.getStringAttribute('idle_account_error_interval');
  }
  public set idleAccountErrorInterval(value: string) {
    this._idleAccountErrorInterval = value;
  }
  public resetIdleAccountErrorInterval() {
    this._idleAccountErrorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleAccountErrorIntervalInput() {
    return this._idleAccountErrorInterval;
  }

  // idle_account_warning_interval - computed: false, optional: true, required: false
  private _idleAccountWarningInterval?: string; 
  public get idleAccountWarningInterval() {
    return this.getStringAttribute('idle_account_warning_interval');
  }
  public set idleAccountWarningInterval(value: string) {
    this._idleAccountWarningInterval = value;
  }
  public resetIdleAccountWarningInterval() {
    this._idleAccountWarningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleAccountWarningIntervalInput() {
    return this._idleAccountWarningInterval;
  }

  // include_attribute - computed: true, optional: true, required: false
  private _includeAttribute?: string[]; 
  public get includeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_attribute'));
  }
  public set includeAttribute(value: string[]) {
    this._includeAttribute = value;
  }
  public resetIncludeAttribute() {
    this._includeAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttributeInput() {
    return this._includeAttribute;
  }

  // include_privilege - computed: true, optional: true, required: false
  private _includePrivilege?: string[]; 
  public get includePrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('include_privilege'));
  }
  public set includePrivilege(value: string[]) {
    this._includePrivilege = value;
  }
  public resetIncludePrivilege() {
    this._includePrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrivilegeInput() {
    return this._includePrivilege;
  }

  // maximum_idle_time - computed: false, optional: true, required: false
  private _maximumIdleTime?: string; 
  public get maximumIdleTime() {
    return this.getStringAttribute('maximum_idle_time');
  }
  public set maximumIdleTime(value: string) {
    this._maximumIdleTime = value;
  }
  public resetMaximumIdleTime() {
    this._maximumIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumIdleTimeInput() {
    return this._maximumIdleTime;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // never_logged_in_account_error_interval - computed: false, optional: true, required: false
  private _neverLoggedInAccountErrorInterval?: string; 
  public get neverLoggedInAccountErrorInterval() {
    return this.getStringAttribute('never_logged_in_account_error_interval');
  }
  public set neverLoggedInAccountErrorInterval(value: string) {
    this._neverLoggedInAccountErrorInterval = value;
  }
  public resetNeverLoggedInAccountErrorInterval() {
    this._neverLoggedInAccountErrorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverLoggedInAccountErrorIntervalInput() {
    return this._neverLoggedInAccountErrorInterval;
  }

  // never_logged_in_account_warning_interval - computed: false, optional: true, required: false
  private _neverLoggedInAccountWarningInterval?: string; 
  public get neverLoggedInAccountWarningInterval() {
    return this.getStringAttribute('never_logged_in_account_warning_interval');
  }
  public set neverLoggedInAccountWarningInterval(value: string) {
    this._neverLoggedInAccountWarningInterval = value;
  }
  public resetNeverLoggedInAccountWarningInterval() {
    this._neverLoggedInAccountWarningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverLoggedInAccountWarningIntervalInput() {
    return this._neverLoggedInAccountWarningInterval;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // password_evaluation_age - computed: false, optional: true, required: false
  private _passwordEvaluationAge?: string; 
  public get passwordEvaluationAge() {
    return this.getStringAttribute('password_evaluation_age');
  }
  public set passwordEvaluationAge(value: string) {
    this._passwordEvaluationAge = value;
  }
  public resetPasswordEvaluationAge() {
    this._passwordEvaluationAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEvaluationAgeInput() {
    return this._passwordEvaluationAge;
  }

  // report_file - computed: true, optional: true, required: false
  private _reportFile?: string; 
  public get reportFile() {
    return this.getStringAttribute('report_file');
  }
  public set reportFile(value: string) {
    this._reportFile = value;
  }
  public resetReportFile() {
    this._reportFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportFileInput() {
    return this._reportFile;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DataSecurityAuditorRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weak_crypt_encoding - computed: true, optional: true, required: false
  private _weakCryptEncoding?: string[]; 
  public get weakCryptEncoding() {
    return cdktf.Fn.tolist(this.getListAttribute('weak_crypt_encoding'));
  }
  public set weakCryptEncoding(value: string[]) {
    this._weakCryptEncoding = value;
  }
  public resetWeakCryptEncoding() {
    this._weakCryptEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakCryptEncodingInput() {
    return this._weakCryptEncoding;
  }

  // weak_password_storage_scheme - computed: true, optional: true, required: false
  private _weakPasswordStorageScheme?: string[]; 
  public get weakPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('weak_password_storage_scheme'));
  }
  public set weakPasswordStorageScheme(value: string[]) {
    this._weakPasswordStorageScheme = value;
  }
  public resetWeakPasswordStorageScheme() {
    this._weakPasswordStorageScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakPasswordStorageSchemeInput() {
    return this._weakPasswordStorageScheme;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_expiration_warning_interval: cdktf.stringToTerraform(this._accountExpirationWarningInterval),
      audit_backend: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditBackend),
      audit_severity: cdktf.stringToTerraform(this._auditSeverity),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filter),
      idle_account_error_interval: cdktf.stringToTerraform(this._idleAccountErrorInterval),
      idle_account_warning_interval: cdktf.stringToTerraform(this._idleAccountWarningInterval),
      include_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeAttribute),
      include_privilege: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includePrivilege),
      maximum_idle_time: cdktf.stringToTerraform(this._maximumIdleTime),
      name: cdktf.stringToTerraform(this._name),
      never_logged_in_account_error_interval: cdktf.stringToTerraform(this._neverLoggedInAccountErrorInterval),
      never_logged_in_account_warning_interval: cdktf.stringToTerraform(this._neverLoggedInAccountWarningInterval),
      password_evaluation_age: cdktf.stringToTerraform(this._passwordEvaluationAge),
      report_file: cdktf.stringToTerraform(this._reportFile),
      type: cdktf.stringToTerraform(this._type),
      weak_crypt_encoding: cdktf.listMapper(cdktf.stringToTerraform, false)(this._weakCryptEncoding),
      weak_password_storage_scheme: cdktf.listMapper(cdktf.stringToTerraform, false)(this._weakPasswordStorageScheme),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_expiration_warning_interval: {
        value: cdktf.stringToHclTerraform(this._accountExpirationWarningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_backend: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auditBackend),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_severity: {
        value: cdktf.stringToHclTerraform(this._auditSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      idle_account_error_interval: {
        value: cdktf.stringToHclTerraform(this._idleAccountErrorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_account_warning_interval: {
        value: cdktf.stringToHclTerraform(this._idleAccountWarningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_privilege: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includePrivilege),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maximum_idle_time: {
        value: cdktf.stringToHclTerraform(this._maximumIdleTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      never_logged_in_account_error_interval: {
        value: cdktf.stringToHclTerraform(this._neverLoggedInAccountErrorInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      never_logged_in_account_warning_interval: {
        value: cdktf.stringToHclTerraform(this._neverLoggedInAccountWarningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_evaluation_age: {
        value: cdktf.stringToHclTerraform(this._passwordEvaluationAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_file: {
        value: cdktf.stringToHclTerraform(this._reportFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weak_crypt_encoding: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._weakCryptEncoding),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      weak_password_storage_scheme: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._weakPasswordStorageScheme),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
