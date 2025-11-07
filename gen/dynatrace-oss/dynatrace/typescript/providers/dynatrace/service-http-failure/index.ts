// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceHttpFailureConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#enabled ServiceHttpFailure#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#id ServiceHttpFailure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#service_id ServiceHttpFailure#service_id}
  */
  readonly serviceId: string;
  /**
  * broken_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#broken_links ServiceHttpFailure#broken_links}
  */
  readonly brokenLinks?: ServiceHttpFailureBrokenLinks;
  /**
  * http_response_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#http_response_codes ServiceHttpFailure#http_response_codes}
  */
  readonly httpResponseCodes?: ServiceHttpFailureHttpResponseCodes;
}
export interface ServiceHttpFailureBrokenLinks {
  /**
  * If your application relies on other hosts at other domains, add the associated domain names here. Once configured, Dynatrace will consider 404s thrown by hosts at these domains to be service failures related to your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#broken_link_domains ServiceHttpFailure#broken_link_domains}
  */
  readonly brokenLinkDomains?: string[];
  /**
  * Consider 404 HTTP response codes as failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#http_404_not_found_failures ServiceHttpFailure#http_404_not_found_failures}
  */
  readonly http404NotFoundFailures: boolean | cdktf.IResolvable;
}

export function serviceHttpFailureBrokenLinksToTerraform(struct?: ServiceHttpFailureBrokenLinksOutputReference | ServiceHttpFailureBrokenLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broken_link_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokenLinkDomains),
    http_404_not_found_failures: cdktf.booleanToTerraform(struct!.http404NotFoundFailures),
  }
}


export function serviceHttpFailureBrokenLinksToHclTerraform(struct?: ServiceHttpFailureBrokenLinksOutputReference | ServiceHttpFailureBrokenLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broken_link_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokenLinkDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    http_404_not_found_failures: {
      value: cdktf.booleanToHclTerraform(struct!.http404NotFoundFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceHttpFailureBrokenLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceHttpFailureBrokenLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokenLinkDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokenLinkDomains = this._brokenLinkDomains;
    }
    if (this._http404NotFoundFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.http404NotFoundFailures = this._http404NotFoundFailures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceHttpFailureBrokenLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokenLinkDomains = undefined;
      this._http404NotFoundFailures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokenLinkDomains = value.brokenLinkDomains;
      this._http404NotFoundFailures = value.http404NotFoundFailures;
    }
  }

  // broken_link_domains - computed: false, optional: true, required: false
  private _brokenLinkDomains?: string[]; 
  public get brokenLinkDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('broken_link_domains'));
  }
  public set brokenLinkDomains(value: string[]) {
    this._brokenLinkDomains = value;
  }
  public resetBrokenLinkDomains() {
    this._brokenLinkDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokenLinkDomainsInput() {
    return this._brokenLinkDomains;
  }

  // http_404_not_found_failures - computed: false, optional: false, required: true
  private _http404NotFoundFailures?: boolean | cdktf.IResolvable; 
  public get http404NotFoundFailures() {
    return this.getBooleanAttribute('http_404_not_found_failures');
  }
  public set http404NotFoundFailures(value: boolean | cdktf.IResolvable) {
    this._http404NotFoundFailures = value;
  }
  // Temporarily expose input value. Use with caution.
  public get http404NotFoundFailuresInput() {
    return this._http404NotFoundFailures;
  }
}
export interface ServiceHttpFailureHttpResponseCodes {
  /**
  * HTTP response codes which indicate client side errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#client_side_errors ServiceHttpFailure#client_side_errors}
  */
  readonly clientSideErrors: string;
  /**
  * Treat missing HTTP response code as client side error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#fail_on_missing_response_code_client_side ServiceHttpFailure#fail_on_missing_response_code_client_side}
  */
  readonly failOnMissingResponseCodeClientSide: boolean | cdktf.IResolvable;
  /**
  * Treat missing HTTP response code as server side errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#fail_on_missing_response_code_server_side ServiceHttpFailure#fail_on_missing_response_code_server_side}
  */
  readonly failOnMissingResponseCodeServerSide: boolean | cdktf.IResolvable;
  /**
  * HTTP response codes which indicate an error on the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#server_side_errors ServiceHttpFailure#server_side_errors}
  */
  readonly serverSideErrors: string;
}

export function serviceHttpFailureHttpResponseCodesToTerraform(struct?: ServiceHttpFailureHttpResponseCodesOutputReference | ServiceHttpFailureHttpResponseCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_side_errors: cdktf.stringToTerraform(struct!.clientSideErrors),
    fail_on_missing_response_code_client_side: cdktf.booleanToTerraform(struct!.failOnMissingResponseCodeClientSide),
    fail_on_missing_response_code_server_side: cdktf.booleanToTerraform(struct!.failOnMissingResponseCodeServerSide),
    server_side_errors: cdktf.stringToTerraform(struct!.serverSideErrors),
  }
}


export function serviceHttpFailureHttpResponseCodesToHclTerraform(struct?: ServiceHttpFailureHttpResponseCodesOutputReference | ServiceHttpFailureHttpResponseCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_side_errors: {
      value: cdktf.stringToHclTerraform(struct!.clientSideErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_missing_response_code_client_side: {
      value: cdktf.booleanToHclTerraform(struct!.failOnMissingResponseCodeClientSide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_on_missing_response_code_server_side: {
      value: cdktf.booleanToHclTerraform(struct!.failOnMissingResponseCodeServerSide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_side_errors: {
      value: cdktf.stringToHclTerraform(struct!.serverSideErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceHttpFailureHttpResponseCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceHttpFailureHttpResponseCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSideErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSideErrors = this._clientSideErrors;
    }
    if (this._failOnMissingResponseCodeClientSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnMissingResponseCodeClientSide = this._failOnMissingResponseCodeClientSide;
    }
    if (this._failOnMissingResponseCodeServerSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnMissingResponseCodeServerSide = this._failOnMissingResponseCodeServerSide;
    }
    if (this._serverSideErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideErrors = this._serverSideErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceHttpFailureHttpResponseCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSideErrors = undefined;
      this._failOnMissingResponseCodeClientSide = undefined;
      this._failOnMissingResponseCodeServerSide = undefined;
      this._serverSideErrors = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSideErrors = value.clientSideErrors;
      this._failOnMissingResponseCodeClientSide = value.failOnMissingResponseCodeClientSide;
      this._failOnMissingResponseCodeServerSide = value.failOnMissingResponseCodeServerSide;
      this._serverSideErrors = value.serverSideErrors;
    }
  }

  // client_side_errors - computed: false, optional: false, required: true
  private _clientSideErrors?: string; 
  public get clientSideErrors() {
    return this.getStringAttribute('client_side_errors');
  }
  public set clientSideErrors(value: string) {
    this._clientSideErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSideErrorsInput() {
    return this._clientSideErrors;
  }

  // fail_on_missing_response_code_client_side - computed: false, optional: false, required: true
  private _failOnMissingResponseCodeClientSide?: boolean | cdktf.IResolvable; 
  public get failOnMissingResponseCodeClientSide() {
    return this.getBooleanAttribute('fail_on_missing_response_code_client_side');
  }
  public set failOnMissingResponseCodeClientSide(value: boolean | cdktf.IResolvable) {
    this._failOnMissingResponseCodeClientSide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnMissingResponseCodeClientSideInput() {
    return this._failOnMissingResponseCodeClientSide;
  }

  // fail_on_missing_response_code_server_side - computed: false, optional: false, required: true
  private _failOnMissingResponseCodeServerSide?: boolean | cdktf.IResolvable; 
  public get failOnMissingResponseCodeServerSide() {
    return this.getBooleanAttribute('fail_on_missing_response_code_server_side');
  }
  public set failOnMissingResponseCodeServerSide(value: boolean | cdktf.IResolvable) {
    this._failOnMissingResponseCodeServerSide = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnMissingResponseCodeServerSideInput() {
    return this._failOnMissingResponseCodeServerSide;
  }

  // server_side_errors - computed: false, optional: false, required: true
  private _serverSideErrors?: string; 
  public get serverSideErrors() {
    return this.getStringAttribute('server_side_errors');
  }
  public set serverSideErrors(value: string) {
    this._serverSideErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideErrorsInput() {
    return this._serverSideErrors;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure dynatrace_service_http_failure}
*/
export class ServiceHttpFailure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_http_failure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceHttpFailure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceHttpFailure to import
  * @param importFromId The id of the existing ServiceHttpFailure that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceHttpFailure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_http_failure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_http_failure dynatrace_service_http_failure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceHttpFailureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceHttpFailureConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_http_failure',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._serviceId = config.serviceId;
    this._brokenLinks.internalValue = config.brokenLinks;
    this._httpResponseCodes.internalValue = config.httpResponseCodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // broken_links - computed: false, optional: true, required: false
  private _brokenLinks = new ServiceHttpFailureBrokenLinksOutputReference(this, "broken_links");
  public get brokenLinks() {
    return this._brokenLinks;
  }
  public putBrokenLinks(value: ServiceHttpFailureBrokenLinks) {
    this._brokenLinks.internalValue = value;
  }
  public resetBrokenLinks() {
    this._brokenLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokenLinksInput() {
    return this._brokenLinks.internalValue;
  }

  // http_response_codes - computed: false, optional: true, required: false
  private _httpResponseCodes = new ServiceHttpFailureHttpResponseCodesOutputReference(this, "http_response_codes");
  public get httpResponseCodes() {
    return this._httpResponseCodes;
  }
  public putHttpResponseCodes(value: ServiceHttpFailureHttpResponseCodes) {
    this._httpResponseCodes.internalValue = value;
  }
  public resetHttpResponseCodes() {
    this._httpResponseCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodesInput() {
    return this._httpResponseCodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
      broken_links: serviceHttpFailureBrokenLinksToTerraform(this._brokenLinks.internalValue),
      http_response_codes: serviceHttpFailureHttpResponseCodesToTerraform(this._httpResponseCodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      broken_links: {
        value: serviceHttpFailureBrokenLinksToHclTerraform(this._brokenLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceHttpFailureBrokenLinksList",
      },
      http_response_codes: {
        value: serviceHttpFailureHttpResponseCodesToHclTerraform(this._httpResponseCodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceHttpFailureHttpResponseCodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
