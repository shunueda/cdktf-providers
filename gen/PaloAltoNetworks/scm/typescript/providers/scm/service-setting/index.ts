// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#device ServiceSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#folder ServiceSetting#folder}
  */
  readonly folder?: string;
  /**
  * Services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#services ServiceSetting#services}
  */
  readonly services?: ServiceSettingServices;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#snippet ServiceSetting#snippet}
  */
  readonly snippet?: string;
}
export interface ServiceSettingServicesDnsSettingServers {
  /**
  * Primary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#primary ServiceSetting#primary}
  */
  readonly primary?: string;
  /**
  * Secondary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#secondary ServiceSetting#secondary}
  */
  readonly secondary?: string;
}

export function serviceSettingServicesDnsSettingServersToTerraform(struct?: ServiceSettingServicesDnsSettingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function serviceSettingServicesDnsSettingServersToHclTerraform(struct?: ServiceSettingServicesDnsSettingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesDnsSettingServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesDnsSettingServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesDnsSettingServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface ServiceSettingServicesDnsSetting {
  /**
  * Dns proxy object
  * > ℹ️ **Note:** You must specify exactly one of `dns_proxy_object` and `servers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#dns_proxy_object ServiceSetting#dns_proxy_object}
  */
  readonly dnsProxyObject?: string;
  /**
  * Servers
  * > ℹ️ **Note:** You must specify exactly one of `dns_proxy_object` and `servers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#servers ServiceSetting#servers}
  */
  readonly servers?: ServiceSettingServicesDnsSettingServers;
}

export function serviceSettingServicesDnsSettingToTerraform(struct?: ServiceSettingServicesDnsSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_proxy_object: cdktf.stringToTerraform(struct!.dnsProxyObject),
    servers: serviceSettingServicesDnsSettingServersToTerraform(struct!.servers),
  }
}


export function serviceSettingServicesDnsSettingToHclTerraform(struct?: ServiceSettingServicesDnsSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_proxy_object: {
      value: cdktf.stringToHclTerraform(struct!.dnsProxyObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: serviceSettingServicesDnsSettingServersToHclTerraform(struct!.servers),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesDnsSettingServers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesDnsSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesDnsSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsProxyObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsProxyObject = this._dnsProxyObject;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesDnsSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsProxyObject = undefined;
      this._servers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsProxyObject = value.dnsProxyObject;
      this._servers.internalValue = value.servers;
    }
  }

  // dns_proxy_object - computed: false, optional: true, required: false
  private _dnsProxyObject?: string; 
  public get dnsProxyObject() {
    return this.getStringAttribute('dns_proxy_object');
  }
  public set dnsProxyObject(value: string) {
    this._dnsProxyObject = value;
  }
  public resetDnsProxyObject() {
    this._dnsProxyObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyObjectInput() {
    return this._dnsProxyObject;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new ServiceSettingServicesDnsSettingServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }
  public putServers(value: ServiceSettingServicesDnsSettingServers) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey {
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone {
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
  /**
  * Authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#authentication_key ServiceSetting#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
  /**
  * Authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#authentication_key ServiceSetting#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
  /**
  * Md5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#md5 ServiceSetting#md5}
  */
  readonly md5?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5;
  /**
  * Sha1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#sha1 ServiceSetting#sha1}
  */
  readonly sha1?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1;
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct!.md5),
    sha1: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct!.sha1),
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5",
    },
    sha1: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._sha1.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._sha1.internalValue = value.sha1;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#algorithm ServiceSetting#algorithm}
  */
  readonly algorithm?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm;
  /**
  * Key id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#key_id ServiceSetting#key_id}
  */
  readonly keyId?: number;
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct!.algorithm),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm?.internalValue;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = value.algorithm;
      this._keyId = value.keyId;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType {
  /**
  * Autokey
  * > ℹ️ **Note:** You must specify exactly one of `autokey`, `none`, and `symmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#autokey ServiceSetting#autokey}
  */
  readonly autokey?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey;
  /**
  * None
  * > ℹ️ **Note:** You must specify exactly one of `autokey`, `none`, and `symmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#none ServiceSetting#none}
  */
  readonly none?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone;
  /**
  * Symmetric key
  * > ℹ️ **Note:** You must specify exactly one of `autokey`, `none`, and `symmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#symmetric_key ServiceSetting#symmetric_key}
  */
  readonly symmetricKey?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey;
}

export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autokey: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct!.autokey),
    none: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct!.none),
    symmetric_key: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct!.symmetricKey),
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autokey: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct!.autokey),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey",
    },
    none: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone",
    },
    symmetric_key: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct!.symmetricKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autokey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autokey = this._autokey?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._symmetricKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autokey.internalValue = undefined;
      this._none.internalValue = undefined;
      this._symmetricKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autokey.internalValue = value.autokey;
      this._none.internalValue = value.none;
      this._symmetricKey.internalValue = value.symmetricKey;
    }
  }

  // autokey - computed: false, optional: true, required: false
  private _autokey = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }
  public putAutokey(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey) {
    this._autokey.internalValue = value;
  }
  public resetAutokey() {
    this._autokey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
  public putSymmetricKey(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey) {
    this._symmetricKey.internalValue = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey.internalValue;
  }
}
export interface ServiceSettingServicesNtpServersPrimaryNtpServer {
  /**
  * Authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#authentication_type ServiceSetting#authentication_type}
  */
  readonly authenticationType?: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType;
  /**
  * Ntp server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#ntp_server_address ServiceSetting#ntp_server_address}
  */
  readonly ntpServerAddress?: string;
}

export function serviceSettingServicesNtpServersPrimaryNtpServerToTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct!.authenticationType),
    ntp_server_address: cdktf.stringToTerraform(struct!.ntpServerAddress),
  }
}


export function serviceSettingServicesNtpServersPrimaryNtpServerToHclTerraform(struct?: ServiceSettingServicesNtpServersPrimaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct!.authenticationType),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType",
    },
    ntp_server_address: {
      value: cdktf.stringToHclTerraform(struct!.ntpServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersPrimaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersPrimaryNtpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType?.internalValue;
    }
    if (this._ntpServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerAddress = this._ntpServerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersPrimaryNtpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType.internalValue = undefined;
      this._ntpServerAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType.internalValue = value.authenticationType;
      this._ntpServerAddress = value.ntpServerAddress;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType = new ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }
  public putAuthenticationType(value: ServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType) {
    this._authenticationType.internalValue = value;
  }
  public resetAuthenticationType() {
    this._authenticationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType.internalValue;
  }

  // ntp_server_address - computed: false, optional: true, required: false
  private _ntpServerAddress?: string; 
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
  public set ntpServerAddress(value: string) {
    this._ntpServerAddress = value;
  }
  public resetNtpServerAddress() {
    this._ntpServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerAddressInput() {
    return this._ntpServerAddress;
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey {
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone {
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
  /**
  * Authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#authentication_key ServiceSetting#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
  /**
  * Authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#authentication_key ServiceSetting#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
  /**
  * Md5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#md5 ServiceSetting#md5}
  */
  readonly md5?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5;
  /**
  * Sha1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#sha1 ServiceSetting#sha1}
  */
  readonly sha1?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1;
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct!.md5),
    sha1: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct!.sha1),
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5",
    },
    sha1: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._sha1.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._sha1.internalValue = value.sha1;
    }
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#algorithm ServiceSetting#algorithm}
  */
  readonly algorithm?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm;
  /**
  * Key id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#key_id ServiceSetting#key_id}
  */
  readonly keyId?: number;
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct!.algorithm),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm?.internalValue;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = value.algorithm;
      this._keyId = value.keyId;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType {
  /**
  * Autokey
  * > ℹ️ **Note:** You must specify exactly one of `autokey`, `none`, and `symmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#autokey ServiceSetting#autokey}
  */
  readonly autokey?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey;
  /**
  * None
  * > ℹ️ **Note:** You must specify exactly one of `autokey`, `none`, and `symmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#none ServiceSetting#none}
  */
  readonly none?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone;
  /**
  * Symmetric key
  * > ℹ️ **Note:** You must specify exactly one of `autokey`, `none`, and `symmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#symmetric_key ServiceSetting#symmetric_key}
  */
  readonly symmetricKey?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey;
}

export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autokey: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct!.autokey),
    none: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct!.none),
    symmetric_key: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct!.symmetricKey),
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autokey: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct!.autokey),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey",
    },
    none: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone",
    },
    symmetric_key: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct!.symmetricKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autokey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autokey = this._autokey?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._symmetricKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autokey.internalValue = undefined;
      this._none.internalValue = undefined;
      this._symmetricKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autokey.internalValue = value.autokey;
      this._none.internalValue = value.none;
      this._symmetricKey.internalValue = value.symmetricKey;
    }
  }

  // autokey - computed: false, optional: true, required: false
  private _autokey = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }
  public putAutokey(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey) {
    this._autokey.internalValue = value;
  }
  public resetAutokey() {
    this._autokey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
  public putSymmetricKey(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey) {
    this._symmetricKey.internalValue = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey.internalValue;
  }
}
export interface ServiceSettingServicesNtpServersSecondaryNtpServer {
  /**
  * Authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#authentication_type ServiceSetting#authentication_type}
  */
  readonly authenticationType?: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType;
  /**
  * Ntp server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#ntp_server_address ServiceSetting#ntp_server_address}
  */
  readonly ntpServerAddress?: string;
}

export function serviceSettingServicesNtpServersSecondaryNtpServerToTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct!.authenticationType),
    ntp_server_address: cdktf.stringToTerraform(struct!.ntpServerAddress),
  }
}


export function serviceSettingServicesNtpServersSecondaryNtpServerToHclTerraform(struct?: ServiceSettingServicesNtpServersSecondaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct!.authenticationType),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType",
    },
    ntp_server_address: {
      value: cdktf.stringToHclTerraform(struct!.ntpServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersSecondaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServersSecondaryNtpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType?.internalValue;
    }
    if (this._ntpServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerAddress = this._ntpServerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServersSecondaryNtpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType.internalValue = undefined;
      this._ntpServerAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType.internalValue = value.authenticationType;
      this._ntpServerAddress = value.ntpServerAddress;
    }
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType = new ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }
  public putAuthenticationType(value: ServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType) {
    this._authenticationType.internalValue = value;
  }
  public resetAuthenticationType() {
    this._authenticationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType.internalValue;
  }

  // ntp_server_address - computed: false, optional: true, required: false
  private _ntpServerAddress?: string; 
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
  public set ntpServerAddress(value: string) {
    this._ntpServerAddress = value;
  }
  public resetNtpServerAddress() {
    this._ntpServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerAddressInput() {
    return this._ntpServerAddress;
  }
}
export interface ServiceSettingServicesNtpServers {
  /**
  * Primary ntp server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#primary_ntp_server ServiceSetting#primary_ntp_server}
  */
  readonly primaryNtpServer?: ServiceSettingServicesNtpServersPrimaryNtpServer;
  /**
  * Secondary ntp server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#secondary_ntp_server ServiceSetting#secondary_ntp_server}
  */
  readonly secondaryNtpServer?: ServiceSettingServicesNtpServersSecondaryNtpServer;
}

export function serviceSettingServicesNtpServersToTerraform(struct?: ServiceSettingServicesNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_ntp_server: serviceSettingServicesNtpServersPrimaryNtpServerToTerraform(struct!.primaryNtpServer),
    secondary_ntp_server: serviceSettingServicesNtpServersSecondaryNtpServerToTerraform(struct!.secondaryNtpServer),
  }
}


export function serviceSettingServicesNtpServersToHclTerraform(struct?: ServiceSettingServicesNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_ntp_server: {
      value: serviceSettingServicesNtpServersPrimaryNtpServerToHclTerraform(struct!.primaryNtpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersPrimaryNtpServer",
    },
    secondary_ntp_server: {
      value: serviceSettingServicesNtpServersSecondaryNtpServerToHclTerraform(struct!.secondaryNtpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServersSecondaryNtpServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesNtpServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServicesNtpServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryNtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNtpServer = this._primaryNtpServer?.internalValue;
    }
    if (this._secondaryNtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryNtpServer = this._secondaryNtpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServicesNtpServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryNtpServer.internalValue = undefined;
      this._secondaryNtpServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryNtpServer.internalValue = value.primaryNtpServer;
      this._secondaryNtpServer.internalValue = value.secondaryNtpServer;
    }
  }

  // primary_ntp_server - computed: false, optional: true, required: false
  private _primaryNtpServer = new ServiceSettingServicesNtpServersPrimaryNtpServerOutputReference(this, "primary_ntp_server");
  public get primaryNtpServer() {
    return this._primaryNtpServer;
  }
  public putPrimaryNtpServer(value: ServiceSettingServicesNtpServersPrimaryNtpServer) {
    this._primaryNtpServer.internalValue = value;
  }
  public resetPrimaryNtpServer() {
    this._primaryNtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNtpServerInput() {
    return this._primaryNtpServer.internalValue;
  }

  // secondary_ntp_server - computed: false, optional: true, required: false
  private _secondaryNtpServer = new ServiceSettingServicesNtpServersSecondaryNtpServerOutputReference(this, "secondary_ntp_server");
  public get secondaryNtpServer() {
    return this._secondaryNtpServer;
  }
  public putSecondaryNtpServer(value: ServiceSettingServicesNtpServersSecondaryNtpServer) {
    this._secondaryNtpServer.internalValue = value;
  }
  public resetSecondaryNtpServer() {
    this._secondaryNtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNtpServerInput() {
    return this._secondaryNtpServer.internalValue;
  }
}
export interface ServiceSettingServices {
  /**
  * Dns setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#dns_setting ServiceSetting#dns_setting}
  */
  readonly dnsSetting?: ServiceSettingServicesDnsSetting;
  /**
  * Fqdn refresh time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#fqdn_refresh_time ServiceSetting#fqdn_refresh_time}
  */
  readonly fqdnRefreshTime?: number;
  /**
  * Fqdn stale entry timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#fqdn_stale_entry_timeout ServiceSetting#fqdn_stale_entry_timeout}
  */
  readonly fqdnStaleEntryTimeout?: number;
  /**
  * Inline cloud proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#inline_cloud_proxy ServiceSetting#inline_cloud_proxy}
  */
  readonly inlineCloudProxy?: boolean | cdktf.IResolvable;
  /**
  * Lcaas use proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#lcaas_use_proxy ServiceSetting#lcaas_use_proxy}
  */
  readonly lcaasUseProxy?: boolean | cdktf.IResolvable;
  /**
  * Ntp servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#ntp_servers ServiceSetting#ntp_servers}
  */
  readonly ntpServers?: ServiceSettingServicesNtpServers;
  /**
  * Secure proxy password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#secure_proxy_password ServiceSetting#secure_proxy_password}
  */
  readonly secureProxyPassword?: string;
  /**
  * Secure proxy port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#secure_proxy_port ServiceSetting#secure_proxy_port}
  */
  readonly secureProxyPort?: number;
  /**
  * Secure proxy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#secure_proxy_server ServiceSetting#secure_proxy_server}
  */
  readonly secureProxyServer?: string;
  /**
  * Secure proxy user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#secure_proxy_user ServiceSetting#secure_proxy_user}
  */
  readonly secureProxyUser?: string;
  /**
  * Server verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#server_verification ServiceSetting#server_verification}
  */
  readonly serverVerification?: boolean | cdktf.IResolvable;
  /**
  * Update server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#update_server ServiceSetting#update_server}
  */
  readonly updateServer?: string;
}

export function serviceSettingServicesToTerraform(struct?: ServiceSettingServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_setting: serviceSettingServicesDnsSettingToTerraform(struct!.dnsSetting),
    fqdn_refresh_time: cdktf.numberToTerraform(struct!.fqdnRefreshTime),
    fqdn_stale_entry_timeout: cdktf.numberToTerraform(struct!.fqdnStaleEntryTimeout),
    inline_cloud_proxy: cdktf.booleanToTerraform(struct!.inlineCloudProxy),
    lcaas_use_proxy: cdktf.booleanToTerraform(struct!.lcaasUseProxy),
    ntp_servers: serviceSettingServicesNtpServersToTerraform(struct!.ntpServers),
    secure_proxy_password: cdktf.stringToTerraform(struct!.secureProxyPassword),
    secure_proxy_port: cdktf.numberToTerraform(struct!.secureProxyPort),
    secure_proxy_server: cdktf.stringToTerraform(struct!.secureProxyServer),
    secure_proxy_user: cdktf.stringToTerraform(struct!.secureProxyUser),
    server_verification: cdktf.booleanToTerraform(struct!.serverVerification),
    update_server: cdktf.stringToTerraform(struct!.updateServer),
  }
}


export function serviceSettingServicesToHclTerraform(struct?: ServiceSettingServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_setting: {
      value: serviceSettingServicesDnsSettingToHclTerraform(struct!.dnsSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesDnsSetting",
    },
    fqdn_refresh_time: {
      value: cdktf.numberToHclTerraform(struct!.fqdnRefreshTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fqdn_stale_entry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.fqdnStaleEntryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inline_cloud_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.inlineCloudProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lcaas_use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.lcaasUseProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ntp_servers: {
      value: serviceSettingServicesNtpServersToHclTerraform(struct!.ntpServers),
      isBlock: true,
      type: "struct",
      storageClassType: "ServiceSettingServicesNtpServers",
    },
    secure_proxy_password: {
      value: cdktf.stringToHclTerraform(struct!.secureProxyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.secureProxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secure_proxy_server: {
      value: cdktf.stringToHclTerraform(struct!.secureProxyServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_proxy_user: {
      value: cdktf.stringToHclTerraform(struct!.secureProxyUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_verification: {
      value: cdktf.booleanToHclTerraform(struct!.serverVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_server: {
      value: cdktf.stringToHclTerraform(struct!.updateServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSettingServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceSettingServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSetting = this._dnsSetting?.internalValue;
    }
    if (this._fqdnRefreshTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnRefreshTime = this._fqdnRefreshTime;
    }
    if (this._fqdnStaleEntryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnStaleEntryTimeout = this._fqdnStaleEntryTimeout;
    }
    if (this._inlineCloudProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineCloudProxy = this._inlineCloudProxy;
    }
    if (this._lcaasUseProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcaasUseProxy = this._lcaasUseProxy;
    }
    if (this._ntpServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers?.internalValue;
    }
    if (this._secureProxyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureProxyPassword = this._secureProxyPassword;
    }
    if (this._secureProxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureProxyPort = this._secureProxyPort;
    }
    if (this._secureProxyServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureProxyServer = this._secureProxyServer;
    }
    if (this._secureProxyUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureProxyUser = this._secureProxyUser;
    }
    if (this._serverVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVerification = this._serverVerification;
    }
    if (this._updateServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateServer = this._updateServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSettingServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSetting.internalValue = undefined;
      this._fqdnRefreshTime = undefined;
      this._fqdnStaleEntryTimeout = undefined;
      this._inlineCloudProxy = undefined;
      this._lcaasUseProxy = undefined;
      this._ntpServers.internalValue = undefined;
      this._secureProxyPassword = undefined;
      this._secureProxyPort = undefined;
      this._secureProxyServer = undefined;
      this._secureProxyUser = undefined;
      this._serverVerification = undefined;
      this._updateServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSetting.internalValue = value.dnsSetting;
      this._fqdnRefreshTime = value.fqdnRefreshTime;
      this._fqdnStaleEntryTimeout = value.fqdnStaleEntryTimeout;
      this._inlineCloudProxy = value.inlineCloudProxy;
      this._lcaasUseProxy = value.lcaasUseProxy;
      this._ntpServers.internalValue = value.ntpServers;
      this._secureProxyPassword = value.secureProxyPassword;
      this._secureProxyPort = value.secureProxyPort;
      this._secureProxyServer = value.secureProxyServer;
      this._secureProxyUser = value.secureProxyUser;
      this._serverVerification = value.serverVerification;
      this._updateServer = value.updateServer;
    }
  }

  // dns_setting - computed: false, optional: true, required: false
  private _dnsSetting = new ServiceSettingServicesDnsSettingOutputReference(this, "dns_setting");
  public get dnsSetting() {
    return this._dnsSetting;
  }
  public putDnsSetting(value: ServiceSettingServicesDnsSetting) {
    this._dnsSetting.internalValue = value;
  }
  public resetDnsSetting() {
    this._dnsSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSettingInput() {
    return this._dnsSetting.internalValue;
  }

  // fqdn_refresh_time - computed: true, optional: true, required: false
  private _fqdnRefreshTime?: number; 
  public get fqdnRefreshTime() {
    return this.getNumberAttribute('fqdn_refresh_time');
  }
  public set fqdnRefreshTime(value: number) {
    this._fqdnRefreshTime = value;
  }
  public resetFqdnRefreshTime() {
    this._fqdnRefreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnRefreshTimeInput() {
    return this._fqdnRefreshTime;
  }

  // fqdn_stale_entry_timeout - computed: true, optional: true, required: false
  private _fqdnStaleEntryTimeout?: number; 
  public get fqdnStaleEntryTimeout() {
    return this.getNumberAttribute('fqdn_stale_entry_timeout');
  }
  public set fqdnStaleEntryTimeout(value: number) {
    this._fqdnStaleEntryTimeout = value;
  }
  public resetFqdnStaleEntryTimeout() {
    this._fqdnStaleEntryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnStaleEntryTimeoutInput() {
    return this._fqdnStaleEntryTimeout;
  }

  // inline_cloud_proxy - computed: true, optional: true, required: false
  private _inlineCloudProxy?: boolean | cdktf.IResolvable; 
  public get inlineCloudProxy() {
    return this.getBooleanAttribute('inline_cloud_proxy');
  }
  public set inlineCloudProxy(value: boolean | cdktf.IResolvable) {
    this._inlineCloudProxy = value;
  }
  public resetInlineCloudProxy() {
    this._inlineCloudProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineCloudProxyInput() {
    return this._inlineCloudProxy;
  }

  // lcaas_use_proxy - computed: true, optional: true, required: false
  private _lcaasUseProxy?: boolean | cdktf.IResolvable; 
  public get lcaasUseProxy() {
    return this.getBooleanAttribute('lcaas_use_proxy');
  }
  public set lcaasUseProxy(value: boolean | cdktf.IResolvable) {
    this._lcaasUseProxy = value;
  }
  public resetLcaasUseProxy() {
    this._lcaasUseProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcaasUseProxyInput() {
    return this._lcaasUseProxy;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers = new ServiceSettingServicesNtpServersOutputReference(this, "ntp_servers");
  public get ntpServers() {
    return this._ntpServers;
  }
  public putNtpServers(value: ServiceSettingServicesNtpServers) {
    this._ntpServers.internalValue = value;
  }
  public resetNtpServers() {
    this._ntpServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers.internalValue;
  }

  // secure_proxy_password - computed: false, optional: true, required: false
  private _secureProxyPassword?: string; 
  public get secureProxyPassword() {
    return this.getStringAttribute('secure_proxy_password');
  }
  public set secureProxyPassword(value: string) {
    this._secureProxyPassword = value;
  }
  public resetSecureProxyPassword() {
    this._secureProxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureProxyPasswordInput() {
    return this._secureProxyPassword;
  }

  // secure_proxy_port - computed: false, optional: true, required: false
  private _secureProxyPort?: number; 
  public get secureProxyPort() {
    return this.getNumberAttribute('secure_proxy_port');
  }
  public set secureProxyPort(value: number) {
    this._secureProxyPort = value;
  }
  public resetSecureProxyPort() {
    this._secureProxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureProxyPortInput() {
    return this._secureProxyPort;
  }

  // secure_proxy_server - computed: false, optional: true, required: false
  private _secureProxyServer?: string; 
  public get secureProxyServer() {
    return this.getStringAttribute('secure_proxy_server');
  }
  public set secureProxyServer(value: string) {
    this._secureProxyServer = value;
  }
  public resetSecureProxyServer() {
    this._secureProxyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureProxyServerInput() {
    return this._secureProxyServer;
  }

  // secure_proxy_user - computed: false, optional: true, required: false
  private _secureProxyUser?: string; 
  public get secureProxyUser() {
    return this.getStringAttribute('secure_proxy_user');
  }
  public set secureProxyUser(value: string) {
    this._secureProxyUser = value;
  }
  public resetSecureProxyUser() {
    this._secureProxyUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureProxyUserInput() {
    return this._secureProxyUser;
  }

  // server_verification - computed: true, optional: true, required: false
  private _serverVerification?: boolean | cdktf.IResolvable; 
  public get serverVerification() {
    return this.getBooleanAttribute('server_verification');
  }
  public set serverVerification(value: boolean | cdktf.IResolvable) {
    this._serverVerification = value;
  }
  public resetServerVerification() {
    this._serverVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVerificationInput() {
    return this._serverVerification;
  }

  // update_server - computed: true, optional: true, required: false
  private _updateServer?: string; 
  public get updateServer() {
    return this.getStringAttribute('update_server');
  }
  public set updateServer(value: string) {
    this._updateServer = value;
  }
  public resetUpdateServer() {
    this._updateServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateServerInput() {
    return this._updateServer;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting scm_service_setting}
*/
export class ServiceSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_service_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceSetting to import
  * @param importFromId The id of the existing ServiceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_service_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/service_setting scm_service_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_service_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._services.internalValue = config.services;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // services - computed: false, optional: true, required: false
  private _services = new ServiceSettingServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: ServiceSettingServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      services: serviceSettingServicesToTerraform(this._services.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: serviceSettingServicesToHclTerraform(this._services.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceSettingServices",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
