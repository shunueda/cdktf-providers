// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosSecurityCertificateAuthserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#filters DataNiosSecurityCertificateAuthservice#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#max_results DataNiosSecurityCertificateAuthservice#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#paging DataNiosSecurityCertificateAuthservice#paging}
  */
  readonly paging?: number;
}
export interface DataNiosSecurityCertificateAuthserviceResultOcspResponders {
  /**
  * The file path to the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#certificate_file_path DataNiosSecurityCertificateAuthservice#certificate_file_path}
  */
  readonly certificateFilePath: string;
  /**
  * The descriptive comment for the OCSP authentication responder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#comment DataNiosSecurityCertificateAuthservice#comment}
  */
  readonly comment?: string;
  /**
  * Determines if this OCSP authentication responder is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#disabled DataNiosSecurityCertificateAuthservice#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The FQDN (Fully Qualified Domain Name) or IP address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#fqdn_or_ip DataNiosSecurityCertificateAuthservice#fqdn_or_ip}
  */
  readonly fqdnOrIp: string;
  /**
  * The port used for connecting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#port DataNiosSecurityCertificateAuthservice#port}
  */
  readonly port?: number;
}

export function dataNiosSecurityCertificateAuthserviceResultOcspRespondersToTerraform(struct?: DataNiosSecurityCertificateAuthserviceResultOcspResponders | cdktf.IResolvable): any {
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


export function dataNiosSecurityCertificateAuthserviceResultOcspRespondersToHclTerraform(struct?: DataNiosSecurityCertificateAuthserviceResultOcspResponders | cdktf.IResolvable): any {
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

export class DataNiosSecurityCertificateAuthserviceResultOcspRespondersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSecurityCertificateAuthserviceResultOcspResponders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosSecurityCertificateAuthserviceResultOcspResponders | cdktf.IResolvable | undefined) {
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

  // certificate_file_path - computed: true, optional: false, required: true
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

  // fqdn_or_ip - computed: true, optional: false, required: true
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

export class DataNiosSecurityCertificateAuthserviceResultOcspRespondersList extends cdktf.ComplexList {
  public internalValue? : DataNiosSecurityCertificateAuthserviceResultOcspResponders[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSecurityCertificateAuthserviceResultOcspRespondersOutputReference {
    return new DataNiosSecurityCertificateAuthserviceResultOcspRespondersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosSecurityCertificateAuthserviceResult {
  /**
  * Specifies the value of the client certificate for automatically populating the NIOS login name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#auto_populate_login DataNiosSecurityCertificateAuthservice#auto_populate_login}
  */
  readonly autoPopulateLogin?: string;
  /**
  * The list of CA certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#ca_certificates DataNiosSecurityCertificateAuthservice#ca_certificates}
  */
  readonly caCertificates: string[];
  /**
  * The descriptive comment for the certificate authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#comment DataNiosSecurityCertificateAuthservice#comment}
  */
  readonly comment?: string;
  /**
  * Determines if this certificate authentication service is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#disabled DataNiosSecurityCertificateAuthservice#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if username/password authentication together with client certificate authentication is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#enable_password_request DataNiosSecurityCertificateAuthservice#enable_password_request}
  */
  readonly enablePasswordRequest?: boolean | cdktf.IResolvable;
  /**
  * Determines if the lookup for user group membership information on remote services is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#enable_remote_lookup DataNiosSecurityCertificateAuthservice#enable_remote_lookup}
  */
  readonly enableRemoteLookup?: boolean | cdktf.IResolvable;
  /**
  * The number of validation attempts before the appliance contacts the next responder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#max_retries DataNiosSecurityCertificateAuthservice#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The name of the certificate authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#name DataNiosSecurityCertificateAuthservice#name}
  */
  readonly name: string;
  /**
  * Specifies the source of OCSP settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#ocsp_check DataNiosSecurityCertificateAuthservice#ocsp_check}
  */
  readonly ocspCheck?: string;
  /**
  * An ordered list of OCSP responders that are part of the certificate authentication service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#ocsp_responders DataNiosSecurityCertificateAuthservice#ocsp_responders}
  */
  readonly ocspResponders?: DataNiosSecurityCertificateAuthserviceResultOcspResponders[] | cdktf.IResolvable;
  /**
  * The period of time the appliance waits before it attempts to contact a responder that is out of service again. The value must be between 1 and 600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#recovery_interval DataNiosSecurityCertificateAuthservice#recovery_interval}
  */
  readonly recoveryInterval?: number;
  /**
  * The password for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#remote_lookup_password DataNiosSecurityCertificateAuthservice#remote_lookup_password}
  */
  readonly remoteLookupPassword?: string;
  /**
  * The password for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#remote_lookup_service DataNiosSecurityCertificateAuthservice#remote_lookup_service}
  */
  readonly remoteLookupService?: string;
  /**
  * The username for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#remote_lookup_username DataNiosSecurityCertificateAuthservice#remote_lookup_username}
  */
  readonly remoteLookupUsername?: string;
  /**
  * The validation timeout period in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#response_timeout DataNiosSecurityCertificateAuthservice#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * The OCSP trust model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#trust_model DataNiosSecurityCertificateAuthservice#trust_model}
  */
  readonly trustModel?: string;
  /**
  * Specifies how to search for a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#user_match_type DataNiosSecurityCertificateAuthservice#user_match_type}
  */
  readonly userMatchType?: string;
}

export function dataNiosSecurityCertificateAuthserviceResultToTerraform(struct?: DataNiosSecurityCertificateAuthserviceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_populate_login: cdktf.stringToTerraform(struct!.autoPopulateLogin),
    ca_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caCertificates),
    comment: cdktf.stringToTerraform(struct!.comment),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    enable_password_request: cdktf.booleanToTerraform(struct!.enablePasswordRequest),
    enable_remote_lookup: cdktf.booleanToTerraform(struct!.enableRemoteLookup),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    name: cdktf.stringToTerraform(struct!.name),
    ocsp_check: cdktf.stringToTerraform(struct!.ocspCheck),
    ocsp_responders: cdktf.listMapper(dataNiosSecurityCertificateAuthserviceResultOcspRespondersToTerraform, false)(struct!.ocspResponders),
    recovery_interval: cdktf.numberToTerraform(struct!.recoveryInterval),
    remote_lookup_password: cdktf.stringToTerraform(struct!.remoteLookupPassword),
    remote_lookup_service: cdktf.stringToTerraform(struct!.remoteLookupService),
    remote_lookup_username: cdktf.stringToTerraform(struct!.remoteLookupUsername),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    trust_model: cdktf.stringToTerraform(struct!.trustModel),
    user_match_type: cdktf.stringToTerraform(struct!.userMatchType),
  }
}


export function dataNiosSecurityCertificateAuthserviceResultToHclTerraform(struct?: DataNiosSecurityCertificateAuthserviceResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_populate_login: {
      value: cdktf.stringToHclTerraform(struct!.autoPopulateLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caCertificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    enable_password_request: {
      value: cdktf.booleanToHclTerraform(struct!.enablePasswordRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_remote_lookup: {
      value: cdktf.booleanToHclTerraform(struct!.enableRemoteLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_check: {
      value: cdktf.stringToHclTerraform(struct!.ocspCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_responders: {
      value: cdktf.listMapperHcl(dataNiosSecurityCertificateAuthserviceResultOcspRespondersToHclTerraform, false)(struct!.ocspResponders),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosSecurityCertificateAuthserviceResultOcspRespondersList",
    },
    recovery_interval: {
      value: cdktf.numberToHclTerraform(struct!.recoveryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_lookup_password: {
      value: cdktf.stringToHclTerraform(struct!.remoteLookupPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_lookup_service: {
      value: cdktf.stringToHclTerraform(struct!.remoteLookupService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_lookup_username: {
      value: cdktf.stringToHclTerraform(struct!.remoteLookupUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trust_model: {
      value: cdktf.stringToHclTerraform(struct!.trustModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_match_type: {
      value: cdktf.stringToHclTerraform(struct!.userMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityCertificateAuthserviceResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSecurityCertificateAuthserviceResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPopulateLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPopulateLogin = this._autoPopulateLogin;
    }
    if (this._caCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificates = this._caCertificates;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enablePasswordRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasswordRequest = this._enablePasswordRequest;
    }
    if (this._enableRemoteLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteLookup = this._enableRemoteLookup;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ocspCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspCheck = this._ocspCheck;
    }
    if (this._ocspResponders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponders = this._ocspResponders?.internalValue;
    }
    if (this._recoveryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryInterval = this._recoveryInterval;
    }
    if (this._remoteLookupPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLookupPassword = this._remoteLookupPassword;
    }
    if (this._remoteLookupService !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLookupService = this._remoteLookupService;
    }
    if (this._remoteLookupUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLookupUsername = this._remoteLookupUsername;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._trustModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustModel = this._trustModel;
    }
    if (this._userMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMatchType = this._userMatchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityCertificateAuthserviceResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPopulateLogin = undefined;
      this._caCertificates = undefined;
      this._comment = undefined;
      this._disabled = undefined;
      this._enablePasswordRequest = undefined;
      this._enableRemoteLookup = undefined;
      this._maxRetries = undefined;
      this._name = undefined;
      this._ocspCheck = undefined;
      this._ocspResponders.internalValue = undefined;
      this._recoveryInterval = undefined;
      this._remoteLookupPassword = undefined;
      this._remoteLookupService = undefined;
      this._remoteLookupUsername = undefined;
      this._responseTimeout = undefined;
      this._trustModel = undefined;
      this._userMatchType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPopulateLogin = value.autoPopulateLogin;
      this._caCertificates = value.caCertificates;
      this._comment = value.comment;
      this._disabled = value.disabled;
      this._enablePasswordRequest = value.enablePasswordRequest;
      this._enableRemoteLookup = value.enableRemoteLookup;
      this._maxRetries = value.maxRetries;
      this._name = value.name;
      this._ocspCheck = value.ocspCheck;
      this._ocspResponders.internalValue = value.ocspResponders;
      this._recoveryInterval = value.recoveryInterval;
      this._remoteLookupPassword = value.remoteLookupPassword;
      this._remoteLookupService = value.remoteLookupService;
      this._remoteLookupUsername = value.remoteLookupUsername;
      this._responseTimeout = value.responseTimeout;
      this._trustModel = value.trustModel;
      this._userMatchType = value.userMatchType;
    }
  }

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

  // ca_certificates - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // ocsp_responders - computed: true, optional: true, required: false
  private _ocspResponders = new DataNiosSecurityCertificateAuthserviceResultOcspRespondersList(this, "ocsp_responders", false);
  public get ocspResponders() {
    return this._ocspResponders;
  }
  public putOcspResponders(value: DataNiosSecurityCertificateAuthserviceResultOcspResponders[] | cdktf.IResolvable) {
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

  // remote_lookup_password - computed: true, optional: true, required: false
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
}

export class DataNiosSecurityCertificateAuthserviceResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosSecurityCertificateAuthserviceResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSecurityCertificateAuthserviceResultOutputReference {
    return new DataNiosSecurityCertificateAuthserviceResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice nios_security_certificate_authservice}
*/
export class DataNiosSecurityCertificateAuthservice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_security_certificate_authservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosSecurityCertificateAuthservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosSecurityCertificateAuthservice to import
  * @param importFromId The id of the existing DataNiosSecurityCertificateAuthservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosSecurityCertificateAuthservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_security_certificate_authservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_certificate_authservice nios_security_certificate_authservice} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosSecurityCertificateAuthserviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosSecurityCertificateAuthserviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_security_certificate_authservice',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosSecurityCertificateAuthserviceResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
