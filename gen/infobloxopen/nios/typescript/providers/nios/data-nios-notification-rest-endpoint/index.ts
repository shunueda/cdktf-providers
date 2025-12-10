// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosNotificationRestEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#extattrfilters DataNiosNotificationRestEndpoint#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#filters DataNiosNotificationRestEndpoint#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#max_results DataNiosNotificationRestEndpoint#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#paging DataNiosNotificationRestEndpoint#paging}
  */
  readonly paging?: number;
}
export interface DataNiosNotificationRestEndpointResultTemplateInstanceParameters {
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#name DataNiosNotificationRestEndpoint#name}
  */
  readonly name: string;
  /**
  * The syntax of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#syntax DataNiosNotificationRestEndpoint#syntax}
  */
  readonly syntax: string;
  /**
  * The value of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#value DataNiosNotificationRestEndpoint#value}
  */
  readonly value?: string;
}

export function dataNiosNotificationRestEndpointResultTemplateInstanceParametersToTerraform(struct?: DataNiosNotificationRestEndpointResultTemplateInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    syntax: cdktf.stringToTerraform(struct!.syntax),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataNiosNotificationRestEndpointResultTemplateInstanceParametersToHclTerraform(struct?: DataNiosNotificationRestEndpointResultTemplateInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosNotificationRestEndpointResultTemplateInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosNotificationRestEndpointResultTemplateInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosNotificationRestEndpointResultTemplateInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._syntax = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._syntax = value.syntax;
      this._value = value.value;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
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

  // syntax - computed: true, optional: false, required: true
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataNiosNotificationRestEndpointResultTemplateInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : DataNiosNotificationRestEndpointResultTemplateInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): DataNiosNotificationRestEndpointResultTemplateInstanceParametersOutputReference {
    return new DataNiosNotificationRestEndpointResultTemplateInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosNotificationRestEndpointResultTemplateInstance {
  /**
  * The notification REST template parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#parameters DataNiosNotificationRestEndpoint#parameters}
  */
  readonly parameters?: DataNiosNotificationRestEndpointResultTemplateInstanceParameters[] | cdktf.IResolvable;
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#template DataNiosNotificationRestEndpoint#template}
  */
  readonly template: string;
}

export function dataNiosNotificationRestEndpointResultTemplateInstanceToTerraform(struct?: DataNiosNotificationRestEndpointResultTemplateInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(dataNiosNotificationRestEndpointResultTemplateInstanceParametersToTerraform, false)(struct!.parameters),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataNiosNotificationRestEndpointResultTemplateInstanceToHclTerraform(struct?: DataNiosNotificationRestEndpointResultTemplateInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(dataNiosNotificationRestEndpointResultTemplateInstanceParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosNotificationRestEndpointResultTemplateInstanceParametersList",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosNotificationRestEndpointResultTemplateInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosNotificationRestEndpointResultTemplateInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosNotificationRestEndpointResultTemplateInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters.internalValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters.internalValue = value.parameters;
      this._template = value.template;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DataNiosNotificationRestEndpointResultTemplateInstanceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataNiosNotificationRestEndpointResultTemplateInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // template - computed: true, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataNiosNotificationRestEndpointResult {
  /**
  * The token returned by the uploadinit function call in object fileop for a notification REST endpoit client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#client_certificate_file DataNiosNotificationRestEndpoint#client_certificate_file}
  */
  readonly clientCertificateFile?: string;
  /**
  * The comment of a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#comment DataNiosNotificationRestEndpoint#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#extattrs DataNiosNotificationRestEndpoint#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The log level for a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#log_level DataNiosNotificationRestEndpoint#log_level}
  */
  readonly logLevel?: string;
  /**
  * The name of a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#name DataNiosNotificationRestEndpoint#name}
  */
  readonly name: string;
  /**
  * The outbound member which will generate an event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#outbound_member_type DataNiosNotificationRestEndpoint#outbound_member_type}
  */
  readonly outboundMemberType: string;
  /**
  * The list of members for outbound events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#outbound_members DataNiosNotificationRestEndpoint#outbound_members}
  */
  readonly outboundMembers?: string[];
  /**
  * The password of the user that can log into a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#password DataNiosNotificationRestEndpoint#password}
  */
  readonly password?: string;
  /**
  * The server certificate validation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#server_cert_validation DataNiosNotificationRestEndpoint#server_cert_validation}
  */
  readonly serverCertValidation?: string;
  /**
  * Determines if the sync process is disabled for a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#sync_disabled DataNiosNotificationRestEndpoint#sync_disabled}
  */
  readonly syncDisabled?: boolean | cdktf.IResolvable;
  /**
  * The notification REST template instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#template_instance DataNiosNotificationRestEndpoint#template_instance}
  */
  readonly templateInstance?: DataNiosNotificationRestEndpointResultTemplateInstance;
  /**
  * The timeout of session management (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#timeout DataNiosNotificationRestEndpoint#timeout}
  */
  readonly timeout?: number;
  /**
  * The URI of a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#uri DataNiosNotificationRestEndpoint#uri}
  */
  readonly uri: string;
  /**
  * The username of the user that can log into a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#username DataNiosNotificationRestEndpoint#username}
  */
  readonly username?: string;
  /**
  * The vendor identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#vendor_identifier DataNiosNotificationRestEndpoint#vendor_identifier}
  */
  readonly vendorIdentifier?: string;
  /**
  * The user name for WAPI integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#wapi_user_name DataNiosNotificationRestEndpoint#wapi_user_name}
  */
  readonly wapiUserName?: string;
  /**
  * The user password for WAPI integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#wapi_user_password DataNiosNotificationRestEndpoint#wapi_user_password}
  */
  readonly wapiUserPassword?: string;
}

export function dataNiosNotificationRestEndpointResultToTerraform(struct?: DataNiosNotificationRestEndpointResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_file: cdktf.stringToTerraform(struct!.clientCertificateFile),
    comment: cdktf.stringToTerraform(struct!.comment),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    name: cdktf.stringToTerraform(struct!.name),
    outbound_member_type: cdktf.stringToTerraform(struct!.outboundMemberType),
    outbound_members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outboundMembers),
    password: cdktf.stringToTerraform(struct!.password),
    server_cert_validation: cdktf.stringToTerraform(struct!.serverCertValidation),
    sync_disabled: cdktf.booleanToTerraform(struct!.syncDisabled),
    template_instance: dataNiosNotificationRestEndpointResultTemplateInstanceToTerraform(struct!.templateInstance),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
    vendor_identifier: cdktf.stringToTerraform(struct!.vendorIdentifier),
    wapi_user_name: cdktf.stringToTerraform(struct!.wapiUserName),
    wapi_user_password: cdktf.stringToTerraform(struct!.wapiUserPassword),
  }
}


export function dataNiosNotificationRestEndpointResultToHclTerraform(struct?: DataNiosNotificationRestEndpointResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateFile),
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
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
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
    outbound_member_type: {
      value: cdktf.stringToHclTerraform(struct!.outboundMemberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outboundMembers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert_validation: {
      value: cdktf.stringToHclTerraform(struct!.serverCertValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.syncDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_instance: {
      value: dataNiosNotificationRestEndpointResultTemplateInstanceToHclTerraform(struct!.templateInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosNotificationRestEndpointResultTemplateInstance",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_identifier: {
      value: cdktf.stringToHclTerraform(struct!.vendorIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wapi_user_name: {
      value: cdktf.stringToHclTerraform(struct!.wapiUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wapi_user_password: {
      value: cdktf.stringToHclTerraform(struct!.wapiUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosNotificationRestEndpointResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosNotificationRestEndpointResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateFile = this._clientCertificateFile;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outboundMemberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMemberType = this._outboundMemberType;
    }
    if (this._outboundMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMembers = this._outboundMembers;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serverCertValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertValidation = this._serverCertValidation;
    }
    if (this._syncDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDisabled = this._syncDisabled;
    }
    if (this._templateInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateInstance = this._templateInstance?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vendorIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorIdentifier = this._vendorIdentifier;
    }
    if (this._wapiUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wapiUserName = this._wapiUserName;
    }
    if (this._wapiUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.wapiUserPassword = this._wapiUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosNotificationRestEndpointResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateFile = undefined;
      this._comment = undefined;
      this._extattrs = undefined;
      this._logLevel = undefined;
      this._name = undefined;
      this._outboundMemberType = undefined;
      this._outboundMembers = undefined;
      this._password = undefined;
      this._serverCertValidation = undefined;
      this._syncDisabled = undefined;
      this._templateInstance.internalValue = undefined;
      this._timeout = undefined;
      this._uri = undefined;
      this._username = undefined;
      this._vendorIdentifier = undefined;
      this._wapiUserName = undefined;
      this._wapiUserPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateFile = value.clientCertificateFile;
      this._comment = value.comment;
      this._extattrs = value.extattrs;
      this._logLevel = value.logLevel;
      this._name = value.name;
      this._outboundMemberType = value.outboundMemberType;
      this._outboundMembers = value.outboundMembers;
      this._password = value.password;
      this._serverCertValidation = value.serverCertValidation;
      this._syncDisabled = value.syncDisabled;
      this._templateInstance.internalValue = value.templateInstance;
      this._timeout = value.timeout;
      this._uri = value.uri;
      this._username = value.username;
      this._vendorIdentifier = value.vendorIdentifier;
      this._wapiUserName = value.wapiUserName;
      this._wapiUserPassword = value.wapiUserPassword;
    }
  }

  // client_certificate_file - computed: true, optional: true, required: false
  private _clientCertificateFile?: string; 
  public get clientCertificateFile() {
    return this.getStringAttribute('client_certificate_file');
  }
  public set clientCertificateFile(value: string) {
    this._clientCertificateFile = value;
  }
  public resetClientCertificateFile() {
    this._clientCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateFileInput() {
    return this._clientCertificateFile;
  }

  // client_certificate_subject - computed: true, optional: false, required: false
  public get clientCertificateSubject() {
    return this.getStringAttribute('client_certificate_subject');
  }

  // client_certificate_token - computed: true, optional: false, required: false
  public get clientCertificateToken() {
    return this.getStringAttribute('client_certificate_token');
  }

  // client_certificate_valid_from - computed: true, optional: false, required: false
  public get clientCertificateValidFrom() {
    return this.getNumberAttribute('client_certificate_valid_from');
  }

  // client_certificate_valid_to - computed: true, optional: false, required: false
  public get clientCertificateValidTo() {
    return this.getNumberAttribute('client_certificate_valid_to');
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

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // outbound_member_type - computed: true, optional: false, required: true
  private _outboundMemberType?: string; 
  public get outboundMemberType() {
    return this.getStringAttribute('outbound_member_type');
  }
  public set outboundMemberType(value: string) {
    this._outboundMemberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMemberTypeInput() {
    return this._outboundMemberType;
  }

  // outbound_members - computed: true, optional: true, required: false
  private _outboundMembers?: string[]; 
  public get outboundMembers() {
    return this.getListAttribute('outbound_members');
  }
  public set outboundMembers(value: string[]) {
    this._outboundMembers = value;
  }
  public resetOutboundMembers() {
    this._outboundMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMembersInput() {
    return this._outboundMembers;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // server_cert_validation - computed: true, optional: true, required: false
  private _serverCertValidation?: string; 
  public get serverCertValidation() {
    return this.getStringAttribute('server_cert_validation');
  }
  public set serverCertValidation(value: string) {
    this._serverCertValidation = value;
  }
  public resetServerCertValidation() {
    this._serverCertValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertValidationInput() {
    return this._serverCertValidation;
  }

  // sync_disabled - computed: true, optional: true, required: false
  private _syncDisabled?: boolean | cdktf.IResolvable; 
  public get syncDisabled() {
    return this.getBooleanAttribute('sync_disabled');
  }
  public set syncDisabled(value: boolean | cdktf.IResolvable) {
    this._syncDisabled = value;
  }
  public resetSyncDisabled() {
    this._syncDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDisabledInput() {
    return this._syncDisabled;
  }

  // template_instance - computed: true, optional: true, required: false
  private _templateInstance = new DataNiosNotificationRestEndpointResultTemplateInstanceOutputReference(this, "template_instance");
  public get templateInstance() {
    return this._templateInstance;
  }
  public putTemplateInstance(value: DataNiosNotificationRestEndpointResultTemplateInstance) {
    this._templateInstance.internalValue = value;
  }
  public resetTemplateInstance() {
    this._templateInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInstanceInput() {
    return this._templateInstance.internalValue;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // uri - computed: true, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vendor_identifier - computed: true, optional: true, required: false
  private _vendorIdentifier?: string; 
  public get vendorIdentifier() {
    return this.getStringAttribute('vendor_identifier');
  }
  public set vendorIdentifier(value: string) {
    this._vendorIdentifier = value;
  }
  public resetVendorIdentifier() {
    this._vendorIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdentifierInput() {
    return this._vendorIdentifier;
  }

  // wapi_user_name - computed: true, optional: true, required: false
  private _wapiUserName?: string; 
  public get wapiUserName() {
    return this.getStringAttribute('wapi_user_name');
  }
  public set wapiUserName(value: string) {
    this._wapiUserName = value;
  }
  public resetWapiUserName() {
    this._wapiUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wapiUserNameInput() {
    return this._wapiUserName;
  }

  // wapi_user_password - computed: true, optional: true, required: false
  private _wapiUserPassword?: string; 
  public get wapiUserPassword() {
    return this.getStringAttribute('wapi_user_password');
  }
  public set wapiUserPassword(value: string) {
    this._wapiUserPassword = value;
  }
  public resetWapiUserPassword() {
    this._wapiUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wapiUserPasswordInput() {
    return this._wapiUserPassword;
  }
}

export class DataNiosNotificationRestEndpointResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosNotificationRestEndpointResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosNotificationRestEndpointResultOutputReference {
    return new DataNiosNotificationRestEndpointResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint nios_notification_rest_endpoint}
*/
export class DataNiosNotificationRestEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_notification_rest_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosNotificationRestEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosNotificationRestEndpoint to import
  * @param importFromId The id of the existing DataNiosNotificationRestEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosNotificationRestEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_notification_rest_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/notification_rest_endpoint nios_notification_rest_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosNotificationRestEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosNotificationRestEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_notification_rest_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

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
  private _result = new DataNiosNotificationRestEndpointResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
