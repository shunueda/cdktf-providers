// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateSmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'optional': STARTTLS is optional requirement; 'enforced': Must issue STARTTLS command before mail transaction;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#client_starttls_type SlbTemplateSmtp#client_starttls_type}
  */
  readonly clientStarttlsType?: string;
  /**
  * Would transfer error code(554) to client, when getting it from connection establishing with real-server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#error_code_to_client SlbTemplateSmtp#error_code_to_client}
  */
  readonly errorCodeToClient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#id SlbTemplateSmtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Change the LF to CRLF for smtp end of line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#lf_to_crlf SlbTemplateSmtp#lf_to_crlf}
  */
  readonly lfToCrlf?: number;
  /**
  * SMTP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#name SlbTemplateSmtp#name}
  */
  readonly name: string;
  /**
  * Config the domain of the email servers (Server's domain, default is "mail-server-domain")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#server_domain SlbTemplateSmtp#server_domain}
  */
  readonly serverDomain?: string;
  /**
  * 'optional': STARTTLS is optional requirement; 'enforced': Must issue STARTTLS command before mail transaction;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#server_starttls_type SlbTemplateSmtp#server_starttls_type}
  */
  readonly serverStarttlsType?: string;
  /**
  * Set SMTP service ready message (SMTP service ready message, default is "ESMTP mail service ready")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#service_ready_msg SlbTemplateSmtp#service_ready_msg}
  */
  readonly serviceReadyMsg?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#user_tag SlbTemplateSmtp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#uuid SlbTemplateSmtp#uuid}
  */
  readonly uuid?: string;
  /**
  * client_domain_switching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#client_domain_switching SlbTemplateSmtp#client_domain_switching}
  */
  readonly clientDomainSwitching?: SlbTemplateSmtpClientDomainSwitching[] | cdktf.IResolvable;
  /**
  * command_disable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#command_disable SlbTemplateSmtp#command_disable}
  */
  readonly commandDisable?: SlbTemplateSmtpCommandDisable[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#template SlbTemplateSmtp#template}
  */
  readonly template?: SlbTemplateSmtpTemplate;
}
export interface SlbTemplateSmtpClientDomainSwitching {
  /**
  * Domain name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#match_string SlbTemplateSmtp#match_string}
  */
  readonly matchString?: string;
  /**
  * Select service group (Service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#service_group SlbTemplateSmtp#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * 'contains': Specify domain name string if domain contains another string; 'ends-with': Specify domain name string if domain ends with another string; 'starts-with': Specify domain string if domain starts with another string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#switching_type SlbTemplateSmtp#switching_type}
  */
  readonly switchingType?: string;
}

export function slbTemplateSmtpClientDomainSwitchingToTerraform(struct?: SlbTemplateSmtpClientDomainSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_string: cdktf.stringToTerraform(struct!.matchString),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    switching_type: cdktf.stringToTerraform(struct!.switchingType),
  }
}


export function slbTemplateSmtpClientDomainSwitchingToHclTerraform(struct?: SlbTemplateSmtpClientDomainSwitching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_string: {
      value: cdktf.stringToHclTerraform(struct!.matchString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_type: {
      value: cdktf.stringToHclTerraform(struct!.switchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSmtpClientDomainSwitchingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSmtpClientDomainSwitching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchString = this._matchString;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._switchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingType = this._switchingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSmtpClientDomainSwitching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchString = undefined;
      this._serviceGroup = undefined;
      this._switchingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchString = value.matchString;
      this._serviceGroup = value.serviceGroup;
      this._switchingType = value.switchingType;
    }
  }

  // match_string - computed: false, optional: true, required: false
  private _matchString?: string; 
  public get matchString() {
    return this.getStringAttribute('match_string');
  }
  public set matchString(value: string) {
    this._matchString = value;
  }
  public resetMatchString() {
    this._matchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStringInput() {
    return this._matchString;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // switching_type - computed: false, optional: true, required: false
  private _switchingType?: string; 
  public get switchingType() {
    return this.getStringAttribute('switching_type');
  }
  public set switchingType(value: string) {
    this._switchingType = value;
  }
  public resetSwitchingType() {
    this._switchingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingTypeInput() {
    return this._switchingType;
  }
}

export class SlbTemplateSmtpClientDomainSwitchingList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSmtpClientDomainSwitching[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSmtpClientDomainSwitchingOutputReference {
    return new SlbTemplateSmtpClientDomainSwitchingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateSmtpCommandDisable {
  /**
  * 'expn': Disable SMTP EXPN commands; 'turn': Disable SMTP TURN commands; 'vrfy': Disable SMTP VRFY commands;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#disable_type SlbTemplateSmtp#disable_type}
  */
  readonly disableType?: string;
}

export function slbTemplateSmtpCommandDisableToTerraform(struct?: SlbTemplateSmtpCommandDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_type: cdktf.stringToTerraform(struct!.disableType),
  }
}


export function slbTemplateSmtpCommandDisableToHclTerraform(struct?: SlbTemplateSmtpCommandDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_type: {
      value: cdktf.stringToHclTerraform(struct!.disableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSmtpCommandDisableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateSmtpCommandDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableType = this._disableType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSmtpCommandDisable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableType = value.disableType;
    }
  }

  // disable_type - computed: false, optional: true, required: false
  private _disableType?: string; 
  public get disableType() {
    return this.getStringAttribute('disable_type');
  }
  public set disableType(value: string) {
    this._disableType = value;
  }
  public resetDisableType() {
    this._disableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTypeInput() {
    return this._disableType;
  }
}

export class SlbTemplateSmtpCommandDisableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateSmtpCommandDisable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateSmtpCommandDisableOutputReference {
    return new SlbTemplateSmtpCommandDisableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateSmtpTemplate {
  /**
  * Logging template (Logging Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#logging SlbTemplateSmtp#logging}
  */
  readonly logging?: string;
}

export function slbTemplateSmtpTemplateToTerraform(struct?: SlbTemplateSmtpTemplateOutputReference | SlbTemplateSmtpTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging: cdktf.stringToTerraform(struct!.logging),
  }
}


export function slbTemplateSmtpTemplateToHclTerraform(struct?: SlbTemplateSmtpTemplateOutputReference | SlbTemplateSmtpTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateSmtpTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateSmtpTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateSmtpTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logging = value.logging;
    }
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp thunder_slb_template_smtp}
*/
export class SlbTemplateSmtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateSmtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateSmtp to import
  * @param importFromId The id of the existing SlbTemplateSmtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateSmtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_smtp thunder_slb_template_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateSmtpConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateSmtpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_smtp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientStarttlsType = config.clientStarttlsType;
    this._errorCodeToClient = config.errorCodeToClient;
    this._id = config.id;
    this._lfToCrlf = config.lfToCrlf;
    this._name = config.name;
    this._serverDomain = config.serverDomain;
    this._serverStarttlsType = config.serverStarttlsType;
    this._serviceReadyMsg = config.serviceReadyMsg;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._clientDomainSwitching.internalValue = config.clientDomainSwitching;
    this._commandDisable.internalValue = config.commandDisable;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_starttls_type - computed: false, optional: true, required: false
  private _clientStarttlsType?: string; 
  public get clientStarttlsType() {
    return this.getStringAttribute('client_starttls_type');
  }
  public set clientStarttlsType(value: string) {
    this._clientStarttlsType = value;
  }
  public resetClientStarttlsType() {
    this._clientStarttlsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientStarttlsTypeInput() {
    return this._clientStarttlsType;
  }

  // error_code_to_client - computed: false, optional: true, required: false
  private _errorCodeToClient?: number; 
  public get errorCodeToClient() {
    return this.getNumberAttribute('error_code_to_client');
  }
  public set errorCodeToClient(value: number) {
    this._errorCodeToClient = value;
  }
  public resetErrorCodeToClient() {
    this._errorCodeToClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeToClientInput() {
    return this._errorCodeToClient;
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

  // lf_to_crlf - computed: false, optional: true, required: false
  private _lfToCrlf?: number; 
  public get lfToCrlf() {
    return this.getNumberAttribute('lf_to_crlf');
  }
  public set lfToCrlf(value: number) {
    this._lfToCrlf = value;
  }
  public resetLfToCrlf() {
    this._lfToCrlf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfToCrlfInput() {
    return this._lfToCrlf;
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

  // server_domain - computed: false, optional: true, required: false
  private _serverDomain?: string; 
  public get serverDomain() {
    return this.getStringAttribute('server_domain');
  }
  public set serverDomain(value: string) {
    this._serverDomain = value;
  }
  public resetServerDomain() {
    this._serverDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDomainInput() {
    return this._serverDomain;
  }

  // server_starttls_type - computed: false, optional: true, required: false
  private _serverStarttlsType?: string; 
  public get serverStarttlsType() {
    return this.getStringAttribute('server_starttls_type');
  }
  public set serverStarttlsType(value: string) {
    this._serverStarttlsType = value;
  }
  public resetServerStarttlsType() {
    this._serverStarttlsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsTypeInput() {
    return this._serverStarttlsType;
  }

  // service_ready_msg - computed: false, optional: true, required: false
  private _serviceReadyMsg?: string; 
  public get serviceReadyMsg() {
    return this.getStringAttribute('service_ready_msg');
  }
  public set serviceReadyMsg(value: string) {
    this._serviceReadyMsg = value;
  }
  public resetServiceReadyMsg() {
    this._serviceReadyMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceReadyMsgInput() {
    return this._serviceReadyMsg;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // client_domain_switching - computed: false, optional: true, required: false
  private _clientDomainSwitching = new SlbTemplateSmtpClientDomainSwitchingList(this, "client_domain_switching", false);
  public get clientDomainSwitching() {
    return this._clientDomainSwitching;
  }
  public putClientDomainSwitching(value: SlbTemplateSmtpClientDomainSwitching[] | cdktf.IResolvable) {
    this._clientDomainSwitching.internalValue = value;
  }
  public resetClientDomainSwitching() {
    this._clientDomainSwitching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDomainSwitchingInput() {
    return this._clientDomainSwitching.internalValue;
  }

  // command_disable - computed: false, optional: true, required: false
  private _commandDisable = new SlbTemplateSmtpCommandDisableList(this, "command_disable", false);
  public get commandDisable() {
    return this._commandDisable;
  }
  public putCommandDisable(value: SlbTemplateSmtpCommandDisable[] | cdktf.IResolvable) {
    this._commandDisable.internalValue = value;
  }
  public resetCommandDisable() {
    this._commandDisable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandDisableInput() {
    return this._commandDisable.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new SlbTemplateSmtpTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: SlbTemplateSmtpTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_starttls_type: cdktf.stringToTerraform(this._clientStarttlsType),
      error_code_to_client: cdktf.numberToTerraform(this._errorCodeToClient),
      id: cdktf.stringToTerraform(this._id),
      lf_to_crlf: cdktf.numberToTerraform(this._lfToCrlf),
      name: cdktf.stringToTerraform(this._name),
      server_domain: cdktf.stringToTerraform(this._serverDomain),
      server_starttls_type: cdktf.stringToTerraform(this._serverStarttlsType),
      service_ready_msg: cdktf.stringToTerraform(this._serviceReadyMsg),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      client_domain_switching: cdktf.listMapper(slbTemplateSmtpClientDomainSwitchingToTerraform, true)(this._clientDomainSwitching.internalValue),
      command_disable: cdktf.listMapper(slbTemplateSmtpCommandDisableToTerraform, true)(this._commandDisable.internalValue),
      template: slbTemplateSmtpTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_starttls_type: {
        value: cdktf.stringToHclTerraform(this._clientStarttlsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_code_to_client: {
        value: cdktf.numberToHclTerraform(this._errorCodeToClient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lf_to_crlf: {
        value: cdktf.numberToHclTerraform(this._lfToCrlf),
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
      server_domain: {
        value: cdktf.stringToHclTerraform(this._serverDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_starttls_type: {
        value: cdktf.stringToHclTerraform(this._serverStarttlsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ready_msg: {
        value: cdktf.stringToHclTerraform(this._serviceReadyMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_domain_switching: {
        value: cdktf.listMapperHcl(slbTemplateSmtpClientDomainSwitchingToHclTerraform, true)(this._clientDomainSwitching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSmtpClientDomainSwitchingList",
      },
      command_disable: {
        value: cdktf.listMapperHcl(slbTemplateSmtpCommandDisableToHclTerraform, true)(this._commandDisable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSmtpCommandDisableList",
      },
      template: {
        value: slbTemplateSmtpTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateSmtpTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
