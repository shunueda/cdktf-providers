import * as cdktf from 'cdktf';
import { OvaV2ChecksumOvaSha1Checksum,
ovaV2ChecksumOvaSha1ChecksumToTerraform,
ovaV2ChecksumOvaSha1ChecksumToHclTerraform,
OvaV2ChecksumOvaSha1ChecksumList,
OvaV2ChecksumOvaSha256Checksum,
ovaV2ChecksumOvaSha256ChecksumToTerraform,
ovaV2ChecksumOvaSha256ChecksumToHclTerraform,
OvaV2ChecksumOvaSha256ChecksumList } from './structs0'
export interface OvaV2Checksum {
  /**
  * ova_sha1_checksum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#ova_sha1_checksum OvaV2#ova_sha1_checksum}
  */
  readonly ovaSha1Checksum?: OvaV2ChecksumOvaSha1Checksum[] | cdktf.IResolvable;
  /**
  * ova_sha256_checksum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#ova_sha256_checksum OvaV2#ova_sha256_checksum}
  */
  readonly ovaSha256Checksum?: OvaV2ChecksumOvaSha256Checksum[] | cdktf.IResolvable;
}

export function ovaV2ChecksumToTerraform(struct?: OvaV2ChecksumOutputReference | OvaV2Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ova_sha1_checksum: cdktf.listMapper(ovaV2ChecksumOvaSha1ChecksumToTerraform, true)(struct!.ovaSha1Checksum),
    ova_sha256_checksum: cdktf.listMapper(ovaV2ChecksumOvaSha256ChecksumToTerraform, true)(struct!.ovaSha256Checksum),
  }
}


export function ovaV2ChecksumToHclTerraform(struct?: OvaV2ChecksumOutputReference | OvaV2Checksum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ova_sha1_checksum: {
      value: cdktf.listMapperHcl(ovaV2ChecksumOvaSha1ChecksumToHclTerraform, true)(struct!.ovaSha1Checksum),
      isBlock: true,
      type: "list",
      storageClassType: "OvaV2ChecksumOvaSha1ChecksumList",
    },
    ova_sha256_checksum: {
      value: cdktf.listMapperHcl(ovaV2ChecksumOvaSha256ChecksumToHclTerraform, true)(struct!.ovaSha256Checksum),
      isBlock: true,
      type: "list",
      storageClassType: "OvaV2ChecksumOvaSha256ChecksumList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2ChecksumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OvaV2Checksum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ovaSha1Checksum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovaSha1Checksum = this._ovaSha1Checksum?.internalValue;
    }
    if (this._ovaSha256Checksum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovaSha256Checksum = this._ovaSha256Checksum?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2Checksum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ovaSha1Checksum.internalValue = undefined;
      this._ovaSha256Checksum.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ovaSha1Checksum.internalValue = value.ovaSha1Checksum;
      this._ovaSha256Checksum.internalValue = value.ovaSha256Checksum;
    }
  }

  // ova_sha1_checksum - computed: false, optional: true, required: false
  private _ovaSha1Checksum = new OvaV2ChecksumOvaSha1ChecksumList(this, "ova_sha1_checksum", false);
  public get ovaSha1Checksum() {
    return this._ovaSha1Checksum;
  }
  public putOvaSha1Checksum(value: OvaV2ChecksumOvaSha1Checksum[] | cdktf.IResolvable) {
    this._ovaSha1Checksum.internalValue = value;
  }
  public resetOvaSha1Checksum() {
    this._ovaSha1Checksum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovaSha1ChecksumInput() {
    return this._ovaSha1Checksum.internalValue;
  }

  // ova_sha256_checksum - computed: false, optional: true, required: false
  private _ovaSha256Checksum = new OvaV2ChecksumOvaSha256ChecksumList(this, "ova_sha256_checksum", false);
  public get ovaSha256Checksum() {
    return this._ovaSha256Checksum;
  }
  public putOvaSha256Checksum(value: OvaV2ChecksumOvaSha256Checksum[] | cdktf.IResolvable) {
    this._ovaSha256Checksum.internalValue = value;
  }
  public resetOvaSha256Checksum() {
    this._ovaSha256Checksum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovaSha256ChecksumInput() {
    return this._ovaSha256Checksum.internalValue;
  }
}
export interface OvaV2SourceObjectLiteSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#key OvaV2#key}
  */
  readonly key: string;
}

export function ovaV2SourceObjectLiteSourceToTerraform(struct?: OvaV2SourceObjectLiteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function ovaV2SourceObjectLiteSourceToHclTerraform(struct?: OvaV2SourceObjectLiteSource | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2SourceObjectLiteSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2SourceObjectLiteSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2SourceObjectLiteSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}

export class OvaV2SourceObjectLiteSourceList extends cdktf.ComplexList {
  public internalValue? : OvaV2SourceObjectLiteSource[] | cdktf.IResolvable

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
  public get(index: number): OvaV2SourceObjectLiteSourceOutputReference {
    return new OvaV2SourceObjectLiteSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2SourceOvaUrlSourceBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#password OvaV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#username OvaV2#username}
  */
  readonly username: string;
}

export function ovaV2SourceOvaUrlSourceBasicAuthToTerraform(struct?: OvaV2SourceOvaUrlSourceBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function ovaV2SourceOvaUrlSourceBasicAuthToHclTerraform(struct?: OvaV2SourceOvaUrlSourceBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class OvaV2SourceOvaUrlSourceBasicAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2SourceOvaUrlSourceBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2SourceOvaUrlSourceBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class OvaV2SourceOvaUrlSourceBasicAuthList extends cdktf.ComplexList {
  public internalValue? : OvaV2SourceOvaUrlSourceBasicAuth[] | cdktf.IResolvable

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
  public get(index: number): OvaV2SourceOvaUrlSourceBasicAuthOutputReference {
    return new OvaV2SourceOvaUrlSourceBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2SourceOvaUrlSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#should_allow_insecure_url OvaV2#should_allow_insecure_url}
  */
  readonly shouldAllowInsecureUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#url OvaV2#url}
  */
  readonly url: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#basic_auth OvaV2#basic_auth}
  */
  readonly basicAuth?: OvaV2SourceOvaUrlSourceBasicAuth[] | cdktf.IResolvable;
}

export function ovaV2SourceOvaUrlSourceToTerraform(struct?: OvaV2SourceOvaUrlSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_allow_insecure_url: cdktf.booleanToTerraform(struct!.shouldAllowInsecureUrl),
    url: cdktf.stringToTerraform(struct!.url),
    basic_auth: cdktf.listMapper(ovaV2SourceOvaUrlSourceBasicAuthToTerraform, true)(struct!.basicAuth),
  }
}


export function ovaV2SourceOvaUrlSourceToHclTerraform(struct?: OvaV2SourceOvaUrlSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_allow_insecure_url: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllowInsecureUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: cdktf.listMapperHcl(ovaV2SourceOvaUrlSourceBasicAuthToHclTerraform, true)(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "OvaV2SourceOvaUrlSourceBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2SourceOvaUrlSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2SourceOvaUrlSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAllowInsecureUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllowInsecureUrl = this._shouldAllowInsecureUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2SourceOvaUrlSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAllowInsecureUrl = undefined;
      this._url = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAllowInsecureUrl = value.shouldAllowInsecureUrl;
      this._url = value.url;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // should_allow_insecure_url - computed: true, optional: true, required: false
  private _shouldAllowInsecureUrl?: boolean | cdktf.IResolvable; 
  public get shouldAllowInsecureUrl() {
    return this.getBooleanAttribute('should_allow_insecure_url');
  }
  public set shouldAllowInsecureUrl(value: boolean | cdktf.IResolvable) {
    this._shouldAllowInsecureUrl = value;
  }
  public resetShouldAllowInsecureUrl() {
    this._shouldAllowInsecureUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllowInsecureUrlInput() {
    return this._shouldAllowInsecureUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new OvaV2SourceOvaUrlSourceBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: OvaV2SourceOvaUrlSourceBasicAuth[] | cdktf.IResolvable) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}

export class OvaV2SourceOvaUrlSourceList extends cdktf.ComplexList {
  public internalValue? : OvaV2SourceOvaUrlSource[] | cdktf.IResolvable

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
  public get(index: number): OvaV2SourceOvaUrlSourceOutputReference {
    return new OvaV2SourceOvaUrlSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2SourceOvaVmSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#disk_file_format OvaV2#disk_file_format}
  */
  readonly diskFileFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#vm_ext_id OvaV2#vm_ext_id}
  */
  readonly vmExtId: string;
}

export function ovaV2SourceOvaVmSourceToTerraform(struct?: OvaV2SourceOvaVmSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_file_format: cdktf.stringToTerraform(struct!.diskFileFormat),
    vm_ext_id: cdktf.stringToTerraform(struct!.vmExtId),
  }
}


export function ovaV2SourceOvaVmSourceToHclTerraform(struct?: OvaV2SourceOvaVmSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_file_format: {
      value: cdktf.stringToHclTerraform(struct!.diskFileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.vmExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2SourceOvaVmSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2SourceOvaVmSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskFileFormat = this._diskFileFormat;
    }
    if (this._vmExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmExtId = this._vmExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2SourceOvaVmSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskFileFormat = undefined;
      this._vmExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskFileFormat = value.diskFileFormat;
      this._vmExtId = value.vmExtId;
    }
  }

  // disk_file_format - computed: false, optional: false, required: true
  private _diskFileFormat?: string; 
  public get diskFileFormat() {
    return this.getStringAttribute('disk_file_format');
  }
  public set diskFileFormat(value: string) {
    this._diskFileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileFormatInput() {
    return this._diskFileFormat;
  }

  // vm_ext_id - computed: false, optional: false, required: true
  private _vmExtId?: string; 
  public get vmExtId() {
    return this.getStringAttribute('vm_ext_id');
  }
  public set vmExtId(value: string) {
    this._vmExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmExtIdInput() {
    return this._vmExtId;
  }
}

export class OvaV2SourceOvaVmSourceList extends cdktf.ComplexList {
  public internalValue? : OvaV2SourceOvaVmSource[] | cdktf.IResolvable

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
  public get(index: number): OvaV2SourceOvaVmSourceOutputReference {
    return new OvaV2SourceOvaVmSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OvaV2Source {
  /**
  * object_lite_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#object_lite_source OvaV2#object_lite_source}
  */
  readonly objectLiteSource?: OvaV2SourceObjectLiteSource[] | cdktf.IResolvable;
  /**
  * ova_url_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#ova_url_source OvaV2#ova_url_source}
  */
  readonly ovaUrlSource?: OvaV2SourceOvaUrlSource[] | cdktf.IResolvable;
  /**
  * ova_vm_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/ova_v2#ova_vm_source OvaV2#ova_vm_source}
  */
  readonly ovaVmSource?: OvaV2SourceOvaVmSource[] | cdktf.IResolvable;
}

export function ovaV2SourceToTerraform(struct?: OvaV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_lite_source: cdktf.listMapper(ovaV2SourceObjectLiteSourceToTerraform, true)(struct!.objectLiteSource),
    ova_url_source: cdktf.listMapper(ovaV2SourceOvaUrlSourceToTerraform, true)(struct!.ovaUrlSource),
    ova_vm_source: cdktf.listMapper(ovaV2SourceOvaVmSourceToTerraform, true)(struct!.ovaVmSource),
  }
}


export function ovaV2SourceToHclTerraform(struct?: OvaV2Source | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_lite_source: {
      value: cdktf.listMapperHcl(ovaV2SourceObjectLiteSourceToHclTerraform, true)(struct!.objectLiteSource),
      isBlock: true,
      type: "list",
      storageClassType: "OvaV2SourceObjectLiteSourceList",
    },
    ova_url_source: {
      value: cdktf.listMapperHcl(ovaV2SourceOvaUrlSourceToHclTerraform, true)(struct!.ovaUrlSource),
      isBlock: true,
      type: "list",
      storageClassType: "OvaV2SourceOvaUrlSourceList",
    },
    ova_vm_source: {
      value: cdktf.listMapperHcl(ovaV2SourceOvaVmSourceToHclTerraform, true)(struct!.ovaVmSource),
      isBlock: true,
      type: "list",
      storageClassType: "OvaV2SourceOvaVmSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OvaV2SourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OvaV2Source | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLiteSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLiteSource = this._objectLiteSource?.internalValue;
    }
    if (this._ovaUrlSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovaUrlSource = this._ovaUrlSource?.internalValue;
    }
    if (this._ovaVmSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovaVmSource = this._ovaVmSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OvaV2Source | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectLiteSource.internalValue = undefined;
      this._ovaUrlSource.internalValue = undefined;
      this._ovaVmSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectLiteSource.internalValue = value.objectLiteSource;
      this._ovaUrlSource.internalValue = value.ovaUrlSource;
      this._ovaVmSource.internalValue = value.ovaVmSource;
    }
  }

  // object_lite_source - computed: false, optional: true, required: false
  private _objectLiteSource = new OvaV2SourceObjectLiteSourceList(this, "object_lite_source", false);
  public get objectLiteSource() {
    return this._objectLiteSource;
  }
  public putObjectLiteSource(value: OvaV2SourceObjectLiteSource[] | cdktf.IResolvable) {
    this._objectLiteSource.internalValue = value;
  }
  public resetObjectLiteSource() {
    this._objectLiteSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLiteSourceInput() {
    return this._objectLiteSource.internalValue;
  }

  // ova_url_source - computed: false, optional: true, required: false
  private _ovaUrlSource = new OvaV2SourceOvaUrlSourceList(this, "ova_url_source", false);
  public get ovaUrlSource() {
    return this._ovaUrlSource;
  }
  public putOvaUrlSource(value: OvaV2SourceOvaUrlSource[] | cdktf.IResolvable) {
    this._ovaUrlSource.internalValue = value;
  }
  public resetOvaUrlSource() {
    this._ovaUrlSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovaUrlSourceInput() {
    return this._ovaUrlSource.internalValue;
  }

  // ova_vm_source - computed: false, optional: true, required: false
  private _ovaVmSource = new OvaV2SourceOvaVmSourceList(this, "ova_vm_source", false);
  public get ovaVmSource() {
    return this._ovaVmSource;
  }
  public putOvaVmSource(value: OvaV2SourceOvaVmSource[] | cdktf.IResolvable) {
    this._ovaVmSource.internalValue = value;
  }
  public resetOvaVmSource() {
    this._ovaVmSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovaVmSourceInput() {
    return this._ovaVmSource.internalValue;
  }
}

export class OvaV2SourceList extends cdktf.ComplexList {
  public internalValue? : OvaV2Source[] | cdktf.IResolvable

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
  public get(index: number): OvaV2SourceOutputReference {
    return new OvaV2SourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
