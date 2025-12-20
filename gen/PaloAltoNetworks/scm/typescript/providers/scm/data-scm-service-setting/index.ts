// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmServiceSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting#device DataScmServiceSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting#folder DataScmServiceSetting#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting#id DataScmServiceSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting#snippet DataScmServiceSetting#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmServiceSettingServicesDnsSettingServers {
}

export function dataScmServiceSettingServicesDnsSettingServersToTerraform(struct?: DataScmServiceSettingServicesDnsSettingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesDnsSettingServersToHclTerraform(struct?: DataScmServiceSettingServicesDnsSettingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesDnsSettingServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesDnsSettingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesDnsSettingServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // secondary - computed: true, optional: false, required: false
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
}
export interface DataScmServiceSettingServicesDnsSetting {
}

export function dataScmServiceSettingServicesDnsSettingToTerraform(struct?: DataScmServiceSettingServicesDnsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesDnsSettingToHclTerraform(struct?: DataScmServiceSettingServicesDnsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesDnsSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesDnsSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesDnsSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_proxy_object - computed: true, optional: false, required: false
  public get dnsProxyObject() {
    return this.getStringAttribute('dns_proxy_object');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataScmServiceSettingServicesDnsSettingServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  private _algorithm = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autokey - computed: true, optional: false, required: false
  private _autokey = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // symmetric_key - computed: true, optional: false, required: false
  private _symmetricKey = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
}
export interface DataScmServiceSettingServicesNtpServersPrimaryNtpServer {
}

export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerToTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersPrimaryNtpServerToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersPrimaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersPrimaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersPrimaryNtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersPrimaryNtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  private _authenticationType = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }

  // ntp_server_address - computed: true, optional: false, required: false
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_key - computed: true, optional: false, required: false
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  private _algorithm = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autokey - computed: true, optional: false, required: false
  private _autokey = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // symmetric_key - computed: true, optional: false, required: false
  private _symmetricKey = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
}
export interface DataScmServiceSettingServicesNtpServersSecondaryNtpServer {
}

export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerToTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersSecondaryNtpServerToHclTerraform(struct?: DataScmServiceSettingServicesNtpServersSecondaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersSecondaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServersSecondaryNtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServersSecondaryNtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  private _authenticationType = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }

  // ntp_server_address - computed: true, optional: false, required: false
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
}
export interface DataScmServiceSettingServicesNtpServers {
}

export function dataScmServiceSettingServicesNtpServersToTerraform(struct?: DataScmServiceSettingServicesNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesNtpServersToHclTerraform(struct?: DataScmServiceSettingServicesNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesNtpServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServicesNtpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServicesNtpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_ntp_server - computed: true, optional: false, required: false
  private _primaryNtpServer = new DataScmServiceSettingServicesNtpServersPrimaryNtpServerOutputReference(this, "primary_ntp_server");
  public get primaryNtpServer() {
    return this._primaryNtpServer;
  }

  // secondary_ntp_server - computed: true, optional: false, required: false
  private _secondaryNtpServer = new DataScmServiceSettingServicesNtpServersSecondaryNtpServerOutputReference(this, "secondary_ntp_server");
  public get secondaryNtpServer() {
    return this._secondaryNtpServer;
  }
}
export interface DataScmServiceSettingServices {
}

export function dataScmServiceSettingServicesToTerraform(struct?: DataScmServiceSettingServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingServicesToHclTerraform(struct?: DataScmServiceSettingServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_setting - computed: true, optional: false, required: false
  private _dnsSetting = new DataScmServiceSettingServicesDnsSettingOutputReference(this, "dns_setting");
  public get dnsSetting() {
    return this._dnsSetting;
  }

  // fqdn_refresh_time - computed: true, optional: false, required: false
  public get fqdnRefreshTime() {
    return this.getNumberAttribute('fqdn_refresh_time');
  }

  // fqdn_stale_entry_timeout - computed: true, optional: false, required: false
  public get fqdnStaleEntryTimeout() {
    return this.getNumberAttribute('fqdn_stale_entry_timeout');
  }

  // inline_cloud_proxy - computed: true, optional: false, required: false
  public get inlineCloudProxy() {
    return this.getBooleanAttribute('inline_cloud_proxy');
  }

  // lcaas_use_proxy - computed: true, optional: false, required: false
  public get lcaasUseProxy() {
    return this.getBooleanAttribute('lcaas_use_proxy');
  }

  // ntp_servers - computed: true, optional: false, required: false
  private _ntpServers = new DataScmServiceSettingServicesNtpServersOutputReference(this, "ntp_servers");
  public get ntpServers() {
    return this._ntpServers;
  }

  // secure_proxy_password - computed: true, optional: false, required: false
  public get secureProxyPassword() {
    return this.getStringAttribute('secure_proxy_password');
  }

  // secure_proxy_port - computed: true, optional: false, required: false
  public get secureProxyPort() {
    return this.getNumberAttribute('secure_proxy_port');
  }

  // secure_proxy_server - computed: true, optional: false, required: false
  public get secureProxyServer() {
    return this.getStringAttribute('secure_proxy_server');
  }

  // secure_proxy_user - computed: true, optional: false, required: false
  public get secureProxyUser() {
    return this.getStringAttribute('secure_proxy_user');
  }

  // server_verification - computed: true, optional: false, required: false
  public get serverVerification() {
    return this.getBooleanAttribute('server_verification');
  }

  // update_server - computed: true, optional: false, required: false
  public get updateServer() {
    return this.getStringAttribute('update_server');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting scm_service_setting}
*/
export class DataScmServiceSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_service_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmServiceSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmServiceSetting to import
  * @param importFromId The id of the existing DataScmServiceSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmServiceSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_service_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting scm_service_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmServiceSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmServiceSettingConfig) {
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
    this._id = config.id;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: true, required: false
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

  // folder - computed: true, optional: true, required: false
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataScmServiceSettingServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }

  // snippet - computed: true, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
