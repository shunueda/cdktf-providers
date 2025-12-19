// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationServerOcspAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#id AamAuthenticationServerOcspA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#uuid AamAuthenticationServerOcspA#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#instance_list AamAuthenticationServerOcspA#instance_list}
  */
  readonly instanceList?: AamAuthenticationServerOcspInstanceListStructA[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#sampling_enable AamAuthenticationServerOcspA#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerOcspSamplingEnableA[] | cdktf.IResolvable;
}
export interface AamAuthenticationServerOcspInstanceListSamplingEnableA {
  /**
  * 'all': all; 'request': Request; 'certificate-good': Good Certificate Response; 'certificate-revoked': Revoked Certificate Response; 'certificate-unknown': Unknown Certificate Response; 'timeout': Timeout; 'fail': Handle OCSP response failed; 'stapling-request': OCSP Stapling Request Send; 'stapling-certificate-good': OCSP Stapling Good Certificate Response; 'stapling-certificate-revoked': OCSP Stapling Revoked Certificate Response; 'stapling-certificate-unknown': OCSP Stapling Unknown Certificate Response; 'stapling-timeout': OCSP Stapling Timeout; 'stapling-fail': Handle OCSP response failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#counters1 AamAuthenticationServerOcspA#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerOcspInstanceListSamplingEnableAToTerraform(struct?: AamAuthenticationServerOcspInstanceListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerOcspInstanceListSamplingEnableAToHclTerraform(struct?: AamAuthenticationServerOcspInstanceListSamplingEnableA | cdktf.IResolvable): any {
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

export class AamAuthenticationServerOcspInstanceListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerOcspInstanceListSamplingEnableA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationServerOcspInstanceListSamplingEnableA | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationServerOcspInstanceListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerOcspInstanceListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerOcspInstanceListSamplingEnableAOutputReference {
    return new AamAuthenticationServerOcspInstanceListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerOcspInstanceListStructA {
  /**
  * Check server's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#health_check AamAuthenticationServerOcspA#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#health_check_disable AamAuthenticationServerOcspA#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health monitor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#health_check_string AamAuthenticationServerOcspA#health_check_string}
  */
  readonly healthCheckString?: string;
  /**
  * Set HTTP version (default 1.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#http_version AamAuthenticationServerOcspA#http_version}
  */
  readonly httpVersion?: number;
  /**
  * Specify OCSP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#name AamAuthenticationServerOcspA#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#packet_capture_template AamAuthenticationServerOcspA#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Check port's health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#port_health_check AamAuthenticationServerOcspA#port_health_check}
  */
  readonly portHealthCheck?: string;
  /**
  * Disable configured port health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#port_health_check_disable AamAuthenticationServerOcspA#port_health_check_disable}
  */
  readonly portHealthCheckDisable?: number;
  /**
  * Specify the trusted OCSP responder's CA cert filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#responder_ca AamAuthenticationServerOcspA#responder_ca}
  */
  readonly responderCa?: string;
  /**
  * Specify the trusted OCSP responder's cert filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#responder_cert AamAuthenticationServerOcspA#responder_cert}
  */
  readonly responderCert?: string;
  /**
  * Specify the OCSP server's address (Format: http://host[:port]/) (The OCSP server's address(Format: http://host[:port]/))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#url AamAuthenticationServerOcspA#url}
  */
  readonly url?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#uuid AamAuthenticationServerOcspA#uuid}
  */
  readonly uuid?: string;
  /**
  * '1.1': HTTP version 1.1;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#version_type AamAuthenticationServerOcspA#version_type}
  */
  readonly versionType?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#sampling_enable AamAuthenticationServerOcspA#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationServerOcspInstanceListSamplingEnableA[] | cdktf.IResolvable;
}

export function aamAuthenticationServerOcspInstanceListStructAToTerraform(struct?: AamAuthenticationServerOcspInstanceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.numberToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_string: cdktf.stringToTerraform(struct!.healthCheckString),
    http_version: cdktf.numberToTerraform(struct!.httpVersion),
    name: cdktf.stringToTerraform(struct!.name),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port_health_check: cdktf.stringToTerraform(struct!.portHealthCheck),
    port_health_check_disable: cdktf.numberToTerraform(struct!.portHealthCheckDisable),
    responder_ca: cdktf.stringToTerraform(struct!.responderCa),
    responder_cert: cdktf.stringToTerraform(struct!.responderCert),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    sampling_enable: cdktf.listMapper(aamAuthenticationServerOcspInstanceListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function aamAuthenticationServerOcspInstanceListStructAToHclTerraform(struct?: AamAuthenticationServerOcspInstanceListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    http_version: {
      value: cdktf.numberToHclTerraform(struct!.httpVersion),
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
    port_health_check: {
      value: cdktf.stringToHclTerraform(struct!.portHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.portHealthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    responder_ca: {
      value: cdktf.stringToHclTerraform(struct!.responderCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_cert: {
      value: cdktf.stringToHclTerraform(struct!.responderCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAuthenticationServerOcspInstanceListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationServerOcspInstanceListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationServerOcspInstanceListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerOcspInstanceListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._portHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHealthCheck = this._portHealthCheck;
    }
    if (this._portHealthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHealthCheckDisable = this._portHealthCheckDisable;
    }
    if (this._responderCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderCa = this._responderCa;
    }
    if (this._responderCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderCert = this._responderCert;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationServerOcspInstanceListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckString = undefined;
      this._httpVersion = undefined;
      this._name = undefined;
      this._packetCaptureTemplate = undefined;
      this._portHealthCheck = undefined;
      this._portHealthCheckDisable = undefined;
      this._responderCa = undefined;
      this._responderCert = undefined;
      this._url = undefined;
      this._uuid = undefined;
      this._versionType = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckString = value.healthCheckString;
      this._httpVersion = value.httpVersion;
      this._name = value.name;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._portHealthCheck = value.portHealthCheck;
      this._portHealthCheckDisable = value.portHealthCheckDisable;
      this._responderCa = value.responderCa;
      this._responderCert = value.responderCert;
      this._url = value.url;
      this._uuid = value.uuid;
      this._versionType = value.versionType;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // port_health_check - computed: false, optional: true, required: false
  private _portHealthCheck?: string; 
  public get portHealthCheck() {
    return this.getStringAttribute('port_health_check');
  }
  public set portHealthCheck(value: string) {
    this._portHealthCheck = value;
  }
  public resetPortHealthCheck() {
    this._portHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHealthCheckInput() {
    return this._portHealthCheck;
  }

  // port_health_check_disable - computed: false, optional: true, required: false
  private _portHealthCheckDisable?: number; 
  public get portHealthCheckDisable() {
    return this.getNumberAttribute('port_health_check_disable');
  }
  public set portHealthCheckDisable(value: number) {
    this._portHealthCheckDisable = value;
  }
  public resetPortHealthCheckDisable() {
    this._portHealthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHealthCheckDisableInput() {
    return this._portHealthCheckDisable;
  }

  // responder_ca - computed: false, optional: true, required: false
  private _responderCa?: string; 
  public get responderCa() {
    return this.getStringAttribute('responder_ca');
  }
  public set responderCa(value: string) {
    this._responderCa = value;
  }
  public resetResponderCa() {
    this._responderCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderCaInput() {
    return this._responderCa;
  }

  // responder_cert - computed: false, optional: true, required: false
  private _responderCert?: string; 
  public get responderCert() {
    return this.getStringAttribute('responder_cert');
  }
  public set responderCert(value: string) {
    this._responderCert = value;
  }
  public resetResponderCert() {
    this._responderCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderCertInput() {
    return this._responderCert;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationServerOcspInstanceListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerOcspInstanceListSamplingEnableA[] | cdktf.IResolvable) {
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

export class AamAuthenticationServerOcspInstanceListStructAList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerOcspInstanceListStructA[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerOcspInstanceListStructAOutputReference {
    return new AamAuthenticationServerOcspInstanceListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationServerOcspSamplingEnableA {
  /**
  * 'all': all; 'stapling-certificate-good': Total OCSP Stapling Good Certificate Response; 'stapling-certificate-revoked': Total OCSP Stapling Revoked Certificate Response; 'stapling-certificate-unknown': Total OCSP Stapling Unknown Certificate Response; 'stapling-request-normal': Total OSCP Stapling Normal Request; 'stapling-request-dropped': Total OCSP Stapling Dropped Request; 'stapling-response-success': Total OCSP Stapling Success Response; 'stapling-response-failure': Total OCSP Stapling Failure Response; 'stapling-response-error': Total OCSP Stapling Error Response; 'stapling-response-timeout': Total OCSP Stapling Timeout Response; 'stapling-response-other': Total OCSP Stapling Other Response; 'request-normal': Total OSCP Normal Request; 'request-dropped': Total OCSP Dropped Request; 'response-success': Total OCSP Success Response; 'response-failure': Total OCSP Failure Response; 'response-error': Total OCSP Error Response; 'response-timeout': Total OCSP Timeout Response; 'response-other': Total OCSP Other Response; 'job-start-error': Total OCSP Job Start Error; 'polling-control-error': Total OCSP Polling Control Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#counters1 AamAuthenticationServerOcspA#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationServerOcspSamplingEnableAToTerraform(struct?: AamAuthenticationServerOcspSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationServerOcspSamplingEnableAToHclTerraform(struct?: AamAuthenticationServerOcspSamplingEnableA | cdktf.IResolvable): any {
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

export class AamAuthenticationServerOcspSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationServerOcspSamplingEnableA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationServerOcspSamplingEnableA | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationServerOcspSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationServerOcspSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationServerOcspSamplingEnableAOutputReference {
    return new AamAuthenticationServerOcspSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp thunder_aam_authentication_server_ocsp}
*/
export class AamAuthenticationServerOcspA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ocsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationServerOcspA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationServerOcspA to import
  * @param importFromId The id of the existing AamAuthenticationServerOcspA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationServerOcspA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ocsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_server_ocsp thunder_aam_authentication_server_ocsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationServerOcspAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationServerOcspAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ocsp',
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
  private _instanceList = new AamAuthenticationServerOcspInstanceListStructAList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationServerOcspInstanceListStructA[] | cdktf.IResolvable) {
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
  private _samplingEnable = new AamAuthenticationServerOcspSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationServerOcspSamplingEnableA[] | cdktf.IResolvable) {
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
      instance_list: cdktf.listMapper(aamAuthenticationServerOcspInstanceListStructAToTerraform, true)(this._instanceList.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationServerOcspSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(aamAuthenticationServerOcspInstanceListStructAToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerOcspInstanceListStructAList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationServerOcspSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationServerOcspSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
