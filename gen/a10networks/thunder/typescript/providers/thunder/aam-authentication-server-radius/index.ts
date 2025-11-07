// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationServerRadiusAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#id AamAuthenticationServerRadiusA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#uuid AamAuthenticationServerRadiusA#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#instance_list AamAuthenticationServerRadiusA#instance_list}
  */
  readonly instanceList?: AamAuthenticationServerRadiusInstanceListStructA[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#sampling_enable AamAuthenticationServerRadiusA#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerRadiusSamplingEnableA[] | cdktf.IResolvable;
}
export interface AamAuthenticationServerRadiusInstanceListHostA {
  /**
  * Server's hostname(Length 1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#hostip AamAuthenticationServerRadiusA#hostip}
  */
  readonly hostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#hostipv6 AamAuthenticationServerRadiusA#hostipv6}
  */
  readonly hostipv6?: string;
}

export function aamAuthenticationServerRadiusInstanceListHostAToTerraform(struct?: AamAuthenticationServerRadiusInstanceListHostAOutputReference | AamAuthenticationServerRadiusInstanceListHostA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostip: cdktf.stringToTerraform(struct!.hostip),
    hostipv6: cdktf.stringToTerraform(struct!.hostipv6),
  }
}


export function aamAuthenticationServerRadiusInstanceListHostAToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceListHostAOutputReference | AamAuthenticationServerRadiusInstanceListHostA): any {
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

export class AamAuthenticationServerRadiusInstanceListHostAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationServerRadiusInstanceListHostA | undefined {
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

  public set internalValue(value: AamAuthenticationServerRadiusInstanceListHostA | undefined) {
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
export interface AamAuthenticationServerRadiusInstanceListSamplingEnableA {
  /**
  * 'all': all; 'authen_success': Authentication Success; 'authen_failure': Authentication Failure; 'authorize_success': Authorization Success; 'authorize_failure': Authorization Failure; 'access_challenge': Access-Challenge Message Receive; 'timeout_error': Timeout; 'other_error': Other Error; 'request': Request; 'accounting-request-sent': Accounting-Request Sent; 'accounting-success': Accounting Success; 'accounting-failure': Accounting Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#counters1 AamAuthenticationServerRadiusA#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerRadiusInstanceListSamplingEnableAToTerraform(struct?: AamAuthenticationServerRadiusInstanceListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerRadiusInstanceListSamplingEnableAToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceListSamplingEnableA | cdktf.IResolvable): any {
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

export class AamAuthenticationServerRadiusInstanceListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusInstanceListSamplingEnableA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationServerRadiusInstanceListSamplingEnableA | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationServerRadiusInstanceListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusInstanceListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusInstanceListSamplingEnableAOutputReference {
    return new AamAuthenticationServerRadiusInstanceListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerRadiusInstanceListStructA {
  /**
  * Specify the RADIUS server's accounting port, default is 1813
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#accounting_port AamAuthenticationServerRadiusA#accounting_port}
  */
  readonly accountingPort?: number;
  /**
  * Specify accounting port health check method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#acct_port_hm AamAuthenticationServerRadiusA#acct_port_hm}
  */
  readonly acctPortHm?: string;
  /**
  * Disable configured accounting port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#acct_port_hm_disable AamAuthenticationServerRadiusA#acct_port_hm_disable}
  */
  readonly acctPortHmDisable?: number;
  /**
  * 'pap': PAP authentication. Default; 'mschapv2': MS-CHAPv2 authentication; 'mschapv2-pap': Use MS-CHAPv2 first. If server doesn't support it, try PAP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#auth_type AamAuthenticationServerRadiusA#auth_type}
  */
  readonly authType?: string;
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#health_check AamAuthenticationServerRadiusA#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#health_check_disable AamAuthenticationServerRadiusA#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#health_check_string AamAuthenticationServerRadiusA#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Specify the interval time for resend the request (second), default is 3 seconds (The interval time(second), default is 3 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#interval AamAuthenticationServerRadiusA#interval}
  */
  readonly interval?: number;
  /**
  * Specify RADIUS authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#name AamAuthenticationServerRadiusA#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#packet_capture_template AamAuthenticationServerRadiusA#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify the RADIUS server's authentication port, default is 1812
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#port AamAuthenticationServerRadiusA#port}
  */
  readonly port?: number;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#port_hm AamAuthenticationServerRadiusA#port_hm}
  */
  readonly portHm?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#port_hm_disable AamAuthenticationServerRadiusA#port_hm_disable}
  */
  readonly portHmDisable?: number;
  /**
  * Specify the retry number for resend the request, default is 5 (The retry number, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#retry AamAuthenticationServerRadiusA#retry}
  */
  readonly retry?: number;
  /**
  * Specify the RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#secret AamAuthenticationServerRadiusA#secret}
  */
  readonly secret?: number;
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#secret_string AamAuthenticationServerRadiusA#secret_string}
  */
  readonly secretString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#uuid AamAuthenticationServerRadiusA#uuid}
  */
  readonly uuid?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#host AamAuthenticationServerRadiusA#host}
  */
  readonly host?: AamAuthenticationServerRadiusInstanceListHostA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#sampling_enable AamAuthenticationServerRadiusA#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerRadiusInstanceListSamplingEnableA[] | cdktf.IResolvable;
}

export function aamAuthenticationServerRadiusInstanceListStructAToTerraform(struct?: AamAuthenticationServerRadiusInstanceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_port: cdktf.numberToTerraform(struct!.accountingPort),
    acct_port_hm: cdktf.stringToTerraform(struct!.acctPortHm),
    acct_port_hm_disable: cdktf.numberToTerraform(struct!.acctPortHmDisable),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    health_check: cdktf.numberToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_string: cdktf.stringToTerraform(struct!.healthCheckString),
    interval: cdktf.numberToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port: cdktf.numberToTerraform(struct!.port),
    port_hm: cdktf.stringToTerraform(struct!.portHm),
    port_hm_disable: cdktf.numberToTerraform(struct!.portHmDisable),
    retry: cdktf.numberToTerraform(struct!.retry),
    secret: cdktf.numberToTerraform(struct!.secret),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    host: aamAuthenticationServerRadiusInstanceListHostAToTerraform(struct!.host),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerRadiusInstanceListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerRadiusInstanceListStructAToHclTerraform(struct?: AamAuthenticationServerRadiusInstanceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_port: {
      value: cdktf.numberToHclTerraform(struct!.accountingPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acct_port_hm: {
      value: cdktf.stringToHclTerraform(struct!.acctPortHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acct_port_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.acctPortHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.numberToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_string: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
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
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
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
    port_hm: {
      value: cdktf.stringToHclTerraform(struct!.portHm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_hm_disable: {
      value: cdktf.numberToHclTerraform(struct!.portHmDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.numberToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: aamAuthenticationServerRadiusInstanceListHostAToHclTerraform(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerRadiusInstanceListHostAList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerRadiusInstanceListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerRadiusInstanceListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerRadiusInstanceListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusInstanceListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingPort = this._accountingPort;
    }
    if (this._acctPortHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPortHm = this._acctPortHm;
    }
    if (this._acctPortHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPortHmDisable = this._acctPortHmDisable;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._healthCheckString !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckString = this._healthCheckString;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHm = this._portHm;
    }
    if (this._portHmDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHmDisable = this._portHmDisable;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerRadiusInstanceListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountingPort = undefined;
      this._acctPortHm = undefined;
      this._acctPortHmDisable = undefined;
      this._authType = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckString = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._packetCaptureTemplate = undefined;
      this._port = undefined;
      this._portHm = undefined;
      this._portHmDisable = undefined;
      this._retry = undefined;
      this._secret = undefined;
      this._secretString = undefined;
      this._uuid = undefined;
      this._host.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountingPort = value.accountingPort;
      this._acctPortHm = value.acctPortHm;
      this._acctPortHmDisable = value.acctPortHmDisable;
      this._authType = value.authType;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckString = value.healthCheckString;
      this._interval = value.interval;
      this._name = value.name;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._port = value.port;
      this._portHm = value.portHm;
      this._portHmDisable = value.portHmDisable;
      this._retry = value.retry;
      this._secret = value.secret;
      this._secretString = value.secretString;
      this._uuid = value.uuid;
      this._host.internalValue = value.host;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

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
  private _host = new AamAuthenticationServerRadiusInstanceListHostAOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: AamAuthenticationServerRadiusInstanceListHostA) {
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
  private _samplingEnable = new AamAuthenticationServerRadiusInstanceListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerRadiusInstanceListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class AamAuthenticationServerRadiusInstanceListStructAList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusInstanceListStructA[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusInstanceListStructAOutputReference {
    return new AamAuthenticationServerRadiusInstanceListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerRadiusSamplingEnableA {
  /**
  * 'all': all; 'authen_success': Total Authentication Success; 'authen_failure': Total Authentication Failure; 'authorize_success': Total Authorization Success; 'authorize_failure': Total Authorization Failure; 'access_challenge': Total Access-Challenge Message Receive; 'timeout_error': Total Timeout; 'other_error': Total Other Error; 'request': Total Request; 'request-normal': Total Normal Request; 'request-dropped': Total Dropped Request; 'response-success': Total Success Response; 'response-failure': Total Failure Response; 'response-error': Total Error Response; 'response-timeout': Total Timeout Response; 'response-other': Total Other Response; 'job-start-error': Total Job Start Error; 'polling-control-error': Total Polling Control Error; 'accounting-request-sent': Accounting-Request Sent; 'accounting-success': Accounting Success; 'accounting-failure': Accounting Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#counters1 AamAuthenticationServerRadiusA#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerRadiusSamplingEnableAToTerraform(struct?: AamAuthenticationServerRadiusSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerRadiusSamplingEnableAToHclTerraform(struct?: AamAuthenticationServerRadiusSamplingEnableA | cdktf.IResolvable): any {
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

export class AamAuthenticationServerRadiusSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerRadiusSamplingEnableA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationServerRadiusSamplingEnableA | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationServerRadiusSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerRadiusSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerRadiusSamplingEnableAOutputReference {
    return new AamAuthenticationServerRadiusSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius thunder_aam_authentication_server_radius}
*/
export class AamAuthenticationServerRadiusA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationServerRadiusA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationServerRadiusA to import
  * @param importFromId The id of the existing AamAuthenticationServerRadiusA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationServerRadiusA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_server_radius thunder_aam_authentication_server_radius} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationServerRadiusAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationServerRadiusAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_radius',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._uuid = config.uuid;
    this._instanceList.internalValue = config.instanceList;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new AamAuthenticationServerRadiusInstanceListStructAList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationServerRadiusInstanceListStructA[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerRadiusSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerRadiusSamplingEnableA[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      instance_list: cdktf.listMapper(aamAuthenticationServerRadiusInstanceListStructAToTerraform, true)(this._instanceList.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationServerRadiusSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      instance_list: {
        value: cdktf.listMapperHcl(aamAuthenticationServerRadiusInstanceListStructAToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerRadiusInstanceListStructAList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationServerRadiusSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerRadiusSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
