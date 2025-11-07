// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationRestEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The token returned by the uploadinit function call in object fileop for a notification REST endpoit client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#client_certificate_file NotificationRestEndpoint#client_certificate_file}
  */
  readonly clientCertificateFile?: string;
  /**
  * The comment of a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#comment NotificationRestEndpoint#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#extattrs NotificationRestEndpoint#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The log level for a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#log_level NotificationRestEndpoint#log_level}
  */
  readonly logLevel?: string;
  /**
  * The name of a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#name NotificationRestEndpoint#name}
  */
  readonly name: string;
  /**
  * The outbound member which will generate an event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#outbound_member_type NotificationRestEndpoint#outbound_member_type}
  */
  readonly outboundMemberType: string;
  /**
  * The list of members for outbound events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#outbound_members NotificationRestEndpoint#outbound_members}
  */
  readonly outboundMembers?: string[];
  /**
  * The password of the user that can log into a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#password NotificationRestEndpoint#password}
  */
  readonly password?: string;
  /**
  * The server certificate validation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#server_cert_validation NotificationRestEndpoint#server_cert_validation}
  */
  readonly serverCertValidation?: string;
  /**
  * Determines if the sync process is disabled for a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#sync_disabled NotificationRestEndpoint#sync_disabled}
  */
  readonly syncDisabled?: boolean | cdktf.IResolvable;
  /**
  * The notification REST template instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#template_instance NotificationRestEndpoint#template_instance}
  */
  readonly templateInstance?: NotificationRestEndpointTemplateInstance;
  /**
  * The timeout of session management (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#timeout NotificationRestEndpoint#timeout}
  */
  readonly timeout?: number;
  /**
  * The URI of a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#uri NotificationRestEndpoint#uri}
  */
  readonly uri: string;
  /**
  * The username of the user that can log into a notification REST endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#username NotificationRestEndpoint#username}
  */
  readonly username?: string;
  /**
  * The vendor identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#vendor_identifier NotificationRestEndpoint#vendor_identifier}
  */
  readonly vendorIdentifier?: string;
  /**
  * The user name for WAPI integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#wapi_user_name NotificationRestEndpoint#wapi_user_name}
  */
  readonly wapiUserName?: string;
  /**
  * The user password for WAPI integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#wapi_user_password NotificationRestEndpoint#wapi_user_password}
  */
  readonly wapiUserPassword?: string;
}
export interface NotificationRestEndpointTemplateInstanceParameters {
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#name NotificationRestEndpoint#name}
  */
  readonly name: string;
  /**
  * The syntax of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#syntax NotificationRestEndpoint#syntax}
  */
  readonly syntax: string;
  /**
  * The value of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#value NotificationRestEndpoint#value}
  */
  readonly value?: string;
}

export function notificationRestEndpointTemplateInstanceParametersToTerraform(struct?: NotificationRestEndpointTemplateInstanceParameters | cdktf.IResolvable): any {
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


export function notificationRestEndpointTemplateInstanceParametersToHclTerraform(struct?: NotificationRestEndpointTemplateInstanceParameters | cdktf.IResolvable): any {
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

export class NotificationRestEndpointTemplateInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationRestEndpointTemplateInstanceParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationRestEndpointTemplateInstanceParameters | cdktf.IResolvable | undefined) {
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

export class NotificationRestEndpointTemplateInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : NotificationRestEndpointTemplateInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): NotificationRestEndpointTemplateInstanceParametersOutputReference {
    return new NotificationRestEndpointTemplateInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationRestEndpointTemplateInstance {
  /**
  * The notification REST template parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#parameters NotificationRestEndpoint#parameters}
  */
  readonly parameters?: NotificationRestEndpointTemplateInstanceParameters[] | cdktf.IResolvable;
  /**
  * The name of the REST API template parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#template NotificationRestEndpoint#template}
  */
  readonly template: string;
}

export function notificationRestEndpointTemplateInstanceToTerraform(struct?: NotificationRestEndpointTemplateInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.listMapper(notificationRestEndpointTemplateInstanceParametersToTerraform, false)(struct!.parameters),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function notificationRestEndpointTemplateInstanceToHclTerraform(struct?: NotificationRestEndpointTemplateInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.listMapperHcl(notificationRestEndpointTemplateInstanceParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationRestEndpointTemplateInstanceParametersList",
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

export class NotificationRestEndpointTemplateInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationRestEndpointTemplateInstance | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationRestEndpointTemplateInstance | cdktf.IResolvable | undefined) {
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
  private _parameters = new NotificationRestEndpointTemplateInstanceParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NotificationRestEndpointTemplateInstanceParameters[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint nios_notification_rest_endpoint}
*/
export class NotificationRestEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_notification_rest_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationRestEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationRestEndpoint to import
  * @param importFromId The id of the existing NotificationRestEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationRestEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_notification_rest_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/notification_rest_endpoint nios_notification_rest_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationRestEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationRestEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_notification_rest_endpoint',
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
    this._clientCertificateFile = config.clientCertificateFile;
    this._comment = config.comment;
    this._extattrs = config.extattrs;
    this._logLevel = config.logLevel;
    this._name = config.name;
    this._outboundMemberType = config.outboundMemberType;
    this._outboundMembers = config.outboundMembers;
    this._password = config.password;
    this._serverCertValidation = config.serverCertValidation;
    this._syncDisabled = config.syncDisabled;
    this._templateInstance.internalValue = config.templateInstance;
    this._timeout = config.timeout;
    this._uri = config.uri;
    this._username = config.username;
    this._vendorIdentifier = config.vendorIdentifier;
    this._wapiUserName = config.wapiUserName;
    this._wapiUserPassword = config.wapiUserPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate_file - computed: false, optional: true, required: false
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

  // outbound_member_type - computed: false, optional: false, required: true
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

  // outbound_members - computed: false, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
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
  private _templateInstance = new NotificationRestEndpointTemplateInstanceOutputReference(this, "template_instance");
  public get templateInstance() {
    return this._templateInstance;
  }
  public putTemplateInstance(value: NotificationRestEndpointTemplateInstance) {
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

  // uri - computed: false, optional: false, required: true
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

  // wapi_user_password - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate_file: cdktf.stringToTerraform(this._clientCertificateFile),
      comment: cdktf.stringToTerraform(this._comment),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      log_level: cdktf.stringToTerraform(this._logLevel),
      name: cdktf.stringToTerraform(this._name),
      outbound_member_type: cdktf.stringToTerraform(this._outboundMemberType),
      outbound_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outboundMembers),
      password: cdktf.stringToTerraform(this._password),
      server_cert_validation: cdktf.stringToTerraform(this._serverCertValidation),
      sync_disabled: cdktf.booleanToTerraform(this._syncDisabled),
      template_instance: notificationRestEndpointTemplateInstanceToTerraform(this._templateInstance.internalValue),
      timeout: cdktf.numberToTerraform(this._timeout),
      uri: cdktf.stringToTerraform(this._uri),
      username: cdktf.stringToTerraform(this._username),
      vendor_identifier: cdktf.stringToTerraform(this._vendorIdentifier),
      wapi_user_name: cdktf.stringToTerraform(this._wapiUserName),
      wapi_user_password: cdktf.stringToTerraform(this._wapiUserPassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_certificate_file: {
        value: cdktf.stringToHclTerraform(this._clientCertificateFile),
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
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
      outbound_member_type: {
        value: cdktf.stringToHclTerraform(this._outboundMemberType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outboundMembers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert_validation: {
        value: cdktf.stringToHclTerraform(this._serverCertValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_disabled: {
        value: cdktf.booleanToHclTerraform(this._syncDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_instance: {
        value: notificationRestEndpointTemplateInstanceToHclTerraform(this._templateInstance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationRestEndpointTemplateInstance",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_identifier: {
        value: cdktf.stringToHclTerraform(this._vendorIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wapi_user_name: {
        value: cdktf.stringToHclTerraform(this._wapiUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wapi_user_password: {
        value: cdktf.stringToHclTerraform(this._wapiUserPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
