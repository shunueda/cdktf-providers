// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnOrigingroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#id CdnOrigingroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the origin group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#name CdnOrigingroup#name}
  */
  readonly name: string;
  /**
  * Available values: error, timeout, invalid_header, http_403, http_404, http_429, http_500, http_502, http_503, http_504.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#proxy_next_upstream CdnOrigingroup#proxy_next_upstream}
  */
  readonly proxyNextUpstream?: string[];
  /**
  * This options have two possible values: true — The option is active. In case the origin responds with 4XX or 5XX codes, use the next origin from the list. false — The option is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#use_next CdnOrigingroup#use_next}
  */
  readonly useNext?: boolean | cdktf.IResolvable;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#auth CdnOrigingroup#auth}
  */
  readonly auth?: CdnOrigingroupAuth;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#origin CdnOrigingroup#origin}
  */
  readonly origin?: CdnOrigingroupOrigin[] | cdktf.IResolvable;
}
export interface CdnOrigingroupAuth {
  /**
  * Access key ID for the S3 storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#s3_access_key_id CdnOrigingroup#s3_access_key_id}
  */
  readonly s3AccessKeyId: string;
  /**
  * Bucket name of the S3 storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#s3_bucket_name CdnOrigingroup#s3_bucket_name}
  */
  readonly s3BucketName: string;
  /**
  * Region of the S3 storage, required if s3_type is 'amazon'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#s3_region CdnOrigingroup#s3_region}
  */
  readonly s3Region?: string;
  /**
  * Secret access key for the S3 storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#s3_secret_access_key CdnOrigingroup#s3_secret_access_key}
  */
  readonly s3SecretAccessKey: string;
  /**
  * Hostname of the S3 storage, required if s3_type is 'other'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#s3_storage_hostname CdnOrigingroup#s3_storage_hostname}
  */
  readonly s3StorageHostname?: string;
  /**
  * Type of the S3 storage, accepted values: 'other' or 'amazon'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#s3_type CdnOrigingroup#s3_type}
  */
  readonly s3Type: string;
}

export function cdnOrigingroupAuthToTerraform(struct?: CdnOrigingroupAuthOutputReference | CdnOrigingroupAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_access_key_id: cdktf.stringToTerraform(struct!.s3AccessKeyId),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_access_key: cdktf.stringToTerraform(struct!.s3SecretAccessKey),
    s3_storage_hostname: cdktf.stringToTerraform(struct!.s3StorageHostname),
    s3_type: cdktf.stringToTerraform(struct!.s3Type),
  }
}


export function cdnOrigingroupAuthToHclTerraform(struct?: CdnOrigingroupAuthOutputReference | CdnOrigingroupAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3AccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.s3BucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_storage_hostname: {
      value: cdktf.stringToHclTerraform(struct!.s3StorageHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_type: {
      value: cdktf.stringToHclTerraform(struct!.s3Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnOrigingroupAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnOrigingroupAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3AccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessKeyId = this._s3AccessKeyId;
    }
    if (this._s3BucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3BucketName = this._s3BucketName;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretAccessKey = this._s3SecretAccessKey;
    }
    if (this._s3StorageHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3StorageHostname = this._s3StorageHostname;
    }
    if (this._s3Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Type = this._s3Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnOrigingroupAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3AccessKeyId = undefined;
      this._s3BucketName = undefined;
      this._s3Region = undefined;
      this._s3SecretAccessKey = undefined;
      this._s3StorageHostname = undefined;
      this._s3Type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3AccessKeyId = value.s3AccessKeyId;
      this._s3BucketName = value.s3BucketName;
      this._s3Region = value.s3Region;
      this._s3SecretAccessKey = value.s3SecretAccessKey;
      this._s3StorageHostname = value.s3StorageHostname;
      this._s3Type = value.s3Type;
    }
  }

  // s3_access_key_id - computed: false, optional: false, required: true
  private _s3AccessKeyId?: string; 
  public get s3AccessKeyId() {
    return this.getStringAttribute('s3_access_key_id');
  }
  public set s3AccessKeyId(value: string) {
    this._s3AccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessKeyIdInput() {
    return this._s3AccessKeyId;
  }

  // s3_bucket_name - computed: false, optional: false, required: true
  private _s3BucketName?: string; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string) {
    this._s3BucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName;
  }

  // s3_region - computed: false, optional: true, required: false
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  public resetS3Region() {
    this._s3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_access_key - computed: false, optional: false, required: true
  private _s3SecretAccessKey?: string; 
  public get s3SecretAccessKey() {
    return this.getStringAttribute('s3_secret_access_key');
  }
  public set s3SecretAccessKey(value: string) {
    this._s3SecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretAccessKeyInput() {
    return this._s3SecretAccessKey;
  }

  // s3_storage_hostname - computed: false, optional: true, required: false
  private _s3StorageHostname?: string; 
  public get s3StorageHostname() {
    return this.getStringAttribute('s3_storage_hostname');
  }
  public set s3StorageHostname(value: string) {
    this._s3StorageHostname = value;
  }
  public resetS3StorageHostname() {
    this._s3StorageHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageHostnameInput() {
    return this._s3StorageHostname;
  }

  // s3_type - computed: false, optional: false, required: true
  private _s3Type?: string; 
  public get s3Type() {
    return this.getStringAttribute('s3_type');
  }
  public set s3Type(value: string) {
    this._s3Type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3TypeInput() {
    return this._s3Type;
  }
}
export interface CdnOrigingroupOrigin {
  /**
  * true — The option is active. The origin will not be used until one of active origins become unavailable. false — The option is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#backup CdnOrigingroup#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * The setting allows to enable or disable an Origin source in the Origins group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#enabled CdnOrigingroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * IP address or Domain name of your origin and the port if custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#source CdnOrigingroup#source}
  */
  readonly source: string;
}

export function cdnOrigingroupOriginToTerraform(struct?: CdnOrigingroupOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function cdnOrigingroupOriginToHclTerraform(struct?: CdnOrigingroupOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnOrigingroupOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnOrigingroupOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnOrigingroupOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._enabled = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._enabled = value.enabled;
      this._source = value.source;
    }
  }

  // backup - computed: true, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CdnOrigingroupOriginList extends cdktf.ComplexList {
  public internalValue? : CdnOrigingroupOrigin[] | cdktf.IResolvable

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
  public get(index: number): CdnOrigingroupOriginOutputReference {
    return new CdnOrigingroupOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup gcore_cdn_origingroup}
*/
export class CdnOrigingroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_cdn_origingroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnOrigingroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnOrigingroup to import
  * @param importFromId The id of the existing CdnOrigingroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnOrigingroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_cdn_origingroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/cdn_origingroup gcore_cdn_origingroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnOrigingroupConfig
  */
  public constructor(scope: Construct, id: string, config: CdnOrigingroupConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_cdn_origingroup',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
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
    this._name = config.name;
    this._proxyNextUpstream = config.proxyNextUpstream;
    this._useNext = config.useNext;
    this._auth.internalValue = config.auth;
    this._origin.internalValue = config.origin;
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

  // proxy_next_upstream - computed: true, optional: true, required: false
  private _proxyNextUpstream?: string[]; 
  public get proxyNextUpstream() {
    return cdktf.Fn.tolist(this.getListAttribute('proxy_next_upstream'));
  }
  public set proxyNextUpstream(value: string[]) {
    this._proxyNextUpstream = value;
  }
  public resetProxyNextUpstream() {
    this._proxyNextUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNextUpstreamInput() {
    return this._proxyNextUpstream;
  }

  // use_next - computed: false, optional: true, required: false
  private _useNext?: boolean | cdktf.IResolvable; 
  public get useNext() {
    return this.getBooleanAttribute('use_next');
  }
  public set useNext(value: boolean | cdktf.IResolvable) {
    this._useNext = value;
  }
  public resetUseNext() {
    this._useNext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextInput() {
    return this._useNext;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new CdnOrigingroupAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: CdnOrigingroupAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new CdnOrigingroupOriginList(this, "origin", true);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: CdnOrigingroupOrigin[] | cdktf.IResolvable) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      proxy_next_upstream: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxyNextUpstream),
      use_next: cdktf.booleanToTerraform(this._useNext),
      auth: cdnOrigingroupAuthToTerraform(this._auth.internalValue),
      origin: cdktf.listMapper(cdnOrigingroupOriginToTerraform, true)(this._origin.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_next_upstream: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxyNextUpstream),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_next: {
        value: cdktf.booleanToHclTerraform(this._useNext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth: {
        value: cdnOrigingroupAuthToHclTerraform(this._auth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnOrigingroupAuthList",
      },
      origin: {
        value: cdktf.listMapperHcl(cdnOrigingroupOriginToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnOrigingroupOriginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
