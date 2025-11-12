// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateSslL4Config extends cdktf.TerraformMetaArguments {
  /**
  * 'drop': drop; 'reset': reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#action DdosTemplateSslL4#action}
  */
  readonly action?: string;
  /**
  * Allow Non-TLS (SSLv3 and lower) traffic (Warning: security may be compromised)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#allow_non_tls DdosTemplateSslL4#allow_non_tls}
  */
  readonly allowNonTls?: number;
  /**
  * Disable this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#disable DdosTemplateSslL4#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#id DdosTemplateSslL4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure renegotiation limiting for SSL (Number of renegotiation allowed)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#renegotiation DdosTemplateSslL4#renegotiation}
  */
  readonly renegotiation?: number;
  /**
  * Configure rate limiting for SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#request_rate_limit DdosTemplateSslL4#request_rate_limit}
  */
  readonly requestRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#ssl_l4_tmpl_name DdosTemplateSslL4#ssl_l4_tmpl_name}
  */
  readonly sslL4TmplName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#user_tag DdosTemplateSslL4#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#uuid DdosTemplateSslL4#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_config_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#auth_config_cfg DdosTemplateSslL4#auth_config_cfg}
  */
  readonly authConfigCfg?: DdosTemplateSslL4AuthConfigCfg;
  /**
  * cert_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#cert_cfg DdosTemplateSslL4#cert_cfg}
  */
  readonly certCfg?: DdosTemplateSslL4CertCfg;
  /**
  * multi_pu_threshold_distribution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#multi_pu_threshold_distribution DdosTemplateSslL4#multi_pu_threshold_distribution}
  */
  readonly multiPuThresholdDistribution?: DdosTemplateSslL4MultiPuThresholdDistribution;
  /**
  * server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#server_name_list DdosTemplateSslL4#server_name_list}
  */
  readonly serverNameList?: DdosTemplateSslL4ServerNameListStruct[] | cdktf.IResolvable;
  /**
  * ssl_traffic_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#ssl_traffic_check DdosTemplateSslL4#ssl_traffic_check}
  */
  readonly sslTrafficCheck?: DdosTemplateSslL4SslTrafficCheck;
}
export interface DdosTemplateSslL4AuthConfigCfg {
  /**
  * 'blacklist-src': Blacklist-src when auth handshake fails;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#auth_handshake_fail_action DdosTemplateSslL4#auth_handshake_fail_action}
  */
  readonly authHandshakeFailAction?: string;
  /**
  * Connection timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#timeout DdosTemplateSslL4#timeout}
  */
  readonly timeout?: number;
  /**
  * Number of failed handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#trials DdosTemplateSslL4#trials}
  */
  readonly trials?: number;
}

export function ddosTemplateSslL4AuthConfigCfgToTerraform(struct?: DdosTemplateSslL4AuthConfigCfgOutputReference | DdosTemplateSslL4AuthConfigCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_handshake_fail_action: cdktf.stringToTerraform(struct!.authHandshakeFailAction),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    trials: cdktf.numberToTerraform(struct!.trials),
  }
}


export function ddosTemplateSslL4AuthConfigCfgToHclTerraform(struct?: DdosTemplateSslL4AuthConfigCfgOutputReference | DdosTemplateSslL4AuthConfigCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_handshake_fail_action: {
      value: cdktf.stringToHclTerraform(struct!.authHandshakeFailAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trials: {
      value: cdktf.numberToHclTerraform(struct!.trials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSslL4AuthConfigCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSslL4AuthConfigCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authHandshakeFailAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.authHandshakeFailAction = this._authHandshakeFailAction;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._trials !== undefined) {
      hasAnyValues = true;
      internalValueResult.trials = this._trials;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSslL4AuthConfigCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authHandshakeFailAction = undefined;
      this._timeout = undefined;
      this._trials = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authHandshakeFailAction = value.authHandshakeFailAction;
      this._timeout = value.timeout;
      this._trials = value.trials;
    }
  }

  // auth_handshake_fail_action - computed: false, optional: true, required: false
  private _authHandshakeFailAction?: string; 
  public get authHandshakeFailAction() {
    return this.getStringAttribute('auth_handshake_fail_action');
  }
  public set authHandshakeFailAction(value: string) {
    this._authHandshakeFailAction = value;
  }
  public resetAuthHandshakeFailAction() {
    this._authHandshakeFailAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHandshakeFailActionInput() {
    return this._authHandshakeFailAction;
  }

  // timeout - computed: false, optional: true, required: false
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

  // trials - computed: false, optional: true, required: false
  private _trials?: number; 
  public get trials() {
    return this.getNumberAttribute('trials');
  }
  public set trials(value: number) {
    this._trials = value;
  }
  public resetTrials() {
    this._trials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trialsInput() {
    return this._trials;
  }
}
export interface DdosTemplateSslL4CertCfg {
  /**
  * SSL certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#cert DdosTemplateSslL4#cert}
  */
  readonly cert?: string;
  /**
  * SSL key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#key DdosTemplateSslL4#key}
  */
  readonly key?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#key_passphrase DdosTemplateSslL4#key_passphrase}
  */
  readonly keyPassphrase?: string;
}

export function ddosTemplateSslL4CertCfgToTerraform(struct?: DdosTemplateSslL4CertCfgOutputReference | DdosTemplateSslL4CertCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    key: cdktf.stringToTerraform(struct!.key),
    key_passphrase: cdktf.stringToTerraform(struct!.keyPassphrase),
  }
}


export function ddosTemplateSslL4CertCfgToHclTerraform(struct?: DdosTemplateSslL4CertCfgOutputReference | DdosTemplateSslL4CertCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSslL4CertCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSslL4CertCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassphrase = this._keyPassphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSslL4CertCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._key = undefined;
      this._keyPassphrase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._key = value.key;
      this._keyPassphrase = value.keyPassphrase;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }
}
export interface DdosTemplateSslL4MultiPuThresholdDistribution {
  /**
  * 'disable': Destination side rate limit only. Default: Enable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#multi_pu_threshold_distribution_disable DdosTemplateSslL4#multi_pu_threshold_distribution_disable}
  */
  readonly multiPuThresholdDistributionDisable?: string;
  /**
  * Destination side rate limit only. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#multi_pu_threshold_distribution_value DdosTemplateSslL4#multi_pu_threshold_distribution_value}
  */
  readonly multiPuThresholdDistributionValue?: number;
}

export function ddosTemplateSslL4MultiPuThresholdDistributionToTerraform(struct?: DdosTemplateSslL4MultiPuThresholdDistributionOutputReference | DdosTemplateSslL4MultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_pu_threshold_distribution_disable: cdktf.stringToTerraform(struct!.multiPuThresholdDistributionDisable),
    multi_pu_threshold_distribution_value: cdktf.numberToTerraform(struct!.multiPuThresholdDistributionValue),
  }
}


export function ddosTemplateSslL4MultiPuThresholdDistributionToHclTerraform(struct?: DdosTemplateSslL4MultiPuThresholdDistributionOutputReference | DdosTemplateSslL4MultiPuThresholdDistribution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_pu_threshold_distribution_disable: {
      value: cdktf.stringToHclTerraform(struct!.multiPuThresholdDistributionDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_pu_threshold_distribution_value: {
      value: cdktf.numberToHclTerraform(struct!.multiPuThresholdDistributionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSslL4MultiPuThresholdDistributionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSslL4MultiPuThresholdDistribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiPuThresholdDistributionDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionDisable = this._multiPuThresholdDistributionDisable;
    }
    if (this._multiPuThresholdDistributionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuThresholdDistributionValue = this._multiPuThresholdDistributionValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSslL4MultiPuThresholdDistribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiPuThresholdDistributionDisable = undefined;
      this._multiPuThresholdDistributionValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiPuThresholdDistributionDisable = value.multiPuThresholdDistributionDisable;
      this._multiPuThresholdDistributionValue = value.multiPuThresholdDistributionValue;
    }
  }

  // multi_pu_threshold_distribution_disable - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionDisable?: string; 
  public get multiPuThresholdDistributionDisable() {
    return this.getStringAttribute('multi_pu_threshold_distribution_disable');
  }
  public set multiPuThresholdDistributionDisable(value: string) {
    this._multiPuThresholdDistributionDisable = value;
  }
  public resetMultiPuThresholdDistributionDisable() {
    this._multiPuThresholdDistributionDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionDisableInput() {
    return this._multiPuThresholdDistributionDisable;
  }

  // multi_pu_threshold_distribution_value - computed: false, optional: true, required: false
  private _multiPuThresholdDistributionValue?: number; 
  public get multiPuThresholdDistributionValue() {
    return this.getNumberAttribute('multi_pu_threshold_distribution_value');
  }
  public set multiPuThresholdDistributionValue(value: number) {
    this._multiPuThresholdDistributionValue = value;
  }
  public resetMultiPuThresholdDistributionValue() {
    this._multiPuThresholdDistributionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionValueInput() {
    return this._multiPuThresholdDistributionValue;
  }
}
export interface DdosTemplateSslL4ServerNameListStruct {
  /**
  * Server Certificate associated to SNI (Server Certificate Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#server_cert DdosTemplateSslL4#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Server Private Key associated to SNI (Server Private Key Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#server_key DdosTemplateSslL4#server_key}
  */
  readonly serverKey?: string;
  /**
  * Server name indication in Client hello extension (Server name String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#server_name DdosTemplateSslL4#server_name}
  */
  readonly serverName?: string;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#server_passphrase DdosTemplateSslL4#server_passphrase}
  */
  readonly serverPassphrase?: string;
}

export function ddosTemplateSslL4ServerNameListStructToTerraform(struct?: DdosTemplateSslL4ServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
    server_key: cdktf.stringToTerraform(struct!.serverKey),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    server_passphrase: cdktf.stringToTerraform(struct!.serverPassphrase),
  }
}


export function ddosTemplateSslL4ServerNameListStructToHclTerraform(struct?: DdosTemplateSslL4ServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_cert: {
      value: cdktf.stringToHclTerraform(struct!.serverCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_key: {
      value: cdktf.stringToHclTerraform(struct!.serverKey),
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
    server_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.serverPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSslL4ServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosTemplateSslL4ServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert;
    }
    if (this._serverKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKey = this._serverKey;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._serverPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPassphrase = this._serverPassphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSslL4ServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCert = undefined;
      this._serverKey = undefined;
      this._serverName = undefined;
      this._serverPassphrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCert = value.serverCert;
      this._serverKey = value.serverKey;
      this._serverName = value.serverName;
      this._serverPassphrase = value.serverPassphrase;
    }
  }

  // server_cert - computed: false, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_key - computed: false, optional: true, required: false
  private _serverKey?: string; 
  public get serverKey() {
    return this.getStringAttribute('server_key');
  }
  public set serverKey(value: string) {
    this._serverKey = value;
  }
  public resetServerKey() {
    this._serverKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeyInput() {
    return this._serverKey;
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

  // server_passphrase - computed: false, optional: true, required: false
  private _serverPassphrase?: string; 
  public get serverPassphrase() {
    return this.getStringAttribute('server_passphrase');
  }
  public set serverPassphrase(value: string) {
    this._serverPassphrase = value;
  }
  public resetServerPassphrase() {
    this._serverPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPassphraseInput() {
    return this._serverPassphrase;
  }
}

export class DdosTemplateSslL4ServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : DdosTemplateSslL4ServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosTemplateSslL4ServerNameListStructOutputReference {
    return new DdosTemplateSslL4ServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosTemplateSslL4SslTrafficCheck {
  /**
  * Apply checks to SSL connections initialized by ACK packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#check_resumed_connection DdosTemplateSslL4#check_resumed_connection}
  */
  readonly checkResumedConnection?: number;
  /**
  * 'drop': Drop packets with bad ssl header; 'ignore': Forward packets with bad ssl header;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#header_action DdosTemplateSslL4#header_action}
  */
  readonly headerAction?: string;
  /**
  * Inspect ssl header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#header_inspection DdosTemplateSslL4#header_inspection}
  */
  readonly headerInspection?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#uuid DdosTemplateSslL4#uuid}
  */
  readonly uuid?: string;
}

export function ddosTemplateSslL4SslTrafficCheckToTerraform(struct?: DdosTemplateSslL4SslTrafficCheckOutputReference | DdosTemplateSslL4SslTrafficCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_resumed_connection: cdktf.numberToTerraform(struct!.checkResumedConnection),
    header_action: cdktf.stringToTerraform(struct!.headerAction),
    header_inspection: cdktf.numberToTerraform(struct!.headerInspection),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosTemplateSslL4SslTrafficCheckToHclTerraform(struct?: DdosTemplateSslL4SslTrafficCheckOutputReference | DdosTemplateSslL4SslTrafficCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_resumed_connection: {
      value: cdktf.numberToHclTerraform(struct!.checkResumedConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_action: {
      value: cdktf.stringToHclTerraform(struct!.headerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_inspection: {
      value: cdktf.numberToHclTerraform(struct!.headerInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosTemplateSslL4SslTrafficCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosTemplateSslL4SslTrafficCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkResumedConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkResumedConnection = this._checkResumedConnection;
    }
    if (this._headerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAction = this._headerAction;
    }
    if (this._headerInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInspection = this._headerInspection;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosTemplateSslL4SslTrafficCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkResumedConnection = undefined;
      this._headerAction = undefined;
      this._headerInspection = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkResumedConnection = value.checkResumedConnection;
      this._headerAction = value.headerAction;
      this._headerInspection = value.headerInspection;
      this._uuid = value.uuid;
    }
  }

  // check_resumed_connection - computed: false, optional: true, required: false
  private _checkResumedConnection?: number; 
  public get checkResumedConnection() {
    return this.getNumberAttribute('check_resumed_connection');
  }
  public set checkResumedConnection(value: number) {
    this._checkResumedConnection = value;
  }
  public resetCheckResumedConnection() {
    this._checkResumedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkResumedConnectionInput() {
    return this._checkResumedConnection;
  }

  // header_action - computed: false, optional: true, required: false
  private _headerAction?: string; 
  public get headerAction() {
    return this.getStringAttribute('header_action');
  }
  public set headerAction(value: string) {
    this._headerAction = value;
  }
  public resetHeaderAction() {
    this._headerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerActionInput() {
    return this._headerAction;
  }

  // header_inspection - computed: false, optional: true, required: false
  private _headerInspection?: number; 
  public get headerInspection() {
    return this.getNumberAttribute('header_inspection');
  }
  public set headerInspection(value: number) {
    this._headerInspection = value;
  }
  public resetHeaderInspection() {
    this._headerInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInspectionInput() {
    return this._headerInspection;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4 thunder_ddos_template_ssl_l4}
*/
export class DdosTemplateSslL4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_ssl_l4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateSslL4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateSslL4 to import
  * @param importFromId The id of the existing DdosTemplateSslL4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateSslL4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_ssl_l4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_ssl_l4 thunder_ddos_template_ssl_l4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateSslL4Config
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateSslL4Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_ssl_l4',
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
    this._action = config.action;
    this._allowNonTls = config.allowNonTls;
    this._disable = config.disable;
    this._id = config.id;
    this._renegotiation = config.renegotiation;
    this._requestRateLimit = config.requestRateLimit;
    this._sslL4TmplName = config.sslL4TmplName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._authConfigCfg.internalValue = config.authConfigCfg;
    this._certCfg.internalValue = config.certCfg;
    this._multiPuThresholdDistribution.internalValue = config.multiPuThresholdDistribution;
    this._serverNameList.internalValue = config.serverNameList;
    this._sslTrafficCheck.internalValue = config.sslTrafficCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // allow_non_tls - computed: false, optional: true, required: false
  private _allowNonTls?: number; 
  public get allowNonTls() {
    return this.getNumberAttribute('allow_non_tls');
  }
  public set allowNonTls(value: number) {
    this._allowNonTls = value;
  }
  public resetAllowNonTls() {
    this._allowNonTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonTlsInput() {
    return this._allowNonTls;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // renegotiation - computed: false, optional: true, required: false
  private _renegotiation?: number; 
  public get renegotiation() {
    return this.getNumberAttribute('renegotiation');
  }
  public set renegotiation(value: number) {
    this._renegotiation = value;
  }
  public resetRenegotiation() {
    this._renegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationInput() {
    return this._renegotiation;
  }

  // request_rate_limit - computed: false, optional: true, required: false
  private _requestRateLimit?: number; 
  public get requestRateLimit() {
    return this.getNumberAttribute('request_rate_limit');
  }
  public set requestRateLimit(value: number) {
    this._requestRateLimit = value;
  }
  public resetRequestRateLimit() {
    this._requestRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateLimitInput() {
    return this._requestRateLimit;
  }

  // ssl_l4_tmpl_name - computed: false, optional: false, required: true
  private _sslL4TmplName?: string; 
  public get sslL4TmplName() {
    return this.getStringAttribute('ssl_l4_tmpl_name');
  }
  public set sslL4TmplName(value: string) {
    this._sslL4TmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslL4TmplNameInput() {
    return this._sslL4TmplName;
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

  // auth_config_cfg - computed: false, optional: true, required: false
  private _authConfigCfg = new DdosTemplateSslL4AuthConfigCfgOutputReference(this, "auth_config_cfg");
  public get authConfigCfg() {
    return this._authConfigCfg;
  }
  public putAuthConfigCfg(value: DdosTemplateSslL4AuthConfigCfg) {
    this._authConfigCfg.internalValue = value;
  }
  public resetAuthConfigCfg() {
    this._authConfigCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigCfgInput() {
    return this._authConfigCfg.internalValue;
  }

  // cert_cfg - computed: false, optional: true, required: false
  private _certCfg = new DdosTemplateSslL4CertCfgOutputReference(this, "cert_cfg");
  public get certCfg() {
    return this._certCfg;
  }
  public putCertCfg(value: DdosTemplateSslL4CertCfg) {
    this._certCfg.internalValue = value;
  }
  public resetCertCfg() {
    this._certCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCfgInput() {
    return this._certCfg.internalValue;
  }

  // multi_pu_threshold_distribution - computed: false, optional: true, required: false
  private _multiPuThresholdDistribution = new DdosTemplateSslL4MultiPuThresholdDistributionOutputReference(this, "multi_pu_threshold_distribution");
  public get multiPuThresholdDistribution() {
    return this._multiPuThresholdDistribution;
  }
  public putMultiPuThresholdDistribution(value: DdosTemplateSslL4MultiPuThresholdDistribution) {
    this._multiPuThresholdDistribution.internalValue = value;
  }
  public resetMultiPuThresholdDistribution() {
    this._multiPuThresholdDistribution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuThresholdDistributionInput() {
    return this._multiPuThresholdDistribution.internalValue;
  }

  // server_name_list - computed: false, optional: true, required: false
  private _serverNameList = new DdosTemplateSslL4ServerNameListStructList(this, "server_name_list", false);
  public get serverNameList() {
    return this._serverNameList;
  }
  public putServerNameList(value: DdosTemplateSslL4ServerNameListStruct[] | cdktf.IResolvable) {
    this._serverNameList.internalValue = value;
  }
  public resetServerNameList() {
    this._serverNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameListInput() {
    return this._serverNameList.internalValue;
  }

  // ssl_traffic_check - computed: false, optional: true, required: false
  private _sslTrafficCheck = new DdosTemplateSslL4SslTrafficCheckOutputReference(this, "ssl_traffic_check");
  public get sslTrafficCheck() {
    return this._sslTrafficCheck;
  }
  public putSslTrafficCheck(value: DdosTemplateSslL4SslTrafficCheck) {
    this._sslTrafficCheck.internalValue = value;
  }
  public resetSslTrafficCheck() {
    this._sslTrafficCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrafficCheckInput() {
    return this._sslTrafficCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      allow_non_tls: cdktf.numberToTerraform(this._allowNonTls),
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      renegotiation: cdktf.numberToTerraform(this._renegotiation),
      request_rate_limit: cdktf.numberToTerraform(this._requestRateLimit),
      ssl_l4_tmpl_name: cdktf.stringToTerraform(this._sslL4TmplName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      auth_config_cfg: ddosTemplateSslL4AuthConfigCfgToTerraform(this._authConfigCfg.internalValue),
      cert_cfg: ddosTemplateSslL4CertCfgToTerraform(this._certCfg.internalValue),
      multi_pu_threshold_distribution: ddosTemplateSslL4MultiPuThresholdDistributionToTerraform(this._multiPuThresholdDistribution.internalValue),
      server_name_list: cdktf.listMapper(ddosTemplateSslL4ServerNameListStructToTerraform, true)(this._serverNameList.internalValue),
      ssl_traffic_check: ddosTemplateSslL4SslTrafficCheckToTerraform(this._sslTrafficCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_non_tls: {
        value: cdktf.numberToHclTerraform(this._allowNonTls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
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
      renegotiation: {
        value: cdktf.numberToHclTerraform(this._renegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_rate_limit: {
        value: cdktf.numberToHclTerraform(this._requestRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_l4_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._sslL4TmplName),
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
      auth_config_cfg: {
        value: ddosTemplateSslL4AuthConfigCfgToHclTerraform(this._authConfigCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSslL4AuthConfigCfgList",
      },
      cert_cfg: {
        value: ddosTemplateSslL4CertCfgToHclTerraform(this._certCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSslL4CertCfgList",
      },
      multi_pu_threshold_distribution: {
        value: ddosTemplateSslL4MultiPuThresholdDistributionToHclTerraform(this._multiPuThresholdDistribution.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSslL4MultiPuThresholdDistributionList",
      },
      server_name_list: {
        value: cdktf.listMapperHcl(ddosTemplateSslL4ServerNameListStructToHclTerraform, true)(this._serverNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSslL4ServerNameListStructList",
      },
      ssl_traffic_check: {
        value: ddosTemplateSslL4SslTrafficCheckToHclTerraform(this._sslTrafficCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosTemplateSslL4SslTrafficCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
