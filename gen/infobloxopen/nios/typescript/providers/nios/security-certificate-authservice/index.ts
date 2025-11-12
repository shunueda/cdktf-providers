// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCertificateAuthserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the value of the client certificate for automatically populating the NIOS login name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#auto_populate_login SecurityCertificateAuthservice#auto_populate_login}
  */
  readonly autoPopulateLogin?: string;
  /**
  * The list of CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#ca_certificates SecurityCertificateAuthservice#ca_certificates}
  */
  readonly caCertificates: string[];
  /**
  * The descriptive comment for the certificate authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#comment SecurityCertificateAuthservice#comment}
  */
  readonly comment?: string;
  /**
  * Determines if this certificate authentication service is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#disabled SecurityCertificateAuthservice#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if username/password authentication together with client certificate authentication is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#enable_password_request SecurityCertificateAuthservice#enable_password_request}
  */
  readonly enablePasswordRequest?: boolean | cdktf.IResolvable;
  /**
  * Determines if the lookup for user group membership information on remote services is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#enable_remote_lookup SecurityCertificateAuthservice#enable_remote_lookup}
  */
  readonly enableRemoteLookup?: boolean | cdktf.IResolvable;
  /**
  * The number of validation attempts before the appliance contacts the next responder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#max_retries SecurityCertificateAuthservice#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The name of the certificate authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#name SecurityCertificateAuthservice#name}
  */
  readonly name: string;
  /**
  * Specifies the source of OCSP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#ocsp_check SecurityCertificateAuthservice#ocsp_check}
  */
  readonly ocspCheck?: string;
  /**
  * An ordered list of OCSP responders that are part of the certificate authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#ocsp_responders SecurityCertificateAuthservice#ocsp_responders}
  */
  readonly ocspResponders?: SecurityCertificateAuthserviceOcspResponders[] | cdktf.IResolvable;
  /**
  * The period of time the appliance waits before it attempts to contact a responder that is out of service again. The value must be between 1 and 600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#recovery_interval SecurityCertificateAuthservice#recovery_interval}
  */
  readonly recoveryInterval?: number;
  /**
  * The password for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#remote_lookup_password SecurityCertificateAuthservice#remote_lookup_password}
  */
  readonly remoteLookupPassword?: string;
  /**
  * The password for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#remote_lookup_service SecurityCertificateAuthservice#remote_lookup_service}
  */
  readonly remoteLookupService?: string;
  /**
  * The username for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#remote_lookup_username SecurityCertificateAuthservice#remote_lookup_username}
  */
  readonly remoteLookupUsername?: string;
  /**
  * The validation timeout period in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#response_timeout SecurityCertificateAuthservice#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * The OCSP trust model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#trust_model SecurityCertificateAuthservice#trust_model}
  */
  readonly trustModel?: string;
  /**
  * Specifies how to search for a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#user_match_type SecurityCertificateAuthservice#user_match_type}
  */
  readonly userMatchType?: string;
}
export interface SecurityCertificateAuthserviceOcspResponders {
  /**
  * The file path to the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#certificate_file_path SecurityCertificateAuthservice#certificate_file_path}
  */
  readonly certificateFilePath: string;
  /**
  * The descriptive comment for the OCSP authentication responder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#comment SecurityCertificateAuthservice#comment}
  */
  readonly comment?: string;
  /**
  * Determines if this OCSP authentication responder is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#disabled SecurityCertificateAuthservice#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The FQDN (Fully Qualified Domain Name) or IP address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#fqdn_or_ip SecurityCertificateAuthservice#fqdn_or_ip}
  */
  readonly fqdnOrIp: string;
  /**
  * The port used for connecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#port SecurityCertificateAuthservice#port}
  */
  readonly port?: number;
}

export function securityCertificateAuthserviceOcspRespondersToTerraform(struct?: SecurityCertificateAuthserviceOcspResponders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_file_path: cdktf.stringToTerraform(struct!.certificateFilePath),
    comment: cdktf.stringToTerraform(struct!.comment),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    fqdn_or_ip: cdktf.stringToTerraform(struct!.fqdnOrIp),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function securityCertificateAuthserviceOcspRespondersToHclTerraform(struct?: SecurityCertificateAuthserviceOcspResponders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_file_path: {
      value: cdktf.stringToHclTerraform(struct!.certificateFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.fqdnOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityCertificateAuthserviceOcspRespondersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityCertificateAuthserviceOcspResponders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFilePath = this._certificateFilePath;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._fqdnOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnOrIp = this._fqdnOrIp;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityCertificateAuthserviceOcspResponders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateFilePath = undefined;
      this._comment = undefined;
      this._disabled = undefined;
      this._fqdnOrIp = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateFilePath = value.certificateFilePath;
      this._comment = value.comment;
      this._disabled = value.disabled;
      this._fqdnOrIp = value.fqdnOrIp;
      this._port = value.port;
    }
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_file_path - computed: false, optional: false, required: true
  private _certificateFilePath?: string; 
  public get certificateFilePath() {
    return this.getStringAttribute('certificate_file_path');
  }
  public set certificateFilePath(value: string) {
    this._certificateFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFilePathInput() {
    return this._certificateFilePath;
  }

  // certificate_token - computed: true, optional: false, required: false
  public get certificateToken() {
    return this.getStringAttribute('certificate_token');
  }

  // comment - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
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

  // fqdn_or_ip - computed: false, optional: false, required: true
  private _fqdnOrIp?: string; 
  public get fqdnOrIp() {
    return this.getStringAttribute('fqdn_or_ip');
  }
  public set fqdnOrIp(value: string) {
    this._fqdnOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnOrIpInput() {
    return this._fqdnOrIp;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class SecurityCertificateAuthserviceOcspRespondersList extends cdktf.ComplexList {
  public internalValue? : SecurityCertificateAuthserviceOcspResponders[] | cdktf.IResolvable

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
  public get(index: number): SecurityCertificateAuthserviceOcspRespondersOutputReference {
    return new SecurityCertificateAuthserviceOcspRespondersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice nios_security_certificate_authservice}
*/
export class SecurityCertificateAuthservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_security_certificate_authservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityCertificateAuthservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityCertificateAuthservice to import
  * @param importFromId The id of the existing SecurityCertificateAuthservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityCertificateAuthservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_security_certificate_authservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/security_certificate_authservice nios_security_certificate_authservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCertificateAuthserviceConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCertificateAuthserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_security_certificate_authservice',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPopulateLogin = config.autoPopulateLogin;
    this._caCertificates = config.caCertificates;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._enablePasswordRequest = config.enablePasswordRequest;
    this._enableRemoteLookup = config.enableRemoteLookup;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._ocspCheck = config.ocspCheck;
    this._ocspResponders.internalValue = config.ocspResponders;
    this._recoveryInterval = config.recoveryInterval;
    this._remoteLookupPassword = config.remoteLookupPassword;
    this._remoteLookupService = config.remoteLookupService;
    this._remoteLookupUsername = config.remoteLookupUsername;
    this._responseTimeout = config.responseTimeout;
    this._trustModel = config.trustModel;
    this._userMatchType = config.userMatchType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_populate_login - computed: true, optional: true, required: false
  private _autoPopulateLogin?: string; 
  public get autoPopulateLogin() {
    return this.getStringAttribute('auto_populate_login');
  }
  public set autoPopulateLogin(value: string) {
    this._autoPopulateLogin = value;
  }
  public resetAutoPopulateLogin() {
    this._autoPopulateLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPopulateLoginInput() {
    return this._autoPopulateLogin;
  }

  // ca_certificates - computed: false, optional: false, required: true
  private _caCertificates?: string[]; 
  public get caCertificates() {
    return this.getListAttribute('ca_certificates');
  }
  public set caCertificates(value: string[]) {
    this._caCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatesInput() {
    return this._caCertificates;
  }

  // comment - computed: true, optional: true, required: false
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

  // disabled - computed: true, optional: true, required: false
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

  // enable_password_request - computed: true, optional: true, required: false
  private _enablePasswordRequest?: boolean | cdktf.IResolvable; 
  public get enablePasswordRequest() {
    return this.getBooleanAttribute('enable_password_request');
  }
  public set enablePasswordRequest(value: boolean | cdktf.IResolvable) {
    this._enablePasswordRequest = value;
  }
  public resetEnablePasswordRequest() {
    this._enablePasswordRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordRequestInput() {
    return this._enablePasswordRequest;
  }

  // enable_remote_lookup - computed: true, optional: true, required: false
  private _enableRemoteLookup?: boolean | cdktf.IResolvable; 
  public get enableRemoteLookup() {
    return this.getBooleanAttribute('enable_remote_lookup');
  }
  public set enableRemoteLookup(value: boolean | cdktf.IResolvable) {
    this._enableRemoteLookup = value;
  }
  public resetEnableRemoteLookup() {
    this._enableRemoteLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteLookupInput() {
    return this._enableRemoteLookup;
  }

  // max_retries - computed: true, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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

  // ocsp_check - computed: true, optional: true, required: false
  private _ocspCheck?: string; 
  public get ocspCheck() {
    return this.getStringAttribute('ocsp_check');
  }
  public set ocspCheck(value: string) {
    this._ocspCheck = value;
  }
  public resetOcspCheck() {
    this._ocspCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCheckInput() {
    return this._ocspCheck;
  }

  // ocsp_responders - computed: false, optional: true, required: false
  private _ocspResponders = new SecurityCertificateAuthserviceOcspRespondersList(this, "ocsp_responders", false);
  public get ocspResponders() {
    return this._ocspResponders;
  }
  public putOcspResponders(value: SecurityCertificateAuthserviceOcspResponders[] | cdktf.IResolvable) {
    this._ocspResponders.internalValue = value;
  }
  public resetOcspResponders() {
    this._ocspResponders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspRespondersInput() {
    return this._ocspResponders.internalValue;
  }

  // recovery_interval - computed: true, optional: true, required: false
  private _recoveryInterval?: number; 
  public get recoveryInterval() {
    return this.getNumberAttribute('recovery_interval');
  }
  public set recoveryInterval(value: number) {
    this._recoveryInterval = value;
  }
  public resetRecoveryInterval() {
    this._recoveryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryIntervalInput() {
    return this._recoveryInterval;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // remote_lookup_password - computed: false, optional: true, required: false
  private _remoteLookupPassword?: string; 
  public get remoteLookupPassword() {
    return this.getStringAttribute('remote_lookup_password');
  }
  public set remoteLookupPassword(value: string) {
    this._remoteLookupPassword = value;
  }
  public resetRemoteLookupPassword() {
    this._remoteLookupPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLookupPasswordInput() {
    return this._remoteLookupPassword;
  }

  // remote_lookup_service - computed: true, optional: true, required: false
  private _remoteLookupService?: string; 
  public get remoteLookupService() {
    return this.getStringAttribute('remote_lookup_service');
  }
  public set remoteLookupService(value: string) {
    this._remoteLookupService = value;
  }
  public resetRemoteLookupService() {
    this._remoteLookupService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLookupServiceInput() {
    return this._remoteLookupService;
  }

  // remote_lookup_username - computed: true, optional: true, required: false
  private _remoteLookupUsername?: string; 
  public get remoteLookupUsername() {
    return this.getStringAttribute('remote_lookup_username');
  }
  public set remoteLookupUsername(value: string) {
    this._remoteLookupUsername = value;
  }
  public resetRemoteLookupUsername() {
    this._remoteLookupUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLookupUsernameInput() {
    return this._remoteLookupUsername;
  }

  // response_timeout - computed: true, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // trust_model - computed: true, optional: true, required: false
  private _trustModel?: string; 
  public get trustModel() {
    return this.getStringAttribute('trust_model');
  }
  public set trustModel(value: string) {
    this._trustModel = value;
  }
  public resetTrustModel() {
    this._trustModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustModelInput() {
    return this._trustModel;
  }

  // user_match_type - computed: true, optional: true, required: false
  private _userMatchType?: string; 
  public get userMatchType() {
    return this.getStringAttribute('user_match_type');
  }
  public set userMatchType(value: string) {
    this._userMatchType = value;
  }
  public resetUserMatchType() {
    this._userMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchTypeInput() {
    return this._userMatchType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_populate_login: cdktf.stringToTerraform(this._autoPopulateLogin),
      ca_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caCertificates),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      enable_password_request: cdktf.booleanToTerraform(this._enablePasswordRequest),
      enable_remote_lookup: cdktf.booleanToTerraform(this._enableRemoteLookup),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      name: cdktf.stringToTerraform(this._name),
      ocsp_check: cdktf.stringToTerraform(this._ocspCheck),
      ocsp_responders: cdktf.listMapper(securityCertificateAuthserviceOcspRespondersToTerraform, false)(this._ocspResponders.internalValue),
      recovery_interval: cdktf.numberToTerraform(this._recoveryInterval),
      remote_lookup_password: cdktf.stringToTerraform(this._remoteLookupPassword),
      remote_lookup_service: cdktf.stringToTerraform(this._remoteLookupService),
      remote_lookup_username: cdktf.stringToTerraform(this._remoteLookupUsername),
      response_timeout: cdktf.numberToTerraform(this._responseTimeout),
      trust_model: cdktf.stringToTerraform(this._trustModel),
      user_match_type: cdktf.stringToTerraform(this._userMatchType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_populate_login: {
        value: cdktf.stringToHclTerraform(this._autoPopulateLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caCertificates),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_password_request: {
        value: cdktf.booleanToHclTerraform(this._enablePasswordRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_remote_lookup: {
        value: cdktf.booleanToHclTerraform(this._enableRemoteLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_check: {
        value: cdktf.stringToHclTerraform(this._ocspCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_responders: {
        value: cdktf.listMapperHcl(securityCertificateAuthserviceOcspRespondersToHclTerraform, false)(this._ocspResponders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityCertificateAuthserviceOcspRespondersList",
      },
      recovery_interval: {
        value: cdktf.numberToHclTerraform(this._recoveryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_lookup_password: {
        value: cdktf.stringToHclTerraform(this._remoteLookupPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_lookup_service: {
        value: cdktf.stringToHclTerraform(this._remoteLookupService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_lookup_username: {
        value: cdktf.stringToHclTerraform(this._remoteLookupUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_timeout: {
        value: cdktf.numberToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trust_model: {
        value: cdktf.stringToHclTerraform(this._trustModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_match_type: {
        value: cdktf.stringToHclTerraform(this._userMatchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
