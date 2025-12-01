// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv3DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#access_type Wafv3Domain#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#domain Wafv3Domain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#id Wafv3Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#instance_id Wafv3Domain#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#resource_manager_resource_group_id Wafv3Domain#resource_manager_resource_group_id}
  */
  readonly resourceManagerResourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#tags Wafv3Domain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * listen block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#listen Wafv3Domain#listen}
  */
  readonly listen: Wafv3DomainListen;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#redirect Wafv3Domain#redirect}
  */
  readonly redirect: Wafv3DomainRedirect;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#timeouts Wafv3Domain#timeouts}
  */
  readonly timeouts?: Wafv3DomainTimeouts;
}
export interface Wafv3DomainListen {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#cert_id Wafv3Domain#cert_id}
  */
  readonly certId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#cipher_suite Wafv3Domain#cipher_suite}
  */
  readonly cipherSuite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#custom_ciphers Wafv3Domain#custom_ciphers}
  */
  readonly customCiphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#enable_tlsv3 Wafv3Domain#enable_tlsv3}
  */
  readonly enableTlsv3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#exclusive_ip Wafv3Domain#exclusive_ip}
  */
  readonly exclusiveIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#focus_https Wafv3Domain#focus_https}
  */
  readonly focusHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#http2_enabled Wafv3Domain#http2_enabled}
  */
  readonly http2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#http_ports Wafv3Domain#http_ports}
  */
  readonly httpPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#https_ports Wafv3Domain#https_ports}
  */
  readonly httpsPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#ipv6_enabled Wafv3Domain#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#protection_resource Wafv3Domain#protection_resource}
  */
  readonly protectionResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#sm2_access_only Wafv3Domain#sm2_access_only}
  */
  readonly sm2AccessOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#sm2_cert_id Wafv3Domain#sm2_cert_id}
  */
  readonly sm2CertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#sm2_enabled Wafv3Domain#sm2_enabled}
  */
  readonly sm2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#tls_version Wafv3Domain#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#xff_header_mode Wafv3Domain#xff_header_mode}
  */
  readonly xffHeaderMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#xff_headers Wafv3Domain#xff_headers}
  */
  readonly xffHeaders?: string[];
}

export function wafv3DomainListenToTerraform(struct?: Wafv3DomainListenOutputReference | Wafv3DomainListen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_id: cdktf.stringToTerraform(struct!.certId),
    cipher_suite: cdktf.numberToTerraform(struct!.cipherSuite),
    custom_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customCiphers),
    enable_tlsv3: cdktf.booleanToTerraform(struct!.enableTlsv3),
    exclusive_ip: cdktf.booleanToTerraform(struct!.exclusiveIp),
    focus_https: cdktf.booleanToTerraform(struct!.focusHttps),
    http2_enabled: cdktf.booleanToTerraform(struct!.http2Enabled),
    http_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpPorts),
    https_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpsPorts),
    ipv6_enabled: cdktf.booleanToTerraform(struct!.ipv6Enabled),
    protection_resource: cdktf.stringToTerraform(struct!.protectionResource),
    sm2_access_only: cdktf.booleanToTerraform(struct!.sm2AccessOnly),
    sm2_cert_id: cdktf.stringToTerraform(struct!.sm2CertId),
    sm2_enabled: cdktf.booleanToTerraform(struct!.sm2Enabled),
    tls_version: cdktf.stringToTerraform(struct!.tlsVersion),
    xff_header_mode: cdktf.numberToTerraform(struct!.xffHeaderMode),
    xff_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xffHeaders),
  }
}


export function wafv3DomainListenToHclTerraform(struct?: Wafv3DomainListenOutputReference | Wafv3DomainListen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_id: {
      value: cdktf.stringToHclTerraform(struct!.certId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cipher_suite: {
      value: cdktf.numberToHclTerraform(struct!.cipherSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_tlsv3: {
      value: cdktf.booleanToHclTerraform(struct!.enableTlsv3),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_ip: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    focus_https: {
      value: cdktf.booleanToHclTerraform(struct!.focusHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.http2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    https_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpsPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ipv6_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protection_resource: {
      value: cdktf.stringToHclTerraform(struct!.protectionResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sm2_access_only: {
      value: cdktf.booleanToHclTerraform(struct!.sm2AccessOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm2_cert_id: {
      value: cdktf.stringToHclTerraform(struct!.sm2CertId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sm2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sm2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_version: {
      value: cdktf.stringToHclTerraform(struct!.tlsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xff_header_mode: {
      value: cdktf.numberToHclTerraform(struct!.xffHeaderMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xff_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xffHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DomainListenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DomainListen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certId = this._certId;
    }
    if (this._cipherSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuite = this._cipherSuite;
    }
    if (this._customCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCiphers = this._customCiphers;
    }
    if (this._enableTlsv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsv3 = this._enableTlsv3;
    }
    if (this._exclusiveIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveIp = this._exclusiveIp;
    }
    if (this._focusHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.focusHttps = this._focusHttps;
    }
    if (this._http2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Enabled = this._http2Enabled;
    }
    if (this._httpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPorts = this._httpPorts;
    }
    if (this._httpsPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPorts = this._httpsPorts;
    }
    if (this._ipv6Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enabled = this._ipv6Enabled;
    }
    if (this._protectionResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionResource = this._protectionResource;
    }
    if (this._sm2AccessOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sm2AccessOnly = this._sm2AccessOnly;
    }
    if (this._sm2CertId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sm2CertId = this._sm2CertId;
    }
    if (this._sm2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sm2Enabled = this._sm2Enabled;
    }
    if (this._tlsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersion = this._tlsVersion;
    }
    if (this._xffHeaderMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffHeaderMode = this._xffHeaderMode;
    }
    if (this._xffHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffHeaders = this._xffHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DomainListen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certId = undefined;
      this._cipherSuite = undefined;
      this._customCiphers = undefined;
      this._enableTlsv3 = undefined;
      this._exclusiveIp = undefined;
      this._focusHttps = undefined;
      this._http2Enabled = undefined;
      this._httpPorts = undefined;
      this._httpsPorts = undefined;
      this._ipv6Enabled = undefined;
      this._protectionResource = undefined;
      this._sm2AccessOnly = undefined;
      this._sm2CertId = undefined;
      this._sm2Enabled = undefined;
      this._tlsVersion = undefined;
      this._xffHeaderMode = undefined;
      this._xffHeaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certId = value.certId;
      this._cipherSuite = value.cipherSuite;
      this._customCiphers = value.customCiphers;
      this._enableTlsv3 = value.enableTlsv3;
      this._exclusiveIp = value.exclusiveIp;
      this._focusHttps = value.focusHttps;
      this._http2Enabled = value.http2Enabled;
      this._httpPorts = value.httpPorts;
      this._httpsPorts = value.httpsPorts;
      this._ipv6Enabled = value.ipv6Enabled;
      this._protectionResource = value.protectionResource;
      this._sm2AccessOnly = value.sm2AccessOnly;
      this._sm2CertId = value.sm2CertId;
      this._sm2Enabled = value.sm2Enabled;
      this._tlsVersion = value.tlsVersion;
      this._xffHeaderMode = value.xffHeaderMode;
      this._xffHeaders = value.xffHeaders;
    }
  }

  // cert_id - computed: false, optional: true, required: false
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  public resetCertId() {
    this._certId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite?: number; 
  public get cipherSuite() {
    return this.getNumberAttribute('cipher_suite');
  }
  public set cipherSuite(value: number) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
  }

  // custom_ciphers - computed: false, optional: true, required: false
  private _customCiphers?: string[]; 
  public get customCiphers() {
    return this.getListAttribute('custom_ciphers');
  }
  public set customCiphers(value: string[]) {
    this._customCiphers = value;
  }
  public resetCustomCiphers() {
    this._customCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCiphersInput() {
    return this._customCiphers;
  }

  // enable_tlsv3 - computed: false, optional: true, required: false
  private _enableTlsv3?: boolean | cdktf.IResolvable; 
  public get enableTlsv3() {
    return this.getBooleanAttribute('enable_tlsv3');
  }
  public set enableTlsv3(value: boolean | cdktf.IResolvable) {
    this._enableTlsv3 = value;
  }
  public resetEnableTlsv3() {
    this._enableTlsv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsv3Input() {
    return this._enableTlsv3;
  }

  // exclusive_ip - computed: false, optional: true, required: false
  private _exclusiveIp?: boolean | cdktf.IResolvable; 
  public get exclusiveIp() {
    return this.getBooleanAttribute('exclusive_ip');
  }
  public set exclusiveIp(value: boolean | cdktf.IResolvable) {
    this._exclusiveIp = value;
  }
  public resetExclusiveIp() {
    this._exclusiveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveIpInput() {
    return this._exclusiveIp;
  }

  // focus_https - computed: false, optional: true, required: false
  private _focusHttps?: boolean | cdktf.IResolvable; 
  public get focusHttps() {
    return this.getBooleanAttribute('focus_https');
  }
  public set focusHttps(value: boolean | cdktf.IResolvable) {
    this._focusHttps = value;
  }
  public resetFocusHttps() {
    this._focusHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get focusHttpsInput() {
    return this._focusHttps;
  }

  // http2_enabled - computed: false, optional: true, required: false
  private _http2Enabled?: boolean | cdktf.IResolvable; 
  public get http2Enabled() {
    return this.getBooleanAttribute('http2_enabled');
  }
  public set http2Enabled(value: boolean | cdktf.IResolvable) {
    this._http2Enabled = value;
  }
  public resetHttp2Enabled() {
    this._http2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnabledInput() {
    return this._http2Enabled;
  }

  // http_ports - computed: false, optional: true, required: false
  private _httpPorts?: number[]; 
  public get httpPorts() {
    return this.getNumberListAttribute('http_ports');
  }
  public set httpPorts(value: number[]) {
    this._httpPorts = value;
  }
  public resetHttpPorts() {
    this._httpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortsInput() {
    return this._httpPorts;
  }

  // https_ports - computed: false, optional: true, required: false
  private _httpsPorts?: number[]; 
  public get httpsPorts() {
    return this.getNumberListAttribute('https_ports');
  }
  public set httpsPorts(value: number[]) {
    this._httpsPorts = value;
  }
  public resetHttpsPorts() {
    this._httpsPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortsInput() {
    return this._httpsPorts;
  }

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // protection_resource - computed: true, optional: true, required: false
  private _protectionResource?: string; 
  public get protectionResource() {
    return this.getStringAttribute('protection_resource');
  }
  public set protectionResource(value: string) {
    this._protectionResource = value;
  }
  public resetProtectionResource() {
    this._protectionResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionResourceInput() {
    return this._protectionResource;
  }

  // sm2_access_only - computed: false, optional: true, required: false
  private _sm2AccessOnly?: boolean | cdktf.IResolvable; 
  public get sm2AccessOnly() {
    return this.getBooleanAttribute('sm2_access_only');
  }
  public set sm2AccessOnly(value: boolean | cdktf.IResolvable) {
    this._sm2AccessOnly = value;
  }
  public resetSm2AccessOnly() {
    this._sm2AccessOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sm2AccessOnlyInput() {
    return this._sm2AccessOnly;
  }

  // sm2_cert_id - computed: false, optional: true, required: false
  private _sm2CertId?: string; 
  public get sm2CertId() {
    return this.getStringAttribute('sm2_cert_id');
  }
  public set sm2CertId(value: string) {
    this._sm2CertId = value;
  }
  public resetSm2CertId() {
    this._sm2CertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sm2CertIdInput() {
    return this._sm2CertId;
  }

  // sm2_enabled - computed: true, optional: true, required: false
  private _sm2Enabled?: boolean | cdktf.IResolvable; 
  public get sm2Enabled() {
    return this.getBooleanAttribute('sm2_enabled');
  }
  public set sm2Enabled(value: boolean | cdktf.IResolvable) {
    this._sm2Enabled = value;
  }
  public resetSm2Enabled() {
    this._sm2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sm2EnabledInput() {
    return this._sm2Enabled;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }

  // xff_header_mode - computed: false, optional: true, required: false
  private _xffHeaderMode?: number; 
  public get xffHeaderMode() {
    return this.getNumberAttribute('xff_header_mode');
  }
  public set xffHeaderMode(value: number) {
    this._xffHeaderMode = value;
  }
  public resetXffHeaderMode() {
    this._xffHeaderMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffHeaderModeInput() {
    return this._xffHeaderMode;
  }

  // xff_headers - computed: false, optional: true, required: false
  private _xffHeaders?: string[]; 
  public get xffHeaders() {
    return this.getListAttribute('xff_headers');
  }
  public set xffHeaders(value: string[]) {
    this._xffHeaders = value;
  }
  public resetXffHeaders() {
    this._xffHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffHeadersInput() {
    return this._xffHeaders;
  }
}
export interface Wafv3DomainRedirectRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#key Wafv3Domain#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#value Wafv3Domain#value}
  */
  readonly value?: string;
}

export function wafv3DomainRedirectRequestHeadersToTerraform(struct?: Wafv3DomainRedirectRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafv3DomainRedirectRequestHeadersToHclTerraform(struct?: Wafv3DomainRedirectRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class Wafv3DomainRedirectRequestHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv3DomainRedirectRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DomainRedirectRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class Wafv3DomainRedirectRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv3DomainRedirectRequestHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv3DomainRedirectRequestHeadersOutputReference {
    return new Wafv3DomainRedirectRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv3DomainRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#backends Wafv3Domain#backends}
  */
  readonly backends?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#backup_backends Wafv3Domain#backup_backends}
  */
  readonly backupBackends?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#connect_timeout Wafv3Domain#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#focus_http_backend Wafv3Domain#focus_http_backend}
  */
  readonly focusHttpBackend?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#keepalive Wafv3Domain#keepalive}
  */
  readonly keepalive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#keepalive_requests Wafv3Domain#keepalive_requests}
  */
  readonly keepaliveRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#keepalive_timeout Wafv3Domain#keepalive_timeout}
  */
  readonly keepaliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#loadbalance Wafv3Domain#loadbalance}
  */
  readonly loadbalance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#read_timeout Wafv3Domain#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#retry Wafv3Domain#retry}
  */
  readonly retry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#sni_enabled Wafv3Domain#sni_enabled}
  */
  readonly sniEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#sni_host Wafv3Domain#sni_host}
  */
  readonly sniHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#write_timeout Wafv3Domain#write_timeout}
  */
  readonly writeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#xff_proto Wafv3Domain#xff_proto}
  */
  readonly xffProto?: boolean | cdktf.IResolvable;
  /**
  * request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#request_headers Wafv3Domain#request_headers}
  */
  readonly requestHeaders?: Wafv3DomainRedirectRequestHeaders[] | cdktf.IResolvable;
}

export function wafv3DomainRedirectToTerraform(struct?: Wafv3DomainRedirectOutputReference | Wafv3DomainRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
    backup_backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupBackends),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    focus_http_backend: cdktf.booleanToTerraform(struct!.focusHttpBackend),
    keepalive: cdktf.booleanToTerraform(struct!.keepalive),
    keepalive_requests: cdktf.numberToTerraform(struct!.keepaliveRequests),
    keepalive_timeout: cdktf.numberToTerraform(struct!.keepaliveTimeout),
    loadbalance: cdktf.stringToTerraform(struct!.loadbalance),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    retry: cdktf.booleanToTerraform(struct!.retry),
    sni_enabled: cdktf.booleanToTerraform(struct!.sniEnabled),
    sni_host: cdktf.stringToTerraform(struct!.sniHost),
    write_timeout: cdktf.numberToTerraform(struct!.writeTimeout),
    xff_proto: cdktf.booleanToTerraform(struct!.xffProto),
    request_headers: cdktf.listMapper(wafv3DomainRedirectRequestHeadersToTerraform, true)(struct!.requestHeaders),
  }
}


export function wafv3DomainRedirectToHclTerraform(struct?: Wafv3DomainRedirectOutputReference | Wafv3DomainRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backends),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backup_backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupBackends),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    focus_http_backend: {
      value: cdktf.booleanToHclTerraform(struct!.focusHttpBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive: {
      value: cdktf.booleanToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive_requests: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loadbalance: {
      value: cdktf.stringToHclTerraform(struct!.loadbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.booleanToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sniEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni_host: {
      value: cdktf.stringToHclTerraform(struct!.sniHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_timeout: {
      value: cdktf.numberToHclTerraform(struct!.writeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    xff_proto: {
      value: cdktf.booleanToHclTerraform(struct!.xffProto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers: {
      value: cdktf.listMapperHcl(wafv3DomainRedirectRequestHeadersToHclTerraform, true)(struct!.requestHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "Wafv3DomainRedirectRequestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DomainRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv3DomainRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    if (this._backupBackends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupBackends = this._backupBackends;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._focusHttpBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.focusHttpBackend = this._focusHttpBackend;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._keepaliveRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveRequests = this._keepaliveRequests;
    }
    if (this._keepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeout = this._keepaliveTimeout;
    }
    if (this._loadbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalance = this._loadbalance;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._sniEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniEnabled = this._sniEnabled;
    }
    if (this._sniHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniHost = this._sniHost;
    }
    if (this._writeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeTimeout = this._writeTimeout;
    }
    if (this._xffProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffProto = this._xffProto;
    }
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DomainRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backends = undefined;
      this._backupBackends = undefined;
      this._connectTimeout = undefined;
      this._focusHttpBackend = undefined;
      this._keepalive = undefined;
      this._keepaliveRequests = undefined;
      this._keepaliveTimeout = undefined;
      this._loadbalance = undefined;
      this._readTimeout = undefined;
      this._retry = undefined;
      this._sniEnabled = undefined;
      this._sniHost = undefined;
      this._writeTimeout = undefined;
      this._xffProto = undefined;
      this._requestHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backends = value.backends;
      this._backupBackends = value.backupBackends;
      this._connectTimeout = value.connectTimeout;
      this._focusHttpBackend = value.focusHttpBackend;
      this._keepalive = value.keepalive;
      this._keepaliveRequests = value.keepaliveRequests;
      this._keepaliveTimeout = value.keepaliveTimeout;
      this._loadbalance = value.loadbalance;
      this._readTimeout = value.readTimeout;
      this._retry = value.retry;
      this._sniEnabled = value.sniEnabled;
      this._sniHost = value.sniHost;
      this._writeTimeout = value.writeTimeout;
      this._xffProto = value.xffProto;
      this._requestHeaders.internalValue = value.requestHeaders;
    }
  }

  // backends - computed: true, optional: true, required: false
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  public resetBackends() {
    this._backends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }

  // backup_backends - computed: true, optional: true, required: false
  private _backupBackends?: string[]; 
  public get backupBackends() {
    return this.getListAttribute('backup_backends');
  }
  public set backupBackends(value: string[]) {
    this._backupBackends = value;
  }
  public resetBackupBackends() {
    this._backupBackends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBackendsInput() {
    return this._backupBackends;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // focus_http_backend - computed: false, optional: true, required: false
  private _focusHttpBackend?: boolean | cdktf.IResolvable; 
  public get focusHttpBackend() {
    return this.getBooleanAttribute('focus_http_backend');
  }
  public set focusHttpBackend(value: boolean | cdktf.IResolvable) {
    this._focusHttpBackend = value;
  }
  public resetFocusHttpBackend() {
    this._focusHttpBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get focusHttpBackendInput() {
    return this._focusHttpBackend;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: boolean | cdktf.IResolvable; 
  public get keepalive() {
    return this.getBooleanAttribute('keepalive');
  }
  public set keepalive(value: boolean | cdktf.IResolvable) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keepalive_requests - computed: true, optional: true, required: false
  private _keepaliveRequests?: number; 
  public get keepaliveRequests() {
    return this.getNumberAttribute('keepalive_requests');
  }
  public set keepaliveRequests(value: number) {
    this._keepaliveRequests = value;
  }
  public resetKeepaliveRequests() {
    this._keepaliveRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveRequestsInput() {
    return this._keepaliveRequests;
  }

  // keepalive_timeout - computed: true, optional: true, required: false
  private _keepaliveTimeout?: number; 
  public get keepaliveTimeout() {
    return this.getNumberAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: number) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // loadbalance - computed: false, optional: false, required: true
  private _loadbalance?: string; 
  public get loadbalance() {
    return this.getStringAttribute('loadbalance');
  }
  public set loadbalance(value: string) {
    this._loadbalance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalanceInput() {
    return this._loadbalance;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: boolean | cdktf.IResolvable; 
  public get retry() {
    return this.getBooleanAttribute('retry');
  }
  public set retry(value: boolean | cdktf.IResolvable) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // sni_enabled - computed: false, optional: true, required: false
  private _sniEnabled?: boolean | cdktf.IResolvable; 
  public get sniEnabled() {
    return this.getBooleanAttribute('sni_enabled');
  }
  public set sniEnabled(value: boolean | cdktf.IResolvable) {
    this._sniEnabled = value;
  }
  public resetSniEnabled() {
    this._sniEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniEnabledInput() {
    return this._sniEnabled;
  }

  // sni_host - computed: false, optional: true, required: false
  private _sniHost?: string; 
  public get sniHost() {
    return this.getStringAttribute('sni_host');
  }
  public set sniHost(value: string) {
    this._sniHost = value;
  }
  public resetSniHost() {
    this._sniHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniHostInput() {
    return this._sniHost;
  }

  // write_timeout - computed: false, optional: true, required: false
  private _writeTimeout?: number; 
  public get writeTimeout() {
    return this.getNumberAttribute('write_timeout');
  }
  public set writeTimeout(value: number) {
    this._writeTimeout = value;
  }
  public resetWriteTimeout() {
    this._writeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTimeoutInput() {
    return this._writeTimeout;
  }

  // xff_proto - computed: false, optional: true, required: false
  private _xffProto?: boolean | cdktf.IResolvable; 
  public get xffProto() {
    return this.getBooleanAttribute('xff_proto');
  }
  public set xffProto(value: boolean | cdktf.IResolvable) {
    this._xffProto = value;
  }
  public resetXffProto() {
    this._xffProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffProtoInput() {
    return this._xffProto;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new Wafv3DomainRedirectRequestHeadersList(this, "request_headers", false);
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: Wafv3DomainRedirectRequestHeaders[] | cdktf.IResolvable) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }
}
export interface Wafv3DomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#create Wafv3Domain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#delete Wafv3Domain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#update Wafv3Domain#update}
  */
  readonly update?: string;
}

export function wafv3DomainTimeoutsToTerraform(struct?: Wafv3DomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function wafv3DomainTimeoutsToHclTerraform(struct?: Wafv3DomainTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Wafv3DomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Wafv3DomainTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv3DomainTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain alicloud_wafv3_domain}
*/
export class Wafv3Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_wafv3_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafv3Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafv3Domain to import
  * @param importFromId The id of the existing Wafv3Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafv3Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_wafv3_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/wafv3_domain alicloud_wafv3_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wafv3DomainConfig
  */
  public constructor(scope: Construct, id: string, config: Wafv3DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_wafv3_domain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._domain = config.domain;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._resourceManagerResourceGroupId = config.resourceManagerResourceGroupId;
    this._tags = config.tags;
    this._listen.internalValue = config.listen;
    this._redirect.internalValue = config.redirect;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // resource_manager_resource_group_id - computed: true, optional: true, required: false
  private _resourceManagerResourceGroupId?: string; 
  public get resourceManagerResourceGroupId() {
    return this.getStringAttribute('resource_manager_resource_group_id');
  }
  public set resourceManagerResourceGroupId(value: string) {
    this._resourceManagerResourceGroupId = value;
  }
  public resetResourceManagerResourceGroupId() {
    this._resourceManagerResourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerResourceGroupIdInput() {
    return this._resourceManagerResourceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // listen - computed: false, optional: false, required: true
  private _listen = new Wafv3DomainListenOutputReference(this, "listen");
  public get listen() {
    return this._listen;
  }
  public putListen(value: Wafv3DomainListen) {
    this._listen.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen.internalValue;
  }

  // redirect - computed: false, optional: false, required: true
  private _redirect = new Wafv3DomainRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: Wafv3DomainRedirect) {
    this._redirect.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Wafv3DomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Wafv3DomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      resource_manager_resource_group_id: cdktf.stringToTerraform(this._resourceManagerResourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      listen: wafv3DomainListenToTerraform(this._listen.internalValue),
      redirect: wafv3DomainRedirectToTerraform(this._redirect.internalValue),
      timeouts: wafv3DomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceManagerResourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      listen: {
        value: wafv3DomainListenToHclTerraform(this._listen.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv3DomainListenList",
      },
      redirect: {
        value: wafv3DomainRedirectToHclTerraform(this._redirect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Wafv3DomainRedirectList",
      },
      timeouts: {
        value: wafv3DomainTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Wafv3DomainTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
