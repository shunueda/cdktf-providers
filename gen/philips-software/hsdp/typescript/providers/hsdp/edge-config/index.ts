// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#id EdgeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#serial_number EdgeConfig#serial_number}
  */
  readonly serialNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#sync EdgeConfig#sync}
  */
  readonly sync?: boolean | cdktf.IResolvable;
  /**
  * firewall_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#firewall_exceptions EdgeConfig#firewall_exceptions}
  */
  readonly firewallExceptions?: EdgeConfigFirewallExceptions;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#logging EdgeConfig#logging}
  */
  readonly logging?: EdgeConfigLogging;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#principal EdgeConfig#principal}
  */
  readonly principal?: EdgeConfigPrincipal;
}
export interface EdgeConfigFirewallExceptions {
  /**
  * Clear ports on resource destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#clear_on_destroy EdgeConfig#clear_on_destroy}
  */
  readonly clearOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#ensure_tcp EdgeConfig#ensure_tcp}
  */
  readonly ensureTcp?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#ensure_udp EdgeConfig#ensure_udp}
  */
  readonly ensureUdp?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#tcp EdgeConfig#tcp}
  */
  readonly tcp?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#udp EdgeConfig#udp}
  */
  readonly udp?: number[];
}

export function edgeConfigFirewallExceptionsToTerraform(struct?: EdgeConfigFirewallExceptionsOutputReference | EdgeConfigFirewallExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_on_destroy: cdktf.booleanToTerraform(struct!.clearOnDestroy),
    ensure_tcp: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ensureTcp),
    ensure_udp: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ensureUdp),
    tcp: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.tcp),
    udp: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.udp),
  }
}


export function edgeConfigFirewallExceptionsToHclTerraform(struct?: EdgeConfigFirewallExceptionsOutputReference | EdgeConfigFirewallExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.clearOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ensure_tcp: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ensureTcp),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    ensure_udp: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ensureUdp),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    tcp: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.tcp),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    udp: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.udp),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeConfigFirewallExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeConfigFirewallExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearOnDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearOnDestroy = this._clearOnDestroy;
    }
    if (this._ensureTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ensureTcp = this._ensureTcp;
    }
    if (this._ensureUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ensureUdp = this._ensureUdp;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeConfigFirewallExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clearOnDestroy = undefined;
      this._ensureTcp = undefined;
      this._ensureUdp = undefined;
      this._tcp = undefined;
      this._udp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clearOnDestroy = value.clearOnDestroy;
      this._ensureTcp = value.ensureTcp;
      this._ensureUdp = value.ensureUdp;
      this._tcp = value.tcp;
      this._udp = value.udp;
    }
  }

  // clear_on_destroy - computed: false, optional: true, required: false
  private _clearOnDestroy?: boolean | cdktf.IResolvable; 
  public get clearOnDestroy() {
    return this.getBooleanAttribute('clear_on_destroy');
  }
  public set clearOnDestroy(value: boolean | cdktf.IResolvable) {
    this._clearOnDestroy = value;
  }
  public resetClearOnDestroy() {
    this._clearOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearOnDestroyInput() {
    return this._clearOnDestroy;
  }

  // ensure_tcp - computed: false, optional: true, required: false
  private _ensureTcp?: number[]; 
  public get ensureTcp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ensure_tcp')));
  }
  public set ensureTcp(value: number[]) {
    this._ensureTcp = value;
  }
  public resetEnsureTcp() {
    this._ensureTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ensureTcpInput() {
    return this._ensureTcp;
  }

  // ensure_udp - computed: false, optional: true, required: false
  private _ensureUdp?: number[]; 
  public get ensureUdp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ensure_udp')));
  }
  public set ensureUdp(value: number[]) {
    this._ensureUdp = value;
  }
  public resetEnsureUdp() {
    this._ensureUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ensureUdpInput() {
    return this._ensureUdp;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number[]; 
  public get tcp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tcp')));
  }
  public set tcp(value: number[]) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number[]; 
  public get udp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('udp')));
  }
  public set udp(value: number[]) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}
export interface EdgeConfigLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#hsdp_custom_field EdgeConfig#hsdp_custom_field}
  */
  readonly hsdpCustomField?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#hsdp_ingestor_host EdgeConfig#hsdp_ingestor_host}
  */
  readonly hsdpIngestorHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#hsdp_logging EdgeConfig#hsdp_logging}
  */
  readonly hsdpLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#hsdp_product_key EdgeConfig#hsdp_product_key}
  */
  readonly hsdpProductKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#hsdp_secret_key EdgeConfig#hsdp_secret_key}
  */
  readonly hsdpSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#hsdp_shared_key EdgeConfig#hsdp_shared_key}
  */
  readonly hsdpSharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#raw_config EdgeConfig#raw_config}
  */
  readonly rawConfig?: string;
}

export function edgeConfigLoggingToTerraform(struct?: EdgeConfigLoggingOutputReference | EdgeConfigLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hsdp_custom_field: cdktf.booleanToTerraform(struct!.hsdpCustomField),
    hsdp_ingestor_host: cdktf.stringToTerraform(struct!.hsdpIngestorHost),
    hsdp_logging: cdktf.booleanToTerraform(struct!.hsdpLogging),
    hsdp_product_key: cdktf.stringToTerraform(struct!.hsdpProductKey),
    hsdp_secret_key: cdktf.stringToTerraform(struct!.hsdpSecretKey),
    hsdp_shared_key: cdktf.stringToTerraform(struct!.hsdpSharedKey),
    raw_config: cdktf.stringToTerraform(struct!.rawConfig),
  }
}


export function edgeConfigLoggingToHclTerraform(struct?: EdgeConfigLoggingOutputReference | EdgeConfigLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hsdp_custom_field: {
      value: cdktf.booleanToHclTerraform(struct!.hsdpCustomField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hsdp_ingestor_host: {
      value: cdktf.stringToHclTerraform(struct!.hsdpIngestorHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsdp_logging: {
      value: cdktf.booleanToHclTerraform(struct!.hsdpLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hsdp_product_key: {
      value: cdktf.stringToHclTerraform(struct!.hsdpProductKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsdp_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.hsdpSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsdp_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.hsdpSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raw_config: {
      value: cdktf.stringToHclTerraform(struct!.rawConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeConfigLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeConfigLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hsdpCustomField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsdpCustomField = this._hsdpCustomField;
    }
    if (this._hsdpIngestorHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsdpIngestorHost = this._hsdpIngestorHost;
    }
    if (this._hsdpLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsdpLogging = this._hsdpLogging;
    }
    if (this._hsdpProductKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsdpProductKey = this._hsdpProductKey;
    }
    if (this._hsdpSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsdpSecretKey = this._hsdpSecretKey;
    }
    if (this._hsdpSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsdpSharedKey = this._hsdpSharedKey;
    }
    if (this._rawConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawConfig = this._rawConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeConfigLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hsdpCustomField = undefined;
      this._hsdpIngestorHost = undefined;
      this._hsdpLogging = undefined;
      this._hsdpProductKey = undefined;
      this._hsdpSecretKey = undefined;
      this._hsdpSharedKey = undefined;
      this._rawConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hsdpCustomField = value.hsdpCustomField;
      this._hsdpIngestorHost = value.hsdpIngestorHost;
      this._hsdpLogging = value.hsdpLogging;
      this._hsdpProductKey = value.hsdpProductKey;
      this._hsdpSecretKey = value.hsdpSecretKey;
      this._hsdpSharedKey = value.hsdpSharedKey;
      this._rawConfig = value.rawConfig;
    }
  }

  // hsdp_custom_field - computed: false, optional: true, required: false
  private _hsdpCustomField?: boolean | cdktf.IResolvable; 
  public get hsdpCustomField() {
    return this.getBooleanAttribute('hsdp_custom_field');
  }
  public set hsdpCustomField(value: boolean | cdktf.IResolvable) {
    this._hsdpCustomField = value;
  }
  public resetHsdpCustomField() {
    this._hsdpCustomField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsdpCustomFieldInput() {
    return this._hsdpCustomField;
  }

  // hsdp_ingestor_host - computed: false, optional: true, required: false
  private _hsdpIngestorHost?: string; 
  public get hsdpIngestorHost() {
    return this.getStringAttribute('hsdp_ingestor_host');
  }
  public set hsdpIngestorHost(value: string) {
    this._hsdpIngestorHost = value;
  }
  public resetHsdpIngestorHost() {
    this._hsdpIngestorHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsdpIngestorHostInput() {
    return this._hsdpIngestorHost;
  }

  // hsdp_logging - computed: false, optional: true, required: false
  private _hsdpLogging?: boolean | cdktf.IResolvable; 
  public get hsdpLogging() {
    return this.getBooleanAttribute('hsdp_logging');
  }
  public set hsdpLogging(value: boolean | cdktf.IResolvable) {
    this._hsdpLogging = value;
  }
  public resetHsdpLogging() {
    this._hsdpLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsdpLoggingInput() {
    return this._hsdpLogging;
  }

  // hsdp_product_key - computed: false, optional: true, required: false
  private _hsdpProductKey?: string; 
  public get hsdpProductKey() {
    return this.getStringAttribute('hsdp_product_key');
  }
  public set hsdpProductKey(value: string) {
    this._hsdpProductKey = value;
  }
  public resetHsdpProductKey() {
    this._hsdpProductKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsdpProductKeyInput() {
    return this._hsdpProductKey;
  }

  // hsdp_secret_key - computed: false, optional: true, required: false
  private _hsdpSecretKey?: string; 
  public get hsdpSecretKey() {
    return this.getStringAttribute('hsdp_secret_key');
  }
  public set hsdpSecretKey(value: string) {
    this._hsdpSecretKey = value;
  }
  public resetHsdpSecretKey() {
    this._hsdpSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsdpSecretKeyInput() {
    return this._hsdpSecretKey;
  }

  // hsdp_shared_key - computed: false, optional: true, required: false
  private _hsdpSharedKey?: string; 
  public get hsdpSharedKey() {
    return this.getStringAttribute('hsdp_shared_key');
  }
  public set hsdpSharedKey(value: string) {
    this._hsdpSharedKey = value;
  }
  public resetHsdpSharedKey() {
    this._hsdpSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsdpSharedKeyInput() {
    return this._hsdpSharedKey;
  }

  // raw_config - computed: false, optional: true, required: false
  private _rawConfig?: string; 
  public get rawConfig() {
    return this.getStringAttribute('raw_config');
  }
  public set rawConfig(value: string) {
    this._rawConfig = value;
  }
  public resetRawConfig() {
    this._rawConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawConfigInput() {
    return this._rawConfig;
  }
}
export interface EdgeConfigPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#endpoint EdgeConfig#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#environment EdgeConfig#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#oauth2_client_id EdgeConfig#oauth2_client_id}
  */
  readonly oauth2ClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#oauth2_password EdgeConfig#oauth2_password}
  */
  readonly oauth2Password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#password EdgeConfig#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#region EdgeConfig#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#service_id EdgeConfig#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#service_private_key EdgeConfig#service_private_key}
  */
  readonly servicePrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#uaa_password EdgeConfig#uaa_password}
  */
  readonly uaaPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#uaa_username EdgeConfig#uaa_username}
  */
  readonly uaaUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#username EdgeConfig#username}
  */
  readonly username?: string;
}

export function edgeConfigPrincipalToTerraform(struct?: EdgeConfigPrincipalOutputReference | EdgeConfigPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    environment: cdktf.stringToTerraform(struct!.environment),
    oauth2_client_id: cdktf.stringToTerraform(struct!.oauth2ClientId),
    oauth2_password: cdktf.stringToTerraform(struct!.oauth2Password),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_private_key: cdktf.stringToTerraform(struct!.servicePrivateKey),
    uaa_password: cdktf.stringToTerraform(struct!.uaaPassword),
    uaa_username: cdktf.stringToTerraform(struct!.uaaUsername),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function edgeConfigPrincipalToHclTerraform(struct?: EdgeConfigPrincipalOutputReference | EdgeConfigPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_client_id: {
      value: cdktf.stringToHclTerraform(struct!.oauth2ClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2_password: {
      value: cdktf.stringToHclTerraform(struct!.oauth2Password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_private_key: {
      value: cdktf.stringToHclTerraform(struct!.servicePrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_password: {
      value: cdktf.stringToHclTerraform(struct!.uaaPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uaa_username: {
      value: cdktf.stringToHclTerraform(struct!.uaaUsername),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeConfigPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeConfigPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._oauth2ClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientId = this._oauth2ClientId;
    }
    if (this._oauth2Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Password = this._oauth2Password;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._servicePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrivateKey = this._servicePrivateKey;
    }
    if (this._uaaPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaPassword = this._uaaPassword;
    }
    if (this._uaaUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaaUsername = this._uaaUsername;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeConfigPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._environment = undefined;
      this._oauth2ClientId = undefined;
      this._oauth2Password = undefined;
      this._password = undefined;
      this._region = undefined;
      this._serviceId = undefined;
      this._servicePrivateKey = undefined;
      this._uaaPassword = undefined;
      this._uaaUsername = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._environment = value.environment;
      this._oauth2ClientId = value.oauth2ClientId;
      this._oauth2Password = value.oauth2Password;
      this._password = value.password;
      this._region = value.region;
      this._serviceId = value.serviceId;
      this._servicePrivateKey = value.servicePrivateKey;
      this._uaaPassword = value.uaaPassword;
      this._uaaUsername = value.uaaUsername;
      this._username = value.username;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // oauth2_client_id - computed: false, optional: true, required: false
  private _oauth2ClientId?: string; 
  public get oauth2ClientId() {
    return this.getStringAttribute('oauth2_client_id');
  }
  public set oauth2ClientId(value: string) {
    this._oauth2ClientId = value;
  }
  public resetOauth2ClientId() {
    this._oauth2ClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientIdInput() {
    return this._oauth2ClientId;
  }

  // oauth2_password - computed: false, optional: true, required: false
  private _oauth2Password?: string; 
  public get oauth2Password() {
    return this.getStringAttribute('oauth2_password');
  }
  public set oauth2Password(value: string) {
    this._oauth2Password = value;
  }
  public resetOauth2Password() {
    this._oauth2Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2PasswordInput() {
    return this._oauth2Password;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_private_key - computed: false, optional: true, required: false
  private _servicePrivateKey?: string; 
  public get servicePrivateKey() {
    return this.getStringAttribute('service_private_key');
  }
  public set servicePrivateKey(value: string) {
    this._servicePrivateKey = value;
  }
  public resetServicePrivateKey() {
    this._servicePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrivateKeyInput() {
    return this._servicePrivateKey;
  }

  // uaa_password - computed: false, optional: true, required: false
  private _uaaPassword?: string; 
  public get uaaPassword() {
    return this.getStringAttribute('uaa_password');
  }
  public set uaaPassword(value: string) {
    this._uaaPassword = value;
  }
  public resetUaaPassword() {
    this._uaaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaPasswordInput() {
    return this._uaaPassword;
  }

  // uaa_username - computed: false, optional: true, required: false
  private _uaaUsername?: string; 
  public get uaaUsername() {
    return this.getStringAttribute('uaa_username');
  }
  public set uaaUsername(value: string) {
    this._uaaUsername = value;
  }
  public resetUaaUsername() {
    this._uaaUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaaUsernameInput() {
    return this._uaaUsername;
  }

  // username - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config hsdp_edge_config}
*/
export class EdgeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_edge_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeConfig to import
  * @param importFromId The id of the existing EdgeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_edge_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/edge_config hsdp_edge_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_edge_config',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
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
    this._serialNumber = config.serialNumber;
    this._sync = config.sync;
    this._firewallExceptions.internalValue = config.firewallExceptions;
    this._logging.internalValue = config.logging;
    this._principal.internalValue = config.principal;
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

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // sync - computed: false, optional: true, required: false
  private _sync?: boolean | cdktf.IResolvable; 
  public get sync() {
    return this.getBooleanAttribute('sync');
  }
  public set sync(value: boolean | cdktf.IResolvable) {
    this._sync = value;
  }
  public resetSync() {
    this._sync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync;
  }

  // firewall_exceptions - computed: false, optional: true, required: false
  private _firewallExceptions = new EdgeConfigFirewallExceptionsOutputReference(this, "firewall_exceptions");
  public get firewallExceptions() {
    return this._firewallExceptions;
  }
  public putFirewallExceptions(value: EdgeConfigFirewallExceptions) {
    this._firewallExceptions.internalValue = value;
  }
  public resetFirewallExceptions() {
    this._firewallExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallExceptionsInput() {
    return this._firewallExceptions.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new EdgeConfigLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: EdgeConfigLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new EdgeConfigPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: EdgeConfigPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      sync: cdktf.booleanToTerraform(this._sync),
      firewall_exceptions: edgeConfigFirewallExceptionsToTerraform(this._firewallExceptions.internalValue),
      logging: edgeConfigLoggingToTerraform(this._logging.internalValue),
      principal: edgeConfigPrincipalToTerraform(this._principal.internalValue),
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
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync: {
        value: cdktf.booleanToHclTerraform(this._sync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      firewall_exceptions: {
        value: edgeConfigFirewallExceptionsToHclTerraform(this._firewallExceptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeConfigFirewallExceptionsList",
      },
      logging: {
        value: edgeConfigLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeConfigLoggingList",
      },
      principal: {
        value: edgeConfigPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeConfigPrincipalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
