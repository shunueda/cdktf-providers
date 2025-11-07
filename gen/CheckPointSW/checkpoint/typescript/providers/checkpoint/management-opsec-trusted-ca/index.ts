// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementOpsecTrustedCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow only certificates from listed branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#allow_certificates_from_branches ManagementOpsecTrustedCa#allow_certificates_from_branches}
  */
  readonly allowCertificatesFromBranches?: boolean | cdktf.IResolvable;
  /**
  * Certificate file encoded in base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#base64_certificate ManagementOpsecTrustedCa#base64_certificate}
  */
  readonly base64Certificate: string;
  /**
  * Branches to allow certificates from. Required only if "allow-certificates-from-branches" set to "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#branches ManagementOpsecTrustedCa#branches}
  */
  readonly branches?: string[];
  /**
  * Cache Certificate Revocation List on the Security Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#cache_crl ManagementOpsecTrustedCa#cache_crl}
  */
  readonly cacheCrl?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#color ManagementOpsecTrustedCa#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#comments ManagementOpsecTrustedCa#comments}
  */
  readonly comments?: string;
  /**
  * Weather to retrieve new Certificate Revocation List after the certificate expires or after a fixed period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#crl_cache_method ManagementOpsecTrustedCa#crl_cache_method}
  */
  readonly crlCacheMethod?: string;
  /**
  * When to fetch new Certificate Revocation List (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#crl_cache_timeout ManagementOpsecTrustedCa#crl_cache_timeout}
  */
  readonly crlCacheTimeout?: number;
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#domains_to_process ManagementOpsecTrustedCa#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#id ManagementOpsecTrustedCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#ignore_errors ManagementOpsecTrustedCa#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#ignore_warnings ManagementOpsecTrustedCa#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#name ManagementOpsecTrustedCa#name}
  */
  readonly name: string;
  /**
  * Whether to retrieve Certificate Revocation List from http servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#retrieve_crl_from_http_servers ManagementOpsecTrustedCa#retrieve_crl_from_http_servers}
  */
  readonly retrieveCrlFromHttpServers?: boolean | cdktf.IResolvable;
  /**
  * Whether to retrieve Certificate Revocation List from ldap servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#retrieve_crl_from_ldap_servers ManagementOpsecTrustedCa#retrieve_crl_from_ldap_servers}
  */
  readonly retrieveCrlFromLdapServers?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#tags ManagementOpsecTrustedCa#tags}
  */
  readonly tags?: string[];
  /**
  * automatic_enrollment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#automatic_enrollment ManagementOpsecTrustedCa#automatic_enrollment}
  */
  readonly automaticEnrollment?: ManagementOpsecTrustedCaAutomaticEnrollment;
}
export interface ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings {
  /**
  * Certificate authority IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#ip_address ManagementOpsecTrustedCa#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#port ManagementOpsecTrustedCa#port}
  */
  readonly port?: number;
}

export function managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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
}
export interface ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings {
  /**
  * direct_tcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#direct_tcp_settings ManagementOpsecTrustedCa#direct_tcp_settings}
  */
  readonly directTcpSettings?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings;
}

export function managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct_tcp_settings: managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToTerraform(struct!.directTcpSettings),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct_tcp_settings: {
      value: managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsToHclTerraform(struct!.directTcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directTcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directTcpSettings = this._directTcpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directTcpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directTcpSettings.internalValue = value.directTcpSettings;
    }
  }

  // direct_tcp_settings - computed: false, optional: true, required: false
  private _directTcpSettings = new ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettingsOutputReference(this, "direct_tcp_settings");
  public get directTcpSettings() {
    return this._directTcpSettings;
  }
  public putDirectTcpSettings(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsDirectTcpSettings) {
    this._directTcpSettings.internalValue = value;
  }
  public resetDirectTcpSettings() {
    this._directTcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directTcpSettingsInput() {
    return this._directTcpSettings.internalValue;
  }
}
export interface ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings {
  /**
  * Certificate authority IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#ip_address ManagementOpsecTrustedCa#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#port ManagementOpsecTrustedCa#port}
  */
  readonly port?: number;
}

export function managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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
}
export interface ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings {
  /**
  * Certificate authority URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#url ManagementOpsecTrustedCa#url}
  */
  readonly url?: string;
}

export function managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
}
export interface ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings {
  /**
  * Transport layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#transport_layer ManagementOpsecTrustedCa#transport_layer}
  */
  readonly transportLayer?: string;
  /**
  * direct_tcp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#direct_tcp_settings ManagementOpsecTrustedCa#direct_tcp_settings}
  */
  readonly directTcpSettings?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings;
  /**
  * http_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#http_settings ManagementOpsecTrustedCa#http_settings}
  */
  readonly httpSettings?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings;
}

export function managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_layer: cdktf.stringToTerraform(struct!.transportLayer),
    direct_tcp_settings: managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToTerraform(struct!.directTcpSettings),
    http_settings: managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToTerraform(struct!.httpSettings),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transport_layer: {
      value: cdktf.stringToHclTerraform(struct!.transportLayer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_tcp_settings: {
      value: managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsToHclTerraform(struct!.directTcpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsList",
    },
    http_settings: {
      value: managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsToHclTerraform(struct!.httpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transportLayer !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportLayer = this._transportLayer;
    }
    if (this._directTcpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directTcpSettings = this._directTcpSettings?.internalValue;
    }
    if (this._httpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpSettings = this._httpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transportLayer = undefined;
      this._directTcpSettings.internalValue = undefined;
      this._httpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transportLayer = value.transportLayer;
      this._directTcpSettings.internalValue = value.directTcpSettings;
      this._httpSettings.internalValue = value.httpSettings;
    }
  }

  // transport_layer - computed: false, optional: true, required: false
  private _transportLayer?: string; 
  public get transportLayer() {
    return this.getStringAttribute('transport_layer');
  }
  public set transportLayer(value: string) {
    this._transportLayer = value;
  }
  public resetTransportLayer() {
    this._transportLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportLayerInput() {
    return this._transportLayer;
  }

  // direct_tcp_settings - computed: false, optional: true, required: false
  private _directTcpSettings = new ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettingsOutputReference(this, "direct_tcp_settings");
  public get directTcpSettings() {
    return this._directTcpSettings;
  }
  public putDirectTcpSettings(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsDirectTcpSettings) {
    this._directTcpSettings.internalValue = value;
  }
  public resetDirectTcpSettings() {
    this._directTcpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directTcpSettingsInput() {
    return this._directTcpSettings.internalValue;
  }

  // http_settings - computed: false, optional: true, required: false
  private _httpSettings = new ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettingsOutputReference(this, "http_settings");
  public get httpSettings() {
    return this._httpSettings;
  }
  public putHttpSettings(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsHttpSettings) {
    this._httpSettings.internalValue = value;
  }
  public resetHttpSettings() {
    this._httpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSettingsInput() {
    return this._httpSettings.internalValue;
  }
}
export interface ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings {
  /**
  * Certificate authority identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#ca_identifier ManagementOpsecTrustedCa#ca_identifier}
  */
  readonly caIdentifier?: string;
  /**
  * Certificate authority URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#url ManagementOpsecTrustedCa#url}
  */
  readonly url?: string;
}

export function managementOpsecTrustedCaAutomaticEnrollmentScepSettingsToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_identifier: cdktf.stringToTerraform(struct!.caIdentifier),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentScepSettingsToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference | ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_identifier: {
      value: cdktf.stringToHclTerraform(struct!.caIdentifier),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.caIdentifier = this._caIdentifier;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caIdentifier = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caIdentifier = value.caIdentifier;
      this._url = value.url;
    }
  }

  // ca_identifier - computed: false, optional: true, required: false
  private _caIdentifier?: string; 
  public get caIdentifier() {
    return this.getStringAttribute('ca_identifier');
  }
  public set caIdentifier(value: string) {
    this._caIdentifier = value;
  }
  public resetCaIdentifier() {
    this._caIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdentifierInput() {
    return this._caIdentifier;
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
}
export interface ManagementOpsecTrustedCaAutomaticEnrollment {
  /**
  * Whether to automatically enroll certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#automatically_enroll_certificate ManagementOpsecTrustedCa#automatically_enroll_certificate}
  */
  readonly automaticallyEnrollCertificate?: boolean | cdktf.IResolvable;
  /**
  * Protocol that communicates with the certificate authority. Available only if "automatically-enroll-certificate" parameter is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#protocol ManagementOpsecTrustedCa#protocol}
  */
  readonly protocol?: string;
  /**
  * cmpv1_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#cmpv1_settings ManagementOpsecTrustedCa#cmpv1_settings}
  */
  readonly cmpv1Settings?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings;
  /**
  * cmpv2_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#cmpv2_settings ManagementOpsecTrustedCa#cmpv2_settings}
  */
  readonly cmpv2Settings?: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings;
  /**
  * scep_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#scep_settings ManagementOpsecTrustedCa#scep_settings}
  */
  readonly scepSettings?: ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings;
}

export function managementOpsecTrustedCaAutomaticEnrollmentToTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentOutputReference | ManagementOpsecTrustedCaAutomaticEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatically_enroll_certificate: cdktf.booleanToTerraform(struct!.automaticallyEnrollCertificate),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    cmpv1_settings: managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsToTerraform(struct!.cmpv1Settings),
    cmpv2_settings: managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsToTerraform(struct!.cmpv2Settings),
    scep_settings: managementOpsecTrustedCaAutomaticEnrollmentScepSettingsToTerraform(struct!.scepSettings),
  }
}


export function managementOpsecTrustedCaAutomaticEnrollmentToHclTerraform(struct?: ManagementOpsecTrustedCaAutomaticEnrollmentOutputReference | ManagementOpsecTrustedCaAutomaticEnrollment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatically_enroll_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.automaticallyEnrollCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmpv1_settings: {
      value: managementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsToHclTerraform(struct!.cmpv1Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsList",
    },
    cmpv2_settings: {
      value: managementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsToHclTerraform(struct!.cmpv2Settings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsList",
    },
    scep_settings: {
      value: managementOpsecTrustedCaAutomaticEnrollmentScepSettingsToHclTerraform(struct!.scepSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementOpsecTrustedCaAutomaticEnrollmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementOpsecTrustedCaAutomaticEnrollment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticallyEnrollCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticallyEnrollCertificate = this._automaticallyEnrollCertificate;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._cmpv1Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpv1Settings = this._cmpv1Settings?.internalValue;
    }
    if (this._cmpv2Settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmpv2Settings = this._cmpv2Settings?.internalValue;
    }
    if (this._scepSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepSettings = this._scepSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementOpsecTrustedCaAutomaticEnrollment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticallyEnrollCertificate = undefined;
      this._protocol = undefined;
      this._cmpv1Settings.internalValue = undefined;
      this._cmpv2Settings.internalValue = undefined;
      this._scepSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticallyEnrollCertificate = value.automaticallyEnrollCertificate;
      this._protocol = value.protocol;
      this._cmpv1Settings.internalValue = value.cmpv1Settings;
      this._cmpv2Settings.internalValue = value.cmpv2Settings;
      this._scepSettings.internalValue = value.scepSettings;
    }
  }

  // automatically_enroll_certificate - computed: false, optional: true, required: false
  private _automaticallyEnrollCertificate?: boolean | cdktf.IResolvable; 
  public get automaticallyEnrollCertificate() {
    return this.getBooleanAttribute('automatically_enroll_certificate');
  }
  public set automaticallyEnrollCertificate(value: boolean | cdktf.IResolvable) {
    this._automaticallyEnrollCertificate = value;
  }
  public resetAutomaticallyEnrollCertificate() {
    this._automaticallyEnrollCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyEnrollCertificateInput() {
    return this._automaticallyEnrollCertificate;
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

  // cmpv1_settings - computed: false, optional: true, required: false
  private _cmpv1Settings = new ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1SettingsOutputReference(this, "cmpv1_settings");
  public get cmpv1Settings() {
    return this._cmpv1Settings;
  }
  public putCmpv1Settings(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv1Settings) {
    this._cmpv1Settings.internalValue = value;
  }
  public resetCmpv1Settings() {
    this._cmpv1Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpv1SettingsInput() {
    return this._cmpv1Settings.internalValue;
  }

  // cmpv2_settings - computed: false, optional: true, required: false
  private _cmpv2Settings = new ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2SettingsOutputReference(this, "cmpv2_settings");
  public get cmpv2Settings() {
    return this._cmpv2Settings;
  }
  public putCmpv2Settings(value: ManagementOpsecTrustedCaAutomaticEnrollmentCmpv2Settings) {
    this._cmpv2Settings.internalValue = value;
  }
  public resetCmpv2Settings() {
    this._cmpv2Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpv2SettingsInput() {
    return this._cmpv2Settings.internalValue;
  }

  // scep_settings - computed: false, optional: true, required: false
  private _scepSettings = new ManagementOpsecTrustedCaAutomaticEnrollmentScepSettingsOutputReference(this, "scep_settings");
  public get scepSettings() {
    return this._scepSettings;
  }
  public putScepSettings(value: ManagementOpsecTrustedCaAutomaticEnrollmentScepSettings) {
    this._scepSettings.internalValue = value;
  }
  public resetScepSettings() {
    this._scepSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepSettingsInput() {
    return this._scepSettings.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca checkpoint_management_opsec_trusted_ca}
*/
export class ManagementOpsecTrustedCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_opsec_trusted_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementOpsecTrustedCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementOpsecTrustedCa to import
  * @param importFromId The id of the existing ManagementOpsecTrustedCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementOpsecTrustedCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_opsec_trusted_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_opsec_trusted_ca checkpoint_management_opsec_trusted_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementOpsecTrustedCaConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementOpsecTrustedCaConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_opsec_trusted_ca',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowCertificatesFromBranches = config.allowCertificatesFromBranches;
    this._base64Certificate = config.base64Certificate;
    this._branches = config.branches;
    this._cacheCrl = config.cacheCrl;
    this._color = config.color;
    this._comments = config.comments;
    this._crlCacheMethod = config.crlCacheMethod;
    this._crlCacheTimeout = config.crlCacheTimeout;
    this._domainsToProcess = config.domainsToProcess;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._retrieveCrlFromHttpServers = config.retrieveCrlFromHttpServers;
    this._retrieveCrlFromLdapServers = config.retrieveCrlFromLdapServers;
    this._tags = config.tags;
    this._automaticEnrollment.internalValue = config.automaticEnrollment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_certificates_from_branches - computed: false, optional: true, required: false
  private _allowCertificatesFromBranches?: boolean | cdktf.IResolvable; 
  public get allowCertificatesFromBranches() {
    return this.getBooleanAttribute('allow_certificates_from_branches');
  }
  public set allowCertificatesFromBranches(value: boolean | cdktf.IResolvable) {
    this._allowCertificatesFromBranches = value;
  }
  public resetAllowCertificatesFromBranches() {
    this._allowCertificatesFromBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCertificatesFromBranchesInput() {
    return this._allowCertificatesFromBranches;
  }

  // base64_certificate - computed: false, optional: false, required: true
  private _base64Certificate?: string; 
  public get base64Certificate() {
    return this.getStringAttribute('base64_certificate');
  }
  public set base64Certificate(value: string) {
    this._base64Certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get base64CertificateInput() {
    return this._base64Certificate;
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return cdktf.Fn.tolist(this.getListAttribute('branches'));
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
  }

  // cache_crl - computed: false, optional: true, required: false
  private _cacheCrl?: boolean | cdktf.IResolvable; 
  public get cacheCrl() {
    return this.getBooleanAttribute('cache_crl');
  }
  public set cacheCrl(value: boolean | cdktf.IResolvable) {
    this._cacheCrl = value;
  }
  public resetCacheCrl() {
    this._cacheCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCrlInput() {
    return this._cacheCrl;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // crl_cache_method - computed: false, optional: true, required: false
  private _crlCacheMethod?: string; 
  public get crlCacheMethod() {
    return this.getStringAttribute('crl_cache_method');
  }
  public set crlCacheMethod(value: string) {
    this._crlCacheMethod = value;
  }
  public resetCrlCacheMethod() {
    this._crlCacheMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheMethodInput() {
    return this._crlCacheMethod;
  }

  // crl_cache_timeout - computed: false, optional: true, required: false
  private _crlCacheTimeout?: number; 
  public get crlCacheTimeout() {
    return this.getNumberAttribute('crl_cache_timeout');
  }
  public set crlCacheTimeout(value: number) {
    this._crlCacheTimeout = value;
  }
  public resetCrlCacheTimeout() {
    this._crlCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheTimeoutInput() {
    return this._crlCacheTimeout;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // retrieve_crl_from_http_servers - computed: false, optional: true, required: false
  private _retrieveCrlFromHttpServers?: boolean | cdktf.IResolvable; 
  public get retrieveCrlFromHttpServers() {
    return this.getBooleanAttribute('retrieve_crl_from_http_servers');
  }
  public set retrieveCrlFromHttpServers(value: boolean | cdktf.IResolvable) {
    this._retrieveCrlFromHttpServers = value;
  }
  public resetRetrieveCrlFromHttpServers() {
    this._retrieveCrlFromHttpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveCrlFromHttpServersInput() {
    return this._retrieveCrlFromHttpServers;
  }

  // retrieve_crl_from_ldap_servers - computed: false, optional: true, required: false
  private _retrieveCrlFromLdapServers?: boolean | cdktf.IResolvable; 
  public get retrieveCrlFromLdapServers() {
    return this.getBooleanAttribute('retrieve_crl_from_ldap_servers');
  }
  public set retrieveCrlFromLdapServers(value: boolean | cdktf.IResolvable) {
    this._retrieveCrlFromLdapServers = value;
  }
  public resetRetrieveCrlFromLdapServers() {
    this._retrieveCrlFromLdapServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveCrlFromLdapServersInput() {
    return this._retrieveCrlFromLdapServers;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // automatic_enrollment - computed: false, optional: true, required: false
  private _automaticEnrollment = new ManagementOpsecTrustedCaAutomaticEnrollmentOutputReference(this, "automatic_enrollment");
  public get automaticEnrollment() {
    return this._automaticEnrollment;
  }
  public putAutomaticEnrollment(value: ManagementOpsecTrustedCaAutomaticEnrollment) {
    this._automaticEnrollment.internalValue = value;
  }
  public resetAutomaticEnrollment() {
    this._automaticEnrollment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticEnrollmentInput() {
    return this._automaticEnrollment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_certificates_from_branches: cdktf.booleanToTerraform(this._allowCertificatesFromBranches),
      base64_certificate: cdktf.stringToTerraform(this._base64Certificate),
      branches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._branches),
      cache_crl: cdktf.booleanToTerraform(this._cacheCrl),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      crl_cache_method: cdktf.stringToTerraform(this._crlCacheMethod),
      crl_cache_timeout: cdktf.numberToTerraform(this._crlCacheTimeout),
      domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsToProcess),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      retrieve_crl_from_http_servers: cdktf.booleanToTerraform(this._retrieveCrlFromHttpServers),
      retrieve_crl_from_ldap_servers: cdktf.booleanToTerraform(this._retrieveCrlFromLdapServers),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      automatic_enrollment: managementOpsecTrustedCaAutomaticEnrollmentToTerraform(this._automaticEnrollment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_certificates_from_branches: {
        value: cdktf.booleanToHclTerraform(this._allowCertificatesFromBranches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base64_certificate: {
        value: cdktf.stringToHclTerraform(this._base64Certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._branches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_crl: {
        value: cdktf.booleanToHclTerraform(this._cacheCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_cache_method: {
        value: cdktf.stringToHclTerraform(this._crlCacheMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._crlCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domains_to_process: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsToProcess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrieve_crl_from_http_servers: {
        value: cdktf.booleanToHclTerraform(this._retrieveCrlFromHttpServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retrieve_crl_from_ldap_servers: {
        value: cdktf.booleanToHclTerraform(this._retrieveCrlFromLdapServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      automatic_enrollment: {
        value: managementOpsecTrustedCaAutomaticEnrollmentToHclTerraform(this._automaticEnrollment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementOpsecTrustedCaAutomaticEnrollmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
