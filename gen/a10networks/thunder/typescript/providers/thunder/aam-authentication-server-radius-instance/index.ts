// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationServerRadiusInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the RADIUS server's accounting port, default is 1813
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#accounting_port AamAuthenticationServerRadiusInstance#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Specify accounting port health check method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#acct_port_hm AamAuthenticationServerRadiusInstance#acct_port_hm}
  */
  readonly acctPortHm?: string;
  /**
  * Disable configured accounting port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#acct_port_hm_disable AamAuthenticationServerRadiusInstance#acct_port_hm_disable}
  */
  readonly acctPortHmDisable?: number;
  /**
  * 'pap': PAP authentication. Default; 'mschapv2': MS-CHAPv2 authentication; 'mschapv2-pap': Use MS-CHAPv2 first. If server doesn't support it, try PAP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#auth_type AamAuthenticationServerRadiusInstance#auth_type}
  */
  readonly authType?: string;
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#health_check AamAuthenticationServerRadiusInstance#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#health_check_disable AamAuthenticationServerRadiusInstance#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#health_check_string AamAuthenticationServerRadiusInstance#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#id AamAuthenticationServerRadiusInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the interval time for resend the request (second), default is 3 seconds (The interval time(second), default is 3 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#interval AamAuthenticationServerRadiusInstance#interval}
  */
  readonly interval?: number;
  /**
  * Verify Message-Authenticator attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#message_authenticator_verify_enable AamAuthenticationServerRadiusInstance#message_authenticator_verify_enable}
  */
  readonly messageAuthenticatorVerifyEnable?: number;
  /**
  * Specify RADIUS authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#name AamAuthenticationServerRadiusInstance#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#packet_capture_template AamAuthenticationServerRadiusInstance#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify the RADIUS server's authentication port, default is 1812
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#port AamAuthenticationServerRadiusInstance#port}
  */
  readonly port?: number;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#port_hm AamAuthenticationServerRadiusInstance#port_hm}
  */
  readonly portHm?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#port_hm_disable AamAuthenticationServerRadiusInstance#port_hm_disable}
  */
  readonly portHmDisable?: number;
  /**
  * Specify the retry number for resend the request, default is 5 (The retry number, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#retry AamAuthenticationServerRadiusInstance#retry}
  */
  readonly retry?: number;
  /**
  * Specify the RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#secret AamAuthenticationServerRadiusInstance#secret}
  */
  readonly secret?: number;
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#secret_string AamAuthenticationServerRadiusInstance#secret_string}
  */
  readonly secretString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#uuid AamAuthenticationServerRadiusInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#host AamAuthenticationServerRadiusInstance#host}
  */
  readonly host?: AamAuthenticationServerRadiusInstanceHost;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#sampling_enable AamAuthenticationServerRadiusInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerRadiusInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationServerRadiusInstanceHost {
  /**
  * Server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#hostip AamAuthenticationServerRadiusInstance#hostip}
  */
  readonly hostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#hostipv6 AamAuthenticationServerRadiusInstance#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerRadiusInstanceHostToTerraform(struct?: AamAuthenticationServerRadiusInstanceHostOutputReference | AamAuthenticationServerRadiusInstanceHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerRadiusInstanceHostToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceHostOutputReference | AamAuthenticationServerRadiusInstanceHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostip: {
      value: cdktf.stringToHclTerraform(struct!.hostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.hostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusInstanceHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerRadiusInstanceHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostip = this._hostip;
    }
    if (this._hostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostipv6 = this._hostipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusInstanceHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostip = undefined;
      this._hostipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostip = value.hostip;
      this._hostipv6 = value.hostipv6;
    }
  }

  // hostip - computed: false, optional: true, required: false
  private _hostip?: string; 
  public get hostip() {
    return this.getStringAttribute('hostip');
  }
  public set hostip(value: string) {
    this._hostip = value;
  }
  public resetHostip() {
    this._hostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipInput() {
    return this._hostip;
  }

  // hostipv6 - computed: false, optional: true, required: false
  private _hostipv6?: string; 
  public get hostipv6() {
    return this.getStringAttribute('hostipv6');
  }
  public set hostipv6(value: string) {
    this._hostipv6 = value;
  }
  public resetHostipv6() {
    this._hostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostipv6Input() {
    return this._hostipv6;
  }
}
export interface AamAuthenticationServerRadiusInstanceSamplingEnable {
  /**
  * 'all': all; 'authen_success': Authentication Success; 'authen_failure': Authentication Failure; 'authorize_success': Authorization Success; 'authorize_failure': Authorization Failure; 'access_challenge': Access-Challenge Message Receive; 'timeout_error': Timeout; 'other_error': Other Error; 'request': Request; 'accounting-request-sent': Accounting-Request Sent; 'accounting-success': Accounting Success; 'accounting-failure': Accounting Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#counters1 AamAuthenticationServerRadiusInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerRadiusInstanceSamplingEnableToTerraform(struct?: AamAuthenticationServerRadiusInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerRadiusInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusInstanceSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusInstanceSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationServerRadiusInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusInstanceSamplingEnableOutputReference {
    return new AamAuthenticationServerRadiusInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance thunder_aam_authentication_server_radius_instance}
*/
export class AamAuthenticationServerRadiusInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_radius_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationServerRadiusInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationServerRadiusInstance to import
  * @param importFromId The id of the existing AamAuthenticationServerRadiusInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationServerRadiusInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_radius_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_radius_instance thunder_aam_authentication_server_radius_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationServerRadiusInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationServerRadiusInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_radius_instance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingPort = config.accountingPort;
    this._acctPortHm = config.acctPortHm;
    this._acctPortHmDisable = config.acctPortHmDisable;
    this._authType = config.authType;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._healthCheckString = config.healthCheckString;
    this._id = config.id;
    this._interval = config.interval;
    this._messageAuthenticatorVerifyEnable = config.messageAuthenticatorVerifyEnable;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._port = config.port;
    this._portHm = config.portHm;
    this._portHmDisable = config.portHmDisable;
    this._retry = config.retry;
    this._secret = config.secret;
    this._secretString = config.secretString;
    this._uuid = config.uuid;
    this._host.internalValue = config.host;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_port - computed: false, optional: true, required: false
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  public resetAccountingPort() {
    this._accountingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // acct_port_hm - computed: false, optional: true, required: false
  private _acctPortHm?: string; 
  public get acctPortHm() {
    return this.getStringAttribute('acct_port_hm');
  }
  public set acctPortHm(value: string) {
    this._acctPortHm = value;
  }
  public resetAcctPortHm() {
    this._acctPortHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortHmInput() {
    return this._acctPortHm;
  }

  // acct_port_hm_disable - computed: false, optional: true, required: false
  private _acctPortHmDisable?: number; 
  public get acctPortHmDisable() {
    return this.getNumberAttribute('acct_port_hm_disable');
  }
  public set acctPortHmDisable(value: number) {
    this._acctPortHmDisable = value;
  }
  public resetAcctPortHmDisable() {
    this._acctPortHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortHmDisableInput() {
    return this._acctPortHmDisable;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_string - computed: false, optional: true, required: false
  private _healthCheckString?: string; 
  public get healthCheckString() {
    return this.getStringAttribute('health_check_string');
  }
  public set healthCheckString(value: string) {
    this._healthCheckString = value;
  }
  public resetHealthCheckString() {
    this._healthCheckString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckStringInput() {
    return this._healthCheckString;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // message_authenticator_verify_enable - computed: false, optional: true, required: false
  private _messageAuthenticatorVerifyEnable?: number; 
  public get messageAuthenticatorVerifyEnable() {
    return this.getNumberAttribute('message_authenticator_verify_enable');
  }
  public set messageAuthenticatorVerifyEnable(value: number) {
    this._messageAuthenticatorVerifyEnable = value;
  }
  public resetMessageAuthenticatorVerifyEnable() {
    this._messageAuthenticatorVerifyEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageAuthenticatorVerifyEnableInput() {
    return this._messageAuthenticatorVerifyEnable;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // port - computed: false, optional: true, required: false
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

  // port_hm - computed: false, optional: true, required: false
  private _portHm?: string; 
  public get portHm() {
    return this.getStringAttribute('port_hm');
  }
  public set portHm(value: string) {
    this._portHm = value;
  }
  public resetPortHm() {
    this._portHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmInput() {
    return this._portHm;
  }

  // port_hm_disable - computed: false, optional: true, required: false
  private _portHmDisable?: number; 
  public get portHmDisable() {
    return this.getNumberAttribute('port_hm_disable');
  }
  public set portHmDisable(value: number) {
    this._portHmDisable = value;
  }
  public resetPortHmDisable() {
    this._portHmDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHmDisableInput() {
    return this._portHmDisable;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: number; 
  public get secret() {
    return this.getNumberAttribute('secret');
  }
  public set secret(value: number) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
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

  // host - computed: false, optional: true, required: false
  private _host = new AamAuthenticationServerRadiusInstanceHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerRadiusInstanceHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerRadiusInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerRadiusInstanceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      acct_port_hm: cdktf.stringToTerraform(this._acctPortHm),
      acct_port_hm_disable: cdktf.numberToTerraform(this._acctPortHmDisable),
      auth_type: cdktf.stringToTerraform(this._authType),
      health_check: cdktf.numberToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      health_check_string: cdktf.stringToTerraform(this._healthCheckString),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      message_authenticator_verify_enable: cdktf.numberToTerraform(this._messageAuthenticatorVerifyEnable),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      port: cdktf.numberToTerraform(this._port),
      port_hm: cdktf.stringToTerraform(this._portHm),
      port_hm_disable: cdktf.numberToTerraform(this._portHmDisable),
      retry: cdktf.numberToTerraform(this._retry),
      secret: cdktf.numberToTerraform(this._secret),
      secret_string: cdktf.stringToTerraform(this._secretString),
      uuid: cdktf.stringToTerraform(this._uuid),
      host: aamAuthenticationServerRadiusInstanceHostToTerraform(this._host.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationServerRadiusInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acct_port_hm: {
        value: cdktf.stringToHclTerraform(this._acctPortHm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acct_port_hm_disable: {
        value: cdktf.numberToHclTerraform(this._acctPortHmDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.numberToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_disable: {
        value: cdktf.numberToHclTerraform(this._healthCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_string: {
        value: cdktf.stringToHclTerraform(this._healthCheckString),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      message_authenticator_verify_enable: {
        value: cdktf.numberToHclTerraform(this._messageAuthenticatorVerifyEnable),
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_hm: {
        value: cdktf.stringToHclTerraform(this._portHm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_hm_disable: {
        value: cdktf.numberToHclTerraform(this._portHmDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret: {
        value: cdktf.numberToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_string: {
        value: cdktf.stringToHclTerraform(this._secretString),
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
      host: {
        value: aamAuthenticationServerRadiusInstanceHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerRadiusInstanceHostList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationServerRadiusInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerRadiusInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
