// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationpersistenceprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#description Applicationpersistenceprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#id Applicationpersistenceprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#is_federated Applicationpersistenceprofile#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#name Applicationpersistenceprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#persistence_type Applicationpersistenceprofile#persistence_type}
  */
  readonly persistenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#persistence_update_interval Applicationpersistenceprofile#persistence_update_interval}
  */
  readonly persistenceUpdateInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#server_hm_down_recovery Applicationpersistenceprofile#server_hm_down_recovery}
  */
  readonly serverHmDownRecovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#tenant_ref Applicationpersistenceprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#uuid Applicationpersistenceprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * app_cookie_persistence_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#app_cookie_persistence_profile Applicationpersistenceprofile#app_cookie_persistence_profile}
  */
  readonly appCookiePersistenceProfile?: ApplicationpersistenceprofileAppCookiePersistenceProfile[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#configpb_attributes Applicationpersistenceprofile#configpb_attributes}
  */
  readonly configpbAttributes?: ApplicationpersistenceprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * hdr_persistence_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#hdr_persistence_profile Applicationpersistenceprofile#hdr_persistence_profile}
  */
  readonly hdrPersistenceProfile?: ApplicationpersistenceprofileHdrPersistenceProfile[] | cdktf.IResolvable;
  /**
  * http_cookie_persistence_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#http_cookie_persistence_profile Applicationpersistenceprofile#http_cookie_persistence_profile}
  */
  readonly httpCookiePersistenceProfile?: ApplicationpersistenceprofileHttpCookiePersistenceProfile[] | cdktf.IResolvable;
  /**
  * ip_persistence_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#ip_persistence_profile Applicationpersistenceprofile#ip_persistence_profile}
  */
  readonly ipPersistenceProfile?: ApplicationpersistenceprofileIpPersistenceProfile[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#markers Applicationpersistenceprofile#markers}
  */
  readonly markers?: ApplicationpersistenceprofileMarkers[] | cdktf.IResolvable;
}
export interface ApplicationpersistenceprofileAppCookiePersistenceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#encryption_key Applicationpersistenceprofile#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#prst_hdr_name Applicationpersistenceprofile#prst_hdr_name}
  */
  readonly prstHdrName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#timeout Applicationpersistenceprofile#timeout}
  */
  readonly timeout?: string;
}

export function applicationpersistenceprofileAppCookiePersistenceProfileToTerraform(struct?: ApplicationpersistenceprofileAppCookiePersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    prst_hdr_name: cdktf.stringToTerraform(struct!.prstHdrName),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function applicationpersistenceprofileAppCookiePersistenceProfileToHclTerraform(struct?: ApplicationpersistenceprofileAppCookiePersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prst_hdr_name: {
      value: cdktf.stringToHclTerraform(struct!.prstHdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileAppCookiePersistenceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileAppCookiePersistenceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._prstHdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prstHdrName = this._prstHdrName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileAppCookiePersistenceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionKey = undefined;
      this._prstHdrName = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionKey = value.encryptionKey;
      this._prstHdrName = value.prstHdrName;
      this._timeout = value.timeout;
    }
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // prst_hdr_name - computed: false, optional: false, required: true
  private _prstHdrName?: string; 
  public get prstHdrName() {
    return this.getStringAttribute('prst_hdr_name');
  }
  public set prstHdrName(value: string) {
    this._prstHdrName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prstHdrNameInput() {
    return this._prstHdrName;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class ApplicationpersistenceprofileAppCookiePersistenceProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileAppCookiePersistenceProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileAppCookiePersistenceProfileOutputReference {
    return new ApplicationpersistenceprofileAppCookiePersistenceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationpersistenceprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#version Applicationpersistenceprofile#version}
  */
  readonly version?: string;
}

export function applicationpersistenceprofileConfigpbAttributesToTerraform(struct?: ApplicationpersistenceprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationpersistenceprofileConfigpbAttributesToHclTerraform(struct?: ApplicationpersistenceprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
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

export class ApplicationpersistenceprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileConfigpbAttributesOutputReference {
    return new ApplicationpersistenceprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationpersistenceprofileHdrPersistenceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#prst_hdr_name Applicationpersistenceprofile#prst_hdr_name}
  */
  readonly prstHdrName?: string;
}

export function applicationpersistenceprofileHdrPersistenceProfileToTerraform(struct?: ApplicationpersistenceprofileHdrPersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prst_hdr_name: cdktf.stringToTerraform(struct!.prstHdrName),
  }
}


export function applicationpersistenceprofileHdrPersistenceProfileToHclTerraform(struct?: ApplicationpersistenceprofileHdrPersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prst_hdr_name: {
      value: cdktf.stringToHclTerraform(struct!.prstHdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileHdrPersistenceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileHdrPersistenceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prstHdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prstHdrName = this._prstHdrName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileHdrPersistenceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prstHdrName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prstHdrName = value.prstHdrName;
    }
  }

  // prst_hdr_name - computed: true, optional: true, required: false
  private _prstHdrName?: string; 
  public get prstHdrName() {
    return this.getStringAttribute('prst_hdr_name');
  }
  public set prstHdrName(value: string) {
    this._prstHdrName = value;
  }
  public resetPrstHdrName() {
    this._prstHdrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prstHdrNameInput() {
    return this._prstHdrName;
  }
}

export class ApplicationpersistenceprofileHdrPersistenceProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileHdrPersistenceProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileHdrPersistenceProfileOutputReference {
    return new ApplicationpersistenceprofileHdrPersistenceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationpersistenceprofileHttpCookiePersistenceProfileKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#aes_key Applicationpersistenceprofile#aes_key}
  */
  readonly aesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#hmac_key Applicationpersistenceprofile#hmac_key}
  */
  readonly hmacKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#name Applicationpersistenceprofile#name}
  */
  readonly name?: string;
}

export function applicationpersistenceprofileHttpCookiePersistenceProfileKeyToTerraform(struct?: ApplicationpersistenceprofileHttpCookiePersistenceProfileKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aes_key: cdktf.stringToTerraform(struct!.aesKey),
    hmac_key: cdktf.stringToTerraform(struct!.hmacKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationpersistenceprofileHttpCookiePersistenceProfileKeyToHclTerraform(struct?: ApplicationpersistenceprofileHttpCookiePersistenceProfileKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aes_key: {
      value: cdktf.stringToHclTerraform(struct!.aesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hmac_key: {
      value: cdktf.stringToHclTerraform(struct!.hmacKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileHttpCookiePersistenceProfileKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileHttpCookiePersistenceProfileKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aesKey = this._aesKey;
    }
    if (this._hmacKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKey = this._hmacKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileHttpCookiePersistenceProfileKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aesKey = undefined;
      this._hmacKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aesKey = value.aesKey;
      this._hmacKey = value.hmacKey;
      this._name = value.name;
    }
  }

  // aes_key - computed: true, optional: true, required: false
  private _aesKey?: string; 
  public get aesKey() {
    return this.getStringAttribute('aes_key');
  }
  public set aesKey(value: string) {
    this._aesKey = value;
  }
  public resetAesKey() {
    this._aesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesKeyInput() {
    return this._aesKey;
  }

  // hmac_key - computed: true, optional: true, required: false
  private _hmacKey?: string; 
  public get hmacKey() {
    return this.getStringAttribute('hmac_key');
  }
  public set hmacKey(value: string) {
    this._hmacKey = value;
  }
  public resetHmacKey() {
    this._hmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeyInput() {
    return this._hmacKey;
  }

  // name - computed: true, optional: true, required: false
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
}

export class ApplicationpersistenceprofileHttpCookiePersistenceProfileKeyList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileHttpCookiePersistenceProfileKey[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileHttpCookiePersistenceProfileKeyOutputReference {
    return new ApplicationpersistenceprofileHttpCookiePersistenceProfileKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationpersistenceprofileHttpCookiePersistenceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#always_send_cookie Applicationpersistenceprofile#always_send_cookie}
  */
  readonly alwaysSendCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#cookie_name Applicationpersistenceprofile#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#encryption_key Applicationpersistenceprofile#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#http_only Applicationpersistenceprofile#http_only}
  */
  readonly httpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#is_persistent_cookie Applicationpersistenceprofile#is_persistent_cookie}
  */
  readonly isPersistentCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#timeout Applicationpersistenceprofile#timeout}
  */
  readonly timeout?: string;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#key Applicationpersistenceprofile#key}
  */
  readonly key?: ApplicationpersistenceprofileHttpCookiePersistenceProfileKey[] | cdktf.IResolvable;
}

export function applicationpersistenceprofileHttpCookiePersistenceProfileToTerraform(struct?: ApplicationpersistenceprofileHttpCookiePersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_send_cookie: cdktf.stringToTerraform(struct!.alwaysSendCookie),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    http_only: cdktf.stringToTerraform(struct!.httpOnly),
    is_persistent_cookie: cdktf.stringToTerraform(struct!.isPersistentCookie),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    key: cdktf.listMapper(applicationpersistenceprofileHttpCookiePersistenceProfileKeyToTerraform, true)(struct!.key),
  }
}


export function applicationpersistenceprofileHttpCookiePersistenceProfileToHclTerraform(struct?: ApplicationpersistenceprofileHttpCookiePersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_send_cookie: {
      value: cdktf.stringToHclTerraform(struct!.alwaysSendCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_only: {
      value: cdktf.stringToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_persistent_cookie: {
      value: cdktf.stringToHclTerraform(struct!.isPersistentCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.listMapperHcl(applicationpersistenceprofileHttpCookiePersistenceProfileKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationpersistenceprofileHttpCookiePersistenceProfileKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileHttpCookiePersistenceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileHttpCookiePersistenceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysSendCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysSendCookie = this._alwaysSendCookie;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._isPersistentCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPersistentCookie = this._isPersistentCookie;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileHttpCookiePersistenceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysSendCookie = undefined;
      this._cookieName = undefined;
      this._encryptionKey = undefined;
      this._httpOnly = undefined;
      this._isPersistentCookie = undefined;
      this._timeout = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysSendCookie = value.alwaysSendCookie;
      this._cookieName = value.cookieName;
      this._encryptionKey = value.encryptionKey;
      this._httpOnly = value.httpOnly;
      this._isPersistentCookie = value.isPersistentCookie;
      this._timeout = value.timeout;
      this._key.internalValue = value.key;
    }
  }

  // always_send_cookie - computed: false, optional: true, required: false
  private _alwaysSendCookie?: string; 
  public get alwaysSendCookie() {
    return this.getStringAttribute('always_send_cookie');
  }
  public set alwaysSendCookie(value: string) {
    this._alwaysSendCookie = value;
  }
  public resetAlwaysSendCookie() {
    this._alwaysSendCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSendCookieInput() {
    return this._alwaysSendCookie;
  }

  // cookie_name - computed: true, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: string; 
  public get httpOnly() {
    return this.getStringAttribute('http_only');
  }
  public set httpOnly(value: string) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
  }

  // is_persistent_cookie - computed: false, optional: true, required: false
  private _isPersistentCookie?: string; 
  public get isPersistentCookie() {
    return this.getStringAttribute('is_persistent_cookie');
  }
  public set isPersistentCookie(value: string) {
    this._isPersistentCookie = value;
  }
  public resetIsPersistentCookie() {
    this._isPersistentCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPersistentCookieInput() {
    return this._isPersistentCookie;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ApplicationpersistenceprofileHttpCookiePersistenceProfileKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: ApplicationpersistenceprofileHttpCookiePersistenceProfileKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class ApplicationpersistenceprofileHttpCookiePersistenceProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileHttpCookiePersistenceProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileHttpCookiePersistenceProfileOutputReference {
    return new ApplicationpersistenceprofileHttpCookiePersistenceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationpersistenceprofileIpPersistenceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#ip_mask Applicationpersistenceprofile#ip_mask}
  */
  readonly ipMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#ip_persistent_timeout Applicationpersistenceprofile#ip_persistent_timeout}
  */
  readonly ipPersistentTimeout?: string;
}

export function applicationpersistenceprofileIpPersistenceProfileToTerraform(struct?: ApplicationpersistenceprofileIpPersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
    ip_persistent_timeout: cdktf.stringToTerraform(struct!.ipPersistentTimeout),
  }
}


export function applicationpersistenceprofileIpPersistenceProfileToHclTerraform(struct?: ApplicationpersistenceprofileIpPersistenceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_persistent_timeout: {
      value: cdktf.stringToHclTerraform(struct!.ipPersistentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileIpPersistenceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileIpPersistenceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMask = this._ipMask;
    }
    if (this._ipPersistentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPersistentTimeout = this._ipPersistentTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileIpPersistenceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipMask = undefined;
      this._ipPersistentTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipMask = value.ipMask;
      this._ipPersistentTimeout = value.ipPersistentTimeout;
    }
  }

  // ip_mask - computed: true, optional: true, required: false
  private _ipMask?: string; 
  public get ipMask() {
    return this.getStringAttribute('ip_mask');
  }
  public set ipMask(value: string) {
    this._ipMask = value;
  }
  public resetIpMask() {
    this._ipMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskInput() {
    return this._ipMask;
  }

  // ip_persistent_timeout - computed: false, optional: true, required: false
  private _ipPersistentTimeout?: string; 
  public get ipPersistentTimeout() {
    return this.getStringAttribute('ip_persistent_timeout');
  }
  public set ipPersistentTimeout(value: string) {
    this._ipPersistentTimeout = value;
  }
  public resetIpPersistentTimeout() {
    this._ipPersistentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPersistentTimeoutInput() {
    return this._ipPersistentTimeout;
  }
}

export class ApplicationpersistenceprofileIpPersistenceProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileIpPersistenceProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileIpPersistenceProfileOutputReference {
    return new ApplicationpersistenceprofileIpPersistenceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationpersistenceprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#key Applicationpersistenceprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#values Applicationpersistenceprofile#values}
  */
  readonly values?: string[];
}

export function applicationpersistenceprofileMarkersToTerraform(struct?: ApplicationpersistenceprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function applicationpersistenceprofileMarkersToHclTerraform(struct?: ApplicationpersistenceprofileMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationpersistenceprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationpersistenceprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationpersistenceprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApplicationpersistenceprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : ApplicationpersistenceprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): ApplicationpersistenceprofileMarkersOutputReference {
    return new ApplicationpersistenceprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile avi_applicationpersistenceprofile}
*/
export class Applicationpersistenceprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_applicationpersistenceprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Applicationpersistenceprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Applicationpersistenceprofile to import
  * @param importFromId The id of the existing Applicationpersistenceprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Applicationpersistenceprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_applicationpersistenceprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationpersistenceprofile avi_applicationpersistenceprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationpersistenceprofileConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationpersistenceprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_applicationpersistenceprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._isFederated = config.isFederated;
    this._name = config.name;
    this._persistenceType = config.persistenceType;
    this._persistenceUpdateInterval = config.persistenceUpdateInterval;
    this._serverHmDownRecovery = config.serverHmDownRecovery;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._appCookiePersistenceProfile.internalValue = config.appCookiePersistenceProfile;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._hdrPersistenceProfile.internalValue = config.hdrPersistenceProfile;
    this._httpCookiePersistenceProfile.internalValue = config.httpCookiePersistenceProfile;
    this._ipPersistenceProfile.internalValue = config.ipPersistenceProfile;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
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

  // persistence_type - computed: false, optional: false, required: true
  private _persistenceType?: string; 
  public get persistenceType() {
    return this.getStringAttribute('persistence_type');
  }
  public set persistenceType(value: string) {
    this._persistenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTypeInput() {
    return this._persistenceType;
  }

  // persistence_update_interval - computed: true, optional: true, required: false
  private _persistenceUpdateInterval?: string; 
  public get persistenceUpdateInterval() {
    return this.getStringAttribute('persistence_update_interval');
  }
  public set persistenceUpdateInterval(value: string) {
    this._persistenceUpdateInterval = value;
  }
  public resetPersistenceUpdateInterval() {
    this._persistenceUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceUpdateIntervalInput() {
    return this._persistenceUpdateInterval;
  }

  // server_hm_down_recovery - computed: false, optional: true, required: false
  private _serverHmDownRecovery?: string; 
  public get serverHmDownRecovery() {
    return this.getStringAttribute('server_hm_down_recovery');
  }
  public set serverHmDownRecovery(value: string) {
    this._serverHmDownRecovery = value;
  }
  public resetServerHmDownRecovery() {
    this._serverHmDownRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHmDownRecoveryInput() {
    return this._serverHmDownRecovery;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // app_cookie_persistence_profile - computed: false, optional: true, required: false
  private _appCookiePersistenceProfile = new ApplicationpersistenceprofileAppCookiePersistenceProfileList(this, "app_cookie_persistence_profile", true);
  public get appCookiePersistenceProfile() {
    return this._appCookiePersistenceProfile;
  }
  public putAppCookiePersistenceProfile(value: ApplicationpersistenceprofileAppCookiePersistenceProfile[] | cdktf.IResolvable) {
    this._appCookiePersistenceProfile.internalValue = value;
  }
  public resetAppCookiePersistenceProfile() {
    this._appCookiePersistenceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appCookiePersistenceProfileInput() {
    return this._appCookiePersistenceProfile.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ApplicationpersistenceprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ApplicationpersistenceprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // hdr_persistence_profile - computed: false, optional: true, required: false
  private _hdrPersistenceProfile = new ApplicationpersistenceprofileHdrPersistenceProfileList(this, "hdr_persistence_profile", true);
  public get hdrPersistenceProfile() {
    return this._hdrPersistenceProfile;
  }
  public putHdrPersistenceProfile(value: ApplicationpersistenceprofileHdrPersistenceProfile[] | cdktf.IResolvable) {
    this._hdrPersistenceProfile.internalValue = value;
  }
  public resetHdrPersistenceProfile() {
    this._hdrPersistenceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrPersistenceProfileInput() {
    return this._hdrPersistenceProfile.internalValue;
  }

  // http_cookie_persistence_profile - computed: false, optional: true, required: false
  private _httpCookiePersistenceProfile = new ApplicationpersistenceprofileHttpCookiePersistenceProfileList(this, "http_cookie_persistence_profile", true);
  public get httpCookiePersistenceProfile() {
    return this._httpCookiePersistenceProfile;
  }
  public putHttpCookiePersistenceProfile(value: ApplicationpersistenceprofileHttpCookiePersistenceProfile[] | cdktf.IResolvable) {
    this._httpCookiePersistenceProfile.internalValue = value;
  }
  public resetHttpCookiePersistenceProfile() {
    this._httpCookiePersistenceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookiePersistenceProfileInput() {
    return this._httpCookiePersistenceProfile.internalValue;
  }

  // ip_persistence_profile - computed: false, optional: true, required: false
  private _ipPersistenceProfile = new ApplicationpersistenceprofileIpPersistenceProfileList(this, "ip_persistence_profile", true);
  public get ipPersistenceProfile() {
    return this._ipPersistenceProfile;
  }
  public putIpPersistenceProfile(value: ApplicationpersistenceprofileIpPersistenceProfile[] | cdktf.IResolvable) {
    this._ipPersistenceProfile.internalValue = value;
  }
  public resetIpPersistenceProfile() {
    this._ipPersistenceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPersistenceProfileInput() {
    return this._ipPersistenceProfile.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new ApplicationpersistenceprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: ApplicationpersistenceprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      name: cdktf.stringToTerraform(this._name),
      persistence_type: cdktf.stringToTerraform(this._persistenceType),
      persistence_update_interval: cdktf.stringToTerraform(this._persistenceUpdateInterval),
      server_hm_down_recovery: cdktf.stringToTerraform(this._serverHmDownRecovery),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      app_cookie_persistence_profile: cdktf.listMapper(applicationpersistenceprofileAppCookiePersistenceProfileToTerraform, true)(this._appCookiePersistenceProfile.internalValue),
      configpb_attributes: cdktf.listMapper(applicationpersistenceprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      hdr_persistence_profile: cdktf.listMapper(applicationpersistenceprofileHdrPersistenceProfileToTerraform, true)(this._hdrPersistenceProfile.internalValue),
      http_cookie_persistence_profile: cdktf.listMapper(applicationpersistenceprofileHttpCookiePersistenceProfileToTerraform, true)(this._httpCookiePersistenceProfile.internalValue),
      ip_persistence_profile: cdktf.listMapper(applicationpersistenceprofileIpPersistenceProfileToTerraform, true)(this._ipPersistenceProfile.internalValue),
      markers: cdktf.listMapper(applicationpersistenceprofileMarkersToTerraform, true)(this._markers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_type: {
        value: cdktf.stringToHclTerraform(this._persistenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_update_interval: {
        value: cdktf.stringToHclTerraform(this._persistenceUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_hm_down_recovery: {
        value: cdktf.stringToHclTerraform(this._serverHmDownRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      app_cookie_persistence_profile: {
        value: cdktf.listMapperHcl(applicationpersistenceprofileAppCookiePersistenceProfileToHclTerraform, true)(this._appCookiePersistenceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationpersistenceprofileAppCookiePersistenceProfileList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(applicationpersistenceprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationpersistenceprofileConfigpbAttributesList",
      },
      hdr_persistence_profile: {
        value: cdktf.listMapperHcl(applicationpersistenceprofileHdrPersistenceProfileToHclTerraform, true)(this._hdrPersistenceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationpersistenceprofileHdrPersistenceProfileList",
      },
      http_cookie_persistence_profile: {
        value: cdktf.listMapperHcl(applicationpersistenceprofileHttpCookiePersistenceProfileToHclTerraform, true)(this._httpCookiePersistenceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationpersistenceprofileHttpCookiePersistenceProfileList",
      },
      ip_persistence_profile: {
        value: cdktf.listMapperHcl(applicationpersistenceprofileIpPersistenceProfileToHclTerraform, true)(this._ipPersistenceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationpersistenceprofileIpPersistenceProfileList",
      },
      markers: {
        value: cdktf.listMapperHcl(applicationpersistenceprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationpersistenceprofileMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
