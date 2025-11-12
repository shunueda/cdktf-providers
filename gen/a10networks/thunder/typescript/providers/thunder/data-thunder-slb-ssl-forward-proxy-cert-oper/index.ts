// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslForwardProxyCertOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#id DataThunderSlbSslForwardProxyCertOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#oper DataThunderSlbSslForwardProxyCertOper#oper}
  */
  readonly oper?: DataThunderSlbSslForwardProxyCertOperOper;
}
export interface DataThunderSlbSslForwardProxyCertOperOperHashedCertificate {
  /**
  * ALPN Protocol (0:None, 1:HTTP, 2:SPDY, 3:HTTP2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#alpn_protocol DataThunderSlbSslForwardProxyCertOper#alpn_protocol}
  */
  readonly alpnProtocol?: number;
  /**
  * Certificate common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#common_name DataThunderSlbSslForwardProxyCertOper#common_name}
  */
  readonly commonName?: string;
  /**
  * Certificate country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#country DataThunderSlbSslForwardProxyCertOper#country}
  */
  readonly country?: string;
  /**
  * Certificate division
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#division DataThunderSlbSslForwardProxyCertOper#division}
  */
  readonly division?: string;
  /**
  * Certificate email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#email DataThunderSlbSslForwardProxyCertOper#email}
  */
  readonly email?: string;
  /**
  * Certificate expiration time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#expire_time DataThunderSlbSslForwardProxyCertOper#expire_time}
  */
  readonly expireTime?: string;
  /**
  * Expires after (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#expires_after DataThunderSlbSslForwardProxyCertOper#expires_after}
  */
  readonly expiresAfter?: number;
  /**
  * hit times
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#hit_times DataThunderSlbSslForwardProxyCertOper#hit_times}
  */
  readonly hitTimes?: number;
  /**
  * Idle time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#idle_time DataThunderSlbSslForwardProxyCertOper#idle_time}
  */
  readonly idleTime?: number;
  /**
  * Certificate issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#issuer DataThunderSlbSslForwardProxyCertOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Certificate locality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#locality DataThunderSlbSslForwardProxyCertOper#locality}
  */
  readonly locality?: string;
  /**
  * protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#protocol DataThunderSlbSslForwardProxyCertOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Real Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#real_port DataThunderSlbSslForwardProxyCertOper#real_port}
  */
  readonly realPort?: number;
  /**
  * Certificate serial number in hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#serial DataThunderSlbSslForwardProxyCertOper#serial}
  */
  readonly serial?: string;
  /**
  * Server IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#server_ip DataThunderSlbSslForwardProxyCertOper#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Server IPV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#server_ipv6 DataThunderSlbSslForwardProxyCertOper#server_ipv6}
  */
  readonly serverIpv6?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#server_name DataThunderSlbSslForwardProxyCertOper#server_name}
  */
  readonly serverName?: string;
  /**
  * Certificate start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#start_time DataThunderSlbSslForwardProxyCertOper#start_time}
  */
  readonly startTime?: string;
  /**
  * State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#state DataThunderSlbSslForwardProxyCertOper#state}
  */
  readonly state?: string;
  /**
  * Certificate state or province
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#state_province DataThunderSlbSslForwardProxyCertOper#state_province}
  */
  readonly stateProvince?: string;
  /**
  * Certificate subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#subject DataThunderSlbSslForwardProxyCertOper#subject}
  */
  readonly subject?: string;
  /**
  * Certificate subject alternative name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#subject_alt_name DataThunderSlbSslForwardProxyCertOper#subject_alt_name}
  */
  readonly subjectAltName?: string;
  /**
  * Timeout after (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#timeout_after DataThunderSlbSslForwardProxyCertOper#timeout_after}
  */
  readonly timeoutAfter?: number;
  /**
  * Certificate version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#version DataThunderSlbSslForwardProxyCertOper#version}
  */
  readonly version?: number;
}

export function dataThunderSlbSslForwardProxyCertOperOperHashedCertificateToTerraform(struct?: DataThunderSlbSslForwardProxyCertOperOperHashedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alpn_protocol: cdktf.numberToTerraform(struct!.alpnProtocol),
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    division: cdktf.stringToTerraform(struct!.division),
    email: cdktf.stringToTerraform(struct!.email),
    expire_time: cdktf.stringToTerraform(struct!.expireTime),
    expires_after: cdktf.numberToTerraform(struct!.expiresAfter),
    hit_times: cdktf.numberToTerraform(struct!.hitTimes),
    idle_time: cdktf.numberToTerraform(struct!.idleTime),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    locality: cdktf.stringToTerraform(struct!.locality),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    real_port: cdktf.numberToTerraform(struct!.realPort),
    serial: cdktf.stringToTerraform(struct!.serial),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    server_ipv6: cdktf.stringToTerraform(struct!.serverIpv6),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    state: cdktf.stringToTerraform(struct!.state),
    state_province: cdktf.stringToTerraform(struct!.stateProvince),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_alt_name: cdktf.stringToTerraform(struct!.subjectAltName),
    timeout_after: cdktf.numberToTerraform(struct!.timeoutAfter),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function dataThunderSlbSslForwardProxyCertOperOperHashedCertificateToHclTerraform(struct?: DataThunderSlbSslForwardProxyCertOperOperHashedCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alpn_protocol: {
      value: cdktf.numberToHclTerraform(struct!.alpnProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    division: {
      value: cdktf.stringToHclTerraform(struct!.division),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.stringToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires_after: {
      value: cdktf.numberToHclTerraform(struct!.expiresAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_times: {
      value: cdktf.numberToHclTerraform(struct!.hitTimes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_time: {
      value: cdktf.numberToHclTerraform(struct!.idleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    real_port: {
      value: cdktf.numberToHclTerraform(struct!.realPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ip: {
      value: cdktf.stringToHclTerraform(struct!.serverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.serverIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_province: {
      value: cdktf.stringToHclTerraform(struct!.stateProvince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectAltName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_after: {
      value: cdktf.numberToHclTerraform(struct!.timeoutAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslForwardProxyCertOperOperHashedCertificateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslForwardProxyCertOperOperHashedCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alpnProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.alpnProtocol = this._alpnProtocol;
    }
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._division !== undefined) {
      hasAnyValues = true;
      internalValueResult.division = this._division;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._expiresAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAfter = this._expiresAfter;
    }
    if (this._hitTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitTimes = this._hitTimes;
    }
    if (this._idleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTime = this._idleTime;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._realPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPort = this._realPort;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._serverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp = this._serverIp;
    }
    if (this._serverIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpv6 = this._serverIpv6;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._stateProvince !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateProvince = this._stateProvince;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectAltName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltName = this._subjectAltName;
    }
    if (this._timeoutAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutAfter = this._timeoutAfter;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslForwardProxyCertOperOperHashedCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alpnProtocol = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._division = undefined;
      this._email = undefined;
      this._expireTime = undefined;
      this._expiresAfter = undefined;
      this._hitTimes = undefined;
      this._idleTime = undefined;
      this._issuer = undefined;
      this._locality = undefined;
      this._protocol = undefined;
      this._realPort = undefined;
      this._serial = undefined;
      this._serverIp = undefined;
      this._serverIpv6 = undefined;
      this._serverName = undefined;
      this._startTime = undefined;
      this._state = undefined;
      this._stateProvince = undefined;
      this._subject = undefined;
      this._subjectAltName = undefined;
      this._timeoutAfter = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alpnProtocol = value.alpnProtocol;
      this._commonName = value.commonName;
      this._country = value.country;
      this._division = value.division;
      this._email = value.email;
      this._expireTime = value.expireTime;
      this._expiresAfter = value.expiresAfter;
      this._hitTimes = value.hitTimes;
      this._idleTime = value.idleTime;
      this._issuer = value.issuer;
      this._locality = value.locality;
      this._protocol = value.protocol;
      this._realPort = value.realPort;
      this._serial = value.serial;
      this._serverIp = value.serverIp;
      this._serverIpv6 = value.serverIpv6;
      this._serverName = value.serverName;
      this._startTime = value.startTime;
      this._state = value.state;
      this._stateProvince = value.stateProvince;
      this._subject = value.subject;
      this._subjectAltName = value.subjectAltName;
      this._timeoutAfter = value.timeoutAfter;
      this._version = value.version;
    }
  }

  // alpn_protocol - computed: false, optional: true, required: false
  private _alpnProtocol?: number; 
  public get alpnProtocol() {
    return this.getNumberAttribute('alpn_protocol');
  }
  public set alpnProtocol(value: number) {
    this._alpnProtocol = value;
  }
  public resetAlpnProtocol() {
    this._alpnProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnProtocolInput() {
    return this._alpnProtocol;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string; 
  public get division() {
    return this.getStringAttribute('division');
  }
  public set division(value: string) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // expires_after - computed: false, optional: true, required: false
  private _expiresAfter?: number; 
  public get expiresAfter() {
    return this.getNumberAttribute('expires_after');
  }
  public set expiresAfter(value: number) {
    this._expiresAfter = value;
  }
  public resetExpiresAfter() {
    this._expiresAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAfterInput() {
    return this._expiresAfter;
  }

  // hit_times - computed: false, optional: true, required: false
  private _hitTimes?: number; 
  public get hitTimes() {
    return this.getNumberAttribute('hit_times');
  }
  public set hitTimes(value: number) {
    this._hitTimes = value;
  }
  public resetHitTimes() {
    this._hitTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitTimesInput() {
    return this._hitTimes;
  }

  // idle_time - computed: false, optional: true, required: false
  private _idleTime?: number; 
  public get idleTime() {
    return this.getNumberAttribute('idle_time');
  }
  public set idleTime(value: number) {
    this._idleTime = value;
  }
  public resetIdleTime() {
    this._idleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeInput() {
    return this._idleTime;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // real_port - computed: false, optional: true, required: false
  private _realPort?: number; 
  public get realPort() {
    return this.getNumberAttribute('real_port');
  }
  public set realPort(value: number) {
    this._realPort = value;
  }
  public resetRealPort() {
    this._realPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortInput() {
    return this._realPort;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // server_ip - computed: false, optional: true, required: false
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  public resetServerIp() {
    this._serverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // server_ipv6 - computed: false, optional: true, required: false
  private _serverIpv6?: string; 
  public get serverIpv6() {
    return this.getStringAttribute('server_ipv6');
  }
  public set serverIpv6(value: string) {
    this._serverIpv6 = value;
  }
  public resetServerIpv6() {
    this._serverIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6Input() {
    return this._serverIpv6;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_province - computed: false, optional: true, required: false
  private _stateProvince?: string; 
  public get stateProvince() {
    return this.getStringAttribute('state_province');
  }
  public set stateProvince(value: string) {
    this._stateProvince = value;
  }
  public resetStateProvince() {
    this._stateProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateProvinceInput() {
    return this._stateProvince;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName?: string; 
  public get subjectAltName() {
    return this.getStringAttribute('subject_alt_name');
  }
  public set subjectAltName(value: string) {
    this._subjectAltName = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName;
  }

  // timeout_after - computed: false, optional: true, required: false
  private _timeoutAfter?: number; 
  public get timeoutAfter() {
    return this.getNumberAttribute('timeout_after');
  }
  public set timeoutAfter(value: number) {
    this._timeoutAfter = value;
  }
  public resetTimeoutAfter() {
    this._timeoutAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutAfterInput() {
    return this._timeoutAfter;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataThunderSlbSslForwardProxyCertOperOperHashedCertificateList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslForwardProxyCertOperOperHashedCertificate[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslForwardProxyCertOperOperHashedCertificateOutputReference {
    return new DataThunderSlbSslForwardProxyCertOperOperHashedCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslForwardProxyCertOperOper {
  /**
  * DELETE method specific option to clear the hashed persistence entries for one vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#hashed_persist_entries DataThunderSlbSslForwardProxyCertOper#hashed_persist_entries}
  */
  readonly hashedPersistEntries?: number;
  /**
  * Virtual Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#port DataThunderSlbSslForwardProxyCertOper#port}
  */
  readonly port?: number;
  /**
  * IPv4 or IPv6 address of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#server_ip DataThunderSlbSslForwardProxyCertOper#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Name of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#server_name DataThunderSlbSslForwardProxyCertOper#server_name}
  */
  readonly serverName?: string;
  /**
  * Port of the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#server_port DataThunderSlbSslForwardProxyCertOper#server_port}
  */
  readonly serverPort?: number;
  /**
  * virtual server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#vserver DataThunderSlbSslForwardProxyCertOper#vserver}
  */
  readonly vserver?: string;
  /**
  * hashed_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#hashed_certificate DataThunderSlbSslForwardProxyCertOper#hashed_certificate}
  */
  readonly hashedCertificate?: DataThunderSlbSslForwardProxyCertOperOperHashedCertificate[] | cdktf.IResolvable;
}

export function dataThunderSlbSslForwardProxyCertOperOperToTerraform(struct?: DataThunderSlbSslForwardProxyCertOperOperOutputReference | DataThunderSlbSslForwardProxyCertOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hashed_persist_entries: cdktf.numberToTerraform(struct!.hashedPersistEntries),
    port: cdktf.numberToTerraform(struct!.port),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    server_port: cdktf.numberToTerraform(struct!.serverPort),
    vserver: cdktf.stringToTerraform(struct!.vserver),
    hashed_certificate: cdktf.listMapper(dataThunderSlbSslForwardProxyCertOperOperHashedCertificateToTerraform, true)(struct!.hashedCertificate),
  }
}


export function dataThunderSlbSslForwardProxyCertOperOperToHclTerraform(struct?: DataThunderSlbSslForwardProxyCertOperOperOutputReference | DataThunderSlbSslForwardProxyCertOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hashed_persist_entries: {
      value: cdktf.numberToHclTerraform(struct!.hashedPersistEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ip: {
      value: cdktf.stringToHclTerraform(struct!.serverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_port: {
      value: cdktf.numberToHclTerraform(struct!.serverPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vserver: {
      value: cdktf.stringToHclTerraform(struct!.vserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hashed_certificate: {
      value: cdktf.listMapperHcl(dataThunderSlbSslForwardProxyCertOperOperHashedCertificateToHclTerraform, true)(struct!.hashedCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslForwardProxyCertOperOperHashedCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslForwardProxyCertOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslForwardProxyCertOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashedPersistEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashedPersistEntries = this._hashedPersistEntries;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp = this._serverIp;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._serverPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPort = this._serverPort;
    }
    if (this._vserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserver = this._vserver;
    }
    if (this._hashedCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashedCertificate = this._hashedCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslForwardProxyCertOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashedPersistEntries = undefined;
      this._port = undefined;
      this._serverIp = undefined;
      this._serverName = undefined;
      this._serverPort = undefined;
      this._vserver = undefined;
      this._hashedCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashedPersistEntries = value.hashedPersistEntries;
      this._port = value.port;
      this._serverIp = value.serverIp;
      this._serverName = value.serverName;
      this._serverPort = value.serverPort;
      this._vserver = value.vserver;
      this._hashedCertificate.internalValue = value.hashedCertificate;
    }
  }

  // hashed_persist_entries - computed: false, optional: true, required: false
  private _hashedPersistEntries?: number; 
  public get hashedPersistEntries() {
    return this.getNumberAttribute('hashed_persist_entries');
  }
  public set hashedPersistEntries(value: number) {
    this._hashedPersistEntries = value;
  }
  public resetHashedPersistEntries() {
    this._hashedPersistEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedPersistEntriesInput() {
    return this._hashedPersistEntries;
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

  // server_ip - computed: false, optional: true, required: false
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  public resetServerIp() {
    this._serverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // vserver - computed: false, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }

  // hashed_certificate - computed: false, optional: true, required: false
  private _hashedCertificate = new DataThunderSlbSslForwardProxyCertOperOperHashedCertificateList(this, "hashed_certificate", false);
  public get hashedCertificate() {
    return this._hashedCertificate;
  }
  public putHashedCertificate(value: DataThunderSlbSslForwardProxyCertOperOperHashedCertificate[] | cdktf.IResolvable) {
    this._hashedCertificate.internalValue = value;
  }
  public resetHashedCertificate() {
    this._hashedCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedCertificateInput() {
    return this._hashedCertificate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper thunder_slb_ssl_forward_proxy_cert_oper}
*/
export class DataThunderSlbSslForwardProxyCertOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_forward_proxy_cert_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslForwardProxyCertOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslForwardProxyCertOper to import
  * @param importFromId The id of the existing DataThunderSlbSslForwardProxyCertOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslForwardProxyCertOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_forward_proxy_cert_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ssl_forward_proxy_cert_oper thunder_slb_ssl_forward_proxy_cert_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslForwardProxyCertOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslForwardProxyCertOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_forward_proxy_cert_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbSslForwardProxyCertOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslForwardProxyCertOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbSslForwardProxyCertOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbSslForwardProxyCertOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslForwardProxyCertOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
