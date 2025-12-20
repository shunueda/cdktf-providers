// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmServiceSettingListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#device DataScmServiceSettingList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#folder DataScmServiceSettingList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#limit DataScmServiceSettingList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#name DataScmServiceSettingList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#offset DataScmServiceSettingList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#snippet DataScmServiceSettingList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmServiceSettingListDataServicesDnsSettingServers {
}

export function dataScmServiceSettingListDataServicesDnsSettingServersToTerraform(struct?: DataScmServiceSettingListDataServicesDnsSettingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesDnsSettingServersToHclTerraform(struct?: DataScmServiceSettingListDataServicesDnsSettingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesDnsSettingServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesDnsSettingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesDnsSettingServers | undefined) {
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
export interface DataScmServiceSettingListDataServicesDnsSetting {
}

export function dataScmServiceSettingListDataServicesDnsSettingToTerraform(struct?: DataScmServiceSettingListDataServicesDnsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesDnsSettingToHclTerraform(struct?: DataScmServiceSettingListDataServicesDnsSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesDnsSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesDnsSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesDnsSetting | undefined) {
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
  private _servers = new DataScmServiceSettingListDataServicesDnsSettingServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNone {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined) {
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
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined) {
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
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  private _algorithm = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationType {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autokey - computed: true, optional: false, required: false
  private _autokey = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // symmetric_key - computed: true, optional: false, required: false
  private _symmetricKey = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServer {
}

export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  private _authenticationType = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }

  // ntp_server_address - computed: true, optional: false, required: false
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNone {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | undefined) {
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
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | undefined) {
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
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // md5 - computed: true, optional: false, required: false
  private _md5 = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }

  // sha1 - computed: true, optional: false, required: false
  private _sha1 = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  private _algorithm = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationType {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autokey - computed: true, optional: false, required: false
  private _autokey = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }

  // none - computed: true, optional: false, required: false
  private _none = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }

  // symmetric_key - computed: true, optional: false, required: false
  private _symmetricKey = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
}
export interface DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServer {
}

export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  private _authenticationType = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }

  // ntp_server_address - computed: true, optional: false, required: false
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
}
export interface DataScmServiceSettingListDataServicesNtpServers {
}

export function dataScmServiceSettingListDataServicesNtpServersToTerraform(struct?: DataScmServiceSettingListDataServicesNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesNtpServersToHclTerraform(struct?: DataScmServiceSettingListDataServicesNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesNtpServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServicesNtpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServicesNtpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary_ntp_server - computed: true, optional: false, required: false
  private _primaryNtpServer = new DataScmServiceSettingListDataServicesNtpServersPrimaryNtpServerOutputReference(this, "primary_ntp_server");
  public get primaryNtpServer() {
    return this._primaryNtpServer;
  }

  // secondary_ntp_server - computed: true, optional: false, required: false
  private _secondaryNtpServer = new DataScmServiceSettingListDataServicesNtpServersSecondaryNtpServerOutputReference(this, "secondary_ntp_server");
  public get secondaryNtpServer() {
    return this._secondaryNtpServer;
  }
}
export interface DataScmServiceSettingListDataServices {
}

export function dataScmServiceSettingListDataServicesToTerraform(struct?: DataScmServiceSettingListDataServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceSettingListDataServicesToHclTerraform(struct?: DataScmServiceSettingListDataServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceSettingListDataServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceSettingListDataServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListDataServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_setting - computed: true, optional: false, required: false
  private _dnsSetting = new DataScmServiceSettingListDataServicesDnsSettingOutputReference(this, "dns_setting");
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
  private _ntpServers = new DataScmServiceSettingListDataServicesNtpServersOutputReference(this, "ntp_servers");
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
export interface DataScmServiceSettingListData {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#device DataScmServiceSettingList#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#folder DataScmServiceSettingList#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#id DataScmServiceSettingList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#snippet DataScmServiceSettingList#snippet}
  */
  readonly snippet?: string;
}

export function dataScmServiceSettingListDataToTerraform(struct?: DataScmServiceSettingListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    folder: cdktf.stringToTerraform(struct!.folder),
    id: cdktf.stringToTerraform(struct!.id),
    snippet: cdktf.stringToTerraform(struct!.snippet),
  }
}


export function dataScmServiceSettingListDataToHclTerraform(struct?: DataScmServiceSettingListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet: {
      value: cdktf.stringToHclTerraform(struct!.snippet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmServiceSettingListDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmServiceSettingListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._snippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippet = this._snippet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceSettingListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._folder = undefined;
      this._id = undefined;
      this._snippet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._folder = value.folder;
      this._id = value.id;
      this._snippet = value.snippet;
    }
  }

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

  // id - computed: true, optional: false, required: true
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
  private _services = new DataScmServiceSettingListDataServicesOutputReference(this, "services");
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
}

export class DataScmServiceSettingListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmServiceSettingListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmServiceSettingListDataOutputReference {
    return new DataScmServiceSettingListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list scm_service_setting_list}
*/
export class DataScmServiceSettingList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_service_setting_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmServiceSettingList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmServiceSettingList to import
  * @param importFromId The id of the existing DataScmServiceSettingList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmServiceSettingList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_service_setting_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_setting_list scm_service_setting_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmServiceSettingListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmServiceSettingListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_service_setting_list',
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
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmServiceSettingListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
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
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
